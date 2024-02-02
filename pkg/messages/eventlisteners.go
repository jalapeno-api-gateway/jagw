package messages

import (
	"github.com/Shopify/sarama"
	"github.com/sirupsen/logrus"
)

type MessageHandler func(msg KafkaEventMessage)

func StartEventConsumption(topicHandlers map[string]MessageHandler) {
	logrus.Debug("Starting Kafka event consumption.")

	consumer := newSaramaConsumer()
	consumers := make(map[string]sarama.PartitionConsumer)

	for topic := range topicHandlers {
		consumers[topic] = newPartitionConsumer(consumer, topic)
	}

	go func() {
		defer func() {
			closeConsumers(consumer)
			for _, c := range consumers {
				c.Close()
			}
		}()

		for {
			for topic, handler := range topicHandlers {
				select {
				case msg := <-consumers[topic].Messages():
					handler(unmarshalKafkaMessage(msg))
				default:
					continue
				}
			}
		}
	}()
}
