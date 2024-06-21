"use strict";(self.webpackChunkjalapeno_api_gateway_documentation=self.webpackChunkjalapeno_api_gateway_documentation||[]).push([[2745],{5680:(e,t,o)=>{o.d(t,{xA:()=>c,yg:()=>f});var r=o(6540);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(o),d=n,f=u["".concat(p,".").concat(d)]||u[d]||g[d]||i;return o?r.createElement(f,a(a({ref:t},c),{},{components:o})):r.createElement(f,a({ref:t},c))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:n,a[1]=l;for(var s=2;s<i;s++)a[s]=o[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},6654:(e,t,o)=>{function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!r(e)}o.d(t,{A:()=>n,z:()=>r})},6025:(e,t,o)=>{o.d(t,{A:()=>a,h:()=>i});var r=o(4586),n=o(6654);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,r.A)();return{withBaseUrl:(o,r)=>function(e,t,o,r){let{forcePrependBaseUrl:i=!1,absolute:a=!1}=void 0===r?{}:r;if(!o)return o;if(o.startsWith("#"))return o;if((0,n.z)(o))return o;if(i)return t+o;const l=o.startsWith(t)?o:t+o.replace(/^\//,"");return a?e+l:l}(t,e,o,r)}}function a(e,t){void 0===t&&(t={});const{withBaseUrl:o}=i();return o(e,t)}},2792:(e,t,o)=>{o.r(t),o.d(t,{contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=o(8168),n=(o(6540),o(5680));o(6025);const i={sidebar_position:4,title:"Getting Started"},a=void 0,l={unversionedId:"getting-started",id:"version-1.3.0/getting-started",isDocsHomePage:!1,title:"Getting Started",description:"The Jalape\xf1o API Gateway uses gRPC for communication. This means you simply have to import the compiled Protobuf definitions and initialize a gRPC connection and you are ready to go.",source:"@site/versioned_docs/version-1.3.0/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/jagw/docs/1.3.0/getting-started",editUrl:"https://github.com/jalapeno-api-gateway/versioned_docs/version-1.3.0/getting-started.md",tags:[],version:"1.3.0",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Getting Started"},sidebar:"version-1.3.0/tutorialSidebar",previous:{title:"Installation",permalink:"/jagw/docs/1.3.0/installation"},next:{title:"Request Service",permalink:"/jagw/docs/1.3.0/api/request-service"}},p=[{value:"Step 1: Importing the compiled Protobuf definitions",id:"step-1-importing-the-compiled-protobuf-definitions",children:[{value:"Option 1: Using the the pre-compiled files recommended",id:"option-1-using-the-the-pre-compiled-files-recommended",children:[]},{value:"Option 2: Compiling the Protobuf files yourself",id:"option-2-compiling-the-protobuf-files-yourself",children:[]}]},{value:"Step 2: Initialize gRPC connection",id:"step-2-initialize-grpc-connection",children:[{value:"Default Ports",id:"default-ports",children:[]}]},{value:"Sample SR-Apps",id:"sample-sr-apps",children:[]}],s={toc:p},c="wrapper";function u(e){let{components:t,...o}=e;return(0,n.yg)(c,(0,r.A)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"The Jalape\xf1o API Gateway uses gRPC for communication. This means you simply have to import the compiled Protobuf definitions and initialize a gRPC connection and you are ready to go."),(0,n.yg)("h2",{id:"step-1-importing-the-compiled-protobuf-definitions"},"Step 1: Importing the compiled Protobuf definitions"),(0,n.yg)("p",null,"To address the Gateway you can either compile the Protobuf files yourself or use the languages-specific repositories containing the already compiled code."),(0,n.yg)("h3",{id:"option-1-using-the-the-pre-compiled-files-recommended"},"Option 1: Using the the pre-compiled files ","[recommended]"),(0,n.yg)("h4",{id:"option-11-download-files-from-release-page"},"Option 1.1: Download files from Release Page"),(0,n.yg)("p",null,"The easiest way to use the Jalape\xf1o API Gateway is to simply download and import the pre-compiled, language-specific Protobuf files from the release page: "),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/jalapeno-api-gateway/protorepo/releases/latest"},"Protorepo"))),(0,n.yg)("h4",{id:"option-12-golang-only"},"Option 1.2: Golang only"),(0,n.yg)("p",null,"If you are using Golang, you will not find the pre-compiled files in the release page, but rather in a dedicated repository:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/jalapeno-api-gateway/protorepo-jagw-go/releases/latest"},"Golang"))),(0,n.yg)("p",null,"This allows you to directly import the go module to your project with:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"$ go get github.com/jalapeno-api-gateway/protorepo-jagw-go@v1.3.0\n")),(0,n.yg)("h3",{id:"option-2-compiling-the-protobuf-files-yourself"},"Option 2: Compiling the Protobuf files yourself"),(0,n.yg)("p",null,"If you prefer to compile to Protobuf files yourself or if we do not offer pre-compiled files for your development language you can download the Protobuf files from our ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/jalapeno-api-gateway/protorepo/releases/latest"},"protorepo"),"."),(0,n.yg)("p",null,"To compile the files, you will need to install both the ",(0,n.yg)("a",{parentName:"p",href:"https://grpc.io/docs/protoc-installation/"},"protobuf compiler")," and the language specific ",(0,n.yg)("a",{parentName:"p",href:"https://grpc.io/docs/languages/"},"gRPC compiler"),"."),(0,n.yg)("h2",{id:"step-2-initialize-grpc-connection"},"Step 2: Initialize gRPC connection"),(0,n.yg)("p",null,"Once you have imported the compiled Protobuf code to your project, you can connect to the Request Service and the Subscription Service and use the gRPC Methods documented in the ",(0,n.yg)("a",{parentName:"p",href:"http://localhost:3000/jagw-docs/docs/api/request-service"},"API Documentation"),"."),(0,n.yg)("p",null,"To initialize a gRPC connection, refer to the language specific documentation for ",(0,n.yg)("a",{parentName:"p",href:"https://grpc.io/docs/languages/"},"gRPC")," (i.e. ",(0,n.yg)("a",{parentName:"p",href:"https://grpc.io/docs/languages/go/basics/#client"},"for Golang"),")."),(0,n.yg)("h3",{id:"default-ports"},"Default Ports"),(0,n.yg)("p",null,"The default ports for the two services are shown in the table below."),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Service"),(0,n.yg)("th",{parentName:"tr",align:null},"Port"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Request-Service"),(0,n.yg)("td",{parentName:"tr",align:null},"30050")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Subscription-Service"),(0,n.yg)("td",{parentName:"tr",align:null},"30051")))),(0,n.yg)("h2",{id:"sample-sr-apps"},"Sample SR-Apps"),(0,n.yg)("p",null,"You can also refer to our ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/jalapeno-api-gateway/sample-sr-apps"},"sample-sr-apps")," to get started."))}u.isMDXComponent=!0}}]);