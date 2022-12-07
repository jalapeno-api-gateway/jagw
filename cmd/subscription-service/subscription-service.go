package main

import (
	"fmt"
	"net"
	"os"

	"github.com/jalapeno-api-gateway/jagw-go/jagw"
	"github.com/jalapeno-api-gateway/jagw/pkg/arango"
	"github.com/jalapeno-api-gateway/jagw/pkg/helpers"
	"github.com/jalapeno-api-gateway/jagw/pkg/logger"
	"github.com/jalapeno-api-gateway/jagw/pkg/messages"
	"github.com/jalapeno-api-gateway/jagw/pkg/subscriptionservice"
	"github.com/sirupsen/logrus"
	"google.golang.org/grpc"
)

func main() {
	logger.Init(logrus.StandardLogger(), os.Getenv("LOG_LEVEL")) // TODO: Pass this default log level through the environment variables through the helm chart

	logrus.Trace("Starting Subscription Service.")

	config := getDefaultArangoDbConfig()
	arango.InitializeArangoDbAdapter(logrus.StandardLogger(), config)

	messages.InitializeTopics()
	messages.StartEventConsumption()

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

	jagw.RegisterSubscriptionServiceServer(grpcServer, subscriptionservice.NewServer())
	if err := grpcServer.Serve(lis); err != nil {
		logrus.WithError(err).Panic("Failed to server gRPC server.")
	}
}

func getDefaultArangoDbConfig() arango.ArangoDbConfig {
	return arango.ArangoDbConfig{
		Server:   fmt.Sprintf("http://%s", os.Getenv("ARANGO_ADDRESS")),
		User:     os.Getenv("ARANGO_DB_USER"),
		Password: os.Getenv("ARANGO_DB_PASSWORD"),
		DbName:   os.Getenv("ARANGO_DB_NAME"),
	}
}
