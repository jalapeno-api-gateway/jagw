package redis

import (
	"context"

	"github.com/sirupsen/logrus"
)

func CacheObject(key string, obj interface{}) {
	err := RedisClient.Set(context.Background(), key, obj, 0).Err()
	if err != nil {
		logrus.WithField("key", key).WithError(err).Panic("Failed to write object to Redis cache.")
	}
}

func DeleteKey(ctx context.Context, key string) {
	logrus.WithField("key", key).Trace("Deleting entry from Redis cache.")
	RedisClient.Del(ctx, key)
}
