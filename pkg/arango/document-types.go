package arango

// Information on Collections is taken from here:
// https://github.com/sbezverk/gobmp/blob/master/pkg/message/types.go
type LSNode struct {
	ID          string                     `json:"_id,omitempty"`
	Key         string                     `json:"_key,omitempty"`
	RouterHash  string                     `json:"router_hash,omitempty"`
	DomainID    int64                      `json:"domain_id,omitempty"`
	RouterIP    string                     `json:"router_ip,omitempty"`
	PeerHash    string                     `json:"peer_hash,omitempty"`
	PeerIP      string                     `json:"peer_ip,omitempty"`
	PeerASN     int32                      `json:"peer_asn,omitempty"`
	Timestamp   string                     `json:"timestamp,omitempty"`
	IGPRouterID string                     `json:"igp_router_id,omitempty"`
	ASN         uint32                     `json:"asn,omitempty"`
	MTID        []*MultiTopologyIdentifier `json:"mt_id_tlv,omitempty"`
	AreaID      string                     `json:"area_id,omitempty"`
	Protocol    string                     `json:"protocol,omitempty"`
	ProtocolID  uint8                      `json:"protocol_id,omitempty"`
	Name        string                     `json:"name,omitempty"`
	IsPrepolicy bool                       `json:"is_prepolicy,omitempty"`
	IsAdjRIBIn  bool                       `json:"is_adj_rib_in,omitempty"`
}

type LSLink struct {
	ID                             string                   `json:"_id,omitempty"`
	Key                            string                   `json:"_key,omitempty"`
	RouterHash                     string                   `json:"router_hash,omitempty"`
	RouterIP                       string                   `json:"router_ip,omitempty"`
	DomainID                       int64                    `json:"domain_id,omitempty"`
	PeerHash                       string                   `json:"peer_hash,omitempty"`
	PeerIP                         string                   `json:"peer_ip,omitempty"`
	PeerASN                        int32                    `json:"peer_asn,omitempty"`
	Timestamp                      string                   `json:"timestamp,omitempty"`
	IGPRouterID                    string                   `json:"igp_router_id,omitempty"`
	Protocol                       string                   `json:"protocol,omitempty"`
	AreaID                         string                   `json:"area_id,omitempty"`
	Nexthop                        string                   `json:"nexthop,omitempty"`
	MTID                           *MultiTopologyIdentifier `json:"mt_id_tlv,omitempty"`
	LocalLinkIP                    string                   `json:"local_link_ip,omitempty"`
	RemoteLinkIP                   string                   `json:"remote_link_ip,omitempty"`
	IGPMetric                      uint32                   `json:"igp_metric,omitempty"`
	RemoteNodeHash                 string                   `json:"remote_node_hash,omitempty"`
	LocalNodeHash                  string                   `json:"local_node_hash,omitempty"`
	RemoteIGPRouterID              string                   `json:"remote_igp_router_id,omitempty"`
	UnidirLinkDelay                uint32                   `json:"unidir_link_delay,omitempty"`
	UnidirLinkDelayMinMax          []uint32                 `json:"unidir_link_delay_min_max,omitempty"`
	MaxLinkBwKbps                  uint64                   `json:"max_link_bw_kbps,omitempty"`
	UnidirDelayVariation           uint32                   `json:"unidir_delay_variation,omitempty"`
	UnidirPacketLoss               float32                  `json:"unidir_packet_loss,omitempty"`
	UnidirResidualBw               uint32                   `json:"unidir_residual_bw,omitempty"`
	UnidirAvailableBw              uint32                   `json:"unidir_available_bw,omitempty"`
	UnidirBwUtilization            uint32                   `json:"unidir_bw_utilization,omitempty"`
	NormalizedUnidirLinkDelay      float64                  `json:"normalized_unidir_link_delay,omitempty"`
	NormalizedUnidirDelayVariation float64                  `json:"normalized_unidir_delay_variation,omitempty"`
	NormalizedUnidirPacketLoss     float64                  `json:"normalized_unidir_packet_loss,omitempty"`
}

type LSPrefix struct {
	Key           string                   `json:"_key,omitempty"`
	ID            string                   `json:"_id,omitempty"`
	RouterHash    string                   `json:"router_hash,omitempty"`
	RouterIP      string                   `json:"router_ip,omitempty"`
	DomainID      int64                    `json:"domain_id,omitempty"`
	PeerHash      string                   `json:"peer_hash,omitempty"`
	PeerIP        string                   `json:"peer_ip,omitempty"`
	PeerASN       int32                    `json:"peer_asn,omitempty"`
	Timestamp     string                   `json:"timestamp,omitempty"`
	IGPRouterID   string                   `json:"igp_router_id,omitempty"`
	Protocol      string                   `json:"protocol,omitempty"`
	AreaID        string                   `json:"area_id,omitempty"`
	Nexthop       string                   `json:"nexthop,omitempty"`
	LocalNodeHash string                   `json:"local_node_hash,omitempty"`
	MTID          *MultiTopologyIdentifier `json:"mt_id_tlv,omitempty"`
	Prefix        string                   `json:"prefix,omitempty"`
	PrefixLen     int32                    `json:"prefix_len,omitempty"`
	PrefixMetric  uint32                   `json:"prefix_metric,omitempty"`
	IsPrepolicy   bool                     `json:"is_prepolicy,omitempty"`
	IsAdjRIBIn    bool                     `json:"is_adj_rib_in,omitempty"`
}

type LSSRv6SID struct {
	Key           string                   `json:"_key,omitempty"`
	ID            string                   `json:"_id,omitempty"`
	RouterHash    string                   `json:"router_hash,omitempty"`
	RouterIP      string                   `json:"router_ip,omitempty"`
	DomainID      int64                    `json:"domain_id,omitempty"`
	PeerHash      string                   `json:"peer_hash,omitempty"`
	PeerIP        string                   `json:"peer_ip,omitempty"`
	PeerASN       int32                    `json:"peer_asn,omitempty"`
	Timestamp     string                   `json:"timestamp,omitempty"`
	IGPRouterID   string                   `json:"igp_router_id,omitempty"`
	LocalNodeASN  uint32                   `json:"local_node_asn,omitempty"`
	Protocol      string                   `json:"protocol,omitempty"`
	Nexthop       string                   `json:"nexthop,omitempty"`
	LocalNodeHash string                   `json:"local_node_hash,omitempty"`
	MTID          *MultiTopologyIdentifier `json:"mt_id_tlv,omitempty"`
	IGPFlags      uint8                    `json:"igp_flags,omitempty"`
	IsPrepolicy   bool                     `json:"is_prepolicy,omitempty"`
	IsAdjRIBIn    bool                     `json:"is_adj_rib_in,omitempty"`
	SRv6SID       string                   `json:"srv6_sid,omitempty"`
}

type LSNode_Edge struct {
	Key  string `json:"_key,omitempty"`
	ID   string `json:"_id,omitempty"`
	From string `json:"_from,omitempty"`
	To   string `json:"_to,omitempty"`
	Link string `json:"link,omitempty"`
}

type LSNode_Coordinates struct {
	Key       string  `json:"_key,omitempty"`
	ID        string  `json:"_id,omitempty"`
	LsNodeKey string  `json:"ls_node_key,omitempty"`
	Latitude  float64 `json:"latitude,omitempty"`
	Longitude float64 `json:"longitude,omitempty"`
}
