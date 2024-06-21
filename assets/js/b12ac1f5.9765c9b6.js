"use strict";(self.webpackChunkjalapeno_api_gateway_documentation=self.webpackChunkjalapeno_api_gateway_documentation||[]).push([[2028],{5680:(e,t,r)=>{r.d(t,{xA:()=>i,yg:()=>u});var a=r(6540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),g=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},i=function(e){var t=g(e.components);return a.createElement(p.Provider,{value:t},e.children)},y="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,p=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),y=g(r),m=n,u=y["".concat(p,".").concat(m)]||y[m]||d[m]||s;return r?a.createElement(u,l(l({ref:t},i),{},{components:r})):a.createElement(u,l({ref:t},i))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,l=new Array(s);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[y]="string"==typeof e?e:n,l[1]=o;for(var g=2;g<s;g++)l[g]=r[g];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3624:(e,t,r)=>{r.d(t,{A:()=>o});var a=r(6540),n=r(53);const s="tableOfContentsInline_0DDH";function l(e){let{toc:t,isChild:r}=e;return t.length?a.createElement("ul",{className:r?"":"table-of-contents"},t.map((e=>a.createElement("li",{key:e.id},a.createElement("a",{href:`#${e.id}`,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(l,{isChild:!0,toc:e.children}))))):null}const o=function(e){let{toc:t}=e;return a.createElement("div",{className:(0,n.A)(s)},a.createElement(l,{toc:t}))}},6037:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>g});var a=r(8168),n=(r(6540),r(5680)),s=r(3624);const l={sidebar_position:1,title:"Request Service"},o=void 0,p={unversionedId:"api/request-service",id:"version-1.0.0/api/request-service",isDocsHomePage:!1,title:"Request Service",description:"Protobuf Definition",source:"@site/versioned_docs/version-1.0.0/api/request-service.md",sourceDirName:"api",slug:"/api/request-service",permalink:"/jagw/docs/1.0.0/api/request-service",editUrl:"https://github.com/jalapeno-api-gateway/versioned_docs/version-1.0.0/api/request-service.md",tags:[],version:"1.0.0",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Request Service"},sidebar:"version-1.0.0/tutorialSidebar",previous:{title:"Getting Started",permalink:"/jagw/docs/1.0.0/getting-started"},next:{title:"Subscription Service",permalink:"/jagw/docs/1.0.0/api/subscription-service"}},g=[{value:"Protobuf Definition",id:"protobuf-definition",children:[]},{value:"Methods",id:"methods",children:[{value:"<code>GetLsNodes()</code>",id:"getlsnodes",children:[]},{value:"<code>GetLsLinks()</code>",id:"getlslinks",children:[]},{value:"<code>GetLsPrefixes()</code>",id:"getlsprefixes",children:[]},{value:"<code>GetLsSrv6Sids()</code>",id:"getlssrv6sids",children:[]},{value:"<code>GetLsNodeEdges()</code>",id:"getlsnodeedges",children:[]},{value:"<code>GetTelemetryData()</code>",id:"gettelemetrydata",children:[]}]}],i={toc:g},y="wrapper";function d(e){let{components:t,...r}=e;return(0,n.yg)(y,(0,a.A)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)(s.A,{toc:g[g.length-1].children,mdxType:"TOCInline"}),(0,n.yg)("h2",{id:"protobuf-definition"},"Protobuf Definition"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-protobuf"},"service RequestService {\n    rpc GetLsNodes(TopologyRequest) returns (LsNodeResponse) {}\n    rpc GetLsLinks(TopologyRequest) returns (LsLinkResponse) {}\n    rpc GetLsPrefixes(TopologyRequest) returns (LsPrefixResponse) {}\n    rpc GetLsSrv6Sids(TopologyRequest) returns (LsSrv6SidResponse) {}\n    rpc GetLsNodeEdges(TopologyRequest) returns (LsNodeEdgeResponse) {}\n    rpc GetTelemetryData(TelemetryRequest) returns (TelemetryResponse) {}\n}\n")),(0,n.yg)("h2",{id:"methods"},"Methods"),(0,n.yg)("h3",{id:"getlsnodes"},(0,n.yg)("inlineCode",{parentName:"h3"},"GetLsNodes()")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-protobuf"},"rpc GetLsNodes(TopologyRequest) returns (LsNodeResponse) {}\n")),(0,n.yg)("p",null,(0,n.yg)("em",{parentName:"p"},"See also"),": ",(0,n.yg)("a",{parentName:"p",href:"messages#topologyrequest"},"TopologyRequest"),", ",(0,n.yg)("a",{parentName:"p",href:"messages#lsnoderesponse"},"LsNodeResponse")),(0,n.yg)("h4",{id:"description"},"Description"),(0,n.yg)("p",null,"Takes a ",(0,n.yg)("a",{parentName:"p",href:"messages#topologyrequest"},"TopologyRequest")," with the specified ",(0,n.yg)("strong",{parentName:"p"},"keys")," and ",(0,n.yg)("strong",{parentName:"p"},"properties")," and returns an ",(0,n.yg)("a",{parentName:"p",href:"messages#lsnoderesponse"},"LsNodeResponse")," containing all requested ",(0,n.yg)("a",{parentName:"p",href:"messages#lsnode"},"LsNodes")," with the requested properties."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Omitting ",(0,n.yg)("strong",{parentName:"li"},"keys")," returns all available ",(0,n.yg)("a",{parentName:"li",href:"messages#lsnode"},"LsNodes"),"."),(0,n.yg)("li",{parentName:"ul"},"Omitting ",(0,n.yg)("strong",{parentName:"li"},"properties")," returns ",(0,n.yg)("a",{parentName:"li",href:"messages#lsnode"},"LsNodes")," with all available properties.")),(0,n.yg)("h4",{id:"examples"},"Examples"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"keys"),(0,n.yg)("th",{parentName:"tr",align:null},"properties"),(0,n.yg)("th",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"th",href:"messages#lsnoderesponse"},"LsNodeResponse")))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"[",(0,n.yg)("br",null),'"nodeKey1",',(0,n.yg)("br",null),'"nodeKey2"',(0,n.yg)("br",null),"]"),(0,n.yg)("td",{parentName:"tr",align:null},"[",(0,n.yg)("br",null),'"Name",',(0,n.yg)("br",null),'"Asn",',(0,n.yg)("br",null),'"RouterIp"',(0,n.yg)("br",null),"]"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"messages#lsnoderesponse"},"LsNodeResponse")," contains ",(0,n.yg)("a",{parentName:"td",href:"messages#lsnode"},"LsNodes")," for the two specified keys with the three requested properties.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"-"),(0,n.yg)("td",{parentName:"tr",align:null},"[",(0,n.yg)("br",null),'"Name",',(0,n.yg)("br",null),'"Asn",',(0,n.yg)("br",null),'"RouterIp"',(0,n.yg)("br",null),"]"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"messages#lsnoderesponse"},"LsNodeResponse")," contains all available ",(0,n.yg)("a",{parentName:"td",href:"messages#lsnode"},"LsNodes")," with the three requested properties.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"[",(0,n.yg)("br",null),'"nodeKey1",',(0,n.yg)("br",null),'"nodeKey2"',(0,n.yg)("br",null),"]"),(0,n.yg)("td",{parentName:"tr",align:null},"-"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"messages#lsnoderesponse"},"LsNodeResponse")," contains ",(0,n.yg)("a",{parentName:"td",href:"messages#lsnode"},"LsNodes")," for the two specified keys with all available properties.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"-"),(0,n.yg)("td",{parentName:"tr",align:null},"-"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"messages#lsnoderesponse"},"LsNodeResponse")," contains all available ",(0,n.yg)("a",{parentName:"td",href:"messages#lsnode"},"LsNodes")," with all available properties.")))),(0,n.yg)("h3",{id:"getlslinks"},(0,n.yg)("inlineCode",{parentName:"h3"},"GetLsLinks()")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-protobuf"},"rpc GetLsLinks(TopologyRequest) returns (LsLinkResponse) {}\n")),(0,n.yg)("p",null,(0,n.yg)("em",{parentName:"p"},"See also"),": ",(0,n.yg)("a",{parentName:"p",href:"messages#topologyrequest"},"TopologyRequest"),", ",(0,n.yg)("a",{parentName:"p",href:"messages#lslinkresponse"},"LsLinkResponse")),(0,n.yg)("h4",{id:"description-1"},"Description"),(0,n.yg)("p",null,"See method ",(0,n.yg)("a",{parentName:"p",href:"#getlsnodes"},"GetLsNodes()"),". It follows the same principle regarding ",(0,n.yg)("strong",{parentName:"p"},"keys")," and ",(0,n.yg)("strong",{parentName:"p"},"properties"),"."),(0,n.yg)("h3",{id:"getlsprefixes"},(0,n.yg)("inlineCode",{parentName:"h3"},"GetLsPrefixes()")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-protobuf"},"rpc GetLsPrefixes(TopologyRequest) returns (LsPrefixResponse) {}\n")),(0,n.yg)("p",null,(0,n.yg)("em",{parentName:"p"},"See also"),": ",(0,n.yg)("a",{parentName:"p",href:"messages#topologyrequest"},"TopologyRequest"),", ",(0,n.yg)("a",{parentName:"p",href:"messages#lsprefixresponse"},"LsPrefixResponse")),(0,n.yg)("h4",{id:"description-2"},"Description"),(0,n.yg)("p",null,"See method ",(0,n.yg)("a",{parentName:"p",href:"#getlsnodes"},"GetLsNodes()"),". It follows the same principle regarding ",(0,n.yg)("strong",{parentName:"p"},"keys")," and ",(0,n.yg)("strong",{parentName:"p"},"properties"),"."),(0,n.yg)("h3",{id:"getlssrv6sids"},(0,n.yg)("inlineCode",{parentName:"h3"},"GetLsSrv6Sids()")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-protobuf"},"rpc GetLsSrv6Sids(TopologyRequest) returns (LsSrv6SidResponse) {}\n")),(0,n.yg)("p",null,(0,n.yg)("em",{parentName:"p"},"See also"),": ",(0,n.yg)("a",{parentName:"p",href:"messages#topologyrequest"},"TopologyRequest"),", ",(0,n.yg)("a",{parentName:"p",href:"messages#lssrv6sidresponse"},"LsSrv6SidResponse")),(0,n.yg)("h4",{id:"description-3"},"Description"),(0,n.yg)("p",null,"See method ",(0,n.yg)("a",{parentName:"p",href:"#getlsnodes"},"GetLsNodes()"),". It follows the same principle regarding ",(0,n.yg)("strong",{parentName:"p"},"keys")," and ",(0,n.yg)("strong",{parentName:"p"},"properties"),"."),(0,n.yg)("h3",{id:"getlsnodeedges"},(0,n.yg)("inlineCode",{parentName:"h3"},"GetLsNodeEdges()")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-protobuf"},"rpc GetLsNodeEdges(TopologyRequest) returns (LsNodeEdgeResponse) {}\n")),(0,n.yg)("p",null,(0,n.yg)("em",{parentName:"p"},"See also"),": ",(0,n.yg)("a",{parentName:"p",href:"messages#topologyrequest"},"TopologyRequest"),", ",(0,n.yg)("a",{parentName:"p",href:"messages#lsnodeedgeresponse"},"LsNodeEdgeResponse")),(0,n.yg)("h4",{id:"description-4"},"Description"),(0,n.yg)("p",null,"See method ",(0,n.yg)("a",{parentName:"p",href:"#getlsnodes"},"GetLsNodes()"),". It follows the same principle regarding ",(0,n.yg)("strong",{parentName:"p"},"keys")," and ",(0,n.yg)("strong",{parentName:"p"},"properties"),"."),(0,n.yg)("h3",{id:"gettelemetrydata"},(0,n.yg)("inlineCode",{parentName:"h3"},"GetTelemetryData()")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-protobuf"},"rpc GetTelemetryData(TelemetryRequest) returns (TelemetryResponse) {}\n")),(0,n.yg)("p",null,(0,n.yg)("em",{parentName:"p"},"See also"),": ",(0,n.yg)("a",{parentName:"p",href:"messages#telemetryrequest"},"TelemetryRequest"),", ",(0,n.yg)("a",{parentName:"p",href:"messages#telemetryresponse"},"TelemetryResponse")),(0,n.yg)("h4",{id:"description-5"},"Description"),(0,n.yg)("p",null,"Takes a ",(0,n.yg)("a",{parentName:"p",href:"messages#telemetryrequest"},"TelemetryRequest")," with the specified ",(0,n.yg)("strong",{parentName:"p"},"ipv4addresses")," and ",(0,n.yg)("strong",{parentName:"p"},"properties")," and returns an ",(0,n.yg)("a",{parentName:"p",href:"messages#telemetryresponse"},"TelemetryResponse")," containing ",(0,n.yg)("a",{parentName:"p",href:"messages#telemetrydata"},"TelemetryData")," objects (one for each ",(0,n.yg)("strong",{parentName:"p"},"ipv4address"),") and all requested properties."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Omitting ",(0,n.yg)("strong",{parentName:"li"},"ipv4addresses")," returns an empty ",(0,n.yg)("a",{parentName:"li",href:"messages#telemetryresponse"},"TelemetryResponse"),"."),(0,n.yg)("li",{parentName:"ul"},"Omitting ",(0,n.yg)("strong",{parentName:"li"},"properties")," returns ",(0,n.yg)("a",{parentName:"li",href:"messages#telemetrydata"},"TelemetryData")," with all available properties.")),(0,n.yg)("h4",{id:"examples-1"},"Examples"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"ipv4addresses"),(0,n.yg)("th",{parentName:"tr",align:null},"properties"),(0,n.yg)("th",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"th",href:"messages#telemetryresponse"},"TelemetryResponse")))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"[",(0,n.yg)("br",null),'"1.2.3.4",',(0,n.yg)("br",null),'"2.3.4.5"',(0,n.yg)("br",null),"]"),(0,n.yg)("td",{parentName:"tr",align:null},"[",(0,n.yg)("br",null),'"DataRate",',(0,n.yg)("br",null),'"PacketsSent",',(0,n.yg)("br",null),'"PacketsReceived"',(0,n.yg)("br",null),"]"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"messages#telemetryresponse"},"TelemetryResponse")," contains ",(0,n.yg)("a",{parentName:"td",href:"messages#telemetrydata"},"TelemetryData")," for the two specified ipv4addresses with the three requested properties.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"-"),(0,n.yg)("td",{parentName:"tr",align:null},"[",(0,n.yg)("br",null),'"DataRate",',(0,n.yg)("br",null),'"PacketsSent",',(0,n.yg)("br",null),'"PacketsReceived"',(0,n.yg)("br",null),"]"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"messages#telemetryresponse"},"TelemetryResponse")," contains no ",(0,n.yg)("a",{parentName:"td",href:"messages#telemetrydata"},"TelemetryData"),"!")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"[",(0,n.yg)("br",null),'"1.2.3.4",',(0,n.yg)("br",null),'"2.3.4.5"',(0,n.yg)("br",null),"]"),(0,n.yg)("td",{parentName:"tr",align:null},"-"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"messages#telemetryresponse"},"TelemetryResponse")," contains ",(0,n.yg)("a",{parentName:"td",href:"messages#telemetrydata"},"TelemetryData")," for the two specified ipv4addresses with all available properties.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"-"),(0,n.yg)("td",{parentName:"tr",align:null},"-"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"messages#telemetryresponse"},"TelemetryResponse")," contains no ",(0,n.yg)("a",{parentName:"td",href:"messages#telemetrydata"},"TelemetryData"),"!")))))}d.isMDXComponent=!0},53:(e,t,r)=>{function a(e){var t,r,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=a(e[t]))&&(n&&(n+=" "),n+=r);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}r.d(t,{A:()=>n});const n=function(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=a(e))&&(n&&(n+=" "),n+=t);return n}}}]);