package class

type Class string


// These classes must match the name of the collections in the ArangoDb (i.e. ls_node)
const (
	LsNode Class = "ls_node"
	LsLink Class = "ls_link"
	LsPrefix Class = "ls_prefix"
	LsSrv6Sid Class = "ls_srv6_sid"
	LsNodeEdge Class = "ls_node_edge"
	LsNodeCoordinates Class = "ls_node_coordinates"
)