package influxdb

import (
	"encoding/json"
	"fmt"
	"strings"
	"time"

	client "github.com/influxdata/influxdb1-client/v2"
	"github.com/jalapeno-api-gateway/jagw-go/jagw"
	"github.com/nqd/flat"
	"github.com/sirupsen/logrus"
)

const (
	InterfaceNameIdentifier           = "interface_name"
	IpAddressIdentifier               = "ip_information/ip_address"
	DataRateIdentifier                = "data_rates/output_data_rate"
	PacketsSentIdentifier             = "interface_statistics/full_interface_stats/packets_sent"
	PacketsReceivedIdentifier         = "interface_statistics/full_interface_stats/packets_received"
	StateIdentifier                   = "state"
	LastStateTransitionTimeIdentifier = "last_state_transition_time"
)

func FetchMeasurements() []string {
	queryString := "show measurements"
	response := queryInflux(queryString)

	measurements := []string{}
	for _, value := range response.Results[0].Series[0].Values {
		measurements = append(measurements, fmt.Sprintf("%v", value[0]))
	}

	return measurements
}

func FetchColumns(measurement string) [][]string {
	tagQueryString := fmt.Sprintf("show tag keys from \"%s\"", measurement)
	fieldQueryString := fmt.Sprintf("show field keys from \"%s\"", measurement)

	tagResponse := queryInflux(tagQueryString)
	fieldResponse := queryInflux(fieldQueryString)

	columns := [][]string{{}, {}, {}, {}}
	for _, value := range tagResponse.Results[0].Series[0].Values {
		columns[0] = append(columns[0], fmt.Sprintf("%v", value[0]))
		columns[1] = append(columns[1], "string")
		columns[2] = append(columns[2], "tag")
	}
	for _, value := range fieldResponse.Results[0].Series[0].Values {
		columns[0] = append(columns[0], fmt.Sprintf("%v", value[0]))
		columns[1] = append(columns[1], fmt.Sprintf("%v", value[1]))
		columns[2] = append(columns[2], "field")
	}

	latestMeasurementQueryString := fmt.Sprintf("select * from \"%s\" limit 1", measurement)
	latestMeasurementResponse := queryInflux(latestMeasurementQueryString)
	latestMeasurements := latestMeasurementResponse.Results[0].Series[0]

	columns[3] = make([]string, len(columns[0]))

	for i, property := range columns[0] {
		for j, measurementProperty := range latestMeasurements.Columns {
			if property == measurementProperty {
				if latestMeasurements.Values[0][j] == nil {
					columns[3][i] = ""
				} else if columns[1][i] == "string" {
					columns[3][i] = fmt.Sprintf("\"%v\"", latestMeasurements.Values[0][j])
				} else {
					if latestMeasurements.Values[0][j] == nil {
						columns[3][i] = fmt.Sprintf("%v", latestMeasurements.Values[0][j])
					}
				}
				break
			}
		}
	}

	return columns
}

func FetchTimestampOfLatestMeasurement(logger *logrus.Entry, measurement string) int64 {
	fieldQueryString := fmt.Sprintf("show field keys from \"%s\"", measurement)
	fieldResponse := queryInflux(fieldQueryString)

	// For the request we have to provide at least one field name.
	// InfluxDb mandates at least one field per measurement, therefore we can be sure that the first value in the fieldResponse is set.
	firstField := fieldResponse.Results[0].Series[0].Values[0][0]
	queryString := fmt.Sprintf("select last(\"%s\") from \"%s\"", firstField, measurement)
	response := queryInflux(queryString)

	timestampString := fmt.Sprintf("%v", response.Results[0].Series[0].Values[0][0])
	timestampUnix, err := time.Parse("2006-01-02T15:04:05Z", timestampString)
	if err != nil {
		logger.WithError(err).Panic("Failed to parse timestamp.")
	}

	return timestampUnix.Unix()
}

func Fetch(logger *logrus.Entry, request *jagw.TelemetryRequest) []string {
	selection := formatSelection(request.Properties)
	filters := formatFilters(request)
	queryString := fmt.Sprintf("select %s FROM \"%s\" %s", selection, *request.SensorPath, filters)

	response := queryInflux(queryString)

	if len(response.Results[0].Series) == 0 {
		return []string{}
	}

	return createJsonArray(response, request.Unflatten)
}

func formatSelection(properties []string) string {
	if len(properties) == 0 {
		return "*"
	}

	var b strings.Builder
	for i, property := range properties {
		b.Reset()
		if property == "*" {
			b.WriteString(property)
		} else if strings.Contains(property, "*") {
			// TODO This is not allowed, return error or something
		} else {
			b.WriteString("\"")
			b.WriteString(property)
			b.WriteString("\"")
		}
		properties[i] = b.String()
	}
	return strings.Join(properties, ", ")
}

func formatFilters(request *jagw.TelemetryRequest) string {
	var b strings.Builder

	if len(request.StringFilters) > 0 {
		formatStringFilters("WHERE ", &b, request.StringFilters, 0)
	}

	if request.RangeFilter == nil {
		return b.String() + " limit 1"
	} else {
		if b.Len() > 0 {
			formatRangeFilter(" AND ", &b, request.RangeFilter)
		} else {
			formatRangeFilter("WHERE ", &b, request.RangeFilter)

		}
		return b.String()
	}
}

func formatStringFilters(prefix string, b *strings.Builder, stringFilters []*jagw.StringFilter, index int) {
	if index >= len(stringFilters) {
		return
	}

	b.WriteString(prefix)

	b.WriteString("\"")
	b.WriteString(*stringFilters[index].Property)
	b.WriteString("\"")
	switch *stringFilters[index].Operator {
	case jagw.StringOperator_EQUAL:
		b.WriteString(" = ")
	case jagw.StringOperator_NOT_EQUAL:
		b.WriteString(" != ")
	}
	b.WriteString("'")
	b.WriteString(*stringFilters[index].Value)
	b.WriteString("'")

	formatStringFilters(" AND ", b, stringFilters, index+1)
}

func formatRangeFilter(prefix string, b *strings.Builder, rangeFilter *jagw.RangeFilter) {
	b.WriteString(prefix)
	b.WriteString("time >= ")
	fmt.Fprintf(b, "%d", *rangeFilter.EarliestTimestamp)
	b.WriteString(" AND ")
	b.WriteString("time <= ")
	if rangeFilter.LatestTimestamp == nil {
		b.WriteString("now()")
	} else {
		fmt.Fprintf(b, "%d", *rangeFilter.LatestTimestamp)
	}
}

/*
Response from InfluxDb looks something like this:
{
  "Results": [
    {
      "statement_id": 0,
      "Series": [
        {
          "name": "Cisco-IOS-XR-pfi-im-cmd-oper:interfaces/interface-xr/interface",
          "columns": [
            "time",
            "data_rates/output_data_rate"
          ],
          "values": [
            [
              "2022-01-13T11:22:06.721Z",
              1
            ],
            [
              "2022-01-13T11:22:06.727Z",
              1
            ],
            [
              "2022-01-13T11:22:06.739Z",
              1
            ],
            [
              "2022-01-13T11:22:06.758Z",
              53
            ]
          ]
        }
      ],
      "Messages": null
    }
  ]
}
*/
func createJsonArray(response *client.Response, unflatten *bool) []string {
	series := response.Results[0].Series[0]

	jsonMeasurements := make([]string, len(series.Values))
	for i := 0; i < len(jsonMeasurements); i++ {
		jsonMeasurements[i] = createSingleJson(series.Columns, series.Values[i], unflatten)
	}

	return jsonMeasurements
}

func createSingleJson(propertyNames []string, values []interface{}, unflatten *bool) string {
	m := make(map[string]interface{}, len(propertyNames))
	for i := 0; i < len(propertyNames); i++ {
		m[propertyNames[i]] = values[i]
	}

	if unflatten != nil && *unflatten {
		m = Unflatten(m)
	}

	bytes, err := json.Marshal(m)
	if err != nil {
		logrus.WithError(err).Panic("Failed to marshal map.")
	}

	return string(bytes)
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
func Unflatten(m map[string]interface{}) map[string]interface{} {
	out, err := flat.Unflatten(m, &flat.Options{Delimiter: "/"})
	if err != nil {
		logrus.WithError(err).Panic("Failed to unflatten map.")
	}
	return out
}
