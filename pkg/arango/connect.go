package arango

import (
	"context"

	"github.com/arangodb/go-driver"
	"github.com/arangodb/go-driver/http"
	"github.com/sirupsen/logrus"
)

type ArangoDbConfig struct {
	Server string
	User string
	Password string
	DbName string
}

var Config ArangoDbConfig
var Logger *logrus.Logger

func InitializeArangoDbAdapter(logger *logrus.Logger, config ArangoDbConfig) {
	Config = config
	Logger = logger
	logger.WithFields(logrus.Fields{"server": config.Server, "user": config.User, "dbName": config.DbName}).Debug("Initializing ArangoDb Adapter.")
}

func queryArangoDbDatabase(ctx context.Context, logger *logrus.Entry, queryString string) driver.Cursor {
	logger.Debug("Querying ArangoDb.")
	ctxx := context.WithValue(ctx, "arangodb-query-batchSize", 100000) // temporary solution, increasing batch size to 100'000
	db := openArangoDbDatabase(ctxx)
	cursor, err := db.Query(ctxx, queryString, nil)
	if err != nil {
		logger.WithError(err).Panic("Failed to create Cursor for ArangoDb.")
	}
	defer cursor.Close()
	return cursor
}

func openArangoDbDatabase(ctx context.Context) driver.Database {
	Logger.Debug("Opening ArangoDb.")

	arangoDbClient := connectToArangoDb()
	db, err := arangoDbClient.Database(ctx, Config.DbName)
	if err != nil {
		Logger.WithError(err).Panic("Failed to open database ArangoDb.")
	}
	return db
}

func connectToArangoDb() driver.Client {
	Logger.Debug("Connecting to ArangoDb.")

	conn, err := http.NewConnection(http.ConnectionConfig{
		Endpoints: []string{Config.Server},
	})
	if err != nil {
		Logger.WithError(err).Panic("Failed to connect to ArangoDb.")
	}
	c, err := driver.NewClient(driver.ClientConfig{
		Connection:     conn,
		Authentication: driver.BasicAuthentication(Config.User, Config.Password),
	})
	if err != nil {
		Logger.WithError(err).Panic("Failed to create ArangoDb client.")
	}
	return c
}
