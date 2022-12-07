package arango

type MultiTopologyIdentifier struct {
	OFlag bool   `json:"o_flag"`
	AFlag bool   `json:"a_flag"`
	MTID  uint16 `json:"mt_id"`
}
