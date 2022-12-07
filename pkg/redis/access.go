package redis

import (
	"context"

	"github.com/go-redis/redis/v8"
	"github.com/sirupsen/logrus"
)

var redisClient *redis.Client

func CacheObject(key string, obj interface{}) {
	err := redisClient.Set(context.Background(), key, obj, 0).Err()
	if err != nil {
		logrus.WithField("key", key).WithError(err).Panic("Failed to write object to Redis cache.")
	}
}

func DeleteKey(ctx context.Context, key string) {
	logrus.WithField("key", key).Trace("Deleting entry from Redis cache.")
	redisClient.Del(ctx, key)
}
