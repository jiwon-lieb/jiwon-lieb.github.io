"use strict";(self.webpackChunkdocs_1=self.webpackChunkdocs_1||[]).push([[131],{26334:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var a=n(85893),o=n(11151),r=n(3837);const i={title:"Architecture"},s="Overview",c={id:"learn/architecture/index",title:"Architecture",description:"Before you get started on your journey towards becoming an Astar network hacker, it will be beneficial to know about what Polkadot and Ethereum are, because Astar Network connects to both, and each have their own set of benefits benefits and limitations.",source:"@site/docs/learn/architecture/index.md",sourceDirName:"learn/architecture",slug:"/learn/architecture/",permalink:"/ja/docs/learn/architecture/",draft:!1,unlisted:!1,editUrl:"https://github.com/AstarNetwork/astar-docs/tree/main/docs/learn/architecture/index.md",tags:[],version:"current",frontMatter:{title:"Architecture"},sidebar:"tutorialSidebar",previous:{title:"Networks",permalink:"/ja/docs/learn/networks"},next:{title:"Astar Parachain",permalink:"/ja/docs/learn/architecture/astar-parachain"}},h={},l=[{value:"Blockchain Basics",id:"blockchain-basics",level:2},{value:"Applications Running on a Blockchain",id:"applications-running-on-a-blockchain",level:2},{value:"Ethereum Virtual Machine (EVM)",id:"ethereum-virtual-machine-evm",level:2}];function d(e){const t={a:"a",h1:"h1",h2:"h2",p:"p",strong:"strong",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"overview",children:"Overview"}),"\n",(0,a.jsx)(t.p,{children:"Before you get started on your journey towards becoming an Astar network hacker, it will be beneficial to know about what Polkadot and Ethereum are, because Astar Network connects to both, and each have their own set of benefits benefits and limitations."}),"\n",(0,a.jsx)(r.Z,{src:n(23846).Z}),"\n",(0,a.jsx)(t.p,{children:"Some highlights on the Polkadot parachain side are dApp Staking, ink! smart contracts, cross-chain messaging (XCM), and forkless upgradability, and on the Ethereum layer 2 side are the highest levels of EVM equivalence, shared liquidity across layer 2 networks, and access to the largest pool of developers in the blockchain industry that we can tailor our products for, on-demand."}),"\n",(0,a.jsx)(t.p,{children:"For now, let's go over some basics that apply to all blockchains whether they are sovereign layer 1 networks, or rely on another blockchain such as the Polkadot Relay Chain for shared security and interoperability."}),"\n",(0,a.jsx)(t.h2,{id:"blockchain-basics",children:"Blockchain Basics"}),"\n",(0,a.jsx)(t.p,{children:"A blockchain is a decentralized ledger that records information in a sequence of blocks. The information contained in a block is an ordered set of instructions that may or may not result in a change in state."}),"\n",(0,a.jsx)(t.p,{children:"In a blockchain network, individual computers\u2014called nodes\u2014communicate with each other to form a decentralized peer-to-peer (P2P) network. There is no central authority that controls the network and, typically, each node that participates in block production stores a copy of the blocks that make up the canonical chain."}),"\n",(0,a.jsxs)(t.p,{children:["In most cases, users interact with a blockchain by submitting a request that might result in a change in state, for example, a request to change the owner of a file or to transfer funds from one account to another. These transactions requests are gossiped to other nodes on the network and assembled into a block by a block author. To ensure the security of the data on the chain and the ongoing progress of the chain, the nodes use some form of consensus to agree on the state of the data in each block and on the order of transactions executed. ",(0,a.jsx)(t.a,{href:"https://docs.substrate.io/fundamentals/blockchain-basics/",children:"Read more..."})]}),"\n",(0,a.jsx)(t.h2,{id:"applications-running-on-a-blockchain",children:"Applications Running on a Blockchain"}),"\n",(0,a.jsx)(t.p,{children:"Applications that run on a blockchain, often referred to as decentralized applications or dApps, are typically web applications written using front-end frameworks, but powered by smart contracts on the backend, to affect the blockchain state."}),"\n",(0,a.jsxs)(t.p,{children:["A ",(0,a.jsx)(t.strong,{children:"smart contract"})," is a program that runs on a blockchain and executes transactions on behalf of users under specific conditions. Developers can write smart contracts to ensure that the outcomes of programmatically-executed transactions are recorded, and can't be tampered with. Yet, smart contracts operate in a sandboxed environment, where developers don't have access to underlying blockchain functionality, such as  consensus, storage, or transaction layers, and instead, abide by a chain's fixed rules and restrictions. Smart contract developers often accept these limitations as a tradeoff that shortens the development lifecycle, by avoiding having to make core design decisions."]}),"\n",(0,a.jsx)(t.h2,{id:"ethereum-virtual-machine-evm",children:"Ethereum Virtual Machine (EVM)"}),"\n",(0,a.jsx)(t.p,{children:"The Ethereum Virtual Machine (EVM) is a virtual computer with components that enables  network participants (not necessarily on Ethereum) to store data and agree on the state of that data. Smart contracts run on the EVM, and most Layer 1 blockchains support an EVM-compatible virtual machine environment. Astar Parachain and Astar zkEVM both support EVM-compatible environments."})]})}function u(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},3837:(e,t,n)=>{n.d(t,{Z:()=>o});n(67294);var a=n(85893);function o(e){let{src:t,caption:n,width:o="460px"}=e;return(0,a.jsxs)("center",{children:[(0,a.jsx)("br",{}),(0,a.jsxs)("figure",{children:[(0,a.jsx)("img",{src:t,alt:n,width:o}),(0,a.jsx)("figcaption",{children:n})]}),(0,a.jsx)("br",{})]})}},23846:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/fig4-befdc6d141ceab1d72f555a7f9f14836.jpg"},11151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>i});var a=n(67294);const o={},r=a.createContext(o);function i(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);