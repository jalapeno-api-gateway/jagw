"use strict";(self.webpackChunkjalapeno_api_gateway_documentation=self.webpackChunkjalapeno_api_gateway_documentation||[]).push([[8269],{5680:(e,t,o)=>{o.d(t,{xA:()=>g,yg:()=>y});var a=o(6540);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},g=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,p=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),u=s(o),d=n,y=u["".concat(p,".").concat(d)]||u[d]||c[d]||r;return o?a.createElement(y,i(i({ref:t},g),{},{components:o})):a.createElement(y,i({ref:t},g))}));function y(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,i=new Array(r);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<r;s++)i[s]=o[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}d.displayName="MDXCreateElement"},6654:(e,t,o)=>{function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!a(e)}o.d(t,{A:()=>n,z:()=>a})},6025:(e,t,o)=>{o.d(t,{A:()=>i,h:()=>r});var a=o(4586),n=o(6654);function r(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,a.A)();return{withBaseUrl:(o,a)=>function(e,t,o,a){let{forcePrependBaseUrl:r=!1,absolute:i=!1}=void 0===a?{}:a;if(!o)return o;if(o.startsWith("#"))return o;if((0,n.z)(o))return o;if(r)return t+o;const l=o.startsWith(t)?o:t+o.replace(/^\//,"");return i?e+l:l}(t,e,o,a)}}function i(e,t){void 0===t&&(t={});const{withBaseUrl:o}=r();return o(e,t)}},5505:(e,t,o)=>{o.r(t),o.d(t,{contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=o(8168),n=(o(6540),o(5680));o(6025);const r={sidebar_position:4,title:"Getting Started"},i=void 0,l={unversionedId:"getting-started",id:"version-1.4.0/getting-started",isDocsHomePage:!1,title:"Getting Started",description:"The Jalape\xf1o API Gateway uses gRPC for communication. This means you simply have to import the compiled Protobuf definitions and initialize a gRPC connection and you are ready to go.",source:"@site/versioned_docs/version-1.4.0/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/jagw/docs/getting-started",editUrl:"https://github.com/jalapeno-api-gateway/versioned_docs/version-1.4.0/getting-started.md",tags:[],version:"1.4.0",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Getting Started"},sidebar:"version-1.4.0/tutorialSidebar",previous:{title:"Installation",permalink:"/jagw/docs/installation"},next:{title:"Request Service",permalink:"/jagw/docs/api/request-service"}},p=[{value:"Step 1: Importing the compiled Protobuf definitions",id:"step-1-importing-the-compiled-protobuf-definitions",children:[{value:"Option 1: Using the the pre-compiled files recommended",id:"option-1-using-the-the-pre-compiled-files-recommended",children:[]},{value:"Option 2: Compiling the Protobuf files yourself",id:"option-2-compiling-the-protobuf-files-yourself",children:[]}]},{value:"Step 2: Initialize gRPC connection",id:"step-2-initialize-grpc-connection",children:[{value:"Default Ports",id:"default-ports",children:[]}]},{value:"Sample SR-Apps",id:"sample-sr-apps",children:[]},{value:"Examples",id:"examples",children:[]}],s={toc:p},g="wrapper";function u(e){let{components:t,...o}=e;return(0,n.yg)(g,(0,a.A)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"The Jalape\xf1o API Gateway uses gRPC for communication. This means you simply have to import the compiled Protobuf definitions and initialize a gRPC connection and you are ready to go."),(0,n.yg)("h2",{id:"step-1-importing-the-compiled-protobuf-definitions"},"Step 1: Importing the compiled Protobuf definitions"),(0,n.yg)("p",null,"To address the Gateway you can either compile the Protobuf files yourself or use the languages-specific repositories containing the already compiled code."),(0,n.yg)("h3",{id:"option-1-using-the-the-pre-compiled-files-recommended"},"Option 1: Using the the pre-compiled files ","[recommended]"),(0,n.yg)("h4",{id:"option-11-download-files-from-release-page"},"Option 1.1: Download files from Release Page"),(0,n.yg)("p",null,"The easiest way to use the Jalape\xf1o API Gateway is to simply download and import the pre-compiled, language-specific Protobuf files from the release page: "),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/jalapeno-api-gateway/jagw/releases/latest"},"JAGW"))),(0,n.yg)("h4",{id:"option-12-golang-only"},"Option 1.2: Golang only"),(0,n.yg)("p",null,"If you are using Golang, you will not find the pre-compiled files in the release page, but rather in a dedicated repository:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/jalapeno-api-gateway/jagw-go/releases/latest"},"JAGW-Go"))),(0,n.yg)("p",null,"This allows you to directly import the go module to your project with:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"$ go get github.com/jalapeno-api-gateway/jagw-go@v1.4.0\n")),(0,n.yg)("p",null,"See also ",(0,n.yg)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/jalapeno-api-gateway/jagw-go/jagw"},"Go Packages")),(0,n.yg)("h4",{id:"option-13-python-only"},"Option 1.3: Python only"),(0,n.yg)("p",null,"If you are using Python, you will not find the pre-compiled files in the release page, but rather in a dedicated repository:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/jalapeno-api-gateway/jagw-python/releases/latest"},"JAGW-Python"))),(0,n.yg)("p",null,"This allows you to directly import the python module to your project with:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"$ pip install jagw-python\n")),(0,n.yg)("h3",{id:"option-2-compiling-the-protobuf-files-yourself"},"Option 2: Compiling the Protobuf files yourself"),(0,n.yg)("p",null,"If you prefer to compile to Protobuf files yourself or if we do not offer pre-compiled files for your development language you can download the Protobuf files from our ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/jalapeno-api-gateway/jagw/releases/latest"},"jagw")," repo."),(0,n.yg)("p",null,"To compile the files, you will need to install both the ",(0,n.yg)("a",{parentName:"p",href:"https://grpc.io/docs/protoc-installation/"},"protobuf compiler")," and the language specific ",(0,n.yg)("a",{parentName:"p",href:"https://grpc.io/docs/languages/"},"gRPC compiler"),"."),(0,n.yg)("h2",{id:"step-2-initialize-grpc-connection"},"Step 2: Initialize gRPC connection"),(0,n.yg)("p",null,"Once you have imported the compiled Protobuf code to your project, you can connect to the Request Service and the Subscription Service and use the gRPC Methods documented in the ",(0,n.yg)("a",{parentName:"p",href:"http://jalapeno-api-gateway.github.io/jagw/docs/api/request-service"},"API Documentation"),"."),(0,n.yg)("p",null,"To initialize a gRPC connection, refer to the language specific documentation for ",(0,n.yg)("a",{parentName:"p",href:"https://grpc.io/docs/languages/"},"gRPC")," (i.e. ",(0,n.yg)("a",{parentName:"p",href:"https://grpc.io/docs/languages/go/basics/#client"},"for Golang"),")."),(0,n.yg)("h3",{id:"default-ports"},"Default Ports"),(0,n.yg)("p",null,"The default ports for the two services are shown in the table below."),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Service"),(0,n.yg)("th",{parentName:"tr",align:null},"Port"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Request-Service"),(0,n.yg)("td",{parentName:"tr",align:null},"9903")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Subscription-Service"),(0,n.yg)("td",{parentName:"tr",align:null},"9902")))),(0,n.yg)("h2",{id:"sample-sr-apps"},"Sample SR-Apps"),(0,n.yg)("p",null,"You can also refer to our ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/jalapeno-api-gateway/demo-sr-app"},"demo-sr-app")," to get started."),(0,n.yg)("h2",{id:"examples"},"Examples"),(0,n.yg)("p",null,"More examples can be found under:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/jalapeno-api-gateway/jagw-go/tree/main/examples"},"Go Examples")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/jalapeno-api-gateway/jagw-python/tree/main/examples"},"Python Examples"))))}u.isMDXComponent=!0}}]);