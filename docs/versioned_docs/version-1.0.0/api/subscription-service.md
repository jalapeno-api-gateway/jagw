---
sidebar_position: 2
title: "Subscription Service"
---

import TOCInline from "@theme/TOCInline"

<TOCInline toc={toc[toc.length - 1].children}/>

## Protobuf Definition

```protobuf
service SubscriptionService {
    rpc SubscribeToLsNodes(TopologySubscription) returns (stream LsNodeEvent) {}
    rpc SubscribeToLsLinks(TopologySubscription) returns (stream LsLinkEvent) {}
    rpc SubscribeToLsPrefixes(TopologySubscription) returns (stream LsPrefixEvent) {}
    rpc SubscribeToLsSrv6Sids(TopologySubscription) returns (stream LsSrv6SidEvent) {}
    rpc SubscribeToLsNodeEdges(TopologySubscription) returns (stream LsNodeEdgeEvent) {}
    rpc SubscribeToTelemetryData(TelemetrySubscription) returns (stream TelemetryEvent) {}
}
```

## Methods

### `SubscribeToLsNodes()`

```protobuf
rpc SubscribeToLsNodes(TopologySubscription) returns (stream LsNodeEvent) {}
```

*See also*: [TopologySubscription](messages#topologysubscription), [LsNodeEvent](messages#lsnodeevent)

#### Description

Takes a [TopologySubscription](messages#topologysubscription) with the specified **keys** and **properties** and returns a stream of [LsNodeEvents](messages#lsnodeevent). An LsNodeEvent contains an update to a single [LsNode](messages#lsnode). Only [LsNodes](messages#lsnode) matching one of the specified **keys** are returned and only properties specified in **properties** are set.

- Omitting **keys** streams [LsNodeEvents](messages#lsnodeevent) for all available [LsNodes](messages#lsnode).
- Omitting **properties** streams [LsNodeEvents](messages#lsnodeevent) for [LsNodes](messages#lsnode) with all available properties.

#### Examples

keys | properties | [LsNodeEvents](messages#lsnodeevent)
--- | --- | ---
[<br />"nodeKey1",<br />"nodeKey2"<br />] | [<br />"Name",<br />"Asn",<br />"RouterIp"<br />] | Streams [LsNodeEvents](messages#lsnodeevent) for [LsNodes](messages#lsnode) for the two specified keys with the three requested properties.
- | [<br />"Name",<br />"Asn",<br />"RouterIp"<br />] | Streams [LsNodeEvents](messages#lsnodeevent) for all available [LsNodes](messages#lsnode) with the three requested properties.
[<br />"nodeKey1",<br />"nodeKey2"<br />] | - | Streams [LsNodeEvents](messages#lsnodeevent) for [LsNodes](messages#lsnode) for the two specified keys with all available properties.
- | - | Streams [LsNodeEvents](messages#lsnodeevent) for all available [LsNodes](messages#lsnode) with all available properties.

### `SubscribeToLsLinks()`

```protobuf
rpc SubscribeToLsLinks(TopologySubscription) returns (stream LsLinkEvent) {}
```

*See also*: [TopologySubscription](messages#topologysubscription), [LsLinkEvent](messages#lslinkevent)

#### Description

See method [SubscribeToLsNodes()](#subscribetolsnodes). It follows the same principle regarding **keys** and **properties**.

### `SubscribeToLsPrefixes()`

```protobuf
rpc SubscribeToLsPrefixes(TopologySubscription) returns (stream LsPrefixEvent) {}
```

*See also*: [TopologySubscription](messages#topologysubscription), [LsPrefixEvent](messages#lsprefixevent)

#### Description

See method [SubscribeToLsNodes()](#subscribetolsnodes). It follows the same principle regarding **keys** and **properties**.

### `SubscribeToLsSrv6Sids()`

```protobuf
rpc SubscribeToLsSrv6Sids(TopologySubscription) returns (stream LsSrv6SidEvent) {}
```

*See also*: [TopologySubscription](messages#topologysubscription), [LsSrv6SidEvent](messages#lssrv6sidevent)

#### Description

See method [SubscribeToLsNodes()](#subscribetolsnodes). It follows the same principle regarding **keys** and **properties**.

### `SubscribeToLsNodeEdges()`

```protobuf
rpc SubscribeToLsNodeEdges(TopologySubscription) returns (stream LsNodeEdgeEvent) {}
```

*See also*: [TopologySubscription](messages#topologysubscription), [LsNodeEdgeEvent](messages#lsnodeedgeevent)

#### Description

See method [SubscribeToLsNodes()](#subscribetolsnodes). It follows the same principle regarding **keys** and **properties**.

### `SubscribeToTelemetryData()`

```protobuf
rpc SubscribeToTelemetryData(TelemetrySubscription) returns (stream TelemetryEvent) {}
```

*See also*: [TelemetrySubscription](messages#telemetrysubscription), [TelemetryResponse](messages#telemetryresponse)

#### Description

Takes a [TelemetrySubscription](messages#telemetrysubscription) with the specified **ipv4addresses** and **properties** and returns a stream of [TelemetryEvents](messages#telemetryevent). A TelemetryEvent contains an update to a single event tied to an ipv4address.

- Omitting **ipv4addresses** streams [TelemetryEvents](messages#telemetryevent) for all available ipv4addresses.
- Omitting **properties** streams [TelemetryEvents](messages#telemetryevent) with all available properties.

#### Examples

ipv4addresses | properties | [TelemetryEvent](messages#telemetryevent)
--- | --- | ---
[<br />"1.2.3.4",<br />"2.3.4.5"<br />] | [<br />"DataRate",<br />"PacketsSent",<br />"PacketsReceived"<br />] | Streams [TelemetryEvents](messages#telemetryevent) for the two specified ipv4addresses with the three requested properties.
- | [<br />"DataRate",<br />"PacketsSent",<br />"PacketsReceived"<br />] | Streams [TelemetryEvents](messages#telemetryevent) for all available ipv4addresses with the three specified properties.
[<br />"1.2.3.4",<br />"2.3.4.5"<br />] | - | Streams [TelemetryEvents](messages#telemetryevent) for the two specified ipv4addresses with all available properties.
- | - | Streams [TelemetryEvents](messages#telemetryevent) for all available ipv4addresses with all available properties.
