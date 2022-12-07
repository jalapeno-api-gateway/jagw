package logger

import (
	"strings"

	"github.com/sirupsen/logrus"
)

func Init(l *logrus.Logger, logLevel string) {
	l.SetReportCaller(true)
	customFormatter := new(logrus.TextFormatter)
	customFormatter.TimestampFormat = "2006-01-02 15:04:05"
	customFormatter.FullTimestamp = true
	logrus.SetFormatter(customFormatter)
	l.SetLevel(getLogrusLogLevel(logLevel))
}

func getLogrusLogLevel(logLevel string) logrus.Level {
	switch strings.ToLower(logLevel) {
	case "trace":
		return logrus.TraceLevel
	case "debug":
		return logrus.DebugLevel
	case "info":
		return logrus.InfoLevel
	case "error":
		return logrus.ErrorLevel
	case "fatal":
		return logrus.FatalLevel
	case "panic":
		return logrus.PanicLevel
	default:
		return logrus.WarnLevel
	}
}
