"use strict";(self.webpackChunkdocs_1=self.webpackChunkdocs_1||[]).push([[9368],{81949:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>a,default:()=>g,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var n=t(85893),r=t(11151),i=t(3837);const o={sidebar_position:2,sidebar_label:"Ledger for Astar Native",title:"Interact with Ledger using Astar Native Accounts"},a=void 0,d={id:"build/integrations/wallets/ledger/ledger-native",title:"Interact with Ledger using Astar Native Accounts",description:"Introduction",source:"@site/docs/build/integrations/wallets/ledger/ledger-native.md",sourceDirName:"build/integrations/wallets/ledger",slug:"/build/integrations/wallets/ledger/ledger-native",permalink:"/es/docs/build/integrations/wallets/ledger/ledger-native",draft:!1,unlisted:!1,editUrl:"https://github.com/AstarNetwork/astar-docs/tree/main/docs/build/integrations/wallets/ledger/ledger-native.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Ledger for Astar Native",title:"Interact with Ledger using Astar Native Accounts"},sidebar:"tutorialSidebar",previous:{title:"Ledger for Astar EVM",permalink:"/es/docs/build/integrations/wallets/ledger/ledger-evm"},next:{title:"Defi Llama",permalink:"/es/docs/build/integrations/dapp-listing/defillama"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Your Ledger device is ready for use",id:"your-ledger-device-is-ready-for-use",level:2},{value:"Install Astar app to your Ledger device",id:"install-astar-app-to-your-ledger-device",level:2},{value:"Connect your Ledger device to Astar Network using Polkadot.js",id:"connect-your-ledger-device-to-astar-network-using-polkadotjs",level:2},{value:"Connect your Ledger device to the Astar Portal",id:"connect-your-ledger-device-to-the-astar-portal",level:2}];function h(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h2,{id:"introduction",children:"Introduction"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Astar Native app"})," is an app integrated with Ledger that users can use a ledger device as an account and sign transactions for substrate accounts."]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsxs)(s.a,{href:"https://github.com/Zondax/ledger-astar/releases/tag/v2.83.0",children:["Release Version ",(0,n.jsx)(s.code,{children:"2.83.0"})," by Zondax"]})}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Ledger Live is not supported hence user will not be able to create an account with Ledger Live"}),"."]}),"\n",(0,n.jsxs)(s.admonition,{type:"danger",children:[(0,n.jsxs)(s.p,{children:["At the time of this release (Version ",(0,n.jsx)(s.code,{children:"2.83.0"}),"), the following operations are ",(0,n.jsx)(s.strong,{children:"NOT SUPPORTED"})," on Ledger devices:"]}),(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"EVM withdrawal"}),": It is not possible to claim tokens from the Astar EVM side."]}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.strong,{children:"XCM transfers"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.strong,{children:"Vesting"})}),"\n"]})]}),"\n",(0,n.jsx)(s.p,{children:"This tutorial describes the process of configuring a Ledger device to manage assets, connect to the Astar portal and participate in dApp staking using native ASTR tokens. It also includes the initiation of the first interaction between the device and the network."}),"\n",(0,n.jsx)(s.h2,{id:"your-ledger-device-is-ready-for-use",children:"Your Ledger device is ready for use"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://support.ledger.com/hc/en-us/articles/360000613793?docs=true",children:"Make sure you have set up your Ledger device"})}),"\n",(0,n.jsxs)(s.li,{children:["Update your device to latest firmware","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://support.ledger.com/hc/en-us/articles/360002731113?docs=true",children:"Nano S"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://support.ledger.com/hc/en-us/articles/4445777839901?docs=true",children:"Nano S Plus"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://support.ledger.com/hc/en-us/articles/360013349800?docs=true",children:"Nano X"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://support.ledger.com/hc/en-us/articles/4404389606417-Download-and-install-Ledger-Live?docs=true",children:"Download and install Ledger Live app for your OS"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://polkadot.js.org/extension/",children:"Download and install Polkadot.js extension for your browser"})}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"install-astar-app-to-your-ledger-device",children:"Install Astar app to your Ledger device"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["Open ",(0,n.jsx)(s.strong,{children:"My Ledger"})," in Ledger Live."]}),"\n",(0,n.jsxs)(s.li,{children:["Connect and unlock your Ledger device.\nIf asked, allow ",(0,n.jsx)(s.code,{children:"My Ledger"})," to access your device."]}),"\n",(0,n.jsxs)(s.li,{children:["Search for ",(0,n.jsx)(s.strong,{children:"Astar"})," (Version ",(0,n.jsx)(s.code,{children:"2.83.0"}),") in the app catalog."]}),"\n",(0,n.jsx)(s.li,{children:"Click Install."}),"\n"]}),"\n",(0,n.jsx)(i.Z,{src:t(21345).Z,width:"80%"}),"\n",(0,n.jsx)(s.p,{children:"After this step, you should have the Astar Native app installed:"}),"\n",(0,n.jsx)(i.Z,{src:t(94587).Z,width:"60%"}),"\n",(0,n.jsx)(s.admonition,{type:"tip",children:(0,n.jsxs)(s.p,{children:["Ledger NanoS users should install the Astar XL (Version ",(0,n.jsx)(s.code,{children:"2.83.0"}),") of the app, shown in the image below:"]})}),"\n",(0,n.jsx)(i.Z,{src:t(55369).Z,width:"80%"}),"\n",(0,n.jsx)(s.h2,{id:"connect-your-ledger-device-to-astar-network-using-polkadotjs",children:"Connect your Ledger device to Astar Network using Polkadot.js"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["Install\xa0",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.a,{href:"https://polkadot.js.org/extension/",children:"Polkadot.js extension"})}),";"]}),"\n",(0,n.jsx)(s.li,{children:"Open extenstion;"}),"\n",(0,n.jsxs)(s.li,{children:["Open the extension and select\xa0",(0,n.jsx)(s.strong,{children:"Attach Ledger account"}),"\xa0as shown below;"]}),"\n"]}),"\n",(0,n.jsx)(i.Z,{src:t(7652).Z,width:"70%"}),"\n",(0,n.jsxs)(s.ol,{start:"4",children:["\n",(0,n.jsx)(s.li,{children:"Make sure your Ledger device is connected to your PC and Astar app is open;"}),"\n",(0,n.jsxs)(s.li,{children:["Select\xa0",(0,n.jsx)(s.strong,{children:"Astar Network"}),"\xa0and name your\xa0",(0,n.jsx)(s.strong,{children:"Astar"}),"\xa0account;"]}),"\n"]}),"\n",(0,n.jsx)(i.Z,{src:t(9971).Z,width:"70%"}),"\n",(0,n.jsxs)(s.ol,{start:"6",children:["\n",(0,n.jsxs)(s.li,{children:["Click\xa0",(0,n.jsx)(s.strong,{children:"Import Account"}),"."]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"You successfully connected to Ledger Astar account."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Configure the Ledger device connection method"})}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["Go to the\xa0",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.astar.network#/settings",children:"Astar settings page on the Polkadot.js portal"})}),";"]}),"\n",(0,n.jsxs)(s.li,{children:["Ensure\xa0",(0,n.jsx)(s.strong,{children:"Attach Ledger via WebHID"}),"\xa0is the preferred connection method listed under\xa0",(0,n.jsx)(s.em,{children:"account options"}),"\xa0>\xa0",(0,n.jsx)(s.em,{children:"manage hardware connections"}),", as shown in the image below:"]}),"\n"]}),"\n",(0,n.jsx)(i.Z,{src:t(37352).Z,width:"80%"}),"\n",(0,n.jsx)(s.h2,{id:"connect-your-ledger-device-to-the-astar-portal",children:"Connect your Ledger device to the Astar Portal"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["Open your browser and visit the ",(0,n.jsx)(s.a,{href:"https://portal.astar.network",children:"Astar Portal"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:["Connect the ",(0,n.jsx)(s.a,{href:"https://polkadot.js.org/extension/",children:"Polkadot.js extension"})," to the Portal."]}),"\n",(0,n.jsx)(s.li,{children:"Open the Astar Native app on your Ledger device;"}),"\n"]}),"\n",(0,n.jsx)(i.Z,{src:t(94587).Z,width:"60%"}),"\n",(0,n.jsxs)(s.ol,{start:"4",children:["\n",(0,n.jsx)(s.li,{children:"Select the Ledger account that was imported during the last step. Check the toggle to let Portal recognize the device as a ledger."}),"\n"]}),"\n",(0,n.jsx)(i.Z,{src:t(76867).Z,width:"80%"}),"\n",(0,n.jsxs)(s.p,{children:["For detailed information about dApp staking or how to stake on the EVM side of Astar Portal using a Ledger device, please refer to the ",(0,n.jsx)(s.a,{href:"/docs/use/dapp-staking/for-stakers/",children:"Astar official documentation"})," or ",(0,n.jsx)(s.a,{href:"/es/docs/build/integrations/wallets/ledger/ledger-evm",children:"Ledger EVM staking guide"})]}),"\n",(0,n.jsxs)(s.admonition,{type:"tip",children:[(0,n.jsxs)(s.p,{children:["If you receive a ",(0,n.jsx)(s.strong,{children:"Ledger error: Failed to execute 'claimInterface' on 'USBDevice': Unable to claim interface"})," message during the dApp staking claim process, ensure you are performing the operation:"]}),(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Using a Chromium-based browser such as Chrome or Brave,"}),"\n",(0,n.jsx)(s.li,{children:"The Ledger device connection method is WebHID, as outlined in the previous step"}),"\n",(0,n.jsx)(s.li,{children:"The Ledger device is correctly connected to the Portal with the toggle activated."}),"\n"]})]}),"\n",(0,n.jsx)(i.Z,{src:t(88741).Z,width:"80%"})]})}function g(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},3837:(e,s,t)=>{t.d(s,{Z:()=>r});t(67294);var n=t(85893);function r(e){let{src:s,caption:t,width:r="460px"}=e;return(0,n.jsxs)("center",{children:[(0,n.jsx)("br",{}),(0,n.jsxs)("figure",{children:[(0,n.jsx)("img",{src:s,alt:t,width:r}),(0,n.jsx)("figcaption",{children:t})]}),(0,n.jsx)("br",{})]})}},7652:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/images/ledger-astar-app-2-2d8ba1c734944b0c1c76604db6f736ef.png"},9971:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/images/ledger-astar-app-3-02ed9bac5fb013a1fa4b720a0b25ecbe.png"},37352:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/images/ledger-astar-app-4-80952366fb3b41cd053e2bd92a15ff40.png"},76867:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/images/ledger-astar-app-5-ac829e17c79221338b897d74267103fb.png"},88741:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/images/ledger-astar-app-6-b157c1ec7d1a370567fd5f31114a61e2.png"},94587:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/images/ledger-astar-app-cb18ee18f709bd672127b500c059ee6e.png"},55369:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/images/ledger-live-astar-app-2-537b1d692b5ae4f579d0ade176250d6d.png"},21345:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/images/ledger-live-astar-app-bcea0fba174a9a1b657d85b5c1b6d325.png"},11151:(e,s,t)=>{t.d(s,{Z:()=>a,a:()=>o});var n=t(67294);const r={},i=n.createContext(r);function o(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);