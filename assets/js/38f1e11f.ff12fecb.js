"use strict";(self.webpackChunkdocs_1=self.webpackChunkdocs_1||[]).push([[3400],{65959:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var r=t(85893),s=t(11151);const i={sidebar_position:4},l="How to use Truffle to deploy on Shibuya",a={id:"build/builder-guides/astar_features/truffle",title:"How to use Truffle to deploy on Shibuya",description:"TL;DR",source:"@site/docs/build/builder-guides/astar_features/truffle.md",sourceDirName:"build/builder-guides/astar_features",slug:"/build/builder-guides/astar_features/truffle",permalink:"/docs/build/builder-guides/astar_features/truffle",draft:!1,unlisted:!1,editUrl:"https://github.com/AstarNetwork/astar-docs/tree/main/docs/build/builder-guides/astar_features/truffle.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"How to get started with AstarBase",permalink:"/docs/build/builder-guides/astar_features/astarBase"},next:{title:"How to use Hardhat to deploy on Shibuya",permalink:"/docs/build/builder-guides/astar_features/use_hardhat"}},o={},d=[{value:"TL;DR",id:"tldr",level:2},{value:"What is Truffle?",id:"what-is-truffle",level:2},{value:"Builders Guide",id:"builders-guide",level:2},{value:"Step 1: Project Setup",id:"step-1-project-setup",level:3},{value:"Step 2: Start Coding",id:"step-2-start-coding",level:3},{value:"Step 3: Configure Settings",id:"step-3-configure-settings",level:3},{value:"Step 4: Deployment",id:"step-4-deployment",level:3},{value:"Reference",id:"reference",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"how-to-use-truffle-to-deploy-on-shibuya",children:"How to use Truffle to deploy on Shibuya"}),"\n",(0,r.jsx)(n.h2,{id:"tldr",children:"TL;DR"}),"\n",(0,r.jsx)(n.p,{children:"This cookbook gives you a basic idea of how to use Truffle and deploy a simple test smart contract on our Shibuya testnet."}),"\n",(0,r.jsx)(n.h2,{id:"what-is-truffle",children:"What is Truffle?"}),"\n",(0,r.jsx)(n.p,{children:"Truffle is a popular development framework for Ethereum based blockchain. It offers a suite of tools that make it easier to develop and deploy smart contracts on the EVM(Ethereum Virtual Machine) blockchain. Some of the key features of Truffle include:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"A suite of development and testing tools, including a code compiler, a testing framework, and a debugger."}),"\n",(0,r.jsx)(n.li,{children:"Support for popular programming languages, including Solidity and JavaScript."}),"\n",(0,r.jsx)(n.li,{children:"Integration with popular Ethereum wallets, such as MetaMask and Ledger."}),"\n",(0,r.jsx)(n.li,{children:"Automated contract deployment and management tools."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Overall, Truffle is designed to make it easier for developers to build and deploy decentralized applications (dApps) on the EVM blockchain."}),"\n",(0,r.jsx)(n.h2,{id:"builders-guide",children:"Builders Guide"}),"\n",(0,r.jsx)(n.h3,{id:"step-1-project-setup",children:"Step 1: Project Setup"}),"\n",(0,r.jsx)(n.p,{children:"Let\u2019s set up a project folder first. We create a project directory and navigate into that directory:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"mkdir truffleApp\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd truffleApp\n"})}),"\n",(0,r.jsx)(n.p,{children:"If you haven\u2019t installed Truffle yet, please do so by running the command below:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm install -g truffle\n"})}),"\n",(0,r.jsx)(n.p,{children:"We initialize Truffle to create our project:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"truffle init\n"})}),"\n",(0,r.jsx)(n.p,{children:"Now we see something like below to confirm the project is initialized:"}),"\n",(0,r.jsx)("div",{style:{textAlign:"center"},children:(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"1",src:t(6590).Z+"",width:"586",height:"116"})})}),"\n",(0,r.jsx)(n.p,{children:"Make sure you install HDWalletProvider which we will use later:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm install @truffle/hdwallet-provider --save\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"step-2-start-coding",children:"Step 2: Start Coding"}),"\n",(0,r.jsx)(n.p,{children:"Now, we would see the following file structure:"}),"\n",(0,r.jsx)("div",{style:{textAlign:"center"},children:(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"2",src:t(4669).Z+"",width:"245",height:"174"})})}),"\n",(0,r.jsxs)(n.p,{children:["From here, we create a file for smart contract called ",(0,r.jsx)(n.strong,{children:"HelloShibuya.sol"})," inside the ",(0,r.jsx)(n.strong,{children:"contracts"})," directory:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:'pragma solidity ^0.8.15;\n\ncontract HelloShibuya {\n   string public greet = "Hello Shibuya!";\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["We need to add a migration file called ",(0,r.jsx)(n.strong,{children:"1_deploy_contract.js"})," inside the ",(0,r.jsx)(n.strong,{children:"migrations"})," directory:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:'var HelloShibuya = artifacts.require("HelloShibuya");\n\nmodule.exports = function (deployer) {\n    deployer.deploy(HelloShibuya);\n};\n'})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"step-3-configure-settings",children:"Step 3: Configure Settings"}),"\n",(0,r.jsxs)(n.p,{children:["Now we add information for the Shibuya testnet in ",(0,r.jsx)(n.strong,{children:"truffle-config.js"}),".\nFor the endpoint, take a look and use one of Shibuya endpoints provided ",(0,r.jsx)(n.a,{href:"/docs/build/environment/endpoints/",children:"here"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:"require('dotenv').config();\nconst mnemonic = process.env.MNEMONIC;\nconst HDWalletProvider = require('@truffle/hdwallet-provider');\n\nmodule.exports = {\n\n  networks: {\n    shibuya: {\n      provider: () => new HDWalletProvider(mnemonic, `https://shibuya.public.blastapi.io`),\n      network_id: 81,\n      confirmations: 10,\n      timeoutBlocks: 200,\n      skipDryRun: true,\n      from: \"0x(your Shibuya account address)\"\n    },\n    \n"})}),"\n",(0,r.jsxs)(n.p,{children:["Be aware that we need to declare mnemonic which is used by\xa0",(0,r.jsx)(n.strong,{children:"HDWalletProvider"})," in the\xa0",(0,r.jsx)(n.strong,{children:"truffle-config.js"})," file to verify the account supplying funds during contract deployment. To set mnemonic variable, you would set it as an environment variable in ",(0,r.jsx)(n.strong,{children:".env"})," file in the root directory."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm i dotenv\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'MNEMONIC="(Your secret recovery phase)"\n'})}),"\n",(0,r.jsxs)(n.p,{children:["We can find our secret recovery phase for our account in the Metamask by going through ",(0,r.jsx)(n.strong,{children:"Settings"}),", ",(0,r.jsx)(n.strong,{children:"Security & Privacy"}),", and then ",(0,r.jsx)(n.strong,{children:"Reveal Secret Recovery Phrase"}),"."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"step-4-deployment",children:"Step 4: Deployment"}),"\n",(0,r.jsx)(n.p,{children:"Finally, we have everything ready and we can compile the smart contract we made:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"truffle compile\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"truffle migrate --network shibuya\n"})}),"\n",(0,r.jsx)(n.p,{children:"We would see something like below to confirm our smart contract is deployed on Shibuya testnet."}),"\n",(0,r.jsx)("div",{style:{textAlign:"center"},children:(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"3",src:t(40007).Z+"",width:"914",height:"864"})})}),"\n",(0,r.jsxs)(n.p,{children:["We can confirm this also by looking at the explorer ",(0,r.jsx)(n.a,{href:"https://shibuya.subscan.io/",children:"Subscan"}),"."]}),"\n",(0,r.jsx)("div",{style:{textAlign:"center"},children:(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"4",src:t(47911).Z+"",width:"2398",height:"1462"})})}),"\n",(0,r.jsxs)(n.p,{children:["If you have any questions, please feel free to ask us in our ",(0,r.jsx)(n.a,{href:"https://discord.gg/GhTvWxsF6S",children:"official discord channel"}),"."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"reference",children:"Reference"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://trufflesuite.com/docs/",children:"Official Document for Truffle"})}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},6590:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/1-6128fb242d69e639a872a4c4957e0407.png"},4669:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/2-e231a1f7d86ae66edb4c57d7db96e929.png"},40007:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/3-d3cbdfceeb58f2706c8bef99d6e9771d.png"},47911:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/4-d9b7cea7193cf2c21872133b0500c51d.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>l});var r=t(67294);const s={},i=r.createContext(s);function l(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);