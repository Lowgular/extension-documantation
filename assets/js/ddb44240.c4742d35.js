"use strict";(self.webpackChunkextension_documentation=self.webpackChunkextension_documentation||[]).push([[774],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>u});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(t),u=i,y=m["".concat(c,".").concat(u)]||m[u]||d[u]||o;return t?r.createElement(y,a(a({ref:n},p),{},{components:t})):r.createElement(y,a({ref:n},p))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2844:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=t(7462),i=(t(7294),t(3905));const o={sidebar_position:1},a="Architectures",s={unversionedId:"recipies/architectures",id:"recipies/architectures",title:"Architectures",description:"CMS: Component Model Service",source:"@site/docs/recipies/architectures.md",sourceDirName:"recipies",slug:"/recipies/architectures",permalink:"/extension-documentation/docs/recipies/architectures",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Recipies",permalink:"/extension-documentation/docs/category/recipies"},next:{title:"Starter Kits",permalink:"/extension-documentation/docs/recipies/stater-kits"}},c={},l=[{value:"CMS: Component Model Service",id:"cms-component-model-service",level:2},{value:"Basic State",id:"basic-state",level:2},{value:"CQRS: Command Query Responsibility Segregation",id:"cqrs-command-query-responsibility-segregation",level:2}],p={toc:l};function d(e){let{components:n,...o}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,o,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"architectures"},"Architectures"),(0,i.kt)("h2",{id:"cms-component-model-service"},"CMS: Component Model Service"),(0,i.kt)("p",null,"It is an architecture that is loaded by default."),(0,i.kt)("p",null,"The dependency graph:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"CMS Diagram",src:t(8207).Z,width:"864",height:"586"})),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"codings-standards.json"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "entityRelations": {\n    "component": {\n      "model": ["PROPERTY"],\n      "service": ["CONSTRUCTOR"]\n    },\n    "service": {\n      "httpClient": ["CONSTRUCTOR"],\n      "model": ["PARAMETER", "RETURN"]\n    }\n  },\n  "external": {\n    "httpClient": {\n      "type": "HttpClient",\n      "module": "@angular/common/http"\n    }\n  },\n  "entities": {\n    "component": {\n      "type": "ANGULAR_COMPONENT",\n      "folder": "components/$name$",\n      "config": {\n        "stylesExtension": "none",\n        "viewEncapsulation": "None",\n        "selector": "generated",\n        "changeDetectionStrategy": "OnPush"\n      }\n    },\n    "model": {\n      "type": "DATA_STRUCTURE"\n    },\n    "service": {\n      "type": "ANGULAR_SERVICE"\n    }\n  }\n}\n')),(0,i.kt)("h2",{id:"basic-state"},"Basic State"),(0,i.kt)("p",null,"Sometimes you want to create the application layer between your presentation and data layers."),(0,i.kt)("p",null,"This will allow you to solve reactivity issues as well as start having all the business logic and use cases in one place that can be reused for other components."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"State Diagram",src:t(7207).Z,width:"930",height:"509"})),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"codings-standards.json"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "entityRelations": {\n    "component": {\n      "state": ["CONSTRUCTOR"],\n      "model": ["PROPERTY"]\n    },\n    "state": {\n      "service": ["CONSTRUCTOR"],\n      "model": ["PARAMETER", "RETURN"]\n    },\n    "service": {\n      "httpClient": ["CONSTRUCTOR"],\n      "model": ["PARAMETER", "RETURN"]\n    }\n  },\n  "external": {\n    "httpClient": {\n      "type": "HttpClient",\n      "module": "@angular/common/http"\n    }\n  },\n  "entities": {\n    "component": {\n      "type": "ANGULAR_COMPONENT",\n      "folder": "components/$name$",\n      "config": {\n        "stylesExtension": "none",\n        "viewEncapsulation": "None",\n        "selector": "generated",\n        "changeDetectionStrategy": "OnPush"\n      }\n    },\n    "model": {\n      "type": "DATA_STRUCTURE"\n    },\n    "state": {\n      "type": "ANGULAR_SERVICE"\n    },\n    "service": {\n      "type": "ANGULAR_SERVICE"\n    }\n  }\n}\n\n')),(0,i.kt)("h2",{id:"cqrs-command-query-responsibility-segregation"},"CQRS: Command Query Responsibility Segregation"),(0,i.kt)("p",null,"Fancy something more advanced? Tired of a simple state management systems?"),(0,i.kt)("p",null,"Maybe this could be a solution to your problems."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"CQRS Diagram",src:t(57).Z,width:"790",height:"808"})),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"codings-standards.json"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "entityRelations": {\n    "page": {\n      "component": ["HTML"]\n    },\n    "component": {\n      "queryHandler": ["CONSTRUCTOR"],\n      "commandHandeler": ["CONSTRUCTOR"],\n      "query": ["PROPERTY"],\n      "command": ["PROPERTY"]\n    },\n    "queryHandler": {\n      "eventStore": ["CONSTRUCTOR"],\n      "query": ["RETURN"]\n    },\n    "commandHandeler": {\n      "service": ["CONSTRUCTOR"],\n      "eventStore": ["CONSTRUCTOR"],\n      "command": ["PARAMETER"]\n    },\n    "service": {\n      "httpClient": ["CONSTRUCTOR"],\n      "response": ["RETURN"]\n    }\n  },\n  "external": {\n    "httpClient": {\n      "type": "HttpClient",\n      "module": "@angular/common/http"\n    }\n  },\n  "entities": {\n    "component": {\n      "type": "ANGULAR_COMPONENT",\n      "folder": "presentation/components/$name$",\n      "insideOf": "Lib",\n      "config": {\n        "stylesExtension": "none",\n        "viewEncapsulation": "None",\n        "selector": "generated",\n        "changeDetectionStrategy": "OnPush"\n      }\n    },\n    "query": {\n      "type": "DATA_STRUCTURE",\n      "folder": "application/query-handlers",\n      "insideOf": "Lib"\n    },\n    "queryHandler": {\n      "type": "ANGULAR_SERVICE",\n      "folder": "application/query-handlers",\n      "insideOf": "Lib"\n    },\n    "command": {\n      "type": "DATA_STRUCTURE",\n      "folder": "application/command-handlers",\n      "insideOf": "Lib"\n    },\n    "commandHandler": {\n      "type": "ANGULAR_SERVICE",\n      "folder": "application/command-handlers",\n      "insideOf": "Lib"\n    },\n    "eventStore": {\n      "type": "ANGULAR_SERVICE",\n      "folder": "infra/events",\n      "insideOf": "Lib"\n    },\n    "service": {\n      "type": "ANGULAR_SERVICE",\n      "folder": "infra/services",\n      "insideOf": "Lib"\n    },\n    "response": {\n      "type": "DATA_STRUCTURE",\n      "folder": "infra/responses",\n      "insideOf": "Lib"\n    },\n    "page": {\n      "type": "ANGULAR_COMPONENT",\n      "insideOf": "App",\n      "config": {\n        "stylesExtension": "none",\n        "viewEncapsulation": "None",\n        "selector": "none",\n        "changeDetectionStrategy": "OnPush"\n      }\n    }\n  }\n}\n\n\n')))}d.isMDXComponent=!0},8207:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/cms-architecture-176edee10455071607481965b7b8f5f8.png"},57:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/cqrs-architecture-a50aef22b90d5a8b575d85c5619eace2.png"},7207:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/state-architecture-ff5c60a6b584c6f608d0580409765e63.png"}}]);