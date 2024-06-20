package arango

import (
	"context"

	"github.com/sirupsen/logrus"
)

func FetchLsNode(ctx context.Context, key string) LsNode {
	queryString := "FOR d IN ls_node FILTER d._key == \"" + key + "\" RETURN d"
	logger := Logger.WithFields(logrus.Fields{"key": key, "queryString": queryString})

	cursor := queryArangoDbDatabase(ctx, logger, queryString)
	var document LsNode
	doc, err := cursor.ReadDocument(ctx, &document)
	verifyDocument(logger, doc, err)
	return document
}

func FetchLsNodeCoordinates(ctx context.Context, key string) LsNodeCoordinates {
	queryString := "FOR d IN ls_node_coordinates FILTER d._key == \"" + key + "\" RETURN d"
	logger := Logger.WithFields(logrus.Fields{"key": key, "queryString": queryString})

	cursor := queryArangoDbDatabase(ctx, logger, queryString)
	var document LsNodeCoordinates
	doc, err := cursor.ReadDocument(ctx, &document)
	verifyDocument(logger, doc, err)
	return document
}

func FetchLsLink(ctx context.Context, key string) LsLink {
	queryString := "FOR d IN ls_link FILTER d._key == \"" + key + "\" RETURN d"
	logger := Logger.WithFields(logrus.Fields{"key": key, "queryString": queryString})

	cursor := queryArangoDbDatabase(ctx, logger, queryString)
	var document LsLink
	doc, err := cursor.ReadDocument(ctx, &document)
	verifyDocument(logger, doc, err)
	return document
}

func FetchLsPrefix(ctx context.Context, key string) LsPrefix {
	queryString := "FOR d IN ls_prefix FILTER d._key == \"" + key + "\" RETURN d"
	logger := Logger.WithFields(logrus.Fields{"key": key, "queryString": queryString})

	cursor := queryArangoDbDatabase(ctx, logger, queryString)
	var document LsPrefix
	doc, err := cursor.ReadDocument(ctx, &document)
	verifyDocument(logger, doc, err)
	return document
}

func FetchLsSrv6Sid(ctx context.Context, key string) LsSrv6Sid {
	queryString := "FOR d IN ls_srv6_sid FILTER d._key == \"" + key + "\" RETURN d"
	logger := Logger.WithFields(logrus.Fields{"key": key, "queryString": queryString})

	cursor := queryArangoDbDatabase(ctx, logger, queryString)
	var document LsSrv6Sid
	doc, err := cursor.ReadDocument(ctx, &document)
	verifyDocument(logger, doc, err)
	return document
}

func FetchLsNodeEdge(ctx context.Context, key string) LsNodeEdge {
	queryString := "FOR d IN ls_node_edge FILTER d._key == \"" + key + "\" RETURN d"
	logger := Logger.WithFields(logrus.Fields{"key": key, "queryString": queryString})

	cursor := queryArangoDbDatabase(ctx, logger, queryString)
	var document LsNodeEdge
	doc, err := cursor.ReadDocument(ctx, &document)
	verifyDocument(logger, doc, err)
	return document
}

func FetchAllLsNodes(ctx context.Context) []LsNode {
	queryString := "FOR d IN ls_node RETURN d"
	logger := Logger.WithField("queryString", queryString)

	cursor := queryArangoDbDatabase(ctx, logger, queryString)
	var documents []LsNode
	for {
		var document LsNode
		doc, err := cursor.ReadDocument(ctx, &document)
		if !verifyDocument(logger, doc, err) {
			break
		}
		documents = append(documents, document)
	}
	return documents
}

func FetchAllLsNodeCoordinates(ctx context.Context) []LsNodeCoordinates {
	queryString := "FOR d IN ls_node_coordinates RETURN d"
	logger := Logger.WithField("queryString", queryString)

	cursor := queryArangoDbDatabase(ctx, logger, queryString)
	var documents []LsNodeCoordinates
	for {
		var document LsNodeCoordinates
		doc, err := cursor.ReadDocument(ctx, &document)
		if !verifyDocument(logger, doc, err) {
			break
		}
		documents = append(documents, document)
	}
	return documents
}

func FetchAllLsLinks(ctx context.Context) []LsLink {
	queryString := "FOR d IN ls_link RETURN d"
	logger := Logger.WithField("queryString", queryString)

	cursor := queryArangoDbDatabase(ctx, logger, queryString)
	var documents []LsLink
	for {
		var document LsLink
		doc, err := cursor.ReadDocument(ctx, &document)
		if !verifyDocument(logger, doc, err) {
			break
		}
		documents = append(documents, document)
	}
	return documents
}

func FetchAllLsPrefixes(ctx context.Context) []LsPrefix {
	queryString := "FOR d IN ls_prefix RETURN d"
	logger := Logger.WithField("queryString", queryString)

	cursor := queryArangoDbDatabase(ctx, logger, queryString)
	var documents []LsPrefix
	for {
		var document LsPrefix
		doc, err := cursor.ReadDocument(ctx, &document)
		if !verifyDocument(logger, doc, err) {
			break
		}
		documents = append(documents, document)
	}
	return documents
}

func FetchAllLsSrv6Sids(ctx context.Context) []LsSrv6Sid {
	queryString := "FOR d IN ls_srv6_sid RETURN d"
	logger := Logger.WithField("queryString", queryString)

	cursor := queryArangoDbDatabase(ctx, logger, queryString)
	var documents []LsSrv6Sid
	for {
		var document LsSrv6Sid
		doc, err := cursor.ReadDocument(ctx, &document)
		if !verifyDocument(logger, doc, err) {
			break
		}
		documents = append(documents, document)
	}
	return documents
}

func FetchAllLsNodeEdges(ctx context.Context) []LsNodeEdge {
	queryString := "FOR d IN ls_node_edge RETURN d"
	logger := Logger.WithField("queryString", queryString)

	cursor := queryArangoDbDatabase(ctx, logger, queryString)
	var documents []LsNodeEdge
	for {
		var document LsNodeEdge
		doc, err := cursor.ReadDocument(ctx, &document)
		if !verifyDocument(logger, doc, err) {
			break
		}
		documents = append(documents, document)
	}
	return documents
}
