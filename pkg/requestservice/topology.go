package requestservice

import (
	"github.com/jalapeno-api-gateway/jagw-go/jagw"
	"github.com/jalapeno-api-gateway/jagw/pkg/arango"
	"github.com/jalapeno-api-gateway/jagw/pkg/model/property"
	"github.com/jalapeno-api-gateway/jagw/pkg/model/topology"
	"github.com/sbezverk/gobmp/pkg/base"
	"github.com/sbezverk/gobmp/pkg/bgpls"
	"github.com/sbezverk/gobmp/pkg/srv6"
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
			lsNode.Mtid = convertMtidSlice(document.MTID)
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
			lsNode.SrAlgorithm = document.SRAlgorithm
		case property.Srv6CapabilitiesTlv:
			lsNode.Srv6CapabilitiesTlv = convertSrv6CapabilitiesTlv(document.SRv6CapabilitiesTLV)
		case property.NodeMsd:
			lsNode.NodeMsd = convertNodeMsd(document.NodeMSD)
		case property.FlexAlgoDefinition:
			lsNode.FlexAlgoDefinition = convertFlexAlgoDefinition(document.FlexAlgoDefinition)
		case property.IsAdjRibInPost:
			lsNode.IsAdjRibInPost = proto.Bool(document.IsAdjRIBInPost)
		case property.IsAdjRibOutPost:
			lsNode.IsAdjRibOutPost = proto.Bool(document.IsAdjRIBOutPost)
		case property.IsLocRibFiltered:
			lsNode.IsLocRibFiltered = proto.Bool(document.IsLocRIBFiltered)
		}
	}
	return &lsNode
}

func convertSrv6CapabilitiesTlv(srv6CapabilitiesTLV *srv6.CapabilityTLV) *jagw.Srv6CapabilitiesTlv {
	return &jagw.Srv6CapabilitiesTlv{
		OFlag: proto.Bool(srv6CapabilitiesTLV.OFlag),
	}
}

func convertNodeMsd(nodeMsd []*base.MSDTV) *jagw.NodeMsd {
	jagwNodeMsds := []*jagw.NodeMsd{}
	for _, msd := range nodeMsd {
		jagwNodeMsd := &jagw.NodeMsd{
			Type:  proto.Uint32(uint32(msd.Type)),
			Value: proto.Uint32(uint32(msd.Value)),
		}
		jagwNodeMsds = append(jagwNodeMsds, jagwNodeMsd)
	}
	return jagwNodeMsds
}

func convertFlexAlgoDefinition(flexAlgoDefinition []*bgpls.FlexAlgoDefinition) *jagw.FlexAlgoDefinition {
	flexAlgorithms := []*jagw.FlexAlgoDefinition{}
	for _, definition := range flexAlgoDefinition {

		flexAlgo := &jagw.FlexAlgoDefinition{
			FlexAlgorithm:   proto.Uint32(uint32(definition.FlexAlgorithm)),
			MetricType:      proto.Uint32(uint32(definition.MetricType)),
			CalculationType: proto.Uint32(uint32(definition.CalculationType)),
			Priority:        proto.Uint32(uint32(definition.Priority)),
		}
		flexAlgorithms = append(flexAlgorithms, flexAlgo)
	}
	return flexAlgorithms
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
			lsLink.Mtid = convertMtid(document.MTID)
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
			lsLink.Srv6EndxSid = convertSrv6EndXSid(document.SRv6ENDXSID)
		case property.IsAdjRibInPost:
			lsLink.IsAdjRibInPost = proto.Bool(document.IsAdjRIBInPost)
		case property.IsAdjRibOutPost:
			lsLink.IsAdjRibOutPost = proto.Bool(document.IsAdjRIBOutPost)
		case property.IsLocRibFiltered:
			lsLink.IsLocRibFiltered = proto.Bool(document.IsLocRIBFiltered)
		}
	}

	return &lsLink
}

func convertSrv6EndXSidFlags(flags *srv6.EndXSIDFlags) *jagw.Srv6EndxSidFlags {
	return &jagw.Srv6EndxSidFlags{
		BFlag: proto.Bool(flags.BFlag),
		SFlag: proto.Bool(flags.SFlag),
		PFlag: proto.Bool(flags.PFlag),
	}
}

func convertSrv6EndXSid(srv6EndXSID []*srv6.EndXSIDTLV) *jagw.Srv6EndxSid {
	srv6EndXSIDs := []*jagw.Srv6EndxSid{}
	for _, srv6EndXSID := range srv6EndXSID {
		srv6EndX := &jagw.Srv6EndxSid{
			Type:             proto.Uint32(uint32(srv6EndXSID.Type)),
			Length:           proto.Uint32(uint32(srv6EndXSID.Length)),
			EndpointBehavior: proto.Uint32(uint32(srv6EndXSID.EndpointBehavior)),
			Algorithm:        proto.Uint32(uint32(srv6EndXSID.Algorithm)),
			Weight:           proto.Uint32(uint32(srv6EndXSID.Weight)),
			Sid:              proto.String(srv6EndXSID.SID),
			Flags:            convertSrv6EndXSidFlags(srv6EndXSID.Flags),
		}
		srv6EndXSIDs = append(srv6EndXSIDs, srv6EndX)
	}
	return srv6EndXSIDs
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
			lsPrefix.PeerAsn = proto.Int32(int32(document.PeerASN))
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
			lsPrefix.Mtid = convertMtid(document.MTID)
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
			lsPrefix.Srv6Locator = convertSrv6Locator(document.SRv6Locator)
		case property.IsAdjRibInPost:
			lsPrefix.IsAdjRibInPost = proto.Bool(document.IsAdjRIBInPost)
		case property.IsAdjRibOutPost:
			lsPrefix.IsAdjRibOutPost = proto.Bool(document.IsAdjRIBOutPost)
		case property.IsLocRibFiltered:
			lsPrefix.IsLocRibFiltered = proto.Bool(document.IsLocRIBFiltered)
		}
	}

	return &lsPrefix
}

func convertLocatorFlags(flags *srv6.LocatorFlags) *jagw.LocatorFlags {
	return &jagw.LocatorFlags{
		DFlag: proto.Bool(flags.DFlag),
	}
}

func convertSrv6Locator(srv6Locator *srv6.LocatorTLV) *jagw.Srv6Locator {
	return &jagw.Srv6LocatorTLV{
		Flags:  convertLocatorFlags(srv6Locator.Flag),
		Algo:   proto.Uint32(uint32(srv6Locator.Algorithm)),
		Metric: proto.Uint32(srv6Locator.Metric),
	}
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
			lsSRv6SID.Mtid = convertMtid(document.MTID)
		case property.IgpFlags:
			lsSRv6SID.IgpFlags = proto.Uint32(uint32(document.IGPFlags))
		case property.Srv6Sid:
			lsSRv6SID.Srv6Sid = proto.String(document.SRv6SID)
		case property.Srv6EndpointBehavior:
			lsSRv6SID.Srv6EndpointBehavior = convertSrv6EndpointBehavior(document.SRv6EndpointBehavior)
		case property.Srv6SidStructure:
			lsSRv6SID.Srv6SidStructure = convertSrv6SidStructure(document.SRv6SIDStructure)
		case property.IsAdjRibInPost:
			lsSRv6SID.IsAdjRibInPost = proto.Bool(document.IsAdjRIBInPost)
		case property.IsAdjRibOutPost:
			lsSRv6SID.IsAdjRibOutPost = proto.Bool(document.IsAdjRIBOutPost)
		case property.IsLocRibFiltered:
			lsSRv6SID.IsLocRibFiltered = proto.Bool(document.IsLocRIBFiltered)
		}
	}

	return &lsSRv6SID
}

func convertSrv6EndpointBehavior(srv6EndpointBehavior *srv6.EndpointBehavior) *jagw.Srv6EndpointBehavior {
	return &jagw.Srv6EndpointBehavior{
		EndpointBehavior: proto.Uint32(uint32(srv6EndpointBehavior.EndpointBehavior)),
		Flag:             proto.Uint32(uint32(srv6EndpointBehavior.Flag)),
		Algorithm:        proto.Uint32(uint32(srv6EndpointBehavior.Algorithm)),
	}
}

func convertSrv6SidStructure(srv6SidStructure *srv6.SIDStructure) *jagw.Srv6SidStructure {
	return &jagw.Srv6SidStructure{
		Type:               proto.Uint32(uint32(srv6SidStructure.Type)),
		Length:             proto.Uint32(uint32(srv6SidStructure.Length)),
		LocatorBlockLength: proto.Uint32(uint32(srv6SidStructure.LBLength)),
		LocatorNodeLength:  proto.Uint32(uint32(srv6SidStructure.LNLength)),
		FunctionLength:     proto.Uint32(uint32(srv6SidStructure.FunLength)),
		ArgumentLength:     proto.Uint32(uint32(srv6SidStructure.ArgLength)),
	}
}

func convertLsNodeEdge(doc interface{}, properties []string) *jagw.LsNodeEdge {
	document := doc.(topology.LsNodeEdge)
	lsNodeEdge := jagw.LsNodeEdge{Key: proto.String(document.Key)}

	if len(properties) == 0 {
		properties = property.AllLsNodeEdgeProperties
	}

	for _, propertyName := range properties {
		switch propertyName {
		case property.Key:
			lsNodeEdge.Key = proto.String(document.Key)
		case property.Id:
			lsNodeEdge.Id = proto.String(document.Id)
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

func convertMtidSlice(documents []*topology.MultiTopologyIdentifier) []*jagw.MultiTopologyIdentifier {
	mtids := []*jagw.MultiTopologyIdentifier{}
	for _, doc := range documents {
		mtids = append(mtids, convertMtid(doc))
	}
	return mtids
}

func convertMtid(doc *topology.MultiTopologyIdentifier) *jagw.MultiTopologyIdentifier {
	return &jagw.MultiTopologyIdentifier{
		OFlag: proto.Bool(doc.OFlag),
		AFlag: proto.Bool(doc.AFlag),
		Mtid:  proto.Uint32(uint32(doc.Mtid)),
	}
}
