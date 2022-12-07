---
sidebar_position: 4
title: "Getting Started"
---

import useBaseUrl from '@docusaurus/useBaseUrl';

The Jalapeño API Gateway uses gRPC for communication. This means you simply have to import the compiled Protobuf definitions and initialize a gRPC connection and you are ready to go.

## Step 1: Importing the compiled Protobuf definitions

To address the Gateway you can either compile the Protobuf files yourself or use the languages-specific repositories containing the already compiled code.

### Option 1: Using the language-specific repositories [recommended]

The easiest way to use the Jalapeño API Gateway is to use one of the ready-to-use, language-specific repositories that contain the pre-compiled code. As of now, the following languages are supported:

- [Golang](https://github.com/jalapeno-api-gateway/protorepo-jagw-go/releases)
- [NodeJS](https://github.com/jalapeno-api-gateway/protorepo-jagw-node/releases)

Simply import the code to your project depending on what development language you are using.

### Option 2: Compiling the Protobuf files yourself

If you prefer to compile to Protobuf files yourself or if we do not offer a pre-compiled repository for your development language you can download the Protobuf files from our [protorepo](https://github.com/jalapeno-api-gateway/protorepo/releases).

To compile the files, you will need to install both the [protobuf compiler](https://grpc.io/docs/protoc-installation/) and the language specific [gRPC compiler](https://grpc.io/docs/languages/).

## Step 2: Initialize gRPC connection

Once you have imported the compiled Protobuf code to your project, you can connect to the Request Service and the Subscription Service and use the gRPC Methods documented in the [API Documentation](http://localhost:3000/jagw-docs/docs/api/request-service).

To initialize a gRPC connection, refer to the language specific documentation for [gRPC](https://grpc.io/docs/languages/) (i.e. [for Golang](https://grpc.io/docs/languages/go/basics/#client)).

### Default Ports

The default ports for the two services are shown in the table below.

Service | Port
--- | ---
Request-Service | 30061
Subscription-Service | 30060

## Demo App

You can also refer to our [demo-sr-app](https://github.com/jalapeno-api-gateway/demo-sr-app) (written in *golang*).


