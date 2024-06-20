package helpers

import (
	"errors"
	"os"
	"os/signal"

	protocol "github.com/influxdata/line-protocol"
	"github.com/jalapeno-api-gateway/jagw-go/jagw"
	"github.com/sbezverk/gobmp/pkg/base"
	"github.com/sbezverk/gobmp/pkg/bgpls"
	"github.com/sbezverk/gobmp/pkg/srv6"
	"google.golang.org/protobuf/proto"
)

func WatchInterruptSignals() chan os.Signal {
	signals := make(chan os.Signal, 1)
	signal.Notify(signals, os.Interrupt)
	return signals
}

func GetValueByPropertyName(metric protocol.Metric, propertyName string) (interface{}, error) {
	for _, tag := range metric.TagList() {
		if tag.Key == propertyName {
			return tag.Value, nil
		}
	}
	for _, field := range metric.FieldList() {
		if field.Key == propertyName {
			return field.Value, nil
		}
	}
	return "", errors.New("Property not found in Metric.")
}

func IsInSlice(slice []string, value string) bool {
	for _, elem := range slice {
		if elem == value {
			return true
		}
	}
	return false
}

func ConvertSrv6CapabilitiesTlv(srv6CapabilitiesTLV *srv6.CapabilityTLV) *jagw.Srv6CapabilitiesTlv {
	return &jagw.Srv6CapabilitiesTlv{
		OFlag: proto.Bool(srv6CapabilitiesTLV.OFlag),
	}
}

func ConvertNodeMsd(nodeMsd []*base.MSDTV) []*jagw.NodeMsd {
	jagwNodeMsds := make([]*jagw.NodeMsd, len(nodeMsd))
	for index, msd := range nodeMsd {
		jagwNodeMsd := &jagw.NodeMsd{
			MsdType:  proto.Uint32(uint32(msd.Type)),
			MsdValue: proto.Uint32(uint32(msd.Value)),
		}
		jagwNodeMsds[index] = jagwNodeMsd
	}
	return jagwNodeMsds
}

func ConvertFlexAlgoDefinition(flexAlgoDefinition []*bgpls.FlexAlgoDefinition) []*jagw.FlexAlgoDefinition {
	flexAlgorithms := make([]*jagw.FlexAlgoDefinition, len(flexAlgoDefinition))
	for index, definition := range flexAlgoDefinition {
		flexAlgo := &jagw.FlexAlgoDefinition{
			FlexAlgo:        proto.Uint32(uint32(definition.FlexAlgorithm)),
			MetricType:      proto.Uint32(uint32(definition.MetricType)),
			CalculationType: proto.Uint32(uint32(definition.CalculationType)),
			Priority:        proto.Uint32(uint32(definition.Priority)),
		}
		flexAlgorithms[index] = flexAlgo
	}
	return flexAlgorithms
}

func convertSrv6EndXSidFlags(flags *srv6.EndXSIDFlags) *jagw.Srv6EndXSidFlags {
	return &jagw.Srv6EndXSidFlags{
		BFlag: proto.Bool(flags.BFlag),
		SFlag: proto.Bool(flags.SFlag),
		PFlag: proto.Bool(flags.PFlag),
	}
}

func ConvertSrv6EndXSid(srv6EndXSID []*srv6.EndXSIDTLV) []*jagw.Srv6EndXSidTlv {
	srv6EndXSIDs := make([]*jagw.Srv6EndXSidTlv, len(srv6EndXSID))
	for index, srv6EndXSID := range srv6EndXSID {
		srv6EndX := &jagw.Srv6EndXSidTlv{
			Type:             proto.Uint32(uint32(srv6EndXSID.Type)),
			Length:           proto.Uint32(uint32(srv6EndXSID.Length)),
			EndpointBehavior: proto.Uint32(uint32(srv6EndXSID.EndpointBehavior)),
			Algorithm:        proto.Uint32(uint32(srv6EndXSID.Algorithm)),
			Weight:           proto.Uint32(uint32(srv6EndXSID.Weight)),
			Sid:              proto.String(srv6EndXSID.SID),
			Flags:            convertSrv6EndXSidFlags(srv6EndXSID.Flags),
		}
		srv6EndXSIDs[index] = srv6EndX
	}
	return srv6EndXSIDs
}

func convertLocatorFlags(flags *srv6.LocatorFlags) *jagw.Srv6LocatorFlags {
	if flags == nil {
		return nil
	}
	return &jagw.Srv6LocatorFlags{
		DFlag: proto.Bool(flags.DFlag),
	}
}

func ConvertSrv6Locator(srv6Locator *srv6.LocatorTLV) *jagw.Srv6LocatorTlv {
	if srv6Locator == nil {
		return nil
	}
	return &jagw.Srv6LocatorTlv{
		Flags:  convertLocatorFlags(srv6Locator.Flag),
		Algo:   proto.Uint32(uint32(srv6Locator.Algorithm)),
		Metric: proto.Uint32(srv6Locator.Metric),
	}
}

func ConvertSrv6EndpointBehavior(srv6EndpointBehavior *srv6.EndpointBehavior) *jagw.Srv6EndpointBehavior {
	if srv6EndpointBehavior == nil {
		return nil
	}
	return &jagw.Srv6EndpointBehavior{
		EndpointBehavior: proto.Uint32(uint32(srv6EndpointBehavior.EndpointBehavior)),
		Flag:             proto.Uint32(uint32(srv6EndpointBehavior.Flag)),
		Algorithm:        proto.Uint32(uint32(srv6EndpointBehavior.Algorithm)),
	}
}

func ConvertSrv6SidStructure(srv6SidStructure *srv6.SIDStructure) *jagw.Srv6SidStructure {
	if srv6SidStructure == nil {
		return nil
	}
	return &jagw.Srv6SidStructure{
		Type:               proto.Uint32(uint32(srv6SidStructure.Type)),
		Length:             proto.Uint32(uint32(srv6SidStructure.Length)),
		LocatorBlockLength: proto.Uint32(uint32(srv6SidStructure.LBLength)),
		LocatorNodeLength:  proto.Uint32(uint32(srv6SidStructure.LNLength)),
		FunctionLength:     proto.Uint32(uint32(srv6SidStructure.FunLength)),
		ArgumentLength:     proto.Uint32(uint32(srv6SidStructure.ArgLength)),
	}
}

func ConvertMtidSlice(documents []*base.MultiTopologyIdentifier) []*jagw.MultiTopologyIdentifier {
	mtids := make([]*jagw.MultiTopologyIdentifier, len(documents))
	for index, doc := range documents {
		if doc != nil {
			mtids[index] = ConvertMtid(doc)
		}
	}
	return mtids
}

func ConvertMtid(doc *base.MultiTopologyIdentifier) *jagw.MultiTopologyIdentifier {
	if doc == nil {
		return nil
	}
	return &jagw.MultiTopologyIdentifier{
		OFlag: proto.Bool(doc.OFlag),
		AFlag: proto.Bool(doc.AFlag),
		Mtid:  proto.Uint32(uint32(doc.MTID)),
	}
}

func ConvertSrAlgorithm(srAlgorithms []int) []uint32 {
	srAlgos := make([]uint32, len(srAlgorithms))
	for index, algo := range srAlgorithms {
		srAlgos[index] = uint32(algo)
	}
	return srAlgos
}
