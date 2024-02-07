package topology

type LsNode struct {
	Id          string
	Key         string
	RouterHash  string
	DomainId    int64
	RouterIp    string
	PeerHash    string
	PeerIp      string
	PeerAsn     int32
	Timestamp   string
	IgpRouterId string
	Asn         uint32
	Mtid        []*MultiTopologyIdentifier
	AreaId      string
	Protocol    string
	ProtocolId  uint8
	Name        string
	IsPrepolicy bool
	IsAdjRibIn  bool
}

type LsNodeCoordinates struct {
	Id        string
	Key       string
	LsNodeKey string
	Latitude  float64
	Longitude float64
}

type LsLink struct {
	Id                    string
	Key                   string
	RouterHash            string
	RouterIp              string
	DomainId              int64
	PeerHash              string
	PeerIp                string
	PeerAsn               int32
	Timestamp             string
	IgpRouterId           string
	Protocol              string
	AreaId                string
	Nexthop               string
	Mtid                  *MultiTopologyIdentifier
	LocalLinkIp           string
	RemoteLinkIp          string
	IgpMetric             uint32
	RemoteNodeHash        string
	LocalNodeHash         string
	RemoteIgpRouterId     string
	UnidirLinkDelay       uint32
	UnidirLinkDelayMinMax []uint32
}

type LsPrefix struct {
	Key           string
	Id            string
	RouterHash    string
	RouterIp      string
	DomainId      int64
	PeerHash      string
	PeerIp        string
	PeerAsn       int32
	Timestamp     string
	IgpRouterId   string
	Protocol      string
	AreaId        string
	Nexthop       string
	LocalNodeHash string
	Mtid          *MultiTopologyIdentifier
	Prefix        string
	PrefixLen     int32
	PrefixMetric  uint32
	IsPrepolicy   bool
	IsAdjRibIn    bool
}

type LsSrv6Sid struct {
	Key           string
	Id            string
	RouterHash    string
	RouterIp      string
	DomainId      int64
	PeerHash      string
	PeerIp        string
	PeerAsn       int32
	Timestamp     string
	IgpRouterId   string
	LocalNodeAsn  uint32
	Protocol      string
	Nexthop       string
	LocalNodeHash string
	Mtid          *MultiTopologyIdentifier
	IgpFlags      uint8
	IsPrepolicy   bool
	IsAdjRibIn    bool
	Srv6Sid       string
}

type LsNodeEdge struct {
	Key  string
	Id   string
	To   string
	From string
	Link string
}
