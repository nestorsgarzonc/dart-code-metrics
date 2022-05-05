"use strict";(self.webpackChunkdart_code_metrics_website=self.webpackChunkdart_code_metrics_website||[]).push([[1965],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return g}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),d=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(n),g=i,m=p["".concat(u,".").concat(g)]||p[g]||c[g]||o;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var d=2;d<o;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6431:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return c}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],l={},u="Avoid returning widgets",d={unversionedId:"rules/flutter/avoid-returning-widgets",id:"rules/flutter/avoid-returning-widgets",title:"Avoid returning widgets",description:"Configurable",source:"@site/docs/rules/flutter/avoid-returning-widgets.md",sourceDirName:"rules/flutter",slug:"/rules/flutter/avoid-returning-widgets",permalink:"/docs/rules/flutter/avoid-returning-widgets",draft:!1,editUrl:"https://github.com/dart-code-checker/dart-code-metrics/tree/master/website/docs/rules/flutter/avoid-returning-widgets.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Avoid using Border.all constructor",permalink:"/docs/rules/flutter/avoid-border-all"},next:{title:"Avoid unnecessary setState",permalink:"/docs/rules/flutter/avoid-unnecessary-setstate"}},s={},c=[{value:"Rule id",id:"rule-id",level:2},{value:"Severity",id:"severity",level:2},{value:"Description",id:"description",level:2},{value:"Config example",id:"config-example",level:3},{value:"Example",id:"example",level:3}],p={toc:c};function g(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"avoid-returning-widgets"},"Avoid returning widgets"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/-configurable-informational",alt:"Configurable"})),(0,o.kt)("h2",{id:"rule-id"},"Rule id"),(0,o.kt)("p",null,"avoid-returning-widgets"),(0,o.kt)("h2",{id:"severity"},"Severity"),(0,o.kt)("p",null,"Warning"),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"Warns when a method, function or getter returns a Widget or subclass of a Widget."),(0,o.kt)("p",null,"The following patterns will not trigger the rule:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Widget ",(0,o.kt)("inlineCode",{parentName:"li"},"build")," method overrides."),(0,o.kt)("li",{parentName:"ul"},"Class method that is passed to a builder."),(0,o.kt)("li",{parentName:"ul"},"Functions with ",(0,o.kt)("a",{parentName:"li",href:"https://pub.dev/packages/functional_widget"},"functional_widget")," package annotations.")),(0,o.kt)("p",null,"Extracting widgets to a method is considered as a Flutter anti-pattern, because when Flutter rebuilds widget tree, it calls the function all the time, making more processor time for the operations."),(0,o.kt)("p",null,"Consider creating a separate widget instead of a function or method."),(0,o.kt)("p",null,"Additional resources:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/flutter/flutter/issues/19269"},"https://github.com/flutter/flutter/issues/19269")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://flutter.dev/docs/perf/rendering/best-practices#controlling-build-cost"},"https://flutter.dev/docs/perf/rendering/best-practices#controlling-build-cost")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.reddit.com/r/FlutterDev/comments/avhvco/extracting_widgets_to_a_function_is_not_an/"},"https://www.reddit.com/r/FlutterDev/comments/avhvco/extracting_widgets_to_a_function_is_not_an/")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://medium.com/flutter-community/splitting-widgets-to-methods-is-a-performance-antipattern-16aa3fb4026c"},"https://medium.com/flutter-community/splitting-widgets-to-methods-is-a-performance-antipattern-16aa3fb4026c"))),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"ignored-names")," configuration, if you want to ignore a function or method name."),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"ignored-annotations")," configuration, if you want to override default ignored annotation list."),(0,o.kt)("p",null,"For example:"),(0,o.kt)("h3",{id:"config-example"},"Config example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"dart_code_metrics:\n  ...\n  rules:\n    ...\n    - avoid-returning-widgets:\n        ignored-names:\n          - testFunction\n        ignored-annotations:\n          - allowedAnnotation\n")),(0,o.kt)("p",null,"will ignore all functions named ",(0,o.kt)("inlineCode",{parentName:"p"},"testFunction")," and all functions having ",(0,o.kt)("inlineCode",{parentName:"p"},"allowedAnnotation")," annotation."),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("p",null,"Bad:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"class MyWidget extends StatelessWidget {\n  const MyWidget();\n\n  // LINT\n  Widget _getWidget() => Container();\n\n  Widget _buildShinyWidget() {\n    return Container(\n      child: Column(\n        children: [\n          Text('Hello'),\n          ...\n        ],\n      ),\n    );\n  }\n\n  @override\n  Widget build(BuildContext context) {\n    return Row(\n      children: [\n        Text('Text!'),\n        ...\n        _buildShinyWidget(), // LINT\n      ],\n    );\n  }\n}\n")),(0,o.kt)("p",null,"Good:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"class MyWidget extends StatelessWidget {\n  const MyWidget();\n\n  @override\n  Widget build(BuildContext context) {\n    return Row(\n      children: [\n        Text('Text!'),\n        ...\n        const _MyShinyWidget(),\n      ],\n    );\n  }\n}\n\nclass _MyShinyWidget extends StatelessWidget {\n  const _MyShinyWidget();\n\n  @override\n  Widget build(BuildContext context) {\n    return Container(\n      child: Column(\n        children: [\n          Text('Hello'),\n          ...\n        ],\n      ),\n    );\n  }\n}\n")),(0,o.kt)("p",null,"Good:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"class MyWidget extends StatelessWidget {\n  Widget _buildMyWidget(BuildContext context) {\n    return Container();\n  }\n\n  @override\n  Widget build(BuildContext context) {\n    return Builder(\n      builder: _buildMyWidget,\n    );\n  }\n}\n")))}g.isMDXComponent=!0}}]);