package redis

import (
	"context"

	"github.com/jalapeno-api-gateway/jagw/pkg/jagwerror"
	"github.com/jalapeno-api-gateway/jagw/pkg/model/class"
	"github.com/sirupsen/logrus"
)

func Fetch(ctx context.Context, logger *logrus.Entry, keys []string, className class.Class) ([]interface{}, *jagwerror.Error) {
	keys = prependCollectionNameToKeys(keys, className)
	var documents []interface{}
	values, jagwErr := getValuesByKeys(ctx, logger, keys)
	for _, value := range values {
		documents = append(documents, unmarshalObject(logger, value, className))
	}
	return documents, jagwErr
}

func FetchAll(ctx context.Context, logger *logrus.Entry, className class.Class) ([]interface{}, *jagwerror.Error) {
	var documents []interface{}
	keys := scanAllKeysOfCollection(ctx, logger, className)
	values, jagwErr := getValuesByKeys(ctx, logger, keys)
	for _, value := range values {
		documents = append(documents, unmarshalObject(logger, value, className))
	}
	return documents, jagwErr
}
