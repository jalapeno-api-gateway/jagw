package requestservice

import (
	"github.com/jalapeno-api-gateway/jagw-go/jagw"
	"github.com/jalapeno-api-gateway/jagw/pkg/model/property"
	"github.com/jalapeno-api-gateway/jagw/pkg/model/topology"
	"github.com/sirupsen/logrus"
	"google.golang.org/protobuf/proto"
)

func convertLsNode(logger *logrus.Entry, doc interface{}, properties []string) *jagw.LsNode {
	document := doc.(topology.LsNode)
	lsNode := jagw.LsNode{Key: proto.String(document.Key)}

	if len(properties) == 0 {
		properties = property.AllLsNodeProperties
	}

	for _, propertyName := range properties {
		switch propertyName {
		case property.Key:
			lsNode.Key = proto.String(document.Key)
		case property.Id:
			lsNode.Id = proto.String(document.Id)
		case property.RouterHash:
			lsNode.RouterHash = proto.String(document.RouterHash)
		case property.DomainId:
			lsNode.DomainId = proto.Int64(document.DomainId)
		case property.RouterIp:
			lsNode.RouterIp = proto.String(document.RouterIp)
		case property.PeerHash:
			lsNode.PeerHash = proto.String(document.PeerHash)
		case property.PeerIp:
			lsNode.PeerIp = proto.String(document.PeerIp)
		case property.PeerAsn:
			lsNode.PeerAsn = proto.Int32(document.PeerAsn)
		case property.Timestamp:
			lsNode.Timestamp = proto.String(document.Timestamp)
		case property.IgpRouterId:
			lsNode.IgpRouterId = proto.String(document.IgpRouterId)
		case property.Asn:
			lsNode.Asn = proto.Uint32(document.Asn)
		case property.Mtid:
			lsNode.Mtid = convertMtidSlice(document.Mtid)
		case property.AreaId:
			lsNode.AreaId = proto.String(document.AreaId)
		case property.Protocol:
			lsNode.Protocol = proto.String(document.Protocol)
		case property.ProtocolId:
			lsNode.ProtocolId = proto.Uint32(uint32(document.ProtocolId))
		case property.Name:
			lsNode.Name = proto.String(document.Name)
		case property.IsPrepolicy:
			lsNode.IsPrepolicy = proto.Bool(document.IsPrepolicy)
		case property.IsAdjRibIn:
			lsNode.IsAdjRibIn = proto.Bool(document.IsAdjRibIn)
		}
	}

	return &lsNode
}

func convertLsNodeCoordinates(doc interface{}) *jagw.LsNodeCoordinates {
	document := doc.(topology.LsNodeCoordinates)
	return &jagw.LsNodeCoordinates{
		Key:       proto.String(document.Key),
		LsNodeKey: proto.String(document.LsNodeKey),
		Latitude:  proto.Float64(document.Latitude),
		Longitude: proto.Float64(document.Longitude),
	}
}

func convertLsLink(doc interface{}, properties []string) *jagw.LsLink {
	document := doc.(topology.LsLink)
	lsLink := jagw.LsLink{Key: proto.String(document.Key)}

	if len(properties) == 0 {
		properties = property.AllLsLinkProperties
	}

	for _, propertyName := range properties {
		switch propertyName {
		case property.Key:
			lsLink.Key = proto.String(document.Key)
		case property.Id:
			lsLink.Id = proto.String(document.Id)
		case property.RouterHash:
			lsLink.RouterHash = proto.String(document.RouterHash)
		case property.RouterIp:
			lsLink.RouterIp = proto.String(document.RouterIp)
		case property.DomainId:
			lsLink.DomainId = proto.Int64(document.DomainId)
		case property.PeerHash:
			lsLink.PeerHash = proto.String(document.PeerHash)
		case property.PeerIp:
			lsLink.PeerIp = proto.String(document.PeerIp)
		case property.PeerAsn:
			lsLink.PeerAsn = proto.Int32(document.PeerAsn)
		case property.Timestamp:
			lsLink.Timestamp = proto.String(document.Timestamp)
		case property.IgpRouterId:
			lsLink.IgpRouterId = proto.String(document.IgpRouterId)
		case property.Protocol:
			lsLink.Protocol = proto.String(document.Protocol)
		case property.AreaId:
			lsLink.AreaId = proto.String(document.AreaId)
		case property.Nexthop:
			lsLink.Nexthop = proto.String(document.Nexthop)
		case property.Mtid:
			lsLink.Mtid = convertMtid(document.Mtid)
		case property.LocalLinkIp:
			lsLink.LocalLinkIp = proto.String(document.LocalLinkIp)
		case property.RemoteLinkIp:
			lsLink.RemoteLinkIp = proto.String(document.RemoteLinkIp)
		case property.IgpMetric:
			lsLink.IgpMetric = proto.Uint32(document.IgpMetric)
		case property.RemoteNodeHash:
			lsLink.RemoteNodeHash = proto.String(document.RemoteNodeHash)
		case property.LocalNodeHash:
			lsLink.LocalNodeHash = proto.String(document.LocalNodeHash)
		case property.RemoteIgpRouterId:
			lsLink.RemoteIgpRouterId = proto.String(document.RemoteIgpRouterId)
		case property.UnidirLinkDelay:
			lsLink.UnidirLinkDelay = proto.Uint32(document.UnidirLinkDelay)
		case property.UnidirLinkDelayMinMax:
			lsLink.UnidirLinkDelayMinMax = document.UnidirLinkDelayMinMax
		}
	}

	return &lsLink
}

func convertLsPrefix(doc interface{}, properties []string) *jagw.LsPrefix {
	document := doc.(topology.LsPrefix)
	lsPrefix := jagw.LsPrefix{Key: proto.String(document.Key)}

	if len(properties) == 0 {
		properties = property.AllLsPrefixProperties
	}

	for _, propertyName := range properties {
		switch propertyName {
		case property.Key:
			lsPrefix.Key = proto.String(document.Key)
		case property.Id:
			lsPrefix.Id = proto.String(document.Id)
		case property.RouterHash:
			lsPrefix.RouterHash = proto.String(document.RouterHash)
		case property.RouterIp:
			lsPrefix.RouterIp = proto.String(document.RouterIp)
		case property.DomainId:
			lsPrefix.DomainId = proto.Int64(document.DomainId)
		case property.PeerHash:
			lsPrefix.PeerHash = proto.String(document.PeerHash)
		case property.PeerIp:
			lsPrefix.PeerIp = proto.String(document.PeerIp)
		case property.PeerAsn:
			lsPrefix.PeerAsn = proto.Int32(document.PeerAsn)
		case property.Timestamp:
			lsPrefix.Timestamp = proto.String(document.Timestamp)
		case property.IgpRouterId:
			lsPrefix.IgpRouterId = proto.String(document.IgpRouterId)
		case property.Protocol:
			lsPrefix.Protocol = proto.String(document.Protocol)
		case property.AreaId:
			lsPrefix.AreaId = proto.String(document.AreaId)
		case property.Nexthop:
			lsPrefix.Nexthop = proto.String(document.Nexthop)
		case property.LocalNodeHash:
			lsPrefix.LocalNodeHash = proto.String(document.LocalNodeHash)
		case property.Mtid:
			lsPrefix.Mtid = convertMtid(document.Mtid)
		case property.Prefix:
			lsPrefix.Prefix = proto.String(document.Prefix)
		case property.PrefixLen:
			lsPrefix.PrefixLen = proto.Int32(document.PrefixLen)
		case property.PrefixMetric:
			lsPrefix.PrefixMetric = proto.Uint32(document.PrefixMetric)
		case property.IsPrepolicy:
			lsPrefix.IsPrepolicy = proto.Bool(document.IsPrepolicy)
		case property.IsAdjRibIn:
			lsPrefix.IsAdjRibIn = proto.Bool(document.IsAdjRibIn)
		}
	}

	return &lsPrefix
}

func convertLsSrv6Sid(doc interface{}, properties []string) *jagw.LsSrv6Sid {
	document := doc.(topology.LsSrv6Sid)
	lsSRv6SID := jagw.LsSrv6Sid{Key: proto.String(document.Key)}

	if len(properties) == 0 {
		properties = property.AllLsSrv6SidProperties
	}

	for _, propertyName := range properties {
		switch propertyName {
		case property.Key:
			lsSRv6SID.Key = proto.String(document.Key)
		case property.Id:
			lsSRv6SID.Id = proto.String(document.Id)
		case property.RouterHash:
			lsSRv6SID.RouterHash = proto.String(document.RouterHash)
		case property.RouterIp:
			lsSRv6SID.RouterIp = proto.String(document.RouterIp)
		case property.DomainId:
			lsSRv6SID.DomainId = proto.Int64(document.DomainId)
		case property.PeerHash:
			lsSRv6SID.PeerHash = proto.String(document.PeerHash)
		case property.PeerIp:
			lsSRv6SID.PeerIp = proto.String(document.PeerIp)
		case property.PeerAsn:
			lsSRv6SID.PeerAsn = proto.Int32(document.PeerAsn)
		case property.Timestamp:
			lsSRv6SID.Timestamp = proto.String(document.Timestamp)
		case property.IgpRouterId:
			lsSRv6SID.IgpRouterId = proto.String(document.IgpRouterId)
		case property.LocalNodeAsn:
			lsSRv6SID.LocalNodeAsn = proto.Uint32(document.LocalNodeAsn)
		case property.Protocol:
			lsSRv6SID.Protocol = proto.String(document.Protocol)
		case property.Nexthop:
			lsSRv6SID.Nexthop = proto.String(document.Nexthop)
		case property.LocalNodeHash:
			lsSRv6SID.LocalNodeHash = proto.String(document.LocalNodeHash)
		case property.Mtid:
			lsSRv6SID.Mtid = convertMtid(document.Mtid)
		case property.IgpFlags:
			lsSRv6SID.IgpFlags = proto.Uint32(uint32(document.IgpFlags))
		case property.IsPrepolicy:
			lsSRv6SID.IsPrepolicy = proto.Bool(document.IsPrepolicy)
		case property.IsAdjRibIn:
			lsSRv6SID.IsAdjRibIn = proto.Bool(document.IsAdjRibIn)
		case property.Srv6Sid:
			lsSRv6SID.Srv6Sid = proto.String(document.Srv6Sid)
		}
	}

	return &lsSRv6SID
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
