"use strict";(self.webpackChunkdart_code_metrics_website=self.webpackChunkdart_code_metrics_website||[]).push([[4923],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=o,f=u["".concat(c,".").concat(d)]||u[d]||p[d]||a;return n?r.createElement(f,i(i({ref:t},m),{},{components:n})):r.createElement(f,i({ref:t},m))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9729:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(7294),o=n(5321);function a(e){let{version:t,severity:n,hasConfig:a,hasFix:i,isDeprecated:s}=e;return r.createElement("div",{className:"single-rule-info"},r.createElement(o.Z,{version:t,severity:n,hasConfig:a,hasFix:i,isDeprecated:s}))}},5321:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(7294);function o(e){let{hasConfig:t,hasFix:n,isDeprecated:o}=e;return r.createElement("div",{className:"rule-options"},t&&r.createElement("span",{title:"Configurable"},"\u2699\ufe0f"),n&&r.createElement("span",{title:"Has auto-fix"},"\ud83d\udee0"),o&&r.createElement("span",{title:"Deprecated"},"\u26a0\ufe0f"))}function a(e){let{severity:t,version:n,hasConfig:a,hasFix:i,isDeprecated:s}=e;const c=null==t?void 0:t.toLowerCase();return r.createElement("div",{className:"rule-additional-info"},r.createElement("div",null,r.createElement("span",{className:"added-in-label"},"added in:")," ",n),r.createElement("div",{className:`rule-severity ${c}`},c),r.createElement(o,{hasConfig:a,hasFix:i,isDeprecated:s}))}},6400:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>m});var r=n(7462),o=(n(7294),n(3905)),a=n(9729);const i={},s=void 0,c={unversionedId:"rules/common/format-comment",id:"rules/common/format-comment",title:"format-comment",description:"Prefer format comments like sentences.",source:"@site/docs/rules/common/format-comment.mdx",sourceDirName:"rules/common",slug:"/rules/common/format-comment",permalink:"/docs/rules/common/format-comment",draft:!1,editUrl:"https://github.com/dart-code-checker/dart-code-metrics/tree/master/website/docs/rules/common/format-comment.mdx",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"double-literal-format",permalink:"/docs/rules/common/double-literal-format"},next:{title:"member-ordering",permalink:"/docs/rules/common/member-ordering"}},l={},m=[{value:"\u2699\ufe0f Config example",id:"config-example",level:3},{value:"Example",id:"example",level:3}],p={toc:m};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(a.Z,{version:"4.11.0",severity:"style",hasConfig:!0,hasFix:!0,mdxType:"RuleDetails"}),(0,o.kt)("p",null,"Prefer format comments like sentences."),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"ignored-patterns")," configuration, if you want to ignore comments that match the given regular expressions."),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"only-doc-comments")," configuration, if you want to check only documentation comments (",(0,o.kt)("inlineCode",{parentName:"p"},"///"),")."),(0,o.kt)("h3",{id:"config-example"},"\u2699\ufe0f Config example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"dart_code_metrics:\n  ...\n  rules:\n    ...\n    - format-comment:\n        only-doc-comments: true\n        ignored-patterns:\n          - ^ cSpell.*  # Ignores all the comments that start with 'cSpell' (for example: '// cSpell:disable-next-line').\n")),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u274c Bad:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"// prefer format comments like sentences // LINT\nclass Test {\n  /// with start space with dot. // LINT\n  Test() {\n    // with start space with dot. // LINT\n  }\n\n  /// With start space without dot // LINT\n  function() {\n    //Without start space without dot // LINT\n  }\n}\n/* prefer format comments\nlike sentences */ // LINT\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u2705 Good:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"// Prefer format comments like sentences.\nclass Test {\n  /// With start space with dot.\n  Test() {\n    // With start space with dot.\n  }\n\n  /// With start space without dot.\n  function() {\n    // Without start space without dot.\n  }\n}\n/* Prefer format comments\nlike sentences. */\n")))}u.isMDXComponent=!0}}]);