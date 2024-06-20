package subscriptionservice

import (
	"github.com/jalapeno-api-gateway/jagw-go/jagw"
	"github.com/jalapeno-api-gateway/jagw/pkg/arango"
	"github.com/jalapeno-api-gateway/jagw/pkg/helpers"
	"github.com/jalapeno-api-gateway/jagw/pkg/messages"
	"google.golang.org/protobuf/proto"
)

func convertLsNodeEvent(event messages.TopologyEvent) *jagw.LsNodeEvent {
	document := event.Document.(arango.LsNode)

	response := &jagw.LsNodeEvent{
		Action: proto.String(event.Action),
		Key:    proto.String(event.Key),
	}

	if event.Action == "del" {
		return response
	}

	response.LsNode = &jagw.LsNode{
		Key:                   proto.String(document.Key),
		Id:                    proto.String(document.ID),
		RouterHash:            proto.String(document.RouterHash),
		DomainId:              proto.Int64(document.DomainID),
		RouterIp:              proto.String(document.RouterIP),
		PeerHash:              proto.String(document.PeerHash),
		PeerIp:                proto.String(document.PeerIP),
		PeerAsn:               proto.Uint32(document.PeerASN),
		Timestamp:             proto.String(document.Timestamp),
		IgpRouterId:           proto.String(document.IGPRouterID),
		Asn:                   proto.Uint32(document.ASN),
		Mtid:                  helpers.ConvertMtidSlice(document.MTID),
		AreaId:                proto.String(document.AreaID),
		Protocol:              proto.String(document.Protocol),
		ProtocolId:            proto.Uint32(uint32(document.ProtocolID)),
		Name:                  proto.String(document.Name),
		Rev:                   proto.String(document.Rev),
		PeerType:              proto.Uint32(uint32(document.PeerType)),
		SrAlgorithm:           helpers.ConvertSrAlgorithm(document.SRAlgorithm),
		Srv6CapabilitiesTlv:   helpers.ConvertSrv6CapabilitiesTlv(document.SRv6CapabilitiesTLV),
		NodeMsd:               helpers.ConvertNodeMsd(document.NodeMSD),
		FlexAlgoDefinition:    helpers.ConvertFlexAlgoDefinition(document.FlexAlgoDefinition),
		IsAdjRibInPostPolicy:  proto.Bool(document.IsAdjRIBInPost),
		IsAdjRibOutPostPolicy: proto.Bool(document.IsAdjRIBOutPost),
		IsLocRibFiltered:      proto.Bool(document.IsLocRIBFiltered),
	}
	return response
}

func convertLsLinkEvent(event messages.TopologyEvent) *jagw.LsLinkEvent {
	document := event.Document.(arango.LsLink)

	response := &jagw.LsLinkEvent{
		Action: proto.String(event.Action),
		Key:    proto.String(event.Key),
	}

	if event.Action == "del" {
		return response
	}

	response.LsLink = &jagw.LsLink{
		Key:                            proto.String(document.Key),
		Id:                             proto.String(document.ID),
		RouterHash:                     proto.String(document.RouterHash),
		RouterIp:                       proto.String(document.RouterIP),
		DomainId:                       proto.Int64(document.DomainID),
		PeerHash:                       proto.String(document.PeerHash),
		PeerIp:                         proto.String(document.PeerIP),
		PeerAsn:                        proto.Uint32(document.PeerASN),
		Timestamp:                      proto.String(document.Timestamp),
		IgpRouterId:                    proto.String(document.IGPRouterID),
		Protocol:                       proto.String(document.Protocol),
		AreaId:                         proto.String(document.AreaID),
		Nexthop:                        proto.String(document.Nexthop),
		Mtid:                           helpers.ConvertMtid(document.MTID),
		LocalLinkId:                    proto.Uint32(document.LocalLinkID),
		RemoteLinkId:                   proto.Uint32(document.RemoteLinkID),
		LocalLinkIp:                    proto.String(document.LocalLinkIP),
		RemoteLinkIp:                   proto.String(document.RemoteLinkIP),
		IgpMetric:                      proto.Uint32(document.IGPMetric),
		RemoteNodeHash:                 proto.String(document.RemoteNodeHash),
		LocalNodeHash:                  proto.String(document.LocalNodeHash),
		RemoteIgpRouterId:              proto.String(document.RemoteIGPRouterID),
		UnidirLinkDelay:                proto.Uint32(document.UnidirLinkDelay),
		UnidirLinkDelayMinMax:          document.UnidirLinkDelayMinMax,
		MaxLinkBwKbps:                  proto.Uint64(document.MaxLinkBWKbps),
		UnidirDelayVariation:           proto.Uint32(document.UnidirDelayVariation),
		UnidirPacketLoss:               proto.Uint32(document.UnidirPacketLoss),
		UnidirResidualBw:               proto.Uint32(document.UnidirResidualBW),
		UnidirAvailableBw:              proto.Uint32(document.UnidirAvailableBW),
		UnidirBwUtilization:            proto.Uint32(document.UnidirBWUtilization),
		NormalizedUnidirLinkDelay:      proto.Float64(document.NormalizedUnidirLinkDelay),
		NormalizedUnidirDelayVariation: proto.Float64(document.NormalizedUnidirDelayVariation),
		NormalizedUnidirPacketLoss:     proto.Float64(document.NormalizedUnidirPacketLoss),
		UndirPacketLossPercentage:      proto.Float64(document.UnidirPacketLossPercentage),
		Rev:                            proto.String(document.Rev),
		PeerType:                       proto.Uint32(uint32(document.PeerType)),
		ProtocolId:                     proto.Uint32(uint32(document.ProtocolID)),
		LocalNodeAsn:                   proto.Uint32(document.LocalNodeASN),
		RemoteNodeAsn:                  proto.Uint32(document.RemoteNodeASN),
		Srv6EndxSid:                    helpers.ConvertSrv6EndXSid(document.SRv6ENDXSID),
		IsAdjRibInPost:                 proto.Bool(document.IsAdjRIBInPost),
		IsAdjRibOutPost:                proto.Bool(document.IsAdjRIBOutPost),
		IsLocRibFiltered:               proto.Bool(document.IsLocRIBFiltered),
	}

	return response
}

func convertLsPrefixEvent(event messages.TopologyEvent) *jagw.LsPrefixEvent {
	document := event.Document.(arango.LsPrefix)

	response := &jagw.LsPrefixEvent{
		Action: proto.String(event.Action),
		Key:    proto.String(event.Key),
	}

	if event.Action == "del" {
		return response
	}

	response.LsPrefix = &jagw.LsPrefix{
		Key:              proto.String(document.Key),
		Id:               proto.String(document.ID),
		RouterHash:       proto.String(document.RouterHash),
		RouterIp:         proto.String(document.RouterIP),
		DomainId:         proto.Int64(document.DomainID),
		PeerHash:         proto.String(document.PeerHash),
		PeerIp:           proto.String(document.PeerIP),
		PeerAsn:          proto.Uint32(document.PeerASN),
		Timestamp:        proto.String(document.Timestamp),
		IgpRouterId:      proto.String(document.IGPRouterID),
		Protocol:         proto.String(document.Protocol),
		AreaId:           proto.String(document.AreaID),
		Nexthop:          proto.String(document.Nexthop),
		LocalNodeHash:    proto.String(document.LocalNodeHash),
		Mtid:             helpers.ConvertMtid(document.MTID),
		Prefix:           proto.String(document.Prefix),
		PrefixLen:        proto.Int32(document.PrefixLen),
		PrefixMetric:     proto.Uint32(document.PrefixMetric),
		Rev:              proto.String(document.Rev),
		PeerType:         proto.Uint32(uint32(document.PeerType)),
		ProtocolId:       proto.Uint32(uint32(document.ProtocolID)),
		Srv6Locator:      helpers.ConvertSrv6Locator(document.SRv6Locator),
		IsAdjRibInPost:   proto.Bool(document.IsAdjRIBInPost),
		IsAdjRibOutPost:  proto.Bool(document.IsAdjRIBOutPost),
		IsLocRibFiltered: proto.Bool(document.IsLocRIBFiltered),
	}

	return response
}

func convertLsSrv6SidEvent(event messages.TopologyEvent) *jagw.LsSrv6SidEvent {
	document := event.Document.(arango.LsSrv6Sid)

	response := &jagw.LsSrv6SidEvent{
		Action: proto.String(event.Action),
		Key:    proto.String(event.Key),
	}

	if event.Action == "del" {
		return response
	}

	response.LsSrv6Sid = &jagw.LsSrv6Sid{
		Key:                  proto.String(document.Key),
		Id:                   proto.String(document.ID),
		RouterHash:           proto.String(document.RouterHash),
		RouterIp:             proto.String(document.RouterIP),
		DomainId:             proto.Int64(document.DomainID),
		PeerHash:             proto.String(document.PeerHash),
		PeerIp:               proto.String(document.PeerIP),
		PeerAsn:              proto.Uint32(document.PeerASN),
		Timestamp:            proto.String(document.Timestamp),
		IgpRouterId:          proto.String(document.IGPRouterID),
		LocalNodeAsn:         proto.Uint32(document.LocalNodeASN),
		Protocol:             proto.String(document.Protocol),
		Nexthop:              proto.String(document.Nexthop),
		LocalNodeHash:        proto.String(document.LocalNodeHash),
		Mtid:                 helpers.ConvertMtid(document.MTID),
		IgpFlags:             proto.Uint32(uint32(document.IGPFlags)),
		Srv6Sid:              proto.String(document.SRv6SID),
		Rev:                  proto.String(document.Rev),
		PeerType:             proto.Uint32(uint32(document.PeerType)),
		ProtocolId:           proto.Uint32(uint32(document.ProtocolID)),
		Srv6EndpointBehavior: helpers.ConvertSrv6EndpointBehavior(document.SRv6EndpointBehavior),
		Srv6SidStructure:     helpers.ConvertSrv6SidStructure(document.SRv6SIDStructure),
		IsAdjRibInPost:       proto.Bool(document.IsAdjRIBInPost),
		IsAdjRibOutPost:      proto.Bool(document.IsAdjRIBOutPost),
		IsLocRibFiltered:     proto.Bool(document.IsLocRIBFiltered),
	}

	return response
}

func convertLsNodeEdgeEvent(event messages.TopologyEvent) *jagw.LsNodeEdgeEvent {
	document := event.Document.(arango.LsNodeEdge)
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
