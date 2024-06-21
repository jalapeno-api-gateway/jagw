"use strict";(self.webpackChunkjalapeno_api_gateway_documentation=self.webpackChunkjalapeno_api_gateway_documentation||[]).push([[9268],{5680:(e,t,r)=>{r.d(t,{xA:()=>g,yg:()=>u});var n=r(6540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},g=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},y="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),y=p(r),m=a,u=y["".concat(l,".").concat(m)]||y[m]||d[m]||s;return r?n.createElement(u,o(o({ref:t},g),{},{components:r})):n.createElement(u,o({ref:t},g))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[y]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<s;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3624:(e,t,r)=>{r.d(t,{A:()=>i});var n=r(6540),a=r(53);const s="tableOfContentsInline_0DDH";function o(e){let{toc:t,isChild:r}=e;return t.length?n.createElement("ul",{className:r?"":"table-of-contents"},t.map((e=>n.createElement("li",{key:e.id},n.createElement("a",{href:`#${e.id}`,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(o,{isChild:!0,toc:e.children}))))):null}const i=function(e){let{toc:t}=e;return n.createElement("div",{className:(0,a.A)(s)},n.createElement(o,{toc:t}))}},1885:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(8168),a=(r(6540),r(5680)),s=r(3624);const o={sidebar_position:2,title:"Subscription Service"},i=void 0,l={unversionedId:"api/subscription-service",id:"version-1.2.0/api/subscription-service",isDocsHomePage:!1,title:"Subscription Service",description:"Protobuf Definition",source:"@site/versioned_docs/version-1.2.0/api/subscription-service.md",sourceDirName:"api",slug:"/api/subscription-service",permalink:"/jagw/docs/1.2.0/api/subscription-service",editUrl:"https://github.com/jalapeno-api-gateway/versioned_docs/version-1.2.0/api/subscription-service.md",tags:[],version:"1.2.0",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Subscription Service"},sidebar:"version-1.2.0/tutorialSidebar",previous:{title:"Request Service",permalink:"/jagw/docs/1.2.0/api/request-service"},next:{title:"Messages",permalink:"/jagw/docs/1.2.0/api/messages"}},p=[{value:"Protobuf Definition",id:"protobuf-definition",children:[]},{value:"Methods",id:"methods",children:[{value:"<code>SubscribeToLsNodes()</code>",id:"subscribetolsnodes",children:[]},{value:"<code>SubscribeToLsLinks()</code>",id:"subscribetolslinks",children:[]},{value:"<code>SubscribeToLsPrefixes()</code>",id:"subscribetolsprefixes",children:[]},{value:"<code>SubscribeToLsSrv6Sids()</code>",id:"subscribetolssrv6sids",children:[]},{value:"<code>SubscribeToLsNodeEdges()</code>",id:"subscribetolsnodeedges",children:[]},{value:"<code>SubscribeToTelemetryData()</code>",id:"subscribetotelemetrydata",children:[]}]}],g={toc:p},y="wrapper";function d(e){let{components:t,...r}=e;return(0,a.yg)(y,(0,n.A)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)(s.A,{toc:p[p.length-1].children,mdxType:"TOCInline"}),(0,a.yg)("h2",{id:"protobuf-definition"},"Protobuf Definition"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-protobuf"},"service SubscriptionService {\n    rpc SubscribeToLsNodes(TopologySubscription) returns (stream LsNodeEvent) {}\n    rpc SubscribeToLsLinks(TopologySubscription) returns (stream LsLinkEvent) {}\n    rpc SubscribeToLsPrefixes(TopologySubscription) returns (stream LsPrefixEvent) {}\n    rpc SubscribeToLsSrv6Sids(TopologySubscription) returns (stream LsSrv6SidEvent) {}\n    rpc SubscribeToLsNodeEdges(TopologySubscription) returns (stream LsNodeEdgeEvent) {}\n    rpc SubscribeToTelemetryData(TelemetrySubscription) returns (stream TelemetryEvent) {}\n}\n")),(0,a.yg)("h2",{id:"methods"},"Methods"),(0,a.yg)("h3",{id:"subscribetolsnodes"},(0,a.yg)("inlineCode",{parentName:"h3"},"SubscribeToLsNodes()")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-protobuf"},"rpc SubscribeToLsNodes(TopologySubscription) returns (stream LsNodeEvent) {}\n")),(0,a.yg)("p",null,(0,a.yg)("em",{parentName:"p"},"See also"),": ",(0,a.yg)("a",{parentName:"p",href:"messages#topologysubscription"},"TopologySubscription"),", ",(0,a.yg)("a",{parentName:"p",href:"messages#lsnodeevent"},"LsNodeEvent")),(0,a.yg)("h4",{id:"description"},"Description"),(0,a.yg)("p",null,"Takes a ",(0,a.yg)("a",{parentName:"p",href:"messages#topologysubscription"},"TopologySubscription")," with the specified ",(0,a.yg)("strong",{parentName:"p"},"keys")," and ",(0,a.yg)("strong",{parentName:"p"},"properties")," and returns a stream of ",(0,a.yg)("a",{parentName:"p",href:"messages#lsnodeevent"},"LsNodeEvents"),". An LsNodeEvent contains an update to a single ",(0,a.yg)("a",{parentName:"p",href:"messages#lsnode"},"LsNode"),". Only ",(0,a.yg)("a",{parentName:"p",href:"messages#lsnode"},"LsNodes")," matching one of the specified ",(0,a.yg)("strong",{parentName:"p"},"keys")," are returned and only properties specified in ",(0,a.yg)("strong",{parentName:"p"},"properties")," are set."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Omitting ",(0,a.yg)("strong",{parentName:"li"},"keys")," streams ",(0,a.yg)("a",{parentName:"li",href:"messages#lsnodeevent"},"LsNodeEvents")," for all available ",(0,a.yg)("a",{parentName:"li",href:"messages#lsnode"},"LsNodes"),"."),(0,a.yg)("li",{parentName:"ul"},"Omitting ",(0,a.yg)("strong",{parentName:"li"},"properties")," streams ",(0,a.yg)("a",{parentName:"li",href:"messages#lsnodeevent"},"LsNodeEvents")," for ",(0,a.yg)("a",{parentName:"li",href:"messages#lsnode"},"LsNodes")," with all available properties.")),(0,a.yg)("h4",{id:"examples"},"Examples"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"keys"),(0,a.yg)("th",{parentName:"tr",align:null},"properties"),(0,a.yg)("th",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"th",href:"messages#lsnodeevent"},"LsNodeEvents")))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"[",(0,a.yg)("br",null),'"nodeKey1",',(0,a.yg)("br",null),'"nodeKey2"',(0,a.yg)("br",null),"]"),(0,a.yg)("td",{parentName:"tr",align:null},"[",(0,a.yg)("br",null),'"Name",',(0,a.yg)("br",null),'"Asn",',(0,a.yg)("br",null),'"RouterIp"',(0,a.yg)("br",null),"]"),(0,a.yg)("td",{parentName:"tr",align:null},"Streams ",(0,a.yg)("a",{parentName:"td",href:"messages#lsnodeevent"},"LsNodeEvents")," for ",(0,a.yg)("a",{parentName:"td",href:"messages#lsnode"},"LsNodes")," for the two specified keys with the three requested properties.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"-"),(0,a.yg)("td",{parentName:"tr",align:null},"[",(0,a.yg)("br",null),'"Name",',(0,a.yg)("br",null),'"Asn",',(0,a.yg)("br",null),'"RouterIp"',(0,a.yg)("br",null),"]"),(0,a.yg)("td",{parentName:"tr",align:null},"Streams ",(0,a.yg)("a",{parentName:"td",href:"messages#lsnodeevent"},"LsNodeEvents")," for all available ",(0,a.yg)("a",{parentName:"td",href:"messages#lsnode"},"LsNodes")," with the three requested properties.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"[",(0,a.yg)("br",null),'"nodeKey1",',(0,a.yg)("br",null),'"nodeKey2"',(0,a.yg)("br",null),"]"),(0,a.yg)("td",{parentName:"tr",align:null},"-"),(0,a.yg)("td",{parentName:"tr",align:null},"Streams ",(0,a.yg)("a",{parentName:"td",href:"messages#lsnodeevent"},"LsNodeEvents")," for ",(0,a.yg)("a",{parentName:"td",href:"messages#lsnode"},"LsNodes")," for the two specified keys with all available properties.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"-"),(0,a.yg)("td",{parentName:"tr",align:null},"-"),(0,a.yg)("td",{parentName:"tr",align:null},"Streams ",(0,a.yg)("a",{parentName:"td",href:"messages#lsnodeevent"},"LsNodeEvents")," for all available ",(0,a.yg)("a",{parentName:"td",href:"messages#lsnode"},"LsNodes")," with all available properties.")))),(0,a.yg)("h3",{id:"subscribetolslinks"},(0,a.yg)("inlineCode",{parentName:"h3"},"SubscribeToLsLinks()")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-protobuf"},"rpc SubscribeToLsLinks(TopologySubscription) returns (stream LsLinkEvent) {}\n")),(0,a.yg)("p",null,(0,a.yg)("em",{parentName:"p"},"See also"),": ",(0,a.yg)("a",{parentName:"p",href:"messages#topologysubscription"},"TopologySubscription"),", ",(0,a.yg)("a",{parentName:"p",href:"messages#lslinkevent"},"LsLinkEvent")),(0,a.yg)("h4",{id:"description-1"},"Description"),(0,a.yg)("p",null,"See method ",(0,a.yg)("a",{parentName:"p",href:"#subscribetolsnodes"},"SubscribeToLsNodes()"),". It follows the same principle regarding ",(0,a.yg)("strong",{parentName:"p"},"keys")," and ",(0,a.yg)("strong",{parentName:"p"},"properties"),"."),(0,a.yg)("h3",{id:"subscribetolsprefixes"},(0,a.yg)("inlineCode",{parentName:"h3"},"SubscribeToLsPrefixes()")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-protobuf"},"rpc SubscribeToLsPrefixes(TopologySubscription) returns (stream LsPrefixEvent) {}\n")),(0,a.yg)("p",null,(0,a.yg)("em",{parentName:"p"},"See also"),": ",(0,a.yg)("a",{parentName:"p",href:"messages#topologysubscription"},"TopologySubscription"),", ",(0,a.yg)("a",{parentName:"p",href:"messages#lsprefixevent"},"LsPrefixEvent")),(0,a.yg)("h4",{id:"description-2"},"Description"),(0,a.yg)("p",null,"See method ",(0,a.yg)("a",{parentName:"p",href:"#subscribetolsnodes"},"SubscribeToLsNodes()"),". It follows the same principle regarding ",(0,a.yg)("strong",{parentName:"p"},"keys")," and ",(0,a.yg)("strong",{parentName:"p"},"properties"),"."),(0,a.yg)("h3",{id:"subscribetolssrv6sids"},(0,a.yg)("inlineCode",{parentName:"h3"},"SubscribeToLsSrv6Sids()")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-protobuf"},"rpc SubscribeToLsSrv6Sids(TopologySubscription) returns (stream LsSrv6SidEvent) {}\n")),(0,a.yg)("p",null,(0,a.yg)("em",{parentName:"p"},"See also"),": ",(0,a.yg)("a",{parentName:"p",href:"messages#topologysubscription"},"TopologySubscription"),", ",(0,a.yg)("a",{parentName:"p",href:"messages#lssrv6sidevent"},"LsSrv6SidEvent")),(0,a.yg)("h4",{id:"description-3"},"Description"),(0,a.yg)("p",null,"See method ",(0,a.yg)("a",{parentName:"p",href:"#subscribetolsnodes"},"SubscribeToLsNodes()"),". It follows the same principle regarding ",(0,a.yg)("strong",{parentName:"p"},"keys")," and ",(0,a.yg)("strong",{parentName:"p"},"properties"),"."),(0,a.yg)("h3",{id:"subscribetolsnodeedges"},(0,a.yg)("inlineCode",{parentName:"h3"},"SubscribeToLsNodeEdges()")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-protobuf"},"rpc SubscribeToLsNodeEdges(TopologySubscription) returns (stream LsNodeEdgeEvent) {}\n")),(0,a.yg)("p",null,(0,a.yg)("em",{parentName:"p"},"See also"),": ",(0,a.yg)("a",{parentName:"p",href:"messages#topologysubscription"},"TopologySubscription"),", ",(0,a.yg)("a",{parentName:"p",href:"messages#lsnodeedgeevent"},"LsNodeEdgeEvent")),(0,a.yg)("h4",{id:"description-4"},"Description"),(0,a.yg)("p",null,"See method ",(0,a.yg)("a",{parentName:"p",href:"#subscribetolsnodes"},"SubscribeToLsNodes()"),". It follows the same principle regarding ",(0,a.yg)("strong",{parentName:"p"},"keys")," and ",(0,a.yg)("strong",{parentName:"p"},"properties"),"."),(0,a.yg)("h3",{id:"subscribetotelemetrydata"},(0,a.yg)("inlineCode",{parentName:"h3"},"SubscribeToTelemetryData()")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-protobuf"},"rpc SubscribeToTelemetryData(TelemetrySubscription) returns (stream TelemetryEvent) {}\n")),(0,a.yg)("p",null,(0,a.yg)("em",{parentName:"p"},"See also"),": ",(0,a.yg)("a",{parentName:"p",href:"messages#telemetrysubscription"},"TelemetrySubscription"),", ",(0,a.yg)("a",{parentName:"p",href:"messages#telemetryresponse"},"TelemetryResponse")),(0,a.yg)("h4",{id:"description-5"},"Description"),(0,a.yg)("p",null,"Takes a ",(0,a.yg)("a",{parentName:"p",href:"messages#telemetrysubscription"},"TelemetrySubscription")," with the specified ",(0,a.yg)("strong",{parentName:"p"},"ipv4addresses")," and ",(0,a.yg)("strong",{parentName:"p"},"properties")," and returns a stream of ",(0,a.yg)("a",{parentName:"p",href:"messages#telemetryevent"},"TelemetryEvents"),". A TelemetryEvent contains an update to a single event tied to an ipv4address."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Omitting ",(0,a.yg)("strong",{parentName:"li"},"ipv4addresses")," streams ",(0,a.yg)("a",{parentName:"li",href:"messages#telemetryevent"},"TelemetryEvents")," for all available ipv4addresses."),(0,a.yg)("li",{parentName:"ul"},"Omitting ",(0,a.yg)("strong",{parentName:"li"},"properties")," streams ",(0,a.yg)("a",{parentName:"li",href:"messages#telemetryevent"},"TelemetryEvents")," with all available properties.")),(0,a.yg)("h4",{id:"examples-1"},"Examples"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"ipv4addresses"),(0,a.yg)("th",{parentName:"tr",align:null},"properties"),(0,a.yg)("th",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"th",href:"messages#telemetryevent"},"TelemetryEvent")))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"[",(0,a.yg)("br",null),'"1.2.3.4",',(0,a.yg)("br",null),'"2.3.4.5"',(0,a.yg)("br",null),"]"),(0,a.yg)("td",{parentName:"tr",align:null},"[",(0,a.yg)("br",null),'"DataRate",',(0,a.yg)("br",null),'"PacketsSent",',(0,a.yg)("br",null),'"PacketsReceived"',(0,a.yg)("br",null),"]"),(0,a.yg)("td",{parentName:"tr",align:null},"Streams ",(0,a.yg)("a",{parentName:"td",href:"messages#telemetryevent"},"TelemetryEvents")," for the two specified ipv4addresses with the three requested properties.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"-"),(0,a.yg)("td",{parentName:"tr",align:null},"[",(0,a.yg)("br",null),'"DataRate",',(0,a.yg)("br",null),'"PacketsSent",',(0,a.yg)("br",null),'"PacketsReceived"',(0,a.yg)("br",null),"]"),(0,a.yg)("td",{parentName:"tr",align:null},"Streams ",(0,a.yg)("a",{parentName:"td",href:"messages#telemetryevent"},"TelemetryEvents")," for all available ipv4addresses with the three specified properties.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"[",(0,a.yg)("br",null),'"1.2.3.4",',(0,a.yg)("br",null),'"2.3.4.5"',(0,a.yg)("br",null),"]"),(0,a.yg)("td",{parentName:"tr",align:null},"-"),(0,a.yg)("td",{parentName:"tr",align:null},"Streams ",(0,a.yg)("a",{parentName:"td",href:"messages#telemetryevent"},"TelemetryEvents")," for the two specified ipv4addresses with all available properties.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"-"),(0,a.yg)("td",{parentName:"tr",align:null},"-"),(0,a.yg)("td",{parentName:"tr",align:null},"Streams ",(0,a.yg)("a",{parentName:"td",href:"messages#telemetryevent"},"TelemetryEvents")," for all available ipv4addresses with all available properties.")))))}d.isMDXComponent=!0},53:(e,t,r)=>{function n(e){var t,r,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}r.d(t,{A:()=>a});const a=function(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(a&&(a+=" "),a+=t);return a}}}]);