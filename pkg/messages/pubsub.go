package messages

import (
	"context"
	"errors"
	"sync"

	"github.com/google/uuid"
	"github.com/sirupsen/logrus"
)

type Subscription struct {
	id     string
	events chan *interface{}
	abort  chan struct{}
	topic  *threadSafeTopic
}

type threadSafeTopic struct {
	name string
	sync.Mutex
	subscriptions []*Subscription
}

var LsNodeTopic *threadSafeTopic
var LsLinkTopic *threadSafeTopic
var LsPrefixTopic *threadSafeTopic
var LsSrv6SidTopic *threadSafeTopic
var LsNodeEdgeTopic *threadSafeTopic

var telemetryTopics []*threadSafeTopic

func InitializeTopics() {
	logrus.Debug("Initializing PubSub Topics")
	LsNodeTopic = &threadSafeTopic{}
	LsLinkTopic = &threadSafeTopic{}
	LsPrefixTopic = &threadSafeTopic{}
	LsSrv6SidTopic = &threadSafeTopic{}
	LsNodeEdgeTopic = &threadSafeTopic{}

	telemetryTopics = []*threadSafeTopic{}
}

func (topic *threadSafeTopic) Subscribe(logger *logrus.Entry) *Subscription {
	logger.Debug("Subscribing to topic.")
	s := topic.createNewSubscription()

	topic.Lock()
	defer topic.Unlock()

	topic.subscriptions = append(topic.subscriptions, s)
	return s
}

func (s *Subscription) Unsubscribe(logger *logrus.Entry) {
	s.topic.Lock()
	defer s.topic.Unlock()

	for index, subscription := range s.topic.subscriptions { // Find subscription index in array
		if subscription.id == s.id {
			s.topic.subscriptions = append(s.topic.subscriptions[:index], s.topic.subscriptions[index+1:]...) // Remove subscription from array
			return
		}
	}
	logger.Panic("Error when trying to remove subscription from slice")
}

func (topic *threadSafeTopic) createNewSubscription() *Subscription {
	return &Subscription{
		id:     uuid.New().String(),
		events: nil,
		abort:  nil,
		topic:  topic,
	}
}

func (topic *threadSafeTopic) Publish(event interface{}) {
	topic.Lock()
	defer topic.Unlock()

	for _, subscription := range topic.subscriptions {
		select {
		case <-subscription.abort:
		case subscription.events <- &event:
		}
	}
}

func (subscription *Subscription) Receive(ctx context.Context, callback func(event *interface{})) {
	initializeSubscription(subscription)

loop:
	for {
		select {
		case <-ctx.Done():
			close(subscription.abort)
			break loop
		case event := <-subscription.events:
			callback(event)
		}
	}
}

func initializeSubscription(subscription *Subscription) {
	subscription.events = make(chan *interface{})
	subscription.abort = make(chan struct{})
}

func PublishTelemetry(measurement string, telemetryEvent TelemetryEvent) {
	for _, topic := range telemetryTopics {
		if topic.name == measurement {
			topic.Publish(telemetryEvent)
			return
		}
	}
	logrus.WithField("measurement", measurement).Debug("Creating new PubSub topic.")
	topic := createTelemetryTopic(measurement)
	topic.Publish(telemetryEvent)
}

func ensureTelemetryTopic(measurement string) *threadSafeTopic {
	topic, err := GetTelemetryTopic(measurement)
	if err != nil {
		return topic
	}
	return createTelemetryTopic(measurement)
}

func GetTelemetryTopic(measurement string) (*threadSafeTopic, error) {
	for _, topic := range telemetryTopics {
		if topic.name == measurement {
			return topic, nil
		}
	}
	return nil, errors.New("No topic found for this measurement.")
}

func createTelemetryTopic(measurement string) *threadSafeTopic {
	topic := &threadSafeTopic{name: measurement}
	telemetryTopics = append(telemetryTopics, topic)
	return topic
}
