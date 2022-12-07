package messages

var LsNodeEvents = make(chan KafkaEventMessage)
var LsLinkEvents = make(chan KafkaEventMessage)
var LsPrefixEvents = make(chan KafkaEventMessage)
var LsSrv6SidEvents = make(chan KafkaEventMessage)
var LsNodeEdgeEvents = make(chan KafkaEventMessage)
