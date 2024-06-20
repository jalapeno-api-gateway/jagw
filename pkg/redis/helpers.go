package redis

import (
	"context"
	"encoding/json"
	"fmt"
	"strings"

	"github.com/jalapeno-api-gateway/jagw/pkg/arango"
	"github.com/jalapeno-api-gateway/jagw/pkg/jagwerror"
	"github.com/jalapeno-api-gateway/jagw/pkg/model/class"
	"github.com/sirupsen/logrus"
)

func prependCollectionNameToKeys(keys []string, className class.Class) []string {
	for i, key := range keys {
		keys[i] = fmt.Sprintf("%s/%s", className, key)
	}
	return keys
}

func scanAllKeysOfCollection(ctx context.Context, logger *logrus.Entry, className class.Class) []string {
	keysMustMatchString := fmt.Sprintf("%s/*", className)
	logger = logger.WithFields(logrus.Fields{"keysMustMatchString": keysMustMatchString, "collection": className})
	logger.Trace("Scanning Redis for all keys of collection.")

	iter := RedisClient.Scan(ctx, 0, fmt.Sprintf("%s/*", className), 0).Iterator()
	keys := []string{}
	for iter.Next(ctx) {
		keys = append(keys, iter.Val())
	}

	logger.WithField("numberOfKeysFound", len(keys)).Trace("Done scanning Redis for keys.")
	return keys
}

func getValuesByKeys(ctx context.Context, logger *logrus.Entry, keys []string) ([][]byte, *jagwerror.Error) {
	//MGet returns nil for a key which is not present in cache
	values, err := RedisClient.MGet(ctx, keys...).Result()
	if err != nil {
		logger.WithError(err).Panic("Failed to fetch documents from Redis.")
	}

	keysNotFound := []string{}
	bytes := [][]byte{}
	for i, value := range values {
		if value != nil { //entry found in cache
			bytes = append(bytes, []byte(value.(string)))
		} else {
			keysNotFound = append(keysNotFound, keys[i])
		}
	}

	return bytes, createErrorForKeysNotFound(keysNotFound)
}

func createErrorForKeysNotFound(keysNotFound []string) *jagwerror.Error {
	if len(keysNotFound) == 0 {
		return nil
	}

	keysString := strings.Join(keysNotFound, ", ")
	message := "Unable to find the following keys: " + keysString
	return &jagwerror.Error{ErrorCode: jagwerror.NOT_FOUND, Message: message}
}

func unmarshalObject(logger *logrus.Entry, bytes []byte, className class.Class) interface{} {
	switch className {
	case class.LsNode:
		document := arango.LsNode{}
		handleUnmarshallingError(logger, json.Unmarshal(bytes, &document))
		return document
	case class.LsNodeCoordinates:
		document := arango.LsNodeCoordinates{}
		handleUnmarshallingError(logger, json.Unmarshal(bytes, &document))
		return document
	case class.LsLink:
		document := arango.LsLink{}
		handleUnmarshallingError(logger, json.Unmarshal(bytes, &document))
		return document
	case class.LsPrefix:
		document := arango.LsPrefix{}
		handleUnmarshallingError(logger, json.Unmarshal(bytes, &document))
		return document
	case class.LsSrv6Sid:
		document := arango.LsSrv6Sid{}
		handleUnmarshallingError(logger, json.Unmarshal(bytes, &document))
		return document
	case class.LsNodeEdge:
		document := arango.LsNodeEdge{}
		handleUnmarshallingError(logger, json.Unmarshal(bytes, &document))
		return document
	default:
		return nil
	}
}

func handleUnmarshallingError(logger *logrus.Entry, err error) {
	if err != nil {
		logger.WithError(err).Panic("Failed to unmarshall object.")
	}
}
