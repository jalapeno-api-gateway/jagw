package topology

import "github.com/jalapeno-api-gateway/jagw/pkg/arango"

func ConvertLsNode(doc arango.LSNode) LsNode {
	return LsNode{
		Id:          doc.ID,
		Key:         doc.Key,
		RouterHash:  doc.RouterHash,
		DomainId:    doc.DomainID,
		RouterIp:    doc.RouterIP,
		PeerHash:    doc.PeerHash,
		PeerIp:      doc.PeerIP,
		PeerAsn:     doc.PeerASN,
		Timestamp:   doc.Timestamp,
		IgpRouterId: doc.IGPRouterID,
		Asn:         doc.ASN,
		Mtid:        convertMtidSlice(doc.MTID),
		AreaId:      doc.AreaID,
		Protocol:    doc.Protocol,
		ProtocolId:  doc.ProtocolID,
		Name:        doc.Name,
		IsPrepolicy: doc.IsPrepolicy,
		IsAdjRibIn:  doc.IsAdjRIBIn,
	}
}

func ConvertLsNodeCoordinates(doc arango.LSNode_Coordinates) LsNodeCoordinates {
	return LsNodeCoordinates{
		Id:        doc.ID,
		Key:       doc.Key,
		LsNodeKey: doc.LsNodeKey,
		Latitude:  doc.Latitude,
		Longitude: doc.Longitude,
	}
}

func ConvertLsLink(doc arango.LSLink) LsLink {
	return LsLink{
		Id:                    doc.ID,
		Key:                   doc.Key,
		RouterHash:            doc.RouterHash,
		RouterIp:              doc.RouterIP,
		DomainId:              doc.DomainID,
		PeerHash:              doc.PeerHash,
		PeerIp:                doc.PeerIP,
		PeerAsn:               doc.PeerASN,
		Timestamp:             doc.Timestamp,
		IgpRouterId:           doc.IGPRouterID,
		Protocol:              doc.Protocol,
		AreaId:                doc.AreaID,
		Nexthop:               doc.Nexthop,
		Mtid:                  convertMtid(doc.MTID),
		LocalLinkIp:           doc.LocalLinkIP,
		RemoteLinkIp:          doc.RemoteLinkIP,
		IgpMetric:             doc.IGPMetric,
		RemoteNodeHash:        doc.RemoteNodeHash,
		LocalNodeHash:         doc.LocalNodeHash,
		RemoteIgpRouterId:     doc.RemoteIGPRouterID,
		UnidirLinkDelay:       doc.UnidirLinkDelay,
		UnidirLinkDelayMinMax: doc.UnidirLinkDelayMinMax,
		MaxLinkBWKbps:         doc.MaxLinkBWKbps,
		UnidirDelayVariation:  doc.UnidirDelayVariation,
		UnidirPacketLoss:      doc.UnidirPacketLoss,
		UnidirResidualBW:      doc.UnidirResidualBW,
		UnidirAvailableBW:     doc.UnidirAvailableBW,
		UnidirBWUtilization:   doc.UnidirBWUtilization,
	}
}

func ConvertLsPrefix(doc arango.LSPrefix) LsPrefix {
	return LsPrefix{
		Key:           doc.Key,
		Id:            doc.ID,
		RouterHash:    doc.RouterHash,
		RouterIp:      doc.RouterIP,
		DomainId:      doc.DomainID,
		PeerHash:      doc.PeerHash,
		PeerIp:        doc.PeerIP,
		PeerAsn:       doc.PeerASN,
		Timestamp:     doc.Timestamp,
		IgpRouterId:   doc.IGPRouterID,
		Protocol:      doc.Protocol,
		AreaId:        doc.AreaID,
		Nexthop:       doc.Nexthop,
		LocalNodeHash: doc.LocalNodeHash,
		Mtid:          convertMtid(doc.MTID),
		Prefix:        doc.Prefix,
		PrefixLen:     doc.PrefixLen,
		PrefixMetric:  doc.PrefixMetric,
		IsPrepolicy:   doc.IsPrepolicy,
		IsAdjRibIn:    doc.IsAdjRIBIn,
	}
}

func ConvertLsSrv6Sid(doc arango.LSSRv6SID) LsSrv6Sid {
	return LsSrv6Sid{
		Key:           doc.Key,
		Id:            doc.ID,
		RouterHash:    doc.RouterHash,
		RouterIp:      doc.RouterIP,
		DomainId:      doc.DomainID,
		PeerHash:      doc.PeerHash,
		PeerIp:        doc.PeerIP,
		PeerAsn:       doc.PeerASN,
		Timestamp:     doc.Timestamp,
		IgpRouterId:   doc.IGPRouterID,
		LocalNodeAsn:  doc.LocalNodeASN,
		Protocol:      doc.Protocol,
		Nexthop:       doc.Nexthop,
		LocalNodeHash: doc.LocalNodeHash,
		Mtid:          convertMtid(doc.MTID),
		IgpFlags:      doc.IGPFlags,
		IsPrepolicy:   doc.IsPrepolicy,
		IsAdjRibIn:    doc.IsAdjRIBIn,
		Srv6Sid:       doc.SRv6SID,
	}
}

func ConvertLsNodeEdge(doc arango.LSNode_Edge) LsNodeEdge {
	return LsNodeEdge{
		Key:  doc.Key,
		Id:   doc.ID,
		From: doc.From,
		To:   doc.To,
		Link: doc.Link,
	}
}
