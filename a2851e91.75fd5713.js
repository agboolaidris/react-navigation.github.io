(window.webpackJsonp=window.webpackJsonp||[]).push([[293],{352:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return s}));var i=t(1),a=t(6),o=(t(0),t(510)),r={id:"deep-linking",title:"Deep linking",sidebar_label:"Deep linking"},l={unversionedId:"deep-linking",id:"version-6.x/deep-linking",isDocsHomePage:!1,title:"Deep linking",description:"In this guide, we will configure our app to handle deep links on various platforms. To handle incoming links, we need to handle 2 scenarios:",source:"@site/versioned_docs/version-6.x/deep-linking.md",slug:"/deep-linking",permalink:"/docs/6.x/deep-linking",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-6.x/deep-linking.md",version:"6.x",sidebar_label:"Deep linking",sidebar:"version-6.x/docs",previous:{title:"Navigating without the navigation prop",permalink:"/docs/6.x/navigating-without-navigation-prop"},next:{title:"Configuring links",permalink:"/docs/6.x/configuring-links"}},p=[{value:"Set up with Expo projects",id:"set-up-with-expo-projects",children:[{value:"URI Prefix",id:"uri-prefix",children:[]},{value:"Universal Links",id:"universal-links",children:[]},{value:"Multiple subdomains",id:"multiple-subdomains",children:[]},{value:"Test deep linking on iOS",id:"test-deep-linking-on-ios",children:[]},{value:"Test deep linking on Android",id:"test-deep-linking-on-android",children:[]}]},{value:"Set up with bare React Native projects",id:"set-up-with-bare-react-native-projects",children:[{value:"iOS",id:"ios",children:[]},{value:"Android",id:"android",children:[]}]},{value:"Hybrid React Native and native iOS Applications (skip for React-Native-only projects)",id:"hybrid-react-native-and-native-ios-applications-skip-for-react-native-only-projects",children:[]},{value:"Third-party integrations",id:"third-party-integrations",children:[]}],c={rightToc:p};function s(e){var n=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},c,r,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In this guide, we will configure our app to handle deep links on various platforms. To handle incoming links, we need to handle 2 scenarios:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"If the app wasn't previously open, we need to set the initial state based on the link"),Object(o.b)("li",{parentName:"ol"},"If the app was already open, we need to update the state to reflect the incoming link")),Object(o.b)("p",null,"React Native provides a ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://reactnative.dev/docs/linking"}),Object(o.b)("inlineCode",{parentName:"a"},"Linking"))," to get notified of incoming links. React Navigation can integrate with the ",Object(o.b)("inlineCode",{parentName:"p"},"Linking")," module to automatically handle deep links. See ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/6.x/configuring-links"}),"configuring links")," to see more details on how to configure links in React Navigation."),Object(o.b)("p",null,"Below, we'll go through required configurations for each platform so that the deep link integration works."),Object(o.b)("h2",{id:"set-up-with-expo-projects"},"Set up with Expo projects"),Object(o.b)("p",null,"First, you will want to specify a URL scheme for your app. This corresponds to the string before ",Object(o.b)("inlineCode",{parentName:"p"},"://")," in a URL, so if your scheme is ",Object(o.b)("inlineCode",{parentName:"p"},"mychat")," then a link to your app would be ",Object(o.b)("inlineCode",{parentName:"p"},"mychat://"),". The scheme only applies to standalone apps and you need to re-build the standalone app for the change to take effect. In the Expo client app you can deep link using ",Object(o.b)("inlineCode",{parentName:"p"},"exp://ADDRESS:PORT")," where ",Object(o.b)("inlineCode",{parentName:"p"},"ADDRESS")," is often ",Object(o.b)("inlineCode",{parentName:"p"},"127.0.0.1")," and ",Object(o.b)("inlineCode",{parentName:"p"},"PORT")," is often ",Object(o.b)("inlineCode",{parentName:"p"},"19000")," - the URL is printed when you run ",Object(o.b)("inlineCode",{parentName:"p"},"expo start"),". If you want to test with your custom scheme you will need to run ",Object(o.b)("inlineCode",{parentName:"p"},"expo build:ios -t simulator")," or ",Object(o.b)("inlineCode",{parentName:"p"},"expo build:android")," and install the resulting binaries in your emulators. You can register for a scheme in your ",Object(o.b)("inlineCode",{parentName:"p"},"app.json")," by adding a string under the scheme key:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json"}),'{\n  "expo": {\n    "scheme": "mychat"\n  }\n}\n')),Object(o.b)("h3",{id:"uri-prefix"},"URI Prefix"),Object(o.b)("p",null,"Next, let's configure our navigation container to extract the path from the app's incoming URI."),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),"// Install this package with `expo install expo-linking`\nimport * as Linking from 'expo-linking';\n\n// Linking.createURL is available as of expo@40.0.1 and expo-linking@2.0.1. If\n// you are using older versions, you can upgrade or use Linking.makeUrl instead,\n// but note that your deep links in standalone apps will be in the format\n// scheme:/// rather than scheme:// if you use makeUrl.\nconst prefix = Linking.createURL('/');\n\nfunction App() {\n  const linking = {\n    prefixes: [prefix],\n  };\n\n  return (\n    <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>\n      {/* content */}\n    </NavigationContainer>\n  );\n}\n")),Object(o.b)("p",null,"The reason that is necessary to use ",Object(o.b)("inlineCode",{parentName:"p"},"Linking.createURL")," is that the scheme will differ depending on whether you're in the client app or in a standalone app."),Object(o.b)("h3",{id:"universal-links"},"Universal Links"),Object(o.b)("p",null,"If you are using universal links, you need to add your domain to the prefixes."),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),"function App() {\n  const linking = {\n    prefixes: ['https://app.example.com'],\n  };\n\n  return (\n    <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>\n      {/* content */}\n    </NavigationContainer>\n  );\n}\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note:")," If you are using Expo SDK version 37 or lower, you need to add your domain with both the ",Object(o.b)("inlineCode",{parentName:"p"},"https")," and ",Object(o.b)("inlineCode",{parentName:"p"},"exps")," scheme, to work around ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/expo/expo/issues/6609"}),"this bug in Expo"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-diff"}),"   const linking = {\n-    prefixes: ['https://app.example.com'],\n+    prefixes: ['https://app.example.com', 'exps://app.example.com'],\n   };\n")),Object(o.b)("h3",{id:"multiple-subdomains"},"Multiple subdomains"),Object(o.b)("p",null,"To match all subdomains of an associated domain, you can specify a wildcard by prefixing ",Object(o.b)("inlineCode",{parentName:"p"},"*.")," before the beginning of a specific domain. Note that an entry for ",Object(o.b)("inlineCode",{parentName:"p"},"*.example.com")," does not match ",Object(o.b)("inlineCode",{parentName:"p"},"example.com")," because of the period after the asterisk. To enable matching for both ",Object(o.b)("inlineCode",{parentName:"p"},"*.example.com")," and ",Object(o.b)("inlineCode",{parentName:"p"},"example.com"),", you need to provide a separate prefix entry for each."),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),"const linking = {\n  prefixes: ['https://*.example.com', 'https://example.com'],\n};\n")),Object(o.b)("h3",{id:"test-deep-linking-on-ios"},"Test deep linking on iOS"),Object(o.b)("p",null,"To test the URI on the simulator in the Expo client app, run the following:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-sh"}),"npx uri-scheme open [ put your uri prefix in here] --ios\n\n# for example\n\nnpx uri-scheme open exp://127.0.0.1:19000/--/chat/jan --ios\n")),Object(o.b)("p",null,"or use ",Object(o.b)("inlineCode",{parentName:"p"},"xcrun")," directly:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-sh"}),"xcrun simctl openurl booted [ put your URI prefix in here ]\n\n# for example\n\nxcrun simctl openurl booted exp://127.0.0.1:19000/--/chat/jane\n")),Object(o.b)("h3",{id:"test-deep-linking-on-android"},"Test deep linking on Android"),Object(o.b)("p",null,"To test the intent handling in the Expo client app on Android, run the following:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-sh"}),'npx uri-scheme open "[ put your URI prefix in here ]" --/chat/jan --android\n\n# for example\n\nnpx uri-scheme open exp://127.0.0.1:19000/--/chat/jan --android\n')),Object(o.b)("p",null,"or use ",Object(o.b)("inlineCode",{parentName:"p"},"adb")," directly:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-sh"}),'adb shell am start -W -a android.intent.action.VIEW -d "[ put your URI prefix in here ]" host.exp.exponent\n\n# for example\n\nadb shell am start -W -a android.intent.action.VIEW -d "exp://127.0.0.1:19000/--/chat/jane" host.exp.exponent\n')),Object(o.b)("p",null,"Change ",Object(o.b)("inlineCode",{parentName:"p"},"host.exp.exponent")," to your app package name if you are testing on a standalone app."),Object(o.b)("p",null,"Read the ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://docs.expo.io/versions/latest/guides/linking.html"}),"Expo linking guide")," for more information about how to configure linking in projects built with Expo."),Object(o.b)("h2",{id:"set-up-with-bare-react-native-projects"},"Set up with bare React Native projects"),Object(o.b)("h3",{id:"ios"},"iOS"),Object(o.b)("p",null,"Let's configure the native iOS app to open based on the ",Object(o.b)("inlineCode",{parentName:"p"},"mychat://")," URI scheme."),Object(o.b)("p",null,"You'll need to link ",Object(o.b)("inlineCode",{parentName:"p"},"RCTLinking")," to your project by following the steps described here. To be able to listen to incoming app links, you'll need to add the following lines to ",Object(o.b)("inlineCode",{parentName:"p"},"SimpleApp/ios/SimpleApp/AppDelegate.m"),"."),Object(o.b)("p",null,"If you're targeting iOS 9.x or newer:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-objc"}),"// Add the header at the top of the file:\n#import <React/RCTLinkingManager.h>\n\n// Add this above `@end`:\n- (BOOL)application:(UIApplication *)application\n   openURL:(NSURL *)url\n   options:(NSDictionary<UIApplicationOpenURLOptionsKey,id> *)options\n{\n  return [RCTLinkingManager application:application openURL:url options:options];\n}\n")),Object(o.b)("p",null,"If you're targeting iOS 8.x or older, you can use the following code instead:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-objc"}),"// Add the header at the top of the file:\n#import <React/RCTLinkingManager.h>\n\n// Add this above `@end`:\n- (BOOL)application:(UIApplication *)application openURL:(NSURL *)url\n  sourceApplication:(NSString *)sourceApplication annotation:(id)annotation\n{\n  return [RCTLinkingManager application:application openURL:url\n                      sourceApplication:sourceApplication annotation:annotation];\n}\n")),Object(o.b)("p",null,"If your app is using Universal Links, you'll need to add the following code as well:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-objc"}),"// Add this above `@end`:\n- (BOOL)application:(UIApplication *)application continueUserActivity:(nonnull NSUserActivity *)userActivity\n restorationHandler:(nonnull void (^)(NSArray<id<UIUserActivityRestoring>> * _Nullable))restorationHandler\n{\n return [RCTLinkingManager application:application\n                  continueUserActivity:userActivity\n                    restorationHandler:restorationHandler];\n}\n")),Object(o.b)("p",null,"Now you need to add the scheme to your project configuration."),Object(o.b)("p",null,"The easiest way to do this is with the ",Object(o.b)("inlineCode",{parentName:"p"},"uri-scheme")," package: ",Object(o.b)("inlineCode",{parentName:"p"},"npx uri-scheme add mychat --ios"),"."),Object(o.b)("p",null,"If you want to do it manually, open the project at ",Object(o.b)("inlineCode",{parentName:"p"},"SimpleApp/ios/SimpleApp.xcodeproj"),' in Xcode. Select the project in sidebar and navigate to the info tab. Scroll down to "URL Types" and add one. In the new URL type, set the identifier and the URL scheme to your desired URL scheme.'),Object(o.b)("p",null,Object(o.b)("img",{alt:"Xcode project info URL types with mychat added",src:t(521).default})),Object(o.b)("p",null,"Now you can press play in Xcode, or re-build on the command line:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-sh"}),"npx react-native run-ios\n")),Object(o.b)("p",null,"To test the URI on the simulator, run the following:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-sh"}),"npx uri-scheme open mychat://chat/jane --ios\n")),Object(o.b)("p",null,"or use ",Object(o.b)("inlineCode",{parentName:"p"},"xcrun")," directly:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-sh"}),"xcrun simctl openurl booted mychat://chat/jane\n")),Object(o.b)("p",null,"To test the URI on a real device, open Safari and type ",Object(o.b)("inlineCode",{parentName:"p"},"mychat://chat/jane"),"."),Object(o.b)("h3",{id:"android"},"Android"),Object(o.b)("p",null,"To configure the external linking in Android, you can create a new intent in the manifest."),Object(o.b)("p",null,"The easiest way to do this is with the ",Object(o.b)("inlineCode",{parentName:"p"},"uri-scheme")," package: ",Object(o.b)("inlineCode",{parentName:"p"},"npx uri-scheme add mychat --android"),"."),Object(o.b)("p",null,"If you want to add it manually, open up ",Object(o.b)("inlineCode",{parentName:"p"},"SimpleApp/android/app/src/main/AndroidManifest.xml"),", and make the following adjustments:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Set ",Object(o.b)("inlineCode",{parentName:"li"},"launchMode")," of ",Object(o.b)("inlineCode",{parentName:"li"},"MainActivity")," to ",Object(o.b)("inlineCode",{parentName:"li"},"singleTask")," in order to receive intent on existing ",Object(o.b)("inlineCode",{parentName:"li"},"MainActivity")," (this is the default on all new projects, so you may not need to actually change anything!). It is useful if you want to perform navigation using deep link you have been registered - ",Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"http://developer.android.com/training/app-indexing/deep-linking.html#adding-filters"}),"details")),Object(o.b)("li",{parentName:"ol"},"Add the new ",Object(o.b)("inlineCode",{parentName:"li"},"intent-filter")," inside the ",Object(o.b)("inlineCode",{parentName:"li"},"MainActivity")," entry with a ",Object(o.b)("inlineCode",{parentName:"li"},"VIEW")," type action:")),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-xml"}),'<activity\n    android:name=".MainActivity"\n    android:launchMode="singleTask">\n    <intent-filter>\n        <action android:name="android.intent.action.MAIN" />\n        <category android:name="android.intent.category.LAUNCHER" />\n    </intent-filter>\n    <intent-filter>\n        <action android:name="android.intent.action.VIEW" />\n        <category android:name="android.intent.category.DEFAULT" />\n        <category android:name="android.intent.category.BROWSABLE" />\n        <data android:scheme="mychat" />\n    </intent-filter>\n</activity>\n')),Object(o.b)("p",null,"Now, re-install the app:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-sh"}),"react-native run-android\n")),Object(o.b)("p",null,"To test the intent handling in Android, run the following:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-sh"}),"npx uri-scheme open mychat://chat/jane --android\n")),Object(o.b)("p",null,"or use ",Object(o.b)("inlineCode",{parentName:"p"},"adb")," directly:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-sh"}),'adb shell am start -W -a android.intent.action.VIEW -d "mychat://chat/jane" com.simpleapp\n')),Object(o.b)("h2",{id:"hybrid-react-native-and-native-ios-applications-skip-for-react-native-only-projects"},"Hybrid React Native and native iOS Applications (skip for React-Native-only projects)"),Object(o.b)("p",null,"If you're using React Navigation within a hybrid app - an iOS app that has both Swift/ObjC and React Native parts - you may be missing the ",Object(o.b)("inlineCode",{parentName:"p"},"RCTLinkingIOS")," subspec in your Podfile, which is installed by default in new RN projects. To add this, ensure your Podfile looks like the following:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-pod"})," pod 'React', :path => '../node_modules/react-native', :subspecs => [\n    . . . // other subspecs\n    'RCTLinkingIOS',\n    . . .\n  ]\n")),Object(o.b)("h2",{id:"third-party-integrations"},"Third-party integrations"),Object(o.b)("p",null,"React Native's ",Object(o.b)("inlineCode",{parentName:"p"},"Linking")," isn't the only way to handle deep linking. You might also want to integrate other services such as ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://help.branch.io/developers-hub/docs/react-native"}),"Branch")," which provide their own API for getting notified of incoming links, or you also might want to handle links from push notifications using ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://rnfirebase.io/messaging/notifications"}),"Firebase")," etc."),Object(o.b)("p",null,"To achieve this, you'd need to override how React Navigation subscribes to incoming links. To do so, you can provide your own ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/6.x/navigation-container#linkinggetinitialurl"}),Object(o.b)("inlineCode",{parentName:"a"},"getInitialURL"))," and ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/6.x/navigation-container#linkingsubscribe"}),Object(o.b)("inlineCode",{parentName:"a"},"subscribe"))," functions:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),"const linking = {\n  prefixes: ['myapp://', 'https://myapp.com'],\n\n  // Custom function to get the URL which was used to open the app\n  async getInitialURL() {\n    // First, you may want to do the default deep link handling\n    // Check if app was opened from a deep link\n    const url = await Linking.getInitialURL();\n\n    if (url != null) {\n      return url;\n    }\n\n    // Next, you would need to get the initial URL from your third-party integration\n    // It depends on the third-party SDK you use\n    // For example, to get to get the initial URL for branch.io:\n    const params = branch.getFirstReferringParams();\n\n    return params?.$canonical_url;\n  },\n\n  // Custom function to subscribe to incoming links\n  subscribe(listener) {\n    // First, you may want to do the default deep link handling\n    const onReceiveURL = ({ url }: { url: string }) => listener(url);\n\n    // Listen to incoming links from deep linking\n    Linking.addEventListener('url', onReceiveURL);\n\n    // Next, you would need to subscribe to incoming links from your third-party integration\n    // For example, to get to subscribe to incoming links from branch.io:\n    branch.subscribe(({ error, params, uri }) => {\n      if (error) {\n        console.error('Error from Branch: ' + error);\n        return;\n      }\n\n      if (params['+non_branch_link']) {\n        const nonBranchUrl = params['+non_branch_link'];\n        // Route non-Branch URL if appropriate.\n        return;\n      }\n\n      if (!params['+clicked_branch_link']) {\n        // Indicates initialization success and some other conditions.\n        // No link was opened.\n        return;\n      }\n\n      // A Branch link was opened\n      const url = params.$canonical_url;\n\n      listener(url);\n    });\n    );\n\n    return () => {\n      // Clean up the event listeners\n      Linking.removeEventListener('url', onReceiveURL);\n      branch.unsubscribe();\n    };\n  },\n\n  config: {\n    // Deep link configuration\n  }\n};\n")),Object(o.b)("p",null,"Similar to the above example, you can integrate any API that provides a way to get the initial URL and to subscribe to new incoming URLs using the ",Object(o.b)("inlineCode",{parentName:"p"},"getInitialURL")," and ",Object(o.b)("inlineCode",{parentName:"p"},"subscribe")," options."))}s.isMDXComponent=!0},510:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return h}));var i=t(0),a=t.n(i);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=a.a.createContext({}),s=function(e){var n=a.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=s(e.components);return a.a.createElement(c.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},u=a.a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(t),u=i,h=d["".concat(r,".").concat(u)]||d[u]||b[u]||o;return t?a.a.createElement(h,l(l({ref:n},c),{},{components:t})):a.a.createElement(h,l({ref:n},c))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=u;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=t[c];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},521:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/xcode-linking-9a32c91fae982fab28dc33e7f951e8b3.png"}}]);