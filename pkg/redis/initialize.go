package redis

import (
	"context"
	"os"

	"github.com/go-redis/redis/v8"
	"github.com/jalapeno-api-gateway/jagw/pkg/arango"
	"github.com/sirupsen/logrus"
)

var RedisClient *redis.Client

func InitializeRedisClient() {
	sentinelMaster := os.Getenv("SENTINEL_MASTER")
	sentinelAddress := os.Getenv("SENTINEL_ADDRESS")
	sentinelPassword := os.Getenv("SENTINEL_PASSWORD")
	redisPassword := os.Getenv("REDIS_PASSWORD")

	logrus.WithFields(logrus.Fields{"sentinelMaster": sentinelMaster, "sentinelAddress": sentinelAddress}).Debug("Initializing Redis client.")

	RedisClient = redis.NewFailoverClient(&redis.FailoverOptions{
		MasterName:       sentinelMaster,
		SentinelAddrs:    []string{sentinelAddress},
		Password:         redisPassword,
		SentinelPassword: sentinelPassword,
		DB:               0,
	})
}

func InitializeCache() {
	logrus.Debug("Initializing Redis cache.")

	loadLsNodeCollection()
	loadLsLinkCollection()
	loadLsPrefixCollection()
	loadLsSrv6SidCollection()
	loadLsNodeEdgeCollection()

	// LsNodeCoordinates is a non-default collection and needs to be created by hand
	loadFakeCoordinates := os.Getenv("LOAD_FAKE_COORDINATES")
	if loadFakeCoordinates == "true" {
		loadLsNodeCoordinatesCollection()
	}
}

func loadLsNodeCollection() {
	logrus.Debug("Loading LsNodeCollection from ArangoDb.")
	ctx := context.Background()
	documents := arango.FetchAllLsNodes(ctx)

	logrus.Debug("Writing LsNodeCollection to Redis cache.")
	for _, document := range documents {
		CacheObject(document.ID, document)
	}
}

func loadLsLinkCollection() {
	logrus.Debug("Loading LsLinkCollection from ArangoDb.")
	ctx := context.Background()
	documents := arango.FetchAllLsLinks(ctx)

	logrus.Debug("Writing LsLinkCollection to Redis cache.")
	for _, document := range documents {
		CacheObject(document.ID, document)
	}
}

func loadLsPrefixCollection() {
	logrus.Debug("Loading LsPrefixCollection from ArangoDb.")
	ctx := context.Background()
	documents := arango.FetchAllLsPrefixes(ctx)

	logrus.Debug("Writing LsPrefixCollection to Redis cache.")
	for _, document := range documents {
		CacheObject(document.ID, document)
	}
}

func loadLsSrv6SidCollection() {
	logrus.Debug("Loading LsSrv6SidCollection from ArangoDb.")
	ctx := context.Background()
	documents := arango.FetchAllLsSrv6Sids(ctx)

	logrus.Debug("Writing LsSrv6SidCollection to Redis cache.")
	for _, document := range documents {
		CacheObject(document.ID, document)
	}
}

func loadLsNodeEdgeCollection() {
	logrus.Debug("Loading LsNodeEdgeCollection from ArangoDb.")
	ctx := context.Background()
	documents := arango.FetchAllLsNodeEdges(ctx)

	logrus.Debug("Writing LsNodeEdgeCollection to Redis cache.")
	for _, document := range documents {
		CacheObject(document.ID, document)
	}
}

func loadLsNodeCoordinatesCollection() {
	logrus.Debug("Loading LsNodeCoordinatesCollection from ArangoDb.")
	ctx := context.Background()
	documents := arango.FetchAllLsNodeCoordinates(ctx)

	logrus.Debug("Writing LsNodeCoordinatesCollection to Redis cache.")
	for _, document := range documents {
		CacheObject(document.ID, document)
	}
}
