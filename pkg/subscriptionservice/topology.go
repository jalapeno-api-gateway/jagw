package subscriptionservice

import (
	"github.com/jalapeno-api-gateway/jagw-go/jagw"
	"github.com/jalapeno-api-gateway/jagw/pkg/arango"
	"github.com/jalapeno-api-gateway/jagw/pkg/messages"
	"google.golang.org/protobuf/proto"
)

func convertLsNodeEvent(event messages.TopologyEvent) *jagw.LsNodeEvent {
	document := event.Document.(arango.LSNode)

	response := &jagw.LsNodeEvent{
		Action: proto.String(event.Action),
		Key:    proto.String(event.Key),
	}

	if event.Action == "del" {
		return response
	}

	response.LsNode = &jagw.LsNode{
		Key:         proto.String(document.Key),
		Id:          proto.String(document.ID),
		RouterHash:  proto.String(document.RouterHash),
		DomainId:    proto.Int64(document.DomainID),
		RouterIp:    proto.String(document.RouterIP),
		PeerHash:    proto.String(document.PeerHash),
		PeerIp:      proto.String(document.PeerIP),
		PeerAsn:     proto.Int32(document.PeerASN),
		Timestamp:   proto.String(document.Timestamp),
		IgpRouterId: proto.String(document.IGPRouterID),
		Asn:         proto.Uint32(document.ASN),
		Mtid:        convertMTIDSlice(document.MTID),
		AreaId:      proto.String(document.AreaID),
		Protocol:    proto.String(document.Protocol),
		ProtocolId:  proto.Uint32(uint32(document.ProtocolID)),
		Name:        proto.String(document.Name),
		IsPrepolicy: proto.Bool(document.IsPrepolicy),
		IsAdjRibIn:  proto.Bool(document.IsAdjRIBIn),
	}

	return response
}

func convertLsLinkEvent(event messages.TopologyEvent) *jagw.LsLinkEvent {
	document := event.Document.(arango.LSLink)

	response := &jagw.LsLinkEvent{
		Action: proto.String(event.Action),
		Key:    proto.String(event.Key),
	}

	if event.Action == "del" {
		return response
	}

	response.LsLink = &jagw.LsLink{
		Key:               proto.String(document.Key),
		Id:                proto.String(document.ID),
		RouterHash:        proto.String(document.RouterHash),
		RouterIp:          proto.String(document.RouterIP),
		DomainId:          proto.Int64(document.DomainID),
		PeerHash:          proto.String(document.PeerHash),
		PeerIp:            proto.String(document.PeerIP),
		PeerAsn:           proto.Int32(document.PeerASN),
		Timestamp:         proto.String(document.Timestamp),
		IgpRouterId:       proto.String(document.IGPRouterID),
		Protocol:          proto.String(document.Protocol),
		AreaId:            proto.String(document.AreaID),
		Nexthop:           proto.String(document.Nexthop),
		Mtid:              convertMTID(document.MTID),
		LocalLinkIp:       proto.String(document.LocalLinkIP),
		RemoteLinkIp:      proto.String(document.RemoteLinkIP),
		IgpMetric:         proto.Uint32(document.IGPMetric),
		RemoteNodeHash:    proto.String(document.RemoteNodeHash),
		LocalNodeHash:     proto.String(document.LocalNodeHash),
		RemoteIgpRouterId: proto.String(document.RemoteIGPRouterID),
	}

	return response
}

func convertLsPrefixEvent(event messages.TopologyEvent) *jagw.LsPrefixEvent {
	document := event.Document.(arango.LSPrefix)

	response := &jagw.LsPrefixEvent{
		Action: proto.String(event.Action),
		Key:    proto.String(event.Key),
	}

	if event.Action == "del" {
		return response
	}

	response.LsPrefix = &jagw.LsPrefix{
		Key:           proto.String(document.Key),
		Id:            proto.String(document.ID),
		RouterHash:    proto.String(document.RouterHash),
		RouterIp:      proto.String(document.RouterIP),
		DomainId:      proto.Int64(document.DomainID),
		PeerHash:      proto.String(document.PeerHash),
		PeerIp:        proto.String(document.PeerIP),
		PeerAsn:       proto.Int32(document.PeerASN),
		Timestamp:     proto.String(document.Timestamp),
		IgpRouterId:   proto.String(document.IGPRouterID),
		Protocol:      proto.String(document.Protocol),
		AreaId:        proto.String(document.AreaID),
		Nexthop:       proto.String(document.Nexthop),
		LocalNodeHash: proto.String(document.LocalNodeHash),
		Mtid:          convertMTID(document.MTID),
		Prefix:        proto.String(document.Prefix),
		PrefixLen:     proto.Int32(document.PrefixLen),
		PrefixMetric:  proto.Uint32(document.PrefixMetric),
		IsPrepolicy:   proto.Bool(document.IsPrepolicy),
		IsAdjRibIn:    proto.Bool(document.IsAdjRIBIn),
	}

	return response
}

func convertLsSrv6SidEvent(event messages.TopologyEvent) *jagw.LsSrv6SidEvent {
	document := event.Document.(arango.LSSRv6SID)

	response := &jagw.LsSrv6SidEvent{
		Action: proto.String(event.Action),
		Key:    proto.String(event.Key),
	}

	if event.Action == "del" {
		return response
	}

	response.LsSrv6Sid = &jagw.LsSrv6Sid{
		Key:           proto.String(document.Key),
		Id:            proto.String(document.ID),
		RouterHash:    proto.String(document.RouterHash),
		RouterIp:      proto.String(document.RouterIP),
		DomainId:      proto.Int64(document.DomainID),
		PeerHash:      proto.String(document.PeerHash),
		PeerIp:        proto.String(document.PeerIP),
		PeerAsn:       proto.Int32(document.PeerASN),
		Timestamp:     proto.String(document.Timestamp),
		IgpRouterId:   proto.String(document.IGPRouterID),
		LocalNodeAsn:  proto.Uint32(document.LocalNodeASN),
		Protocol:      proto.String(document.Protocol),
		Nexthop:       proto.String(document.Nexthop),
		LocalNodeHash: proto.String(document.LocalNodeHash),
		Mtid:          convertMTID(document.MTID),
		IgpFlags:      proto.Uint32(uint32(document.IGPFlags)),
		IsPrepolicy:   proto.Bool(document.IsPrepolicy),
		IsAdjRibIn:    proto.Bool(document.IsAdjRIBIn),
		Srv6Sid:       proto.String(document.SRv6SID),
	}

	return response
}

func convertLsNodeEdgeEvent(event messages.TopologyEvent) *jagw.LsNodeEdgeEvent {
	document := event.Document.(arango.LSNode_Edge)
	response := &jagw.LsNodeEdgeEvent{
		Action: proto.String(event.Action),
		Key:    proto.String(event.Key),
	}

	if event.Action == "del" {
		return response
	}

	response.LsNodeEdge = &jagw.LsNodeEdge{
		Key:  proto.String(document.Key),
		Id:   proto.String(document.ID),
		From: proto.String(document.From),
		To:   proto.String(document.To),
		Link: proto.String(document.Link),
	}

	return response
}

func convertMTIDSlice(documents []*arango.MultiTopologyIdentifier) []*jagw.MultiTopologyIdentifier {
	mtids := []*jagw.MultiTopologyIdentifier{}
	for _, doc := range documents {
		mtids = append(mtids, convertMTID(doc))
	}
	return mtids
}

func convertMTID(doc *arango.MultiTopologyIdentifier) *jagw.MultiTopologyIdentifier {
	return &jagw.MultiTopologyIdentifier{
		OFlag: proto.Bool(doc.OFlag),
		AFlag: proto.Bool(doc.AFlag),
		Mtid:  proto.Uint32(uint32(doc.MTID)),
	}
}
