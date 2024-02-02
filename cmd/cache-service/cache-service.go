package main

import (
	"fmt"
	"os"

	"github.com/jalapeno-api-gateway/jagw/pkg/arango"
	"github.com/jalapeno-api-gateway/jagw/pkg/logger"
	"github.com/jalapeno-api-gateway/jagw/pkg/messages"
	"github.com/jalapeno-api-gateway/jagw/pkg/redis"
	"github.com/sirupsen/logrus"
)

func main() {
	logger.Init(logrus.StandardLogger(), os.Getenv("LOG_LEVEL")) // TODO: Pass this default log level through the environment variables through the helm chart
	logrus.Trace("Starting Cache Service.")

	config := getDefaultArangoDbConfig()
	arango.InitializeArangoDbAdapter(logrus.StandardLogger(), config)

	redis.InitializeRedisClient()
	messages.StartEventConsumption(messages.GetCacheServiceMessageHandlers())
	redis.InitializeCache()
	messages.StartEventProcessing()
}

func getDefaultArangoDbConfig() arango.ArangoDbConfig {
	return arango.ArangoDbConfig{
		Server:   fmt.Sprintf("http://%s", os.Getenv("ARANGO_ADDRESS")),
		User:     os.Getenv("ARANGO_DB_USER"),
		Password: os.Getenv("ARANGO_DB_PASSWORD"),
		DbName:   os.Getenv("ARANGO_DB_NAME"),
	}
}
