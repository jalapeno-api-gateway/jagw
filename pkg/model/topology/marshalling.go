package topology

import "encoding/json"

func (doc LsNode) MarshalBinary() ([]byte, error) {
	return json.Marshal(doc)
}

func (doc LsNodeCoordinates) MarshalBinary() ([]byte, error) {
	return json.Marshal(doc)
}

func (doc LsLink) MarshalBinary() ([]byte, error) {
	return json.Marshal(doc)
}

func (doc LsPrefix) MarshalBinary() ([]byte, error) {
	return json.Marshal(doc)
}

func (doc LsSrv6Sid) MarshalBinary() ([]byte, error) {
	return json.Marshal(doc)
}

func (doc LsNodeEdge) MarshalBinary() ([]byte, error) {
	return json.Marshal(doc)
}