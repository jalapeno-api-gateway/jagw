"use strict";(self.webpackChunkjalapeno_api_gateway_documentation=self.webpackChunkjalapeno_api_gateway_documentation||[]).push([[3421],{5680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>y});var o=n(6540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=l(n),u=r,y=m["".concat(s,".").concat(u)]||m[u]||g[u]||a;return n?o.createElement(y,i(i({ref:t},c),{},{components:n})):o.createElement(y,i({ref:t},c))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[m]="string"==typeof e?e:r,i[1]=p;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3624:(e,t,n)=>{n.d(t,{A:()=>p});var o=n(6540),r=n(53);const a="tableOfContentsInline_0DDH";function i(e){let{toc:t,isChild:n}=e;return t.length?o.createElement("ul",{className:n?"":"table-of-contents"},t.map((e=>o.createElement("li",{key:e.id},o.createElement("a",{href:`#${e.id}`,dangerouslySetInnerHTML:{__html:e.value}}),o.createElement(i,{isChild:!0,toc:e.children}))))):null}const p=function(e){let{toc:t}=e;return o.createElement("div",{className:(0,r.A)(a)},o.createElement(i,{toc:t}))}},7554:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>p,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=n(8168),r=(n(6540),n(5680)),a=n(3624);const i={sidebar_position:2,title:"Design Choices"},p=void 0,s={unversionedId:"design/design-choices",id:"design/design-choices",isDocsHomePage:!1,title:"Design Choices",description:"Why use proto2 instead of proto3?",source:"@site/docs/design/design-choices.md",sourceDirName:"design",slug:"/design/design-choices",permalink:"/jagw/docs/next/design/design-choices",editUrl:"https://github.com/jalapeno-api-gateway/docs/design/design-choices.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Design Choices"},sidebar:"tutorialSidebar",previous:{title:"Concept",permalink:"/jagw/docs/next/design/concept"},next:{title:"Installation",permalink:"/jagw/docs/next/installation"}},l=[{value:"Why use proto2 instead of proto3?",id:"why-use-proto2-instead-of-proto3",children:[{value:"Problem",id:"problem",children:[]},{value:"Solution",id:"solution",children:[]},{value:"But isn&#39;t proto2 going to be deprecated soon?",id:"but-isnt-proto2-going-to-be-deprecated-soon",children:[]}]}],c={toc:l},m="wrapper";function g(e){let{components:t,...n}=e;return(0,r.yg)(m,(0,o.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)(a.A,{toc:l,mdxType:"TOCInline"}),(0,r.yg)("h2",{id:"why-use-proto2-instead-of-proto3"},"Why use ",(0,r.yg)("a",{parentName:"h2",href:"https://developers.google.com/protocol-buffers/docs/proto"},"proto2")," instead of ",(0,r.yg)("a",{parentName:"h2",href:"https://developers.google.com/protocol-buffers/docs/proto3"},"proto3"),"?"),(0,r.yg)("p",null,"The reason for choosing ",(0,r.yg)("em",{parentName:"p"},"proto2")," over ",(0,r.yg)("em",{parentName:"p"},"proto3")," is that ",(0,r.yg)("em",{parentName:"p"},"proto3")," dropped the support for ",(0,r.yg)("a",{parentName:"p",href:"https://cloud.google.com/apis/design/proto3"},(0,r.yg)("strong",{parentName:"a"},(0,r.yg)("em",{parentName:"strong"},"field presence"))),"."),(0,r.yg)("h3",{id:"problem"},"Problem"),(0,r.yg)("p",null,"In ",(0,r.yg)("em",{parentName:"p"},"proto3")," technically speaking all fields are automatically ",(0,r.yg)("em",{parentName:"p"},"optional"),", in the sense that the sender does not ",(0,r.yg)("em",{parentName:"p"},"have")," to set them. The problem is, that the receiver has no way of distinguishing between a field that has ",(0,r.yg)("em",{parentName:"p"},"not")," been set by the sender and a field that the sender has set ",(0,r.yg)("em",{parentName:"p"},"explicitly")," to its default value."),(0,r.yg)("p",null,"For example, consider the ",(0,r.yg)("em",{parentName:"p"},"DataRate")," property in ",(0,r.yg)("em",{parentName:"p"},"proto3"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-protobuf"},'syntax = "proto3";\n\nmessage TelemetryData {\n    ...\n    int64 dataRate = 2;\n    ...\n}\n')),(0,r.yg)("p",null,"In a ",(0,r.yg)("em",{parentName:"p"},"TelemetryData")," message with the value for ",(0,r.yg)("em",{parentName:"p"},"DataRate")," set to ",(0,r.yg)("em",{parentName:"p"},"0"),", there are two possible scenarios:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"No information on the ",(0,r.yg)("em",{parentName:"li"},"DataRate")," is available."),(0,r.yg)("li",{parentName:"ul"},"The ",(0,r.yg)("em",{parentName:"li"},"DataRate")," is ",(0,r.yg)("em",{parentName:"li"},"0"),".")),(0,r.yg)("p",null,"In certain situations it may be important for a receiver to know the difference."),(0,r.yg)("h3",{id:"solution"},"Solution"),(0,r.yg)("p",null,"The solution is to use ",(0,r.yg)("em",{parentName:"p"},"proto2"),". ",(0,r.yg)("em",{parentName:"p"},"Proto2")," allows to make fields ",(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("em",{parentName:"strong"},"nullable")),", using the keyword ",(0,r.yg)("em",{parentName:"p"},"optional"),". It achieves this by using pointers for all fields, even for primitive values."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-protobuf"},'syntax = "proto2";\n\nmessage TelemetryData {\n    ...\n    optional int64 dataRate = 2;\n    ...\n}\n')),(0,r.yg)("p",null,"This way, when the ",(0,r.yg)("em",{parentName:"p"},"DataRate")," is set explicitly to ",(0,r.yg)("em",{parentName:"p"},"0"),", the field points to the value ",(0,r.yg)("em",{parentName:"p"},"0"),". But if the ",(0,r.yg)("em",{parentName:"p"},"DataRate")," is not set, the point is ",(0,r.yg)("em",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"em"},"<nil>")),"."),(0,r.yg)("p",null,"For more detail see this thread on ",(0,r.yg)("a",{parentName:"p",href:"https://stackoverflow.com/a/42634681"},"Stackoverflow"),"."),(0,r.yg)("h3",{id:"but-isnt-proto2-going-to-be-deprecated-soon"},"But isn't proto2 going to be deprecated soon?"),(0,r.yg)("p",null,"Google has no intentions of deprecating ",(0,r.yg)("em",{parentName:"p"},"proto2")," but is maintaining both versions simultaneously (see ",(0,r.yg)("a",{parentName:"p",href:"https://groups.google.com/g/protobuf/c/h-nwPLb42ac"},"here"),")."),(0,r.yg)("p",null,"It is therefore safe to use ",(0,r.yg)("em",{parentName:"p"},"proto2")," instead of ",(0,r.yg)("em",{parentName:"p"},"proto3"),"."))}g.isMDXComponent=!0},53:(e,t,n)=>{function o(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=o(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}n.d(t,{A:()=>r});const r=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=o(e))&&(r&&(r+=" "),r+=t);return r}}}]);