---
sidebar_position: 1
title: "Concept"
---

import useBaseUrl from '@docusaurus/useBaseUrl';

This section describes the basic concept and core functionality of the Jalapeño API Gateway.

## Deployment Diagram
<div align="center">
<img src={useBaseUrl('/img/api-gateway-deployment_v1.3.0.png')} alt="deployment-diagram" width="700px" />
</div>

## Behavior of Jalapeño Components
To understand how the Jalapeño API Gateway works, it helps to understand how Jalapeño itself works.

Here the basic principle of Jalapeño is described:

1. Changes to the network are published in various Kafka topics, i.e. in the topic `gobmp.parsed.ls_node`, by `GoBMP` and `Telegraf`.

<details>
   <summary>Kafka Topics for unprocessed events</summary>
   <ul>
   <li>These are all Kafka topics to which <code>GoBMP</code> writes topology updates:

   <ul>
      <li>gobmp.parsed.evpn</li>
      <li>gobmp.parsed.flowspec</li>
      <li>gobmp.parsed.flowspec_v4</li>
      <li>gobmp.parsed.flowspec_v6</li>
      <li>gobmp.parsed.l3vpn</li>
      <li>gobmp.parsed.l3vpn_v4</li>
      <li>gobmp.parsed.l3vpn_v6</li>
      <li>gobmp.parsed.ls_link</li>
      <li>gobmp.parsed.ls_node</li>
      <li>gobmp.parsed.ls_prefix</li>
      <li>gobmp.parsed.ls_srv6_sid</li>
      <li>gobmp.parsed.peer</li>
      <li>gobmp.parsed.sr_policy</li>
      <li>gobmp.parsed.sr_policy_v4</li>
      <li>gobmp.parsed.sr_policy_v6</li>
      <li>gobmp.parsed.unicast_prefix</li>
      <li>gobmp.parsed.unicast_prefix_v4</li>
      <li>gobmp.parsed.unicast_prefix_v6</li>
   </ul>
   </li>

   <li>This is the Kafka topic to which <code>Telegraf</code> (the one connected to the network) writes telemetry updates:
   
   <ul>
      <li>jalapeno.telemetry</li>
   </ul>
   </li>
   </ul>
</details>

2. The data processor `Topology` processes the events and updates the GraphDB.
3. When it has successfully updated the database, it writes a message to a seperate Kafka topic (ending in `_events`), i.e. `gobmp.parsed.ls_node_events`. This message contains the key to the document in the GraphDB that has been updated (or deleted).

<details>
   <summary>Kafka Topics for processed events</summary>
   
   <ul>
   <li>These are all Kafka topics to which the processor <code>Topology</code> writes updates, once it has successfully updated the <code>GraphDB</code>:

   <ul>
      <li>gobmp.parsed.evpn_events</li>
      <li>gobmp.parsed.flowspec_events</li>
      <li>gobmp.parsed.flowspec_v4_events</li>
      <li>gobmp.parsed.flowspec_v6_events</li>
      <li>gobmp.parsed.l3vpn_events</li>
      <li>gobmp.parsed.l3vpn_v4_events</li>
      <li>gobmp.parsed.l3vpn_v6_events</li>
      <li>gobmp.parsed.ls_link_events</li>
      <li>gobmp.parsed.ls_node_events</li>
      <li>gobmp.parsed.ls_prefix_events</li>
      <li>gobmp.parsed.ls_srv6_sid_events</li>
      <li>gobmp.parsed.peer_events</li>
      <li>gobmp.parsed.sr_policy_events</li>
      <li>gobmp.parsed.sr_policy_v4_events</li>
      <li>gobmp.parsed.sr_policy_v6_events</li>
      <li>gobmp.parsed.unicast_prefix_events</li>
      <li>gobmp.parsed.unicast_prefix_v4_events</li>
      <li>gobmp.parsed.unicast_prefix_v6_events</li>
      <li>jalapeno.ls_node_edge_events</li>
   </ul>
   </li>

   <li>The processor <code>Telegraf</code> (the one connected to the <code>TSDB</code>) does not currently write anything back to Kafka.</li>
   </ul>
</details>

<details>
   <summary>Event Message</summary>
   An event message produced by the processor <code>Topology</code> and published in one of the <code>_events</code> topics looks like this:

      type EventMessage struct {
         TopicType int //represents an enum
         Key       string
         ID        string
         Action    string
      }

</details>

## Caching
This is the behavior of the caching system when the API Gateway is started for the first time:
1. The Cache Service subscribes to all Kafka topics ending in `_events` (they all contain updates on topology data), i.e. `gobmp.parsed.ls_node_events`. It does **not yet** start processing these events.
2. It then fetches the current state of all existing documents from the GraphDB and stores them in the cache.
3. It now starts processing the messages from the Kafka topics.
   - If the message describes an **update**, the Cache Service refetches the document from the GraphDB and overwrites the entry in the cache.
   - If the message describes a **deletion**, the Cache Service deletes the entry from the cache.

The Cache is now always an exact duplicate of the GraphDB. Even though it is not the most space efficient solution to cache all topology data (this can be improved upon in the future), it has two advantages.
- It reduces the load on the GraphDB.
- It reduces response times to API requests (reading from the cache is faster than reading from the database).

Telemetry data is not cached for two reasons:
- Telemetry data updates too frequently to justify caching.
- The amount of telemetry data makes caching it unfeasible.

<div align="center">
<img src={useBaseUrl('/img/caching-system.png')} alt="caching-system" width="400px" />
</div>

## Requests
- To request data from the API Gateway, an SR-App first initializes a gRPC connection with the Request Service.
- The SR-App calls gRPC methods to request either topology or telemetry data.
- The Request Service either queries the cache (for topology data) or the TSDB (for telemetry data) and returns the result to the SR-App.

<div align="center">
<img src={useBaseUrl('/img/request-handling.png')} alt="request-handling" width="400px" />
</div>

## Subscriptions
- The Subscription Service allows SR-Apps to subscribe to both topology and telemetry data.
- The Subscription Service constantly watches Kafka topics for topology data (topics ending in `_events`). Upon receiving a message, it fetches the updated document from the GraphDB (unless it has been deleted) and informs all subscribers.
- The Subscription Service also constantly watches the Kafka topic for telemetry data (topic `jalapeno.telemetry`). Upon receiving a message, it extracts the data from the telemetry string and informs all subscribers.

<div align="center">
<img src={useBaseUrl('/img/subscription-handling.png')} alt="subscription-handling" width="350px" />
</div>