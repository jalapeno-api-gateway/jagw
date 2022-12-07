package main

import (
	"net"
	"os"

	"github.com/jalapeno-api-gateway/jagw-go/jagw"
	"github.com/jalapeno-api-gateway/jagw/pkg/helpers"
	"github.com/jalapeno-api-gateway/jagw/pkg/influxdb"
	"github.com/jalapeno-api-gateway/jagw/pkg/logger"
	"github.com/jalapeno-api-gateway/jagw/pkg/redis"
	"github.com/jalapeno-api-gateway/jagw/pkg/requestservice"
	"github.com/sirupsen/logrus"
	"google.golang.org/grpc"
)

func main() {
	logger.Init(logrus.StandardLogger(), os.Getenv("LOG_LEVEL")) // TODO: Pass this default log level through the environment variables through the helm chart	logrus.Trace("Starting Request Service.")

	redis.InitializeRedisClient()
	influxdb.InitializeInfluxClient()

	serverAddress := os.Getenv("APP_SERVER_ADDRESS")

	logger := logrus.WithField("serverAddress", serverAddress)
	logger.Trace("Listening for traffic.")
	lis, err := net.Listen("tcp", serverAddress)
	if err != nil {
		logger.WithError(err).Panic("Failed to listen for traffic.")
	}

	grpcServer := grpc.NewServer()

	signals := helpers.WatchInterruptSignals()
	go func() {
		<-signals
		grpcServer.Stop()
	}()

	logrus.Trace("Serving gRPC server.")
	jagw.RegisterRequestServiceServer(grpcServer, requestservice.NewServer())
	if err := grpcServer.Serve(lis); err != nil {
		logrus.WithError(err).Panic("Failed to server gRPC server.")
	}
}
