"use strict";(self.webpackChunkdocs_1=self.webpackChunkdocs_1||[]).push([[2993],{32600:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var n=t(85893),o=t(11151),i=t(74866),s=t(85162);const a={},l="Privy",c={id:"build/EVM/developer-tooling/privy",title:"Privy",description:"Introduction",source:"@site/docs/build/EVM/developer-tooling/privy.mdx",sourceDirName:"build/EVM/developer-tooling",slug:"/build/EVM/developer-tooling/privy",permalink:"/docs/build/EVM/developer-tooling/privy",draft:!1,unlisted:!1,editUrl:"https://github.com/AstarNetwork/astar-docs/tree/main/docs/build/EVM/developer-tooling/privy.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Truffle",permalink:"/docs/build/EVM/developer-tooling/Truffle"},next:{title:"Precompiles",permalink:"/docs/build/EVM/precompiles/"}},d={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Getting started",id:"getting-started",level:2},{value:"Step 1",id:"step-1",level:3},{value:"Step 2",id:"step-2",level:3},{value:"Step 3",id:"step-3",level:3},{value:"Step 4",id:"step-4",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Learn more",id:"learn-more",level:2}];function h(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"privy",children:"Privy"}),"\n",(0,n.jsx)(r.h2,{id:"introduction",children:"Introduction"}),"\n",(0,n.jsxs)(r.p,{children:["Privy is the easiest way for web3 developers to onboard their users, regardless of whether they already have wallets, across mobile and desktop. Privy offers ",(0,n.jsx)(r.a,{href:"https://www.privy.io/features/wallets",children:"embedded wallets"})," so you can seamlessly provision self-custodial wallets for users who sign in via email or social login, as well as ",(0,n.jsx)(r.a,{href:"https://www.privy.io/features/connectors",children:"powerful connectors"})," for web3 native users who prefer to sign in with their existing wallets. It\u2019s one library to onboard all users, regardless of where they are in their web3 journey."]}),"\n",(0,n.jsxs)(r.p,{children:["Developers building end-user facing applications in the Astar ecosystem can leverage Privy to expand their addressable market, improve onboarding funnel conversion and better understand their users. ",(0,n.jsxs)(r.strong,{children:["For a limited time, Astar developers can get free unlimited access to Privy\u2019s features for their first three months using the product, by reaching out to us at ",(0,n.jsx)(r.a,{href:"mailto:astar@privy.io",children:"astar@privy.io"})]}),". For more information on Privy, check out the ",(0,n.jsx)(r.a,{href:"http://privy.io",children:"website"}),", ",(0,n.jsx)(r.a,{href:"http://docs.privy.io",children:"API docs"}),", ",(0,n.jsx)(r.a,{href:"http://demo.privy.io",children:"product demo"}),", and sample customer integrations (",(0,n.jsx)(r.a,{href:"http://lighthouse.world/",children:"Lighthouse"}),",\xa0",(0,n.jsx)(r.a,{href:"http://courtyard.io/",children:"Courtyard"}),", and\xa0",(0,n.jsx)(r.a,{href:"http://shibuya.xyz/",children:"Shibuya"}),")."]}),"\n",(0,n.jsx)(r.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsx)(r.p,{children:"To use Privy in your app, you'll need to:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Have basic knowledge of JavaScript and React"}),"\n",(0,n.jsx)(r.li,{children:"Use React 18 in your app"}),"\n",(0,n.jsx)(r.li,{children:"Use only EVM-compatible networks for any on-chain actions"}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"getting-started",children:"Getting started"}),"\n",(0,n.jsx)(r.h3,{id:"step-1",children:"Step 1"}),"\n",(0,n.jsxs)(r.p,{children:["Request API keys by reaching out to our team at ",(0,n.jsx)(r.a,{href:"mailto:astar@privy.io",children:"astar@privy.io"})," to ensure you\u2019re able to access Privy\u2019s special offer of three free months of unlimited software use. We'll set you up with a ",(0,n.jsx)(r.a,{href:"https://docs.privy.io/guide/console/api-keys#app-id",children:"Privy app ID"})," that you can use to initialize the SDK."]}),"\n",(0,n.jsx)(r.h3,{id:"step-2",children:"Step 2"}),"\n",(0,n.jsxs)(r.p,{children:["Install the\xa0",(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.a,{href:"https://www.npmjs.com/package/@privy-io/react-auth",children:"Privy React Auth SDK"})}),"\xa0using\xa0",(0,n.jsx)(r.code,{children:"npm"}),":"]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"npm install @privy-io/react-auth@latest"})}),"\n",(0,n.jsx)(r.h3,{id:"step-3",children:"Step 3"}),"\n",(0,n.jsxs)(r.p,{children:["Once you have your app ID and have installed the SDK,\xa0",(0,n.jsxs)(r.strong,{children:["in your React project, wrap your components with a\xa0",(0,n.jsx)(r.a,{href:"https://docs.privy.io/reference/react-auth/modules#privyprovider",children:"PrivyProvider"})]}),". The\xa0",(0,n.jsx)(r.a,{href:"https://docs.privy.io/reference/react-auth/modules#privyprovider",children:"PrivyProvider"}),"\xa0should wrap any component that will use the Privy SDK."]}),"\n",(0,n.jsxs)(r.p,{children:["For example, in a ",(0,n.jsx)(r.a,{href:"https://nextjs.org/",children:"NextJS"})," or ",(0,n.jsx)(r.a,{href:"https://create-react-app.dev/",children:"Create React App"})," project, you may wrap your components like so:"]}),"\n",(0,n.jsxs)(i.Z,{children:[(0,n.jsx)(s.Z,{value:"nextjs",label:"NextJS",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-tsx",metastring:"title=_app.jsx",children:"import type {AppProps} from 'next/app';\nimport Head from 'next/head';\nimport {PrivyProvider} from '@privy-io/react-auth';\n\n// This method will be passed to the PrivyProvider as a callback\n// that runs after successful login.\nconst handleLogin = (user) => {\n  console.log(`User ${user.id} logged in!`)\n}\n\nfunction MyApp({Component, pageProps}: AppProps) {\n  return (\n    <>\n      <Head>\n        {/* Edit your HTML header */}\n      </Head>\n      <PrivyProvider\n        appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID}\n        onSuccess={handleLogin}\n        config={{\n          loginMethods: ['email', 'wallet'],\n          appearance: {\n            theme: 'light',\n            accentColor: '#676FFF',\n            logo: 'https://your-logo-url',\n          },\n        }}\n      >\n        <Component {...pageProps} />\n      </PrivyProvider>\n    </>\n  );\n}\n"})})}),(0,n.jsx)(s.Z,{value:"cra",label:"Create React App",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-tsx",metastring:"title=index.js",children:"import React from 'react';\nimport ReactDOM from 'react-dom/client';\nimport './index.css';\nimport App from './App';\nimport reportWebVitals from './reportWebVitals';\nimport {PrivyProvider} from '@privy-io/react-auth';\n\nconst root = ReactDOM.createRoot(document.getElementById('root'));\n\n// This method will be passed to the PrivyProvider as a callback\n// that runs after successful login.\nconst handleLogin = (user) => {\n  console.log(`User ${user.id} logged in!`)\n}\n\nroot.render(\n  <React.StrictMode>\n    <PrivyProvider\n      appId={process.env.REACT_APP_PRIVY_APP_ID}\n      onSuccess={handleLogin}\n      config={{\n        loginMethods: ['email', 'wallet'],\n        appearance: {\n          theme: 'light',\n          accentColor: '#676FFF',\n          logo: 'https://your-logo-url',\n        },\n      }}\n    >\n      <App />\n    </PrivyProvider>\n  </React.StrictMode>\n);\n\n// See https://docs.privy.io/guide/troubleshooting/webpack for how to handle\n// common build issues with web3 projects bootstrapped with Create React App\n"})})})]}),"\n",(0,n.jsxs)(r.p,{children:["The\xa0",(0,n.jsx)(r.a,{href:"https://docs.privy.io/reference/react-auth/modules#privyprovider",children:"PrivyProvider"}),"\xa0takes the following properties:"]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["your\xa0",(0,n.jsx)(r.a,{href:"https://docs.privy.io/reference/react-auth/interfaces/PrivyProviderProps#appid",children:"appId"})]}),"\n",(0,n.jsxs)(r.li,{children:["an optional\xa0",(0,n.jsx)(r.a,{href:"https://docs.privy.io/reference/react-auth/interfaces/PrivyProviderProps#onsuccess",children:"onSuccess"}),"\xa0callback which will execute once a user successfully logs in"]}),"\n",(0,n.jsxs)(r.li,{children:["an optional\xa0",(0,n.jsx)(r.a,{href:"https://docs.privy.io/reference/react-auth/interfaces/PrivyProviderProps#createprivywalletonlogin",children:"createPrivyWalletOnLogin"}),"\xa0boolean to configure whether you'd like your users to create\xa0",(0,n.jsx)(r.a,{href:"https://docs.privy.io/guide/frontend/embedded/overview",children:"embedded wallets"}),"\xa0when logging in"]}),"\n",(0,n.jsxs)(r.li,{children:["an optional\xa0",(0,n.jsx)(r.a,{href:"https://docs.privy.io/reference/react-auth/modules#privyclientconfig",children:"config"}),"\xa0property to customize your onboarding experience.","\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"The example above will set you up with email and wallet logins."}),"\n",(0,n.jsxs)(r.li,{children:["See\xa0",(0,n.jsx)(r.a,{href:"https://docs.privy.io/guide/configuration/",children:"this page"}),"\xa0for more on how to construct the right\xa0",(0,n.jsx)(r.a,{href:"https://docs.privy.io/reference/react-auth/modules#privyclientconfig",children:"config"}),"\xa0for your app!"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"step-4",children:"Step 4"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsxs)(r.strong,{children:["You can now use the Privy SDK throughout your app via the\xa0",(0,n.jsx)(r.a,{href:"https://docs.privy.io/reference/react-auth/modules#useprivy",children:"usePrivy"}),"\xa0hook!"]}),"\xa0Check out our\xa0",(0,n.jsx)(r.a,{href:"https://github.com/privy-io/next-starter",children:"starter repo"}),"\xa0to see what a simple end-to-end integration looks like."]}),"\n",(0,n.jsx)(r.p,{children:"Read on to learn how you can use Privy to:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://docs.privy.io/guide/frontend/authentication/login",children:"log your users in"})}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://docs.privy.io/guide/frontend/users/linking",children:"prompt users to link additional accounts"}),", as part of progressive onboarding"]}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://docs.privy.io/guide/frontend/wallets/external",children:"interface with users' crypto wallets"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://docs.privy.io/guide/frontend/embedded/overview",children:"create Ethereum wallets embedded in your app"})}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"and to do so much more!"}),"\n",(0,n.jsx)(r.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,n.jsxs)(r.p,{children:["If you're using a framework like\xa0",(0,n.jsx)(r.a,{href:"https://create-react-app.dev/",children:"create-react-app"}),"\xa0to build your project, you may encounter errors related to\xa0",(0,n.jsx)(r.a,{href:"https://webpack.js.org/blog/2020-10-10-webpack-5-release/",children:"Webpack 5"}),". To resolve, check out ",(0,n.jsx)(r.a,{href:"https://docs.privy.io/guide/troubleshooting/webpack",children:"this guide"}),"."]}),"\n",(0,n.jsx)(r.h2,{id:"learn-more",children:"Learn more"}),"\n",(0,n.jsxs)(r.p,{children:["If there\u2019s anything we can do to support your Privy integration, please reach out to us at ",(0,n.jsx)(r.a,{href:"mailto:astar@privy.io",children:"astar@privy.io"})," or via our ",(0,n.jsx)(r.a,{href:"https://join.slack.com/t/privy-developers/shared_invite/zt-1y6sjkn3l-cJQ1ryWRA7RkMGuHHXIX8w",children:"developer slack"}),"."]})]})}function p(e={}){const{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},85162:(e,r,t)=>{t.d(r,{Z:()=>s});t(67294);var n=t(86010);const o={tabItem:"tabItem_Ymn6"};var i=t(85893);function s(e){let{children:r,hidden:t,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,n.Z)(o.tabItem,s),hidden:t,children:r})}},74866:(e,r,t)=>{t.d(r,{Z:()=>w});var n=t(67294),o=t(86010),i=t(12466),s=t(16550),a=t(20469),l=t(91980),c=t(67392),d=t(50012);function u(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:r,children:t}=e;return(0,n.useMemo)((()=>{const e=r??function(e){return u(e).map((e=>{let{props:{value:r,label:t,attributes:n,default:o}}=e;return{value:r,label:t,attributes:n,default:o}}))}(t);return function(e){const r=(0,c.l)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function p(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function v(e){let{queryString:r=!1,groupId:t}=e;const o=(0,s.k6)(),i=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,l._X)(i),(0,n.useCallback)((e=>{if(!i)return;const r=new URLSearchParams(o.location.search);r.set(i,e),o.replace({...o.location,search:r.toString()})}),[i,o])]}function f(e){const{defaultValue:r,queryString:t=!1,groupId:o}=e,i=h(e),[s,l]=(0,n.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:i}))),[c,u]=v({queryString:t,groupId:o}),[f,y]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[o,i]=(0,d.Nk)(t);return[o,(0,n.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:o}),m=(()=>{const e=c??f;return p({value:e,tabValues:i})?e:null})();(0,a.Z)((()=>{m&&l(m)}),[m]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),y(e)}),[u,y,i]),tabValues:i}}var y=t(72389);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(85893);function x(e){let{className:r,block:t,selectedValue:n,selectValue:s,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{const r=e.currentTarget,t=l.indexOf(r),o=a[t].value;o!==n&&(c(r),s(o))},u=e=>{let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;r=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;r=l[t]??l[l.length-1];break}}r?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},r),children:a.map((e=>{let{value:r,label:t,attributes:i}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:e=>l.push(e),onKeyDown:u,onClick:d,...i,className:(0,o.Z)("tabs__item",m.tabItem,i?.className,{"tabs__item--active":n===r}),children:t??r},r)}))})}function b(e){let{lazy:r,children:t,selectedValue:o}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){const e=i.find((e=>e.props.value===o));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:i.map(((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==o})))})}function j(e){const r=f(e);return(0,g.jsxs)("div",{className:(0,o.Z)("tabs-container",m.tabList),children:[(0,g.jsx)(x,{...e,...r}),(0,g.jsx)(b,{...e,...r})]})}function w(e){const r=(0,y.Z)();return(0,g.jsx)(j,{...e,children:u(e.children)},String(r))}},11151:(e,r,t)=>{t.d(r,{Z:()=>a,a:()=>s});var n=t(67294);const o={},i=n.createContext(o);function s(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);