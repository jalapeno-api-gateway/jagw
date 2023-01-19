---
sidebar_position: 2
title: "Design Choices"
---

import TOCInline from "@theme/TOCInline"

<TOCInline toc={toc}/>

## Why use [proto2](https://developers.google.com/protocol-buffers/docs/proto) instead of [proto3](https://developers.google.com/protocol-buffers/docs/proto3)?

The reason for choosing *proto2* over *proto3* is that *proto3* dropped the support for [***field presence***](https://cloud.google.com/apis/design/proto3).

### Problem

In *proto3* technically speaking all fields are automatically *optional*, in the sense that the sender does not *have* to set them. The problem is, that the receiver has no way of distinguishing between a field that has *not* been set by the sender and a field that the sender has set *explicitly* to its default value.

For example, consider the *DataRate* property in *proto3*:

```protobuf
syntax = "proto3";

message TelemetryData {
    ...
    int64 dataRate = 2;
    ...
}
```

In a *TelemetryData* message with the value for *DataRate* set to *0*, there are two possible scenarios:

- No information on the *DataRate* is available.
- The *DataRate* is *0*.

In certain situations it may be important for a receiver to know the difference.

### Solution

The solution is to use *proto2*. *Proto2* allows to make fields ***nullable***, using the keyword *optional*. It achieves this by using pointers for all fields, even for primitive values.

```protobuf
syntax = "proto2";

message TelemetryData {
    ...
    optional int64 dataRate = 2;
    ...
}
```

This way, when the *DataRate* is set explicitly to *0*, the field points to the value *0*. But if the *DataRate* is not set, the point is *`<nil>`*.

For more detail see this thread on [Stackoverflow](https://stackoverflow.com/a/42634681).

### But isn't proto2 going to be deprecated soon?

Google has no intentions of deprecating *proto2* but is maintaining both versions simultaneously (see [here](https://groups.google.com/g/protobuf/c/h-nwPLb42ac)).

It is therefore safe to use *proto2* instead of *proto3*.
