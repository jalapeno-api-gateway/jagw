package arango

import (
	"github.com/arangodb/go-driver"
	"github.com/sirupsen/logrus"
)


func verifyDocument(logger *logrus.Entry, document driver.DocumentMeta, err error) bool {
	if driver.IsNoMoreDocuments(err) {
		return false
	}
	if err != nil {
		logger.WithError(err).Panic("Failed to read from ArangoDb.")
	}
	return true
}
