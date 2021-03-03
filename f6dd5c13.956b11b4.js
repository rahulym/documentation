(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{207:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(216)),p={title:"app.extractName",sidebar_label:"app.extractName"},c={unversionedId:"developer/app/components/extract-name",id:"developer/app/components/extract-name",isDocsHomePage:!1,title:"app.extractName",description:"Input Parameters",source:"@site/docs/developer/app/components/extract-name.md",slug:"/developer/app/components/extract-name",permalink:"/docs/developer/app/components/extract-name",version:"current",sidebar_label:"app.extractName",sidebar:"developer",previous:{title:"app.executeFunction",permalink:"/docs/developer/app/components/execute-function"},next:{title:"app.feedbackEvent",permalink:"/docs/developer/app/components/feedback-provided"}},i=[{value:"Input Parameters",id:"input-parameters",children:[]},{value:"Output Parameters",id:"output-parameters",children:[]},{value:"Examples",id:"examples",children:[]}],l={toc:i};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"input-parameters"},"Input Parameters"),Object(o.b)("p",null,"A string"),Object(o.b)("h2",{id:"output-parameters"},"Output Parameters"),Object(o.b)("p",null,"returns a promise, if the string contains a name, it will return a name\n\u200b"),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)("p",null,"\u200b"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),'app.extractName("my name is yellowMessenger").then((data)=>console.log("data",data)).catch(e=>console.log(e));\n\n\n')),Object(o.b)("p",null,"\u200b"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},'This method utilises the prediction to identify any name that may be there in the provided string.\nThe real time demo can be viewed from "test your bot", and the returning name will be visible under "parser.noun_chunks "')))}u.isMDXComponent=!0},216:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),s=u(n),d=r,b=s["".concat(p,".").concat(d)]||s[d]||m[d]||o;return n?a.a.createElement(b,c(c({ref:t},l),{},{components:n})):a.a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,p=new Array(o);p[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,p[1]=c;for(var l=2;l<o;l++)p[l]=n[l];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);