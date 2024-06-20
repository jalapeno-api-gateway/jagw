package arango

import "github.com/sbezverk/gobmp/pkg/message"

// Information on Collections is taken from here:
// // https://github.com/sbezverk/gobmp/blob/master/pkg/message/types.go
type LsNode struct {
	message.LSNode
}

type LsLink struct {
	message.LSLink
	UnidirPacketLossPercentage     float64 `json:"undir_packet_loss_percentage,omitempty"`
	MaxLinkBwKbps                  uint32  `json:"max_link_bw_kbps,omitempty"`
	NormalizedUnidirLinkDelay      float64 `json:"normalized_unidir_link_delay,omitempty"`
	NormalizedUnidirDelayVariation float64 `json:"normalized_unidir_delay_variation,omitempty"`
	NormalizedUnidirPacketLoss     float64 `json:"normalized_unidir_packet_loss,omitempty"`
}

type LsPrefix struct {
	message.LSPrefix
}

type LsSrv6Sid struct {
	message.LSSRv6SID
}

type LsNodeEdge struct {
	Key  string `json:"_key,omitempty"`
	ID   string `json:"_id,omitempty"`
	From string `json:"_from,omitempty"`
	To   string `json:"_to,omitempty"`
	Link string `json:"link,omitempty"`
}

type LsNodeCoordinates struct {
	Key       string  `json:"_key,omitempty"`
	ID        string  `json:"_id,omitempty"`
	LsNodeKey string  `json:"ls_node_key,omitempty"`
	Latitude  float64 `json:"latitude,omitempty"`
	Longitude float64 `json:"longitude,omitempty"`
}
