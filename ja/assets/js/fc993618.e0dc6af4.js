"use strict";(self.webpackChunkdocs_1=self.webpackChunkdocs_1||[]).push([[3386],{90825:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var o=n(85893),s=n(11151);const i={title:"Crossmint",sidebar_position:1},r="Overview",c={id:"build/zkEVM/integrations/nft-collections/crossmint",title:"Crossmint",description:"Crossmint is an enterprise-grade web3 development platform that lets you deploy smart contracts, create email wallets, enable credit-card and cross chain payments, and use APIs to create, distribute, sell, store, and edit NFTs.",source:"@site/docs/build/zkEVM/integrations/nft-collections/crossmint.md",sourceDirName:"build/zkEVM/integrations/nft-collections",slug:"/build/zkEVM/integrations/nft-collections/crossmint",permalink:"/ja/docs/build/zkEVM/integrations/nft-collections/crossmint",draft:!1,unlisted:!1,editUrl:"https://github.com/AstarNetwork/astar-docs/tree/main/docs/build/zkEVM/integrations/nft-collections/crossmint.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Crossmint",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"NFT Collections",permalink:"/ja/docs/build/zkEVM/integrations/nft-collections/"},next:{title:"NFT Checkout",permalink:"/ja/docs/build/zkEVM/integrations/nft-checkout/"}},a={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"How to Create an NFT Collection on Astar zkEVM",id:"how-to-create-an-nft-collection-on-astar-zkevm",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"overview",children:"Overview"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"https://crossmint.com/?utm_source=backlinks&utm_medium=docs&utm_campaign=astar",children:"Crossmint"})," is an enterprise-grade web3 development platform that lets you deploy smart contracts, create email wallets, enable credit-card and cross chain payments, and use APIs to create, distribute, sell, store, and edit NFTs."]}),"\n",(0,o.jsx)(t.p,{children:"By abstracting away the core complexities of the Blockchain, Crossmint allows you to build NFT applications without requiring any blockchain experience or holding cryptocurrency, and making the blockchain invisible to end users. Crossmint enables you to provide a Web2 experience for your Web3 apps and onboard users."}),"\n",(0,o.jsx)(t.p,{children:"Crossmint allows you to import or deploy NFT smart contracts on Astar zkEVM and enable credit card and cross-chain payments for your NFTs."}),"\n",(0,o.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["Create an account on Crossmint's ",(0,o.jsx)(t.a,{href:"https://crossmint.com/console/overview/?utm_source=backlinks&utm_medium=docs&utm_campaign=astar",children:"Console"})]}),"\n"]}),"\n",(0,o.jsx)(t.admonition,{type:"caution",children:(0,o.jsxs)(t.p,{children:["Crossmint has two different consoles, they are, Production (Mainnet) and Staging (Testnet). It is highly recommended that you use the Staging Console (Testnet) first before proceeding with the Production Console (Mainnet).\nClick ",(0,o.jsx)(t.a,{href:"https://staging.crossmint.com/console/overview/?utm_source=backlinks&utm_medium=docs&utm_campaign=astar",children:"here"})," to head over to the Staging Console."]})}),"\n",(0,o.jsx)(t.h2,{id:"how-to-create-an-nft-collection-on-astar-zkevm",children:"How to Create an NFT Collection on Astar zkEVM"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["Create an API Key using Crossmint's ",(0,o.jsx)(t.a,{href:"https://crossmint.com/console/overview/?utm_source=backlinks&utm_medium=docs&utm_campaign=astar",children:"Console."})]}),"\n",(0,o.jsx)(t.li,{children:"Use the code snippet below to create an NFT Collection on Astar zkEVM."}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-javascript",children:'const options = {\n  method: "POST",\n  headers: {\n    "X-API-KEY": "<API_KEY_HERE>",\n    "Content-Type": "application/json",\n  },\n  body: \'{"chain":"astar-zkevm","fungibility":"non-fungible","metadata":{"description":"Astar zkEVM NFT Collection","imageUrl":"imageURL.com/image.png","name":"Astar Collection"},"payments":{"price":"pricePerNFT","recipientAddress":"theRecipientWalletAddress"}}\',\n};\n\nfetch("https://crossmint.com/api/2022-06-09/collections/", options)\n  .then((response) => response.json())\n  .then((response) => console.log(response))\n  .catch((err) => console.error(err));\n\n'})}),"\n",(0,o.jsxs)(t.ol,{start:"3",children:["\n",(0,o.jsxs)(t.li,{children:["Login into Crossmint's ",(0,o.jsx)(t.a,{href:"https://crossmint.com/console/overview/?utm_source=backlinks&utm_medium=docs&utm_campaign=astar",children:"Console"})," to see the NFT Collection that you created."]}),"\n",(0,o.jsxs)(t.li,{children:["You can create NFTs from the ",(0,o.jsx)(t.a,{href:"https://crossmint.com/console/overview/?utm_source=backlinks&utm_medium=docs&utm_campaign=astar",children:"Console"})," and also create a No-code Storefront for your NFT Collection to accept fiat or cross-chain payments as mentioned ",(0,o.jsx)(t.a,{href:"https://docs.astar.network/docs/build/zkEVM/integrations/nft-checkout/crossmint",children:"here."})]}),"\n",(0,o.jsxs)(t.li,{children:["Refer to the complete documentation ",(0,o.jsx)(t.a,{href:"https://docs.crossmint.com/api-reference/minting/collection/create-collection/?utm_source=backlinks&utm_medium=docs&utm_campaign=astar",children:"here."})]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["Please refer to this detailed step-by-step ",(0,o.jsx)(t.a,{href:"https://blog.crossmint.com/how-to-create-and-mint-nfts-on-astar-zkevm/?utm_source=astar&utm_medium=docs&utm_campaign=backlinks",children:"guide"})," on how you can achieve this."]})]})}function m(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>r});var o=n(67294);const s={},i=o.createContext(s);function r(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);