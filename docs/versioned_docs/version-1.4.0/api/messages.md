---
sidebar_position: 3
title: "Messages"
---

import TOCInline from "@theme/TOCInline"

## Request Service

<TOCInline toc={toc[toc.length - 6].children}/>

## Subscription Service

<TOCInline toc={toc[toc.length - 5].children}/>

## Common

<TOCInline toc={toc[toc.length - 4].children}/>

## Base

<TOCInline toc={toc[toc.length - 3].children}/>

## Filters

<TOCInline toc={toc[toc.length - 2].children}/>

## Enums

<TOCInline toc={toc[toc.length - 1].children}/>


## About Messages

This sections lists all `protobuf` messages defined by the services of the Jalapeño API Gateway.

:::info 'required', 'optional' & 'repeated'
All properties that are preceded by either the **optional** or **required** keyword do not contain the actual value, but rather pointers to those values. This is due to the implementation of [proto2](https://developers.google.com/protocol-buffers/docs/proto).

The reason for this design choice is explained in the section [Why use proto2 instead of proto3?](../design/design-choices#why-use-proto2-instead-of-proto3).
:::

## Request Messages

### `MeasurementsRequest`

```protobuf
message MeasurementsRequest {}
```

### `MeasurementsResponse`

```protobuf
message MeasurementsResponse {
    repeated Measurement measurements = 1;
}
```

### `Measurement`

```protobuf
message Measurement {
    required string name = 1;
    required int64 timestamp_latest_measurement = 2;
}
```

### `MeasurementDetailsRequest`

```protobuf
message MeasurementDetailsRequest {
    required string name = 1;
}
```

### `MeasurementDetailsResponse`

```protobuf
message MeasurementDetailsResponse {
    required int64 timestamp_latest_measurement = 1;
    repeated MeasurementColumn columns = 2;
}
```

### `MeasurementColumn`

```protobuf
message MeasurementColumn {
    required string name = 1;
    required string type = 2;
    required string influx_type = 3;
    required string last_value_stringyfied = 4;
}
```

### `TopologyRequest`

```protobuf
message TopologyRequest {
    repeated string keys = 1;
    repeated string properties = 2;
}
```

### `TelemetryRequest`

```protobuf
message TelemetryRequest {
    required string sensor_path = 1;
    repeated string properties = 2;
    optional bool Unflatten = 3;
    repeated StringFilter string_filters = 4;
    optional RangeFilter range_filter = 5;
}
```

### `StringFilter`

```protobuf
message StringFilter {
    required string property = 1;
    required string value = 2;
    required StringOperator operator = 3;
}
```

### `RangeFilter`

```protobuf
message RangeFilter {
    required int64 earliest_timestamp = 3;
    optional int64 latest_timestamp = 4;    
}

```

### `LsNodeResponse`

```protobuf
message LsNodeResponse {
    repeated LsNode ls_nodes = 1;
}
```

### `LsLinkResponse`

```protobuf
message LsLinkResponse {
    repeated LsLink ls_links = 1;
}
```

### `LsPrefixResponse`

```protobuf
message LsPrefixResponse {
    repeated LsPrefix ls_prefixes = 1;
}
```

### `LsSrv6SidResponse`

```protobuf
message LsSrv6SidResponse {
    repeated LsSrv6Sid ls_srv6_sids = 1;
}
```

### `LsNodeEdgeResponse`

```protobuf
message LsNodeEdgeResponse {
    repeated LsNodeEdge ls_node_edges = 1;
}
```

### `LsNodeCoordinatesResponse`
```protobuf
message LsNodeCoordinatesResponse {
    repeated LsNodeCoordinates coordinates = 1;
}
```

### `PeerResponse`
```protobuf
message PeerResponse {
    repeated Peer peer = 1;
}
```

### `TelemetryResponse`

```protobuf
message TelemetryResponse {
    repeated string telemetry_data = 1;
}
```

## Subscription Messages

### `TopologySubscription`

```protobuf
message TopologySubscription {
    repeated string keys = 1;
    repeated string properties = 2;
}
```

### `TelemetrySubscription`

```protobuf
message TelemetrySubscription {
    required string sensor_path = 1;
    repeated string properties = 2;
    optional bool Unflatten = 3;
    repeated StringFilter string_filters = 4;
}
```

### `LsNodeEvent`

```protobuf
message LsNodeEvent {
    required string action = 1;
    required string key = 2;
    optional LsNode ls_node = 3;
}
```

### `LsLinkEvent`

```protobuf
message LsLinkEvent {
    required string action = 1;
    required string key = 2;
    optional LsLink ls_link = 3;
}
```

### `LsPrefixEvent`

```protobuf
message LsPrefixEvent {
    required string action = 1;
    required string key = 2;
    optional LsPrefix ls_prefix = 3;
}
```

### `LsSrv6SidEvent`

```protobuf
message LsSrv6SidEvent {
    required string action = 1;
    required string key = 2;
    optional LsSrv6Sid ls_srv6_sid = 3;
}
```

### `LsNodeEdgeEvent`

```protobuf
message LsNodeEdgeEvent {
    required string action = 1;
    required string key = 2;
    optional LsNodeEdge ls_node_edge = 3;
}
```

### `PeerEvent`
```protobuf
message PeerEvent {
    required string action = 1;
    required string key = 2;
    optional Peer peer = 3;
}
```

### `TelemetryEvent`

```protobuf
message TelemetryEvent {
    required string telemetry_data = 1;
}
```

## Common Messages

These messages are used by both the **Request Service** and the **Subscription Service**.

### `LsNode`

```protobuf
message LsNode {
	required string key = 1;
	optional string id = 2;
	optional string router_hash = 3;
	optional int64 domain_id = 4;
	optional string router_ip = 5;
	optional string peer_hash = 6;
	optional string peer_ip = 7;
	optional uint32 peer_asn = 8;
	optional string timestamp = 9;
	optional string igp_router_id = 10;
	optional uint32 asn = 11;
	repeated MultiTopologyIdentifier mtid = 12;
	optional string area_id = 13;
	optional string protocol = 14;
	optional uint32 protocol_id = 15; // protobuf does not support uint8
	optional string name = 16;
	optional string rev = 17;
	optional uint32 peer_type = 18; // protobuf does not support uint8
	repeated uint32 sr_algorithm = 19; 
	optional Srv6CapabilitiesTlv srv6_capabilities_tlv = 20;
	repeated NodeMsd node_msd = 21;	
	repeated FlexAlgoDefinition flex_algo_definition = 22;
	optional bool is_adj_rib_in_post_policy = 23;
	optional bool is_adj_rib_out_post_policy = 24;
	optional bool is_loc_rib_filtered = 25;
}
```

### `LsLink`

```protobuf
message LsLink {
	required string key = 1;
	optional string id = 2;
	optional string router_hash = 3;
	optional string router_ip = 4;
	optional int64 domain_id = 5;
	optional string peer_hash = 6;
	optional string peer_ip = 7;
	optional uint32 peer_asn = 8;
	optional string timestamp = 9;
	optional string igp_router_id = 10;
	optional string protocol = 11;
	optional string area_id = 12;
	optional string nexthop = 13;
	optional MultiTopologyIdentifier mtid = 14;
	optional uint32 local_link_id = 15;
	optional uint32 remote_link_id = 16;
	optional string local_link_ip = 17;
	optional string remote_link_ip = 18;
	optional uint32 igp_metric = 19;
	optional string remote_node_hash = 20;
	optional string local_node_hash = 21;
	optional string remote_igp_router_id = 22;
	optional uint32 unidir_link_delay = 23;
	repeated uint32 unidir_link_delay_min_max = 24;
	optional uint64 max_link_bw_kbps = 25;
	optional uint32 unidir_delay_variation = 26;
	optional uint32 unidir_packet_loss = 27;
	optional uint32 unidir_residual_bw = 28;
	optional uint32 unidir_available_bw = 29;
	optional uint32 unidir_bw_utilization = 30;
	optional double normalized_unidir_link_delay = 31;
	optional double normalized_unidir_delay_variation = 32;
	optional double normalized_unidir_packet_loss = 33;
	optional double unidir_packet_loss_percentage = 34;
	optional string rev = 35;
	optional uint32 peer_type = 36; // protobuf does not support uint8
	optional uint32 protocol_id = 37; // protobuf does not support uint8
	optional uint32 local_node_asn = 38;
	optional uint32 remote_node_asn = 39;
	repeated Srv6EndXSidTlv srv6_endx_sid = 40;
	optional bool is_adj_rib_in_post = 41;
	optional bool is_adj_rib_out_post = 42;
	optional bool is_loc_rib_filtered = 43;
}
```

### `LsPrefix`

```protobuf
message LsPrefix {
	required string key = 1;
	optional string id = 2;
	optional string router_hash = 3;
	optional string router_ip = 4;
	optional int64 domain_id = 5;
	optional string peer_hash = 6;
	optional string peer_ip = 7;
	optional uint32 peer_asn = 8;
	optional string timestamp = 9;
	optional string igp_router_id = 10;
	optional string protocol = 11;
	optional string area_id = 12;
	optional string nexthop = 13;
	optional string local_node_hash = 14;
	optional MultiTopologyIdentifier mtid = 15;
	optional string prefix = 16;
	optional int32 prefix_len = 17;
	optional uint32 prefix_metric = 18;
	optional string rev = 19;
	optional uint32 peer_type = 20; // protobuf does not support uint8
	optional uint32 protocol_id = 21; // protobuf does not support uint8
	optional Srv6LocatorTlv srv6_locator = 22;
	optional bool is_adj_rib_in_post = 23;
	optional bool is_adj_rib_out_post = 24;
	optional bool is_loc_rib_filtered = 25;
}

```

### `LsSrv6Sid`

```protobuf
message LsSrv6Sid {
	required string key = 1;
	optional string id = 2;
	optional string router_hash = 3;
	optional string router_ip = 4;
	optional int64 domain_id = 5;
	optional string peer_hash = 6;
	optional string peer_ip = 7;
	optional uint32 peer_asn = 8;
	optional string timestamp = 9;
	optional string igp_router_id = 10;
	optional uint32 local_node_asn = 11;
	optional string protocol = 12;
	optional string nexthop = 13;
	optional string local_node_hash = 14;
	optional MultiTopologyIdentifier mtid = 15;
	optional uint32 igp_flags = 16; // protobuf does not support uint8
	optional string srv6_sid = 17;
	optional string rev = 18;
	optional uint32 peer_type = 19; // protobuf does not support uint8
	optional uint32 protocol_id = 20; // protobuf does not support uint8
	optional Srv6EndpointBehavior srv6_endpoint_behavior = 21;
	optional Srv6SidStructure srv6_sid_structure = 22;
	optional bool is_adj_rib_in_post = 23;
	optional bool is_adj_rib_out_post = 24;
	optional bool is_loc_rib_filtered = 25;
}
```

### `LsNodeEdge`

```protobuf
message LsNodeEdge {
    required string key = 1;
    optional string id = 2;
    optional string from = 3;
    optional string to = 4;
    optional string link = 5;
}
```

### `LsNodeCoordinates`
```protobuf
message LsNodeCoordinates {
	required string key = 1;
	optional string id = 2;
	required string ls_node_key = 3;
	required double latitude = 4;
	required double longitude = 5;
}
```

### `Peer`
```protobuf
message Peer{
	required string key = 1;
	optional string id = 2;
	optional string router_hash = 3;
	optional string remote_bgp_id = 4;
	optional string local_bgp_id = 5;
}
```

## Base Messages

### `MultiTopologyIdentifier`

```protobuf
message MultiTopologyIdentifier {
    required bool o_flag = 1;
    required bool a_flag = 2;
    required uint32 mtid = 3; // protobuf does not support uint16
}
```
### `Srv6CapabilitiesTlv`

```protobuf
message Srv6CapabilitiesTlv {    
    required bool o_flag = 1;
}
```

### `NodeMsd`

```protobuf
message NodeMsd {
    required uint32 msd_type = 1; // protobuf does not support uint8
    required uint32 msd_value = 2; // protobuf does not support uint8
}
```

### `FlexAlgoDefinition`

```protobuf
message FlexAlgoDefinition {
    required uint32 flex_algo = 1; // protobuf does not support uint8
    required uint32 metric_type = 2; // protobuf does not support uint8
    required uint32 calculation_type = 3; // protobuf does not support uint8
    required uint32 priority = 4; // protobuf does not support uint8
}
```

### `Srv6EndXSidFlags`

```protobuf
message Srv6EndXSidFlags {
    required bool b_flag = 1;
    required bool s_flag = 2;
    required bool p_flag = 3;
}
```

### `Srv6EndXSidTlv`

```protobuf
message Srv6EndXSidTlv {
    optional uint32 type = 1; // protobuf does not support uint16
    optional uint32 length = 2; // protobuf does not support uint16
    required uint32 endpoint_behavior = 3; // protobuf does not support uint16
    optional Srv6EndXSidFlags flags = 4;
    required uint32 algorithm = 5; // protobuf does not support uint8
    required uint32 weight = 6; // protobuf does not support uint8
    optional string sid = 7;
}
```

### `Srv6LocatorFlags`

```protobuf
message Srv6LocatorFlags {
    required bool d_flag = 1;
}
```

### `Srv6LocatorTlv`

```protobuf
message Srv6LocatorTlv {
    optional Srv6LocatorFlags flags = 1;
    required uint32 algo = 2; // protobuf does not support uint8
    required uint32 metric = 3;
}
```

### `Srv6EndpointBehavior`

```protobuf
message Srv6EndpointBehavior {
    required uint32 endpoint_behavior = 1; // protobuf does not support uint16
    required uint32 flag = 2; // protobuf does not support uint8
    required uint32 algorithm = 3; // protobuf does not support uint8
}
```

### `Srv6SidStructure`

```protobuf
message Srv6SidStructure {
    optional uint32 type = 1; // protobuf does not support uint16
    optional uint32 length = 2; // protobuf does not support uint16
    required uint32 locator_block_length = 3; // protobuf does not support uint8
    required uint32 locator_node_length = 4; // protobuf does not support uint8
    required uint32 function_length = 5; // protobuf does not support uint8
    required uint32 argument_length = 6; // protobuf does not support uint8
}
```

## Filters

### `StringFilter`

```protobuf
message StringFilter {
    required string property = 1;
    required string value = 2;
    required StringOperator operator = 3;
}
```

### `RangeFilter`

```protobuf
message RangeFilter {
    required int64 earliest_timestamp = 3;
    optional int64 latest_timestamp = 4;    
}
```

## Enums

### `StringOperator`

```protobuf
enum StringOperator {
    EQUAL = 1;
    NOT_EQUAL = 2;
}
```
