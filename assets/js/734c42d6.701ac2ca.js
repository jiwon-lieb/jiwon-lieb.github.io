"use strict";(self.webpackChunkdocs_1=self.webpackChunkdocs_1||[]).push([[1632],{438:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var o=n(85893),r=n(11151);const i={sidebar_position:2},s="Hack Wasm Smart Contracts",a={id:"build/builder-guides/hacking/hack_wasm",title:"Hack Wasm Smart Contracts",description:"banner",source:"@site/docs/build/builder-guides/hacking/hack_wasm.md",sourceDirName:"build/builder-guides/hacking",slug:"/build/builder-guides/hacking/hack_wasm",permalink:"/docs/build/builder-guides/hacking/hack_wasm",draft:!1,unlisted:!1,editUrl:"https://github.com/AstarNetwork/astar-docs/tree/main/docs/build/builder-guides/hacking/hack_wasm.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"General",permalink:"/docs/build/builder-guides/hacking/general"},next:{title:"Hack EVM Smart Contracts",permalink:"/docs/build/builder-guides/hacking/hack_evm"}},c={},d=[{value:"Setup ink! Environment Chapter",id:"setup-ink-environment-chapter",level:2},{value:"Test Tokens Chapter",id:"test-tokens-chapter",level:2},{value:"Run Swanky Node",id:"run-swanky-node",level:2},{value:"From Zero to ink Hero Tutorials",id:"from-zero-to-ink-hero-tutorials",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"hack-wasm-smart-contracts",children:"Hack Wasm Smart Contracts"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"banner",src:n(2459).Z+"",width:"1700",height:"400"})}),"\n",(0,o.jsx)(t.p,{children:"Read the linked chapters or use tutorials to be able to answer following questions:"}),"\n",(0,o.jsxs)(t.h2,{id:"setup-ink-environment-chapter",children:["Setup ink! Environment ",(0,o.jsx)(t.a,{href:"/docs/build/environment/ink_environment",children:"Chapter"})]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Which cargo version are you using?"}),"\n",(0,o.jsxs)(t.li,{children:["Run ",(0,o.jsx)(t.code,{children:"rustup show"})," command."]}),"\n",(0,o.jsxs)(t.li,{children:["Run ",(0,o.jsx)(t.code,{children:"cargo contract -V"}),". Is your cargo contract version higher than 1.5.0?"]}),"\n",(0,o.jsx)(t.li,{children:"Which rust toolchain do you need to use to be able to compile ink! smart contrats? (nightly or stable)? How do you manage this choice?"}),"\n"]}),"\n",(0,o.jsxs)(t.h2,{id:"test-tokens-chapter",children:["Test Tokens ",(0,o.jsx)(t.a,{href:"/docs/build/environment/faucet",children:"Chapter"})]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Did you claim Shibuya tokens? How many SBY tokens did the faucet provide to you?"}),"\n",(0,o.jsx)(t.li,{children:"Can you unit test ink! smart contract without running test node like Swanky-node?"}),"\n"]}),"\n",(0,o.jsxs)(t.h2,{id:"run-swanky-node",children:["Run ",(0,o.jsx)(t.a,{href:"https://github.com/AstarNetwork/swanky-node",children:"Swanky"})," Node"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["Start your Swanky node and connect ",(0,o.jsx)(t.a,{href:"https://polkadot.js.org/apps/?rpc=ws%3A%2F%2F127.0.0.1%3A9944#/explorer",children:"polkadot-JS UI"})," to it. Please note that for Swanky node there will be no node production if there is no interaction with it."]}),"\n"]}),"\n",(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsxs)(t.p,{children:["Please note that the current version of polkadot-JS is broken for contracts because of ",(0,o.jsx)(t.a,{href:"https://github.com/polkadot-js/apps/issues/8364",children:"lack of support for Weights V2"}),". Until that gets resolved please use our ",(0,o.jsx)(t.a,{href:"https://polkadotjs-apps.web.app/#/explorer",children:"custom built polkadot-JS UI"})," or ",(0,o.jsx)(t.a,{href:"https://contracts-ui.substrate.io/",children:"Contracts-UI"}),"."]})}),"\n",(0,o.jsxs)(t.h2,{id:"from-zero-to-ink-hero-tutorials",children:["From Zero to ink Hero ",(0,o.jsx)(t.a,{href:"/docs/build/wasm/from-zero-to-ink-hero/flipper-contract/flipper",children:"Tutorials"})]}),"\n",(0,o.jsx)(t.p,{children:"Depending on your confidence, use any of these tutorial. If you are just starting, the Flipper contract is the way to go."}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["Your task is to deploy the contract from the tutorial to Shibuya Network.","\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["After you build contract notice where the ",(0,o.jsx)(t.code,{children:".contract"})," and ",(0,o.jsx)(t.code,{children:"metadata.json"})," are created."]}),"\n",(0,o.jsxs)(t.li,{children:["Deploy Contract using ",(0,o.jsx)(t.a,{href:"https://contracts-ui.substrate.io/",children:"Contracts-UI"}),"."]}),"\n",(0,o.jsx)(t.li,{children:"What is the contract address?"}),"\n",(0,o.jsx)(t.li,{children:"Do you have any method that requires payment to be executed?"}),"\n",(0,o.jsx)(t.li,{children:"Use Polkadot-JS UI to reload same contract you just deployed using Contracts-UI."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["What is ",(0,o.jsx)(t.a,{href:"/docs/build/builder-guides/hacking/next",children:"next"}),"?"]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},2459:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/gradient4-00f27dc3a2d61dd6ec44db8a82f0ea67.jpg"},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>s});var o=n(67294);const r={},i=o.createContext(r);function s(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);