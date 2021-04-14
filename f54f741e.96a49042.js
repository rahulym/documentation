(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{215:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(3),a=(n(0),n(226));const l={title:"app.memory",sidebar_label:"app.memory"},o={unversionedId:"developer/app/components/memory",id:"developer/app/components/memory",isDocsHomePage:!1,title:"app.memory",description:"This object contains methods for storing, accessing, deleting data in",source:"@site/docs/developer/app/components/memory.md",slug:"/developer/app/components/memory",permalink:"/docs/developer/app/components/memory",version:"current",sidebar_label:"app.memory",sidebar:"developer",previous:{title:"app.logger",permalink:"/docs/developer/app/components/logger"},next:{title:"app.messageId",permalink:"/docs/developer/app/components/message-id"}},i=[{value:"Methods",id:"methods",children:[]},{value:"set",id:"set",children:[{value:"Syntax",id:"syntax",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Return Value",id:"return-value",children:[]},{value:"Example",id:"example",children:[]}]},{value:"get",id:"get",children:[{value:"Syntax",id:"syntax-1",children:[]},{value:"Parameters",id:"parameters-1",children:[]},{value:"Return Value",id:"return-value-1",children:[]},{value:"Example",id:"example-1",children:[]}]},{value:"delete | del",id:"delete--del",children:[{value:"Syntax",id:"syntax-2",children:[]},{value:"Parameters",id:"parameters-2",children:[]},{value:"Example",id:"example-2",children:[]}]},{value:"getMultiple",id:"getmultiple",children:[{value:"Syntax",id:"syntax-3",children:[]},{value:"Parameters",id:"parameters-3",children:[]},{value:"Return Value",id:"return-value-2",children:[]},{value:"Example",id:"example-3",children:[]}]}],c={toc:i};function p({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This object contains methods for storing, accessing, deleting data in\nRedis In memory"),Object(a.b)("h2",{id:"methods"},"Methods"),Object(a.b)("h2",{id:"set"},"set"),Object(a.b)("p",null,"This method sets a value using the key in memory"),Object(a.b)("h3",{id:"syntax"},"Syntax"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"app.memory.set(key, data, expiry)\n.then(()=>{\n})\n.catch(()=>{\n});\n")),Object(a.b)("h3",{id:"parameters"},"Parameters"),Object(a.b)("h4",{id:"key--string"},"key ","|"," ",Object(a.b)("inlineCode",{parentName:"h4"},"string")),Object(a.b)("p",null,"A key to store the data"),Object(a.b)("h4",{id:"data--string-or-object"},"data ","|"," ",Object(a.b)("inlineCode",{parentName:"h4"},"string or object")),Object(a.b)("p",null,"The data to be stored in the memory"),Object(a.b)("h4",{id:"expiry--int--optional"},"expiry ","|"," ",Object(a.b)("inlineCode",{parentName:"h4"},"int")," ","|"," ",Object(a.b)("inlineCode",{parentName:"h4"},"optional")),Object(a.b)("p",null,"The expiry time in seconds. It is optional, the default value is\n",Object(a.b)("inlineCode",{parentName:"p"},"172800")," seconds ( 2 days )."),Object(a.b)("h3",{id:"return-value"},"Return Value"),Object(a.b)("p",null,"It returns a promise"),Object(a.b)("h3",{id:"example"},"Example"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"app.memory.set('mobile', '9876543210', 3600)\n.then(()=>{\n  //your code\n})\n.catch(()=>{\n  //memory set failed, deal with error\n})\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"app.memory.set has an expiry of 1 hour by default. If required, timeout can be configured from case to case basis.")),Object(a.b)("hr",null),Object(a.b)("h2",{id:"get"},"get"),Object(a.b)("p",null,"This method is used to access the stored data using the key."),Object(a.b)("h3",{id:"syntax-1"},"Syntax"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"app.memory.get(key)\n.then((value)=>{\n})\n.catch(()=>{\n});\n")),Object(a.b)("h3",{id:"parameters-1"},"Parameters"),Object(a.b)("h4",{id:"key--string-1"},"key | ",Object(a.b)("inlineCode",{parentName:"h4"},"string")),Object(a.b)("p",null,"A key for getting the stored data"),Object(a.b)("h3",{id:"return-value-1"},"Return Value"),Object(a.b)("p",null,"It returns a promise along with the data"),Object(a.b)("h3",{id:"example-1"},"Example"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"app.memory.get('mobile')\n.then((value)=>{\n  app.log(value);\n})\n.catch((error)=>{\n  //memory get failed deal with error\n  //may be key not found in the memory\n  app.log(error);\n});\n//if memory get success, the log will be\n\"9876543210\"\n//if memory get fails, the log will be\nkey mobile not found in memory\n")),Object(a.b)("hr",null),Object(a.b)("h2",{id:"delete--del"},"delete | del"),Object(a.b)("p",null,"This method deletes a value using the key in memory"),Object(a.b)("h3",{id:"syntax-2"},"Syntax"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"app.memory.delete(key) or app.memory.del(key)\n")),Object(a.b)("h3",{id:"parameters-2"},"Parameters"),Object(a.b)("h4",{id:"key--string-2"},"key | ",Object(a.b)("inlineCode",{parentName:"h4"},"string")),Object(a.b)("p",null,"A key to delete the data from the memory"),Object(a.b)("h3",{id:"example-2"},"Example"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"app.memory.delete('mobile') (or) app.memory.del('mobile')\n")),Object(a.b)("hr",null),Object(a.b)("h2",{id:"getmultiple"},"getMultiple"),Object(a.b)("p",null,"This method is used to get multiple values stored in memory"),Object(a.b)("h3",{id:"syntax-3"},"Syntax"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"app.memory.getMultiple(keys)\n.then((results)=>{\n})\n.catch(()=>{\n});\n")),Object(a.b)("h3",{id:"parameters-3"},"Parameters"),Object(a.b)("h4",{id:"keys--array"},"keys | ",Object(a.b)("inlineCode",{parentName:"h4"},"array")),Object(a.b)("p",null,"An array of keys to get values from memory"),Object(a.b)("h3",{id:"return-value-2"},"Return Value"),Object(a.b)("p",null,"It returns the results object containing key-value pairs"),Object(a.b)("h3",{id:"example-3"},"Example"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'app.memory.getMultiple([\'mobile\', \'name\'])\n.then((results)=>{\n  app.log(results);\n})\n.catch(()=>{\n  //deal with error\n});\n\n//the log will be\n{\n    "mobile": "9876543210",\n    "name": "Yellow Messenger"\n}\n')),Object(a.b)("hr",null))}p.isMDXComponent=!0},226:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=b(n),d=r,u=s["".concat(o,".").concat(d)]||s[d]||m[d]||l;return n?a.a.createElement(u,i(i({ref:t},p),{},{components:n})):a.a.createElement(u,i({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);