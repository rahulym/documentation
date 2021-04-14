(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{172:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(3),o=(n(0),n(226));const r={title:"Android Chatbot SDK",sidebar_label:"Android Chatbot SDK"},i={unversionedId:"documentation/channelConfiguration/android",id:"documentation/channelConfiguration/android",isDocsHomePage:!1,title:"Android Chatbot SDK",description:"Installation",source:"@site/docs/documentation/channelConfiguration/android.md",slug:"/documentation/channelConfiguration/android",permalink:"/docs/documentation/channelConfiguration/android",version:"current",sidebar_label:"Android Chatbot SDK",sidebar:"documentation",previous:{title:"Web Client",permalink:"/docs/documentation/channelConfiguration/web"},next:{title:"iOS Chatbot SDK",permalink:"/docs/documentation/channelConfiguration/ios"}},c=[{value:"Installation",id:"installation",children:[{value:"Gradle",id:"gradle",children:[]}]},{value:"Usage",id:"usage",children:[{value:"Basic",id:"basic",children:[]},{value:"YMConfig",id:"ymconfig",children:[]},{value:"Starting the bot",id:"starting-the-bot",children:[]},{value:"Close bot",id:"close-bot",children:[]},{value:"Events from bot",id:"events-from-bot",children:[]}]},{value:"Important",id:"important",children:[]}],l={toc:c};function b({components:e,...t}){return Object(o.b)("wrapper",Object(a.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)("h3",{id:"gradle"},"Gradle"),Object(o.b)("p",null,"To integrate YMChat into your Android project using gradle, specify the following configurations in App level ",Object(o.b)("inlineCode",{parentName:"p"},"build.gradle")," file"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-gradle"}),'repositories {\n    jcenter()\n    // Add these two lines \n    maven { url "https://jitpack.io" }\n    maven { url "https://oss.sonatype.org/content/repositories/snapshots/" }\n}\n\n...\n...\n...\n\ndependencies {\n    ...\n    ...\n       implementation \'com.github.yellowmessenger:YMChatbot-Android:v1.0.0\n}\n')),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("h3",{id:"basic"},"Basic"),Object(o.b)("p",null,"Import the YMChat library in your Activity."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"import com.yellowmessenger.ymchat.YMChat;\nimport com.yellowmessenger.ymchat.YMConfig;\n")),Object(o.b)("p",null,"After the library is imported the basic bot can be presented with few lines as below "),Object(o.b)("p",null,"Example ",Object(o.b)("inlineCode",{parentName:"p"},"onCreate")," method of the Activity:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'\n@Override\nprotected void onCreate(Bundle savedInstanceState) {\n    super.onCreate(savedInstanceState);\n    // Dummy bot id. (Purrs a lot)\n    String botID = "x1587041004122";\n    //Get YMChat instance\n    YMChat ymChat = YMChat.getInstance();\n    ymChat.config = new YMConfig(botId);\n    setContentView(R.layout.activity_main);\n    FloatingActionButton fab = findViewById(R.id.fab);\n    fab.setOnClickListener(view -> {\n        //Starting the bot activity\n        ymChat.startChatbot(this);\n    });\n}\n\n')),Object(o.b)("h3",{id:"ymconfig"},"YMConfig"),Object(o.b)("p",null,"YMConfig configures chatbot before it presented on the screen. It is recommended to set appropriate config before presenting the bot"),Object(o.b)("h4",{id:"initialize"},"Initialize"),Object(o.b)("p",null,"YMConfig requires a botID to initialize. All other settings can be changed after config has been initialised"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'ymChat.config = new YMConfig("<BOT-ID>");\n')),Object(o.b)("h4",{id:"speech-recognition"},"Speech recognition"),Object(o.b)("p",null,"Speech to text can be enabled by setting the enableSpeech flag present in config. Default value is ",Object(o.b)("inlineCode",{parentName:"p"},"false")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"ymChat.config.enableSpeech = true\n")),Object(o.b)("h4",{id:"payload"},"Payload"),Object(o.b)("p",null,"Additional payload can be added in the form of key value pair, which is then passed to the bot"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'HashMap<String, Object> payloadData = new HashMap<>();\n//Setting Payload Data\npayloadData.put("some-key","some-value");\nymChat.config.payload = payloadData;\n')),Object(o.b)("h4",{id:"history"},"History"),Object(o.b)("p",null,"Chat history can be enabled by setting the ",Object(o.b)("inlineCode",{parentName:"p"},"enableHistory")," flag present in YMConfig. Default value is ",Object(o.b)("inlineCode",{parentName:"p"},"false")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"ymChat.config.enableHistory = true\n")),Object(o.b)("h3",{id:"starting-the-bot"},"Starting the bot"),Object(o.b)("p",null,"Chat bot can be presented by calling ",Object(o.b)("inlineCode",{parentName:"p"},"startChatbot()")," and passing your Activity context as an argument"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"ymChat.startChatbot(this);\n")),Object(o.b)("h3",{id:"close-bot"},"Close bot"),Object(o.b)("p",null,"Bot can be programatically closed using ",Object(o.b)("inlineCode",{parentName:"p"},"closeBot()")," function"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"ymChat.closeBot();\n")),Object(o.b)("h3",{id:"events-from-bot"},"Events from bot"),Object(o.b)("p",null,"Events from bot can be handled using event Listeners.  Simply define the ",Object(o.b)("inlineCode",{parentName:"p"},"onSuccess")," method of ",Object(o.b)("inlineCode",{parentName:"p"},"onEventFromBot")," listener."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'ymChat.onEventFromBot(botEvent -> {\n    switch (botEvent.getCode()){\n    case "event-name": break;\n    }\n});\n')),Object(o.b)("h2",{id:"important"},"Important"),Object(o.b)("p",null,"If facing problem in release build, add the following configuration in the app's proguard-rules.pro file."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"-keep public class com.example.ymwebview.** {\n   *;\n}\n")))}b.isMDXComponent=!0},226:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var b=o.a.createContext({}),s=function(e){var t=o.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return o.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=s(n),u=a,m=p["".concat(i,".").concat(u)]||p[u]||d[u]||r;return n?o.a.createElement(m,c(c({ref:t},b),{},{components:n})):o.a.createElement(m,c({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var b=2;b<r;b++)i[b]=n[b];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);