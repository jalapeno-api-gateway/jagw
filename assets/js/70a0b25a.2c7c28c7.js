"use strict";(self.webpackChunkjalapeno_api_gateway_documentation=self.webpackChunkjalapeno_api_gateway_documentation||[]).push([[3155],{5680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>y});var a=n(6540);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),g=p(n),d=l,y=g["".concat(s,".").concat(d)]||g[d]||u[d]||i;return n?a.createElement(y,r(r({ref:t},c),{},{components:n})):a.createElement(y,r({ref:t},c))}));function y(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[g]="string"==typeof e?e:l,r[1]=o;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6654:(e,t,n)=>{function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function l(e){return void 0!==e&&!a(e)}n.d(t,{A:()=>l,z:()=>a})},6025:(e,t,n)=>{n.d(t,{A:()=>r,h:()=>i});var a=n(4586),l=n(6654);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,a.A)();return{withBaseUrl:(n,a)=>function(e,t,n,a){let{forcePrependBaseUrl:i=!1,absolute:r=!1}=void 0===a?{}:a;if(!n)return n;if(n.startsWith("#"))return n;if((0,l.z)(n))return n;if(i)return t+n;const o=n.startsWith(t)?n:t+n.replace(/^\//,"");return r?e+o:o}(t,e,n,a)}}function r(e,t){void 0===t&&(t={});const{withBaseUrl:n}=i();return n(e,t)}},8125:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(8168),l=(n(6540),n(5680)),i=n(6025);const r={sidebar_position:1,title:"Concept"},o=void 0,s={unversionedId:"design/concept",id:"version-1.3.2/design/concept",isDocsHomePage:!1,title:"Concept",description:"This section describes the basic concept and core functionality of the Jalape\xf1o API Gateway.",source:"@site/versioned_docs/version-1.3.2/design/concept.md",sourceDirName:"design",slug:"/design/concept",permalink:"/jagw/docs/1.3.2/design/concept",editUrl:"https://github.com/jalapeno-api-gateway/versioned_docs/version-1.3.2/design/concept.md",tags:[],version:"1.3.2",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Concept"},sidebar:"version-1.3.2/tutorialSidebar",previous:{title:"Introduction",permalink:"/jagw/docs/1.3.2/introduction"},next:{title:"Design Choices",permalink:"/jagw/docs/1.3.2/design/design-choices"}},p=[{value:"Deployment Diagram",id:"deployment-diagram",children:[]},{value:"Behavior of Jalape\xf1o Components",id:"behavior-of-jalape\xf1o-components",children:[]},{value:"Caching",id:"caching",children:[]},{value:"Requests",id:"requests",children:[]},{value:"Subscriptions",id:"subscriptions",children:[]}],c={toc:p},g="wrapper";function u(e){let{components:t,...n}=e;return(0,l.yg)(g,(0,a.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("p",null,"This section describes the basic concept and core functionality of the Jalape\xf1o API Gateway."),(0,l.yg)("h2",{id:"deployment-diagram"},"Deployment Diagram"),(0,l.yg)("div",{align:"center"},(0,l.yg)("img",{src:(0,i.A)("/img/api-gateway-deployment_v1.3.0.png"),alt:"deployment-diagram",width:"700px"})),(0,l.yg)("h2",{id:"behavior-of-jalape\xf1o-components"},"Behavior of Jalape\xf1o Components"),(0,l.yg)("p",null,"To understand how the Jalape\xf1o API Gateway works, it helps to understand how Jalape\xf1o itself works."),(0,l.yg)("p",null,"Here the basic principle of Jalape\xf1o is described:"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},"Changes to the network are published in various Kafka topics, i.e. in the topic ",(0,l.yg)("inlineCode",{parentName:"li"},"gobmp.parsed.ls_node"),", by ",(0,l.yg)("inlineCode",{parentName:"li"},"GoBMP")," and ",(0,l.yg)("inlineCode",{parentName:"li"},"Telegraf"),".")),(0,l.yg)("details",null,(0,l.yg)("summary",null,"Kafka Topics for unprocessed events"),(0,l.yg)("ul",null,(0,l.yg)("li",null,"These are all Kafka topics to which ",(0,l.yg)("code",null,"GoBMP")," writes topology updates:",(0,l.yg)("ul",null,(0,l.yg)("li",null,"gobmp.parsed.evpn"),(0,l.yg)("li",null,"gobmp.parsed.flowspec"),(0,l.yg)("li",null,"gobmp.parsed.flowspec_v4"),(0,l.yg)("li",null,"gobmp.parsed.flowspec_v6"),(0,l.yg)("li",null,"gobmp.parsed.l3vpn"),(0,l.yg)("li",null,"gobmp.parsed.l3vpn_v4"),(0,l.yg)("li",null,"gobmp.parsed.l3vpn_v6"),(0,l.yg)("li",null,"gobmp.parsed.ls_link"),(0,l.yg)("li",null,"gobmp.parsed.ls_node"),(0,l.yg)("li",null,"gobmp.parsed.ls_prefix"),(0,l.yg)("li",null,"gobmp.parsed.ls_srv6_sid"),(0,l.yg)("li",null,"gobmp.parsed.peer"),(0,l.yg)("li",null,"gobmp.parsed.sr_policy"),(0,l.yg)("li",null,"gobmp.parsed.sr_policy_v4"),(0,l.yg)("li",null,"gobmp.parsed.sr_policy_v6"),(0,l.yg)("li",null,"gobmp.parsed.unicast_prefix"),(0,l.yg)("li",null,"gobmp.parsed.unicast_prefix_v4"),(0,l.yg)("li",null,"gobmp.parsed.unicast_prefix_v6"))),(0,l.yg)("li",null,"This is the Kafka topic to which ",(0,l.yg)("code",null,"Telegraf")," (the one connected to the network) writes telemetry updates:",(0,l.yg)("ul",null,(0,l.yg)("li",null,"jalapeno.telemetry"))))),(0,l.yg)("ol",{start:2},(0,l.yg)("li",{parentName:"ol"},"The data processor ",(0,l.yg)("inlineCode",{parentName:"li"},"Topology")," processes the events and updates the GraphDB."),(0,l.yg)("li",{parentName:"ol"},"When it has successfully updated the database, it writes a message to a seperate Kafka topic (ending in ",(0,l.yg)("inlineCode",{parentName:"li"},"_events"),"), i.e. ",(0,l.yg)("inlineCode",{parentName:"li"},"gobmp.parsed.ls_node_events"),". This message contains the key to the document in the GraphDB that has been updated (or deleted).")),(0,l.yg)("details",null,(0,l.yg)("summary",null,"Kafka Topics for processed events"),(0,l.yg)("ul",null,(0,l.yg)("li",null,"These are all Kafka topics to which the processor ",(0,l.yg)("code",null,"Topology")," writes updates, once it has successfully updated the ",(0,l.yg)("code",null,"GraphDB"),":",(0,l.yg)("ul",null,(0,l.yg)("li",null,"gobmp.parsed.evpn_events"),(0,l.yg)("li",null,"gobmp.parsed.flowspec_events"),(0,l.yg)("li",null,"gobmp.parsed.flowspec_v4_events"),(0,l.yg)("li",null,"gobmp.parsed.flowspec_v6_events"),(0,l.yg)("li",null,"gobmp.parsed.l3vpn_events"),(0,l.yg)("li",null,"gobmp.parsed.l3vpn_v4_events"),(0,l.yg)("li",null,"gobmp.parsed.l3vpn_v6_events"),(0,l.yg)("li",null,"gobmp.parsed.ls_link_events"),(0,l.yg)("li",null,"gobmp.parsed.ls_node_events"),(0,l.yg)("li",null,"gobmp.parsed.ls_prefix_events"),(0,l.yg)("li",null,"gobmp.parsed.ls_srv6_sid_events"),(0,l.yg)("li",null,"gobmp.parsed.peer_events"),(0,l.yg)("li",null,"gobmp.parsed.sr_policy_events"),(0,l.yg)("li",null,"gobmp.parsed.sr_policy_v4_events"),(0,l.yg)("li",null,"gobmp.parsed.sr_policy_v6_events"),(0,l.yg)("li",null,"gobmp.parsed.unicast_prefix_events"),(0,l.yg)("li",null,"gobmp.parsed.unicast_prefix_v4_events"),(0,l.yg)("li",null,"gobmp.parsed.unicast_prefix_v6_events"),(0,l.yg)("li",null,"jalapeno.ls_node_edge_events"))),(0,l.yg)("li",null,"The processor ",(0,l.yg)("code",null,"Telegraf")," (the one connected to the ",(0,l.yg)("code",null,"TSDB"),") does not currently write anything back to Kafka."))),(0,l.yg)("details",null,(0,l.yg)("summary",null,"Event Message"),"An event message produced by the processor ",(0,l.yg)("code",null,"Topology")," and published in one of the ",(0,l.yg)("code",null,"_events")," topics looks like this:",(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"  type EventMessage struct {\n     TopicType int //represents an enum\n     Key       string\n     ID        string\n     Action    string\n  }\n"))),(0,l.yg)("h2",{id:"caching"},"Caching"),(0,l.yg)("p",null,"This is the behavior of the caching system when the API Gateway is started for the first time:"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},"The Cache Service subscribes to all Kafka topics ending in ",(0,l.yg)("inlineCode",{parentName:"li"},"_events")," (they all contain updates on topology data), i.e. ",(0,l.yg)("inlineCode",{parentName:"li"},"gobmp.parsed.ls_node_events"),". It does ",(0,l.yg)("strong",{parentName:"li"},"not yet")," start processing these events."),(0,l.yg)("li",{parentName:"ol"},"It then fetches the current state of all existing documents from the GraphDB and stores them in the cache."),(0,l.yg)("li",{parentName:"ol"},"It now starts processing the messages from the Kafka topics.",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"If the message describes an ",(0,l.yg)("strong",{parentName:"li"},"update"),", the Cache Service refetches the document from the GraphDB and overwrites the entry in the cache."),(0,l.yg)("li",{parentName:"ul"},"If the message describes a ",(0,l.yg)("strong",{parentName:"li"},"deletion"),", the Cache Service deletes the entry from the cache.")))),(0,l.yg)("p",null,"The Cache is now always an exact duplicate of the GraphDB. Even though it is not the most space efficient solution to cache all topology data (this can be improved upon in the future), it has two advantages."),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"It reduces the load on the GraphDB."),(0,l.yg)("li",{parentName:"ul"},"It reduces response times to API requests (reading from the cache is faster than reading from the database).")),(0,l.yg)("p",null,"Telemetry data is not cached for two reasons:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Telemetry data updates too frequently to justify caching."),(0,l.yg)("li",{parentName:"ul"},"The amount of telemetry data makes caching it unfeasible.")),(0,l.yg)("div",{align:"center"},(0,l.yg)("img",{src:(0,i.A)("/img/caching-system.png"),alt:"caching-system",width:"400px"})),(0,l.yg)("h2",{id:"requests"},"Requests"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"To request data from the API Gateway, an SR-App first initializes a gRPC connection with the Request Service."),(0,l.yg)("li",{parentName:"ul"},"The SR-App calls gRPC methods to request either topology or telemetry data."),(0,l.yg)("li",{parentName:"ul"},"The Request Service either queries the cache (for topology data) or the TSDB (for telemetry data) and returns the result to the SR-App.")),(0,l.yg)("div",{align:"center"},(0,l.yg)("img",{src:(0,i.A)("/img/request-handling.png"),alt:"request-handling",width:"400px"})),(0,l.yg)("h2",{id:"subscriptions"},"Subscriptions"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"The Subscription Service allows SR-Apps to subscribe to both topology and telemetry data."),(0,l.yg)("li",{parentName:"ul"},"The Subscription Service constantly watches Kafka topics for topology data (topics ending in ",(0,l.yg)("inlineCode",{parentName:"li"},"_events"),"). Upon receiving a message, it fetches the updated document from the GraphDB (unless it has been deleted) and informs all subscribers."),(0,l.yg)("li",{parentName:"ul"},"The Subscription Service also constantly watches the Kafka topic for telemetry data (topic ",(0,l.yg)("inlineCode",{parentName:"li"},"jalapeno.telemetry"),"). Upon receiving a message, it extracts the data from the telemetry string and informs all subscribers.")),(0,l.yg)("div",{align:"center"},(0,l.yg)("img",{src:(0,i.A)("/img/subscription-handling.png"),alt:"subscription-handling",width:"350px"})))}u.isMDXComponent=!0}}]);