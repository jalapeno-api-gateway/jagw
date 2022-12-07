package requestservice

import (
	"github.com/jalapeno-api-gateway/jagw-go/jagw"
	"github.com/jalapeno-api-gateway/jagw/pkg/influxdb"
	"github.com/sirupsen/logrus"
	"google.golang.org/protobuf/proto"
)

func fetchTelemetryData(logger *logrus.Entry, request *jagw.TelemetryRequest) []string {
	jsonArray := influxdb.Fetch(logger, request)
	return jsonArray
}

func fetchMeasurements(logger *logrus.Entry) []*jagw.Measurement {
	measurementNames := influxdb.FetchMeasurements()

	measurements := []*jagw.Measurement{}
	for _, name := range measurementNames {
		m := jagw.Measurement{
			Name:                       proto.String(name),
			TimestampLatestMeasurement: proto.Int64(fetchLatestTimestamp(logger, name)),
		}
		measurements = append(measurements, &m)
	}

	return measurements
}

func fetchMeasurementColumns(logger *logrus.Entry, measurement string) []*jagw.MeasurementColumn {
	columns := influxdb.FetchColumns(measurement)

	measurementcolumns := []*jagw.MeasurementColumn{}
	for i := 0; i < len(columns[0]); i++ {
		measurementcolumns = append(measurementcolumns, &jagw.MeasurementColumn{
			Name:                 &columns[0][i],
			Type:                 &columns[1][i],
			InfluxType:           &columns[2][i],
			LastValueStringyfied: &columns[3][i],
		})
	}
	return measurementcolumns
}

func fetchLatestTimestamp(logger *logrus.Entry, measurement string) int64 {
	return influxdb.FetchTimestampOfLatestMeasurement(logger, measurement)
}
