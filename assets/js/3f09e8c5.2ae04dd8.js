(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{194:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return d}));var n=a(3),i=a(8),r=(a(0),a(522)),o=a(526),l=a(527),b={id:"material-top-tab-navigator",title:"createMaterialTopTabNavigator",sidebar_label:"createMaterialTopTabNavigator"},c={unversionedId:"material-top-tab-navigator",id:"version-4.x/material-top-tab-navigator",isDocsHomePage:!1,title:"createMaterialTopTabNavigator",description:"A material-design themed tab bar on the top of the screen that lets you switch between different routes by tapping the route or swiping horizontally. Transitions are animated by default. Screen components for each route are mounted immediately.",source:"@site/versioned_docs/version-4.x/material-top-tab-navigator.md",slug:"/material-top-tab-navigator",permalink:"/docs/4.x/material-top-tab-navigator",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-4.x/material-top-tab-navigator.md",version:"4.x",sidebar_label:"createMaterialTopTabNavigator",sidebar:"version-4.x-docs",previous:{title:"createMaterialBottomTabNavigator",permalink:"/docs/4.x/material-bottom-tab-navigator"},next:{title:"NavigationActions reference",permalink:"/docs/4.x/navigation-actions"}},s=[{value:"API",id:"api",children:[]},{value:"RouteConfigs",id:"routeconfigs",children:[]},{value:"TabNavigatorConfig",id:"tabnavigatorconfig",children:[{value:"<code>initialRouteName</code>",id:"initialroutename",children:[]},{value:"<code>navigationOptions</code>",id:"navigationoptions",children:[]},{value:"<code>defaultNavigationOptions</code>",id:"defaultnavigationoptions",children:[]},{value:"<code>order</code>",id:"order",children:[]},{value:"<code>paths</code>",id:"paths",children:[]},{value:"<code>backBehavior</code>",id:"backbehavior",children:[]},{value:"<code>tabBarPosition</code>",id:"tabbarposition",children:[]},{value:"<code>swipeEnabled</code>",id:"swipeenabled",children:[]},{value:"<code>lazy</code>",id:"lazy",children:[]},{value:"<code>lazyPlaceholderComponent</code>",id:"lazyplaceholdercomponent",children:[]},{value:"<code>initialLayout</code>",id:"initiallayout",children:[]},{value:"<code>pagerComponent</code>",id:"pagercomponent",children:[]},{value:"<code>tabBarComponent</code>",id:"tabbarcomponent",children:[]},{value:"<code>tabBarOptions</code>",id:"tabbaroptions",children:[]}]},{value:"<code>navigationOptions</code> for screens inside of the navigator",id:"navigationoptions-for-screens-inside-of-the-navigator",children:[]}],p={toc:s};function d(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"A material-design themed tab bar on the top of the screen that lets you switch between different routes by tapping the route or swiping horizontally. Transitions are animated by default. Screen components for each route are mounted immediately."),Object(r.b)("p",null,"To use this navigator, ensure that you have ",Object(r.b)("a",{parentName:"p",href:"/docs/4.x/getting-started"},"react-navigation and its dependencies installed"),", then install ",Object(r.b)("a",{parentName:"p",href:"https://github.com/react-navigation/react-navigation/tree/4.x/packages/tabs"},Object(r.b)("inlineCode",{parentName:"a"},"react-navigation-tabs")),"."),Object(r.b)(o.a,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},Object(r.b)(l.a,{value:"npm",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"npm install react-navigation-tabs\n"))),Object(r.b)(l.a,{value:"yarn",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"yarn add react-navigation-tabs\n")))),Object(r.b)("h2",{id:"api"},"API"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"import { createMaterialTopTabNavigator } from 'react-navigation-tabs';\n\ncreateMaterialTopTabNavigator(RouteConfigs, TabNavigatorConfig);\n")),Object(r.b)("h2",{id:"routeconfigs"},"RouteConfigs"),Object(r.b)("p",null,"The route configs object is a mapping from route name to a route config."),Object(r.b)("h2",{id:"tabnavigatorconfig"},"TabNavigatorConfig"),Object(r.b)("h3",{id:"initialroutename"},Object(r.b)("inlineCode",{parentName:"h3"},"initialRouteName")),Object(r.b)("p",null,"The routeName for the initial tab route when first loading."),Object(r.b)("h3",{id:"navigationoptions"},Object(r.b)("inlineCode",{parentName:"h3"},"navigationOptions")),Object(r.b)("p",null,"Navigation options for the navigator itself, to configure a parent navigator"),Object(r.b)("h3",{id:"defaultnavigationoptions"},Object(r.b)("inlineCode",{parentName:"h3"},"defaultNavigationOptions")),Object(r.b)("p",null,"Default navigation options to use for screens"),Object(r.b)("h3",{id:"order"},Object(r.b)("inlineCode",{parentName:"h3"},"order")),Object(r.b)("p",null,"Array of routeNames which defines the order of the tabs."),Object(r.b)("h3",{id:"paths"},Object(r.b)("inlineCode",{parentName:"h3"},"paths")),Object(r.b)("p",null,"Provide a mapping of routeName to path config, which overrides the paths set in the routeConfigs."),Object(r.b)("h3",{id:"backbehavior"},Object(r.b)("inlineCode",{parentName:"h3"},"backBehavior")),Object(r.b)("p",null,"Pass ",Object(r.b)("inlineCode",{parentName:"p"},"initialRoute")," to return to initial tab, ",Object(r.b)("inlineCode",{parentName:"p"},"order")," to return to previous tab, ",Object(r.b)("inlineCode",{parentName:"p"},"history")," to return to last visited tab, or ",Object(r.b)("inlineCode",{parentName:"p"},"none"),"."),Object(r.b)("h3",{id:"tabbarposition"},Object(r.b)("inlineCode",{parentName:"h3"},"tabBarPosition")),Object(r.b)("p",null,"Position of the tab bar, can be ",Object(r.b)("inlineCode",{parentName:"p"},"'top'")," or ",Object(r.b)("inlineCode",{parentName:"p"},"'bottom'"),", default is ",Object(r.b)("inlineCode",{parentName:"p"},"top"),"."),Object(r.b)("h3",{id:"swipeenabled"},Object(r.b)("inlineCode",{parentName:"h3"},"swipeEnabled")),Object(r.b)("p",null,"Whether to allow swiping between tabs."),Object(r.b)("h3",{id:"lazy"},Object(r.b)("inlineCode",{parentName:"h3"},"lazy")),Object(r.b)("p",null,"Defaults to ",Object(r.b)("inlineCode",{parentName:"p"},"false"),". If ",Object(r.b)("inlineCode",{parentName:"p"},"true"),", tabs are rendered only when they are made active or on peek swipe. When ",Object(r.b)("inlineCode",{parentName:"p"},"false"),", all tabs are rendered immediately."),Object(r.b)("h3",{id:"lazyplaceholdercomponent"},Object(r.b)("inlineCode",{parentName:"h3"},"lazyPlaceholderComponent")),Object(r.b)("p",null,"React component to render for routes that haven't been rendered yet. Receives an object containing the route as the argument. The ",Object(r.b)("inlineCode",{parentName:"p"},"lazy")," prop also needs to be enabled."),Object(r.b)("h3",{id:"initiallayout"},Object(r.b)("inlineCode",{parentName:"h3"},"initialLayout")),Object(r.b)("p",null,"Optional object containing the initial ",Object(r.b)("inlineCode",{parentName:"p"},"height")," and ",Object(r.b)("inlineCode",{parentName:"p"},"width"),", can be passed to prevent the one frame delay in ",Object(r.b)("a",{parentName:"p",href:"https://github.com/react-native-community/react-native-tab-view#avoid-one-frame-delay"},"react-native-tab-view")," rendering."),Object(r.b)("h3",{id:"pagercomponent"},Object(r.b)("inlineCode",{parentName:"h3"},"pagerComponent")),Object(r.b)("p",null,"React component to use as the pager. The pager handles swipe gestures and page switching. By default we use ",Object(r.b)("a",{parentName:"p",href:"https://github.com/software-mansion/react-native-gesture-handler"},Object(r.b)("inlineCode",{parentName:"a"},"react-native-gesture-handler"))," for handling gestures. You can switch out the pager for a different implementation to customize the experience."),Object(r.b)("p",null,"For example, to use pager backed by the native ",Object(r.b)("inlineCode",{parentName:"p"},"ViewPager"),", you can use ",Object(r.b)("a",{parentName:"p",href:"https://github.com/software-mansion/react-native-tab-view-viewpager-adapter"},Object(r.b)("inlineCode",{parentName:"a"},"react-native-tab-view-viewpager-adapter")),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"import ViewPagerAdapter from 'react-native-tab-view-viewpager-adapter';\n\n// ...\n\nconst Tabs = createMaterialTopTabNavigator(\n  {\n    // routes\n  },\n  {\n    pagerComponent: ViewPagerAdapter,\n  }\n);\n")),Object(r.b)("h3",{id:"tabbarcomponent"},Object(r.b)("inlineCode",{parentName:"h3"},"tabBarComponent")),Object(r.b)("p",null,"Optional, override the component to use as the tab bar."),Object(r.b)("h3",{id:"tabbaroptions"},Object(r.b)("inlineCode",{parentName:"h3"},"tabBarOptions")),Object(r.b)("p",null,"An object with the following properties:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"activeTintColor")," - Label and icon color of the active tab."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"inactiveTintColor")," - Label and icon color of the inactive tab."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"showIcon")," - Whether to show icon for tab, default is false."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"showLabel")," - Whether to show label for tab, default is true."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"upperCaseLabel")," - Whether to make label uppercase, default is true."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"pressColor")," - Color for material ripple (Android >= 5.0 only)."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"pressOpacity")," - Opacity for pressed tab (iOS and Android < 5.0 only)."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"scrollEnabled")," - Whether to enable scrollable tabs."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"tabStyle")," - Style object for the tab."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"indicatorStyle")," - Style object for the tab indicator (line at the bottom of the tab)."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"labelStyle")," - Style object for the tab label."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"iconStyle")," - Style object for the tab icon."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"style")," - Style object for the tab bar."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"allowFontScaling")," - Whether label font should scale to respect Text Size accessibility settings, default is true."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"renderIndicator")," - Function which takes an object with the current route and returns a custom React Element to be used as a tab indicator.")),Object(r.b)("p",null,"These options are passed as props to the tab bar component."),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"tabBarOptions: {\n  labelStyle: {\n    fontSize: 12,\n  },\n  tabStyle: {\n    width: 100,\n  },\n  style: {\n    backgroundColor: 'blue',\n  },\n}\n")),Object(r.b)("h2",{id:"navigationoptions-for-screens-inside-of-the-navigator"},Object(r.b)("inlineCode",{parentName:"h2"},"navigationOptions")," for screens inside of the navigator"),Object(r.b)("h4",{id:"title"},Object(r.b)("inlineCode",{parentName:"h4"},"title")),Object(r.b)("p",null,"Generic title that can be used as a fallback for ",Object(r.b)("inlineCode",{parentName:"p"},"headerTitle")," and ",Object(r.b)("inlineCode",{parentName:"p"},"tabBarLabel"),"."),Object(r.b)("h4",{id:"swipeenabled-1"},Object(r.b)("inlineCode",{parentName:"h4"},"swipeEnabled")),Object(r.b)("p",null,"True or false to enable or disable swiping between tabs, if not set then defaults to TabNavigatorConfig option swipeEnabled."),Object(r.b)("h4",{id:"tabbaricon"},Object(r.b)("inlineCode",{parentName:"h4"},"tabBarIcon")),Object(r.b)("p",null,"React Element or a function that given ",Object(r.b)("inlineCode",{parentName:"p"},"{ focused: boolean, horizontal: boolean, tintColor: string }")," returns a React.Node, to display in the tab bar. ",Object(r.b)("inlineCode",{parentName:"p"},"horizontal")," is ",Object(r.b)("inlineCode",{parentName:"p"},"true")," when the device is in landscape and ",Object(r.b)("inlineCode",{parentName:"p"},"false")," when portrait. The icon is re-rendered whenever the device orientation changes."),Object(r.b)("h4",{id:"tabbarlabel"},Object(r.b)("inlineCode",{parentName:"h4"},"tabBarLabel")),Object(r.b)("p",null,"Title string of a tab displayed in the tab bar or React Element or a function that given ",Object(r.b)("inlineCode",{parentName:"p"},"{ focused: boolean, tintColor: string }")," returns a React.Node, to display in tab bar. When undefined, scene ",Object(r.b)("inlineCode",{parentName:"p"},"title")," is used. To hide, see ",Object(r.b)("inlineCode",{parentName:"p"},"tabBarOptions.showLabel")," in the previous section."),Object(r.b)("h4",{id:"tabbaraccessibilitylabel"},Object(r.b)("inlineCode",{parentName:"h4"},"tabBarAccessibilityLabel")),Object(r.b)("p",null,"Accessibility label for the tab button. This is read by the screen reader when the user taps the tab. It's recommended to set this if you don't have a label for the tab."),Object(r.b)("h4",{id:"tabbartestid"},Object(r.b)("inlineCode",{parentName:"h4"},"tabBarTestID")),Object(r.b)("p",null,"ID to locate this tab button in tests."),Object(r.b)("h4",{id:"tabbaronpress"},Object(r.b)("inlineCode",{parentName:"h4"},"tabBarOnPress")),Object(r.b)("p",null,"Callback to handle press events; the argument is an object containing:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"navigation"),": navigation prop for the screen"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"defaultHandler"),": the default handler for tab press")),Object(r.b)("p",null,"Useful for adding a custom logic before the transition to the next scene (the\ntapped one) starts. When setting tabBarOnPress the defaultHandler needs to be called in order to execute the default action (i.e. switch tab)."),Object(r.b)("h4",{id:"tabbaronlongpress"},Object(r.b)("inlineCode",{parentName:"h4"},"tabBarOnLongPress")),Object(r.b)("p",null,"Callback to handle long press events; the argument is an object containing:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"navigation"),": navigation prop for the screen"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"defaultHandler"),": the default handler for tab press")))}d.isMDXComponent=!0},522:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return h}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=i.a.createContext({}),s=function(e){var t=i.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),p=s(a),u=n,h=p["".concat(o,".").concat(u)]||p[u]||d[u]||r;return a?i.a.createElement(h,l(l({ref:t},c),{},{components:a})):i.a.createElement(h,l({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=u;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<r;c++)o[c]=a[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},523:function(e,t,a){"use strict";function n(e){var t,a,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(i&&(i+=" "),i+=a);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,a=0,i="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(i&&(i+=" "),i+=t);return i}},524:function(e,t,a){"use strict";var n=a(0),i=a(525);t.a=function(){var e=Object(n.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},525:function(e,t,a){"use strict";var n=a(0),i=Object(n.createContext)(void 0);t.a=i},526:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(524),o=a(523),l=a(59),b=a.n(l);var c=37,s=39;t.a=function(e){var t=e.lazy,a=e.block,l=e.defaultValue,p=e.values,d=e.groupId,u=e.className,h=Object(r.a)(),m=h.tabGroupChoices,O=h.setTabGroupChoices,f=Object(n.useState)(l),j=f[0],v=f[1],g=n.Children.toArray(e.children),N=[];if(null!=d){var y=m[d];null!=y&&y!==j&&p.some((function(e){return e.value===y}))&&v(y)}var C=function(e){var t=e.target,a=N.indexOf(t),n=g[a].props.value;v(n),null!=d&&(O(d,n),setTimeout((function(){var e,a,n,i,r,o,l,c;(e=t.getBoundingClientRect(),a=e.top,n=e.left,i=e.bottom,r=e.right,o=window,l=o.innerHeight,c=o.innerWidth,a>=0&&r<=c&&i<=l&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(b.a.tabItemActive),setTimeout((function(){return t.classList.remove(b.a.tabItemActive)}),2e3))}),150))},w=function(e){var t,a;switch(e.keyCode){case s:var n=N.indexOf(e.target)+1;a=N[n]||N[0];break;case c:var i=N.indexOf(e.target)-1;a=N[i]||N[N.length-1]}null===(t=a)||void 0===t||t.focus()};return i.a.createElement("div",{className:"tabs-container"},i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":a},u)},p.map((function(e){var t=e.value,a=e.label;return i.a.createElement("li",{role:"tab",tabIndex:j===t?0:-1,"aria-selected":j===t,className:Object(o.a)("tabs__item",b.a.tabItem,{"tabs__item--active":j===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:w,onFocus:C,onClick:C},a)}))),t?Object(n.cloneElement)(g.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):i.a.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}},527:function(e,t,a){"use strict";var n=a(0),i=a.n(n);t.a=function(e){var t=e.children,a=e.hidden,n=e.className;return i.a.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}}}]);