(window.webpackJsonp=window.webpackJsonp||[]).push([[759,485,734],{1142:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=b(n),d=r,m=u["".concat(o,".").concat(d)]||u[d]||s[d]||i;return n?a.a.createElement(m,c(c({ref:t},l),{},{components:n})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1149:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));var r=n(22),a=n(1150);function i(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,o=i.forcePrependBaseUrl,c=void 0!==o&&o,p=i.absolute,l=void 0!==p&&p;if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(c)return t+n;var b=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+b:b}(i,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},1150:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))},64:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(8),i=(n(0),n(1142)),o=n(1149),c={},p={unversionedId:"api-reference/types/SelectorStoreUpdater",id:"api-reference/types/SelectorStoreUpdater",isDocsHomePage:!1,title:"SelectorStoreUpdater",description:"Type SelectorStoreUpdater",source:"@site/docs/api-reference/types/SelectorStoreUpdater.md",slug:"/api-reference/types/SelectorStoreUpdater",permalink:"/docs/next/api-reference/types/SelectorStoreUpdater",editUrl:"https://github.com/facebook/relay/edit/master/website/docs/api-reference/types/SelectorStoreUpdater.md",version:"current",lastUpdatedBy:"Robert Balicki",lastUpdatedAt:1619635941},l=[],b={toc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h4",{id:"type-selectorstoreupdater"},"Type ",Object(i.b)("inlineCode",{parentName:"h4"},"SelectorStoreUpdater")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A function with signature ",Object(i.b)("inlineCode",{parentName:"li"},"(store: RecordSourceSelectorProxy, data) => void")),Object(i.b)("li",{parentName:"ul"},"This interface allows you to ",Object(i.b)("em",{parentName:"li"},"imperatively")," write and read data directly to and from the Relay store. This means that you have full control over how to update the store in response to the subscription payload: you can ",Object(i.b)("em",{parentName:"li"},"create entirely new records"),", or ",Object(i.b)("em",{parentName:"li"},"update or delete existing ones"),". The full API for reading and writing to the Relay store is available ",Object(i.b)("a",{href:Object(o.a)("docs/api-reference/store/#recordsourceselectorproxy")},"here"),".")))}u.isMDXComponent=!0},65:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(8),i=(n(0),n(1142)),o={},c={unversionedId:"api-reference/types/CacheConfig",id:"api-reference/types/CacheConfig",isDocsHomePage:!1,title:"CacheConfig",description:"Type CacheConfig",source:"@site/docs/api-reference/types/CacheConfig.md",slug:"/api-reference/types/CacheConfig",permalink:"/docs/next/api-reference/types/CacheConfig",editUrl:"https://github.com/facebook/relay/edit/master/website/docs/api-reference/types/CacheConfig.md",version:"current",lastUpdatedBy:"Robert Balicki",lastUpdatedAt:1619635941},p=[],l={toc:p};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h4",{id:"type-cacheconfig"},"Type ",Object(i.b)("inlineCode",{parentName:"h4"},"CacheConfig")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"An object with the following fields:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"force"),": ",Object(i.b)("em",{parentName:"li"},Object(i.b)("em",{parentName:"em"},"[Optional]"))," A boolean. If true, causes a query to be issued unconditionally, regardless of the state of any configured response cache."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"poll"),": ",Object(i.b)("em",{parentName:"li"},Object(i.b)("em",{parentName:"em"},"[Optional]"))," A number. Causes a query to live-update by polling at the specified interval, in milliseconds. (This value will be passed to ",Object(i.b)("inlineCode",{parentName:"li"},"setTimeout"),")."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"liveConfigId"),": ",Object(i.b)("em",{parentName:"li"},Object(i.b)("em",{parentName:"em"},"[Optional]"))," A string. Causes a query to live-update by calling GraphQLLiveQuery; it represents a configuration of gateway when doing live query."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"metadata"),": ",Object(i.b)("em",{parentName:"li"},Object(i.b)("em",{parentName:"em"},"[Optional]"))," An object. User-supplied metadata."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"transactionId"),": ",Object(i.b)("em",{parentName:"li"},Object(i.b)("em",{parentName:"em"},"[Optional]"))," A string. A user-supplied value, intended for use as a unique id for a given instance of executing an operation.")))))}b.isMDXComponent=!0},72:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(8),i=(n(0),n(1142)),o=n(64),c=n(65),p={},l={unversionedId:"api-reference/types/GraphQLSubscriptionConfig",id:"api-reference/types/GraphQLSubscriptionConfig",isDocsHomePage:!1,title:"GraphQLSubscriptionConfig",description:"Type GraphQLSubscriptionConfig",source:"@site/docs/api-reference/types/GraphQLSubscriptionConfig.md",slug:"/api-reference/types/GraphQLSubscriptionConfig",permalink:"/docs/next/api-reference/types/GraphQLSubscriptionConfig",editUrl:"https://github.com/facebook/relay/edit/master/website/docs/api-reference/types/GraphQLSubscriptionConfig.md",version:"current",lastUpdatedBy:"Robert Balicki",lastUpdatedAt:1619635941},b=[],u={toc:b};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h4",{id:"type-graphqlsubscriptionconfigtsubscriptionpayload"},"Type ",Object(i.b)("inlineCode",{parentName:"h4"},"GraphQLSubscriptionConfig<TSubscriptionPayload>")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"An object with the following fields:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"cacheConfig"),": ",Object(i.b)("em",{parentName:"li"},Object(i.b)("em",{parentName:"em"},"[Optional]"))," ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"#type-cacheconfig"}),Object(i.b)("inlineCode",{parentName:"a"},"CacheConfig"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"subscription"),": ",Object(i.b)("inlineCode",{parentName:"li"},"GraphQLTaggedNode"),". A GraphQL subscription specified using a ",Object(i.b)("inlineCode",{parentName:"li"},"graphql")," template literal"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"variables"),": The variables to pass to the subscription"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"onCompleted"),": ",Object(i.b)("em",{parentName:"li"},Object(i.b)("em",{parentName:"em"},"[Optional]"))," ",Object(i.b)("inlineCode",{parentName:"li"},"() => void"),". An optional callback that is executed when the subscription is established"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"onError"),": ",Object(i.b)("em",{parentName:"li"},Object(i.b)("em",{parentName:"em"},"[Optional]"))," ",Object(i.b)("inlineCode",{parentName:"li"},"(Error) => {}"),". An optional callback that is executed when an error occurs"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"onNext"),": ",Object(i.b)("em",{parentName:"li"},Object(i.b)("em",{parentName:"em"},"[Optional]"))," ",Object(i.b)("inlineCode",{parentName:"li"},"(TSubscriptionPayload) => {}"),". An optional callback that is executed when new data is received"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"updater"),": ",Object(i.b)("em",{parentName:"li"},Object(i.b)("em",{parentName:"em"},"[Optional]"))," ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"#type-selectorstoreupdater"}),Object(i.b)("inlineCode",{parentName:"a"},"SelectorStoreUpdater")),".")))),Object(i.b)(c.default,{mdxType:"CacheConfig"}),Object(i.b)(o.default,{mdxType:"SelectorStoreUpdater"}))}s.isMDXComponent=!0}}]);