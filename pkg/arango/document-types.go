package arango

import (
	"encoding/json"

	"github.com/sbezverk/gobmp/pkg/message"
)

// Information on Collections is taken from here:
// // https://github.com/sbezverk/gobmp/blob/master/pkg/message/types.go
type LsNode struct {
	message.LSNode
}

func (node LsNode) MarshalBinary() ([]byte, error) {
	return json.Marshal(node)
}

type LsLink struct {
	message.LSLink
	UnidirPacketLossPercentage     float64 `json:"undir_packet_loss_percentage,omitempty"`
	MaxLinkBwKbps                  uint32  `json:"max_link_bw_kbps,omitempty"`
	NormalizedUnidirLinkDelay      float64 `json:"normalized_unidir_link_delay,omitempty"`
	NormalizedUnidirDelayVariation float64 `json:"normalized_unidir_delay_variation,omitempty"`
	NormalizedUnidirPacketLoss     float64 `json:"normalized_unidir_packet_loss,omitempty"`
}

func (link LsLink) MarshalBinary() ([]byte, error) {
	return json.Marshal(link)
}

type LsPrefix struct {
	message.LSPrefix
}

func (prefix LsPrefix) MarshalBinary() ([]byte, error) {
	return json.Marshal(prefix)
}

type LsSrv6Sid struct {
	message.LSSRv6SID
}

func (srv6sid LsSrv6Sid) MarshalBinary() ([]byte, error) {
	return json.Marshal(srv6sid)
}

type LsNodeEdge struct {
	Key  string `json:"_key,omitempty"`
	ID   string `json:"_id,omitempty"`
	From string `json:"_from,omitempty"`
	To   string `json:"_to,omitempty"`
	Link string `json:"link,omitempty"`
}

func (edge LsNodeEdge) MarshalBinary() ([]byte, error) {
	return json.Marshal(edge)
}

type LsNodeCoordinates struct {
	Key       string  `json:"_key,omitempty"`
	ID        string  `json:"_id,omitempty"`
	LsNodeKey string  `json:"ls_node_key,omitempty"`
	Latitude  float64 `json:"latitude,omitempty"`
	Longitude float64 `json:"longitude,omitempty"`
}

func (coordinates LsNodeCoordinates) MarshalBinary() ([]byte, error) {
	return json.Marshal(coordinates)
}
