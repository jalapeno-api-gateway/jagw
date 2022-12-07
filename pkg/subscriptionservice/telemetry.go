package subscriptionservice

import (
	"encoding/json"

	protocol "github.com/influxdata/line-protocol"
	"github.com/jalapeno-api-gateway/jagw-go/jagw"
	"github.com/jalapeno-api-gateway/jagw/pkg/helpers"
	"github.com/nqd/flat"
	"github.com/sirupsen/logrus"
	"google.golang.org/protobuf/proto"
)

const (
	TimeIdentifier = "time"
	NameIdentifier = "measurement"
)

func createTelemetryResponse(metric protocol.Metric, properties []string, unflatten bool) *jagw.TelemetryEvent {
	m := make(map[string]interface{})
	m[TimeIdentifier] = metric.Time()
	m[NameIdentifier] = metric.Name()

	if len(properties) == 0 {
		createMapForAll(&m, metric)
	} else {
		createMapForSelection(&m, metric, properties)
	}

	if unflatten {
		Unflatten(&m)
	}

	bytes, err := json.Marshal(m)
	if err != nil {
		logrus.WithError(err).Panic("Failed to marshal map.")
	}

	return &jagw.TelemetryEvent{TelemetryData: proto.String(string(bytes))}
}

func createMapForSelection(m *map[string]interface{}, metric protocol.Metric, properties []string) {
	for i := 0; i < len(properties); i++ {
		value, err := helpers.GetValueByPropertyName(metric, properties[i])
		if err == nil {
			(*m)[properties[i]] = value
		}
	}
}

func createMapForAll(m *map[string]interface{}, metric protocol.Metric) {
	for _, tag := range metric.TagList() {
		(*m)[tag.Key] = tag.Value
	}
	for _, field := range metric.FieldList() {
		(*m)[field.Key] = field.Value
	}
}

/*
Unflatten converts this...

	map[string]interface{}{
		"foo_foo/bar_bar": "t",
		"foo_foo/boo_bii": 17
		"foo_fii": 456,
	}

to this...

	map[string]interface{}{
	    "foo_foo": map[string]interface{}{
	        "bar_bar": "t",
			"boo_bii": 17
	    },
	        "foo_fii": 456,
	    },
	}

*/
func Unflatten(m *map[string]interface{}) {
	out, err := flat.Unflatten(*m, &flat.Options{Delimiter: "/"})
	if err != nil {
		logrus.WithError(err).Panic("Failed to unflatten map.")
	}
	(*m) = out
}
