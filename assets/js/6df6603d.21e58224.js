"use strict";(self.webpackChunkdocs_1=self.webpackChunkdocs_1||[]).push([[162],{88379:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var t=s(85893),r=s(11151);const i={sidebar_position:1},o="Use OpenBrush",a={id:"build/wasm/tooling/openbrush",title:"Use OpenBrush",description:"OpenBrush",source:"@site/docs/build/wasm/tooling/openbrush.md",sourceDirName:"build/wasm/tooling",slug:"/build/wasm/tooling/openbrush",permalink:"/docs/build/wasm/tooling/openbrush",draft:!1,unlisted:!1,editUrl:"https://github.com/AstarNetwork/astar-docs/tree/main/docs/build/wasm/tooling/openbrush.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Tools and libraries",permalink:"/docs/build/wasm/tooling/"},next:{title:"Polkadot.js Apps UI",permalink:"/docs/build/wasm/tooling/polkadotjs"}},l={},c=[{value:"OpenBrush",id:"openbrush",level:2},{value:"Generic Trait Implementation",id:"generic-trait-implementation",level:3},{value:"Wrapper around Traits",id:"wrapper-around-traits",level:3},{value:"Documentation",id:"documentation",level:3}];function h(e){const n={a:"a",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"use-openbrush",children:"Use OpenBrush"}),"\n",(0,t.jsx)(n.h2,{id:"openbrush",children:"OpenBrush"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://github.com/727-Ventures/openbrush-contracts",children:"OpenBrush"})," is a library for smart contract development on ink! maintained by the ",(0,t.jsx)(n.a,{href:"https://www.brushfam.io/",children:"BrushFam"})," team, and is inspired by OpenZeppellin for Solidity."]}),"\n",(0,t.jsxs)(n.p,{children:["Openbrush provides standard contracts based on ",(0,t.jsx)(n.a,{href:"https://github.com/w3f/PSPs",children:"PSPs"}),", as well as other useful contracts and Rust macros that help developers build ink! smart contracts."]}),"\n",(0,t.jsx)(n.p,{children:"Why use OpenBrush?"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["To create ",(0,t.jsx)(n.strong,{children:"interoperable"})," smart contracts, that perform ",(0,t.jsx)(n.strong,{children:"safe"})," cross-contracts calls (by maintaining consistent signatures across contracts)."]}),"\n",(0,t.jsxs)(n.li,{children:["To comply with ",(0,t.jsx)(n.a,{href:"https://github.com/w3f/PSPs",children:"Polkadot Standards Proposals"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["To ensure usage of the ",(0,t.jsx)(n.strong,{children:"latest and most secure"})," implementation."]}),"\n",(0,t.jsx)(n.li,{children:"Templates provide customizable logic that can be implemented easily in smart contracts."}),"\n",(0,t.jsxs)(n.li,{children:["To ",(0,t.jsx)(n.strong,{children:"save time"})," by not having to write boilerplate code."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Which token standards and contracts does OpenBrush provide?"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"PSP22"}),": Fungible Token (",(0,t.jsx)(n.em,{children:"ERC20 equivalent"}),") with extensions."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"PSP34"}),": Non-Fungible Token (",(0,t.jsx)(n.em,{children:"ERC721 equivalent"}),") with extensions."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"PSP37"}),": ",(0,t.jsx)(n.em,{children:"ERC1155 equivalent"})," with extensions."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Ownable"}),": Restrict access to action for non-owners."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Access Control"}),": Define a set of roles and restrict access to an action by roles."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Reentrancy Guard"}),": Prevent reentrant calls to a function."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Pausable"}),": Pause/Unpause the contract to disable/enable some operations."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Timelock Controller"}),": Execute transactions with some delay."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Payment Splitter"}),": Split the amount of native tokens between participants."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"generic-trait-implementation",children:"Generic Trait Implementation"}),"\n",(0,t.jsxs)(n.p,{children:["More importantly, OpenBrush adds support for generic Trait implementation, so you can split Trait and Impls into different files, which will increase the readability and maintainability of your smart contract code base (see detailed description ",(0,t.jsx)(n.a,{href:"https://github.com/727-Ventures/openbrush-contracts/blob/main/docs/docs/smart-contracts/example/setup_project.md",children:"here"}),")."]}),"\n",(0,t.jsx)(n.h3,{id:"wrapper-around-traits",children:"Wrapper around Traits"}),"\n",(0,t.jsx)(n.p,{children:"Defining a Trait definition is sufficient enough (a contract that implements that Trait is not needed anymore) to call methods of that Trait from another contract on the network (perform a cross-contract call). This makes cross-contract calls easier."}),"\n",(0,t.jsx)(n.h3,{id:"documentation",children:"Documentation"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/727-Ventures/openbrush-contracts",children:"OpenBrush Github repo"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://docs.openbrush.io/",children:"Official Docs"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://openbrush.io/",children:"OpenBrush website"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.youtube.com/watch?v=I5OFGNVvzOc",children:"Substrate Seminar (Youtube)"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://medium.com/supercolony/how-to-use-modifiers-for-ink-smart-contracts-using-openbrush-7a9e53ba1c76",children:"How to use modifiers"})}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>o});var t=s(67294);const r={},i=t.createContext(r);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);