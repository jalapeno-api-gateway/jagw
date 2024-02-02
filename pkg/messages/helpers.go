package messages

import (
	"encoding/json"

	"github.com/Shopify/sarama"
	"github.com/jalapeno-api-gateway/jagw/pkg/model/class"
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

func GetCacheServiceMessageHandlers() map[string]MessageHandler {
	return map[string]MessageHandler{
		LSNODE_KAFKA_TOPIC: func(msg KafkaEventMessage) {
			LsNodeEvents <- msg
		},
		LSLINK_KAFKA_TOPIC: func(msg KafkaEventMessage) {
			LsLinkEvents <- msg
		},
		LSPREFIX_KAFKA_TOPIC: func(msg KafkaEventMessage) {
			LsPrefixEvents <- msg
		},
		LSSRV6SID_KAFKA_TOPIC: func(msg KafkaEventMessage) {
			LsSrv6SidEvents <- msg
		},
		LSNODE_EDGE_KAFKA_TOPIC: func(msg KafkaEventMessage) {
			LsNodeEdgeEvents <- msg
		},
	}
}

func GetSubscriptionServiceMessageHandlers() map[string]MessageHandler {
	return map[string]MessageHandler{
		LSNODE_KAFKA_TOPIC: func(msg KafkaEventMessage) {
			handleTopologyEvent(msg, class.LsNode)
		},
		LSLINK_KAFKA_TOPIC: func(msg KafkaEventMessage) {
			handleTopologyEvent(msg, class.LsLink)
		},
		LSPREFIX_KAFKA_TOPIC: func(msg KafkaEventMessage) {
			handleTopologyEvent(msg, class.LsPrefix)
		},
		LSSRV6SID_KAFKA_TOPIC: func(msg KafkaEventMessage) {
			handleTopologyEvent(msg, class.LsSrv6Sid)
		},
		LSNODE_EDGE_KAFKA_TOPIC: func(msg KafkaEventMessage) {
			handleTopologyEvent(msg, class.LsNodeEdge)
		},
	}
}
