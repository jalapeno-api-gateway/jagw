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
    rpc SubscribeToPeers(TopologySubscription) returns (stream PeerEvent) {}
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

<details className="codeBlockDetails">
<summary>Example 1</summary>
<div>
Subscribe to specific LsNodes and return only specific properties.
<div className="codeBlockContainer">

```json
TopologySubscription {
    "keys": [
        "nodeKey1",
        "nodeKey2"
    ],
    "properties": [
        "Key",
        "Name",
        "Asn"
    ]
}
```

</div>
<div className="downArrow">&#129047;</div>
<div className="codeBlockContainer">

```json
// Continuously streams LsNodeEvents
// only for the specified nodes and
// returns only the specified properties

LsNodeEvent {
    "Action": "update",
    "Key": "nodeKey1",
    "LsNode": {
        "Key": "nodeKey1",
        "Name": "XR-1",
        "Asn": 65001,
    }
}
```

</div>
</div>
</details>

<details className="codeBlockDetails">
<summary>Example 2</summary>
<div>
Subscribe to all available LsNodes and return only specific properties.
<div className="codeBlockContainer">

```json
TopologySubscription {
    "properties": [
        "Key",
        "Name",
        "Asn"
    ]
}
```

</div>
<div className="downArrow">&#129047;</div>
<div className="codeBlockContainer">

```json
// Continuously streams LsNodeEvents
// for all available nodes and returns
// only the specified properties

LsNodeEvent {
    "Action": "update",
    "Key": "nodeKey7",
    "LsNode": {
        "Key": "nodeKey7",
        "Name": "XR-7",
        "Asn": 65001,
    }
}
```

</div>
</div>
</details>

<details className="codeBlockDetails">
<summary>Example 3</summary>
<div>
Subscribe to specific LsNodes and return all their properties.
<div className="codeBlockContainer">

```json
TopologySubscription {
    "keys": [
        "nodeKey1",
        "nodeKey2"
    ],
}
```

</div>
<div className="downArrow">&#129047;</div>
<div className="codeBlockContainer">

```json
// Continuously streams LsNodeEvents
// for the specified nodes

LsNodeEvent {
    "Action": "update",
    "Key": "nodeKey1",
    "LsNode": {
        "Key": "nodeKey1",
        "Id": 773,
        "RouterHash": "7eb583cb3c17c496cfa9370d9bc2a3eb",
        ...
    }
}
```

</div>
</div>
</details>

<details className="codeBlockDetails">
<summary>Example 4</summary>
<div>
Subscribe to all available LsNodes and return all their properties.
<div className="codeBlockContainer">

```json
TopologySubscription {}
```

</div>
<div className="downArrow">&#129047;</div>
<div className="codeBlockContainer">

```json
// Continuously streams LsNodeEvents
// for all available nodes

LsNodeEvent {
    "Action": "update",
    "Key": "nodeKey7",
    "LsNode": {
        "Key": "nodeKey7",
        "Id": 773,
        "RouterHash": "7eb583cb3c17c496cfa9370d9bc2a3eb",
        ...
    }
}
```

</div>
</div>
</details>

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


### `SubscribeToPeers`

```protobuf
rpc SubscribeToPeers(TopologySubscription) returns (stream PeerEvent) {}
```

*See also*: [PeerSubscription](messages#topologysubscription), [PeerEvent](messages#peerevent)

#### Description

See method [SubscribeToLsNodes()](#subscribetolsnodes). It follows the same principle regarding **keys** and **properties**.




### `SubscribeToTelemetryData()`

```protobuf
rpc SubscribeToTelemetryData(TelemetrySubscription) returns (stream TelemetryEvent) {}
```

*See also*: [TelemetrySubscription](messages#telemetrysubscription), [TelemetryResponse](messages#telemetryresponse)

#### Description

Subscribing to telemetry data follows the same principle as requesting telemetry data. For reference, see [GetTelemetryData()](request-service#gettelemetrydata).

`SubscribeToTelemetryData()` does not allow you to provide RangeFilters however, unlike `GetTelemetryData()`.
