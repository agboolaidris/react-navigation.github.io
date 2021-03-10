(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{139:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return l}));var r=t(1),a=t(6),i=(t(0),t(510)),o={id:"react-native-screens",title:"Optimize memory usage and performance",sidebar_label:"Optimize memory usage and performance"},c={unversionedId:"react-native-screens",id:"version-6.x/react-native-screens",isDocsHomePage:!1,title:"Optimize memory usage and performance",description:"Prior to 2.14.0, all screens are essentially regular native View in each platform, which will increase memory usage and make the render tree deep in a heavy-stacked application. This is one of the reason your app is slowing down comparing to native navigation solution.",source:"@site/versioned_docs/version-6.x/react-native-screens.md",slug:"/react-native-screens",permalink:"/docs/6.x/react-native-screens",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-6.x/react-native-screens.md",version:"6.x",sidebar_label:"Optimize memory usage and performance",sidebar:"version-6.x/docs",previous:{title:"Localization",permalink:"/docs/6.x/localization"},next:{title:"Upgrading from 5.x",permalink:"/docs/6.x/upgrading-from-5.x"}},s=[{value:"Setup when you are using Expo",id:"setup-when-you-are-using-expo",children:[]},{value:"Setup in normal react-native applications",id:"setup-in-normal-react-native-applications",children:[]}],p={rightToc:s};function l(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Prior to ",Object(i.b)("inlineCode",{parentName:"p"},"2.14.0"),", all screens are essentially regular native ",Object(i.b)("inlineCode",{parentName:"p"},"View")," in each platform, which will increase memory usage and make the render tree deep in a heavy-stacked application. This is one of the reason your app is slowing down comparing to native navigation solution."),Object(i.b)("p",null,"With the advent of ",Object(i.b)("inlineCode",{parentName:"p"},"react-native-screens"),", the native screen optimization is brought possible to React Navigation by bringing the native navigation component (",Object(i.b)("inlineCode",{parentName:"p"},"UIViewController")," for iOS, and ",Object(i.b)("inlineCode",{parentName:"p"},"FragmentActivity")," for Android). By using ",Object(i.b)("inlineCode",{parentName:"p"},"react-native-screens"),", it is possible for each native platform to optimize the memory usage for screens that are under the view stack and also simplify the native node hierarchy. You can take a look at the comparison ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://twitter.com/janicduplessis/status/1039979591815897088?s=21"}),"here")," to see the performance gain."),Object(i.b)("h2",{id:"setup-when-you-are-using-expo"},"Setup when you are using Expo"),Object(i.b)("p",null,"By default expo already included ",Object(i.b)("inlineCode",{parentName:"p"},"react-native-screens"),", all you need to do is pasting the following snippet before your navigation stacks are rendered (typically in an ",Object(i.b)("inlineCode",{parentName:"p"},"index.js")," or ",Object(i.b)("inlineCode",{parentName:"p"},"App.js")," file):"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"// Before rendering any navigation stack\nimport { enableScreens } from 'react-native-screens';\nenableScreens();\n")),Object(i.b)("h2",{id:"setup-in-normal-react-native-applications"},"Setup in normal react-native applications"),Object(i.b)("p",null,"You will need to follow the installation instruction from ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/software-mansion/react-native-screens"}),"react-native-screens")," first. After that, you can import the library like mentioned above and enjoy the optimization."))}l.isMDXComponent=!0},510:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return b}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),l=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=l(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(t),d=r,b=u["".concat(o,".").concat(d)]||u[d]||m[d]||i;return t?a.a.createElement(b,c(c({ref:n},p),{},{components:t})):a.a.createElement(b,c({ref:n},p))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<i;p++)o[p]=t[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);