"use strict";(self.webpackChunkdocs_1=self.webpackChunkdocs_1||[]).push([[6497],{63545:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var i=n(85893),s=n(11151);const r={title:"Mint NFTs with Crust"},a="Harnessing Crust Network for NFT Minting: A Developer's Guide",o={id:"build/builder-guides/leverage_parachains/mint-nfts-crust",title:"Mint NFTs with Crust",description:"The world of Non-Fungible Tokens (NFTs) has opened up intriguing possibilities for creators and collectors alike. However, stepping into this space might seem daunting, especially when it involves navigating the waters of blockchain technology. In this article, we provide an easy-to-understand, step-by-step guide for new coders interested in creating and managing NFTs via the Astar Network EVM and Crust Network while observing the underlying XCM protocol communication.",source:"@site/docs/build/builder-guides/leverage_parachains/mint-nfts-crust.md",sourceDirName:"build/builder-guides/leverage_parachains",slug:"/build/builder-guides/leverage_parachains/mint-nfts-crust",permalink:"/docs/build/builder-guides/leverage_parachains/mint-nfts-crust",draft:!1,unlisted:!1,editUrl:"https://github.com/AstarNetwork/astar-docs/tree/main/docs/build/builder-guides/leverage_parachains/mint-nfts-crust.md",tags:[],version:"current",frontMatter:{title:"Mint NFTs with Crust"},sidebar:"tutorialSidebar",previous:{title:"Lighthouse Encryption",permalink:"/docs/build/builder-guides/leverage_parachains/lighthouse-encryption"},next:{title:"Mint NFTs with Lighthouse",permalink:"/docs/build/builder-guides/leverage_parachains/mint-nfts-lighthouse"}},c={},d=[{value:"Step 1: Getting Started with an EVM Wallet",id:"step-1-getting-started-with-an-evm-wallet",level:2},{value:"Step 2: Dipping into Digital Signatures",id:"step-2-dipping-into-digital-signatures",level:2},{value:"Step 3: Uploading to IPFS - Your First Big Step",id:"step-3-uploading-to-ipfs---your-first-big-step",level:2},{value:"Step 4: Pinning - Securing Your Data",id:"step-4-pinning---securing-your-data",level:2},{value:"XCM",id:"xcm",level:3},{value:"Step 5: Minting Your First NFT",id:"step-5-minting-your-first-nft",level:2},{value:"Step 6: Admiring Your NFT",id:"step-6-admiring-your-nft",level:2},{value:"But wait there is more!",id:"but-wait-there-is-more",level:2},{value:"Step 0: Deploying the NFT Factory",id:"step-0-deploying-the-nft-factory",level:2},{value:"And there you have it",id:"and-there-you-have-it",level:2}];function l(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",img:"img",input:"input",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"harnessing-crust-network-for-nft-minting-a-developers-guide",children:"Harnessing Crust Network for NFT Minting: A Developer's Guide"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://hackmd.io/_uploads/r12FVSxHn.jpg",alt:""})}),"\n",(0,i.jsx)(t.p,{children:"The world of Non-Fungible Tokens (NFTs) has opened up intriguing possibilities for creators and collectors alike. However, stepping into this space might seem daunting, especially when it involves navigating the waters of blockchain technology. In this article, we provide an easy-to-understand, step-by-step guide for new coders interested in creating and managing NFTs via the Astar Network EVM and Crust Network while observing the underlying XCM protocol communication."}),"\n",(0,i.jsxs)(t.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(t.li,{className:"task-list-item",children:[(0,i.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ",(0,i.jsx)(t.a,{href:"https://evm-nft-contract-poc-ui.vercel.app/#/",children:"Demo NFT Minter Website"})]}),"\n",(0,i.jsxs)(t.li,{className:"task-list-item",children:[(0,i.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ",(0,i.jsx)(t.a,{href:"https://github.com/AstarNetwork/evm-nft-contract-poc-ui",children:"Demo NFT Minter GUI Repo"})]}),"\n",(0,i.jsxs)(t.li,{className:"task-list-item",children:[(0,i.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ",(0,i.jsx)(t.a,{href:"https://github.com/AstarNetwork/evm-nft-contract-poc",children:"Demo NFT Minter Contract Repo"})]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"step-1-getting-started-with-an-evm-wallet",children:"Step 1: Getting Started with an EVM Wallet"}),"\n",(0,i.jsx)(t.p,{children:"Before diving into NFT creation, you'll need to set up a Web3 wallet. This wallet serves as an interface between traditional web browsers and the Ethereum blockchain, a popular home for NFTs. Wallets such as Metamask, Talisman, and Subwallet are widely used and supported."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Begin by connecting your Web3 wallet."}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-jsx",children:"async connect() {\n  const connect = await this.onboard.connectWallet();\n  this.wallet = await this.onboard.connectedWallet;\n\n  if (this.wallet) {\n    this.provider = new ethers.providers.Web3Provider(this.wallet.provider);\n    this.signer = this.provider.getSigner();\n    this.address = await this.signer.getAddress();\n    this.set();\n  }\n\n  return { connect };\n}\n"})}),"\n",(0,i.jsxs)(t.p,{children:["While there is a little more than just that, you should take a look at ",(0,i.jsx)(t.a,{href:"https://astar.network/blog/one-small-piece-of-code-one-giant-leap-for-web3-37760/",children:"this article"})," for detailed view of the onboard wallet provider."]}),"\n",(0,i.jsx)(t.p,{children:"On line 10 above, you might have wondered what was this for, well it's one of those things that onboard simplifies, this sets the chain to be Shiden in our example.  It simplifies the interaction with the wallet by making suggestions to the user."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-jsx",children:'set() {\n  this.onboard.setChain({ wallet: "MetaMask", chainId: "0x150" });\n},\n'})}),"\n",(0,i.jsx)(t.h2,{id:"step-2-dipping-into-digital-signatures",children:"Step 2: Dipping into Digital Signatures"}),"\n",(0,i.jsx)(t.p,{children:"Now that you're connected, the next step involves signing a message. Why? Crust's IPFS API needs your EVM address's signature for authorized use. Think of it as your unique digital fingerprint, confirming your identity on the blockchain."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:'Go ahead and hit the "Sign" button to sign the message.'}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Pro tip"}),", there are many different ways to sign a message depending of the framework, here are two I have used for this project, first in VueJs, then in NodeJs."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-jsx",children:"async sign() {\n  this.sig = await this.signer.signMessage(this.address);\n}\n"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-nodejs=",children:'async function sign(address) {\n  return hre.network.provider.send(\n    "eth_sign",\n    [address, ethers.utils.hexlify(ethers.utils.toUtf8Bytes(address))]\n  )\n}\n'})}),"\n",(0,i.jsx)(t.h2,{id:"step-3-uploading-to-ipfs---your-first-big-step",children:"Step 3: Uploading to IPFS - Your First Big Step"}),"\n",(0,i.jsx)(t.p,{children:"With your signature in place, it's time to upload your image and metadata file to the IPFS network. This decentralized network ensures that your data remains accessible and secure."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:'To upload your files, simply select the "IPFS" button.'}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"You can now see the signature being used on line 20, then used in the auth section on line 28.\nHow to add is shown on line 42, how to get stats on it on line 53."}),"\n",(0,i.jsxs)(t.p,{children:["And just like that, we already know what our ",(0,i.jsx)(t.code,{children:"tokenURI"})," will be so let's pin that!"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-jsx",children:'async ipfs() {\n  const tokenId = await this.getNextTokenId();\n  const now = Date.now();\n\n  const metadata = {\n    name: `ShidenCrust Singulars #${tokenId}`,\n    description:\n      "This is the POC collection of NFTs on Shiden with the metadata and image stored on Crust",\n    image: "",\n    edition: tokenId,\n    date: now,\n    creator: "Greg Luneau from Astar",\n    attributes: [\n      { trait_type: "Smart Contract Chain", value: "Shiden.Network" },\n      { trait_type: "Decentralized Cloud Storage", value: "Crust.Network" },\n      { trait_type: "Virtual Machine", value: "EVM" },\n    ],\n  };\n    \n  const authHeaderRaw = `eth-${this.address}:${this.sig}`;\n  const authHeader = Buffer.from(authHeaderRaw).toString("base64");\n  const ipfsW3GW = ["https://crustipfs.xyz", "https://gw.crustfiles.app"];\n\n  // 1. Create IPFS instant\n  const ipfs = create({\n    url: `${ipfsW3GW[1]}/api/v0`,\n    headers: {\n      authorization: `Basic ${authHeader}`,\n    },\n  });\n\n  // 2. Add files to ipfs\n  const options = {\n    wrapWithDirectory: true,\n  };\n\n  const imageFileDetails = {\n    path: tokenId + ".png",\n    content: await this.image(),\n  };\n\n  const cidImage = await ipfs.add(imageFileDetails, options);\n  metadata.image = `ipfs://${cidImage.cid.toString()}/${\n    imageFileDetails.path\n  }`;\n\n  this.files.push({\n    cid: cidImage.cid.toString(),\n    size: cidImage.size,\n  });\n\n  // 3. Get file status from ipfs\n  const fileStatImage = await ipfs.files.stat(\n    `/ipfs/${cidImage.cid.toString()}/${imageFileDetails.path}`\n  );\n\n  const metadataFileDetails = {\n    path: tokenId + ".json",\n    content: JSON.stringify(metadata),\n  };\n\n  const cidMetadata = await ipfs.add(metadataFileDetails, options);\n\n  this.files.push({\n    cid: cidMetadata.cid.toString(),\n    size: cidMetadata.size,\n  });\n\n  // 3. Get file status from ipfs\n  this.metadatafileStat = await ipfs.files.stat(\n    `/ipfs/${cidMetadata.cid.toString()}/${metadataFileDetails.path}`\n  );\n\n  this.tokenURI = `https://crustipfs.live/ipfs/${cidMetadata.cid.toString()}/${\n    metadataFileDetails.path\n  }`;\n}\n'})}),"\n",(0,i.jsxs)(t.p,{children:["There is a little helper function that should not be overlooked.  It's a good example of a basic interaction with a smart contract, in this instance we want to know the latest ",(0,i.jsx)(t.code,{children:"tokenID"})," that was minted."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-jsx",children:'async getNextTokenId() {\n  const abi = ["function currentTokenId() view returns (uint256)"];\n  const provider = new ethers.providers.Web3Provider(this.wallet.provider);\n  const signer = provider.getSigner();\n  const contract = new ethers.Contract(this.contractAddress, abi, signer);\n\n  let currentTokenId = await contract.currentTokenId();\n  return currentTokenId.add(1).toNumber();\n}\n'})}),"\n",(0,i.jsx)(t.h2,{id:"step-4-pinning---securing-your-data",children:"Step 4: Pinning - Securing Your Data"}),"\n",(0,i.jsx)(t.p,{children:"Once your files are on the IPFS network, you'll need to pin them. This process anchors your data to the network, ensuring it remains accessible over time. Pinning involves a payment - once for the image and once for the metadata file - and includes a XCM transfer to the Crust Network."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:'To pin your files, click on the "Pin" button.'}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Line 18 shows how to get your SDN balance, this way you could advise the user if there is not enough for the transactions. Line 28 shows how to get the price of storing this file on the Crust Network. Line 37 places the order and the payment is made."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-jsx",children:'async pin() {\n  // Define StorageOrder contract ABI\n  const StorageOrderABI = [\n    "function getPrice(uint size) public view returns (uint price)",\n    "function placeOrder(string cid, uint64 size) public payable",\n    "function placeOrderWithNode(string cid, uint size, address nodeAddress) public payable",\n    "event Order(address customer, address merchant, string cid, uint size, uint price)",\n  ];\n\n  // Define StorageOrder contract address for Shiden network\n  const StorageOrderAddress = "0x10f15729aEFB5165a90be683DC598070F91367F0";\n\n  // Get signer and provider\n  const provider = new ethers.providers.Web3Provider(this.wallet.provider);\n  const signer = provider.getSigner();\n\n  // Get balance\n  this.balance = await provider.getBalance(this.address);\n  console.log("balance:", ethers.utils.formatEther(this.balance), "SDN");\n\n  // Get prices and place orders for each file\n  for (const file of this.files) {\n    const storageOrder = new ethers.Contract(\n      StorageOrderAddress,\n      StorageOrderABI,\n      signer\n    );\n    const price = await storageOrder.getPrice(file.size);\n    console.log(\n      `Price for file CID ${file.cid} with size ${\n        file.size\n      }: ${ethers.utils.formatEther(price)} SDN`\n    );\n\n    console.log("file.cid, file.size, price", file.cid, file.size, price);\n\n    const txResponse = await storageOrder.placeOrder(file.cid, file.size, {\n      value: price,\n    });\n    const txReceipt = await txResponse.wait();\n    console.log(\n      `File CID ${file.cid} with size ${file.size} pinned successfully!`\n    );\n    console.log(`Transaction hash: ${txReceipt.transactionHash}`);\n  }\n}\n'})}),"\n",(0,i.jsxs)(t.p,{children:["If you want to know more about the specific parameters of the Crust Network checkout ",(0,i.jsx)(t.a,{href:"https://wiki.crust.network/docs/en/buildGettingStarted",children:"their wiki"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"xcm",children:"XCM"}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"That's great but you said it was an XCM transaction?"}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["It is, it's also well hidden.  If we peer into the smart contract Crust deployed on Shiden, you can see two ",(0,i.jsx)(t.code,{children:"xcmtransactor"})," function call.  One to transfer SDN to pay for all the pinning fees and the second to do the pinning as remote transaction call."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-solidity",children:'  function placeOrder(string memory cid, uint64 size) public payable {\n    require(sizeLimit >= size, "Size exceeds the limit");\n\n    uint price = getPrice(size);\n    require(msg.value >= price, "No enough SDN to place order");\n\n    uint256 parachainId = 2012;\n    // Transfer the SDN through XCMP\n    address[] memory assetId = new address[](1);\n    assetId[0] = SDN_ADDRESS;\n    uint256[] memory assetAmount = new uint256[](1);\n    assetAmount[0] = preSendAmount;\n    uint256 feeIndex = 0;\n    xcmtransactor.assets_reserve_transfer(assetId, assetAmount, corrAddress, false, parachainId, feeIndex);\n\n    // Place cross chain storage order\n    uint256 feeAmount = preSendAmount / 10;\n    uint64 overallWeight = 8000000000;\n    // cid: HiMoonbaseSC, size: 1024\n    bytes memory callData = buildCallBytes(cid, size);\n    xcmtransactor.remote_transact(\n        parachainId,\n        false,\n        SDN_ADDRESS,\n        feeAmount,\n        callData,\n        overallWeight\n    );\n  }\n'})}),"\n",(0,i.jsx)(t.h2,{id:"step-5-minting-your-first-nft",children:"Step 5: Minting Your First NFT"}),"\n",(0,i.jsx)(t.p,{children:"With your files securely pinned, you're ready to mint your NFT. This is where the magic happens - your digital asset becomes a unique, blockchain-verified NFT!"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:'To mint your NFT, simply hit the "Mint" button.'}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["On line 13 is where we mint this new marvelous ShidenCrust Singular NFT using the ",(0,i.jsx)(t.code,{children:"tokenURI"})," we made ealier. Line 16 shows how you can retreive the offical ",(0,i.jsx)(t.code,{children:"tokenID"}),". Line 20 shows how to retreive the ",(0,i.jsx)(t.code,{children:"tokenURI"})," from a ",(0,i.jsx)(t.code,{children:"tokenID"})]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-jsx",children:'async mint() {\n  // Get signer and provider\n  const provider = new ethers.providers.Web3Provider(this.wallet.provider);\n  const signer = provider.getSigner();\n\n  const contract = new ethers.Contract(\n    this.contractAddress,\n    this.FactoryNFT.abi,\n    signer\n  );\n\n  // Mint the NFT\n  const txResponse = await contract.mintNFT(this.tokenURI);\n  const txReceipt = await txResponse.wait();\n  const [transferEvent] = txReceipt.events;\n  const { tokenId } = transferEvent.args;\n  console.log("NFT minted successfully!");\n  console.log(`NFT tokenId: ${tokenId}`);\n\n  const tokenURIonchain = await contract.tokenURI(tokenId);\n  console.log("tokenURI", tokenURIonchain);\n  this.tofuURL = `https://tofunft.com/nft/shiden/${this.contractAddress}/${tokenId}`;\n}\n'})}),"\n",(0,i.jsx)(t.h2,{id:"step-6-admiring-your-nft",children:"Step 6: Admiring Your NFT"}),"\n",(0,i.jsx)(t.p,{children:"You've done it - you've created your first NFT! To view your NFT, head to the tofuNFT.com marketplace. Do keep in mind that it might take a minute or two for your NFT to appear."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:'To view your NFT, click on the "View" button.'}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Well that's it, the link to a viewer of the NFT was built on line 22 above, it's that simple."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://hackmd.io/_uploads/B1PwYBlBn.png",alt:""})}),"\n",(0,i.jsx)(t.h2,{id:"but-wait-there-is-more",children:"But wait there is more!"}),"\n",(0,i.jsx)(t.p,{children:"Let's go back in time to know how this mighty contract was deployed!"}),"\n",(0,i.jsx)(t.h2,{id:"step-0-deploying-the-nft-factory",children:"Step 0: Deploying the NFT Factory"}),"\n",(0,i.jsx)(t.p,{children:"The NFT Factory is a smart contract that serves as the foundation for our NFT creation process."}),"\n",(0,i.jsxs)(t.p,{children:["Deploying an NFT Factory may seem intimidating if you're new to the world of blockchain and smart contracts, but don't worry, I've broken it down into manageable steps in ",(0,i.jsx)(t.a,{href:"https://github.com/AstarNetwork/evm-nft-contract-poc",children:"this github repo"})," for reference."]}),"\n",(0,i.jsxs)(t.p,{children:["Line 9 deployes the contract, don't forget to save the deployed address, (that's what was inside ",(0,i.jsx)(t.code,{children:"this.contractAddress"}),") you'll need it for interations we've done above."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:'// deploy.js\n\nasync function main() {\n  // Load the contract and the provider\n  const [signer] = await ethers.getSigners();\n  console.log("Deploying contract with account:", signer.address);\n\n  const FactoryNFT = await ethers.getContractFactory("FactoryNFT");\n  const factoryNFT = await FactoryNFT.deploy(); //deploying the contract\n\n  await factoryNFT.deployed(); // waiting for the contract to be deployed\n\n  console.log("FactoryNFT deployed to:", factoryNFT.address); // Returning the contract address\n}\n\nmain()\n  .then(() => process.exit(0))\n  .catch((error) => {\n    console.error(error);\n    process.exit(1);\n  });\n\n'})}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"and-there-you-have-it",children:"And there you have it"}),"\n",(0,i.jsx)(t.p,{children:"a step-by-step beginner's guide to creating and managing NFTs using the Astar Network EVM and Crust Network with XCM. As you become more comfortable with these steps, you'll be well on your way to exploring the exciting and innovative world of NFTs. Welcome to the frontier of digital creation!"})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>a});var i=n(67294);const s={},r=i.createContext(s);function a(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);