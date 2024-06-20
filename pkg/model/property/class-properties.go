package property

var AllLsNodeProperties = []string{
	Key,
	Id,
	Rev,
	RouterHash,
	DomainId,
	RouterIp,
	PeerHash,
	PeerIp,
	PeerType,
	PeerAsn,
	Timestamp,
	IgpRouterId,
	Asn,
	Mtid,
	AreaId,
	Protocol,
	ProtocolId,
	Name,
	SrAlgorithm,
	Srv6CapabilitiesTlv,
	NodeMsd,
	FlexAlgoDefinition,
	IsAdjRibInPost,
	IsAdjRibOutPost,
	IsLocRibFiltered,
}

var AllLsLinkProperties = []string{
	Key,
	Id,
	Rev,
	RouterHash,
	RouterIp,
	DomainId,
	PeerHash,
	PeerIp,
	PeerType,
	PeerAsn,
	Timestamp,
	IgpRouterId,
	Protocol,
	ProtocolId,
	AreaId,
	Nexthop,
	Mtid,
	LocalLinkId,
	RemoteLinkId,
	LocalLinkIp,
	RemoteLinkIp,
	IgpMetric,
	MaxLinkBwKbps,
	RemoteNodeHash,
	LocalNodeHash,
	RemoteIgpRouterId,
	LocalNodeAsn,
	RemoteNodeAsn,
	Srv6EndxSid,
	UnidirLinkDelay,
	UnidirLinkDelayMinMax,
	UnidirDelayVariation,
	UnidirPacketLoss,
	UnidirPacketLossPercentage,
	UnidirResidualBw,
	UnidirAvailableBw,
	UnidirBwUtilization,
	NormalizedUnidirLinkDelay,
	NormalizedUnidirDelayVariation,
	NormalizedUnidirPacketLoss,
	IsAdjRibInPost,
	IsAdjRibOutPost,
	IsLocRibFiltered,
}

var AllLsPrefixProperties = []string{
	Key,
	Id,
	Rev,
	RouterHash,
	RouterIp,
	DomainId,
	PeerHash,
	PeerIp,
	PeerType,
	PeerAsn,
	Timestamp,
	IgpRouterId,
	ProtocolId,
	Protocol,
	AreaId,
	Nexthop,
	LocalNodeHash,
	Mtid,
	Prefix,
	PrefixLen,
	Srv6Locator,
	PrefixMetric,
	IsAdjRibInPost,
	IsAdjRibOutPost,
	IsLocRibFiltered,
}

var AllLsSrv6SidProperties = []string{
	Key,
	Id,
	Rev,
	RouterHash,
	RouterIp,
	DomainId,
	PeerHash,
	PeerIp,
	PeerType,
	PeerAsn,
	Timestamp,
	IgpRouterId,
	LocalNodeAsn,
	ProtocolId,
	Protocol,
	Nexthop,
	LocalNodeHash,
	Mtid,
	IgpFlags,
	Srv6Sid,
	Srv6EndpointBehavior,
	Srv6SidStructure,
	IsAdjRibInPost,
	IsAdjRibOutPost,
	IsLocRibFiltered,
}

var AllLsNodeEdgeProperties = []string{
	Key,
	Id,
	From,
	To,
	Link,
}

var AllLsNodeCoordinatesProperties = []string{
	Key,
	Id,
	LsNodeKey,
	Latitude,
	Longitude,
}

var AllPhysicalInterfaceProperties = []string{
	DataRate,
	PacketsSent,
	PacketsReceived,
}

var AllLoopbackInterfaceProperties = []string{
	State,
	LastStateTransitionTime,
}
