"use strict";(self.webpackChunkdocs_1=self.webpackChunkdocs_1||[]).push([[3006],{44868:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var t=i(85893),s=i(11151);const o={sidebar_position:1},l="How to run a local Astar blockchain for contract testing",r={id:"build/builder-guides/astar_features/run_local_network",title:"How to run a local Astar blockchain for contract testing",description:"TL;DR",source:"@site/docs/build/builder-guides/astar_features/run_local_network.md",sourceDirName:"build/builder-guides/astar_features",slug:"/build/builder-guides/astar_features/run_local_network",permalink:"/docs/build/builder-guides/astar_features/run_local_network",draft:!1,unlisted:!1,editUrl:"https://github.com/AstarNetwork/astar-docs/tree/main/docs/build/builder-guides/astar_features/run_local_network.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"How to Generate Pseudo-Random Numbers in Ink! Smart Contract",permalink:"/docs/build/builder-guides/xvm_wasm/pseudo_random"},next:{title:"How to get started with AstarBase",permalink:"/docs/build/builder-guides/astar_features/astarBase"}},a={},c=[{value:"TL;DR",id:"tldr",level:2},{value:"What is a local Astar blockchain",id:"what-is-a-local-astar-blockchain",level:2},{value:"Why should I run a local Astar blockchain",id:"why-should-i-run-a-local-astar-blockchain",level:2},{value:"Instructions",id:"instructions",level:2},{value:"Download the latest Astar-collator binary file",id:"download-the-latest-astar-collator-binary-file",level:3},{value:"Add execution permission to the binary file",id:"add-execution-permission-to-the-binary-file",level:3},{value:"Configure and run the local blockchain",id:"configure-and-run-the-local-blockchain",level:3},{value:"Access the local blockchain via explorer",id:"access-the-local-blockchain-via-explorer",level:3},{value:"Configure the local blockchain in other dev tools",id:"configure-the-local-blockchain-in-other-dev-tools",level:3},{value:"Appendix: useful subcommand in smart contract testings",id:"appendix-useful-subcommand-in-smart-contract-testings",level:2},{value:"Reference",id:"reference",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"how-to-run-a-local-astar-blockchain-for-contract-testing",children:"How to run a local Astar blockchain for contract testing"}),"\n",(0,t.jsx)(n.h2,{id:"tldr",children:"TL;DR"}),"\n",(0,t.jsx)(n.p,{children:"Compared with using Shibuya testnet, testing on a local Astar blockchain can provide higher throughput, quicker response, and more privacy since the only node of the network runs on your local device. Building a local Astar blockchain is essential for relatively large project development and testing."}),"\n",(0,t.jsx)(n.p,{children:"In this guide, we will walk you through the process of setting up a local Astar node, running the local blockchain, accessing the blockchain via your local explorer, and configuring the local blockchain in other developer tools."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"what-is-a-local-astar-blockchain",children:"What is a local Astar blockchain"}),"\n",(0,t.jsxs)(n.p,{children:["A local Astar blockchain is a ",(0,t.jsx)(n.strong,{children:"single-node network"})," running on your local device which can simulate the on-chain environment of Astar Network and be used for local testing without needing any network connections. You can set up a local blockchain by downloading the latest Astar collator node code from ",(0,t.jsx)(n.a,{href:"https://github.com/AstarNetwork/Astar",children:"Github"})," and building from source, or directly run the binary built for your environment."]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"Running a local blockchain is common for smart contract development and testing."})}),"\n",(0,t.jsx)(n.h2,{id:"why-should-i-run-a-local-astar-blockchain",children:"Why should I run a local Astar blockchain"}),"\n",(0,t.jsx)(n.p,{children:"Compared to the Shibuya testnet, running a local Astar blockchain will have the following benefits:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Higher throughput and quicker response compared to using Shibuya testnet, which may save you a lot of testing time."}),"\n",(0,t.jsx)(n.li,{children:"Privacy of testing data and development history since the only node is on your local device and only you have access to the network."}),"\n",(0,t.jsx)(n.li,{children:"Self-customized release version and testing conditions. By using a local blockchain for testing and development, you will be able to choose the node release version and customize the testing conditions, e.g. rolling back the network for 10000 blocks."}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"instructions",children:"Instructions"}),"\n",(0,t.jsx)(n.h3,{id:"download-the-latest-astar-collator-binary-file",children:"Download the latest Astar-collator binary file"}),"\n",(0,t.jsx)(n.p,{children:"A binary file is an executable program that is already compiled with a specific environment. In this guide, we will demonstrate how to build the local blockchain using binary files since it is the most widely used approach."}),"\n",(0,t.jsxs)(n.p,{children:["If you prefer building from source code with your local environment, follow the guide ",(0,t.jsx)(n.a,{href:"https://github.com/AstarNetwork/Astar#building-from-source",children:"here"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Download the latest release of ",(0,t.jsx)(n.a,{href:"https://github.com/AstarNetwork/Astar/releases",children:"the Astar collator"})," for macOS for Ubuntu:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Untitled",src:i(21658).Z+"",width:"2492",height:"852"})}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"Please make sure you are running a macOS or Ubuntu with the appropriate version. For macOS, please use a version above MacOS 12.0."})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["Please rename the binary file to ",(0,t.jsx)(n.code,{children:"astar"}),", for illustration purposes the consistency of the command lines in this tutorial."]})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"add-execution-permission-to-the-binary-file",children:"Add execution permission to the binary file"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Change the directory to the folder containing the ",(0,t.jsx)(n.code,{children:"astar"})," binary file"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"cd local-astar-cookbook\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Add execution permission to the binary file. ",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.strong,{children:"Note"}),": if you are using a Mac, you may need an extra step to configure the security settings:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Go to Apple menu >\xa0System Settings > Privacy & Security."}),"\n",(0,t.jsxs)(n.li,{children:["Under security, add the ",(0,t.jsx)(n.code,{children:"astar"})," binary file that you just downloaded to the whitelist."]}),"\n",(0,t.jsx)(n.li,{children:"Continue with the following command."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"chmod +x ./astar\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Now you can double-check the version of your Astar collator node:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"./astar --version\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"configure-and-run-the-local-blockchain",children:"Configure and run the local blockchain"}),"\n",(0,t.jsx)(n.p,{children:"Run the local network with the following configurations:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"--port 30333"}),": use ",(0,t.jsx)(n.code,{children:"port 30333"})," for P2P TCP connection"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"--rpc-port 9944"}),": use ",(0,t.jsx)(n.code,{children:"port 9944"})," for RPC, both WS(s) and HTTP(s)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"--rpc-cors all"}),": accept any origins for HTTP and WebSocket connections"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"--alice"}),": enable ",(0,t.jsx)(n.code,{children:"Alice"})," session keys"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"--dev"}),": launch the network in development mode"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"./astar --port 30333 --rpc-port 9944 --rpc-cors all --alice --dev\n"})}),"\n",(0,t.jsxs)(n.p,{children:["You will be able to see the local Astar collator node info and new blocksafter successfully running it.\n",(0,t.jsx)(n.img,{alt:"Untitled",src:i(78220).Z+"",width:"2808",height:"304"}),"\n",(0,t.jsx)(n.img,{alt:"Untitled",src:i(50421).Z+"",width:"3332",height:"518"})]}),"\n",(0,t.jsx)(n.p,{children:"You can check a full list of subcommand and explanation using the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"./astar help\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"access-the-local-blockchain-via-explorer",children:"Access the local blockchain via explorer"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Go to ",(0,t.jsx)(n.a,{href:"https://polkadot.js.org/apps/?rpc=ws%3A%2F%2F127.0.0.1%3A9944#/explorer",children:"local explorer"})]}),"\n",(0,t.jsx)(n.li,{children:"You will be able to to view the recent blocks, accounts info, etc. as the on-chain environment of Astar Network"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Untitled",src:i(57402).Z+"",width:"3360",height:"1142"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"configure-the-local-blockchain-in-other-dev-tools",children:"Configure the local blockchain in other dev tools"}),"\n",(0,t.jsx)(n.p,{children:"When using the local blockchain with other dev tools including MetaMask, Hardhat, Remix, Truffle, please configure the network with the following info to connect with the local blockchain:"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Network Name"}),(0,t.jsx)(n.th,{children:"Local Astar Testnet 0"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"New RPC URL"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"http://127.0.0.1:9944",children:"http://127.0.0.1:9944"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Chain ID"}),(0,t.jsx)(n.td,{children:"4369"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Currency Symbol"}),(0,t.jsx)(n.td,{children:"ASTL"})]})]})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"appendix-useful-subcommand-in-smart-contract-testings",children:"Appendix: useful subcommand in smart contract testings"}),"\n",(0,t.jsx)(n.p,{children:"When using the local blockchain with other dev tools including MetaMask, Hardhat, Remix, Truffle, please configure the network with the following info to connect with the local blockchain:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"build-spec"}),": build a chain specification"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"check-block"}),": validate blocks"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"export-blocks"}),": export blocks"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"export-genesis-state"}),": export the genesis state of the parachain"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"export-genesis-wasm"}),": export the genesis wasm of the parachain"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"export-state"}),": export the state of a given block into a chain spec"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"help"}),": print this message or the help of the given subcommand(s)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"import-blocks"}),": import blocks"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"key"}),": key management cli utilities"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"purge-chain"}),": remove the whole chain"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"revert"}),": revert the chain to a previous state"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"sign"}),": sign a message, with a given (secret) key"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"vanity"}),": generate a seed that provides a vanity address"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"verify"}),": verify a signature for a message, provided on STDIN, with a given (public or secret) key"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"reference",children:"Reference"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/AstarNetwork/Astar",children:"Astar Github"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},78220:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/Untitled 1-ecdf7e39c137c9684ee64ee82475de58.png"},50421:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/Untitled 2-52de4a26fc76c3cae151a811fa5960cc.png"},57402:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/Untitled 3-1871dd4d5f455d1f27d126bff40c28a2.png"},21658:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/Untitled-7fbbfbf8dedab70bf5446fee0b298e92.png"},11151:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>l});var t=i(67294);const s={},o=t.createContext(s);function l(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);