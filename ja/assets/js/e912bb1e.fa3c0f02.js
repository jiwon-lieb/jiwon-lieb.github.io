"use strict";(self.webpackChunkdocs_1=self.webpackChunkdocs_1||[]).push([[9721],{21321:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var n=r(85893),i=r(11151);const o={sidebar_position:1},s="NFT Contract with PSP34",a={id:"tutorials/from-zero-to-ink-hero/nft/nft",title:"NFT Contract with PSP34",description:"Using the examples provided, you will build and deploy a NFT smart contract  using ink! with functions commonly seen in NFT projects.",source:"@site/docs/tutorials/from-zero-to-ink-hero/nft/nft.md",sourceDirName:"tutorials/from-zero-to-ink-hero/nft",slug:"/tutorials/from-zero-to-ink-hero/nft/",permalink:"/ja/docs/tutorials/from-zero-to-ink-hero/nft/",draft:!1,unlisted:!1,editUrl:"https://github.com/AstarNetwork/astar-docs/tree/main/docs/tutorials/from-zero-to-ink-hero/nft/nft.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Flipper Contract",permalink:"/ja/docs/tutorials/from-zero-to-ink-hero/flipper-contract/flipper"},next:{title:"Openbrush Wizard",permalink:"/ja/docs/tutorials/from-zero-to-ink-hero/nft/Wizard/"}},l={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"How to Start",id:"how-to-start",level:2},{value:"What will be used?",id:"what-will-be-used",level:2},{value:"What will you learn?",id:"what-will-you-learn",level:2},{value:"Summary",id:"summary",level:2}];function d(t){const e={a:"a",br:"br",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"nft-contract-with-psp34",children:"NFT Contract with PSP34"}),"\n",(0,n.jsxs)(e.p,{children:["Using the examples provided, you will build and deploy a NFT smart contract  using ink! with functions commonly seen in NFT projects.\nThe standard for NFT smart contract will be ",(0,n.jsx)(e.a,{href:"https://github.com/w3f/PSPs/blob/master/PSPs/psp-34.md",children:"PSP34"})," which is very similar to ",(0,n.jsx)(e.a,{href:"https://docs.openzeppelin.com/contracts/4.x/erc721",children:"ERC721"})," and it is written in ink!."]}),"\n",(0,n.jsx)(e.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsxs)(e.p,{children:["This tutorial is suitable for developers with ",(0,n.jsx)(e.strong,{children:"intermediate"})," knowledge of ink! and basic understanding of Rust. Previous experience compiling and deploying an ink! smart contract will be beneficial, such as from following the previous Flipper contract tutorial:"]}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{children:"Tutorial"}),(0,n.jsx)(e.th,{children:"Difficulty"})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:(0,n.jsx)(e.a,{href:"/ja/docs/tutorials/from-zero-to-ink-hero/flipper-contract/",children:"Your First Flipper Contract"})}),(0,n.jsx)(e.td,{children:"Basic ink! -  Basic Rust"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:(0,n.jsx)(e.a,{href:"/ja/docs/tutorials/from-zero-to-ink-hero/dex/",children:"Implement Uniswap V2 core DEX"})}),(0,n.jsx)(e.td,{children:"Advanced ink! - Basic Rust"})]})]})]}),"\n",(0,n.jsx)(e.h2,{id:"how-to-start",children:"How to Start"}),"\n",(0,n.jsx)(e.p,{children:"To follow this tutorial you will need:"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:["To ",(0,n.jsx)(e.a,{href:"/ja/docs/build/environment/ink_environment",children:"set up your ink! environment"}),"."]}),"\n",(0,n.jsxs)(e.li,{children:["Basic Rust knowledge. ",(0,n.jsx)(e.a,{href:"https://www.rust-lang.org/learn",children:"Learn Rust"})]}),"\n",(0,n.jsx)(e.li,{children:"Prior knowledge about ERC721 is helpful but not mandatory."}),"\n"]}),"\n",(0,n.jsx)(e.h2,{id:"what-will-be-used",children:"What will be used?"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:(0,n.jsx)(e.a,{href:"https://github.com/paritytech/ink/tree/v4.2.1",children:"ink! v4.2.1"})}),"\n",(0,n.jsx)(e.li,{children:(0,n.jsx)(e.a,{href:"https://github.com/Brushfam/openbrush-contracts/releases/tag/4.0.0-beta",children:"Openbrush 4.0.0-beta"})}),"\n",(0,n.jsx)(e.li,{children:"cargo-contract 3.0.1"}),"\n"]}),"\n",(0,n.jsx)(e.h2,{id:"what-will-you-learn",children:"What will you learn?"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:"Full implementation of NFT project in ink!."}),"\n",(0,n.jsx)(e.li,{children:"Use Openbrush wizard to create PSP34 smart contract."}),"\n",(0,n.jsx)(e.li,{children:"File structure for a smart contract with an additional trait."}),"\n",(0,n.jsx)(e.li,{children:"Trait and generic implementation in separate files."}),"\n",(0,n.jsx)(e.li,{children:"Unit test for smart contract."}),"\n",(0,n.jsx)(e.li,{children:"Event handling."}),"\n"]}),"\n",(0,n.jsx)(e.h2,{id:"summary",children:"Summary"}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.a,{href:"/ja/docs/tutorials/from-zero-to-ink-hero/nft/Wizard/",children:"I. OpenBrush wizard"}),(0,n.jsx)(e.br,{}),"\n",(0,n.jsx)(e.a,{href:"/ja/docs/tutorials/from-zero-to-ink-hero/nft/Override/",children:"II. Override mint() method"}),(0,n.jsx)(e.br,{}),"\n",(0,n.jsx)(e.a,{href:"/ja/docs/tutorials/from-zero-to-ink-hero/nft/CustomTrait/",children:"III Custom Trait for mint()"}),(0,n.jsx)(e.br,{}),"\n",(0,n.jsx)(e.a,{href:"/ja/docs/tutorials/from-zero-to-ink-hero/nft/PayableMintTrait/",children:"IV. PayableMint Trait definition"}),(0,n.jsx)(e.br,{}),"\n",(0,n.jsx)(e.a,{href:"/ja/docs/tutorials/from-zero-to-ink-hero/nft/PayableMintImpl/",children:"V. PayableMint Trait implementation"}),(0,n.jsx)(e.br,{}),"\n",(0,n.jsx)(e.a,{href:"/ja/docs/tutorials/from-zero-to-ink-hero/nft/Events/",children:"VI. Events"})]})]})}function h(t={}){const{wrapper:e}={...(0,i.a)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(d,{...t})}):d(t)}},11151:(t,e,r)=>{r.d(e,{Z:()=>a,a:()=>s});var n=r(67294);const i={},o=n.createContext(i);function s(t){const e=n.useContext(o);return n.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function a(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:s(t.components),n.createElement(o.Provider,{value:e},t.children)}}}]);