---
sidebar_position: 3
title: "Messages"
---

import TOCInline from "@theme/TOCInline"

## Request Service

<TOCInline toc={toc[toc.length - 4].children}/>

## Subscription Service

<TOCInline toc={toc[toc.length - 3].children}/>

## Common

<TOCInline toc={toc[toc.length - 2].children}/>

## Base

<TOCInline toc={toc[toc.length - 1].children}/>

## About Messages

This sections lists all `protobuf` messages defined by the services of the Jalapeño API Gateway.

:::info 'required', 'optional' & 'repeated'
All properties that are preceded by either the **optional** or **required** keyword do not contain the actual value, but rather pointers to those values. This is due to the implementation of [proto2](https://developers.google.com/protocol-buffers/docs/proto).

The reason for this design choice is explained in the section [Why use proto2 instead of proto3?](../design/design-choices#why-use-proto2-instead-of-proto3).
:::

## Request Messages

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
    repeated StringFilter string_filters = 3;
    optional RangeFilter range_filter = 4;
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
    repeated InterfaceIdentifier interface_ids = 1;
    repeated string properties = 2;
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

### `TelemetryEvent`

```protobuf
message TelemetryEvent {
    required InterfaceIdentifier interface_id = 1;
    optional string ipv4_address = 2;
    optional int64 data_rate = 3;
    optional int64 packets_sent = 4;
    optional int64 packets_received = 5;
    optional string state = 6;
    optional int64 last_state_transition_time = 7;
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
    optional int32 peer_asn = 8;
    optional string timestamp = 9;
    optional string igp_router_id = 10;
    optional uint32 asn = 11;
    repeated MultiTopologyIdentifier mtid = 12;
    optional string area_id = 13;
    optional string protocol = 14;
    optional uint32 protocol_id = 15; // protobuf does not support uint8
    optional string name = 16;
    optional bool is_prepolicy = 17;
    optional bool is_adj_rib_in = 18;
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
    optional int32 peer_asn = 8;
    optional string timestamp = 9;
    optional string igp_router_id = 10;
    optional string protocol = 11;
    optional string area_id = 12;
    optional string nexthop = 13;
    optional MultiTopologyIdentifier mtid = 14;
    optional string local_link_id = 15;
    optional string remote_link_id = 16;
    optional string local_link_ip = 17;
    optional string remote_link_ip = 18;
    optional uint32 igp_metric = 19;
    optional string remote_node_hash = 20;
    optional string local_node_hash = 21;
    optional string remote_igp_router_id = 22;
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
    optional int32 peer_asn = 8;
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
    optional bool is_prepolicy = 19;
    optional bool is_adj_rib_in = 20;
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
    optional int32 peer_asn = 8;
    optional string timestamp = 9;
    optional string igp_router_id = 10;
    optional uint32 local_node_asn = 11;
    optional string protocol = 12;
    optional string nexthop = 13;
    optional string local_node_hash = 14;
    optional MultiTopologyIdentifier mtid = 15;
    optional uint32 igp_flags = 16; // protobuf does not support uint8
    optional bool is_prepolicy = 17;
    optional bool is_adj_rib_in = 18;
    optional string srv6_sid = 19;
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

## Base Messages

### `MultiTopologyIdentifier`

```protobuf
message MultiTopologyIdentifier {
    required bool o_flag = 1;
    required bool a_flag = 2;
    required uint32 mtid = 3; // protobuf does not support uint16
}
```

### `InterfaceIdentifier`

```protobuf
message InterfaceIdentifier {
    required string hostname = 1;
    required int32 link_id = 2;
}
```

## Enums

### `InterfaceIdentifier`

```protobuf
enum StringOperator {
    EQUAL = 1;
    NOT_EQUAL = 2;
}
```
