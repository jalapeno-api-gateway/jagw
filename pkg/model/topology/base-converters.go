package topology

import "github.com/jalapeno-api-gateway/jagw/pkg/arango"

func convertMtidSlice(docs []*arango.MultiTopologyIdentifier) []*MultiTopologyIdentifier {
	mtids := []*MultiTopologyIdentifier{}
	for _, doc := range docs {
		mtids = append(mtids, convertMtid(doc))
	}
	return mtids
}

func convertMtid(doc *arango.MultiTopologyIdentifier) *MultiTopologyIdentifier {
	return &MultiTopologyIdentifier{
		OFlag: doc.OFlag,
		AFlag: doc.AFlag,
		Mtid:  doc.MTID,
	}
}
