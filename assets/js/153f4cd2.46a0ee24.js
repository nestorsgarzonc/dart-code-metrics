"use strict";(self.webpackChunkdart_code_metrics_website=self.webpackChunkdart_code_metrics_website||[]).push([[4029],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),p=l(n),m=a,b=p["".concat(c,".").concat(m)]||p[m]||u[m]||o;return n?r.createElement(b,i(i({ref:t},s),{},{components:n})):r.createElement(b,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var d={};for(var c in t)hasOwnProperty.call(t,c)&&(d[c]=t[c]);d.originalType=e,d.mdxType="string"==typeof e?e:a,i[1]=d;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9729:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(7294),a=n(5321);function o(e){let{version:t,severity:n,hasConfig:o,hasFix:i,isDeprecated:d}=e;return r.createElement("div",{className:"single-rule-info"},r.createElement(a.Z,{version:t,severity:n,hasConfig:o,hasFix:i,isDeprecated:d}))}},5321:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(7294);function a(e){let{hasConfig:t,hasFix:n,isDeprecated:a}=e;return r.createElement("div",{className:"rule-options"},t&&r.createElement("span",{title:"Configurable"},"\u2699\ufe0f"),n&&r.createElement("span",{title:"Has auto-fix"},"\ud83d\udee0"),a&&r.createElement("span",{title:"Deprecated"},"\u26a0\ufe0f"))}function o(e){let{severity:t,version:n,hasConfig:o,hasFix:i,isDeprecated:d}=e;const c=null==t?void 0:t.toLowerCase();return r.createElement("div",{className:"rule-additional-info"},r.createElement("div",null,r.createElement("span",{className:"added-in-label"},"added in:")," ",n),r.createElement("div",{className:`rule-severity ${c}`},c),r.createElement(a,{hasConfig:o,hasFix:i,isDeprecated:d}))}},2164:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=n(7462),a=(n(7294),n(3905)),o=n(9729);const i={},d=void 0,c={unversionedId:"rules/flutter/consistent-update-render-object",id:"rules/flutter/consistent-update-render-object",title:"consistent-update-render-object",description:"Warns when an updateRenderObject method is absent or doesn't update all fields set in createRenderObject.",source:"@site/docs/rules/flutter/consistent-update-render-object.mdx",sourceDirName:"rules/flutter",slug:"/rules/flutter/consistent-update-render-object",permalink:"/docs/rules/flutter/consistent-update-render-object",draft:!1,editUrl:"https://github.com/dart-code-checker/dart-code-metrics/tree/master/website/docs/rules/flutter/consistent-update-render-object.mdx",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"check-for-equals-in-render-object-setters",permalink:"/docs/rules/flutter/check-for-equals-in-render-object-setters"},next:{title:"prefer-const-border-radius",permalink:"/docs/rules/flutter/prefer-const-border-radius"}},l={},s=[{value:"Example",id:"example",level:3}],u={toc:s};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{version:"4.19.0",severity:"warning",mdxType:"RuleDetails"}),(0,a.kt)("p",null,"Warns when an ",(0,a.kt)("inlineCode",{parentName:"p"},"updateRenderObject")," method is absent or doesn't update all fields set in ",(0,a.kt)("inlineCode",{parentName:"p"},"createRenderObject"),"."),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u274c Bad:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"// LINT\nclass ColorFiltered extends SingleChildRenderObjectWidget {\n  const ColorFiltered({required this.value});\n\n  final int value;\n\n  @override\n  RenderObject createRenderObject(BuildContext context) =>\n      _ColorFilterRenderObject(colorFilter);\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u2705 Good:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"class ColorFiltered extends SingleChildRenderObjectWidget {\n  const ColorFiltered({required this.value});\n\n  final int value;\n\n  @override\n  RenderObject createRenderObject(BuildContext context) =>\n      _ColorFilterRenderObject(colorFilter);\n\n  @override\n  void updateRenderObject(BuildContext context, RenderObject renderObject) {\n    (renderObject as _ColorFilterRenderObject).value = value;\n  }\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u274c Bad:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"class _MenuItem extends SingleChildRenderObjectWidget {\n  const _MenuItem({required this.value});\n\n  final bool value;\n\n  @override\n  RenderObject createRenderObject(BuildContext context) {\n    return _RenderMenuItem(value);\n  }\n\n  @override\n  // LINT\n  void updateRenderObject(BuildContext context, _RenderMenuItem renderObject) {}\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u2705 Good:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"class _MenuItem extends SingleChildRenderObjectWidget {\n  const _MenuItem({required this.value});\n\n  final bool value;\n\n  @override\n  RenderObject createRenderObject(BuildContext context) {\n    return _RenderMenuItem(value);\n  }\n\n  @override\n  void updateRenderObject(BuildContext context, _RenderMenuItem renderObject) {\n    renderObject.value = value;\n  }\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u274c Bad:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"class _Decorator extends RenderObjectWidget {\n  const _Decorator({\n    required this.textDirection,\n    required this.isFocused,\n    required this.expands,\n  });\n\n  final TextDirection textDirection;\n  final bool isFocused;\n  final bool expands;\n\n  @override\n  _RenderDecoration createRenderObject(BuildContext context) {\n    return _RenderDecoration(\n      textDirection: textDirection,\n      isFocused: isFocused,\n      expands: expands,\n    );\n  }\n\n  @override\n  // LINT\n  void updateRenderObject(\n    BuildContext context,\n    _RenderDecoration renderObject,\n  ) {\n    renderObject\n      ..expands = expands\n      ..textDirection = textDirection;\n  }\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u2705 Good:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"class _Decorator extends RenderObjectWidget {\n  const _Decorator({\n    required this.textDirection,\n    required this.isFocused,\n    required this.expands,\n  });\n\n  final TextDirection textDirection;\n  final bool isFocused;\n  final bool expands;\n\n  @override\n  _RenderDecoration createRenderObject(BuildContext context) {\n    return _RenderDecoration(\n      textDirection: textDirection,\n      isFocused: isFocused,\n      expands: expands,\n    );\n  }\n\n  @override\n  void updateRenderObject(\n    BuildContext context,\n    _RenderDecoration renderObject,\n  ) {\n    renderObject\n      ..expands = expands\n      ..isFocused = isFocused\n      ..textDirection = textDirection;\n  }\n}\n")))}p.isMDXComponent=!0}}]);