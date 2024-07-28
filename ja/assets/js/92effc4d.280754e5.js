"use strict";(self.webpackChunkdocs_1=self.webpackChunkdocs_1||[]).push([[7747],{1842:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>u,contentTitle:()=>h,default:()=>m,frontMatter:()=>c,metadata:()=>g,toc:()=>p});var a=s(85893),n=s(11151),i=(s(89324),s(72274)),r=s(73607),o=s(8918),d=s(80772),l=(s(59910),s(92798),s(90549));const c={title:"ETH <-> zkEVM Bridge"},h=void 0,g={id:"build/zkEVM/integrations/bridges-relays/astar-bridge",title:"ETH <-> zkEVM Bridge",description:"Overview",source:"@site/docs/build/zkEVM/integrations/bridges-relays/astar-bridge.md",sourceDirName:"build/zkEVM/integrations/bridges-relays",slug:"/build/zkEVM/integrations/bridges-relays/astar-bridge",permalink:"/ja/docs/build/zkEVM/integrations/bridges-relays/astar-bridge",draft:!1,unlisted:!1,editUrl:"https://github.com/AstarNetwork/astar-docs/tree/main/docs/build/zkEVM/integrations/bridges-relays/astar-bridge.md",tags:[],version:"current",frontMatter:{title:"ETH <-> zkEVM Bridge"},sidebar:"tutorialSidebar",previous:{title:"Astar <-> zkEVM Bridge",permalink:"/ja/docs/build/zkEVM/integrations/bridges-relays/AstarEVM-zkEVM"},next:{title:"Indexers",permalink:"/ja/docs/build/zkEVM/integrations/indexers/"}},u={},p=[{value:"Overview",id:"overview",level:2},{value:"How to bridge ETH to the zkEVM using Astar Portal",id:"how-to-bridge-eth-to-the-zkevm-using-astar-portal",level:2}];function b(e){const t={a:"a",admonition:"admonition",h2:"h2",li:"li",ol:"ol",p:"p",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,a.jsx)(t.p,{children:"Astar bridge is a canonical Layer 1 \u2192 Layer 2 bridge connecting Sepolia and Astar zKatana testnets that is trustless at the protocol level. This means that if the infrastructure on Layer 2 powering Astar zkEVM is somehow compromised or goes offline, the assets and data integrity on Layer 1 are still provided by Ethereum, and anyone can spin up a (zkNode) Prover to recompute the transaction data. This is currently the safest option for bridging assets to the zkEVM as it does not inherit any additional counterparty risk compared to using 3rd party asset bridges."}),"\n",(0,a.jsx)(t.h2,{id:"how-to-bridge-eth-to-the-zkevm-using-astar-portal",children:"How to bridge ETH to the zkEVM using Astar Portal"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["Visit the ",(0,a.jsx)(t.a,{href:"https://portal.astar.network",children:"Astar Portal"})," and connect MetaMask."]}),"\n"]}),"\n",(0,a.jsx)("div",{style:{textAlign:"center"},children:(0,a.jsx)("img",{src:l.Z,style:{width:400}})}),"\n",(0,a.jsxs)(t.ol,{start:"2",children:["\n",(0,a.jsx)(t.li,{children:"Use the network selector and switch to zKatana network, or allow MetaMask to switch to zKatana network for you."}),"\n"]}),"\n",(0,a.jsx)("div",{style:{textAlign:"center"},children:(0,a.jsx)("img",{src:d.Z,style:{width:400}})}),"\n",(0,a.jsxs)(t.ol,{start:"3",children:["\n",(0,a.jsx)(t.li,{children:"Click on the Bridge tab on the left-hand side. Ensure Sepolia is selected as Bridge source, and zKatana is selected as destination. After you have entered the amount of ETH to transfer, press the Confirm button."}),"\n"]}),"\n",(0,a.jsx)("div",{style:{textAlign:"center"},children:(0,a.jsx)("img",{src:i.Z,style:{width:1e3}})}),"\n",(0,a.jsxs)(t.ol,{start:"4",children:["\n",(0,a.jsx)(t.li,{children:"Sign the MetaMask transaction."}),"\n"]}),"\n",(0,a.jsx)("div",{style:{textAlign:"center"},children:(0,a.jsx)("img",{src:r.Z,caption:"Confirming",style:{width:1e3}})}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsx)(t.p,{children:"Once the transaction shows as confirmed on the MetaMask Activity tab, it will take approximately 5-10 minutes for the Astar Portal and MetaMask to update your balance on the zKatana network side."})}),"\n",(0,a.jsx)("div",{style:{textAlign:"center"},children:(0,a.jsx)("img",{src:o.Z,caption:"Confirmed",style:{width:1e3}})}),"\n",(0,a.jsxs)(t.p,{children:["You should now see the bridged ETH within MetaMask for use on Astar zkEVM. Visit the ",(0,a.jsx)(t.a,{href:"/docs/build/zkEVM/smart-contracts/",children:"smart contracts section"})," to start building!"]})]})}function m(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(b,{...e})}):b(e)}},59910:(e,t,s)=>{s.p},92798:(e,t,s)=>{s.p},89324:(e,t,s)=>{s.p},72274:(e,t,s)=>{s.d(t,{Z:()=>a});const a=s.p+"assets/images/astar-bridge-zKatana-Shibuya2-8711a1f818b43aef1d79dabf7ba46ddf.jpg"},73607:(e,t,s)=>{s.d(t,{Z:()=>a});const a=s.p+"assets/images/astar-bridge-zKatana-Shibuya3-74a0f151507c41bd17eb509da475b83f.jpg"},8918:(e,t,s)=>{s.d(t,{Z:()=>a});const a=s.p+"assets/images/astar-bridge-zKatana-Shibuya4-1863863f5227f4a34e9b826bacd71f94.jpg"},90549:(e,t,s)=>{s.d(t,{Z:()=>a});const a=s.p+"assets/images/wallet-select-a75b78a360b54924a07d4e02b253c179.jpg"},80772:(e,t,s)=>{s.d(t,{Z:()=>a});const a=s.p+"assets/images/zKatana-network1-467f294aefefd1f0e88e1a758e248e54.jpg"},11151:(e,t,s)=>{s.d(t,{Z:()=>o,a:()=>r});var a=s(67294);const n={},i=a.createContext(n);function r(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);