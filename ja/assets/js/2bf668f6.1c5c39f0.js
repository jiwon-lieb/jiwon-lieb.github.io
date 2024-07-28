"use strict";(self.webpackChunkdocs_1=self.webpackChunkdocs_1||[]).push([[3330],{67031:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var n=o(85893),s=o(11151),a=o(3837);const r={},i="Overview",c={id:"build/integrations/account-abstraction/biconomy/index",title:"Overview",description:"The Biconomy SDK is an Account Abstraction toolkit that enables the simplest UX on your dApp, wallet or appchain. Built on top of the ERC 4337 solution for Account Abstraction, we offer a full-stack solution for tapping into the power of our Smart Accounts Platform, Paymasters, and Bundlers.",source:"@site/docs/build/integrations/account-abstraction/biconomy/index.md",sourceDirName:"build/integrations/account-abstraction/biconomy",slug:"/build/integrations/account-abstraction/biconomy/",permalink:"/ja/docs/build/integrations/account-abstraction/biconomy/",draft:!1,unlisted:!1,editUrl:"https://github.com/AstarNetwork/astar-docs/tree/main/docs/build/integrations/account-abstraction/biconomy/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Banana SDK",permalink:"/ja/docs/build/integrations/account-abstraction/banana/"},next:{title:"Quickstart",permalink:"/ja/docs/build/integrations/account-abstraction/biconomy/biconomy-sdk"}},u={},d=[{value:"Smart Accounts Platform",id:"smart-accounts-platform",level:2},{value:"Paymaster",id:"paymaster",level:2},{value:"Sponsorship Paymaster",id:"sponsorship-paymaster",level:3},{value:"Token Paymaster",id:"token-paymaster",level:3},{value:"Bundler",id:"bundler",level:2}];function l(t){const e={a:"a",h1:"h1",h2:"h2",h3:"h3",p:"p",...(0,s.a)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"overview",children:"Overview"}),"\n",(0,n.jsx)(e.p,{children:"The Biconomy SDK is an Account Abstraction toolkit that enables the simplest UX on your dApp, wallet or appchain. Built on top of the ERC 4337 solution for Account Abstraction, we offer a full-stack solution for tapping into the power of our Smart Accounts Platform, Paymasters, and Bundlers."}),"\n",(0,n.jsx)(a.Z,{src:o(27265).Z,width:"80%"}),"\n",(0,n.jsx)(e.h2,{id:"smart-accounts-platform",children:"Smart Accounts Platform"}),"\n",(0,n.jsx)(e.p,{children:"The Biconomy Smart Account is an ERC 4337-compliant solution that works with any Paymaster and Bundler service. Smart Accounts are governed by code instead of ECDSA, which allows for other types of signature algorithms to be used with the Smart Account. Additionally, the smart accounts package allows you to quickly and easily build and execute User Operations or userOps. These are pseudo-transaction objects that eventually execute as a transaction on the EVM."}),"\n",(0,n.jsxs)(e.p,{children:["The Biconomy Smart Accounts are signer agnostic, which allows you to use any authorization package of your choice as long as you can pass a signer to our SDK upon the creation of a Smart Account. Check out different ways you can create a Biconomy Smart Account ",(0,n.jsx)(e.a,{href:"https://docs.biconomy.io/category/signers",children:"here"}),"."]}),"\n",(0,n.jsx)(e.p,{children:"Smart Accounts are further enhanced by validation modules that allow you to execute arbitrary logic before validating a userOp. This allows you, as a developer, to build modules that allow for session keys, multi-chain validation modules, pass keys, and more."}),"\n",(0,n.jsx)(a.Z,{src:o(58423).Z,width:"80%"}),"\n",(0,n.jsxs)(e.p,{children:["If you want to start diving into Smart Accounts you can do so ",(0,n.jsx)(e.a,{href:"https://docs.biconomy.io/category/smart-accounts",children:"here"}),". If you know all about Smart Accounts and prefer to start working with modules, start learning about them ",(0,n.jsx)(e.a,{href:"https://docs.biconomy.io/category/modules",children:"here"})," or follow this step-by-step ",(0,n.jsx)(e.a,{href:"https://docs.biconomy.io/category/session-keys-tutorial",children:"tutorial"})," on how to build a dApp that utilizes session key modules."]}),"\n",(0,n.jsx)(e.h2,{id:"paymaster",children:"Paymaster"}),"\n",(0,n.jsx)(e.p,{children:"Biconomy offers a Paymaster service designed with one of the best developer experiences in mind. Simply use one URL and switch modes between our sponsorship paymaster and our Token Paymaster."}),"\n",(0,n.jsx)(e.h3,{id:"sponsorship-paymaster",children:"Sponsorship Paymaster"}),"\n",(0,n.jsx)(a.Z,{src:o(56697).Z,width:"80%"}),"\n",(0,n.jsxs)(e.p,{children:["If the mode you choose in the request to the Paymaster URL is the sponsored mode, your users will benefit from gasless transactions, and you remove the friction point of needed native tokens to pay for gas on transactions. Learn how to set up your paymaster ",(0,n.jsx)(e.a,{href:"https://docs.biconomy.io/dashboard/paymaster",children:"here"}),"."]}),"\n",(0,n.jsx)(e.h3,{id:"token-paymaster",children:"Token Paymaster"}),"\n",(0,n.jsx)(a.Z,{src:o(26565).Z,width:"80%"}),"\n",(0,n.jsxs)(e.p,{children:["Switching the mode of your Paymster to ERC20 allows you to unlock an experience where users can pay gas in any of our supported ERC20 tokens on different networks. Check out the latest supported tokens ",(0,n.jsx)(e.a,{href:"https://docs.biconomy.io/supportedchains/supportedTokens",children:"here"}),"."]}),"\n",(0,n.jsxs)(e.p,{children:["Learn how to utilize either of these Paymasters by checking out our How To Guide on ",(0,n.jsx)(e.a,{href:"https://docs.biconomy.io/category/executing-transactions",children:"Executing transactions"})]}),"\n",(0,n.jsx)(e.h2,{id:"bundler",children:"Bundler"}),"\n",(0,n.jsxs)(e.p,{children:["The Bundler is a service that tracks userOps that exist in an alternative mem pool and as the name suggests, bundles them together to send to an Entry Point Contract for eventual execution onchain. This is the final piece of the flow where after constructing your userOp and then potentially signing it with data from a paymaster, you send the userOp on chain to be handled and executed as a transaction on the EVM. You can start using our Bundlers right now in your dApps; each of our ",(0,n.jsx)(e.a,{href:"https://docs.biconomy.io/category/tutorials",children:"tutorials"})," will walk you through how to use them in different scenarios."]})]})}function h(t={}){const{wrapper:e}={...(0,s.a)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(l,{...t})}):l(t)}},3837:(t,e,o)=>{o.d(e,{Z:()=>s});o(67294);var n=o(85893);function s(t){let{src:e,caption:o,width:s="460px"}=t;return(0,n.jsxs)("center",{children:[(0,n.jsx)("br",{}),(0,n.jsxs)("figure",{children:[(0,n.jsx)("img",{src:e,alt:o,width:s}),(0,n.jsx)("figcaption",{children:o})]}),(0,n.jsx)("br",{})]})}},26565:(t,e,o)=>{o.d(e,{Z:()=>n});const n=o.p+"assets/images/erc20gas-0479038d7d81ef11fed653a730582994.png"},27265:(t,e,o)=>{o.d(e,{Z:()=>n});const n=o.p+"assets/images/fullstackaa-a27c2e744e36be0f3ff8772163d5a4a9.png"},58423:(t,e,o)=>{o.d(e,{Z:()=>n});const n=o.p+"assets/images/modularsa-60f578ac7d36fa613de4ded4cc86397b.png"},56697:(t,e,o)=>{o.d(e,{Z:()=>n});const n=o.p+"assets/images/sponsored-f09ed2b2c978facb998bffae369fe9c8.png"},11151:(t,e,o)=>{o.d(e,{Z:()=>i,a:()=>r});var n=o(67294);const s={},a=n.createContext(s);function r(t){const e=n.useContext(a);return n.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function i(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:r(t.components),n.createElement(a.Provider,{value:e},t.children)}}}]);