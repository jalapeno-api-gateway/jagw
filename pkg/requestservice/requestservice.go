package requestservice

import (
	"context"
	"fmt"

	"github.com/jalapeno-api-gateway/jagw-go/jagw"
	"github.com/jalapeno-api-gateway/jagw/pkg/jagwerror"
	"github.com/jalapeno-api-gateway/jagw/pkg/model/class"
	"github.com/sirupsen/logrus"
)

type requestServiceServer struct {
	jagw.UnimplementedRequestServiceServer
}

func NewServer() *requestServiceServer {
	s := &requestServiceServer{}
	return s
}

func (s *requestServiceServer) GetLsNodes(ctx context.Context, request *jagw.TopologyRequest) (*jagw.LsNodeResponse, error) {
	logger := logrus.WithFields(logrus.Fields{"clientIp": getClientIp(ctx), "grpcFunction": "GetLsNodes"})
	logger.Debug("Incoming request.")

	documents, jagwError := fetchDocuments(ctx, logger, request.Keys, class.LsNode)

	logger.Debug("Preparing response.")
	response := &jagw.LsNodeResponse{}

	for _, document := range documents {
		lsNode := convertLsNode(logger, document, request.Properties)
		response.LsNodes = append(response.LsNodes, lsNode)
	}

	logger.Debug("Sending response.")
	return response, jagwerror.GetGrpcError(jagwError)
}

func (s *requestServiceServer) GetLsNodeCoordinates(ctx context.Context, request *jagw.LsNodeCoordinatesRequest) (*jagw.LsNodeCoordinatesResponse, error) {
	logger := logrus.WithFields(logrus.Fields{"clientIp": getClientIp(ctx), "grpcFunction": "GetLsNodeCoordinates"})
	logger.Debug("Incoming request.")

	documentKeys := []string{}

	for _, lsNodeKey := range request.LsNodeKeys {
		documentKeys = append(documentKeys, fmt.Sprintf("%s_Coordinates", lsNodeKey))
	}

	documents, jagwError := fetchDocuments(ctx, logger, documentKeys, class.LsNodeCoordinates)

	logger.Debug("Preparing response.")
	response := &jagw.LsNodeCoordinatesResponse{}

	for _, document := range documents {
		lsNode := convertLsNodeCoordinates(document)
		response.Coordinates = append(response.Coordinates, lsNode)
	}

	logger.Debug("Sending response.")
	return response, jagwerror.GetGrpcError(jagwError)
}

func (s *requestServiceServer) GetLsLinks(ctx context.Context, request *jagw.TopologyRequest) (*jagw.LsLinkResponse, error) {
	logger := logrus.WithFields(logrus.Fields{"clientIp": getClientIp(ctx), "grpcFunction": "GetLsLinks"})
	logger.Debug("Incoming request.")

	documents, jagwError := fetchDocuments(ctx, logger, request.Keys, class.LsLink)

	logger.Debug("Preparing response.")
	response := &jagw.LsLinkResponse{}

	for _, document := range documents {
		lsLink := convertLsLink(document, request.Properties)
		response.LsLinks = append(response.LsLinks, lsLink)
	}

	logger.Debug("Sending response.")
	return response, jagwerror.GetGrpcError(jagwError)
}

func (s *requestServiceServer) GetLsPrefixes(ctx context.Context, request *jagw.TopologyRequest) (*jagw.LsPrefixResponse, error) {
	logger := logrus.WithFields(logrus.Fields{"clientIp": getClientIp(ctx), "grpcFunction": "GetLsPrefixes"})
	logger.Debug("Incoming request.")

	documents, jagwError := fetchDocuments(ctx, logger, request.Keys, class.LsPrefix)

	logger.Debug("Preparing response.")
	response := &jagw.LsPrefixResponse{}

	for _, document := range documents {
		lsPrefix := convertLsPrefix(document, request.Properties)
		response.LsPrefixes = append(response.LsPrefixes, lsPrefix)
	}

	logger.Debug("Sending response.")
	return response, jagwerror.GetGrpcError(jagwError)
}

func (s *requestServiceServer) GetLsSrv6Sids(ctx context.Context, request *jagw.TopologyRequest) (*jagw.LsSrv6SidResponse, error) {
	logger := logrus.WithFields(logrus.Fields{"clientIp": getClientIp(ctx), "grpcFunction": "GetLsSrv6Sids"})
	logger.Debug("Incoming request.")

	documents, jagwError := fetchDocuments(ctx, logger, request.Keys, class.LsSrv6Sid)

	logger.Debug("Preparing response.")
	response := &jagw.LsSrv6SidResponse{}

	for _, document := range documents {
		lsSRv6SID := convertLsSrv6Sid(document, request.Properties)
		response.LsSrv6Sids = append(response.LsSrv6Sids, lsSRv6SID)
	}

	logger.Debug("Sending response.")
	return response, jagwerror.GetGrpcError(jagwError)
}

func (s *requestServiceServer) GetLsNodeEdges(ctx context.Context, request *jagw.TopologyRequest) (*jagw.LsNodeEdgeResponse, error) {
	logger := logrus.WithFields(logrus.Fields{"clientIp": getClientIp(ctx), "grpcFunction": "GetLsNodeEdges"})
	logger.Debug("Incoming request.")

	documents, jagwError := fetchDocuments(ctx, logger, request.Keys, class.LsNodeEdge)

	logger.Debug("Preparing response.")
	response := &jagw.LsNodeEdgeResponse{}

	for _, document := range documents {
		lsNodeEdge := convertLsNodeEdge(document, request.Properties)
		response.LsNodeEdges = append(response.LsNodeEdges, lsNodeEdge)
	}

	logger.Debug("Sending response.")
	return response, jagwerror.GetGrpcError(jagwError)
}

func (s *requestServiceServer) GetTelemetryData(ctx context.Context, request *jagw.TelemetryRequest) (*jagw.TelemetryResponse, error) {
	logger := logrus.WithFields(logrus.Fields{"clientIp": getClientIp(ctx), "grpcFunction": "GetTelemetryData"})
	logger.Debug("Incoming request.")

	telemetryData := fetchTelemetryData(logger, request)
	response := &jagw.TelemetryResponse{TelemetryData: telemetryData}

	logger.Debug("Sending response.")
	return response, nil
}

func (s *requestServiceServer) GetMeasurements(ctx context.Context, request *jagw.MeasurementsRequest) (*jagw.MeasurementsResponse, error) {
	logger := logrus.WithFields(logrus.Fields{"clientIp": getClientIp(ctx), "grpcFunction": "GetMeasurements"})
	logger.Debug("Incoming request.")

	logger.Debug("Preparing response.")
	measurements := fetchMeasurements(logger)

	logger.Debug("Sending response.")
	return &jagw.MeasurementsResponse{Measurements: measurements}, nil
}

func (s *requestServiceServer) GetMeasurementDetails(ctx context.Context, request *jagw.MeasurementDetailsRequest) (*jagw.MeasurementDetailsResponse, error) {
	logger := logrus.WithFields(logrus.Fields{"clientIp": getClientIp(ctx), "grpcFunction": "GetMeasurementDetails"})
	logger.Debug("Incoming request.")

	logger.Debug("Preparing response.")
	columns := fetchMeasurementColumns(logger, *request.Name)
	latestTimestamp := fetchLatestTimestamp(logger, *request.Name)

	logger.Debug("Sending response.")
	return &jagw.MeasurementDetailsResponse{TimestampLatestMeasurement: &latestTimestamp, Columns: columns}, nil
}
