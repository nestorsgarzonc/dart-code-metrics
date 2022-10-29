"use strict";(self.webpackChunkdart_code_metrics_website=self.webpackChunkdart_code_metrics_website||[]).push([[2261],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),m=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=m(r),u=a,f=c["".concat(s,".").concat(u)]||c[u]||d[u]||l;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var m=2;m<l;m++)i[m]=r[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},9729:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(7294),a=r(5321);function l(e){let{version:t,severity:r,hasConfig:l,hasFix:i,isDeprecated:o}=e;return n.createElement("div",{className:"single-rule-info"},n.createElement(a.Z,{version:t,severity:r,hasConfig:l,hasFix:i,isDeprecated:o}))}},5321:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(7294);function a(e){let{hasConfig:t,hasFix:r,isDeprecated:a}=e;return n.createElement("div",{className:"rule-options"},t&&n.createElement("span",{title:"Configurable"},"\u2699\ufe0f"),r&&n.createElement("span",{title:"Has auto-fix"},"\ud83d\udee0"),a&&n.createElement("span",{title:"Deprecated"},"\u26a0\ufe0f"))}function l(e){let{severity:t,version:r,hasConfig:l,hasFix:i,isDeprecated:o}=e;const s=null==t?void 0:t.toLowerCase();return n.createElement("div",{className:"rule-additional-info"},n.createElement("div",null,n.createElement("span",{className:"added-in-label"},"added in:")," ",r),n.createElement("div",{className:`rule-severity ${s}`},s),n.createElement(a,{hasConfig:l,hasFix:i,isDeprecated:o}))}},3323:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(7462),a=(r(7294),r(3905)),l=r(9729);const i={},o=void 0,s={unversionedId:"rules/common/member-ordering",id:"rules/common/member-ordering",title:"member-ordering",description:"Enforces extended member ordering.",source:"@site/docs/rules/common/member-ordering.mdx",sourceDirName:"rules/common",slug:"/rules/common/member-ordering",permalink:"/docs/rules/common/member-ordering",draft:!1,editUrl:"https://github.com/dart-code-checker/dart-code-metrics/tree/master/website/docs/rules/common/member-ordering.mdx",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"format-comment",permalink:"/docs/rules/common/format-comment"},next:{title:"missing-test-assertion",permalink:"/docs/rules/common/missing-test-assertion"}},m={},p=[{value:"\u2699\ufe0f Config example",id:"config-example",level:3}],d={toc:p};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(l.Z,{version:"1.8.0",severity:"style",hasConfig:!0,mdxType:"RuleDetails"}),(0,a.kt)("p",null,"Enforces extended member ordering."),(0,a.kt)("p",null,"Order for regular classes can be confugured by ",(0,a.kt)("inlineCode",{parentName:"p"},"order"),". To configure widget class members order use ",(0,a.kt)("inlineCode",{parentName:"p"},"widgets-order"),"."),(0,a.kt)("p",null,"The value for the ",(0,a.kt)("inlineCode",{parentName:"p"},"order")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"widgets-order")," entries should match the following pattern:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"< (overridden | protected)- >< (private | public)- >< static- >< late- >< (var | final | const)- >< nullable- >< named- >< factory- > (fields | getters | getters-setters | setters | constructors | methods) ")),(0,a.kt)("p",null,"where values in the ",(0,a.kt)("inlineCode",{parentName:"p"},"<>")," are optional, values in the ",(0,a.kt)("inlineCode",{parentName:"p"},"()")," are interchangeable and the last part of the pattern which represents a class member type is ",(0,a.kt)("strong",{parentName:"p"},"REQUIRED"),"."),(0,a.kt)("p",null,"You can also apply order to a separate method by listing its name like:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"build-method"),(0,a.kt)("li",{parentName:"ul"},"dispose-method"),(0,a.kt)("li",{parentName:"ul"},"init-state-method"),(0,a.kt)("li",{parentName:"ul"},"my-castom-cool-thing-method")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Not all of the pattern parts are applicable for every case, for example, ",(0,a.kt)("inlineCode",{parentName:"p"},"late-constructors")," are not expected, since they are not supported by the language itself.")),(0,a.kt)("p",null,"For example, the value for ",(0,a.kt)("inlineCode",{parentName:"p"},"order")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"widgets-order")," may be an array consisting of the following strings:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"public-late-final-fields"),(0,a.kt)("li",{parentName:"ul"},"private-late-final-fields"),(0,a.kt)("li",{parentName:"ul"},"public-nullable-fields"),(0,a.kt)("li",{parentName:"ul"},"private-nullable-fields"),(0,a.kt)("li",{parentName:"ul"},"named-constructors"),(0,a.kt)("li",{parentName:"ul"},"factory-constructors"),(0,a.kt)("li",{parentName:"ul"},"getters"),(0,a.kt)("li",{parentName:"ul"},"setters"),(0,a.kt)("li",{parentName:"ul"},"public-static-methods"),(0,a.kt)("li",{parentName:"ul"},"private-static-methods"),(0,a.kt)("li",{parentName:"ul"},"protected-methods"),(0,a.kt)("li",{parentName:"ul"},"etc.")),(0,a.kt)("p",null,"You can simply configure the rule to sort only by a type:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"fields"),(0,a.kt)("li",{parentName:"ul"},"methods"),(0,a.kt)("li",{parentName:"ul"},"setters"),(0,a.kt)("li",{parentName:"ul"},"getters (or just ",(0,a.kt)("strong",{parentName:"li"},"getters-setters")," if you don't want to separate them)"),(0,a.kt)("li",{parentName:"ul"},"constructors")),(0,a.kt)("p",null,"The default config for ",(0,a.kt)("inlineCode",{parentName:"p"},"order")," is:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"public-fields"),(0,a.kt)("li",{parentName:"ul"},"private-fields"),(0,a.kt)("li",{parentName:"ul"},"public-getters"),(0,a.kt)("li",{parentName:"ul"},"private-getters"),(0,a.kt)("li",{parentName:"ul"},"public-setters"),(0,a.kt)("li",{parentName:"ul"},"private-setters"),(0,a.kt)("li",{parentName:"ul"},"constructors"),(0,a.kt)("li",{parentName:"ul"},"public-methods"),(0,a.kt)("li",{parentName:"ul"},"private-methods")),(0,a.kt)("p",null,"The default config for ",(0,a.kt)("inlineCode",{parentName:"p"},"widgets-order")," is (",(0,a.kt)("a",{parentName:"p",href:"https://github.com/flutter/flutter/wiki/Style-guide-for-Flutter-repo#order-other-class-members-in-a-way-that-makes-sense"},"from Flutter style guide"),"):"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"constructor"),(0,a.kt)("li",{parentName:"ul"},"named-constructor"),(0,a.kt)("li",{parentName:"ul"},"const-fields"),(0,a.kt)("li",{parentName:"ul"},"static-methods"),(0,a.kt)("li",{parentName:"ul"},"final-fields"),(0,a.kt)("li",{parentName:"ul"},"init-state-method"),(0,a.kt)("li",{parentName:"ul"},"var-fields"),(0,a.kt)("li",{parentName:"ul"},"init-state-method"),(0,a.kt)("li",{parentName:"ul"},"private-methods"),(0,a.kt)("li",{parentName:"ul"},"overridden-public-methods"),(0,a.kt)("li",{parentName:"ul"},"build-method")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"alphabetize")," option will enforce that members within the same category should be alphabetically sorted by name."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"alphabetize-by-type")," option will enforce that members within the same category should be alphabetically sorted by theirs type name."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Only one alphabetize option could be applied at the same time.")),(0,a.kt)("h3",{id:"config-example"},"\u2699\ufe0f Config example"),(0,a.kt)("p",null,"With the default config:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"dart_code_metrics:\n  ...\n  rules:\n    ...\n    - member-ordering\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"OR")," with a custom one:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"dart_code_metrics:\n  ...\n  rules:\n    ...\n    - member-ordering:\n        alphabetize: true\n        order:\n          - public-fields\n          - private-fields\n          - constructors\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"OR")," Flutter specific:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"dart_code_metrics:\n  ...\n  rules:\n    ...\n    - member-ordering:\n        widgets-order:\n          - build-method\n          - init-state-method\n          - did-change-dependencies-method\n          - did-update-widget-method\n          - dispose-method\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"OR")," both custom and Flutter specific:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"dart_code_metrics:\n  ...\n  rules:\n    ...\n    - member-ordering:\n        order:\n          - public-fields\n          - private-fields\n          - constructors\n          - close-method\n          - dispose-method\n        widgets-order:\n          - constructor\n          - build-method\n          - init-state-method\n          - did-change-dependencies-method\n          - did-update-widget-method\n          - dispose-method\n")))}c.isMDXComponent=!0}}]);