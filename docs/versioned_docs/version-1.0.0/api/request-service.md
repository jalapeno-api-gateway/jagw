---
sidebar_position: 1
title: "Request Service"
---

import TOCInline from "@theme/TOCInline"

<TOCInline toc={toc[toc.length - 1].children}/>

## Protobuf Definition

```protobuf
service RequestService {
    rpc GetLsNodes(TopologyRequest) returns (LsNodeResponse) {}
    rpc GetLsLinks(TopologyRequest) returns (LsLinkResponse) {}
    rpc GetLsPrefixes(TopologyRequest) returns (LsPrefixResponse) {}
    rpc GetLsSrv6Sids(TopologyRequest) returns (LsSrv6SidResponse) {}
    rpc GetLsNodeEdges(TopologyRequest) returns (LsNodeEdgeResponse) {}
    rpc GetTelemetryData(TelemetryRequest) returns (TelemetryResponse) {}
}
```

## Methods

### `GetLsNodes()`

```protobuf
rpc GetLsNodes(TopologyRequest) returns (LsNodeResponse) {}
```

*See also*: [TopologyRequest](messages#topologyrequest), [LsNodeResponse](messages#lsnoderesponse)

#### Description

Takes a [TopologyRequest](messages#topologyrequest) with the specified **keys** and **properties** and returns an [LsNodeResponse](messages#lsnoderesponse) containing all requested [LsNodes](messages#lsnode) with the requested properties.

- Omitting **keys** returns all available [LsNodes](messages#lsnode).
- Omitting **properties** returns [LsNodes](messages#lsnode) with all available properties.

#### Examples

keys | properties | [LsNodeResponse](messages#lsnoderesponse)
--- | --- | ---
[<br />"nodeKey1",<br />"nodeKey2"<br />] | [<br />"Name",<br />"Asn",<br />"RouterIp"<br />] | [LsNodeResponse](messages#lsnoderesponse) contains [LsNodes](messages#lsnode) for the two specified keys with the three requested properties.
- | [<br />"Name",<br />"Asn",<br />"RouterIp"<br />] | [LsNodeResponse](messages#lsnoderesponse) contains all available [LsNodes](messages#lsnode) with the three requested properties.
[<br />"nodeKey1",<br />"nodeKey2"<br />] | - | [LsNodeResponse](messages#lsnoderesponse) contains [LsNodes](messages#lsnode) for the two specified keys with all available properties.
- | - | [LsNodeResponse](messages#lsnoderesponse) contains all available [LsNodes](messages#lsnode) with all available properties.

### `GetLsLinks()`

```protobuf
rpc GetLsLinks(TopologyRequest) returns (LsLinkResponse) {}
```

*See also*: [TopologyRequest](messages#topologyrequest), [LsLinkResponse](messages#lslinkresponse)

#### Description

See method [GetLsNodes()](#getlsnodes). It follows the same principle regarding **keys** and **properties**.

### `GetLsPrefixes()`

```protobuf
rpc GetLsPrefixes(TopologyRequest) returns (LsPrefixResponse) {}
```

*See also*: [TopologyRequest](messages#topologyrequest), [LsPrefixResponse](messages#lsprefixresponse)

#### Description

See method [GetLsNodes()](#getlsnodes). It follows the same principle regarding **keys** and **properties**.

### `GetLsSrv6Sids()`

```protobuf
rpc GetLsSrv6Sids(TopologyRequest) returns (LsSrv6SidResponse) {}
```

*See also*: [TopologyRequest](messages#topologyrequest), [LsSrv6SidResponse](messages#lssrv6sidresponse)

#### Description

See method [GetLsNodes()](#getlsnodes). It follows the same principle regarding **keys** and **properties**.

### `GetLsNodeEdges()`

```protobuf
rpc GetLsNodeEdges(TopologyRequest) returns (LsNodeEdgeResponse) {}
```

*See also*: [TopologyRequest](messages#topologyrequest), [LsNodeEdgeResponse](messages#lsnodeedgeresponse)

#### Description

See method [GetLsNodes()](#getlsnodes). It follows the same principle regarding **keys** and **properties**.

### `GetTelemetryData()`

```protobuf
rpc GetTelemetryData(TelemetryRequest) returns (TelemetryResponse) {}
```

*See also*: [TelemetryRequest](messages#telemetryrequest), [TelemetryResponse](messages#telemetryresponse)

#### Description

Takes a [TelemetryRequest](messages#telemetryrequest) with the specified **ipv4addresses** and **properties** and returns an [TelemetryResponse](messages#telemetryresponse) containing [TelemetryData](messages#telemetrydata) objects (one for each **ipv4address**) and all requested properties.

- Omitting **ipv4addresses** returns an empty [TelemetryResponse](messages#telemetryresponse).
- Omitting **properties** returns [TelemetryData](messages#telemetrydata) with all available properties.

#### Examples

ipv4addresses | properties | [TelemetryResponse](messages#telemetryresponse)
--- | --- | ---
[<br />"1.2.3.4",<br />"2.3.4.5"<br />] | [<br />"DataRate",<br />"PacketsSent",<br />"PacketsReceived"<br />] | [TelemetryResponse](messages#telemetryresponse) contains [TelemetryData](messages#telemetrydata) for the two specified ipv4addresses with the three requested properties.
- | [<br />"DataRate",<br />"PacketsSent",<br />"PacketsReceived"<br />] | [TelemetryResponse](messages#telemetryresponse) contains no [TelemetryData](messages#telemetrydata)!
[<br />"1.2.3.4",<br />"2.3.4.5"<br />] | - | [TelemetryResponse](messages#telemetryresponse) contains [TelemetryData](messages#telemetrydata) for the two specified ipv4addresses with all available properties.
- | - | [TelemetryResponse](messages#telemetryresponse) contains no [TelemetryData](messages#telemetrydata)!
