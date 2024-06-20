package requestservice

import (
	"github.com/jalapeno-api-gateway/jagw-go/jagw"
	"github.com/jalapeno-api-gateway/jagw/pkg/arango"
	"github.com/jalapeno-api-gateway/jagw/pkg/helpers"
	"github.com/jalapeno-api-gateway/jagw/pkg/model/property"
	"github.com/sirupsen/logrus"
	"google.golang.org/protobuf/proto"
)

func convertLsNode(logger *logrus.Entry, doc interface{}, properties []string) *jagw.LsNode {
	document := doc.(arango.LsNode)
	lsNode := jagw.LsNode{Key: proto.String(document.Key)}

	if len(properties) == 0 {
		properties = property.AllLsNodeProperties
	}

	for _, propertyName := range properties {
		switch propertyName {
		case property.Key:
			lsNode.Key = proto.String(document.Key)
		case property.Id:
			lsNode.Id = proto.String(document.ID)
		case property.RouterHash:
			lsNode.RouterHash = proto.String(document.RouterHash)
		case property.DomainId:
			lsNode.DomainId = proto.Int64(document.DomainID)
		case property.RouterIp:
			lsNode.RouterIp = proto.String(document.RouterIP)
		case property.PeerHash:
			lsNode.PeerHash = proto.String(document.PeerHash)
		case property.PeerIp:
			lsNode.PeerIp = proto.String(document.PeerIP)
		case property.PeerAsn:
			lsNode.PeerAsn = proto.Uint32(document.PeerASN)
		case property.Timestamp:
			lsNode.Timestamp = proto.String(document.Timestamp)
		case property.IgpRouterId:
			lsNode.IgpRouterId = proto.String(document.IGPRouterID)
		case property.Asn:
			lsNode.Asn = proto.Uint32(document.ASN)
		case property.Mtid:
			lsNode.Mtid = helpers.ConvertMtidSlice(document.MTID)
		case property.AreaId:
			lsNode.AreaId = proto.String(document.AreaID)
		case property.Protocol:
			lsNode.Protocol = proto.String(document.Protocol)
		case property.ProtocolId:
			lsNode.ProtocolId = proto.Uint32(uint32(document.ProtocolID))
		case property.Name:
			lsNode.Name = proto.String(document.Name)
		case property.Rev:
			lsNode.Rev = proto.String(document.Rev)
		case property.PeerType:
			lsNode.PeerType = proto.Uint32(uint32(document.PeerType))
		case property.SrAlgorithm:
			helpers.ConvertSrAlgorithm(document.SRAlgorithm)
		case property.Srv6CapabilitiesTlv:
			lsNode.Srv6CapabilitiesTlv = helpers.ConvertSrv6CapabilitiesTlv(document.SRv6CapabilitiesTLV)
		case property.NodeMsd:
			lsNode.NodeMsd = helpers.ConvertNodeMsd(document.NodeMSD)
		case property.FlexAlgoDefinition:
			lsNode.FlexAlgoDefinition = helpers.ConvertFlexAlgoDefinition(document.FlexAlgoDefinition)
		case property.IsAdjRibInPostPolicy:
			lsNode.IsAdjRibInPostPolicy = proto.Bool(document.IsAdjRIBInPost)
		case property.IsAdjRibOutPostPolicy:
			lsNode.IsAdjRibOutPostPolicy = proto.Bool(document.IsAdjRIBOutPost)
		case property.IsLocRibFiltered:
			lsNode.IsLocRibFiltered = proto.Bool(document.IsLocRIBFiltered)
		}
	}
	return &lsNode
}

func convertLsNodeCoordinates(doc interface{}) *jagw.LsNodeCoordinates {
	document := doc.(arango.LsNodeCoordinates)
	return &jagw.LsNodeCoordinates{
		Key:       proto.String(document.Key),
		LsNodeKey: proto.String(document.LsNodeKey),
		Latitude:  proto.Float64(document.Latitude),
		Longitude: proto.Float64(document.Longitude),
	}
}

func convertLsLink(doc interface{}, properties []string) *jagw.LsLink {
	document := doc.(arango.LsLink)
	lsLink := jagw.LsLink{Key: proto.String(document.Key)}

	if len(properties) == 0 {
		properties = property.AllLsLinkProperties
	}

	for _, propertyName := range properties {
		switch propertyName {
		case property.Key:
			lsLink.Key = proto.String(document.Key)
		case property.Id:
			lsLink.Id = proto.String(document.ID)
		case property.RouterHash:
			lsLink.RouterHash = proto.String(document.RouterHash)
		case property.RouterIp:
			lsLink.RouterIp = proto.String(document.RouterIP)
		case property.DomainId:
			lsLink.DomainId = proto.Int64(document.DomainID)
		case property.PeerHash:
			lsLink.PeerHash = proto.String(document.PeerHash)
		case property.PeerIp:
			lsLink.PeerIp = proto.String(document.PeerIP)
		case property.PeerAsn:
			lsLink.PeerAsn = proto.Uint32(document.PeerASN)
		case property.Timestamp:
			lsLink.Timestamp = proto.String(document.Timestamp)
		case property.IgpRouterId:
			lsLink.IgpRouterId = proto.String(document.IGPRouterID)
		case property.Protocol:
			lsLink.Protocol = proto.String(document.Protocol)
		case property.AreaId:
			lsLink.AreaId = proto.String(document.AreaID)
		case property.Nexthop:
			lsLink.Nexthop = proto.String(document.Nexthop)
		case property.Mtid:
			lsLink.Mtid = helpers.ConvertMtid(document.MTID)
		case property.LocalLinkId:
			lsLink.LocalLinkId = proto.Uint32(document.LocalLinkID)
		case property.RemoteLinkId:
			lsLink.RemoteLinkId = proto.Uint32(document.RemoteLinkID)
		case property.LocalLinkIp:
			lsLink.LocalLinkIp = proto.String(document.LocalLinkIP)
		case property.RemoteLinkIp:
			lsLink.RemoteLinkIp = proto.String(document.RemoteLinkIP)
		case property.IgpMetric:
			lsLink.IgpMetric = proto.Uint32(document.IGPMetric)
		case property.RemoteNodeHash:
			lsLink.RemoteNodeHash = proto.String(document.RemoteNodeHash)
		case property.LocalNodeHash:
			lsLink.LocalNodeHash = proto.String(document.LocalNodeHash)
		case property.RemoteIgpRouterId:
			lsLink.RemoteIgpRouterId = proto.String(document.RemoteIGPRouterID)
		case property.UnidirLinkDelay:
			lsLink.UnidirLinkDelay = proto.Uint32(document.UnidirLinkDelay)
		case property.UnidirLinkDelayMinMax:
			lsLink.UnidirLinkDelayMinMax = document.UnidirLinkDelayMinMax
		case property.MaxLinkBwKbps:
			lsLink.MaxLinkBwKbps = proto.Uint64(document.MaxLinkBWKbps)
		case property.UnidirDelayVariation:
			lsLink.UnidirDelayVariation = proto.Uint32(document.UnidirDelayVariation)
		case property.UnidirPacketLoss:
			lsLink.UnidirPacketLoss = proto.Uint32(document.UnidirPacketLoss)
		case property.UnidirResidualBw:
			lsLink.UnidirResidualBw = proto.Uint32(document.UnidirResidualBW)
		case property.UnidirAvailableBw:
			lsLink.UnidirAvailableBw = proto.Uint32(document.UnidirAvailableBW)
		case property.UnidirBwUtilization:
			lsLink.UnidirBwUtilization = proto.Uint32(document.UnidirBWUtilization)
		case property.NormalizedUnidirLinkDelay:
			lsLink.NormalizedUnidirLinkDelay = proto.Float64(document.NormalizedUnidirLinkDelay)
		case property.NormalizedUnidirDelayVariation:
			lsLink.NormalizedUnidirDelayVariation = proto.Float64(document.NormalizedUnidirDelayVariation)
		case property.NormalizedUnidirPacketLoss:
			lsLink.NormalizedUnidirPacketLoss = proto.Float64(document.NormalizedUnidirPacketLoss)
		case property.UnidirPacketLossPercentage:
			lsLink.UnidirPacketLossPercentage = proto.Float64(document.UnidirPacketLossPercentage)
		case property.Rev:
			lsLink.Rev = proto.String(document.Rev)
		case property.PeerType:
			lsLink.PeerType = proto.Uint32(uint32(document.PeerType))
		case property.ProtocolId:
			lsLink.ProtocolId = proto.Uint32(uint32(document.ProtocolID))
		case property.LocalNodeAsn:
			lsLink.LocalNodeAsn = proto.Uint32(document.LocalNodeASN)
		case property.RemoteNodeAsn:
			lsLink.RemoteNodeAsn = proto.Uint32(document.RemoteNodeASN)
		case property.Srv6EndxSid:
			lsLink.Srv6EndxSid = helpers.ConvertSrv6EndXSid(document.SRv6ENDXSID)
		case property.IsAdjRibInPostPolicy:
			lsLink.IsAdjRibInPost = proto.Bool(document.IsAdjRIBInPost)
		case property.IsAdjRibOutPostPolicy:
			lsLink.IsAdjRibOutPost = proto.Bool(document.IsAdjRIBOutPost)
		case property.IsLocRibFiltered:
			lsLink.IsLocRibFiltered = proto.Bool(document.IsLocRIBFiltered)
		}
	}

	return &lsLink
}

func convertLsPrefix(doc interface{}, properties []string) *jagw.LsPrefix {
	document := doc.(arango.LsPrefix)
	lsPrefix := jagw.LsPrefix{Key: proto.String(document.Key)}

	if len(properties) == 0 {
		properties = property.AllLsPrefixProperties
	}

	for _, propertyName := range properties {
		switch propertyName {
		case property.Key:
			lsPrefix.Key = proto.String(document.Key)
		case property.Id:
			lsPrefix.Id = proto.String(document.ID)
		case property.RouterHash:
			lsPrefix.RouterHash = proto.String(document.RouterHash)
		case property.RouterIp:
			lsPrefix.RouterIp = proto.String(document.RouterIP)
		case property.DomainId:
			lsPrefix.DomainId = proto.Int64(document.DomainID)
		case property.PeerHash:
			lsPrefix.PeerHash = proto.String(document.PeerHash)
		case property.PeerIp:
			lsPrefix.PeerIp = proto.String(document.PeerIP)
		case property.PeerAsn:
			lsPrefix.PeerAsn = proto.Uint32(document.PeerASN)
		case property.Timestamp:
			lsPrefix.Timestamp = proto.String(document.Timestamp)
		case property.IgpRouterId:
			lsPrefix.IgpRouterId = proto.String(document.IGPRouterID)
		case property.Protocol:
			lsPrefix.Protocol = proto.String(document.Protocol)
		case property.AreaId:
			lsPrefix.AreaId = proto.String(document.AreaID)
		case property.Nexthop:
			lsPrefix.Nexthop = proto.String(document.Nexthop)
		case property.LocalNodeHash:
			lsPrefix.LocalNodeHash = proto.String(document.LocalNodeHash)
		case property.Mtid:
			lsPrefix.Mtid = helpers.ConvertMtid(document.MTID)
		case property.Prefix:
			lsPrefix.Prefix = proto.String(document.Prefix)
		case property.PrefixLen:
			lsPrefix.PrefixLen = proto.Int32(document.PrefixLen)
		case property.PrefixMetric:
			lsPrefix.PrefixMetric = proto.Uint32(document.PrefixMetric)
		case property.Rev:
			lsPrefix.Rev = proto.String(document.Rev)
		case property.PeerType:
			lsPrefix.PeerType = proto.Uint32(uint32(document.PeerType))
		case property.ProtocolId:
			lsPrefix.ProtocolId = proto.Uint32(uint32(document.ProtocolID))
		case property.Srv6Locator:
			lsPrefix.Srv6Locator = helpers.ConvertSrv6Locator(document.SRv6Locator)
		case property.IsAdjRibInPostPolicy:
			lsPrefix.IsAdjRibInPost = proto.Bool(document.IsAdjRIBInPost)
		case property.IsAdjRibOutPostPolicy:
			lsPrefix.IsAdjRibOutPost = proto.Bool(document.IsAdjRIBOutPost)
		case property.IsLocRibFiltered:
			lsPrefix.IsLocRibFiltered = proto.Bool(document.IsLocRIBFiltered)
		}
	}

	return &lsPrefix
}

func convertLsSrv6Sid(doc interface{}, properties []string) *jagw.LsSrv6Sid {
	document := doc.(arango.LsSrv6Sid)
	lsSRv6SID := jagw.LsSrv6Sid{Key: proto.String(document.Key)}

	if len(properties) == 0 {
		properties = property.AllLsSrv6SidProperties
	}

	for _, propertyName := range properties {
		switch propertyName {
		case property.Key:
			lsSRv6SID.Key = proto.String(document.Key)
		case property.Id:
			lsSRv6SID.Id = proto.String(document.ID)
		case property.RouterHash:
			lsSRv6SID.RouterHash = proto.String(document.RouterHash)
		case property.RouterIp:
			lsSRv6SID.RouterIp = proto.String(document.RouterIP)
		case property.DomainId:
			lsSRv6SID.DomainId = proto.Int64(document.DomainID)
		case property.PeerHash:
			lsSRv6SID.PeerHash = proto.String(document.PeerHash)
		case property.PeerIp:
			lsSRv6SID.PeerIp = proto.String(document.PeerIP)
		case property.PeerAsn:
			lsSRv6SID.PeerAsn = proto.Uint32(document.PeerASN)
		case property.Timestamp:
			lsSRv6SID.Timestamp = proto.String(document.Timestamp)
		case property.IgpRouterId:
			lsSRv6SID.IgpRouterId = proto.String(document.IGPRouterID)
		case property.LocalNodeAsn:
			lsSRv6SID.LocalNodeAsn = proto.Uint32(document.LocalNodeASN)
		case property.Protocol:
			lsSRv6SID.Protocol = proto.String(document.Protocol)
		case property.Nexthop:
			lsSRv6SID.Nexthop = proto.String(document.Nexthop)
		case property.LocalNodeHash:
			lsSRv6SID.LocalNodeHash = proto.String(document.LocalNodeHash)
		case property.Mtid:
			lsSRv6SID.Mtid = helpers.ConvertMtid(document.MTID)
		case property.IgpFlags:
			lsSRv6SID.IgpFlags = proto.Uint32(uint32(document.IGPFlags))
		case property.Srv6Sid:
			lsSRv6SID.Srv6Sid = proto.String(document.SRv6SID)
		case property.Srv6EndpointBehavior:
			lsSRv6SID.Srv6EndpointBehavior = helpers.ConvertSrv6EndpointBehavior(document.SRv6EndpointBehavior)
		case property.Srv6SidStructure:
			lsSRv6SID.Srv6SidStructure = helpers.ConvertSrv6SidStructure(document.SRv6SIDStructure)
		case property.IsAdjRibInPostPolicy:
			lsSRv6SID.IsAdjRibInPost = proto.Bool(document.IsAdjRIBInPost)
		case property.IsAdjRibOutPostPolicy:
			lsSRv6SID.IsAdjRibOutPost = proto.Bool(document.IsAdjRIBOutPost)
		case property.IsLocRibFiltered:
			lsSRv6SID.IsLocRibFiltered = proto.Bool(document.IsLocRIBFiltered)
		}
	}

	return &lsSRv6SID
}

func convertLsNodeEdge(doc interface{}, properties []string) *jagw.LsNodeEdge {
	document := doc.(arango.LsNodeEdge)
	lsNodeEdge := jagw.LsNodeEdge{Key: proto.String(document.Key)}

	if len(properties) == 0 {
		properties = property.AllLsNodeEdgeProperties
	}

	for _, propertyName := range properties {
		switch propertyName {
		case property.Key:
			lsNodeEdge.Key = proto.String(document.Key)
		case property.Id:
			lsNodeEdge.Id = proto.String(document.ID)
		case property.From:
			lsNodeEdge.From = proto.String(document.From)
		case property.To:
			lsNodeEdge.To = proto.String(document.To)
		case property.Link:
			lsNodeEdge.Link = proto.String(document.Link)
		}
	}

	return &lsNodeEdge
}
