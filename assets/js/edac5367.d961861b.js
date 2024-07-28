"use strict";(self.webpackChunkdocs_1=self.webpackChunkdocs_1||[]).push([[9512],{25057:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var n=s(85893),r=s(11151),a=s(3837);const o={sidebar_position:3,title:"Bridge From Astar EVM to Astar zkEVM"},i="Bridge Assets to Astar zkEVM from Astar EVM",d={id:"use/zkevm-guides/Bridge-Astar-EVM",title:"Bridge From Astar EVM to Astar zkEVM",description:"This page explains how to transfer ASTR between Astar EVM and Astar zkEVM.",source:"@site/docs/use/zkevm-guides/Bridge-Astar-EVM.md",sourceDirName:"use/zkevm-guides",slug:"/use/zkevm-guides/Bridge-Astar-EVM",permalink:"/docs/use/zkevm-guides/Bridge-Astar-EVM",draft:!1,unlisted:!1,editUrl:"https://github.com/AstarNetwork/astar-docs/tree/main/docs/use/zkevm-guides/Bridge-Astar-EVM.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Bridge From Astar EVM to Astar zkEVM"},sidebar:"tutorialSidebar",previous:{title:"Bridge From Ethereum to Astar zkEVM",permalink:"/docs/use/zkevm-guides/Bridge-Ethereum"},next:{title:"ASTR Liquid dApp Staking",permalink:"/docs/use/zkevm-guides/ASTR-Liquid-Staking"}},c={},l=[{value:"Transfer using Stargate:",id:"transfer-using-stargate",level:2},{value:"From Astar EVM to Astar zkEVM:",id:"from-astar-evm-to-astar-zkevm",level:3},{value:"From Astar zkEVM to Astar EVM:",id:"from-astar-zkevm-to-astar-evm",level:3}];function h(e){const t={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"bridge-assets-to-astar-zkevm-from-astar-evm",children:"Bridge Assets to Astar zkEVM from Astar EVM"}),"\n",(0,n.jsxs)(t.p,{children:["This page explains how to transfer ",(0,n.jsx)(t.code,{children:"ASTR"})," between ",(0,n.jsx)(t.strong,{children:"Astar EVM"})," and ",(0,n.jsx)(t.strong,{children:"Astar zkEVM"}),".",(0,n.jsx)(t.br,{}),"\n","If you have ",(0,n.jsx)(t.code,{children:"ASTR"})," on Astar native (Substrate) instead, consult ",(0,n.jsx)(t.a,{href:"/docs/use/manage-assets/transfer-tokens#sending-astrsdn-to-astar-evm-from-astar-native-or-any-tokens-in-the-account",children:"this guide"})," to transfer them from Astar native to Astar EVM."]}),"\n",(0,n.jsx)(t.h2,{id:"transfer-using-stargate",children:"Transfer using Stargate:"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:"https://stargate.finance/transfer",children:"Stargate"})})," is a community-driven organization building fully composable native asset bridges on LayerZero. ",(0,n.jsx)(t.a,{href:"https://stargateprotocol.gitbook.io/stargate/v/user-docs",children:"More information"}),"."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:"Please be advised that Astar Foundation assumes no responsibility or liability for any direct, indirect, incidental, special, consequential, or exemplary damages resulting from your utilization of any third-party application presented in our documentation."})}),"\n",(0,n.jsxs)(t.p,{children:["Visit ",(0,n.jsx)(t.a,{href:"https://stargate.finance/transfer",children:"Stargate application"})," and connect your EVM wallet;"]}),"\n",(0,n.jsx)(a.Z,{src:s(65166).Z,width:"75%"}),"\n",(0,n.jsx)(t.h3,{id:"from-astar-evm-to-astar-zkevm",children:"From Astar EVM to Astar zkEVM:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Select the token that you want to transfer and select ",(0,n.jsx)(t.code,{children:"Astar EVM"})," for the ",(0,n.jsx)(t.strong,{children:"source network"}),";"]}),"\n",(0,n.jsxs)(t.li,{children:["Select the token that you want to receive and select ",(0,n.jsx)(t.code,{children:"Astar zkEVM"})," for the ",(0,n.jsx)(t.strong,{children:"destination network"}),";"]}),"\n",(0,n.jsxs)(t.li,{children:["Enter the amount of tokens you want to transfer and confirm the transaction by clicking ",(0,n.jsx)(t.code,{children:"Transfer"}),";",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.em,{children:"The gas cost corresponds to the gas fees for the destination transaction and is paid up-front."})]}),"\n"]}),"\n",(0,n.jsx)(a.Z,{src:s(68649).Z,width:"85%"}),"\n",(0,n.jsxs)(t.admonition,{type:"tip",children:[(0,n.jsxs)(t.p,{children:["You have the option of requesting gas tokens on Astar zkEVM (",(0,n.jsx)(t.code,{children:"ETH"}),"). Stargate will swap a portion of your assets in ETH and transfer them to your wallet on Astar zkEVM."]}),(0,n.jsx)(a.Z,{src:s(50382).Z,width:"85%"})]}),"\n",(0,n.jsxs)(t.ol,{start:"4",children:["\n",(0,n.jsx)(t.li,{children:"Sign the transaction in your wallet;"}),"\n"]}),"\n",(0,n.jsx)(a.Z,{src:s(84504).Z,width:"75%"}),"\n",(0,n.jsxs)(t.ol,{start:"5",children:["\n",(0,n.jsx)(t.li,{children:"Once the transaction has been confirmed on the network, you should now see the bridged assets in your EVM wallet, ready for use on Astar zkEVM."}),"\n"]}),"\n",(0,n.jsxs)(t.admonition,{type:"info",children:[(0,n.jsx)(t.p,{children:"To add tokens to your EVM wallet manually, use the following contract addresses:"}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"ASTR:"})," ",(0,n.jsx)(t.code,{children:"0xdf41220C7e322bFEF933D85D01821ad277f90172"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"DOT:"})," ",(0,n.jsx)(t.code,{children:"0x7Cb5d4D178d93D59ea0592abF139459957898a59"})]}),"\n"]})]}),"\n",(0,n.jsx)(t.h3,{id:"from-astar-zkevm-to-astar-evm",children:"From Astar zkEVM to Astar EVM:"}),"\n",(0,n.jsx)(t.admonition,{type:"warning",children:(0,n.jsxs)(t.p,{children:["Please note that it takes up to ",(0,n.jsx)(t.strong,{children:"8 days"})," to complete a transfer from Astar zkEVM to Astar EVM."]})}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Select the token that you want to transfer and select ",(0,n.jsx)(t.code,{children:"Astar zkEVM"})," for the ",(0,n.jsx)(t.strong,{children:"source network"}),";"]}),"\n",(0,n.jsxs)(t.li,{children:["Select the token that you want to receive and select ",(0,n.jsx)(t.code,{children:"Astar EVM"})," for the ",(0,n.jsx)(t.strong,{children:"destination network"}),";"]}),"\n",(0,n.jsxs)(t.li,{children:["Enter the amount of tokens you want to transfer and confirm the transaction by clicking ",(0,n.jsx)(t.code,{children:"Transfer"}),";",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.em,{children:"The gas cost corresponds to the gas fees for the destination transaction and is paid up-front."})]}),"\n"]}),"\n",(0,n.jsx)(a.Z,{src:s(39145).Z,width:"85%"}),"\n",(0,n.jsxs)(t.admonition,{type:"tip",children:[(0,n.jsxs)(t.p,{children:["You have the option of requesting gas tokens on Astar EVM (",(0,n.jsx)(t.code,{children:"ASTR"}),"). Stargate will swap a portion of your assets in ASTR and transfer them to your wallet on Astar EVM."]}),(0,n.jsx)(a.Z,{src:s(93841).Z,width:"85%"})]}),"\n",(0,n.jsxs)(t.ol,{start:"4",children:["\n",(0,n.jsx)(t.li,{children:"Sign the transaction in your wallet;"}),"\n"]}),"\n",(0,n.jsx)(a.Z,{src:s(84504).Z,width:"75%"}),"\n",(0,n.jsxs)(t.ol,{start:"5",children:["\n",(0,n.jsx)(t.li,{children:"Once the transaction has been confirmed on the network, you should now see the bridged assets in your EVM wallet, ready for use on Astar EVM."}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},3837:(e,t,s)=>{s.d(t,{Z:()=>r});s(67294);var n=s(85893);function r(e){let{src:t,caption:s,width:r="460px"}=e;return(0,n.jsxs)("center",{children:[(0,n.jsx)("br",{}),(0,n.jsxs)("figure",{children:[(0,n.jsx)("img",{src:t,alt:s,width:r}),(0,n.jsx)("figcaption",{children:s})]}),(0,n.jsx)("br",{})]})}},65166:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/Stargate_1-fb921a8f472f3f2bcfd6f8e1aab10fac.png"},68649:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/Stargate_2-072f3b11bd423a55876590186c2d45d9.png"},50382:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/Stargate_3-f91dc1d5df37cb8860e81af96533f2c3.png"},84504:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/Stargate_4-c7c672251be52aacb99ad2648665c01f.png"},39145:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/Stargate_5-fc70873ff3a32ada0d58bcdfb127b01c.png"},93841:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/Stargate_6-30597ba5973254b8b0696ec783757631.png"},11151:(e,t,s)=>{s.d(t,{Z:()=>i,a:()=>o});var n=s(67294);const r={},a=n.createContext(r);function o(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);