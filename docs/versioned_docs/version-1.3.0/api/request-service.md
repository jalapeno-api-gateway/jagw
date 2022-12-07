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

<details className="codeBlockDetails">
<summary>Example 1</summary>
<div>
Request specific properties of specific LsNodes.
<div className="codeBlockContainer">

```json
TopologyRequest {
    "keys": [
        "nodeKey1",
        "nodeKey2"
    ],
    "properties": [
        "Key",
        "Name",
        "Asn"
    ]
}
```

</div>
<div className="downArrow">&#129047;</div>
<div className="codeBlockContainer">

```json
LsNodeResponse {
    "LsNodes": [
        {
            "Key": "nodeKey1",
            "Name": "XR-1",
            "Asn": 65001
        },
        {
            "Key": "nodeKey2",
            "Name": "XR-2",
            "Asn": 65001
        }
    ]
}
```

</div>
</div>
</details>

<details className="codeBlockDetails">
<summary>Example 2</summary>
<div>
Request specific properties of all available LsNodes.
<div className="codeBlockContainer">

```json
TopologyRequest {
    "properties": [
        "Key",
        "Name",
        "Asn"
    ]
}
```

</div>
<div className="downArrow">&#129047;</div>
<div className="codeBlockContainer">

```json
LsNodeResponse {
    "LsNodes": [
        ...
        {
            "Key": "nodeKey7",
            "Name": "XR-7",
            "Asn": 65002
        },
        ...
    ]
}
```

</div>
</div>
</details>

<details className="codeBlockDetails">
<summary>Example 3</summary>
<div>
Request all properties of specific LsNodes.
<div className="codeBlockContainer">

```json
TopologyRequest {
    "keys": [
        "nodeKey1",
        "nodeKey2"
    ],
}
```

</div>
<div className="downArrow">&#129047;</div>
<div className="codeBlockContainer">

```json
LsNodeResponse {
    "LsNodes": [
        {
            "Key": "nodeKey1",
            "Id": 773,
            "RouterHash": "7eb583cb3c17c496cfa9370d9bc2a3eb",
            ...
        },
        {
            "Key": "nodeKey2",
            "Id": 809,
            "RouterHash": "8a75f65ed2153517f0e4e25f7e5112e8",
            ...
        }
    ]
}
```

</div>
</div>
</details>

<details className="codeBlockDetails">
<summary>Example 4</summary>
<div>
Request all properties of all available LsNodes.
<div className="codeBlockContainer">

```json
TopologyRequest {}
```

</div>
<div className="downArrow">&#129047;</div>
<div className="codeBlockContainer">

```json
LsNodeResponse {
    "LsNodes": [
        ...
        {
            "Key": "nodeKey7",
            "Id": 773,
            "RouterHash": "7eb583cb3c17c496cfa9370d9bc2a3eb",
            ...
        },
        ...
    ]
}
```

</div>
</div>
</details>

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
    optional bool Unflatten = 3;
    repeated StringFilter string_filters = 4;
    optional RangeFilter range_filter = 5;
}
```

- **SensorPath**: Sensor Path of which data is requested (i.e. `"Cisco-IOS-XR-pfi-im-cmd-oper:interfaces/interface-xr/interface"`)
- **Properties**: String array of properties to select from the Yang Model. The property names are the **exact** sensor path that point to the property but without the more generic Sensor Path specified before, (i.e. `"data_rates/output_data_rate"`)
- **StringFilter**: Allows to filter by string values.
- **RangeFilter**: Allows to request a range of data.

<br />

:::info JAGW Explorer
The SR-App **JAGW Explorer** is a useful tool that can help you determine the exact name of the SensorPath and the Properties called JAGW Explorer. The code is available on [GitHub](https://github.com/INSRapperswil/jagw-explorer). The application can be deployed using the docker image or in a Kubernetes cluster using the Helm chart.
:::

#### Examples

<details className="codeBlockDetails">
<summary>Example 1</summary>
<div>
<div className="codeBlockContainer">

```json
TelemetryRequest {
    "SensorPath": "Cisco-IOS-XR-pfi-im-cmd-oper:interfaces/interface-xr/interface",
    "Properties": [
        "data_rates/output_data_rate",
        "interface_statistics/full_interface_stats/bytes_sent"
        ],
    "Unflatten": false,
    "StringFilter": [
        {
            "Property": "source",
            "Value": "XR-8",
            "Operator": StringOperator.EQUAL
        }
    ],
    "RangeFilter": {
        "EarliestTimestamp": 1630050953974000000
    }
}
```

</div>
<div className="downArrow">&#129047;</div>
<div className="codeBlockContainer">

```json
TelemetryResponse {
    "TelemetryData": [
        "{
            \"time\": \"2021-11-10T08:53:08.382Z\",
            \"data_rates/output_data_rate\": 53,
            \"interface_statistics/full_interface_stats/bytes_sent\": 447
        }"
    ]
}
```

<div className="downArrow">&#129047;</div>

The JSON string can then be parsed to this:

```json
{
    "time": "2021-11-10T08:53:08.382Z",
    "data_rates/output_data_rate": 53,
    "interface_statistics/full_interface_stats/bytes_sent": 447
}
```

<div className="downArrow">&#129047;</div>

If **Unflatten** is set to **true** in the original request, the resulting JSON would look like this:

```json
{
    "time": "2021-11-10T08:53:08.382Z",
    "data_rates": {
        "output_data_rate": 53,
    },
    "interface_statistics": {
        "full_interface_stats": {
            "bytes_sent": 447
        }
    }
}
```

</div>
</div>
</details>






