package messages

import (
	"context"

	"github.com/jalapeno-api-gateway/jagw/pkg/arango"
	"github.com/jalapeno-api-gateway/jagw/pkg/model/class"
	"github.com/jalapeno-api-gateway/jagw/pkg/redis"
	"github.com/sirupsen/logrus"
)

func StartEventProcessing() {
	logrus.Debug("Starting Kafka event processing.")

	for {
		select {
		case event := <-LsNodeEvents:
			handleEvent(event, class.LsNode)
		case event := <-LsLinkEvents:
			handleEvent(event, class.LsLink)
		case event := <-LsPrefixEvents:
			handleEvent(event, class.LsPrefix)
		case event := <-LsSrv6SidEvents:
			handleEvent(event, class.LsSrv6Sid)
		case event := <-LsNodeEdgeEvents:
			handleEvent(event, class.LsNodeEdge)
		}
	}
}

func handleEvent(event KafkaEventMessage, className class.Class) {
	logrus.WithFields(logrus.Fields{"id": event.Id, "key": event.Key, "action": event.Action}).Trace("Handling incoming Kafka event.")
	ctx := context.Background()
	if event.Action == "del" {
		redis.DeleteKey(ctx, event.Id)
	} else {
		id, obj := fetchDocumentToCache(ctx, event.Key, className)
		redis.CacheObject(id, obj)
	}
}

func fetchDocumentToCache(ctx context.Context, key string, className class.Class) (string, interface{}) {
	switch className {
	case class.LsNode:
		doc := arango.FetchLsNode(ctx, key)
		return doc.ID, doc
	case class.LsLink:
		doc := arango.FetchLsLink(ctx, key)
		return doc.ID, doc
	case class.LsPrefix:
		doc := arango.FetchLsPrefix(ctx, key)
		return doc.ID, doc
	case class.LsSrv6Sid:
		doc := arango.FetchLsSrv6Sid(ctx, key)
		return doc.ID, doc
	case class.LsNodeEdge:
		doc := arango.FetchLsNodeEdge(ctx, key)
		return doc.ID, doc
	default:
		logrus.WithFields(logrus.Fields{"key": key, "className": className}).Panic("ClassName not implemented.")
	}
	return "", nil
}
