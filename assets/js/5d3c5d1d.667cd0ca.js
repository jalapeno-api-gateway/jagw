"use strict";(self.webpackChunkjalapeno_api_gateway_documentation=self.webpackChunkjalapeno_api_gateway_documentation||[]).push([[602],{5680:(e,n,o)=>{o.d(n,{xA:()=>d,yg:()=>m});var r=o(6540);function t(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function i(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?i(Object(o),!0).forEach((function(n){t(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function s(e,n){if(null==e)return{};var o,r,t=function(e,n){if(null==e)return{};var o,r,t={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],n.indexOf(o)>=0||(t[o]=e[o]);return t}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}var l=r.createContext({}),p=function(e){var n=r.useContext(l),o=n;return e&&(o="function"==typeof e?e(n):a(a({},n),e)),o},d=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var o=e.components,t=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),g=p(o),c=t,m=g["".concat(l,".").concat(c)]||g[c]||u[c]||i;return o?r.createElement(m,a(a({ref:n},d),{},{components:o})):r.createElement(m,a({ref:n},d))}));function m(e,n){var o=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=o.length,a=new Array(i);a[0]=c;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[g]="string"==typeof e?e:t,a[1]=s;for(var p=2;p<i;p++)a[p]=o[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}c.displayName="MDXCreateElement"},3624:(e,n,o)=>{o.d(n,{A:()=>s});var r=o(6540),t=o(53);const i="tableOfContentsInline_0DDH";function a(e){let{toc:n,isChild:o}=e;return n.length?r.createElement("ul",{className:o?"":"table-of-contents"},n.map((e=>r.createElement("li",{key:e.id},r.createElement("a",{href:`#${e.id}`,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(a,{isChild:!0,toc:e.children}))))):null}const s=function(e){let{toc:n}=e;return r.createElement("div",{className:(0,t.A)(i)},r.createElement(a,{toc:n}))}},6732:(e,n,o)=>{o.r(n),o.d(n,{contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=o(8168),t=(o(6540),o(5680)),i=o(3624);const a={sidebar_position:3,title:"Messages"},s=void 0,l={unversionedId:"api/messages",id:"version-1.4.0/api/messages",isDocsHomePage:!1,title:"Messages",description:"Request Service",source:"@site/versioned_docs/version-1.4.0/api/messages.md",sourceDirName:"api",slug:"/api/messages",permalink:"/jagw/docs/api/messages",editUrl:"https://github.com/jalapeno-api-gateway/versioned_docs/version-1.4.0/api/messages.md",tags:[],version:"1.4.0",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Messages"},sidebar:"version-1.4.0/tutorialSidebar",previous:{title:"Subscription Service",permalink:"/jagw/docs/api/subscription-service"},next:{title:"Properties",permalink:"/jagw/docs/api/properties"}},p=[{value:"Request Service",id:"request-service",children:[]},{value:"Subscription Service",id:"subscription-service",children:[]},{value:"Common",id:"common",children:[]},{value:"Base",id:"base",children:[]},{value:"Filters",id:"filters",children:[]},{value:"Enums",id:"enums",children:[]},{value:"About Messages",id:"about-messages",children:[]},{value:"Request Messages",id:"request-messages",children:[{value:"<code>MeasurementsRequest</code>",id:"measurementsrequest",children:[]},{value:"<code>MeasurementsResponse</code>",id:"measurementsresponse",children:[]},{value:"<code>Measurement</code>",id:"measurement",children:[]},{value:"<code>MeasurementDetailsRequest</code>",id:"measurementdetailsrequest",children:[]},{value:"<code>MeasurementDetailsResponse</code>",id:"measurementdetailsresponse",children:[]},{value:"<code>MeasurementColumn</code>",id:"measurementcolumn",children:[]},{value:"<code>TopologyRequest</code>",id:"topologyrequest",children:[]},{value:"<code>TelemetryRequest</code>",id:"telemetryrequest",children:[]},{value:"<code>StringFilter</code>",id:"stringfilter",children:[]},{value:"<code>RangeFilter</code>",id:"rangefilter",children:[]},{value:"<code>LsNodeResponse</code>",id:"lsnoderesponse",children:[]},{value:"<code>LsLinkResponse</code>",id:"lslinkresponse",children:[]},{value:"<code>LsPrefixResponse</code>",id:"lsprefixresponse",children:[]},{value:"<code>LsSrv6SidResponse</code>",id:"lssrv6sidresponse",children:[]},{value:"<code>LsNodeEdgeResponse</code>",id:"lsnodeedgeresponse",children:[]},{value:"<code>LsNodeCoordinatesResponse</code>",id:"lsnodecoordinatesresponse",children:[]},{value:"<code>PeerResponse</code>",id:"peerresponse",children:[]},{value:"<code>TelemetryResponse</code>",id:"telemetryresponse",children:[]}]},{value:"Subscription Messages",id:"subscription-messages",children:[{value:"<code>TopologySubscription</code>",id:"topologysubscription",children:[]},{value:"<code>TelemetrySubscription</code>",id:"telemetrysubscription",children:[]},{value:"<code>LsNodeEvent</code>",id:"lsnodeevent",children:[]},{value:"<code>LsLinkEvent</code>",id:"lslinkevent",children:[]},{value:"<code>LsPrefixEvent</code>",id:"lsprefixevent",children:[]},{value:"<code>LsSrv6SidEvent</code>",id:"lssrv6sidevent",children:[]},{value:"<code>LsNodeEdgeEvent</code>",id:"lsnodeedgeevent",children:[]},{value:"<code>PeerEvent</code>",id:"peerevent",children:[]},{value:"<code>TelemetryEvent</code>",id:"telemetryevent",children:[]}]},{value:"Common Messages",id:"common-messages",children:[{value:"<code>LsNode</code>",id:"lsnode",children:[]},{value:"<code>LsLink</code>",id:"lslink",children:[]},{value:"<code>LsPrefix</code>",id:"lsprefix",children:[]},{value:"<code>LsSrv6Sid</code>",id:"lssrv6sid",children:[]},{value:"<code>LsNodeEdge</code>",id:"lsnodeedge",children:[]},{value:"<code>LsNodeCoordinates</code>",id:"lsnodecoordinates",children:[]},{value:"<code>Peer</code>",id:"peer",children:[]}]},{value:"Base Messages",id:"base-messages",children:[{value:"<code>MultiTopologyIdentifier</code>",id:"multitopologyidentifier",children:[]},{value:"<code>Srv6CapabilitiesTlv</code>",id:"srv6capabilitiestlv",children:[]},{value:"<code>NodeMsd</code>",id:"nodemsd",children:[]},{value:"<code>FlexAlgoDefinition</code>",id:"flexalgodefinition",children:[]},{value:"<code>Srv6EndXSidFlags</code>",id:"srv6endxsidflags",children:[]},{value:"<code>Srv6EndXSidTlv</code>",id:"srv6endxsidtlv",children:[]},{value:"<code>Srv6LocatorFlags</code>",id:"srv6locatorflags",children:[]},{value:"<code>Srv6LocatorTlv</code>",id:"srv6locatortlv",children:[]},{value:"<code>Srv6EndpointBehavior</code>",id:"srv6endpointbehavior",children:[]},{value:"<code>Srv6SidStructure</code>",id:"srv6sidstructure",children:[]}]},{value:"Filters",id:"filters-1",children:[{value:"<code>StringFilter</code>",id:"stringfilter-1",children:[]},{value:"<code>RangeFilter</code>",id:"rangefilter-1",children:[]}]},{value:"Enums",id:"enums-1",children:[{value:"<code>StringOperator</code>",id:"stringoperator",children:[]}]}],d={toc:p},g="wrapper";function u(e){let{components:n,...o}=e;return(0,t.yg)(g,(0,r.A)({},d,o,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h2",{id:"request-service"},"Request Service"),(0,t.yg)(i.A,{toc:p[p.length-6].children,mdxType:"TOCInline"}),(0,t.yg)("h2",{id:"subscription-service"},"Subscription Service"),(0,t.yg)(i.A,{toc:p[p.length-5].children,mdxType:"TOCInline"}),(0,t.yg)("h2",{id:"common"},"Common"),(0,t.yg)(i.A,{toc:p[p.length-4].children,mdxType:"TOCInline"}),(0,t.yg)("h2",{id:"base"},"Base"),(0,t.yg)(i.A,{toc:p[p.length-3].children,mdxType:"TOCInline"}),(0,t.yg)("h2",{id:"filters"},"Filters"),(0,t.yg)(i.A,{toc:p[p.length-2].children,mdxType:"TOCInline"}),(0,t.yg)("h2",{id:"enums"},"Enums"),(0,t.yg)(i.A,{toc:p[p.length-1].children,mdxType:"TOCInline"}),(0,t.yg)("h2",{id:"about-messages"},"About Messages"),(0,t.yg)("p",null,"This sections lists all ",(0,t.yg)("inlineCode",{parentName:"p"},"protobuf")," messages defined by the services of the Jalape\xf1o API Gateway."),(0,t.yg)("div",{className:"admonition admonition-info alert alert--info"},(0,t.yg)("div",{parentName:"div",className:"admonition-heading"},(0,t.yg)("h5",{parentName:"div"},(0,t.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,t.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,t.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"'required', 'optional' & 'repeated'")),(0,t.yg)("div",{parentName:"div",className:"admonition-content"},(0,t.yg)("p",{parentName:"div"},"All properties that are preceded by either the ",(0,t.yg)("strong",{parentName:"p"},"optional")," or ",(0,t.yg)("strong",{parentName:"p"},"required")," keyword do not contain the actual value, but rather pointers to those values. This is due to the implementation of ",(0,t.yg)("a",{parentName:"p",href:"https://developers.google.com/protocol-buffers/docs/proto"},"proto2"),"."),(0,t.yg)("p",{parentName:"div"},"The reason for this design choice is explained in the section ",(0,t.yg)("a",{parentName:"p",href:"../design/design-choices#why-use-proto2-instead-of-proto3"},"Why use proto2 instead of proto3?"),"."))),(0,t.yg)("h2",{id:"request-messages"},"Request Messages"),(0,t.yg)("h3",{id:"measurementsrequest"},(0,t.yg)("inlineCode",{parentName:"h3"},"MeasurementsRequest")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-protobuf"},"message MeasurementsRequest {}\n")),(0,t.yg)("h3",{id:"measurementsresponse"},(0,t.yg)("inlineCode",{parentName:"h3"},"MeasurementsResponse")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-protobuf"},"message MeasurementsResponse {\n    repeated Measurement measurements = 1;\n}\n")),(0,t.yg)("h3",{id:"measurement"},(0,t.yg)("inlineCode",{parentName:"h3"},"Measurement")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-protobuf"},"message Measurement {\n    required string name = 1;\n    required int64 timestamp_latest_measurement = 2;\n}\n")),(0,t.yg)("h3",{id:"measurementdetailsrequest"},(0,t.yg)("inlineCode",{parentName:"h3"},"MeasurementDetailsRequest")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-protobuf"},"message MeasurementDetailsRequest {\n    required string name = 1;\n}\n")),(0,t.yg)("h3",{id:"measurementdetailsresponse"},(0,t.yg)("inlineCode",{parentName:"h3"},"MeasurementDetailsResponse")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-protobuf"},"message MeasurementDetailsResponse {\n    required int64 timestamp_latest_measurement = 1;\n    repeated MeasurementColumn columns = 2;\n}\n")),(0,t.yg)("h3",{id:"measurementcolumn"},(0,t.yg)("inlineCode",{parentName:"h3"},"MeasurementColumn")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-protobuf"},"message MeasurementColumn {\n    required string name = 1;\n    required string type = 2;\n    required string influx_type = 3;\n    required string last_value_stringyfied = 4;\n}\n")),(0,t.yg)("h3",{id:"topologyrequest"},(0,t.yg)("inlineCode",{parentName:"h3"},"TopologyRequest")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-protobuf"},"message TopologyRequest {\n    repeated string keys = 1;\n    repeated string properties = 2;\n}\n")),(0,t.yg)("h3",{id:"telemetryrequest"},(0,t.yg)("inlineCode",{parentName:"h3"},"TelemetryRequest")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-protobuf"},"message TelemetryRequest {\n    required string sensor_path = 1;\n    repeated string properties = 2;\n    optional bool Unflatten = 3;\n    repeated StringFilter string_filters = 4;\n    optional RangeFilter range_filter = 5;\n}\n")),(0,t.yg)("h3",{id:"stringfilter"},(0,t.yg)("inlineCode",{parentName:"h3"},"StringFilter")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-protobuf"},"message StringFilter {\n    required string property = 1;\n    required string value = 2;\n    required StringOperator operator = 3;\n}\n")),(0,t.yg)("h3",{id:"rangefilter"},(0,t.yg)("inlineCode",{parentName:"h3"},"RangeFilter")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-protobuf"},"message RangeFilter {\n    required int64 earliest_timestamp = 3;\n    optional int64 latest_timestamp = 4;    \n}\n\n")),(0,t.yg)("h3",{id:"lsnoderesponse"},(0,t.yg)("inlineCode",{parentName:"h3"},"LsNodeResponse")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-protobuf"},"message LsNodeResponse {\n    repeated LsNode ls_nodes = 1;\n}\n")),(0,t.yg)("h3",{id:"lslinkresponse"},(0,t.yg)("inlineCode",{parentName:"h3"},"LsLinkResponse")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-protobuf"},"message LsLinkResponse {\n    repeated LsLink ls_links = 1;\n}\n")),(0,t.yg)("h3",{id:"lsprefixresponse"},(0,t.yg)("inlineCode",{parentName:"h3"},"LsPrefixResponse")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-protobuf"},"message LsPrefixResponse {\n    repeated LsPrefix ls_prefixes = 1;\n}\n")),(0,t.yg)("h3",{id:"lssrv6sidresponse"},(0,t.yg)("inlineCode",{parentName:"h3"},"LsSrv6SidResponse")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-protobuf"},"message LsSrv6SidResponse {\n    repeated LsSrv6Sid ls_srv6_sids = 1;\n}\n")),(0,t.yg)("h3",{id:"lsnodeedgeresponse"},(0,t.yg)("inlineCode",{parentName:"h3"},"LsNodeEdgeResponse")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-protobuf"},"message LsNodeEdgeResponse {\n    repeated LsNodeEdge ls_node_edges = 1;\n}\n")),(0,t.yg)("h3",{id:"lsnodecoordinatesresponse"},(0,t.yg)("inlineCode",{parentName:"h3"},"LsNodeCoordinatesResponse")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-protobuf"},"message LsNodeCoordinatesResponse {\n    repeated LsNodeCoordinates coordinates = 1;\n}\n")),(0,t.yg)("h3",{id:"peerresponse"},(0,t.yg)("inlineCode",{parentName:"h3"},"PeerResponse")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-protobuf"},"message PeerResponse {\n    repeated Peer peer = 1;\n}\n")),(0,t.yg)("h3",{id:"telemetryresponse"},(0,t.yg)("inlineCode",{parentName:"h3"},"TelemetryResponse")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-protobuf"},"message TelemetryResponse {\n    repeated string telemetry_data = 1;\n}\n")),(0,t.yg)("h2",{id:"subscription-messages"},"Subscription Messages"),(0,t.yg)("h3",{id:"topologysubscription"},(0,t.yg)("inlineCode",{parentName:"h3"},"TopologySubscription")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-protobuf"},"message TopologySubscription {\n    repeated string keys = 1;\n    repeated string properties = 2;\n}\n")),(0,t.yg)("h3",{id:"telemetrysubscription"},(0,t.yg)("inlineCode",{parentName:"h3"},"TelemetrySubscription")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-protobuf"},"message TelemetrySubscription {\n    required string sensor_path = 1;\n    repeated string properties = 2;\n    optional bool Unflatten = 3;\n    repeated StringFilter string_filters = 4;\n}\n")),(0,t.yg)("h3",{id:"lsnodeevent"},(0,t.yg)("inlineCode",{parentName:"h3"},"LsNodeEvent")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-protobuf"},"message LsNodeEvent {\n    required string action = 1;\n    required string key = 2;\n    optional LsNode ls_node = 3;\n}\n")),(0,t.yg)("h3",{id:"lslinkevent"},(0,t.yg)("inlineCode",{parentName:"h3"},"LsLinkEvent")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-protobuf"},"message LsLinkEvent {\n    required string action = 1;\n    required string key = 2;\n    optional LsLink ls_link = 3;\n}\n")),(0,t.yg)("h3",{id:"lsprefixevent"},(0,t.yg)("inlineCode",{parentName:"h3"},"LsPrefixEvent")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-protobuf"},"message LsPrefixEvent {\n    required string action = 1;\n    required string key = 2;\n    optional LsPrefix ls_prefix = 3;\n}\n")),(0,t.yg)("h3",{id:"lssrv6sidevent"},(0,t.yg)("inlineCode",{parentName:"h3"},"LsSrv6SidEvent")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-protobuf"},"message LsSrv6SidEvent {\n    required string action = 1;\n    required string key = 2;\n    optional LsSrv6Sid ls_srv6_sid = 3;\n}\n")),(0,t.yg)("h3",{id:"lsnodeedgeevent"},(0,t.yg)("inlineCode",{parentName:"h3"},"LsNodeEdgeEvent")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-protobuf"},"message LsNodeEdgeEvent {\n    required string action = 1;\n    required string key = 2;\n    optional LsNodeEdge ls_node_edge = 3;\n}\n")),(0,t.yg)("h3",{id:"peerevent"},(0,t.yg)("inlineCode",{parentName:"h3"},"PeerEvent")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-protobuf"},"message PeerEvent {\n    required string action = 1;\n    required string key = 2;\n    optional Peer peer = 3;\n}\n")),(0,t.yg)("h3",{id:"telemetryevent"},(0,t.yg)("inlineCode",{parentName:"h3"},"TelemetryEvent")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-protobuf"},"message TelemetryEvent {\n    required string telemetry_data = 1;\n}\n")),(0,t.yg)("h2",{id:"common-messages"},"Common Messages"),(0,t.yg)("p",null,"These messages are used by both the ",(0,t.yg)("strong",{parentName:"p"},"Request Service")," and the ",(0,t.yg)("strong",{parentName:"p"},"Subscription Service"),"."),(0,t.yg)("h3",{id:"lsnode"},(0,t.yg)("inlineCode",{parentName:"h3"},"LsNode")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-protobuf"},"message LsNode {\n    required string key = 1;\n    optional string id = 2;\n    optional string router_hash = 3;\n    optional int64 domain_id = 4;\n    optional string router_ip = 5;\n    optional string peer_hash = 6;\n    optional string peer_ip = 7;\n    optional uint32 peer_asn = 8;\n    optional string timestamp = 9;\n    optional string igp_router_id = 10;\n    optional uint32 asn = 11;\n    repeated MultiTopologyIdentifier mtid = 12;\n    optional string area_id = 13;\n    optional string protocol = 14;\n    optional uint32 protocol_id = 15; // protobuf does not support uint8\n    optional string name = 16;\n    optional string rev = 17;\n    optional uint32 peer_type = 18; // protobuf does not support uint8\n    repeated uint32 sr_algorithm = 19; \n    optional Srv6CapabilitiesTlv srv6_capabilities_tlv = 20;\n    repeated NodeMsd node_msd = 21; \n    repeated FlexAlgoDefinition flex_algo_definition = 22;\n    optional bool is_adj_rib_in_post_policy = 23;\n    optional bool is_adj_rib_out_post_policy = 24;\n    optional bool is_loc_rib_filtered = 25;\n}\n")),(0,t.yg)("h3",{id:"lslink"},(0,t.yg)("inlineCode",{parentName:"h3"},"LsLink")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-protobuf"},"message LsLink {\n    required string key = 1;\n    optional string id = 2;\n    optional string router_hash = 3;\n    optional string router_ip = 4;\n    optional int64 domain_id = 5;\n    optional string peer_hash = 6;\n    optional string peer_ip = 7;\n    optional uint32 peer_asn = 8;\n    optional string timestamp = 9;\n    optional string igp_router_id = 10;\n    optional string protocol = 11;\n    optional string area_id = 12;\n    optional string nexthop = 13;\n    optional MultiTopologyIdentifier mtid = 14;\n    optional uint32 local_link_id = 15;\n    optional uint32 remote_link_id = 16;\n    optional string local_link_ip = 17;\n    optional string remote_link_ip = 18;\n    optional uint32 igp_metric = 19;\n    optional string remote_node_hash = 20;\n    optional string local_node_hash = 21;\n    optional string remote_igp_router_id = 22;\n    optional uint32 unidir_link_delay = 23;\n    repeated uint32 unidir_link_delay_min_max = 24;\n    optional uint64 max_link_bw_kbps = 25;\n    optional uint32 unidir_delay_variation = 26;\n    optional uint32 unidir_packet_loss = 27;\n    optional uint32 unidir_residual_bw = 28;\n    optional uint32 unidir_available_bw = 29;\n    optional uint32 unidir_bw_utilization = 30;\n    optional double normalized_unidir_link_delay = 31;\n    optional double normalized_unidir_delay_variation = 32;\n    optional double normalized_unidir_packet_loss = 33;\n    optional double unidir_packet_loss_percentage = 34;\n    optional string rev = 35;\n    optional uint32 peer_type = 36; // protobuf does not support uint8\n    optional uint32 protocol_id = 37; // protobuf does not support uint8\n    optional uint32 local_node_asn = 38;\n    optional uint32 remote_node_asn = 39;\n    repeated Srv6EndXSidTlv srv6_endx_sid = 40;\n    optional bool is_adj_rib_in_post = 41;\n    optional bool is_adj_rib_out_post = 42;\n    optional bool is_loc_rib_filtered = 43;\n}\n")),(0,t.yg)("h3",{id:"lsprefix"},(0,t.yg)("inlineCode",{parentName:"h3"},"LsPrefix")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-protobuf"},"message LsPrefix {\n    required string key = 1;\n    optional string id = 2;\n    optional string router_hash = 3;\n    optional string router_ip = 4;\n    optional int64 domain_id = 5;\n    optional string peer_hash = 6;\n    optional string peer_ip = 7;\n    optional uint32 peer_asn = 8;\n    optional string timestamp = 9;\n    optional string igp_router_id = 10;\n    optional string protocol = 11;\n    optional string area_id = 12;\n    optional string nexthop = 13;\n    optional string local_node_hash = 14;\n    optional MultiTopologyIdentifier mtid = 15;\n    optional string prefix = 16;\n    optional int32 prefix_len = 17;\n    optional uint32 prefix_metric = 18;\n    optional string rev = 19;\n    optional uint32 peer_type = 20; // protobuf does not support uint8\n    optional uint32 protocol_id = 21; // protobuf does not support uint8\n    optional Srv6LocatorTlv srv6_locator = 22;\n    optional bool is_adj_rib_in_post = 23;\n    optional bool is_adj_rib_out_post = 24;\n    optional bool is_loc_rib_filtered = 25;\n}\n\n")),(0,t.yg)("h3",{id:"lssrv6sid"},(0,t.yg)("inlineCode",{parentName:"h3"},"LsSrv6Sid")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-protobuf"},"message LsSrv6Sid {\n    required string key = 1;\n    optional string id = 2;\n    optional string router_hash = 3;\n    optional string router_ip = 4;\n    optional int64 domain_id = 5;\n    optional string peer_hash = 6;\n    optional string peer_ip = 7;\n    optional uint32 peer_asn = 8;\n    optional string timestamp = 9;\n    optional string igp_router_id = 10;\n    optional uint32 local_node_asn = 11;\n    optional string protocol = 12;\n    optional string nexthop = 13;\n    optional string local_node_hash = 14;\n    optional MultiTopologyIdentifier mtid = 15;\n    optional uint32 igp_flags = 16; // protobuf does not support uint8\n    optional string srv6_sid = 17;\n    optional string rev = 18;\n    optional uint32 peer_type = 19; // protobuf does not support uint8\n    optional uint32 protocol_id = 20; // protobuf does not support uint8\n    optional Srv6EndpointBehavior srv6_endpoint_behavior = 21;\n    optional Srv6SidStructure srv6_sid_structure = 22;\n    optional bool is_adj_rib_in_post = 23;\n    optional bool is_adj_rib_out_post = 24;\n    optional bool is_loc_rib_filtered = 25;\n}\n")),(0,t.yg)("h3",{id:"lsnodeedge"},(0,t.yg)("inlineCode",{parentName:"h3"},"LsNodeEdge")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-protobuf"},"message LsNodeEdge {\n    required string key = 1;\n    optional string id = 2;\n    optional string from = 3;\n    optional string to = 4;\n    optional string link = 5;\n}\n")),(0,t.yg)("h3",{id:"lsnodecoordinates"},(0,t.yg)("inlineCode",{parentName:"h3"},"LsNodeCoordinates")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-protobuf"},"message LsNodeCoordinates {\n    required string key = 1;\n    optional string id = 2;\n    required string ls_node_key = 3;\n    required double latitude = 4;\n    required double longitude = 5;\n}\n")),(0,t.yg)("h3",{id:"peer"},(0,t.yg)("inlineCode",{parentName:"h3"},"Peer")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-protobuf"},"message Peer{\n    required string key = 1;\n    optional string id = 2;\n    optional string router_hash = 3;\n    optional string remote_bgp_id = 4;\n    optional string local_bgp_id = 5;\n}\n")),(0,t.yg)("h2",{id:"base-messages"},"Base Messages"),(0,t.yg)("h3",{id:"multitopologyidentifier"},(0,t.yg)("inlineCode",{parentName:"h3"},"MultiTopologyIdentifier")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-protobuf"},"message MultiTopologyIdentifier {\n    required bool o_flag = 1;\n    required bool a_flag = 2;\n    required uint32 mtid = 3; // protobuf does not support uint16\n}\n")),(0,t.yg)("h3",{id:"srv6capabilitiestlv"},(0,t.yg)("inlineCode",{parentName:"h3"},"Srv6CapabilitiesTlv")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-protobuf"},"message Srv6CapabilitiesTlv {    \n    required bool o_flag = 1;\n}\n")),(0,t.yg)("h3",{id:"nodemsd"},(0,t.yg)("inlineCode",{parentName:"h3"},"NodeMsd")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-protobuf"},"message NodeMsd {\n    required uint32 msd_type = 1; // protobuf does not support uint8\n    required uint32 msd_value = 2; // protobuf does not support uint8\n}\n")),(0,t.yg)("h3",{id:"flexalgodefinition"},(0,t.yg)("inlineCode",{parentName:"h3"},"FlexAlgoDefinition")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-protobuf"},"message FlexAlgoDefinition {\n    required uint32 flex_algo = 1; // protobuf does not support uint8\n    required uint32 metric_type = 2; // protobuf does not support uint8\n    required uint32 calculation_type = 3; // protobuf does not support uint8\n    required uint32 priority = 4; // protobuf does not support uint8\n}\n")),(0,t.yg)("h3",{id:"srv6endxsidflags"},(0,t.yg)("inlineCode",{parentName:"h3"},"Srv6EndXSidFlags")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-protobuf"},"message Srv6EndXSidFlags {\n    required bool b_flag = 1;\n    required bool s_flag = 2;\n    required bool p_flag = 3;\n}\n")),(0,t.yg)("h3",{id:"srv6endxsidtlv"},(0,t.yg)("inlineCode",{parentName:"h3"},"Srv6EndXSidTlv")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-protobuf"},"message Srv6EndXSidTlv {\n    optional uint32 type = 1; // protobuf does not support uint16\n    optional uint32 length = 2; // protobuf does not support uint16\n    required uint32 endpoint_behavior = 3; // protobuf does not support uint16\n    optional Srv6EndXSidFlags flags = 4;\n    required uint32 algorithm = 5; // protobuf does not support uint8\n    required uint32 weight = 6; // protobuf does not support uint8\n    optional string sid = 7;\n}\n")),(0,t.yg)("h3",{id:"srv6locatorflags"},(0,t.yg)("inlineCode",{parentName:"h3"},"Srv6LocatorFlags")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-protobuf"},"message Srv6LocatorFlags {\n    required bool d_flag = 1;\n}\n")),(0,t.yg)("h3",{id:"srv6locatortlv"},(0,t.yg)("inlineCode",{parentName:"h3"},"Srv6LocatorTlv")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-protobuf"},"message Srv6LocatorTlv {\n    optional Srv6LocatorFlags flags = 1;\n    required uint32 algo = 2; // protobuf does not support uint8\n    required uint32 metric = 3;\n}\n")),(0,t.yg)("h3",{id:"srv6endpointbehavior"},(0,t.yg)("inlineCode",{parentName:"h3"},"Srv6EndpointBehavior")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-protobuf"},"message Srv6EndpointBehavior {\n    required uint32 endpoint_behavior = 1; // protobuf does not support uint16\n    required uint32 flag = 2; // protobuf does not support uint8\n    required uint32 algorithm = 3; // protobuf does not support uint8\n}\n")),(0,t.yg)("h3",{id:"srv6sidstructure"},(0,t.yg)("inlineCode",{parentName:"h3"},"Srv6SidStructure")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-protobuf"},"message Srv6SidStructure {\n    optional uint32 type = 1; // protobuf does not support uint16\n    optional uint32 length = 2; // protobuf does not support uint16\n    required uint32 locator_block_length = 3; // protobuf does not support uint8\n    required uint32 locator_node_length = 4; // protobuf does not support uint8\n    required uint32 function_length = 5; // protobuf does not support uint8\n    required uint32 argument_length = 6; // protobuf does not support uint8\n}\n")),(0,t.yg)("h2",{id:"filters-1"},"Filters"),(0,t.yg)("h3",{id:"stringfilter-1"},(0,t.yg)("inlineCode",{parentName:"h3"},"StringFilter")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-protobuf"},"message StringFilter {\n    required string property = 1;\n    required string value = 2;\n    required StringOperator operator = 3;\n}\n")),(0,t.yg)("h3",{id:"rangefilter-1"},(0,t.yg)("inlineCode",{parentName:"h3"},"RangeFilter")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-protobuf"},"message RangeFilter {\n    required int64 earliest_timestamp = 3;\n    optional int64 latest_timestamp = 4;    \n}\n")),(0,t.yg)("h2",{id:"enums-1"},"Enums"),(0,t.yg)("h3",{id:"stringoperator"},(0,t.yg)("inlineCode",{parentName:"h3"},"StringOperator")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-protobuf"},"enum StringOperator {\n    EQUAL = 1;\n    NOT_EQUAL = 2;\n}\n")))}u.isMDXComponent=!0},53:(e,n,o)=>{function r(e){var n,o,t="";if("string"==typeof e||"number"==typeof e)t+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(o=r(e[n]))&&(t&&(t+=" "),t+=o);else for(n in e)e[n]&&(t&&(t+=" "),t+=n);return t}o.d(n,{A:()=>t});const t=function(){for(var e,n,o=0,t="";o<arguments.length;)(e=arguments[o++])&&(n=r(e))&&(t&&(t+=" "),t+=n);return t}}}]);