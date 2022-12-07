---
sidebar_position: 1
title: "Request Service"
---

import TOCInline from "@theme/TOCInline"

<TOCInline toc={toc[toc.length - 1].children}/>

## Protobuf Definition

```protobuf
service RequestService {
    rpc GetLsNodes(TopologyRequest) returns (LsNodeResponse) {}
    rpc GetLsLinks(TopologyRequest) returns (LsLinkResponse) {}
    rpc GetLsPrefixes(TopologyRequest) returns (LsPrefixResponse) {}
    rpc GetLsSrv6Sids(TopologyRequest) returns (LsSrv6SidResponse) {}
    rpc GetLsNodeEdges(TopologyRequest) returns (LsNodeEdgeResponse) {}
    rpc GetTelemetryData(TelemetryRequest) returns (TelemetryResponse) {}
}
```

## Methods

### `GetLsNodes()`

```protobuf
rpc GetLsNodes(TopologyRequest) returns (LsNodeResponse) {}
```

*See also*: [TopologyRequest](messages#topologyrequest), [LsNodeResponse](messages#lsnoderesponse)

#### Description

Takes a [TopologyRequest](messages#topologyrequest) with the specified **keys** and **properties** and returns an [LsNodeResponse](messages#lsnoderesponse) containing all requested [LsNodes](messages#lsnode) with the requested properties.

- Omitting **keys** returns all available [LsNodes](messages#lsnode).
- Omitting **properties** returns [LsNodes](messages#lsnode) with all available properties.

#### Examples

keys | properties | [LsNodeResponse](messages#lsnoderesponse)
--- | --- | ---
[<br />"nodeKey1",<br />"nodeKey2"<br />] | [<br />"Name",<br />"Asn",<br />"RouterIp"<br />] | [LsNodeResponse](messages#lsnoderesponse) contains [LsNodes](messages#lsnode) for the two specified keys with the three requested properties.
- | [<br />"Name",<br />"Asn",<br />"RouterIp"<br />] | [LsNodeResponse](messages#lsnoderesponse) contains all available [LsNodes](messages#lsnode) with the three requested properties.
[<br />"nodeKey1",<br />"nodeKey2"<br />] | - | [LsNodeResponse](messages#lsnoderesponse) contains [LsNodes](messages#lsnode) for the two specified keys with all available properties.
- | - | [LsNodeResponse](messages#lsnoderesponse) contains all available [LsNodes](messages#lsnode) with all available properties.

### `GetLsLinks()`

```protobuf
rpc GetLsLinks(TopologyRequest) returns (LsLinkResponse) {}
```

*See also*: [TopologyRequest](messages#topologyrequest), [LsLinkResponse](messages#lslinkresponse)

#### Description

See method [GetLsNodes()](#getlsnodes). It follows the same principle regarding **keys** and **properties**.

### `GetLsPrefixes()`

```protobuf
rpc GetLsPrefixes(TopologyRequest) returns (LsPrefixResponse) {}
```

*See also*: [TopologyRequest](messages#topologyrequest), [LsPrefixResponse](messages#lsprefixresponse)

#### Description

See method [GetLsNodes()](#getlsnodes). It follows the same principle regarding **keys** and **properties**.

### `GetLsSrv6Sids()`

```protobuf
rpc GetLsSrv6Sids(TopologyRequest) returns (LsSrv6SidResponse) {}
```

*See also*: [TopologyRequest](messages#topologyrequest), [LsSrv6SidResponse](messages#lssrv6sidresponse)

#### Description

See method [GetLsNodes()](#getlsnodes). It follows the same principle regarding **keys** and **properties**.

### `GetLsNodeEdges()`

```protobuf
rpc GetLsNodeEdges(TopologyRequest) returns (LsNodeEdgeResponse) {}
```

*See also*: [TopologyRequest](messages#topologyrequest), [LsNodeEdgeResponse](messages#lsnodeedgeresponse)

#### Description

See method [GetLsNodes()](#getlsnodes). It follows the same principle regarding **keys** and **properties**.

### `GetTelemetryData()`

```protobuf
rpc GetTelemetryData(TelemetryRequest) returns (TelemetryResponse) {}
```

*See also*: [TelemetryRequest](messages#telemetryrequest), [TelemetryResponse](messages#telemetryresponse)

#### Description

Takes a [TelemetryRequest](messages#telemetryrequest) and returns a [TelemetryResponse](messages#telemetryresponse) containing an array of JSON strings.

The Jalapeño API Gateway works with all Yang Models that are supported by Jalapeño. To use a Yang Model, simply configure it on the routers and supply the Sensor Path in the request.

```protobuf
message TelemetryRequest {
    required string sensor_path = 1;
    repeated string properties = 2;
    repeated StringFilter string_filters = 3;
    optional RangeFilter range_filter = 4;
}
```

- **sensor_path**: Sensor Path of which data is requested (i.e. `"Cisco-IOS-XR-pfi-im-cmd-oper:interfaces/interface-xr/interface"`)
- **properties**: String array of properties to select from the Yang Model. The property names are the **exact** sensor path that point to the property but without the more generic Sensor Path specified before, (i.e. `"data_rates/output_data_rate"`)
- **StringFilter**: Allows to filter by string values.
- **RangeFilter**: Allows to request a range of data.

```json
TelemetryRequest {
    sensorPath: "Cisco-IOS-XR-pfi-im-cmd-oper:interfaces/interface-xr/interface",
    properties: [
        "data_rates/output_data_rate",
        "interface_statistics/full_interface_stats/bytes_sent"
        ],
    StringFilter: [
        {
            property: "source",
            value: "XR-8",
            operator: StringOperator.EQUAL
        }
    ],
    RangeFilter: {
        earliestTimestamp: 1630050953974000000
    }
}
```

The response contains JSON objects where the property names match the ones from the Yang Model, but converted to camel case.

For example, `data_rates/output_data_rate` becomes `DataRates_OutputDataRate`.

```json
TelemetryResponse {
    telemetryData: [
        "{
            Time: "2021-11-10T08:53:08.382Z",
            DataRates_OutputDataRate: 53,
            InterfaceStatistics_FullInterfaceStats_BytesSent: 447
        }"
    ]
}
```
