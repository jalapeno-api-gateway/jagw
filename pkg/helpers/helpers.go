package helpers

import (
	"errors"
	"os"
	"os/signal"

	protocol "github.com/influxdata/line-protocol"
)

func WatchInterruptSignals() chan os.Signal {
	signals := make(chan os.Signal, 1)
	signal.Notify(signals, os.Interrupt)
	return signals
}

func GetValueByPropertyName(metric protocol.Metric, propertyName string) (interface{}, error) {
	for _, tag := range metric.TagList() {
		if tag.Key == propertyName {
			return tag.Value, nil
		}
	}
	for _, field := range metric.FieldList() {
		if field.Key == propertyName {
			return field.Value, nil
		}
	}
	return "", errors.New("Property not found in Metric.")
}

func IsInSlice(slice []string, value string) bool {
	for _, elem := range slice {
		if elem == value {
			return true
		}
	}
	return false
}
