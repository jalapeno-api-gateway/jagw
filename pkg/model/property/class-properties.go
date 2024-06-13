package property

var AllLsNodeProperties = []string{
	Key,
	Id,
	RouterHash,
	DomainId,
	RouterIp,
	PeerHash,
	PeerIp,
	PeerAsn,
	Timestamp,
	IgpRouterId,
	Asn,
	Mtid,
	AreaId,
	Protocol,
	ProtocolId,
	Name,
	IsPrepolicy,
	IsAdjRibIn,
}

var AllLsLinkProperties = []string{
	Key,
	Id,
	RouterHash,
	RouterIp,
	DomainId,
	PeerHash,
	PeerIp,
	PeerAsn,
	Timestamp,
	IgpRouterId,
	Protocol,
	AreaId,
	Nexthop,
	Mtid,
	LocalLinkIp,
	RemoteLinkIp,
	IgpMetric,
	RemoteNodeHash,
	LocalNodeHash,
	RemoteIgpRouterId,
	UnidirLinkDelay,
	UnidirLinkDelayMinMax,
	MaxLinkBwKbps,
	UnidirDelayVariation,
	UnidirPacketLoss,
	UnidirResidualBw,
	UnidirAvailableBw,
	UnidirBwUtilization,
	NormalizedUnidirLinkDelay,
	NormalizedUnidirDelayVariation,
	NormalizedUnidirPacketLoss,
}

var AllLsPrefixProperties = []string{
	Key,
	Id,
	RouterHash,
	RouterIp,
	DomainId,
	PeerHash,
	PeerIp,
	PeerAsn,
	Timestamp,
	IgpRouterId,
	Protocol,
	AreaId,
	Nexthop,
	LocalNodeHash,
	Mtid,
	Prefix,
	PrefixLen,
	PrefixMetric,
	IsPrepolicy,
	IsAdjRibIn,
}

var AllLsSrv6SidProperties = []string{
	Key,
	Id,
	RouterHash,
	RouterIp,
	DomainId,
	PeerHash,
	PeerIp,
	PeerAsn,
	Timestamp,
	IgpRouterId,
	LocalNodeAsn,
	Protocol,
	Nexthop,
	LocalNodeHash,
	Mtid,
	IgpFlags,
	IsPrepolicy,
	IsAdjRibIn,
	Srv6Sid,
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
