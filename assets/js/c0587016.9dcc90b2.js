"use strict";(self.webpackChunkjalapeno_api_gateway_documentation=self.webpackChunkjalapeno_api_gateway_documentation||[]).push([[3377],{5680:(e,n,i)=>{i.d(n,{xA:()=>m,yg:()=>u});var a=i(6540);function r(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function t(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,a)}return i}function l(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?t(Object(i),!0).forEach((function(n){r(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):t(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function o(e,n){if(null==e)return{};var i,a,r=function(e,n){if(null==e)return{};var i,a,r={},t=Object.keys(e);for(a=0;a<t.length;a++)i=t[a],n.indexOf(i)>=0||(r[i]=e[i]);return r}(e,n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(a=0;a<t.length;a++)i=t[a],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var p=a.createContext({}),y=function(e){var n=a.useContext(p),i=n;return e&&(i="function"==typeof e?e(n):l(l({},n),e)),i},m=function(e){var n=y(e.components);return a.createElement(p.Provider,{value:n},e.children)},g="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var i=e.components,r=e.mdxType,t=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),g=y(i),d=r,u=g["".concat(p,".").concat(d)]||g[d]||s[d]||t;return i?a.createElement(u,l(l({ref:n},m),{},{components:i})):a.createElement(u,l({ref:n},m))}));function u(e,n){var i=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var t=i.length,l=new Array(t);l[0]=d;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[g]="string"==typeof e?e:r,l[1]=o;for(var y=2;y<t;y++)l[y]=i[y];return a.createElement.apply(null,l)}return a.createElement.apply(null,i)}d.displayName="MDXCreateElement"},3624:(e,n,i)=>{i.d(n,{A:()=>o});var a=i(6540),r=i(53);const t="tableOfContentsInline_0DDH";function l(e){let{toc:n,isChild:i}=e;return n.length?a.createElement("ul",{className:i?"":"table-of-contents"},n.map((e=>a.createElement("li",{key:e.id},a.createElement("a",{href:`#${e.id}`,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(l,{isChild:!0,toc:e.children}))))):null}const o=function(e){let{toc:n}=e;return a.createElement("div",{className:(0,r.A)(t)},a.createElement(l,{toc:n}))}},9941:(e,n,i)=>{i.r(n),i.d(n,{contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>p,toc:()=>y});var a=i(8168),r=(i(6540),i(5680)),t=i(3624);const l={sidebar_position:4,title:"Properties"},o=void 0,p={unversionedId:"api/property-names",id:"version-1.1.0/api/property-names",isDocsHomePage:!1,title:"Properties",description:"About Properties",source:"@site/versioned_docs/version-1.1.0/api/property-names.md",sourceDirName:"api",slug:"/api/property-names",permalink:"/jagw/docs/1.1.0/api/property-names",editUrl:"https://github.com/jalapeno-api-gateway/versioned_docs/version-1.1.0/api/property-names.md",tags:[],version:"1.1.0",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Properties"},sidebar:"version-1.1.0/tutorialSidebar",previous:{title:"Messages",permalink:"/jagw/docs/1.1.0/api/messages"}},y=[{value:"About Properties",id:"about-properties",children:[]},{value:"All Properties",id:"all-properties",children:[{value:"<code>LsNode</code> Properties",id:"lsnode-properties",children:[]},{value:"<code>LsLink</code> Properties",id:"lslink-properties",children:[]},{value:"<code>LsPrefix</code> Properties",id:"lsprefix-properties",children:[]},{value:"<code>LsSrv6Sid</code> Properties",id:"lssrv6sid-properties",children:[]},{value:"<code>LsNodeEdge</code> Properties",id:"lsnodeedge-properties",children:[]},{value:"Properties for Physical Interfaces",id:"properties-for-physical-interfaces",children:[]},{value:"Properties for Loopback Interfaces",id:"properties-for-loopback-interfaces",children:[]}]}],m={toc:y},g="wrapper";function s(e){let{components:n,...i}=e;return(0,r.yg)(g,(0,a.A)({},m,i,{components:n,mdxType:"MDXLayout"}),(0,r.yg)(t.A,{toc:y[y.length-1].children,mdxType:"TOCInline"}),(0,r.yg)("h2",{id:"about-properties"},"About Properties"),(0,r.yg)("p",null,"When making a request or a subscription you can specify ",(0,r.yg)("strong",{parentName:"p"},"properties")," (i.e. in ",(0,r.yg)("a",{parentName:"p",href:"request-service#topologyrequest"},"TopologyRequest")," or ",(0,r.yg)("a",{parentName:"p",href:"subscription-service#telemetrysubscription"},"TelemetrySubscription"),"). This allows you to define the properties you want to be returned for the requested objects. This is optional, since omitting ",(0,r.yg)("strong",{parentName:"p"},"properties")," results in all available properties being returned."),(0,r.yg)("p",null,"Different objects provide different ",(0,r.yg)("strong",{parentName:"p"},"properties")," (i.e. ",(0,r.yg)("a",{parentName:"p",href:"messages#lsnode"},"LSNode"),", ",(0,r.yg)("a",{parentName:"p",href:"messages#lslink"},"LSLink"),", ",(0,r.yg)("a",{parentName:"p",href:"messages#telemetrydata"},"TelemetryData"),")."),(0,r.yg)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.yg)("div",{parentName:"div",className:"admonition-heading"},(0,r.yg)("h5",{parentName:"div"},(0,r.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,r.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"invalid properties")),(0,r.yg)("div",{parentName:"div",className:"admonition-content"},(0,r.yg)("p",{parentName:"div"},"The Jalape\xf1o API Gateway ignores invalid properties. Make sure therefore, that the strings you provide match the properties below exactly."))),(0,r.yg)("h2",{id:"all-properties"},"All Properties"),(0,r.yg)("h3",{id:"lsnode-properties"},(0,r.yg)("inlineCode",{parentName:"h3"},"LsNode")," Properties"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},'"Key"')),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},'"Id"')),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},'"RouterHash"')),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},'"DomainId"')),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},'"RouterIp"')),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},'"PeerHash"')),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},'"PeerIp"')),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},'"PeerAsn"')),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},'"Timestamp"')),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},'"IgpRouterId"')),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},'"Asn"')),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},'"Mtid"')),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},'"AreaId"')),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},'"Protocol"')),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},'"ProtocolId"')),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},'"Name"')),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},'"IsPrepolicy"')),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},'"IsAdjRibIn"'))),(0,r.yg)("h3",{id:"lslink-properties"},(0,r.yg)("inlineCode",{parentName:"h3"},"LsLink")," Properties"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},'"Key"')),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},'"Id"')),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},'"RouterHash"')),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},'"RouterIp"')),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},'"DomainId"')),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},'"PeerHash"')),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},'"PeerIp"')),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},'"PeerAsn"')),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},'"Timestamp"')),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},'"IgpRouterId"')),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},'"Protocol"')),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},'"AreaId"')),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},'"Nexthop"')),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},'"Mtid"')),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},'"LocalLinkIp"')),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},'"RemoteLinkIp"')),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},'"IgpMetric"')),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},'"RemoteNodeHash"')),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},'"LocalNodeHash"')),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},'"RemoteIgpRouterId"'))),(0,r.yg)("h3",{id:"lsprefix-properties"},(0,r.yg)("inlineCode",{parentName:"h3"},"LsPrefix")," Properties"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},'"Key"')),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},'"Id"')),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},'"RouterHash"')),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},'"RouterIp"')),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},'"DomainId"')),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},'"PeerHash"')),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},'"PeerIp"')),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},'"PeerAsn"')),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},'"Timestamp"')),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},'"IgpRouterId"')),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},'"Protocol"')),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},'"AreaId"')),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},'"Nexthop"')),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},'"LocalNodeHash"')),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},'"Mtid"')),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},'"Prefix"')),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},'"PrefixLen"')),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},'"PrefixMetric"')),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},'"IsPrepolicy"')),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},'"IsAdjRibIn"'))),(0,r.yg)("h3",{id:"lssrv6sid-properties"},(0,r.yg)("inlineCode",{parentName:"h3"},"LsSrv6Sid")," Properties"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},'"Key"')),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},'"Id"')),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},'"RouterHash"')),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},'"RouterIp"')),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},'"DomainId"')),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},'"PeerHash"')),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},'"PeerIp"')),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},'"PeerAsn"')),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},'"Timestamp"')),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},'"IgpRouterId"')),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},'"LocalNodeAsn"')),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},'"Protocol"')),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},'"Nexthop"')),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},'"LocalNodeHash"')),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},'"Mtid"')),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},'"IgpFlags"')),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},'"IsPrepolicy"')),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},'"IsAdjRibIn"')),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},'"Srv6Sid"'))),(0,r.yg)("h3",{id:"lsnodeedge-properties"},(0,r.yg)("inlineCode",{parentName:"h3"},"LsNodeEdge")," Properties"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},'"Key"')),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},'"Id"')),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},'"From"')),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},'"To"')),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},'"Link"'))),(0,r.yg)("h3",{id:"properties-for-physical-interfaces"},"Properties for Physical Interfaces"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},'"DataRate"')),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},'"PacketsSent"')),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},'"PacketsReceived"'))),(0,r.yg)("h3",{id:"properties-for-loopback-interfaces"},"Properties for Loopback Interfaces"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},'"State"')),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},'"LastStateTransitionTime"'))))}s.isMDXComponent=!0},53:(e,n,i)=>{function a(e){var n,i,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(i=a(e[n]))&&(r&&(r+=" "),r+=i);else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}i.d(n,{A:()=>r});const r=function(){for(var e,n,i=0,r="";i<arguments.length;)(e=arguments[i++])&&(n=a(e))&&(r&&(r+=" "),r+=n);return r}}}]);