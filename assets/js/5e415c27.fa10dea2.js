"use strict";(self.webpackChunkdocs_1=self.webpackChunkdocs_1||[]).push([[4669],{86663:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>a,toc:()=>h});var i=n(85893),s=n(11151);const o={title:"Mint NFTs with Lighthouse"},r="NFT Minting Simplified: A Developer\u2019s Guide to Lighthouse and Astar Network",a={id:"build/builder-guides/leverage_parachains/mint-nfts-lighthouse",title:"Mint NFTs with Lighthouse",description:"The world of Non-Fungible Tokens (NFTs) has revolutionized the digital realm, offering unique opportunities for creators and enthusiasts. Entering this domain can be challenging, especially when integrating with blockchain technology. This guide simplifies the process, detailing how to create and manage NFTs using the Astar Network EVM and Lighthouse Storage while leveraging the XCM protocol communication.",source:"@site/docs/build/builder-guides/leverage_parachains/mint-nfts-lighthouse.md",sourceDirName:"build/builder-guides/leverage_parachains",slug:"/build/builder-guides/leverage_parachains/mint-nfts-lighthouse",permalink:"/docs/build/builder-guides/leverage_parachains/mint-nfts-lighthouse",draft:!1,unlisted:!1,editUrl:"https://github.com/AstarNetwork/astar-docs/tree/main/docs/build/builder-guides/leverage_parachains/mint-nfts-lighthouse.md",tags:[],version:"current",frontMatter:{title:"Mint NFTs with Lighthouse"},sidebar:"tutorialSidebar",previous:{title:"Mint NFTs with Crust",permalink:"/docs/build/builder-guides/leverage_parachains/mint-nfts-crust"},next:{title:"How to set up a Zombienet for XCM testing",permalink:"/docs/build/builder-guides/leverage_parachains/zombienet"}},l={},h=[{value:"Introduction",id:"introduction",level:2},{value:"Lighthouse Storage",id:"lighthouse-storage",level:4},{value:"Understanding Lighthouse",id:"understanding-lighthouse",level:4},{value:"Setting Up Lighthouse",id:"setting-up-lighthouse",level:4},{value:"Step 1: Setting Up an EVM Wallet",id:"step-1-setting-up-an-evm-wallet",level:2},{value:"Step 2: Digital Signatures",id:"step-2-digital-signatures",level:2},{value:"Step 3: Uploading to Lighthouse - Your First Major Move",id:"step-3-uploading-to-lighthouse---your-first-major-move",level:2},{value:"Step 4: Minting Your NFT",id:"step-4-minting-your-nft",level:2},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"nft-minting-simplified-a-developers-guide-to-lighthouse-and-astar-network",children:"NFT Minting Simplified: A Developer\u2019s Guide to Lighthouse and Astar Network"}),"\n",(0,i.jsx)(t.p,{children:"The world of Non-Fungible Tokens (NFTs) has revolutionized the digital realm, offering unique opportunities for creators and enthusiasts. Entering this domain can be challenging, especially when integrating with blockchain technology. This guide simplifies the process, detailing how to create and manage NFTs using the Astar Network EVM and Lighthouse Storage while leveraging the XCM protocol communication."}),"\n",(0,i.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsx)(t.h4,{id:"lighthouse-storage",children:"Lighthouse Storage"}),"\n",(0,i.jsx)(t.p,{children:"In an era defined by digital data, a reliable and enduring file storage solution is of paramount importance. Lighthouse emerges as a front-runner in this domain, offering a storage model designed for the long haul. It uses the miner network and storage capacity of the Filecoin network and the IPFS content-addressing system. Lighthouse's reliance on IPFS ensures widespread file replications across a myriad of Filecoin miners, effectively bolstering data reliability and simplifying the nuances of sustainable, long-term, and perpetual storage."}),"\n",(0,i.jsx)(t.h4,{id:"understanding-lighthouse",children:"Understanding Lighthouse"}),"\n",(0,i.jsx)(t.p,{children:"Before diving deep into the steps, let's get a clear picture of Lighthouse:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Sustainable Storage"}),": With an eye on the future, Lighthouse's storage model emphasizes longevity and resilience."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Encrypted Data"}),": Developers benefit from storing encrypted data on Lighthouse, paving the way to craft token-gated applications."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Developer-Centric"}),": Lighthouse not only values data security but also ensures ease of integration by offering a variety of SDKs in various languages and a dedicated CLI."]}),"\n"]}),"\n",(0,i.jsx)(t.h4,{id:"setting-up-lighthouse",children:"Setting Up Lighthouse"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Website: ",(0,i.jsx)(t.a,{href:"https://lighthouse.storage",children:"https://lighthouse.storage"})]}),"\n",(0,i.jsxs)(t.li,{children:["Sign into ",(0,i.jsx)(t.a,{href:"https://files.lighthouse.storage/",children:"Files Dapp"})," with your wallet or your GitHub account to start uploading files to Lighthouse."]}),"\n",(0,i.jsxs)(t.li,{children:["Optionally:","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Get ",(0,i.jsx)(t.a,{href:"https://lighthouse-1.gitbook.io/lighthouse-1/cli-tool/overview",children:"Lighthouse CLI"})]}),"\n",(0,i.jsxs)(t.li,{children:["Get ",(0,i.jsx)(t.a,{href:"https://lighthouse-1.gitbook.io/lighthouse-1/lighthouse-sdk/overview",children:"Lighthouse Javascript SDK"})]}),"\n",(0,i.jsxs)(t.li,{children:["Get ",(0,i.jsx)(t.a,{href:"https://pypi.org/project/lighthouseweb3/",children:"Python SDK"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"In this tutorial we will be using the Lighthouse Javascript SDK to upload a file using Lighthouse."}),"\n",(0,i.jsx)(t.h2,{id:"step-1-setting-up-an-evm-wallet",children:"Step 1: Setting Up an EVM Wallet"}),"\n",(0,i.jsx)(t.p,{children:"Before crafting your NFT, ensure you have a Web3 wallet ready. This wallet bridges traditional web browsers with the Ethereum blockchain, a renowned platform for NFTs. Popular choices include Metamask, Talisman, and Subwallet."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Start by connecting your Web3 wallet."}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:"async connect() {\n  const connect = await this.onboard.connectWallet();\n  this.wallet = await this.onboard.connectedWallet;\n\n  if (this.wallet) {\n    this.provider = new ethers.providers.Web3Provider(this.wallet.provider);\n    this.signer = this.provider.getSigner();\n    this.address = await this.signer.getAddress();\n    this.set();\n  }\n\n  return { connect };\n}\n"})}),"\n",(0,i.jsxs)(t.p,{children:["For a comprehensive understanding of the onboard wallet provider, refer to ",(0,i.jsx)(t.a,{href:"https://astar.network/blog/one-small-piece-of-code-one-giant-leap-for-web3-37760/",children:"this article"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"step-2-digital-signatures",children:"Step 2: Digital Signatures"}),"\n",(0,i.jsx)(t.p,{children:"With a connection established, you'll need to sign a message. This signature is crucial for Lighthouse's API to authenticate your EVM address. Consider it your digital stamp, verifying your blockchain identity."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:'Click the "Sign" button to authenticate.'}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:"async sign() {\n  this.sig = await this.signer.signMessage(this.address);\n}\n"})}),"\n",(0,i.jsx)(t.h2,{id:"step-3-uploading-to-lighthouse---your-first-major-move",children:"Step 3: Uploading to Lighthouse - Your First Major Move"}),"\n",(0,i.jsx)(t.p,{children:"With your signature ready, it's time to upload your image and metadata to the Lighthouse network. This decentralized platform ensures your data's safety and accessibility."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:'Click the "Upload" button to begin.'}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:"import * as dotenv from 'dotenv';\ndotenv.config();\nimport lighthouse from '@lighthouse-web3/sdk';\n\nconst uploadFile = async () => {\n  const path = \"path/to/your/file\"; // Provide the path to the file\n  const apiKey = process.env.API_KEY; \n  // Generate the API key from https://files.lighthouse.storage/ \n  //or using CLI (lighthouse-web3 api-key --new)\n\n  // Both files and folders are supported by the upload function\n  const response = await lighthouse.upload(path, apiKey);\n\n  console.log(response);\n  console.log(\"Visit at: https://gateway.lighthouse.storage/ipfs/\" + response.data.Hash);\n  return `https://gateway.lighthouse.storage/ipfs/${response.data.Hash}`\n}\n\nlet tokenURI = uploadFile();\n\n"})}),"\n",(0,i.jsx)(t.h2,{id:"step-4-minting-your-nft",children:"Step 4: Minting Your NFT"}),"\n",(0,i.jsx)(t.p,{children:"With your data pinned, you're set to mint your NFT. This step transforms your digital asset into a unique, blockchain-certified NFT."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:'Click the "Mint" button to finalize.'}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:'import * as dotenv from \'dotenv\';\ndotenv.config();\n\nconst abi = [....] //your contract ABI\n\nconst contractAddress = process.env.CONTRACT_ADDRESS; \nconst privateKey = process.env.PRIVATE_KEY;\n\nasync mint() {\n  // Get signer and provider\n  const provider = new ethers.JsonRpcProvider();\n  const signer = new ethers.Wallet(privateKey, provider);\n\n  const contract = new ethers.Contract(\n    contractAddress,\n    abi, //write a smart contract to handle minting of NFT\n    signer\n  );\n\n  // Mint the NFT\n  const txResponse = await contract.mintNFT(this.tokenURI);\n  const txReceipt = await txResponse.wait();\n  const [transferEvent] = txReceipt.events;\n  const { tokenId } = transferEvent.args;\n  console.log("NFT minted successfully!");\n  console.log(`NFT tokenId: ${tokenId}`);\n\n  const tokenURIonchain = await contract.tokenURI(tokenId);\n  console.log("tokenURI", tokenURIonchain);\n}\n'})}),"\n",(0,i.jsx)(t.p,{children:"Congratulations on minting your NFT!"}),"\n",(0,i.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,i.jsx)(t.p,{children:"This guide offers a step-by-step introduction to NFT creation and management using the Astar Network EVM and Lighthouse Network. As you familiarize yourself with these steps, you'll be better equipped to delve deeper into the dynamic world of NFTs. Welcome to the digital frontier!"}),"\n",(0,i.jsx)(t.hr,{})]})}function c(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>r});var i=n(67294);const s={},o=i.createContext(s);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);