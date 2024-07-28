"use strict";(self.webpackChunkdocs_1=self.webpackChunkdocs_1||[]).push([[2894],{78941:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var s=n(85893),i=n(11151);n(3837);const a={},r="Swanky Suite",o={id:"build/wasm/swanky-suite/index",title:"Swanky Suite",description:'Swanky Suite aims to be an "all-in-one" tool for Wasm smart contract developers. It is based on existing tools like cargo contract CLI and polkadot.js but extends their functionality with many additional features such as smart contract templates, and an instant finality (Swanky) node, which reduces the contract development lifecycle.',source:"@site/docs/build/wasm/swanky-suite/index.md",sourceDirName:"build/wasm/swanky-suite",slug:"/build/wasm/swanky-suite/",permalink:"/ja/docs/build/wasm/swanky-suite/",draft:!1,unlisted:!1,editUrl:"https://github.com/AstarNetwork/astar-docs/tree/main/docs/build/wasm/swanky-suite/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"How to Use Astar WASM IDE?",permalink:"/ja/docs/build/wasm/chainide-for-astar-wasm/use"},next:{title:"Swanky CLI",permalink:"/ja/docs/build/wasm/swanky-suite/cli"}},c={},d=[{value:"Architecture Overview",id:"architecture-overview",level:2},{value:"Documentation and resources",id:"documentation-and-resources",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"swanky-suite",children:"Swanky Suite"}),"\n",(0,s.jsxs)(t.p,{children:['Swanky Suite aims to be an "all-in-one" tool for Wasm smart contract developers. It is based on existing tools like',(0,s.jsx)(t.code,{children:" cargo contract CLI"})," and ",(0,s.jsx)(t.code,{children:"polkadot.js"})," but extends their functionality with many additional features such as smart contract templates, and an instant finality (Swanky) node, which reduces the contract development lifecycle."]}),"\n",(0,s.jsx)(t.p,{children:"Swanky Suite is a tool that provides Web3 Wasm dapps developers with an experience that is more in-line with what they're familiar with, compared to popular tooling for EVM."}),"\n",(0,s.jsx)(t.p,{children:"Swanky Suite offers an extensible set of features, allowing developers to:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Quickly spin up a local contract development node with instant finality (Swanky Node)."}),"\n",(0,s.jsx)(t.li,{children:"provide a ready dev environment via prebuilt Docker image and dev-container configuration"}),"\n",(0,s.jsx)(t.li,{children:"Easily scaffold new projects using templates for both smart contracts and (soon) front-end dApps."}),"\n",(0,s.jsx)(t.li,{children:"Compile ink! projects and generate TS types."}),"\n",(0,s.jsx)(t.li,{children:"provide Typescript based integration testing simulating interaction from the client-side."}),"\n",(0,s.jsx)(t.li,{children:"Handle and manage network accounts."}),"\n",(0,s.jsxs)(t.li,{children:["Deploy smart contracts within the Polkadot ecosystem to networks that support ",(0,s.jsx)(t.code,{children:"pallet-contracts"}),"."]}),"\n",(0,s.jsx)(t.li,{children:"Make arbitrary calls to deployed smart contracts."}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"architecture-overview",children:"Architecture Overview"}),"\n",(0,s.jsxs)(t.p,{children:["The Swanky Suite consists of three parts, Swanky CLI, Swanky Node, and the Docker image (Dockerfile is in the swanky-cli repo, and the built image is ",(0,s.jsx)(t.a,{href:"https://github.com/AstarNetwork/swanky-cli/pkgs/container/swanky-cli%2Fswanky-base",children:"hosted on github"}),")."]}),"\n",(0,s.jsx)(t.p,{children:"Source code for both Swanky CLI and Swanky Node are hosted on GitHub:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://github.com/AstarNetwork/swanky-cli",children:"Swanky CLI"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://github.com/AstarNetwork/swanky-node",children:"Swanky Node"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"documentation-and-resources",children:"Documentation and resources"}),"\n",(0,s.jsxs)(t.p,{children:["This documentation's sub-sections on usage of ",(0,s.jsx)(t.a,{href:"/docs/build/wasm/swanky-suite/cli",children:"Swanky CLI"})," and ",(0,s.jsx)(t.a,{href:"/docs/build/wasm/swanky-suite/node",children:"Swanky Node"})," have great instructions on how to setup the tool and start using it right away."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsxs)(t.a,{href:"https://github.com/AstarNetwork/swanky-cli",children:[(0,s.jsx)(t.code,{children:"swanky"})," CLI Github repo"]})," with the latest documentation."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsxs)(t.a,{href:"https://github.com/AstarNetwork/swanky-node",children:[(0,s.jsx)(t.code,{children:"swanky-node"})," Github repo"]})," with the latest documentation."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://github.com/paritytech/substrate/tree/master/frame/contracts",children:(0,s.jsx)(t.code,{children:"pallet-contracts"})})," documentation on Parity Github"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://github.com/paritytech/ink",children:"ink! language"})," repo and specification"]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},3837:(e,t,n)=>{n.d(t,{Z:()=>i});n(67294);var s=n(85893);function i(e){let{src:t,caption:n,width:i="460px"}=e;return(0,s.jsxs)("center",{children:[(0,s.jsx)("br",{}),(0,s.jsxs)("figure",{children:[(0,s.jsx)("img",{src:t,alt:n,width:i}),(0,s.jsx)("figcaption",{children:n})]}),(0,s.jsx)("br",{})]})}},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>r});var s=n(67294);const i={},a=s.createContext(i);function r(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);