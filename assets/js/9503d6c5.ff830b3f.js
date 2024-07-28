"use strict";(self.webpackChunkdocs_1=self.webpackChunkdocs_1||[]).push([[2757],{42556:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(85893),o=n(11151);const i={sidebar_position:10},a="FAQ for Smart Contracts",s={id:"learn/interoperability/xcm/building-with-xcm/faq-for-smart-contracts",title:"FAQ for Smart Contracts",description:"Q: Unable to use transferFrom for XC20 (DOT, KSM...) in Solidity contract",source:"@site/docs/learn/interoperability/xcm/building-with-xcm/faq-for-smart-contracts.md",sourceDirName:"learn/interoperability/xcm/building-with-xcm",slug:"/learn/interoperability/xcm/building-with-xcm/faq-for-smart-contracts",permalink:"/docs/learn/interoperability/xcm/building-with-xcm/faq-for-smart-contracts",draft:!1,unlisted:!1,editUrl:"https://github.com/AstarNetwork/astar-docs/tree/main/docs/learn/interoperability/xcm/building-with-xcm/faq-for-smart-contracts.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Client Applications",permalink:"/docs/learn/interoperability/xcm/building-with-xcm/client-applications"},next:{title:"Open HRMP Channels",permalink:"/docs/learn/interoperability/xcm/integration/hrmp"}},c={},l=[{value:"Q: Unable to use <code>transferFrom</code> for XC20 (DOT, KSM...) in Solidity contract",id:"q-unable-to-use-transferfrom-for-xc20-dot-ksm-in-solidity-contract",level:2}];function d(t){const e={code:"code",h1:"h1",h2:"h2",p:"p",...(0,o.a)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"faq-for-smart-contracts",children:"FAQ for Smart Contracts"}),"\n",(0,r.jsxs)(e.h2,{id:"q-unable-to-use-transferfrom-for-xc20-dot-ksm-in-solidity-contract",children:["Q: Unable to use ",(0,r.jsx)(e.code,{children:"transferFrom"})," for XC20 (DOT, KSM...) in Solidity contract"]}),"\n",(0,r.jsx)(e.p,{children:"This was an issue when an account had to hold some amount of native currency in order to be eligible to receive foreign currency.\nSince this was causing problems for our users, it was changed and no is no longer a requirement; now being able to pay gas with foreign assets."}),"\n",(0,r.jsx)(e.p,{children:"Please note that for custom assets, which aren't supported as payment asset by Astar or Shiden, account (or contract) still has\nto hold at least the ED in native currency to be eligible to receive a custom asset."})]})}function m(t={}){const{wrapper:e}={...(0,o.a)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(d,{...t})}):d(t)}},11151:(t,e,n)=>{n.d(e,{Z:()=>s,a:()=>a});var r=n(67294);const o={},i=r.createContext(o);function a(t){const e=r.useContext(i);return r.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function s(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:a(t.components),r.createElement(i.Provider,{value:e},t.children)}}}]);