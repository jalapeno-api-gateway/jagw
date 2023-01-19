"use strict";(self.webpackChunkjalapeno_api_gateway_documentation=self.webpackChunkjalapeno_api_gateway_documentation||[]).push([[8599],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=s,b=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(b,a(a({ref:t},c),{},{components:n})):r.createElement(b,a({ref:t},c))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,a=new Array(o);a[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,a[1]=i;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3873:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(7294),s=n(6010),o="tableOfContentsInline_3fWc";function a(e){var t=e.toc,n=e.isChild;return t.length?r.createElement("ul",{className:n?"":"table-of-contents"},t.map((function(e){return r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(a,{isChild:!0,toc:e.children}))}))):null}var i=function(e){var t=e.toc;return r.createElement("div",{className:(0,s.Z)(o)},r.createElement(a,{toc:t}))}},9679:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return d},default:function(){return m}});var r=n(7462),s=n(3366),o=(n(7294),n(3905)),a=n(3873),i=["components"],l={sidebar_position:2,title:"Subscription Service"},p=void 0,c={unversionedId:"api/subscription-service",id:"version-1.3.2/api/subscription-service",isDocsHomePage:!1,title:"Subscription Service",description:"Protobuf Definition",source:"@site/versioned_docs/version-1.3.2/api/subscription-service.md",sourceDirName:"api",slug:"/api/subscription-service",permalink:"/jagw/docs/api/subscription-service",editUrl:"https://github.com/jalapeno-api-gateway/versioned_docs/version-1.3.2/api/subscription-service.md",tags:[],version:"1.3.2",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Subscription Service"},sidebar:"version-1.3.2/tutorialSidebar",previous:{title:"Request Service",permalink:"/jagw/docs/api/request-service"},next:{title:"Messages",permalink:"/jagw/docs/api/messages"}},d=[{value:"Protobuf Definition",id:"protobuf-definition",children:[]},{value:"Methods",id:"methods",children:[{value:"<code>SubscribeToLsNodes()</code>",id:"subscribetolsnodes",children:[]},{value:"<code>SubscribeToLsLinks()</code>",id:"subscribetolslinks",children:[]},{value:"<code>SubscribeToLsPrefixes()</code>",id:"subscribetolsprefixes",children:[]},{value:"<code>SubscribeToLsSrv6Sids()</code>",id:"subscribetolssrv6sids",children:[]},{value:"<code>SubscribeToLsNodeEdges()</code>",id:"subscribetolsnodeedges",children:[]},{value:"<code>SubscribeToTelemetryData()</code>",id:"subscribetotelemetrydata",children:[]}]}],u={toc:d};function m(e){var t=e.components,n=(0,s.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(a.Z,{toc:d[d.length-1].children,mdxType:"TOCInline"}),(0,o.kt)("h2",{id:"protobuf-definition"},"Protobuf Definition"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-protobuf"},"service SubscriptionService {\n    rpc SubscribeToLsNodes(TopologySubscription) returns (stream LsNodeEvent) {}\n    rpc SubscribeToLsLinks(TopologySubscription) returns (stream LsLinkEvent) {}\n    rpc SubscribeToLsPrefixes(TopologySubscription) returns (stream LsPrefixEvent) {}\n    rpc SubscribeToLsSrv6Sids(TopologySubscription) returns (stream LsSrv6SidEvent) {}\n    rpc SubscribeToLsNodeEdges(TopologySubscription) returns (stream LsNodeEdgeEvent) {}\n    rpc SubscribeToTelemetryData(TelemetrySubscription) returns (stream TelemetryEvent) {}\n}\n")),(0,o.kt)("h2",{id:"methods"},"Methods"),(0,o.kt)("h3",{id:"subscribetolsnodes"},(0,o.kt)("inlineCode",{parentName:"h3"},"SubscribeToLsNodes()")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-protobuf"},"rpc SubscribeToLsNodes(TopologySubscription) returns (stream LsNodeEvent) {}\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"See also"),": ",(0,o.kt)("a",{parentName:"p",href:"messages#topologysubscription"},"TopologySubscription"),", ",(0,o.kt)("a",{parentName:"p",href:"messages#lsnodeevent"},"LsNodeEvent")),(0,o.kt)("h4",{id:"description"},"Description"),(0,o.kt)("p",null,"Takes a ",(0,o.kt)("a",{parentName:"p",href:"messages#topologysubscription"},"TopologySubscription")," with the specified ",(0,o.kt)("strong",{parentName:"p"},"keys")," and ",(0,o.kt)("strong",{parentName:"p"},"properties")," and returns a stream of ",(0,o.kt)("a",{parentName:"p",href:"messages#lsnodeevent"},"LsNodeEvents"),". An LsNodeEvent contains an update to a single ",(0,o.kt)("a",{parentName:"p",href:"messages#lsnode"},"LsNode"),". Only ",(0,o.kt)("a",{parentName:"p",href:"messages#lsnode"},"LsNodes")," matching one of the specified ",(0,o.kt)("strong",{parentName:"p"},"keys")," are returned and only properties specified in ",(0,o.kt)("strong",{parentName:"p"},"properties")," are set."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Omitting ",(0,o.kt)("strong",{parentName:"li"},"keys")," streams ",(0,o.kt)("a",{parentName:"li",href:"messages#lsnodeevent"},"LsNodeEvents")," for all available ",(0,o.kt)("a",{parentName:"li",href:"messages#lsnode"},"LsNodes"),"."),(0,o.kt)("li",{parentName:"ul"},"Omitting ",(0,o.kt)("strong",{parentName:"li"},"properties")," streams ",(0,o.kt)("a",{parentName:"li",href:"messages#lsnodeevent"},"LsNodeEvents")," for ",(0,o.kt)("a",{parentName:"li",href:"messages#lsnode"},"LsNodes")," with all available properties.")),(0,o.kt)("h4",{id:"examples"},"Examples"),(0,o.kt)("details",{className:"codeBlockDetails"},(0,o.kt)("summary",null,"Example 1"),(0,o.kt)("div",null,"Subscribe to specific LsNodes and return only specific properties.",(0,o.kt)("div",{className:"codeBlockContainer"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'TopologySubscription {\n    "keys": [\n        "nodeKey1",\n        "nodeKey2"\n    ],\n    "properties": [\n        "Key",\n        "Name",\n        "Asn"\n    ]\n}\n'))),(0,o.kt)("div",{className:"downArrow"},"\ud83e\udc17"),(0,o.kt)("div",{className:"codeBlockContainer"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'// Continuously streams LsNodeEvents\n// only for the specified nodes and\n// returns only the specified properties\n\nLsNodeEvent {\n    "Action": "update",\n    "Key": "nodeKey1",\n    "LsNode": {\n        "Key": "nodeKey1",\n        "Name": "XR-1",\n        "Asn": 65001,\n    }\n}\n'))))),(0,o.kt)("details",{className:"codeBlockDetails"},(0,o.kt)("summary",null,"Example 2"),(0,o.kt)("div",null,"Subscribe to all available LsNodes and return only specific properties.",(0,o.kt)("div",{className:"codeBlockContainer"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'TopologySubscription {\n    "properties": [\n        "Key",\n        "Name",\n        "Asn"\n    ]\n}\n'))),(0,o.kt)("div",{className:"downArrow"},"\ud83e\udc17"),(0,o.kt)("div",{className:"codeBlockContainer"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'// Continuously streams LsNodeEvents\n// for all available nodes and returns\n// only the specified properties\n\nLsNodeEvent {\n    "Action": "update",\n    "Key": "nodeKey7",\n    "LsNode": {\n        "Key": "nodeKey7",\n        "Name": "XR-7",\n        "Asn": 65001,\n    }\n}\n'))))),(0,o.kt)("details",{className:"codeBlockDetails"},(0,o.kt)("summary",null,"Example 3"),(0,o.kt)("div",null,"Subscribe to specific LsNodes and return all their properties.",(0,o.kt)("div",{className:"codeBlockContainer"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'TopologySubscription {\n    "keys": [\n        "nodeKey1",\n        "nodeKey2"\n    ],\n}\n'))),(0,o.kt)("div",{className:"downArrow"},"\ud83e\udc17"),(0,o.kt)("div",{className:"codeBlockContainer"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'// Continuously streams LsNodeEvents\n// for the specified nodes\n\nLsNodeEvent {\n    "Action": "update",\n    "Key": "nodeKey1",\n    "LsNode": {\n        "Key": "nodeKey1",\n        "Id": 773,\n        "RouterHash": "7eb583cb3c17c496cfa9370d9bc2a3eb",\n        ...\n    }\n}\n'))))),(0,o.kt)("details",{className:"codeBlockDetails"},(0,o.kt)("summary",null,"Example 4"),(0,o.kt)("div",null,"Subscribe to all available LsNodes and return all their properties.",(0,o.kt)("div",{className:"codeBlockContainer"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},"TopologySubscription {}\n"))),(0,o.kt)("div",{className:"downArrow"},"\ud83e\udc17"),(0,o.kt)("div",{className:"codeBlockContainer"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'// Continuously streams LsNodeEvents\n// for all available nodes\n\nLsNodeEvent {\n    "Action": "update",\n    "Key": "nodeKey7",\n    "LsNode": {\n        "Key": "nodeKey7",\n        "Id": 773,\n        "RouterHash": "7eb583cb3c17c496cfa9370d9bc2a3eb",\n        ...\n    }\n}\n'))))),(0,o.kt)("h3",{id:"subscribetolslinks"},(0,o.kt)("inlineCode",{parentName:"h3"},"SubscribeToLsLinks()")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-protobuf"},"rpc SubscribeToLsLinks(TopologySubscription) returns (stream LsLinkEvent) {}\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"See also"),": ",(0,o.kt)("a",{parentName:"p",href:"messages#topologysubscription"},"TopologySubscription"),", ",(0,o.kt)("a",{parentName:"p",href:"messages#lslinkevent"},"LsLinkEvent")),(0,o.kt)("h4",{id:"description-1"},"Description"),(0,o.kt)("p",null,"See method ",(0,o.kt)("a",{parentName:"p",href:"#subscribetolsnodes"},"SubscribeToLsNodes()"),". It follows the same principle regarding ",(0,o.kt)("strong",{parentName:"p"},"keys")," and ",(0,o.kt)("strong",{parentName:"p"},"properties"),"."),(0,o.kt)("h3",{id:"subscribetolsprefixes"},(0,o.kt)("inlineCode",{parentName:"h3"},"SubscribeToLsPrefixes()")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-protobuf"},"rpc SubscribeToLsPrefixes(TopologySubscription) returns (stream LsPrefixEvent) {}\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"See also"),": ",(0,o.kt)("a",{parentName:"p",href:"messages#topologysubscription"},"TopologySubscription"),", ",(0,o.kt)("a",{parentName:"p",href:"messages#lsprefixevent"},"LsPrefixEvent")),(0,o.kt)("h4",{id:"description-2"},"Description"),(0,o.kt)("p",null,"See method ",(0,o.kt)("a",{parentName:"p",href:"#subscribetolsnodes"},"SubscribeToLsNodes()"),". It follows the same principle regarding ",(0,o.kt)("strong",{parentName:"p"},"keys")," and ",(0,o.kt)("strong",{parentName:"p"},"properties"),"."),(0,o.kt)("h3",{id:"subscribetolssrv6sids"},(0,o.kt)("inlineCode",{parentName:"h3"},"SubscribeToLsSrv6Sids()")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-protobuf"},"rpc SubscribeToLsSrv6Sids(TopologySubscription) returns (stream LsSrv6SidEvent) {}\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"See also"),": ",(0,o.kt)("a",{parentName:"p",href:"messages#topologysubscription"},"TopologySubscription"),", ",(0,o.kt)("a",{parentName:"p",href:"messages#lssrv6sidevent"},"LsSrv6SidEvent")),(0,o.kt)("h4",{id:"description-3"},"Description"),(0,o.kt)("p",null,"See method ",(0,o.kt)("a",{parentName:"p",href:"#subscribetolsnodes"},"SubscribeToLsNodes()"),". It follows the same principle regarding ",(0,o.kt)("strong",{parentName:"p"},"keys")," and ",(0,o.kt)("strong",{parentName:"p"},"properties"),"."),(0,o.kt)("h3",{id:"subscribetolsnodeedges"},(0,o.kt)("inlineCode",{parentName:"h3"},"SubscribeToLsNodeEdges()")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-protobuf"},"rpc SubscribeToLsNodeEdges(TopologySubscription) returns (stream LsNodeEdgeEvent) {}\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"See also"),": ",(0,o.kt)("a",{parentName:"p",href:"messages#topologysubscription"},"TopologySubscription"),", ",(0,o.kt)("a",{parentName:"p",href:"messages#lsnodeedgeevent"},"LsNodeEdgeEvent")),(0,o.kt)("h4",{id:"description-4"},"Description"),(0,o.kt)("p",null,"See method ",(0,o.kt)("a",{parentName:"p",href:"#subscribetolsnodes"},"SubscribeToLsNodes()"),". It follows the same principle regarding ",(0,o.kt)("strong",{parentName:"p"},"keys")," and ",(0,o.kt)("strong",{parentName:"p"},"properties"),"."),(0,o.kt)("h3",{id:"subscribetotelemetrydata"},(0,o.kt)("inlineCode",{parentName:"h3"},"SubscribeToTelemetryData()")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-protobuf"},"rpc SubscribeToTelemetryData(TelemetrySubscription) returns (stream TelemetryEvent) {}\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"See also"),": ",(0,o.kt)("a",{parentName:"p",href:"messages#telemetrysubscription"},"TelemetrySubscription"),", ",(0,o.kt)("a",{parentName:"p",href:"messages#telemetryresponse"},"TelemetryResponse")),(0,o.kt)("h4",{id:"description-5"},"Description"),(0,o.kt)("p",null,"Subscribing to telemetry data follows the same principle as requesting telemetry data. For reference, see ",(0,o.kt)("a",{parentName:"p",href:"request-service#gettelemetrydata"},"GetTelemetryData()"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"SubscribeToTelemetryData()")," does not allow you to provide RangeFilters however, unlike ",(0,o.kt)("inlineCode",{parentName:"p"},"GetTelemetryData()"),"."))}m.isMDXComponent=!0},6010:function(e,t,n){function r(e){var t,n,s="";if("string"==typeof e||"number"==typeof e)s+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(s&&(s+=" "),s+=n);else for(t in e)e[t]&&(s&&(s+=" "),s+=t);return s}function s(){for(var e,t,n=0,s="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(s&&(s+=" "),s+=t);return s}n.d(t,{Z:function(){return s}})}}]);