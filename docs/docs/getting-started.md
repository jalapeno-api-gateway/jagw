---
sidebar_position: 4
title: "Getting Started"
---

import useBaseUrl from '@docusaurus/useBaseUrl';

The Jalapeño API Gateway uses gRPC for communication. This means you simply have to import the compiled Protobuf definitions and initialize a gRPC connection and you are ready to go.

## Step 1: Importing the compiled Protobuf definitions

To address the Gateway you can either compile the Protobuf files yourself or use the languages-specific repositories containing the already compiled code.

### Option 1: Using the the pre-compiled files [recommended]

#### Option 1.1: Download files from Release Page

The easiest way to use the Jalapeño API Gateway is to simply download and import the pre-compiled, language-specific Protobuf files from the release page: 

- [Protorepo](https://github.com/jalapeno-api-gateway/protorepo/releases/latest)

#### Option 1.2: Golang only

If you are using Golang, you will not find the pre-compiled files in the release page, but rather in a dedicated repository:

- [Golang](https://github.com/jalapeno-api-gateway/protorepo-jagw-go/releases/latest)

This allows you to directly import the go module to your project with:

```bash
$ go get github.com/jalapeno-api-gateway/protorepo-jagw-go@v1.3.0
```

### Option 2: Compiling the Protobuf files yourself

If you prefer to compile to Protobuf files yourself or if we do not offer pre-compiled files for your development language you can download the Protobuf files from our [protorepo](https://github.com/jalapeno-api-gateway/protorepo/releases/latest).

To compile the files, you will need to install both the [protobuf compiler](https://grpc.io/docs/protoc-installation/) and the language specific [gRPC compiler](https://grpc.io/docs/languages/).

## Step 2: Initialize gRPC connection

Once you have imported the compiled Protobuf code to your project, you can connect to the Request Service and the Subscription Service and use the gRPC Methods documented in the [API Documentation](http://localhost:3000/jagw-docs/docs/api/request-service).

To initialize a gRPC connection, refer to the language specific documentation for [gRPC](https://grpc.io/docs/languages/) (i.e. [for Golang](https://grpc.io/docs/languages/go/basics/#client)).

### Default Ports

The default ports for the two services are shown in the table below.

Service | Port
--- | ---
Request-Service | 30050
Subscription-Service | 30051

## Sample SR-Apps

You can also refer to our [sample-sr-apps](https://github.com/jalapeno-api-gateway/sample-sr-apps) to get started.
