(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{151:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return i}));var n=r(3),a=(r(0),r(226));const o={title:"app.renderMessage",sidebar_label:"app.renderMessage"},p={unversionedId:"developer/app/components/render-message",id:"developer/app/components/render-message",isDocsHomePage:!1,title:"app.renderMessage",description:"Process to get text messaeg from code",source:"@site/docs/developer/app/components/render-message.md",slug:"/developer/app/components/render-message",permalink:"/docs/developer/app/components/render-message",version:"current",sidebar_label:"app.renderMessage",sidebar:"developer",previous:{title:"app.regexValidator",permalink:"/docs/developer/app/components/regex-validator"},next:{title:"app.sendBoardingPasses",permalink:"/docs/developer/app/components/send-boarding-pass"}},s=[{value:"Input Parameters",id:"input-parameters",children:[]},{value:"Output Parameters",id:"output-parameters",children:[]},{value:"Examples",id:"examples",children:[]}],c={toc:s};function i({components:e,...t}){return Object(a.b)("wrapper",Object(n.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Process to get text messaeg from code"),Object(a.b)("h2",{id:"input-parameters"},"Input Parameters"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"The first argument is the code that we add in the localization tab."),Object(a.b)("li",{parentName:"ol"},"The second argument deals with the value you want to pass."),Object(a.b)("li",{parentName:"ol"},"The third argument sets a fall back message which gets displayed if it is unable to generate the text message.")),Object(a.b)("h2",{id:"output-parameters"},"Output Parameters"),Object(a.b)("h2",{id:"examples"},"Examples"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"app.renderMessage('code-goes-here',{input parameters as object},'default message')\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Usage "),Object(a.b)("pre",{parentName:"blockquote"},Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'app.sendTexMessage(app.renderMessage("id-number"),{id : id_number},"Here are the details for your login id: {{id_no}}")\n'))))}i.isMDXComponent=!0},226:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=a.a.createContext({}),l=function(e){var t=a.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),u=l(r),m=n,b=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return r?a.a.createElement(b,s(s({ref:t},i),{},{components:r})):a.a.createElement(b,s({ref:t},i))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,p=new Array(o);p[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,p[1]=s;for(var i=2;i<o;i++)p[i]=r[i];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);