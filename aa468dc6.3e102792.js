(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{194:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var a=n(3),r=n(7),o=(n(0),n(261)),c={title:"Getting started with Omnichannel Notifications Engine",sidebar_label:"Send Message"},i={unversionedId:"platform_concepts/omniChannelNotifications/sendMessage",id:"platform_concepts/omniChannelNotifications/sendMessage",isDocsHomePage:!1,title:"Getting started with Omnichannel Notifications Engine",description:"API to send notifications to the user",source:"@site/docs/platform_concepts/omniChannelNotifications/sendMessage.md",slug:"/platform_concepts/omniChannelNotifications/sendMessage",permalink:"/docs/platform_concepts/omniChannelNotifications/sendMessage",version:"current",sidebar_label:"Send Message",sidebar:"platform_concepts",previous:{title:"Omnichannel Notifications Engine",permalink:"/docs/platform_concepts/omniChannelNotifications/gettingStarted"}},s=[],p={toc:s};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"API to send notifications to the user"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"URL")," ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://app.yellowmessenger.com/api/engagements/notifications/v1/push"}),"https://app.yellowmessenger.com/api/engagements/notifications/v1/push"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Method:")," ",Object(o.b)("inlineCode",{parentName:"p"},"POST"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"URL Params")," None")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Authentication(Header)")),Object(o.b)("p",{parentName:"li"}," ",Object(o.b)("inlineCode",{parentName:"p"},'x-auth-token" : "token'))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Data Params")),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-["}),' "userDetails" : {\n     "number" : "919876543210", //Number is a mandatory parameter in case of sms, whatsapp, voice push, \n     "email" : " [\'abc@xyz.com\']\n },\n"channels":[\n    {\n     "type" : "sms",\n     "templateId" : "12345678",\n     "sender" : "9876543210"\n}],\n"metadata":\n     {\n     "scheduleAt": "1970-01-01T00:00:00.000Z", // Date time at which the notification should be sent.\n     "customPayload" : {} // Payload that will flow back to the postback webhook and reports.\n}\n]```\n\n'))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Success Response:")))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Code:")," 202 ",Object(o.b)("inlineCode",{parentName:"p"},"Message queued successfully. You will receive a msgId for acknowledgement and tracking.")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Code:")," 400 ",Object(o.b)("inlineCode",{parentName:"p"},"Bad request. Request structure is not formed correctly. Please check the \u2018message\u2019 field for more information.")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Code:")," 401 ",Object(o.b)("inlineCode",{parentName:"p"},"Unauthorised. Please check your auth token.")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Code:")," 422 ",Object(o.b)("inlineCode",{parentName:"p"},"Invalid inputs. The request structure is evaluated to be correct but the parameter values are not within expected range.")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Code:")," 429 ",Object(o.b)("inlineCode",{parentName:"p"},"Message queued successfully. You will receive a msgId for acknowledgement and tracking.")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Code:")," 500 ",Object(o.b)("inlineCode",{parentName:"p"},"Message queued successfully. You will receive a msgId for acknowledgement and tracking.")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Notes:")),Object(o.b)("p",{parentName:"li"}," <",Object(o.b)("em",{parentName:"p"},"This is where all uncertainties, commentary, discussion etc. can go. I recommend timestamping and identifying oneself when leaving comments here."),">"))))}l.isMDXComponent=!0},261:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=l(n),u=a,d=b["".concat(c,".").concat(u)]||b[u]||m[u]||o;return n?r.a.createElement(d,i(i({ref:t},p),{},{components:n})):r.a.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);