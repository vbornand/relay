"use strict";(self.webpackChunkrelay_website=self.webpackChunkrelay_website||[]).push([[98832],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>d,MDXProvider:()=>m,mdx:()=>g,useMDXComponents:()=>u,withMDXComponents:()=>l});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},i.apply(this,arguments)}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=a.createContext({}),l=function(e){return function(n){var t=u(n.components);return a.createElement(e,i({},n,{components:t}))}},u=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},m=function(e){var n=u(e.components);return a.createElement(d.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},f=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),l=u(t),m=o,f=l["".concat(r,".").concat(m)]||l[m]||p[m]||i;return t?a.createElement(f,c(c({ref:n},d),{},{components:t})):a.createElement(f,c({ref:n},d))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=f;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,r[1]=c;for(var d=2;d<i;d++)r[d]=t[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},68629:(e,n,t)=>{t.d(n,{Z:()=>p});var a=t(39960),o=t(44256),i=t(67294);function r(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function c(e){var n=e.children;return i.createElement("div",{className:"docsRating",id:"docsRating"},i.createElement("hr",null),n)}var s=function(){var e=i.useState(!1),n=e[0],t=e[1],a=function(e){t(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return n?"Thank you for letting us know!":i.createElement(i.Fragment,null,"Is this page useful?",i.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return a(1)}},i.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),i.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return a(0)}},i.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},d=function(){return i.createElement("p",null,"Let us know how these docs can be improved by",i.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:r},"Filing a task"))},l=function(){return i.createElement("p",null,"Help us make the site even better by"," ",i.createElement(a.default,{to:"https://www.surveymonkey.com/r/FYC9TCJ"},"answering a few quick questions"),".")},u=function(){return i.createElement(c,null,i.createElement(d,null),i.createElement(s,null),i.createElement(l,null))},m=function(){return i.createElement(c,null,i.createElement(s,null),i.createElement(l,null))};const p=function(){return(0,o.fbContent)({internal:i.createElement(u,null),external:i.createElement(m,null)})}},42461:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>d,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>m});var a=t(83117),o=t(80102),i=(t(67294),t(3905)),r=t(68629),c=(t(44256),["components"]),s={id:"advanced-pagination",title:"Advanced Pagination",slug:"/guided-tour/list-data/advanced-pagination/",description:"Relay guide for advanced pagination",keywords:["pagination","usePaginationFragment","prefetching"]},d=void 0,l={unversionedId:"guided-tour/list-data/advanced-pagination",id:"version-v13.0.0/guided-tour/list-data/advanced-pagination",title:"Advanced Pagination",description:"Relay guide for advanced pagination",source:"@site/versioned_docs/version-v13.0.0/guided-tour/list-data/advanced-pagination.md",sourceDirName:"guided-tour/list-data",slug:"/guided-tour/list-data/advanced-pagination/",permalink:"/docs/v13.0.0/guided-tour/list-data/advanced-pagination/",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v13.0.0/guided-tour/list-data/advanced-pagination.md",tags:[],version:"v13.0.0",lastUpdatedBy:"Mofei Zhang",lastUpdatedAt:1658941331,formattedLastUpdatedAt:"7/27/2022",frontMatter:{id:"advanced-pagination",title:"Advanced Pagination",slug:"/guided-tour/list-data/advanced-pagination/",description:"Relay guide for advanced pagination",keywords:["pagination","usePaginationFragment","prefetching"]},sidebar:"version-v13.0.0/docs",previous:{title:"Updating Connections",permalink:"/docs/v13.0.0/guided-tour/list-data/updating-connections/"},next:{title:"Introduction",permalink:"/docs/v13.0.0/guided-tour/updating-data/"}},u={},m=[{value:"Pagination Over Multiple Connections",id:"pagination-over-multiple-connections",level:2},{value:"Bi-directional Pagination",id:"bi-directional-pagination",level:2},{value:"Custom Connection State",id:"custom-connection-state",level:2},{value:"Refreshing connections",id:"refreshing-connections",level:2},{value:"Prefetching Pages of a Connection",id:"prefetching-pages-of-a-connection",level:2},{value:"Rendering One Page of Items at a Time",id:"rendering-one-page-of-items-at-a-time",level:2}],p={toc:m};function f(e){var n=e.components,t=(0,o.Z)(e,c);return(0,i.mdx)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"In this section we're going to cover how to implement more advanced pagination use cases than the default cases covered by ",(0,i.mdx)("inlineCode",{parentName:"p"},"usePaginationFragment"),"."),(0,i.mdx)("h2",{id:"pagination-over-multiple-connections"},"Pagination Over Multiple Connections"),(0,i.mdx)("p",null,"If you need to paginate over multiple connections within the same component, you can use ",(0,i.mdx)("inlineCode",{parentName:"p"},"usePaginationFragment")," multiple times:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"import type {CombinedFriendsListComponent_user$key} from 'CombinedFriendsListComponent_user.graphql';\nimport type {CombinedFriendsListComponent_viewer$key} from 'CombinedFriendsListComponent_viewer.graphql';\n\nconst React = require('React');\n\nconst {graphql, usePaginationFragment} = require('react-relay');\n\ntype Props = {\n  user: CombinedFriendsListComponent_user$key,\n  viewer: CombinedFriendsListComponent_viewer$key,\n};\n\nfunction CombinedFriendsListComponent(props: Props) {\n\n  const {data: userData, ...userPagination} = usePaginationFragment(\n    graphql`\n      fragment CombinedFriendsListComponent_user on User {\n        name\n        friends\n          @connection(\n            key: \"CombinedFriendsListComponent_user_friends_connection\"\n          ) {\n          edges {\n            node {\n              name\n              age\n            }\n          }\n        }\n      }\n    `,\n    props.user,\n  );\n\n  const {data: viewerData, ...viewerPagination} = usePaginationFragment(\n    graphql`\n      fragment CombinedFriendsListComponent_user on Viewer {\n        actor {\n          ... on User {\n            name\n            friends\n              @connection(\n                key: \"CombinedFriendsListComponent_viewer_friends_connection\"\n              ) {\n              edges {\n                node {\n                  name\n                  age\n                }\n              }\n            }\n          }\n        }\n      }\n    `,\n    props.viewer,\n  );\n\n  return (...);\n}\n")),(0,i.mdx)("p",null,"However, we recommend trying to keep a single connection per component, to keep the components easier to follow."),(0,i.mdx)("h2",{id:"bi-directional-pagination"},"Bi-directional Pagination"),(0,i.mdx)("p",null,"In the ",(0,i.mdx)("a",{parentName:"p",href:"../pagination/"},"Pagination")," section we covered how to use ",(0,i.mdx)("inlineCode",{parentName:"p"},"usePaginationFragment")," to paginate in a single ",(0,i.mdx)("em",{parentName:"p"},'"forward"')," direction. However, connections also allow paginating in the opposite ",(0,i.mdx)("em",{parentName:"p"},'"backward"')," direction. The meaning of ",(0,i.mdx)("em",{parentName:"p"},'"forward"')," and ",(0,i.mdx)("em",{parentName:"p"},'"backward"')," directions will depend on how the items in the connection are sorted, for example  ",(0,i.mdx)("em",{parentName:"p"},'"forward"')," could mean more recent",(0,i.mdx)("em",{parentName:"p"},', and "backward"')," could mean less recent."),(0,i.mdx)("p",null,"Regardless of the semantic meaning of the direction, Relay also provides the same APIs to paginate in the opposite direction, using ",(0,i.mdx)("inlineCode",{parentName:"p"},"usePaginationFragment"),", as long  as the ",(0,i.mdx)("inlineCode",{parentName:"p"},"before")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"last")," connection arguments are also used along with ",(0,i.mdx)("inlineCode",{parentName:"p"},"after")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"first"),":"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"import type {FriendsListComponent_user$key} from 'FriendsListComponent_user.graphql';\n\nconst React = require('React');\nconst {Suspense} = require('React');\n\nconst {graphql, usePaginationFragment} = require('react-relay');\n\ntype Props = {\n  userRef: FriendsListComponent_user$key,\n};\n\nfunction FriendsListComponent(props: Props) {\n  const {\n    data,\n    loadPrevious,\n    hasPrevious,\n    // ... forward pagination values\n  } = usePaginationFragment(\n    graphql`\n      fragment FriendsListComponent_user on User {\n        name\n        friends(after: $after, before: $before, first: $first, last: $last)\n          @connection(key: \"FriendsListComponent_user_friends_connection\") {\n          edges {\n            node {\n              name\n              age\n            }\n          }\n        }\n      }\n    `,\n    userRef,\n  );\n\n  return (\n    <>\n      <h1>Friends of {data.name}:</h1>\n      <List items={data.friends?.edges.map(edge => edge.node)}>\n        {node => {\n          return (\n            <div>\n              {node.name} - {node.age}\n            </div>\n          );\n        }}\n      </List>\n\n      {hasPrevious ? (\n        <Button onClick={() => loadPrevious(10)}>\n          Load more friends\n        </Button>\n      ) : null}\n\n      {/* Forward pagination controls can go simultaneously here */}\n    </>\n  );\n}\n")),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"The APIs for both ",(0,i.mdx)("em",{parentName:"li"},'"forward"')," and ",(0,i.mdx)("em",{parentName:"li"},'"backward"')," are exactly the same, they're only named differently. When paginating forward, then the  ",(0,i.mdx)("inlineCode",{parentName:"li"},"after")," and ",(0,i.mdx)("inlineCode",{parentName:"li"},"first")," connection arguments will be used, when paginating backward, the ",(0,i.mdx)("inlineCode",{parentName:"li"},"before")," and ",(0,i.mdx)("inlineCode",{parentName:"li"},"last")," connection arguments will be used."),(0,i.mdx)("li",{parentName:"ul"},"Note that the primitives for both ",(0,i.mdx)("em",{parentName:"li"},'"forward"')," and ",(0,i.mdx)("em",{parentName:"li"},'"backward"')," pagination are exposed from a single call to ",(0,i.mdx)("inlineCode",{parentName:"li"},"usePaginationFragment"),", so both ",(0,i.mdx)("em",{parentName:"li"},'"forward"')," and ",(0,i.mdx)("em",{parentName:"li"},'"backward"')," pagination can be performed simultaneously in the same component.")),(0,i.mdx)("h2",{id:"custom-connection-state"},"Custom Connection State"),(0,i.mdx)("p",null,"By default, when using ",(0,i.mdx)("inlineCode",{parentName:"p"},"usePaginationFragment")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"@connection"),", Relay will ",(0,i.mdx)("em",{parentName:"p"},"append")," new pages of items to the connection when paginating ",(0,i.mdx)("em",{parentName:"p"},'"forward",')," and ",(0,i.mdx)("em",{parentName:"p"},"prepend")," new pages of items when paginating ",(0,i.mdx)("em",{parentName:"p"},'"backward"'),". This means that your component will always render the ",(0,i.mdx)("em",{parentName:"p"},"full")," connection, with ",(0,i.mdx)("em",{parentName:"p"},"all")," of the items that have been accumulated so far via pagination, and/or items that have been added or removed via mutations or subscriptions."),(0,i.mdx)("p",null,"However, it is possible that you'd need different behavior for how to merge and accumulate pagination results (or other updates to the connection), and/or derive local component state from changes to the connection. Some examples of this might be:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Keeping track of different ",(0,i.mdx)("em",{parentName:"li"},"visible")," slices or windows of the connection."),(0,i.mdx)("li",{parentName:"ul"},"Visually separating each ",(0,i.mdx)("em",{parentName:"li"},"page")," of items. This requires knowledge of the exact set of items inside each page that has been fetched."),(0,i.mdx)("li",{parentName:"ul"},'Displaying different ends of the same connection simultaneously, while keeping track of the "gaps" between them, and being able to merge results when preforming pagination between the gaps. For example, imagine rendering a list of comments where the oldest comments are displayed at the top, then a "gap" that can be interacted with to paginate, and then a section at the bottom which shows the most recent comments that have been added by the user or by real-time subscriptions.')),(0,i.mdx)("p",null,"To address these more complex use cases, Relay is still working on a solution:"),(0,i.mdx)("blockquote",null,(0,i.mdx)("p",{parentName:"blockquote"},"TBD")),(0,i.mdx)("h2",{id:"refreshing-connections"},"Refreshing connections"),(0,i.mdx)("blockquote",null,(0,i.mdx)("p",{parentName:"blockquote"},"TBD")),(0,i.mdx)("h2",{id:"prefetching-pages-of-a-connection"},"Prefetching Pages of a Connection"),(0,i.mdx)("blockquote",null,(0,i.mdx)("p",{parentName:"blockquote"},"TBD")),(0,i.mdx)("h2",{id:"rendering-one-page-of-items-at-a-time"},"Rendering One Page of Items at a Time"),(0,i.mdx)("blockquote",null,(0,i.mdx)("p",{parentName:"blockquote"},"TBD")),(0,i.mdx)(r.Z,{mdxType:"DocsRating"}))}f.isMDXComponent=!0},47596:function(e,n,t){var a=this&&this.__awaiter||function(e,n,t,a){return new(t||(t=Promise))((function(o,i){function r(e){try{s(a.next(e))}catch(n){i(n)}}function c(e){try{s(a.throw(e))}catch(n){i(n)}}function s(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(r,c)}s((a=a.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.getSpecInfo=void 0;const o=t(11737);n.getSpecInfo=function(e){return a(this,void 0,void 0,(function*(){return yield o.call({module:"bloks",api:"getSpecInfo",args:{styleId:e}})}))}},11737:function(e,n){var t=this&&this.__awaiter||function(e,n,t,a){return new(t||(t=Promise))((function(o,i){function r(e){try{s(a.next(e))}catch(n){i(n)}}function c(e){try{s(a.throw(e))}catch(n){i(n)}}function s(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(r,c)}s((a=a.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.call=void 0;let a=!1,o=0;const i={};n.call=function(e){return t(this,void 0,void 0,(function*(){if("staticdocs.thefacebook.com"!==window.location.hostname&&"localhost"!==window.location.hostname)return Promise.reject(new Error("Not running on static docs"));a||(a=!0,window.addEventListener("message",(e=>{if("static-docs-bridge-response"!==e.data.event)return;const n=e.data.id;n in i||console.error(`Recieved response for id: ${n} with no matching receiver`),"response"in e.data?i[n].resolve(e.data.response):i[n].reject(new Error(e.data.error)),delete i[n]})));const n=o++,t=new Promise(((e,t)=>{i[n]={resolve:e,reject:t}})),r={event:"static-docs-bridge-call",id:n,module:e.module,api:e.api,args:e.args},c="localhost"===window.location.hostname?"*":"https://www.internalfb.com";return window.parent.postMessage(r,c),t}))}},24855:function(e,n,t){var a=this&&this.__awaiter||function(e,n,t,a){return new(t||(t=Promise))((function(o,i){function r(e){try{s(a.next(e))}catch(n){i(n)}}function c(e){try{s(a.throw(e))}catch(n){i(n)}}function s(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(r,c)}s((a=a.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.reportFeatureUsage=n.reportContentCopied=void 0;const o=t(11737);n.reportContentCopied=function(e){return a(this,void 0,void 0,(function*(){const{textContent:n}=e;try{yield o.call({module:"feedback",api:"reportContentCopied",args:{textContent:n}})}catch(t){}}))},n.reportFeatureUsage=function(e){return a(this,void 0,void 0,(function*(){const{featureName:n,id:t}=e;console.log("used feature");try{yield o.call({module:"feedback",api:"reportFeatureUsage",args:{featureName:n,id:t}})}catch(a){}}))}},44256:function(e,n,t){var a=this&&this.__createBinding||(Object.create?function(e,n,t,a){void 0===a&&(a=t),Object.defineProperty(e,a,{enumerable:!0,get:function(){return n[t]}})}:function(e,n,t,a){void 0===a&&(a=t),e[a]=n[t]}),o=this&&this.__setModuleDefault||(Object.create?function(e,n){Object.defineProperty(e,"default",{enumerable:!0,value:n})}:function(e,n){e.default=n}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&a(n,e,t);return o(n,e),n};Object.defineProperty(n,"__esModule",{value:!0}),n.OssOnly=n.FbInternalOnly=n.getEphemeralDiffNumber=n.hasEphemeralDiffNumber=n.isInternal=n.validateFbContentArgs=n.fbInternalOnly=n.fbContent=n.inpageeditor=n.feedback=n.uidocs=n.bloks=void 0,n.bloks=i(t(47596)),n.uidocs=i(t(17483)),n.feedback=i(t(24855)),n.inpageeditor=i(t(27312));const r=["internal","external"];function c(e){return d(e),l()?"internal"in e?s(e.internal):[]:"external"in e?s(e.external):[]}function s(e){return"function"==typeof e?e():e}function d(e){if("object"!=typeof e)throw new Error(`fbContent() args must be an object containing keys: ${r}. Instead got ${e}`);if(!Object.keys(e).find((e=>r.find((n=>n===e)))))throw new Error(`No valid args found in ${JSON.stringify(e)}. Accepted keys: ${r}`);const n=Object.keys(e).filter((e=>!r.find((n=>n===e))));if(n.length>0)throw new Error(`Unexpected keys ${n} found in fbContent() args. Accepted keys: ${r}`)}function l(){try{return Boolean(!1)}catch(e){return console.log("process.env.FB_INTERNAL couldn't be read, maybe you forgot to add the required webpack EnvironmentPlugin config?",e),!1}}function u(){try{return null}catch(e){return console.log("process.env.PHABRICATOR_DIFF_NUMBER couldn't be read, maybe you forgot to add the required webpack EnvironmentPlugin config?",e),null}}n.fbContent=c,n.fbInternalOnly=function(e){return c({internal:e})},n.validateFbContentArgs=d,n.isInternal=l,n.hasEphemeralDiffNumber=function(){return Boolean(u())},n.getEphemeralDiffNumber=u,n.FbInternalOnly=function(e){return l()?e.children:null},n.OssOnly=function(e){return l()?null:e.children}},27312:function(e,n,t){var a=this&&this.__awaiter||function(e,n,t,a){return new(t||(t=Promise))((function(o,i){function r(e){try{s(a.next(e))}catch(n){i(n)}}function c(e){try{s(a.throw(e))}catch(n){i(n)}}function s(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(r,c)}s((a=a.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.submitDiff=void 0;const o=t(11737);n.submitDiff=function(e){return a(this,void 0,void 0,(function*(){const{file_path:n,new_content:t,project_name:a,diff_number:i}=e;try{return yield o.call({module:"inpageeditor",api:"createPhabricatorDiffApi",args:{file_path:n,new_content:t,project_name:a,diff_number:i}})}catch(r){throw new Error(`Error occurred while trying to submit diff. Stack trace: ${r}`)}}))}},17483:function(e,n,t){var a=this&&this.__awaiter||function(e,n,t,a){return new(t||(t=Promise))((function(o,i){function r(e){try{s(a.next(e))}catch(n){i(n)}}function c(e){try{s(a.throw(e))}catch(n){i(n)}}function s(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(r,c)}s((a=a.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.getApi=n.docsets=void 0;const o=t(11737);n.docsets={BLOKS_CORE:"887372105406659"},n.getApi=function(e){return a(this,void 0,void 0,(function*(){const{name:n,framework:t,docset:a}=e;return yield o.call({module:"uidocs",api:"getApi",args:{name:n,framework:t,docset:a}})}))}}}]);