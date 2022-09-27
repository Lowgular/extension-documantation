"use strict";(self.webpackChunkextension_documentation=self.webpackChunkextension_documentation||[]).push([[246],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=i,f=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return n?a.createElement(f,r(r({ref:t},p),{},{components:n})):a.createElement(f,r({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var d=2;d<o;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8583:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=n(7462),i=(n(7294),n(3905));const o={sidebar_position:2},r="Entities",l={unversionedId:"coding-standards/entities",id:"coding-standards/entities",title:"Entities",description:"Entity is a fundamental part of coding-standards.json. In entities key you can define entities.",source:"@site/docs/coding-standards/entities.md",sourceDirName:"coding-standards",slug:"/coding-standards/entities",permalink:"/extension-documentation/docs/coding-standards/entities",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Coding Standards",permalink:"/extension-documentation/docs/coding-standards/"},next:{title:"Entity Relations",permalink:"/extension-documentation/docs/coding-standards/entities-relations"}},s={},d=[{value:"Id",id:"id",level:3},{value:"Suffix",id:"suffix",level:3},{value:"Folder",id:"folder",level:3},{value:"Type",id:"type",level:3},{value:"ANGULAR_COMPONENT",id:"angular_component",level:4},{value:"Config",id:"config",level:5},{value:"ANGULAR_SERVICE",id:"angular_service",level:4},{value:"ANGULAR_DIRECTIVE",id:"angular_directive",level:4},{value:"ANGULAR_RESOLVER",id:"angular_resolver",level:4},{value:"ANGULAR_GUARD",id:"angular_guard",level:4},{value:"DATA_STRUCTURE",id:"data_structure",level:4},{value:"OBJECT",id:"object",level:4},{value:"ABSTRACTION",id:"abstraction",level:4},{value:"Inside of",id:"inside-of",level:3}],p={toc:d};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"entities"},"Entities"),(0,i.kt)("p",null,"Entity is a fundamental part of ",(0,i.kt)("inlineCode",{parentName:"p"},"coding-standards.json"),". In ",(0,i.kt)("inlineCode",{parentName:"p"},"entities")," key you can define entities."),(0,i.kt)("p",null,"These will appear in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Create New...")," list."),(0,i.kt)("p",null,"Default config:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "entities": {\n    "component": {\n      "id": "component",\n      "type": "ANGULAR_COMPONENT",\n      "suffix": "Component",\n      "folder": "components/$name$",\n      "insideOf": "App",\n      "config": {\n        "stylesExtension": "none",\n        "viewEncapsulation": "None",\n        "selector": "generated",\n        "changeDetectionStrategy": "OnPush"\n      }\n    },\n    "model": {\n      "id": "model",\n      "type": "DATA_STRUCTURE",\n      "suffix": "Model",\n      "folder": "models",\n      "insideOf": "App"\n    },\n    "service": {\n      "id": "service",\n      "type": "SERVICE",\n      "suffix": "Service",\n      "folder": "services",\n      "insideOf": "App"\n    }\n  }\n}\n\n')),(0,i.kt)("h3",{id:"id"},"Id"),(0,i.kt)("p",null,"This is how Lowgular distinguishes between Entities configured."),(0,i.kt)("p",null,"The entities key is an object and the key of this object ",(0,i.kt)("strong",{parentName:"p"},"must")," be the same as ",(0,i.kt)("strong",{parentName:"p"},"id")," inside the config."),(0,i.kt)("h3",{id:"suffix"},"Suffix"),(0,i.kt)("p",null,"Suffix is uses to append a suffix to entitiy names as well as to created files."),(0,i.kt)("p",null,"E.g. If you want to create a service with a suffix of ",(0,i.kt)("inlineCode",{parentName:"p"},"State")," and name ",(0,i.kt)("inlineCode",{parentName:"p"},"Product"),", it will create a class called ",(0,i.kt)("inlineCode",{parentName:"p"},"ProductState")," inside of file ",(0,i.kt)("inlineCode",{parentName:"p"},"product.state.ts")),(0,i.kt)("h3",{id:"folder"},"Folder"),(0,i.kt)("p",null,"You may specify where you want to generate your entities."),(0,i.kt)("p",null,"The folder path is taken from a root folder of your project, so it does not matter on which exact folder you click, it will always start from the project root."),(0,i.kt)("p",null,"E.G. if I have an ",(0,i.kt)("inlineCode",{parentName:"p"},"App")," project inside of ",(0,i.kt)("inlineCode",{parentName:"p"},"src/app"),", and a folder setup of ",(0,i.kt)("inlineCode",{parentName:"p"},"services")," then it will create my files inside of ",(0,i.kt)("inlineCode",{parentName:"p"},"src/app/services")," folder."),(0,i.kt)("p",null,"Additionally you may use context values for example when you create an entity, you need to give it a name. This will allow you to use variable inside of your folder path."),(0,i.kt)("p",null,"E.G. If I call give an entity name: ",(0,i.kt)("inlineCode",{parentName:"p"},"TestMe")," and a folder setup: ",(0,i.kt)("inlineCode",{parentName:"p"},"entities/$name$/something"),", then it will dasherize the entity name and replace a token ",(0,i.kt)("inlineCode",{parentName:"p"},"$name$")," with the value."),(0,i.kt)("p",null,"Therefore it will create entity files inside of ",(0,i.kt)("inlineCode",{parentName:"p"},"entities/test-me/something"),"."),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("p",null,"There are a few types that are used. Play around with them and be creative. Your imagination is the only limit!"),(0,i.kt)("h4",{id:"angular_component"},"ANGULAR_COMPONENT"),(0,i.kt)("p",null,"This will create a class with @Component decorator and a ",(0,i.kt)("a",{parentName:"p",href:"/docs/coding-standards/modules#single-angular-modules"},"component module")," inside of ",(0,i.kt)("inlineCode",{parentName:"p"},"component-name.component-module.ts")," in a same folder."),(0,i.kt)("h5",{id:"config"},"Config"),(0,i.kt)("p",null,"Angular component can take additional config.\nIt is designed so you can distinguish between different types of components."),(0,i.kt)("p",null,"It is quite common to create ",(0,i.kt)("inlineCode",{parentName:"p"},"Smart Components")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Presentation Components")," differently."),(0,i.kt)("p",null,"It is also quite common to create a routable components e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"Pages")," differently too."),(0,i.kt)("p",null,"The properties and their allowed values are:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"stylesExtension"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"none")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"scss"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"viewEncapsulation"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"None")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Default")," (Mind the pascal case here!)\n",(0,i.kt)("inlineCode",{parentName:"p"},"selector"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"generated")," (it will dasherize a component name and prefix it with prefix value from angular configuration) or ",(0,i.kt)("inlineCode",{parentName:"p"},"none")," (will not create a selector - especially useful for routable components)\n",(0,i.kt)("inlineCode",{parentName:"p"},"changeDetectionStrategy"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"OnPush")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Default")," (mind the pascal case here!)"),(0,i.kt)("h4",{id:"angular_service"},"ANGULAR_SERVICE"),(0,i.kt)("p",null,"This will create a class with @Injectable decorator and a ",(0,i.kt)("a",{parentName:"p",href:"/docs/coding-standards/modules#single-angular-modules"},"service module")," inside of ",(0,i.kt)("inlineCode",{parentName:"p"},"service-name.$SUFFIX$-module.ts")," in a same folder."),(0,i.kt)("h4",{id:"angular_directive"},"ANGULAR_DIRECTIVE"),(0,i.kt)("p",null,"This will create a class with @Directive decorator and a ",(0,i.kt)("a",{parentName:"p",href:"/docs/coding-standards/modules#single-angular-modules"},"directive module")," inside of ",(0,i.kt)("inlineCode",{parentName:"p"},"directive-name.$SUFFIX$-module.ts")," in a same folder."),(0,i.kt)("h4",{id:"angular_resolver"},"ANGULAR_RESOLVER"),(0,i.kt)("p",null,"This will create a class with @Injectable decorator and a ",(0,i.kt)("a",{parentName:"p",href:"/docs/coding-standards/modules#single-angular-modules"},"resolver module")," inside of ",(0,i.kt)("inlineCode",{parentName:"p"},"resolver-name.$SUFFIX$-module.ts")," in a same folder."),(0,i.kt)("p",null,"It will implement Resolve<void",">"," interface"),(0,i.kt)("h4",{id:"angular_guard"},"ANGULAR_GUARD"),(0,i.kt)("p",null,"This will create a class with @Injectable decorator and a ",(0,i.kt)("a",{parentName:"p",href:"/docs/coding-standards/modules#single-angular-modules"},"guard module")," inside of ",(0,i.kt)("inlineCode",{parentName:"p"},"service-name.$SUFFIX$-module.ts")," in a same folder."),(0,i.kt)("p",null,"It will implement CanActivate interface"),(0,i.kt)("h4",{id:"data_structure"},"DATA_STRUCTURE"),(0,i.kt)("p",null,"This will create an interface with readonly properties."),(0,i.kt)("p",null,"Data Structure is designed to transfer data and not to contain any logic, so do not create any methods on it."),(0,i.kt)("p",null,"There will be no module created since it is an interface."),(0,i.kt)("h4",{id:"object"},"OBJECT"),(0,i.kt)("p",null,"This will create a class with constructor readonly public parameters."),(0,i.kt)("p",null,"It is similar to the Data Structure, however the difference is encapsulation."),(0,i.kt)("p",null,"It means that you should expose some properties, and all the setters or a state changing methods should be void in order to prevent state changes from the outside."),(0,i.kt)("p",null,"They may change state or contain specific logic, but it should be done inside of the class via void methods."),(0,i.kt)("p",null,"Similarily to Data Structures, Objects can be used to transfer data between the layers."),(0,i.kt)("p",null,"There will be no module createdsince it does not plug into Angular Dependency Injection system."),(0,i.kt)("h4",{id:"abstraction"},"ABSTRACTION"),(0,i.kt)("p",null,"This will create an interface and an Injection Token."),(0,i.kt)("p",null,"The abstraction is used to de-couple the layers and support Dependency Inversion Principle form SOLID."),(0,i.kt)("p",null,"It should contain at least 1 method."),(0,i.kt)("p",null,"There will be no module created because it is an interface, however it will be used by a connected ",(0,i.kt)("a",{parentName:"p",href:"/docs/coding-standards/modules#single-angular-modules"},"service module")," to provide injection tokens in implementing service class."),(0,i.kt)("h3",{id:"inside-of"},"Inside of"),(0,i.kt)("p",null,"Entities are always created in projects. By default Angular CLI provides you with a single app, however it does not have to be this way, you may create ",(0,i.kt)("a",{parentName:"p",href:"/docs/features/library"},"Libraries")," which is a specific project type."),(0,i.kt)("p",null,"By default Lowgular will create all entities inside of ",(0,i.kt)("strong",{parentName:"p"},"App"),", however you may alter the configuration and use ",(0,i.kt)("strong",{parentName:"p"},"Lib")," instead."))}c.isMDXComponent=!0}}]);