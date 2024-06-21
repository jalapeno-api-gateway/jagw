---
sidebar_position: 4
title: "Properties"
---

import TOCInline from "@theme/TOCInline"

<TOCInline toc={toc[toc.length - 1].children}/>

## About Properties

When making a request or a subscription you can specify **properties** (i.e. in [TopologyRequest](request-service#topologyrequest)). This allows you to define the properties you want to be returned for the requested objects. This is optional, since omitting **properties** results in all available properties being returned.

Different objects provide different **properties** (i.e. [LSNode](messages#lsnode), [LSLink](messages#lslink)).

:::caution invalid properties
The Jalapeño API Gateway ignores invalid properties. Make sure therefore, that the strings you provide match the properties below exactly.
:::

## All Properties

### `LsNode` Properties

- `Key`
- `Id`
- `Rev`
- `RouterHash`
- `DomainId`
- `RouterIp`
- `PeerHash`
- `PeerIp`
- `PeerType`
- `PeerAsn`
- `Timestamp`
- `IgpRouterId`
- `Asn`
- `Mtid`
- `AreaId`
- `Protocol`
- `ProtocolId`
- `Name`
- `SrAlgorithm`
- `Srv6CapabilitiesTlv`
- `NodeMsd`
- `FlexAlgoDefinition`
- `IsAdjRibInPostPolicy`
- `IsAdjRibOutPostPolicy`
- `IsLocRibFiltered`

### `LsLink` Properties

- `Key`
- `Id`
- `Rev`
- `RouterHash`
- `RouterIp`
- `DomainId`
- `PeerHash`
- `PeerIp`
- `PeerType`
- `PeerAsn`
- `Timestamp`
- `IgpRouterId`
- `Protocol`
- `ProtocolId`
- `AreaId`
- `Nexthop`
- `Mtid`
- `LocalLinkId`
- `RemoteLinkId`
- `LocalLinkIp`
- `RemoteLinkIp`
- `IgpMetric`
- `MaxLinkBwKbps`
- `RemoteNodeHash`
- `LocalNodeHash`
- `RemoteIgpRouterId`
- `LocalNodeAsn`
- `RemoteNodeAsn`
- `Srv6EndxSid`
- `UnidirLinkDelay`
- `UnidirLinkDelayMinMax`
- `UnidirDelayVariation`
- `UnidirPacketLoss`
- `UnidirPacketLossPercentage`
- `UnidirResidualBw`
- `UnidirAvailableBw`
- `UnidirBwUtilization`
- `NormalizedUnidirLinkDelay`
- `NormalizedUnidirDelayVariation`
- `NormalizedUnidirPacketLoss`
- `IsAdjRibInPostPolicy`
- `IsAdjRibOutPostPolicy`
- `IsLocRibFiltered`

### `LsPrefix` Properties

- `Key`
- `Id`
- `Rev`
- `RouterHash`
- `RouterIp`
- `DomainId`
- `PeerHash`
- `PeerIp`
- `PeerType`
- `PeerAsn`
- `Timestamp`
- `IgpRouterId`
- `ProtocolId`
- `Protocol`
- `AreaId`
- `Nexthop`
- `LocalNodeHash`
- `Mtid`
- `Prefix`
- `PrefixLen`
- `Srv6Locator`
- `PrefixMetric`
- `IsAdjRibInPostPolicy`
- `IsAdjRibOutPostPolicy`
- `IsLocRibFiltered`

### `LsSrv6Sid` Properties

- `Key`
- `Id`
- `Rev`
- `RouterHash`
- `RouterIp`
- `DomainId`
- `PeerHash`
- `PeerIp`
- `PeerType`
- `PeerAsn`
- `Timestamp`
- `IgpRouterId`
- `LocalNodeAsn`
- `ProtocolId`
- `Protocol`
- `Nexthop`
- `LocalNodeHash`
- `Mtid`
- `IgpFlags`
- `Srv6Sid`
- `Srv6EndpointBehavior`
- `Srv6SidStructure`
- `IsAdjRibInPostPolicy`
- `IsAdjRibOutPostPolicy`
- `IsLocRibFiltered`


### `LsNodeEdge` Properties

- `"Key"`
- `"Id"`
- `"From"`
- `"To"`
- `"Link"`
