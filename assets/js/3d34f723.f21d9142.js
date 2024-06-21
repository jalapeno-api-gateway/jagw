"use strict";(self.webpackChunkjalapeno_api_gateway_documentation=self.webpackChunkjalapeno_api_gateway_documentation||[]).push([[5971],{5680:(e,n,r)=>{r.d(n,{xA:()=>c,yg:()=>y});var s=r(6540);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function t(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,s)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?t(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,s,o=function(e,n){if(null==e)return{};var r,s,o={},t=Object.keys(e);for(s=0;s<t.length;s++)r=t[s],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(s=0;s<t.length;s++)r=t[s],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=s.createContext({}),l=function(e){var n=s.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},c=function(e){var n=l(e.components);return s.createElement(p.Provider,{value:n},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},u=s.forwardRef((function(e,n){var r=e.components,o=e.mdxType,t=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=l(r),u=o,y=d["".concat(p,".").concat(u)]||d[u]||g[u]||t;return r?s.createElement(y,a(a({ref:n},c),{},{components:r})):s.createElement(y,a({ref:n},c))}));function y(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var t=r.length,a=new Array(t);a[0]=u;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[d]="string"==typeof e?e:o,a[1]=i;for(var l=2;l<t;l++)a[l]=r[l];return s.createElement.apply(null,a)}return s.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3624:(e,n,r)=>{r.d(n,{A:()=>i});var s=r(6540),o=r(53);const t="tableOfContentsInline_0DDH";function a(e){let{toc:n,isChild:r}=e;return n.length?s.createElement("ul",{className:r?"":"table-of-contents"},n.map((e=>s.createElement("li",{key:e.id},s.createElement("a",{href:`#${e.id}`,dangerouslySetInnerHTML:{__html:e.value}}),s.createElement(a,{isChild:!0,toc:e.children}))))):null}const i=function(e){let{toc:n}=e;return s.createElement("div",{className:(0,o.A)(t)},s.createElement(a,{toc:n}))}},8103:(e,n,r)=>{r.r(n),r.d(n,{contentTitle:()=>i,default:()=>g,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var s=r(8168),o=(r(6540),r(5680)),t=r(3624);const a={sidebar_position:2,title:"Subscription Service"},i=void 0,p={unversionedId:"api/subscription-service",id:"version-1.4.0/api/subscription-service",isDocsHomePage:!1,title:"Subscription Service",description:"Protobuf Definition",source:"@site/versioned_docs/version-1.4.0/api/subscription-service.md",sourceDirName:"api",slug:"/api/subscription-service",permalink:"/jagw/docs/api/subscription-service",editUrl:"https://github.com/jalapeno-api-gateway/versioned_docs/version-1.4.0/api/subscription-service.md",tags:[],version:"1.4.0",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Subscription Service"},sidebar:"version-1.4.0/tutorialSidebar",previous:{title:"Request Service",permalink:"/jagw/docs/api/request-service"},next:{title:"Messages",permalink:"/jagw/docs/api/messages"}},l=[{value:"Protobuf Definition",id:"protobuf-definition",children:[]},{value:"Methods",id:"methods",children:[{value:"<code>SubscribeToLsNodes()</code>",id:"subscribetolsnodes",children:[]},{value:"<code>SubscribeToLsLinks()</code>",id:"subscribetolslinks",children:[]},{value:"<code>SubscribeToLsPrefixes()</code>",id:"subscribetolsprefixes",children:[]},{value:"<code>SubscribeToLsSrv6Sids()</code>",id:"subscribetolssrv6sids",children:[]},{value:"<code>SubscribeToLsNodeEdges()</code>",id:"subscribetolsnodeedges",children:[]},{value:"<code>SubscribeToPeers</code>",id:"subscribetopeers",children:[]},{value:"<code>SubscribeToTelemetryData()</code>",id:"subscribetotelemetrydata",children:[]}]}],c={toc:l},d="wrapper";function g(e){let{components:n,...r}=e;return(0,o.yg)(d,(0,s.A)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,o.yg)(t.A,{toc:l[l.length-1].children,mdxType:"TOCInline"}),(0,o.yg)("h2",{id:"protobuf-definition"},"Protobuf Definition"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-protobuf"},"service SubscriptionService {\n    rpc SubscribeToLsNodes(TopologySubscription) returns (stream LsNodeEvent) {}\n    rpc SubscribeToLsLinks(TopologySubscription) returns (stream LsLinkEvent) {}\n    rpc SubscribeToLsPrefixes(TopologySubscription) returns (stream LsPrefixEvent) {}\n    rpc SubscribeToLsSrv6Sids(TopologySubscription) returns (stream LsSrv6SidEvent) {}\n    rpc SubscribeToLsNodeEdges(TopologySubscription) returns (stream LsNodeEdgeEvent) {}\n    rpc SubscribeToPeers(TopologySubscription) returns (stream PeerEvent) {}\n    rpc SubscribeToTelemetryData(TelemetrySubscription) returns (stream TelemetryEvent) {}\n}\n")),(0,o.yg)("h2",{id:"methods"},"Methods"),(0,o.yg)("h3",{id:"subscribetolsnodes"},(0,o.yg)("inlineCode",{parentName:"h3"},"SubscribeToLsNodes()")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-protobuf"},"rpc SubscribeToLsNodes(TopologySubscription) returns (stream LsNodeEvent) {}\n")),(0,o.yg)("p",null,(0,o.yg)("em",{parentName:"p"},"See also"),": ",(0,o.yg)("a",{parentName:"p",href:"messages#topologysubscription"},"TopologySubscription"),", ",(0,o.yg)("a",{parentName:"p",href:"messages#lsnodeevent"},"LsNodeEvent")),(0,o.yg)("h4",{id:"description"},"Description"),(0,o.yg)("p",null,"Takes a ",(0,o.yg)("a",{parentName:"p",href:"messages#topologysubscription"},"TopologySubscription")," with the specified ",(0,o.yg)("strong",{parentName:"p"},"keys")," and ",(0,o.yg)("strong",{parentName:"p"},"properties")," and returns a stream of ",(0,o.yg)("a",{parentName:"p",href:"messages#lsnodeevent"},"LsNodeEvents"),". An LsNodeEvent contains an update to a single ",(0,o.yg)("a",{parentName:"p",href:"messages#lsnode"},"LsNode"),". Only ",(0,o.yg)("a",{parentName:"p",href:"messages#lsnode"},"LsNodes")," matching one of the specified ",(0,o.yg)("strong",{parentName:"p"},"keys")," are returned and only properties specified in ",(0,o.yg)("strong",{parentName:"p"},"properties")," are set."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Omitting ",(0,o.yg)("strong",{parentName:"li"},"keys")," streams ",(0,o.yg)("a",{parentName:"li",href:"messages#lsnodeevent"},"LsNodeEvents")," for all available ",(0,o.yg)("a",{parentName:"li",href:"messages#lsnode"},"LsNodes"),"."),(0,o.yg)("li",{parentName:"ul"},"Omitting ",(0,o.yg)("strong",{parentName:"li"},"properties")," streams ",(0,o.yg)("a",{parentName:"li",href:"messages#lsnodeevent"},"LsNodeEvents")," for ",(0,o.yg)("a",{parentName:"li",href:"messages#lsnode"},"LsNodes")," with all available properties.")),(0,o.yg)("h4",{id:"examples"},"Examples"),(0,o.yg)("details",{className:"codeBlockDetails"},(0,o.yg)("summary",null,"Example 1"),(0,o.yg)("div",null,"Subscribe to specific LsNodes and return only specific properties.",(0,o.yg)("div",{className:"codeBlockContainer"},(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-json"},'TopologySubscription {\n    "keys": [\n        "nodeKey1",\n        "nodeKey2"\n    ],\n    "properties": [\n        "Key",\n        "Name",\n        "Asn"\n    ]\n}\n'))),(0,o.yg)("div",{className:"downArrow"},"\ud83e\udc17"),(0,o.yg)("div",{className:"codeBlockContainer"},(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-json"},'// Continuously streams LsNodeEvents\n// only for the specified nodes and\n// returns only the specified properties\n\nLsNodeEvent {\n    "Action": "update",\n    "Key": "nodeKey1",\n    "LsNode": {\n        "Key": "nodeKey1",\n        "Name": "XR-1",\n        "Asn": 65001,\n    }\n}\n'))))),(0,o.yg)("details",{className:"codeBlockDetails"},(0,o.yg)("summary",null,"Example 2"),(0,o.yg)("div",null,"Subscribe to all available LsNodes and return only specific properties.",(0,o.yg)("div",{className:"codeBlockContainer"},(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-json"},'TopologySubscription {\n    "properties": [\n        "Key",\n        "Name",\n        "Asn"\n    ]\n}\n'))),(0,o.yg)("div",{className:"downArrow"},"\ud83e\udc17"),(0,o.yg)("div",{className:"codeBlockContainer"},(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-json"},'// Continuously streams LsNodeEvents\n// for all available nodes and returns\n// only the specified properties\n\nLsNodeEvent {\n    "Action": "update",\n    "Key": "nodeKey7",\n    "LsNode": {\n        "Key": "nodeKey7",\n        "Name": "XR-7",\n        "Asn": 65001,\n    }\n}\n'))))),(0,o.yg)("details",{className:"codeBlockDetails"},(0,o.yg)("summary",null,"Example 3"),(0,o.yg)("div",null,"Subscribe to specific LsNodes and return all their properties.",(0,o.yg)("div",{className:"codeBlockContainer"},(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-json"},'TopologySubscription {\n    "keys": [\n        "nodeKey1",\n        "nodeKey2"\n    ],\n}\n'))),(0,o.yg)("div",{className:"downArrow"},"\ud83e\udc17"),(0,o.yg)("div",{className:"codeBlockContainer"},(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-json"},'// Continuously streams LsNodeEvents\n// for the specified nodes\n\nLsNodeEvent {\n    "Action": "update",\n    "Key": "nodeKey1",\n    "LsNode": {\n        "Key": "nodeKey1",\n        "Id": 773,\n        "RouterHash": "7eb583cb3c17c496cfa9370d9bc2a3eb",\n        ...\n    }\n}\n'))))),(0,o.yg)("details",{className:"codeBlockDetails"},(0,o.yg)("summary",null,"Example 4"),(0,o.yg)("div",null,"Subscribe to all available LsNodes and return all their properties.",(0,o.yg)("div",{className:"codeBlockContainer"},(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-json"},"TopologySubscription {}\n"))),(0,o.yg)("div",{className:"downArrow"},"\ud83e\udc17"),(0,o.yg)("div",{className:"codeBlockContainer"},(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-json"},'// Continuously streams LsNodeEvents\n// for all available nodes\n\nLsNodeEvent {\n    "Action": "update",\n    "Key": "nodeKey7",\n    "LsNode": {\n        "Key": "nodeKey7",\n        "Id": 773,\n        "RouterHash": "7eb583cb3c17c496cfa9370d9bc2a3eb",\n        ...\n    }\n}\n'))))),(0,o.yg)("h3",{id:"subscribetolslinks"},(0,o.yg)("inlineCode",{parentName:"h3"},"SubscribeToLsLinks()")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-protobuf"},"rpc SubscribeToLsLinks(TopologySubscription) returns (stream LsLinkEvent) {}\n")),(0,o.yg)("p",null,(0,o.yg)("em",{parentName:"p"},"See also"),": ",(0,o.yg)("a",{parentName:"p",href:"messages#topologysubscription"},"TopologySubscription"),", ",(0,o.yg)("a",{parentName:"p",href:"messages#lslinkevent"},"LsLinkEvent")),(0,o.yg)("h4",{id:"description-1"},"Description"),(0,o.yg)("p",null,"See method ",(0,o.yg)("a",{parentName:"p",href:"#subscribetolsnodes"},"SubscribeToLsNodes()"),". It follows the same principle regarding ",(0,o.yg)("strong",{parentName:"p"},"keys")," and ",(0,o.yg)("strong",{parentName:"p"},"properties"),"."),(0,o.yg)("h3",{id:"subscribetolsprefixes"},(0,o.yg)("inlineCode",{parentName:"h3"},"SubscribeToLsPrefixes()")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-protobuf"},"rpc SubscribeToLsPrefixes(TopologySubscription) returns (stream LsPrefixEvent) {}\n")),(0,o.yg)("p",null,(0,o.yg)("em",{parentName:"p"},"See also"),": ",(0,o.yg)("a",{parentName:"p",href:"messages#topologysubscription"},"TopologySubscription"),", ",(0,o.yg)("a",{parentName:"p",href:"messages#lsprefixevent"},"LsPrefixEvent")),(0,o.yg)("h4",{id:"description-2"},"Description"),(0,o.yg)("p",null,"See method ",(0,o.yg)("a",{parentName:"p",href:"#subscribetolsnodes"},"SubscribeToLsNodes()"),". It follows the same principle regarding ",(0,o.yg)("strong",{parentName:"p"},"keys")," and ",(0,o.yg)("strong",{parentName:"p"},"properties"),"."),(0,o.yg)("h3",{id:"subscribetolssrv6sids"},(0,o.yg)("inlineCode",{parentName:"h3"},"SubscribeToLsSrv6Sids()")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-protobuf"},"rpc SubscribeToLsSrv6Sids(TopologySubscription) returns (stream LsSrv6SidEvent) {}\n")),(0,o.yg)("p",null,(0,o.yg)("em",{parentName:"p"},"See also"),": ",(0,o.yg)("a",{parentName:"p",href:"messages#topologysubscription"},"TopologySubscription"),", ",(0,o.yg)("a",{parentName:"p",href:"messages#lssrv6sidevent"},"LsSrv6SidEvent")),(0,o.yg)("h4",{id:"description-3"},"Description"),(0,o.yg)("p",null,"See method ",(0,o.yg)("a",{parentName:"p",href:"#subscribetolsnodes"},"SubscribeToLsNodes()"),". It follows the same principle regarding ",(0,o.yg)("strong",{parentName:"p"},"keys")," and ",(0,o.yg)("strong",{parentName:"p"},"properties"),"."),(0,o.yg)("h3",{id:"subscribetolsnodeedges"},(0,o.yg)("inlineCode",{parentName:"h3"},"SubscribeToLsNodeEdges()")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-protobuf"},"rpc SubscribeToLsNodeEdges(TopologySubscription) returns (stream LsNodeEdgeEvent) {}\n")),(0,o.yg)("p",null,(0,o.yg)("em",{parentName:"p"},"See also"),": ",(0,o.yg)("a",{parentName:"p",href:"messages#topologysubscription"},"TopologySubscription"),", ",(0,o.yg)("a",{parentName:"p",href:"messages#lsnodeedgeevent"},"LsNodeEdgeEvent")),(0,o.yg)("h4",{id:"description-4"},"Description"),(0,o.yg)("p",null,"See method ",(0,o.yg)("a",{parentName:"p",href:"#subscribetolsnodes"},"SubscribeToLsNodes()"),". It follows the same principle regarding ",(0,o.yg)("strong",{parentName:"p"},"keys")," and ",(0,o.yg)("strong",{parentName:"p"},"properties"),"."),(0,o.yg)("h3",{id:"subscribetopeers"},(0,o.yg)("inlineCode",{parentName:"h3"},"SubscribeToPeers")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-protobuf"},"rpc SubscribeToPeers(TopologySubscription) returns (stream PeerEvent) {}\n")),(0,o.yg)("p",null,(0,o.yg)("em",{parentName:"p"},"See also"),": ",(0,o.yg)("a",{parentName:"p",href:"messages#topologysubscription"},"PeerSubscription"),", ",(0,o.yg)("a",{parentName:"p",href:"messages#peerevent"},"PeerEvent")),(0,o.yg)("h4",{id:"description-5"},"Description"),(0,o.yg)("p",null,"See method ",(0,o.yg)("a",{parentName:"p",href:"#subscribetolsnodes"},"SubscribeToLsNodes()"),". It follows the same principle regarding ",(0,o.yg)("strong",{parentName:"p"},"keys")," and ",(0,o.yg)("strong",{parentName:"p"},"properties"),"."),(0,o.yg)("h3",{id:"subscribetotelemetrydata"},(0,o.yg)("inlineCode",{parentName:"h3"},"SubscribeToTelemetryData()")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-protobuf"},"rpc SubscribeToTelemetryData(TelemetrySubscription) returns (stream TelemetryEvent) {}\n")),(0,o.yg)("p",null,(0,o.yg)("em",{parentName:"p"},"See also"),": ",(0,o.yg)("a",{parentName:"p",href:"messages#telemetrysubscription"},"TelemetrySubscription"),", ",(0,o.yg)("a",{parentName:"p",href:"messages#telemetryresponse"},"TelemetryResponse")),(0,o.yg)("h4",{id:"description-6"},"Description"),(0,o.yg)("p",null,"Subscribing to telemetry data follows the same principle as requesting telemetry data. For reference, see ",(0,o.yg)("a",{parentName:"p",href:"request-service#gettelemetrydata"},"GetTelemetryData()"),"."),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"SubscribeToTelemetryData()")," does not allow you to provide RangeFilters however, unlike ",(0,o.yg)("inlineCode",{parentName:"p"},"GetTelemetryData()"),"."))}g.isMDXComponent=!0},53:(e,n,r)=>{function s(e){var n,r,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(r=s(e[n]))&&(o&&(o+=" "),o+=r);else for(n in e)e[n]&&(o&&(o+=" "),o+=n);return o}r.d(n,{A:()=>o});const o=function(){for(var e,n,r=0,o="";r<arguments.length;)(e=arguments[r++])&&(n=s(e))&&(o&&(o+=" "),o+=n);return o}}}]);