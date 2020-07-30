(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{105:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),o=(n(0),n(127)),i={},c={unversionedId:"generated-markdown/ThriftHandler.generated",id:"generated-markdown/ThriftHandler.generated",isDocsHomePage:!1,title:"ThriftHandler.generated",description:"* hostName (type: String, required) - The name of the host to connect to.",source:"@site/docs/generated-markdown/ThriftHandler.generated.md",permalink:"/docs/generated-markdown/ThriftHandler.generated",editUrl:"https://github.com/urigo/graphql-mesh/edit/master/website/docs/generated-markdown/ThriftHandler.generated.md"},l=[],p={rightToc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"hostName")," (type: ",Object(o.b)("inlineCode",{parentName:"li"},"String"),", required) - The name of the host to connect to."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"port")," (type: ",Object(o.b)("inlineCode",{parentName:"li"},"Int"),", required) - The port number to attach to on the host."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"path")," (type: ",Object(o.b)("inlineCode",{parentName:"li"},"String"),") - The path on which the Thrift service is listening. Defaults to '/thrift'."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"https")," (type: ",Object(o.b)("inlineCode",{parentName:"li"},"Boolean"),") - Boolean value indicating whether to use https. Defaults to false."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"protocol")," (type: ",Object(o.b)("inlineCode",{parentName:"li"},"String (binary | compact | json)"),") - Name of the Thrift protocol type to use. Defaults to 'binary'."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"serviceName")," (type: ",Object(o.b)("inlineCode",{parentName:"li"},"String"),", required) - The name of your service. Used for logging."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"operationHeaders")," (type: ",Object(o.b)("inlineCode",{parentName:"li"},"JSON"),") - JSON object representing the Headers to add to the runtime of the API calls"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"schemaHeaders")," (type: ",Object(o.b)("inlineCode",{parentName:"li"},"JSON"),") - If you are using a remote URL endpoint to fetch your schema, you can set headers for the HTTP request to fetch your schema."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"idl")," (type: ",Object(o.b)("inlineCode",{parentName:"li"},"String"),", required) - Path to IDL file")))}u.isMDXComponent=!0},127:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return s}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},b=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=u(n),m=r,s=b["".concat(i,".").concat(m)]||b[m]||d[m]||o;return n?a.a.createElement(s,c({ref:t},p,{components:n})):a.a.createElement(s,c({ref:t},p))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);