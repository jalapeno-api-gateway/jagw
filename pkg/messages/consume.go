package messages

import (
	"os"

	"github.com/IBM/sarama"
	"github.com/sirupsen/logrus"
)

func newSaramaConsumer() sarama.Consumer {
	consumer, err := sarama.NewConsumer([]string{os.Getenv("KAFKA_ADDRESS")}, sarama.NewConfig())
	if err != nil {
		logrus.WithError(err).Panic("Failed to create Sarama Consumer.")
	}
	return consumer
}

func newPartitionConsumer(consumer sarama.Consumer, topic string) sarama.PartitionConsumer {
	partitionConsumer, err := consumer.ConsumePartition(topic, 0, sarama.OffsetNewest)
	if err != nil {
		logrus.WithError(err).Panic("Failed to create Sarama PartitionConsumer.")
	}
	return partitionConsumer
}

func closeConsumers(consumer sarama.Consumer, partitionConsumers ...sarama.PartitionConsumer) {
	logrus.Debug("Closing Sarama consumers.")

	if err := consumer.Close(); err != nil {
		logrus.WithError(err).Panic("Failed to close Sarama Consumer.")
	}

	for _, c := range partitionConsumers {
		if err := c.Close(); err != nil {
			logrus.WithError(err).Panic("Failed to close Sarama PartitionConsumer.")
		}
	}
}
