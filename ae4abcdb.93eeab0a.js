(window.webpackJsonp=window.webpackJsonp||[]).push([[314],{372:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return d}));var o=n(1),r=n(6),a=(n(0),n(510)),i=n(514),c=n(515),l={id:"devtools",title:"Developer tools",sidebar_label:"Developer tools"},s={unversionedId:"devtools",id:"version-6.x/devtools",isDocsHomePage:!1,title:"Developer tools",description:"Developer tools to make debugging easier when using React Navigation.",source:"@site/versioned_docs/version-6.x/devtools.md",slug:"/devtools",permalink:"/docs/6.x/devtools",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-6.x/devtools.md",version:"6.x",sidebar_label:"Developer tools",sidebar:"version-6.x/docs",previous:{title:"Link",permalink:"/docs/6.x/link"},next:{title:"Elements Library",permalink:"/docs/6.x/elements"}},u=[{value:"API Definition",id:"api-definition",children:[{value:"<code>useReduxDevToolsExtension</code>",id:"usereduxdevtoolsextension",children:[]}]}],p={rightToc:u};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Developer tools to make debugging easier when using React Navigation."),Object(a.b)("p",null,"To configure the developer tools, install ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/react-navigation/react-navigation/tree/master/packages/devtools"}),Object(a.b)("inlineCode",{parentName:"a"},"@react-navigation/devtools")),":"),Object(a.b)(i.a,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},Object(a.b)(c.a,{value:"npm",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"npm install @react-navigation/devtools\n"))),Object(a.b)(c.a,{value:"yarn",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"yarn add @react-navigation/devtools\n")))),Object(a.b)("h2",{id:"api-definition"},"API Definition"),Object(a.b)("p",null,"The package exposes the following APIs:"),Object(a.b)("h3",{id:"usereduxdevtoolsextension"},Object(a.b)("inlineCode",{parentName:"h3"},"useReduxDevToolsExtension")),Object(a.b)("p",null,"This hook provides integration with ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/zalmoxisus/redux-devtools-extension"}),"Redux DevTools Extension"),".It also works with ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/jhen0409/react-native-debugger"}),Object(a.b)("inlineCode",{parentName:"a"},"React Native Debugger app"))," which includes this extension."),Object(a.b)("p",null,"The hook accepts a ",Object(a.b)("inlineCode",{parentName:"p"},"ref")," to the ",Object(a.b)("inlineCode",{parentName:"p"},"NavigationContainer")," as its argument."),Object(a.b)("p",null,"Usage:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"import * as React from 'react';\nimport { NavigationContainer } from '@react-navigation/native';\nimport { useReduxDevToolsExtension } from '@react-navigation/devtools';\n\nexport default function App() {\n  const navigationRef = React.useRef();\n\n  useReduxDevToolsExtension(navigationRef);\n\n  return (\n    <NavigationContainer ref={navigationRef}>{/* ... */}</NavigationContainer>\n  );\n}\n")),Object(a.b)("p",null,"The hook only works during development and is disabled in production. You don't need to do anything special to remove it from the production build."))}d.isMDXComponent=!0},510:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),b=o,f=p["".concat(i,".").concat(b)]||p[b]||d[b]||a;return n?r.a.createElement(f,c(c({ref:t},s),{},{components:n})):r.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},511:function(e,t,n){"use strict";function o(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=o(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=o(e))&&(r&&(r+=" "),r+=t);return r}},512:function(e,t,n){"use strict";var o=n(0),r=n(513);t.a=function(){var e=Object(o.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},513:function(e,t,n){"use strict";var o=n(0),r=Object(o.createContext)(void 0);t.a=r},514:function(e,t,n){"use strict";var o=n(0),r=n.n(o),a=n(512),i=n(511),c=n(49),l=n.n(c),s=37,u=39;t.a=function(e){var t=e.block,n=e.children,c=e.defaultValue,p=e.values,d=e.groupId,b=e.className,f=Object(a.a)(),v=f.tabGroupChoices,m=f.setTabGroupChoices,g=Object(o.useState)(c),O=g[0],h=g[1],j=Object(o.useState)(!1),y=j[0],x=j[1];if(null!=d){var w=v[d];null!=w&&w!==O&&p.some((function(e){return e.value===w}))&&h(w)}var N=function(e){h(e),null!=d&&m(d,e)},E=[],T=function(e){e.metaKey||e.altKey||e.ctrlKey||x(!0)},k=function(){x(!1)};return Object(o.useEffect)((function(){return window.addEventListener("keydown",T),window.addEventListener("mousedown",k),function(){window.removeEventListener("keydown",T),window.removeEventListener("mousedown",k)}}),[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t},b)},p.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(i.a)("tabs__item",l.a.tabItem,{"tabs__item--active":O===t}),style:y?{}:{outline:"none"},key:t,ref:function(e){return E.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(E,e.target,e),T(e)},onFocus:function(){return N(t)},onClick:function(){N(t),x(!1)},onPointerDown:function(){return x(!1)}},n)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},o.Children.toArray(n).filter((function(e){return e.props.value===O}))[0]))}},515:function(e,t,n){"use strict";var o=n(0),r=n.n(o);t.a=function(e){return r.a.createElement("div",null,e.children)}}}]);