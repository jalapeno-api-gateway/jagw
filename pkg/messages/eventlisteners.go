package messages

import (
	"github.com/jalapeno-api-gateway/jagw/pkg/model/class"
	"github.com/sirupsen/logrus"
)

func StartEventConsumption() {
	logrus.Debug("Starting Kafka event consumption.")

	consumer := newSaramaConsumer()
	lsNodeEventsConsumer := newPartitionConsumer(consumer, LSNODE_KAFKA_TOPIC)
	lsLinkEventsConsumer := newPartitionConsumer(consumer, LSLINK_KAFKA_TOPIC)
	lsPrefixEventsConsumer := newPartitionConsumer(consumer, LSPREFIX_KAFKA_TOPIC)
	lsSrv6SidEventsConsumer := newPartitionConsumer(consumer, LSSRV6SID_KAFKA_TOPIC)
	lsNodeEdgeEventsConsumer := newPartitionConsumer(consumer, LSNODE_EDGE_KAFKA_TOPIC)
	telemetryConsumer := newPartitionConsumer(consumer, TELEMETRY_KAFKA_TOPIC)

	go func() {
		defer func() {
			closeConsumers(
				consumer,
				lsNodeEventsConsumer,
				lsLinkEventsConsumer,
				lsPrefixEventsConsumer,
				lsSrv6SidEventsConsumer,
				lsNodeEdgeEventsConsumer,
				telemetryConsumer,
			)
		}()

		for {
			select {
			case msg := <-lsNodeEventsConsumer.Messages():
				handleTopologyEvent(unmarshalKafkaMessage(msg), class.LsNode)
			case msg := <-lsLinkEventsConsumer.Messages():
				handleTopologyEvent(unmarshalKafkaMessage(msg), class.LsLink)
			case msg := <-lsPrefixEventsConsumer.Messages():
				handleTopologyEvent(unmarshalKafkaMessage(msg), class.LsPrefix)
			case msg := <-lsSrv6SidEventsConsumer.Messages():
				handleTopologyEvent(unmarshalKafkaMessage(msg), class.LsSrv6Sid)
			case msg := <-lsNodeEdgeEventsConsumer.Messages():
				handleTopologyEvent(unmarshalKafkaMessage(msg), class.LsNodeEdge)
			case msg := <-telemetryConsumer.Messages():
				handleTelemetryEvent(string(msg.Value))
			}
		}
	}()
}
