"use strict";(self.webpackChunkdocs_1=self.webpackChunkdocs_1||[]).push([[3693],{12282:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var r=t(85893),i=t(11151);const o={sidebar_position:2},s=void 0,c={id:"build/EVM/developer-tooling/thirdweb",title:"thirdweb",description:"Introduction",source:"@site/docs/build/EVM/developer-tooling/thirdweb.md",sourceDirName:"build/EVM/developer-tooling",slug:"/build/EVM/developer-tooling/thirdweb",permalink:"/es/docs/build/EVM/developer-tooling/thirdweb",draft:!1,unlisted:!1,editUrl:"https://github.com/AstarNetwork/astar-docs/tree/main/docs/build/EVM/developer-tooling/thirdweb.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Hardhat",permalink:"/es/docs/build/EVM/developer-tooling/hardhat"},next:{title:"Your Own RPC Server",permalink:"/es/docs/build/EVM/developer-tooling/own-RPC"}},l={},a=[{value:"Introduction",id:"introduction",level:3},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Getting started",id:"getting-started",level:3},{value:"Creating contract",id:"creating-contract",level:4},{value:"Deploying contract",id:"deploying-contract",level:4},{value:"Learn more",id:"learn-more",level:3}];function d(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h3,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://thirdweb.com/",children:"thirdweb"})," is a complete web3 development framework that provides everything you need to connect your apps and games to decentralized networks."]}),"\n",(0,r.jsxs)(n.admonition,{type:"caution",children:[(0,r.jsx)(n.p,{children:"API keys will be required for access to thirdweb infrastructure services (effective August 1st, 2023)."}),(0,r.jsx)(n.p,{children:"In an effort to serve our growing developer community by providing more resilient, reliable, and robust infrastructure, we are instituting a new policy requiring users of our SDK\u2019s, Storage, CLI and Smart Accounts to include an API key for use of the following thirdweb infrastructure services:"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"RPC Edge - RPC infrastructure for connecting to any EVM chain"}),"\n",(0,r.jsx)(n.li,{children:"Storage - Service for both uploading and downloading of data to decentralized storage"}),"\n",(0,r.jsx)(n.li,{children:"Smart Wallet Bundler/Paymaster (beta) - Our Bundler and Paymaster service for use with smart wallets (ERC-4337/6551)"}),"\n"]}),(0,r.jsxs)(n.p,{children:["For more details, FAQ and instructions on how you can get your API key and upgrade your app to work in advance of the August 1st deadline, please visit the ",(0,r.jsx)(n.a,{href:"https://blog.thirdweb.com/changelog/api-keys-to-access-thirdweb-infra/",children:"migration blog"}),"."]})]}),"\n",(0,r.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Latest version of ",(0,r.jsx)(n.a,{href:"https://nodejs.org/",children:"Node.js"})," installed."]}),"\n",(0,r.jsx)(n.li,{children:"Astar network wallet set up with basic usage knowledge."}),"\n",(0,r.jsx)(n.li,{children:"Sufficient funds in the wallet for contract deployment gas fees."}),"\n",(0,r.jsx)(n.li,{children:"Basic knowledge of Solidity."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"getting-started",children:"Getting started"}),"\n",(0,r.jsx)(n.h4,{id:"creating-contract",children:"Creating contract"}),"\n",(0,r.jsx)(n.p,{children:"To create a new smart contract using thirdweb CLI, follow these steps:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"In your CLI run the following command:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"npx thirdweb create contract\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Input your preferences for the command line prompts:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Give your project a name"}),"\n",(0,r.jsx)(n.li,{children:"Choose your preferred framework: Hardhat or Foundry"}),"\n",(0,r.jsx)(n.li,{children:"Name your smart contract"}),"\n",(0,r.jsxs)(n.li,{children:["Choose the type of base contract: Empty, ",(0,r.jsx)(n.a,{href:"https://portal.thirdweb.com/solidity/base-contracts/erc20base",children:"ERC20"}),", ",(0,r.jsx)(n.a,{href:"https://portal.thirdweb.com/solidity/base-contracts/erc721base",children:"ERC721"}),", or ",(0,r.jsx)(n.a,{href:"https://portal.thirdweb.com/solidity/base-contracts/erc1155base",children:"ERC1155"})]}),"\n",(0,r.jsxs)(n.li,{children:["Add any desired ",(0,r.jsx)(n.a,{href:"https://portal.thirdweb.com/solidity/extensions",children:"extensions"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Once created, navigate to your project\u2019s directory and open in your preferred code editor."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["If you open the ",(0,r.jsx)(n.code,{children:"contracts"})," folder, you will find your smart contract; this is your smart contract written in Solidity."]}),"\n",(0,r.jsxs)(n.p,{children:["The following is code for an ERC721Base contract without specified extensions. It implements all of the logic inside the ",(0,r.jsx)(n.a,{href:"https://github.com/thirdweb-dev/contracts/blob/main/contracts/base/ERC721Base.sol",children:(0,r.jsx)(n.code,{children:"ERC721Base.sol"})})," contract; which implements the ",(0,r.jsx)(n.a,{href:"https://github.com/thirdweb-dev/contracts/blob/main/contracts/eip/ERC721A.sol",children:(0,r.jsx)(n.code,{children:"ERC721A"})})," standard."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'// SPDX-License-Identifier: MIT\npragma solidity ^0.8.0;\n\nimport "@thirdweb-dev/contracts/base/ERC721Base.sol";\n\ncontract Contract is ERC721Base {\n    constructor(\n        string memory _name,\n        string memory _symbol,\n        address _royaltyRecipient,\n        uint128 _royaltyBps\n    ) ERC721Base(_name, _symbol, _royaltyRecipient, _royaltyBps) {}\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"This contract inherits the functionality of ERC721Base through the following steps:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Importing the ERC721Base contract"}),"\n",(0,r.jsx)(n.li,{children:"Inheriting the contract by declaring that our contract is an ERC721Base contract"}),"\n",(0,r.jsx)(n.li,{children:"Implementing any required methods, such as the constructor."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["After modifying your contract with your desired custom logic, you may deploy it to Astar using ",(0,r.jsx)(n.a,{href:"https://portal.thirdweb.com/deploy",children:"Deploy"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.p,{children:"Alternatively, you can deploy a prebuilt contract for NFTs, tokens, or marketplace directly from the thirdweb Explore page:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Go to the thirdweb Explore page: ",(0,r.jsx)(n.a,{href:"https://thirdweb.com/explore",children:"https://thirdweb.com/explore"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"thirdweb Explore page",src:t(39519).Z+"",width:"2032",height:"1167"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Choose the type of contract you want to deploy from the available options: NFTs, tokens, marketplace, and more."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Follow the on-screen prompts to configure and deploy your contract."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["For more information on different contracts available on Explore, check out ",(0,r.jsx)(n.a,{href:"https://portal.thirdweb.com/pre-built-contracts",children:"thirdweb\u2019s documentation."})]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"deploying-contract",children:"Deploying contract"}),"\n",(0,r.jsx)(n.p,{children:"Deploy allows you to deploy a smart contract to any EVM compatible network without configuring RPC URLs, exposing your private keys, writing scripts, and other additional setup such as verifying your contract."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"To deploy your smart contract using deploy, navigate to the root directory of your project and execute the following command:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npx thirdweb deploy\n"})}),"\n",(0,r.jsx)(n.p,{children:"Executing this command will trigger the following actions:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Compiling all the contracts in the current directory."}),"\n",(0,r.jsx)(n.li,{children:"Providing the option to select which contract(s) you wish to deploy."}),"\n",(0,r.jsx)(n.li,{children:"Uploading your contract source code (ABI) to IPFS."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"When it is completed, it will open a dashboard interface to finish filling out the parameters."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"_name"}),": contract name"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"_symbol"}),': symbol or "ticker"']}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"_royaltyRecipient"}),": wallet address to receive royalties from secondary sales"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"_royaltyBps"}),": basis points (bps) that will be given to the royalty recipient for each secondary sale, e.g. 500 = 5%"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Select Astar as the network"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Manage additional settings on your contract\u2019s dashboard as needed such as uploading NFTs, configuring permissions, and more."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["For additional information on Deploy, please reference ",(0,r.jsx)(n.a,{href:"https://portal.thirdweb.com/deploy",children:"thirdweb\u2019s documentation"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"learn-more",children:"Learn more"}),"\n",(0,r.jsxs)(n.p,{children:["If you have any further questions or encounter any issues during the process, please ",(0,r.jsx)(n.a,{href:"https://support.thirdweb.com",children:"reach out to thirdweb support"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},39519:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/thirdweb-explore-ee9602c6ab8d6ea5e27779bef06b740c.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>s});var r=t(67294);const i={},o=r.createContext(i);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);