package messages

import (
	"encoding/json"

	"github.com/Shopify/sarama"
	"github.com/sirupsen/logrus"
)

func unmarshalKafkaMessage(msg *sarama.ConsumerMessage) KafkaEventMessage {
	var event KafkaEventMessage
	err := json.Unmarshal(msg.Value, &event)
	if err != nil {
		logrus.WithError(err).Panic("Failed to unmarshal Kafka message.")
	}
	return event
}
