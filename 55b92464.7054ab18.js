(window.webpackJsonp=window.webpackJsonp||[]).push([[165],{223:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(1),i=n(6),o=(n(0),n(510)),r={id:"navigation-prop",title:"Navigation prop reference",sidebar_label:"Navigation prop"},c={unversionedId:"navigation-prop",id:"version-6.x/navigation-prop",isDocsHomePage:!1,title:"Navigation prop reference",description:"Each screen component in your app is provided with the navigation prop automatically. The prop contains various convenience functions that dispatch navigation actions. It looks like this:",source:"@site/versioned_docs/version-6.x/navigation-prop.md",slug:"/navigation-prop",permalink:"/docs/6.x/navigation-prop",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-6.x/navigation-prop.md",version:"6.x",sidebar_label:"Navigation prop",sidebar:"version-6.x/docs",previous:{title:"Route prop reference",permalink:"/docs/6.x/route-prop"},next:{title:"NavigationContext",permalink:"/docs/6.x/navigation-context"}},s=[{value:"Navigator-dependent functions",id:"navigator-dependent-functions",children:[]},{value:"Common API reference",id:"common-api-reference",children:[{value:"<code>navigate</code>",id:"navigate",children:[]},{value:"<code>goBack</code>",id:"goback",children:[]},{value:"<code>reset</code>",id:"reset",children:[]},{value:"<code>setParams</code>",id:"setparams",children:[]},{value:"<code>setOptions</code>",id:"setoptions",children:[]}]},{value:"Navigation events",id:"navigation-events",children:[{value:"<code>isFocused</code>",id:"isfocused",children:[]}]},{value:"Advanced API Reference",id:"advanced-api-reference",children:[{value:"<code>dispatch</code>",id:"dispatch",children:[]},{value:"<code>getParent</code>",id:"getparent",children:[]},{value:"<code>getState</code>",id:"getstate",children:[]}]}],l={rightToc:s};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Each ",Object(o.b)("inlineCode",{parentName:"p"},"screen")," component in your app is provided with the ",Object(o.b)("inlineCode",{parentName:"p"},"navigation")," prop automatically. The prop contains various convenience functions that dispatch navigation actions. It looks like this:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"navigation"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"navigate")," - go to another screen, figures out the action it needs to take to do it"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"reset")," - wipe the navigator state and replace it with a new route"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"goBack")," - close active screen and move back in the stack"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"setParams")," - make changes to route's params"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"dispatch")," - send an action object to update the ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/6.x/navigation-state"}),"navigation state")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"setOptions")," - update the screen's options"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"isFocused")," - check whether the screen is focused"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"addListener")," - subscribe to updates to events from the navigators")))),Object(o.b)("p",null,"It's important to highlight the ",Object(o.b)("inlineCode",{parentName:"p"},"navigation")," prop is ",Object(o.b)("em",{parentName:"p"},"not")," passed in to ",Object(o.b)("em",{parentName:"p"},"all")," components; only ",Object(o.b)("inlineCode",{parentName:"p"},"screen")," components receive this prop automatically! React Navigation doesn't do any magic here. For example, if you were to define a ",Object(o.b)("inlineCode",{parentName:"p"},"MyBackButton")," component and render it as a child of a screen component, you would not be able to access the ",Object(o.b)("inlineCode",{parentName:"p"},"navigation")," prop on it. If, however, you wish to access the ",Object(o.b)("inlineCode",{parentName:"p"},"navigation")," prop in any of your components, you may use the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/6.x/use-navigation"}),Object(o.b)("inlineCode",{parentName:"a"},"useNavigation"))," hook."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("inlineCode",{parentName:"p"},"setParams"),"/",Object(o.b)("inlineCode",{parentName:"p"},"setOptions")," etc. should only be called in ",Object(o.b)("inlineCode",{parentName:"p"},"useEffect"),"/",Object(o.b)("inlineCode",{parentName:"p"},"useLayoutEffect"),"/",Object(o.b)("inlineCode",{parentName:"p"},"componentDidMount"),"/",Object(o.b)("inlineCode",{parentName:"p"},"componentDidUpdate")," etc. Not during render or in constructor.")),Object(o.b)("h3",{id:"navigator-dependent-functions"},"Navigator-dependent functions"),Object(o.b)("p",null,"There are several additional functions present on ",Object(o.b)("inlineCode",{parentName:"p"},"navigation")," prop based on the kind of the current navigator."),Object(o.b)("p",null,"If the navigator is a stack navigator, several alternatives to ",Object(o.b)("inlineCode",{parentName:"p"},"navigate")," and ",Object(o.b)("inlineCode",{parentName:"p"},"goBack")," are provided and you can use whichever you prefer. The functions are:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"navigation"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"replace")," - replace the current route with a new one"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"push")," - push a new route onto the stack"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"pop")," - go back in the stack"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"popToTop")," - go to the top of the stack")))),Object(o.b)("p",null,"If the navigator is a tab navigator, the following are also available:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"navigation"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"jumpTo")," - go to a specific screen in the tab navigator")))),Object(o.b)("p",null,"If the navigator is a drawer navigator, the following are also available:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"navigation"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"jumpTo")," - go to a specific screen in the drawer navigator"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"openDrawer")," - open the drawer"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"closeDrawer")," - close the drawer"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"toggleDrawer")," - toggle the state, ie. switch from closed to open and vice versa")))),Object(o.b)("p",null,"You can find more details about navigator dependent functions in the documentation for the navigator that you're using."),Object(o.b)("h2",{id:"common-api-reference"},"Common API reference"),Object(o.b)("p",null,"The vast majority of your interactions with the ",Object(o.b)("inlineCode",{parentName:"p"},"navigation")," prop will involve ",Object(o.b)("inlineCode",{parentName:"p"},"navigate"),", ",Object(o.b)("inlineCode",{parentName:"p"},"goBack"),", and ",Object(o.b)("inlineCode",{parentName:"p"},"setParams"),"."),Object(o.b)("h3",{id:"navigate"},Object(o.b)("inlineCode",{parentName:"h3"},"navigate")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"navigate")," method lets us navigate to another screen in your app. It takes the following arguments:"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"navigation.navigate(name, params)")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"name")," - A destination name of the route that has been defined somewhere"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"params")," - Params to pass to the destination route.")),Object(o.b)("samp",{id:"navigate"}),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"function HomeScreen({ navigation: { navigate } }) {\n  return (\n    <View>\n      <Text>This is the home screen of the app</Text>\n      <Button\n        onPress={() =>\n          navigate('Profile', { names: ['Brent', 'Satya', 'Micha\u015b'] })\n        }\n        title=\"Go to Brent's profile\"\n      />\n    </View>\n  );\n}\n")),Object(o.b)("p",null,"In a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/6.x/stack-navigator"}),"stack navigator"),", calling ",Object(o.b)("inlineCode",{parentName:"p"},"navigate")," with a screen name will result in different behavior based on if the screen is already present or not. If the screen is already present in the stack's history, it'll go back to that screen and remove any screens after that. If the screen is not present, it'll push a new screen."),Object(o.b)("p",null,"For example, if you have a stack with the history ",Object(o.b)("inlineCode",{parentName:"p"},"Home > Profile > Settings")," and you call ",Object(o.b)("inlineCode",{parentName:"p"},"navigate(Profile)"),", the resulting screens will be ",Object(o.b)("inlineCode",{parentName:"p"},"Home > Profile")," as it goes back to ",Object(o.b)("inlineCode",{parentName:"p"},"Profile")," and removes the ",Object(o.b)("inlineCode",{parentName:"p"},"Settings")," screen."),Object(o.b)("p",null,"By default, the screen is identified by its name. But you can also customize it to take the params into account by using the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/6.x/screen#getid"}),Object(o.b)("inlineCode",{parentName:"a"},"getId"))," prop."),Object(o.b)("p",null,"For example, say you have specified a ",Object(o.b)("inlineCode",{parentName:"p"},"getId")," prop for ",Object(o.b)("inlineCode",{parentName:"p"},"Profile")," screen:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"<Screen name={Profile} component={ProfileScreen} getId={({ params }) => params.userId} />\n")),Object(o.b)("p",null,"Now, if you have a stack with the history ",Object(o.b)("inlineCode",{parentName:"p"},"Home > Profile (userId: bob) > Settings")," and you call ",Object(o.b)("inlineCode",{parentName:"p"},"navigate(Profile, { userId: 'alice' })"),", the resulting screens will be ",Object(o.b)("inlineCode",{parentName:"p"},"Home > Profile (userId: bob) > Settings > Profile (userId: alice)")," since it'll add a new ",Object(o.b)("inlineCode",{parentName:"p"},"Profile")," screen as no matching screen was found."),Object(o.b)("h3",{id:"goback"},Object(o.b)("inlineCode",{parentName:"h3"},"goBack")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"goBack")," method lets us go back to the previous screen in the navigator."),Object(o.b)("p",null,"By default, ",Object(o.b)("inlineCode",{parentName:"p"},"goBack")," will go back from the screen that it is called from:"),Object(o.b)("samp",{id:"navigate"}),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'function ProfileScreen({ navigation: { goBack } }) {\n  return (\n    <View>\n      <Button onPress={() => goBack()} title="Go back from ProfileScreen" />\n    </View>\n  );\n}\n')),Object(o.b)("h4",{id:"going-back-from-a-specific-screen"},"Going back from a specific screen"),Object(o.b)("p",null,"Consider the following navigation stack history:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"navigation.navigate({ name: SCREEN, key: SCREEN_KEY_A });\nnavigation.navigate({ name: SCREEN, key: SCREEN_KEY_B });\nnavigation.navigate({ name: SCREEN, key: SCREEN_KEY_C });\nnavigation.navigate({ name: SCREEN, key: SCREEN_KEY_D });\n")),Object(o.b)("p",null,"Now you are on ",Object(o.b)("em",{parentName:"p"},"screen D")," and want to go back to ",Object(o.b)("em",{parentName:"p"},"screen A")," (popping D, C, and B).\nThen you can use ",Object(o.b)("inlineCode",{parentName:"p"},"navigate"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"navigation.navigate({ key: SCREEN_KEY_A }); // will go to screen A FROM screen D\n")),Object(o.b)("p",null,"Alternatively, as ",Object(o.b)("em",{parentName:"p"},"screen A")," is the top of the stack, you can use ",Object(o.b)("inlineCode",{parentName:"p"},"navigation.popToTop()"),"."),Object(o.b)("h3",{id:"reset"},Object(o.b)("inlineCode",{parentName:"h3"},"reset")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"reset")," method lets us replace the navigator state with a new state:"),Object(o.b)("samp",{id:"navigate-replace-reset"}),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"navigation.reset({\n  index: 0,\n  routes: [{ name: 'Profile' }],\n});\n")),Object(o.b)("p",null,"The state object specified in ",Object(o.b)("inlineCode",{parentName:"p"},"reset")," replaces the existing ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/6.x/navigation-state"}),"navigation state")," with the new one, i.e. removes existing screens and add new ones. If you want to preserve the existing screens when changing the state, you can use ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/6.x/navigation-actions#reset"}),Object(o.b)("inlineCode",{parentName:"a"},"CommonActions.reset"))," with ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#dispatch"}),Object(o.b)("inlineCode",{parentName:"a"},"dispatch"))," instead."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Note: Consider the navigator's state object to be internal and subject to change in a minor release. Avoid using properties from the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/6.x/navigation-state"}),"navigation state")," object except ",Object(o.b)("inlineCode",{parentName:"p"},"index")," and ",Object(o.b)("inlineCode",{parentName:"p"},"routes"),", unless you really need it. If there is some functionality you cannot achieve without relying on the structure of the state object, please open an issue.")),Object(o.b)("h3",{id:"setparams"},Object(o.b)("inlineCode",{parentName:"h3"},"setParams")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"setParams")," method lets us update the params (",Object(o.b)("inlineCode",{parentName:"p"},"route.params"),") of the current screen. ",Object(o.b)("inlineCode",{parentName:"p"},"setParams")," works like React's ",Object(o.b)("inlineCode",{parentName:"p"},"setState")," - it shallow merges the provided params object with the current params."),Object(o.b)("samp",{id:"navigate-set-params"}),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"function ProfileScreen({ navigation: { setParams } }) {\n  render() {\n    return (\n      <Button\n        onPress={() =>\n          setParams({\n            friends:\n              route.params.friends[0] === 'Brent'\n                ? ['Wojciech', 'Szymon', 'Jakub']\n                : ['Brent', 'Satya', 'Micha\u015b'],\n            title:\n              route.params.title === \"Brent's Profile\"\n                ? \"Lucy's Profile\"\n                : \"Brent's Profile\",\n          })\n        }\n        title=\"Swap title and friends\"\n      />\n    );\n  }\n}\n")),Object(o.b)("h3",{id:"setoptions"},Object(o.b)("inlineCode",{parentName:"h3"},"setOptions")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"setOptions")," method lets us set screen options from within the component. This is useful if we need to use the component's props, state or context to configure our screen."),Object(o.b)("samp",{id:"navigate-set-options"}),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"function ProfileScreen({ navigation, route }) {\n  const [value, onChangeText] = React.useState(route.params.title);\n\n  React.useLayoutEffect(() => {\n    navigation.setOptions({\n      title: value === '' ? 'No title' : value,\n    });\n  }, [navigation, value]);\n\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <TextInput\n        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}\n        onChangeText={onChangeText}\n        value={value}\n      />\n      <Button title=\"Go back\" onPress={() => navigation.goBack()} />\n    </View>\n  );\n}\n")),Object(o.b)("p",null,"Any options specified here are shallow merged with the options specified when defining the screen."),Object(o.b)("h2",{id:"navigation-events"},"Navigation events"),Object(o.b)("p",null,"Screens can add listeners on the ",Object(o.b)("inlineCode",{parentName:"p"},"navigation")," prop with the ",Object(o.b)("inlineCode",{parentName:"p"},"addListener")," method. For example, to listen to the ",Object(o.b)("inlineCode",{parentName:"p"},"focus")," event:"),Object(o.b)("samp",{id:"simple-focus-and-blur"}),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"function Profile({ navigation }) {\n  React.useEffect(() => {\n    const unsubscribe = navigation.addListener('focus', () => {\n      // do something\n    });\n\n    return unsubscribe;\n  }, [navigation]);\n\n  return <ProfileContent />;\n}\n")),Object(o.b)("p",null,"See ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/6.x/navigation-events"}),"Navigation events")," for more details on the available events and the API usage."),Object(o.b)("h3",{id:"isfocused"},Object(o.b)("inlineCode",{parentName:"h3"},"isFocused")),Object(o.b)("p",null,"This method lets us check whether the screen is currently focused. Returns ",Object(o.b)("inlineCode",{parentName:"p"},"true")," if the screen is focused and ",Object(o.b)("inlineCode",{parentName:"p"},"false")," otherwise."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const isFocused = navigation.isFocused();\n")),Object(o.b)("p",null,"This method doesn't re-render the screen when the value changes and mainly useful in callbacks. You probably want to use ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/6.x/use-is-focused"}),"useIsFocused")," instead of using this directly, it will return a boolean a prop to indicating if the screen is focused."),Object(o.b)("h2",{id:"advanced-api-reference"},"Advanced API Reference"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"dispatch")," function is much less commonly used, but a good escape hatch if you can't do what you need with the available methods such as ",Object(o.b)("inlineCode",{parentName:"p"},"navigate"),", ",Object(o.b)("inlineCode",{parentName:"p"},"goBack")," etc. We recommend to avoid using the ",Object(o.b)("inlineCode",{parentName:"p"},"dispatch")," method often unless absolutely necessary."),Object(o.b)("h3",{id:"dispatch"},Object(o.b)("inlineCode",{parentName:"h3"},"dispatch")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"dispatch")," method lets us send a navigation action object which determines how the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/6.x/navigation-state"}),"navigation state")," will be updated. All of the navigation functions like ",Object(o.b)("inlineCode",{parentName:"p"},"navigate")," use ",Object(o.b)("inlineCode",{parentName:"p"},"dispatch")," behind the scenes."),Object(o.b)("p",null,"Note that if you want to dispatch actions you should use the action creators provided in this library instead of writing the action object directly."),Object(o.b)("p",null,"See ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/6.x/navigation-actions"}),"Navigation Actions Docs")," for a full list of available actions."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { CommonActions } from '@react-navigation/native';\n\nnavigation.dispatch(\n  CommonActions.navigate({\n    name: 'Profile',\n    params: {},\n  })\n);\n")),Object(o.b)("p",null,"When dispatching action objects, you can also specify few additional properties:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"source")," - The key of the route which should be considered as the source of the action. For example, the ",Object(o.b)("inlineCode",{parentName:"li"},"replace")," action will replace the route with the given key. By default, it'll use the key of the route that dispatched the action. You can explicitly pass ",Object(o.b)("inlineCode",{parentName:"li"},"undefined")," to override this behavior."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"target")," - The key of the ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/6.x/navigation-state"}),"navigation state")," the action should be applied on. By default, actions bubble to other navigators if not handled by a navigator. If ",Object(o.b)("inlineCode",{parentName:"li"},"target")," is specified, the action won't bubble if the navigator with the same key didn't handle it.")),Object(o.b)("p",null,"Example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { CommonActions } from '@react-navigation/native';\n\nnavigation.dispatch({\n  ...CommonActions.navigate('Profile'),\n  source: 'someRoutekey',\n  target: 'someStatekey',\n});\n")),Object(o.b)("h4",{id:"custom-action-creators"},"Custom action creators"),Object(o.b)("p",null,"It's also possible to pass a action creator function to ",Object(o.b)("inlineCode",{parentName:"p"},"dispatch"),". The function will receive the current state and needs to return a navigation action object to use:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { CommonActions } from '@react-navigation/native';\n\nnavigation.dispatch((state) => {\n  // Add the home route to the start of the stack\n  const routes = [{ name: 'Home' }, ...state.routes];\n\n  return CommonActions.reset({\n    ...state,\n    routes,\n    index: routes.length - 1,\n  });\n});\n")),Object(o.b)("p",null,"You can use this functionality to build your own helpers that you can utilize in your app. Here is an example which implements inserting a screen just before the last one:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { CommonActions } from '@react-navigation/native';\n\nconst insertBeforeLast = (routeName, params) => (state) => {\n  const routes = [\n    ...state.routes.slice(0, -1),\n    { name: routeName, params },\n    state.routes[state.routes.length - 1],\n  ];\n\n  return CommonActions.reset({\n    ...state,\n    routes,\n    index: routes.length - 1,\n  });\n};\n")),Object(o.b)("p",null,"Then use it like:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"navigation.dispatch(insertBeforeLast('Home'));\n")),Object(o.b)("h3",{id:"getparent"},Object(o.b)("inlineCode",{parentName:"h3"},"getParent")),Object(o.b)("p",null,"This method returns the navigation prop from the parent navigator that the current navigator is nested in. For example, if you have a stack navigator and a tab navigator nested inside the stack, then you can use ",Object(o.b)("inlineCode",{parentName:"p"},"getParent")," inside a screen of the tab navigator to get the navigation prop passed from the stack navigator."),Object(o.b)("p",null,"This method will return ",Object(o.b)("inlineCode",{parentName:"p"},"undefined")," if there is no parent navigator. Be sure to always check for ",Object(o.b)("inlineCode",{parentName:"p"},"undefined")," when using this method."),Object(o.b)("h3",{id:"getstate"},Object(o.b)("inlineCode",{parentName:"h3"},"getState")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Note: Consider the navigator's state object to be internal and subject to change in a minor release. Avoid using properties from the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/6.x/navigation-state"}),"navigation state")," object except ",Object(o.b)("inlineCode",{parentName:"p"},"index")," and ",Object(o.b)("inlineCode",{parentName:"p"},"routes"),", unless you really need it. If there is some functionality you cannot achieve without relying on the structure of the state object, please open an issue.")),Object(o.b)("p",null,"This method returns the state object of the navigator which contains the screen. Getting the navigator state could be useful in very rare situations. You most likely don't need to use this method. If you do, make sure you have a good reason."),Object(o.b)("p",null,"If you need the state for rendering content, you should use ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/6.x/use-navigation-state"}),Object(o.b)("inlineCode",{parentName:"a"},"useNavigationState"))," instead of this method."))}b.isMDXComponent=!0},510:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),b=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=b(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=b(n),u=a,m=p["".concat(r,".").concat(u)]||p[u]||d[u]||o;return n?i.a.createElement(m,c(c({ref:t},l),{},{components:n})):i.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var l=2;l<o;l++)r[l]=n[l];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);