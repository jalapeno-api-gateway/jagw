package messages

import protocol "github.com/influxdata/line-protocol"

const LSNODE_KAFKA_TOPIC = "gobmp.parsed.ls_node_events"
const LSLINK_KAFKA_TOPIC = "gobmp.parsed.ls_link_events"
const LSPREFIX_KAFKA_TOPIC = "gobmp.parsed.ls_prefix_events"
const LSSRV6SID_KAFKA_TOPIC = "gobmp.parsed.ls_srv6_sid_events"
const LSNODE_EDGE_KAFKA_TOPIC = "jalapeno.ls_node_edge_events"
const TELEMETRY_KAFKA_TOPIC = "jalapeno.telemetry"

type KafkaEventMessage struct {
	TopicType int    `json:"TopicType,omitempty"`
	Key       string `json:"_key,omitempty"`
	Id        string `json:"_id,omitempty"`
	Action    string `json:"action,omitempty"`
}

type TopologyEvent struct {
	Action   string
	Key      string
	Document interface{}
}

type TelemetryEvent struct {
	Measurement string
	Metric      protocol.Metric
}
