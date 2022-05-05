"use strict";(self.webpackChunkdart_code_metrics_website=self.webpackChunkdart_code_metrics_website||[]).push([[4485],{3905:function(n,e,t){t.d(e,{Zo:function(){return u},kt:function(){return d}});var r=t(7294);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var s=r.createContext({}),c=function(n){var e=r.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):a(a({},e),n)),t},u=function(n){var e=c(n.components);return r.createElement(s.Provider,{value:e},n.children)},m={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},g=r.forwardRef((function(n,e){var t=n.components,i=n.mdxType,o=n.originalType,s=n.parentName,u=l(n,["components","mdxType","originalType","parentName"]),g=c(t),d=i,p=g["".concat(s,".").concat(d)]||g[d]||m[d]||o;return t?r.createElement(p,a(a({ref:e},u),{},{components:t})):r.createElement(p,a({ref:e},u))}));function d(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var o=t.length,a=new Array(o);a[0]=g;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=n,l.mdxType="string"==typeof n?n:i,a[1]=l;for(var c=2;c<o;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},7162:function(n,e,t){t.r(e),t.d(e,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return m}});var r=t(7462),i=t(3366),o=(t(7294),t(3905)),a=["components"],l={},s="Prefer trailing comma",c={unversionedId:"rules/common/prefer-trailing-comma",id:"rules/common/prefer-trailing-comma",title:"Prefer trailing comma",description:"Configurable",source:"@site/docs/rules/common/prefer-trailing-comma.md",sourceDirName:"rules/common",slug:"/rules/common/prefer-trailing-comma",permalink:"/docs/rules/common/prefer-trailing-comma",draft:!1,editUrl:"https://github.com/dart-code-checker/dart-code-metrics/tree/master/website/docs/rules/common/prefer-trailing-comma.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Prefer moving to variable",permalink:"/docs/rules/common/prefer-moving-to-variable"},next:{title:"Tag name",permalink:"/docs/rules/common/tag-name"}},u={},m=[{value:"Rule id",id:"rule-id",level:2},{value:"Severity",id:"severity",level:2},{value:"Description",id:"description",level:2},{value:"Config example",id:"config-example",level:3},{value:"Example",id:"example",level:3}],g={toc:m};function d(n){var e=n.components,t=(0,i.Z)(n,a);return(0,o.kt)("wrapper",(0,r.Z)({},g,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"prefer-trailing-comma"},"Prefer trailing comma"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/-configurable-informational",alt:"Configurable"}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/-has%20auto--fix-success",alt:"Has auto-fix"})),(0,o.kt)("h2",{id:"rule-id"},"Rule id"),(0,o.kt)("p",null,"prefer-trailing-comma"),(0,o.kt)("h2",{id:"severity"},"Severity"),(0,o.kt)("p",null,"Warning"),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"Check for trailing comma for arguments, parameters, enum values and collections.\nBy default warns in cases when items aren't on a single line."),(0,o.kt)("p",null,"Can be configured with ",(0,o.kt)("inlineCode",{parentName:"p"},"break-on")," option, which additionally enables checks for given amount of items.\nFor example, if ",(0,o.kt)("inlineCode",{parentName:"p"},"break-on")," is equal 2, then the rule also warns for all functions with 2 or more arguments (if they have no trailing comma)."),(0,o.kt)("p",null,"Note: if the last item starts on the same line as opening bracket and ends on the same line as closing, the rule will not warn about this case."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"function('some string', () {\n  return;\n});\n")),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"break-on")," configuration, if you want to override the default behavior."),(0,o.kt)("h3",{id:"config-example"},"Config example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"dart_code_metrics:\n  ...\n  rules:\n    ...\n    - prefer-trailing-comma:\n        break-on: 2\n")),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("p",null,"Bad:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"// LINT\nvoid firstFunction(\n    String firstArgument, String secondArgument, String thirdArgument) {\n  return;\n}\n\nvoid secondFunction() {\n  firstFunction('some string', 'some other string',\n      'and another string for length exceed'); // LINT\n}\n\nvoid thirdFunction(String someLongVarName, void Function() someLongCallbackName,\n    String arg3) {} // LINT\n\nclass TestClass {\n  void firstMethod(\n      String firstArgument, String secondArgument, String thirdArgument) { // LINT\n    return;\n  }\n\n  void secondMethod() {\n    firstMethod('some string', 'some other string',\n        'and another string for length exceed'); // LINT\n\n    thirdFunction('some string', () {\n      return;\n    }, 'some other string'); // LINT\n  }\n}\n\nfinal secondArray = [\n  'some string',\n  'some other string',\n  'and another string for length exceed' // LINT\n];\n\nfinal secondSet = {\n  'some string',\n  'some other string',\n  'and another string for length exceed' // LINT\n};\n\nfinal secondMap = {\n  'some string': 'and another string for length exceed',\n  'and another string for length exceed': 'and another string for length exceed' // LINT\n};\n")),(0,o.kt)("p",null,"Good:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"void firstFunction(\n  String firstArgument,\n  String secondArgument,\n  String thirdArgument,\n) {\n  return;\n}\n\nvoid secondFunction(String arg1) {\n  firstFunction(\n    'some string',\n    'some other string',\n    'and another string for length exceed'\n  );\n}\n\nvoid thirdFunction(String arg1, void Function() callback) {}\n\nvoid forthFunction(void Function() callback) {}\n\nclass TestClass {\n  void firstMethod(\n    String firstArgument,\n    String secondArgument,\n    String thirdArgument,\n  ) {\n    return;\n  }\n\n  void secondMethod() {\n    firstMethod(\n      'some string',\n      'some other string',\n      'and another string for length exceed',\n    );\n\n    thirdFunction('', () {\n      return;\n    });\n\n    forthFunction(() {\n      return;\n    });\n  }\n}\n")),(0,o.kt)("p",null,"With given config:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"- break-on: 2\n")),(0,o.kt)("p",null,"Bad:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"void firstFunction(String arg1, String arg2,\n  String arg3) {\n  return;\n}\n\nvoid secondFunction(String arg1, String arg2, String arg3) {\n  return;\n}\n")),(0,o.kt)("p",null,"Good:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"void firstFunction(\n  String arg1,\n  String arg2,\n  String arg3,\n) {\n  return;\n}\n\nvoid secondFunction(\n  String arg1,\n  String arg2,\n  String arg3,\n) {\n  return;\n}\n\nenum FirstEnum { firstItem }\n\nconst instance = FirstClass(\n  0,\n  0,\n  0,\n);\n")))}d.isMDXComponent=!0}}]);