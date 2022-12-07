---
sidebar_position: 6
title: "YANG Models"
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import TOCInline from "@theme/TOCInline";

## Content

<TOCInline toc={toc}/>

## Introduction

In order for the Jalapeño Framework to provide developers with telemetry data, routers first have to be configured to send the required counters to the ingress Telegraf instance of Jalapeño.

[YANG](https://yangcatalog.org/) (Yet Another Next Generation) is a data modeling language. There is a large collection of YANG models that define different sets of counters.

YANG models are also stored locally on the routers. If configured properly, the routers will send the counters of a YANG model the specified endpoint.

<br />

<div align="center">
<img src={useBaseUrl('/img/yang-push-in-jalapeno.png')} alt="deployment-diagram" width="90%" />
</div>

## Adding More Telemetry Data To A Jalapeño Instance

The following steps describe how to have more counters available in Jalapeño:

1. Find a YANG model that provides the required counters by using a search engine as well as [YANG search](https://yangcatalog.org/yang-search).
2. Configure the YANG model on the routers in your network and point them to the ingress Telegraf of Jalapeño.
3. Use the [JAGW Explorer](https://github.com/INSRapperswil/jagw-explorer) to verify the model through the Jalapeño API Gateway.

The chapters below will provide you with more details on the process.

## YANG Search

[YANG search](https://yangcatalog.org/yang-search) can help you find and explore YANG models.

Once you have found a model that fits your needs (i.e. `Cisco-IOS-XR-pfi-im-cmd-oper`), you can explore it by entering it in the search bar and then clicking on **Tree View** on any of the search results.

<br />

<div align="center">
<img src={useBaseUrl('/img/yang-search.png')} alt="deployment-diagram" width="90%" />
</div>

## Configuring A Router For YANG Push

To configure a YANG model on a router you can use the following configuration as a reference:

```text
telemetry model-driven
 destination-group <destination-group-name>
  address-family ipv4 <jalapeno-ip-address> port <ingress-telegraf-port>
   encoding self-describing-gpb
   protocol grpc
  !
 !
 sensor-group <sensor-group-name>
  sensor-path Cisco-IOS-XR-pfi-im-cmd-oper:interfaces/interface-xr/interface
  sensor-path Cisco-IOS-XR-sysadmin-asr9k-envmon-ui:environment/oper
 !
 subscription <subscription-name>
  sensor-group-id <sensor-group-name> sample-interval <sample-interval-in-ms>
  destination-id <destination-group-name>
 !
!
```

:::info
Do not forget to commit your changes afterwards!
:::

Placeholder | Description
---|---
<destination-group-name\> | Can be any string.
<sensor-group-name\> | Can be any string.
<subscription-name\> | Can be any string.
<jalapeno-ip-address\> | The IP address of the server where Jalapeño is running.
<ingress-telegraf-port\> | The port number of the ingress Telegraf (default: **32400**)
<sample-interval-in-ms\> | The frequency of how often the router pushes updates. A common value is **10000** (10 seconds).

## Verify Your YANG Push configuration

To verify your YANG push configuration run the following command on the router:

```text
router# show telemetry model-driven subscription <subscription-name>
```

This will provide you with an output similar to this:

```text
Mon Apr 30 04:33:42.421 EST

Subscription:  1

-------------

  State:       NOT ACTIVE

  Sensor groups:

  Id: Memory

    Sample Interval:      10000 ms

    Sensor Path:          Cisco-IOS®-XR-pfi-im-cmd-oper:interfaces/interface-xr/interface
    Sensor Path State:    Resolved
    Sensor Path:          Cisco-IOS®-XR-sysadmin-asr9k-envmon-ui:environment/oper
    Sensor Path State:    Not Resolved
```

:::caution
If a **Sensor Path State** has the value **Not Resolved** it means, that the router was unable to find the specified Sensor Path locally.
:::

## Exploring Locally Stored YANG Models

Routers keep copies of YANG models stored locally. To check if a YANG model is available on your router, run these commands:

```text
router# run
$ cd /pkg/yang
$ ls
```

## YANG model support on Cisco IOS-XR

Not all versions of Cisco IOS-XR support all YANG models. Here you can find out which models are supported by your router:
[https://github.com/YangModels/yang/tree/master/vendor/cisco/xr](https://github.com/YangModels/yang/tree/master/vendor/cisco/xr)

If you see a warning from GitHub concerning truncating (see image below), you might have to clone the repository to find your YANG model, because GitHub does not show more than 1'000 files per folder.

<br />

<div align="center">
<img src={useBaseUrl('/img/cisco-ios-xr-yang-models-github.png')} alt="deployment-diagram" width="100%" />
</div>
