package arango

import (
	"context"

	"github.com/sirupsen/logrus"
)

//
// ---> FETCH SINGLE <---
//

func FetchLsNode(ctx context.Context, key string) LSNode {
	queryString := "FOR d IN ls_node FILTER d._key == \"" + key + "\" RETURN d"
	logger := Logger.WithFields(logrus.Fields{"key": key, "queryString": queryString})

	cursor := queryArangoDbDatabase(ctx, logger, queryString);
	var document LSNode
	doc, err := cursor.ReadDocument(ctx, &document)
	verifyDocument(logger, doc, err)
	return document
}

func FetchLsNodeCoordinates(ctx context.Context, key string) LSNode_Coordinates {
	queryString := "FOR d IN ls_node_coordinates FILTER d._key == \"" + key + "\" RETURN d"
	logger := Logger.WithFields(logrus.Fields{"key": key, "queryString": queryString})

	cursor := queryArangoDbDatabase(ctx, logger, queryString);
	var document LSNode_Coordinates
	doc, err := cursor.ReadDocument(ctx, &document)
	verifyDocument(logger, doc, err)
	return document
}

func FetchLsLink(ctx context.Context, key string) LSLink {
	queryString := "FOR d IN ls_link FILTER d._key == \"" + key + "\" RETURN d"
	logger := Logger.WithFields(logrus.Fields{"key": key, "queryString": queryString})

	cursor := queryArangoDbDatabase(ctx, logger, queryString);
	var document LSLink
	doc, err := cursor.ReadDocument(ctx, &document)
	verifyDocument(logger, doc, err)
	return document
}

func FetchLsPrefix(ctx context.Context, key string) LSPrefix {
	queryString := "FOR d IN ls_prefix FILTER d._key == \"" + key + "\" RETURN d"
	logger := Logger.WithFields(logrus.Fields{"key": key, "queryString": queryString})

	cursor := queryArangoDbDatabase(ctx, logger, queryString);
	var document LSPrefix
	doc, err := cursor.ReadDocument(ctx, &document)
	verifyDocument(logger, doc, err)
	return document
}

func FetchLsSrv6Sid(ctx context.Context, key string) LSSRv6SID {
	queryString := "FOR d IN ls_srv6_sid FILTER d._key == \"" + key + "\" RETURN d"
	logger := Logger.WithFields(logrus.Fields{"key": key, "queryString": queryString})

	cursor := queryArangoDbDatabase(ctx, logger, queryString);
	var document LSSRv6SID
	doc, err := cursor.ReadDocument(ctx, &document)
	verifyDocument(logger, doc, err)
	return document
}

func FetchLsNodeEdge(ctx context.Context, key string) LSNode_Edge {
	queryString := "FOR d IN ls_node_edge FILTER d._key == \"" + key + "\" RETURN d"
	logger := Logger.WithFields(logrus.Fields{"key": key, "queryString": queryString})

	cursor := queryArangoDbDatabase(ctx, logger, queryString);
	var document LSNode_Edge
	doc, err := cursor.ReadDocument(ctx, &document)
	verifyDocument(logger, doc, err)
	return document
}

//
// ---> FETCH ALL <---
//

func FetchAllLsNodes(ctx context.Context) []LSNode {
	queryString := "FOR d IN ls_node RETURN d"
	logger := Logger.WithField("queryString", queryString)

	cursor := queryArangoDbDatabase(ctx, logger, queryString);
	var documents []LSNode
	for {
		var document LSNode
		doc, err := cursor.ReadDocument(ctx, &document)
		if (!verifyDocument(logger, doc, err)) {
			break
		}
		documents = append(documents, document)
	}
	return documents
}

func FetchAllLsNodeCoordinates(ctx context.Context) []LSNode_Coordinates {
	queryString := "FOR d IN ls_node_coordinates RETURN d"
	logger := Logger.WithField("queryString", queryString)

	cursor := queryArangoDbDatabase(ctx, logger, queryString);
	var documents []LSNode_Coordinates
	for {
		var document LSNode_Coordinates
		doc, err := cursor.ReadDocument(ctx, &document)
		if (!verifyDocument(logger, doc, err)) {
			break
		}
		documents = append(documents, document)
	}
	return documents
}


func FetchAllLsLinks(ctx context.Context) []LSLink {
	queryString := "FOR d IN ls_link RETURN d"
	logger := Logger.WithField("queryString", queryString)

	cursor := queryArangoDbDatabase(ctx, logger, queryString);
	var documents []LSLink
	for {
		var document LSLink
		doc, err := cursor.ReadDocument(ctx, &document)
		if (!verifyDocument(logger, doc, err)) {
			break
		}
		documents = append(documents, document)
	}
	return documents
}

func FetchAllLsPrefixes(ctx context.Context) []LSPrefix {
	queryString := "FOR d IN ls_prefix RETURN d"
	logger := Logger.WithField("queryString", queryString)

	cursor := queryArangoDbDatabase(ctx, logger, queryString);
	var documents []LSPrefix
	for {
		var document LSPrefix
		doc, err := cursor.ReadDocument(ctx, &document)
		if (!verifyDocument(logger, doc, err)) {
			break
		}
		documents = append(documents, document)
	}
	return documents
}

func FetchAllLsSrv6Sids(ctx context.Context) []LSSRv6SID {
	queryString := "FOR d IN ls_srv6_sid RETURN d"
	logger := Logger.WithField("queryString", queryString)

	cursor := queryArangoDbDatabase(ctx, logger, queryString);
	var documents []LSSRv6SID
	for {
		var document LSSRv6SID
		doc, err := cursor.ReadDocument(ctx, &document)
		if (!verifyDocument(logger, doc, err)) {
			break
		}
		documents = append(documents, document)
	}
	return documents
}

func FetchAllLsNodeEdges(ctx context.Context) []LSNode_Edge {
	queryString := "FOR d IN ls_node_edge RETURN d"
	logger := Logger.WithField("queryString", queryString)

	cursor := queryArangoDbDatabase(ctx, logger, queryString);
	var documents []LSNode_Edge
	for {
		var document LSNode_Edge
		doc, err := cursor.ReadDocument(ctx, &document)
		if (!verifyDocument(logger, doc, err)) {
			break
		}
		documents = append(documents, document)
	}
	return documents
}
