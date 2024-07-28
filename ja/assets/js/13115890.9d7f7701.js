"use strict";(self.webpackChunkdocs_1=self.webpackChunkdocs_1||[]).push([[4056],{66456:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>x,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var s=t(85893),r=t(11151),i=t(3837);const o={sidebar_position:9},c="Create a Proxy Account",a={id:"use/manage-wallets/pallet-proxy",title:"Create a Proxy Account",description:"---",source:"@site/docs/use/manage-wallets/pallet-proxy.md",sourceDirName:"use/manage-wallets",slug:"/use/manage-wallets/pallet-proxy",permalink:"/ja/docs/use/manage-wallets/pallet-proxy",draft:!1,unlisted:!1,editUrl:"https://github.com/AstarNetwork/astar-docs/tree/main/docs/use/manage-wallets/pallet-proxy.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Register or Unregister AstarPass/ShidenPass",permalink:"/ja/docs/use/manage-wallets/astarpass-register"},next:{title:"Metamask\u306bAstar Network\u3092\u8a2d\u5b9a\u3059\u308b\u65b9\u6cd5",permalink:"/ja/docs/use/evm-guides/setup-metamask"}},l={},d=[{value:"<strong>Verifying Proxy Account</strong>",id:"verifying-proxy-account",level:2},{value:"<strong>Executing a Proxy Transaction</strong>",id:"executing-a-proxy-transaction",level:2},{value:"Submitting a Proxy Transaction",id:"submitting-a-proxy-transaction",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"create-a-proxy-account",children:"Create a Proxy Account"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsxs)(n.p,{children:["This tutorial will be using ",(0,s.jsx)(n.a,{href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.shiden.astar.network#/extrinsics",children:"Polkadot.js Apps"})," for manipulating proxies."]}),"\n",(0,s.jsx)(n.p,{children:"To create a proxy account, follow these steps:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Go to the Developer tab:"}),' Locate and navigate to the "Developer" tab on the website.']}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Select Extrinsics:"}),' Within the Developer tab, find the "Extrinsics" and select it.']}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Select the primary account:"})," Choose the primary account for which you want to create a proxy from the list. We will be using ",(0,s.jsx)(n.strong,{children:"ALICE"})," as primary account in this tutorial."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Submit the following extrinsic:"})," From the ",(0,s.jsx)(n.code,{children:"submit the following extrinsic"})," dropdown, select ",(0,s.jsx)(n.strong,{children:"proxy"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Choose the ",(0,s.jsx)(n.strong,{children:"addProxy"})," extrinsic"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Select the ",(0,s.jsx)(n.strong,{children:"delegate"})," account for the proxy"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Choose the proxyType:"})," From the proxyType dropdown, choose ",(0,s.jsx)(n.strong,{children:"Balances"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"(Optional) Add a time delay:"})," If desired, you may have the option to add a time delay to the transaction. This adds an extra layer of security by requiring the primary account to review the pending transaction before it is executed. Specify the desired number of blocks for the time delay."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Submit the transaction:"})," Once you have filled in all the necessary details, find the button to submit the transaction. Click on it to initiate the process."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.Z,{src:t(12646).Z,width:"100%"}),"\n",(0,s.jsxs)(n.p,{children:["You will then be prompted to authorize and sign the transaction. Go ahead and click ",(0,s.jsx)(n.strong,{children:"Sign and Submit"})," to create the proxy relationship."]}),"\n",(0,s.jsx)(i.Z,{src:t(6878).Z,width:"100%"}),"\n",(0,s.jsx)(n.p,{children:"Once the transaction has been successfully submitted, you will receive notifications confirming the transaction."}),"\n",(0,s.jsxs)(n.p,{children:["You can also find the event ",(0,s.jsx)(n.code,{children:"proxy.ProxyAdded"})," in recently emitted events inside  ",(0,s.jsx)(n.strong,{children:"Network"})," > ",(0,s.jsx)(n.strong,{children:"Explorer"})," tab."]}),"\n",(0,s.jsx)(i.Z,{src:t(33158).Z,width:"100%"}),"\n",(0,s.jsx)(n.h2,{id:"verifying-proxy-account",children:(0,s.jsx)(n.strong,{children:"Verifying Proxy Account"})}),"\n",(0,s.jsxs)(n.p,{children:["There are many ways of verifying if your proxy was added or not. Easiest way to do so is using the ",(0,s.jsx)(n.strong,{children:"Accounts"})," page."]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Navigate to the Accounts page by clicking on ",(0,s.jsx)(n.strong,{children:"Accounts"})," tab and then selecting ",(0,s.jsx)(n.strong,{children:"Accounts"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Here find you ",(0,s.jsx)(n.strong,{children:"Primary Account"})," and click on the 3 dots as seen in the provided picture."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.Z,{src:t(50870).Z,width:"100%"}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsxs)(n.li,{children:["Select ",(0,s.jsx)(n.strong,{children:"Manage proxies"})," option."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Here you can see the list of all proxies that you account has. For this tutorial, it is only ",(0,s.jsx)(n.strong,{children:"Balances"})," proxy that we added in the above section."]}),"\n",(0,s.jsx)(i.Z,{src:t(52320).Z,width:"100%"}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsxs)(n.p,{children:["You can also remove the proxy by clicking on the (X) icon next to the proxy account (in our case ",(0,s.jsx)(n.strong,{children:"BOB"}),"). After clicking (X) button, the proxy will diappear from the list, Click on ",(0,s.jsx)(n.code,{children:"Submit"}),"."]}),(0,s.jsx)(n.p,{children:"Once the transaction has successfully been submitted, you can review your current proxies or if you removed all proxies you will notice the proxy icon is no longer being displayed next to the primary account."})]}),"\n",(0,s.jsx)(n.h2,{id:"executing-a-proxy-transaction",children:(0,s.jsx)(n.strong,{children:"Executing a Proxy Transaction"})}),"\n",(0,s.jsxs)(n.p,{children:["To execute a proxy transaction, go back to the ",(0,s.jsx)(n.strong,{children:"Extrinsic"})," page and do the following:"]}),"\n",(0,s.jsx)(n.h2,{id:"submitting-a-proxy-transaction",children:"Submitting a Proxy Transaction"}),"\n",(0,s.jsx)(n.p,{children:"To submit a proxy transaction, follow these steps:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Select the proxy account:"}),' Choose the proxy account to submit the transaction from using the "Select Account" dropdown.']}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Submit the following extrinsic:"}),' From the "Submit the following extrinsic" menu, select "proxy".']}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Choose the proxy extrinsic:"}),' Select the "proxy" extrinsic.']}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Select the primary account:"}),' From the "real" dropdown, select ',(0,s.jsx)(n.strong,{children:"Id"})," and then select the ",(0,s.jsx)(n.strong,{children:"Primary Account"})," (ALICE in our case)"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Select the ",(0,s.jsx)(n.strong,{children:"balances"})," call"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Choose the ",(0,s.jsx)(n.strong,{children:"transfer"})," extrinsic"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Enter the destination address:"}),' In the "dest" field, enter the address where you want to send the funds.']}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Enter the value:"}),' In the "value" field, enter the amount of funds to send.']}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Click Submit Transaction:"}),' Once you have entered all the necessary details, click on "Submit Transaction" to initiate the transaction.']}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.Z,{src:t(57031).Z,width:"100%"}),"\n",(0,s.jsx)(n.p,{children:"Congratulations! You've completed the entire process successfully. You have created a proxy account, reviewed all the proxy accounts linked to your primary account, performed a proxy transaction, and even removed a proxy account. Well done!"})]})}function x(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},3837:(e,n,t)=>{t.d(n,{Z:()=>r});t(67294);var s=t(85893);function r(e){let{src:n,caption:t,width:r="460px"}=e;return(0,s.jsxs)("center",{children:[(0,s.jsx)("br",{}),(0,s.jsxs)("figure",{children:[(0,s.jsx)("img",{src:n,alt:t,width:r}),(0,s.jsx)("figcaption",{children:t})]}),(0,s.jsx)("br",{})]})}},12646:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/33-4d0fc24d9c4269643bb7ad0aaedc1d46.png"},6878:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/34-7415bba996e00d89c1ee01bb2544a9f9.png"},33158:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/35-acc441ba4802834a1a4df3961137986f.png"},50870:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/36-73c4eaa5b6059c8b8351968b57aca50a.png"},52320:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/37-b6bab0a53423235b3df6a11f423647b1.png"},57031:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/38-691e6b85080246fb08b6af7f11e40e29.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>o});var s=t(67294);const r={},i=s.createContext(r);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);