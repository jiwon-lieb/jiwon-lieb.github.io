"use strict";(self.webpackChunkdocs_1=self.webpackChunkdocs_1||[]).push([[5565],{3175:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>h,default:()=>b,frontMatter:()=>d,metadata:()=>l,toc:()=>p});var s=t(85893),i=t(11151);const r=t.p+"assets/images/wanchain1-6e133b301861aec6647eaf34641a69b9.png",a=t.p+"assets/images/wanchain2-ff3bc09ad990443edf57c3c5e826b350.png",o=t.p+"assets/images/wanchain3-1ad30e04e72db61473f4f6556f50c436.png",c=(t.p,t.p+"assets/images/wanchain5-f0d3de7725fe1e89645fc21b680f6456.png"),d={sidebar_position:2},h="Wanchain Bridge",l={id:"build/integrations/bridges/wanchain",title:"Wanchain Bridge",description:"Overview",source:"@site/docs/build/integrations/bridges/wanchain.md",sourceDirName:"build/integrations/bridges",slug:"/build/integrations/bridges/wanchain",permalink:"/ja/docs/build/integrations/bridges/wanchain",draft:!1,unlisted:!1,editUrl:"https://github.com/AstarNetwork/astar-docs/tree/main/docs/build/integrations/bridges/wanchain.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Celer cBridge",permalink:"/ja/docs/build/integrations/bridges/cbridge"},next:{title:"Wallets",permalink:"/ja/docs/build/integrations/wallets/"}},u={},p=[{value:"Overview",id:"overview",level:2},{value:"About USDT XFlows",id:"about-usdt-xflows",level:2},{value:"Contracts",id:"contracts",level:2},{value:"Native Tether USDT vs. xcUSDT on Astar",id:"native-tether-usdt-vs-xcusdt-on-astar",level:2},{value:"How to bridge native Tether USDT from Ethereum to Astar EVM",id:"how-to-bridge-native-tether-usdt-from-ethereum-to-astar-evm",level:2},{value:"Step 1",id:"step-1",level:3},{value:"Step 2",id:"step-2",level:3},{value:"Step 3",id:"step-3",level:3}];function m(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"wanchain-bridge",children:"Wanchain Bridge"}),"\n",(0,s.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(n.p,{children:"A guide on how to transfer native Tether USDT between Astar, Arbitrum, Avalanche C-Chain, BNB Chain, Ethereum, OKC, Polygon, Wanchain and Tron using USDT XFlows."}),"\n",(0,s.jsx)(n.h2,{id:"about-usdt-xflows",children:"About USDT XFlows"}),"\n",(0,s.jsxs)(n.p,{children:["USDT XFlows is a decentralized cross-chain solution that enables native-to-native cross-chain transfers between blockchains where USDT is natively minted by Tether. XFlows leverages the power of Wanchain\u2019s cross-chain bridges to provide easy, non-custodial transfers between chains without the need for centralized exchanges or wrapped assets. Find more information on Wanchain ",(0,s.jsx)(n.a,{href:"https://bridge.wanchain.org/",children:"product page"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"contracts",children:"Contracts"}),"\n",(0,s.jsx)(n.p,{children:"Native USDT contract addresses:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"USDT @ Arbitum: \n\n0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9\n\nxcUSDT @ Astar:\n\n0xfFFfffFF000000000000000000000001000007C0\n\nUSDT @ Avalanche C-Chain: \n\n0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7\n\nBUSD @ BNB Chain: \n\n0x55d398326f99059fF775485246999027B3197955\n\nUSDT @ Ethereum: \n\n0xdAC17F958D2ee523a2206206994597C13D831ec7\n\nUSDT @ OKX Chain: \n\n0x382bb369d343125bfb2117af9c149795c6c65c50\n\nUSDT @ Polygon: \n\n0xc2132D05D31c914a87C6611C10748AEb04B58e8F\n\nUSDT @ Tron:\n\nTR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t\n\nUSDT @ Wanchain:\n\n0x11e77E27Af5539872efEd10abaA0b408cfd9fBBD\n"})}),"\n",(0,s.jsx)(n.h2,{id:"native-tether-usdt-vs-xcusdt-on-astar",children:"Native Tether USDT vs. xcUSDT on Astar"}),"\n",(0,s.jsx)(n.p,{children:"Tether issues USDT, the blockchain industry\u2019s biggest stablecoin by means of total market capitalization, on Polkadot\u2019s \u201ccommon good\u201d generic asset parachain, Statemint. By leveraging XCM, Polkadot\u2019s cross-consensus communication protocol, native Tether USDT can be transferred to parachains like Astar as \u201cxcUSDT\u201d. xcUSDT is more versatile than wrapped USDT and can be used for both Wasm and EVM projects in the Astar ecosystem."}),"\n",(0,s.jsx)(n.h2,{id:"how-to-bridge-native-tether-usdt-from-ethereum-to-astar-evm",children:"How to bridge native Tether USDT from Ethereum to Astar EVM"}),"\n",(0,s.jsx)(n.p,{children:"This section shows how to bridge native Tether USDT from Ethereum to Astar."}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note"}),": Cross-chain transactions from other EVM networks such as Arbitrum, Avalanche C-Chain, BNB Chain, Ethereum, OKC, Polygon and others follow the same process."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"step-1",children:"Step 1"}),"\n",(0,s.jsxs)(n.p,{children:["Visit the ",(0,s.jsx)(n.a,{href:"https://bridge.wanchain.org/",children:"Wanchain Bridge web portal"}),". Initiate a cross-chain transaction to move your $USDT from Ethereum to Astar."]}),"\n",(0,s.jsxs)(n.p,{children:["Select \u201cUSDT\u201d from the drop-down menu. Choose \u201cEthereum\u201d and \u201cAstar\u201d as your ",(0,s.jsx)(n.code,{children:"From"})," and ",(0,s.jsx)(n.code,{children:"To"})," networks respectively. Finally, input your destination address in the ",(0,s.jsx)(n.code,{children:"Recipient"})," field as well as the amount of $USDT you want to send. Click ",(0,s.jsx)(n.code,{children:"Next"}),"."]}),"\n",(0,s.jsx)("img",{src:r,style:{width:1200}}),"\n",(0,s.jsx)(n.p,{children:"Confirm that the \u201cRecipient\u201d address does not belong to a centralised exchange then click \u201cConfirm\u201d."}),"\n",(0,s.jsx)("img",{src:a,style:{width:1200}}),"\n",(0,s.jsx)(n.p,{children:"Confirm that all the details are correct then click \u201cConfirm\u201d."}),"\n",(0,s.jsx)("img",{src:o,style:{width:1200}}),"\n",(0,s.jsx)(n.h3,{id:"step-2",children:"Step 2"}),"\n",(0,s.jsx)(n.p,{children:"Wait for your cross-chain transaction to complete. It is now processing."}),"\n",(0,s.jsx)(n.p,{children:"While your cross-chain transaction is processing, the status will change three times:"}),"\n",(0,s.jsx)(n.p,{children:"Processing (1/2)\nProcessing (2/2)\nSuccess"}),"\n",(0,s.jsx)(n.h3,{id:"step-3",children:"Step 3"}),"\n",(0,s.jsx)(n.p,{children:"Confirm the receipt of your funds. Your cross-chain transaction is complete!"}),"\n",(0,s.jsxs)(n.p,{children:["Once your cross-chain transaction is complete, you\u2019ll see your $xcUSDT balance on Astar. The cross-chain transaction status will display as ",(0,s.jsx)(n.code,{children:"Success"}),"."]}),"\n",(0,s.jsx)("img",{src:c,style:{width:1200}}),"\n",(0,s.jsx)(n.p,{children:"Support"}),"\n",(0,s.jsx)(n.p,{children:"If you have any questions, feel free to join any of our communities and our Ambassadors will assist you. And remember that the Astar team or Ambassadors will never message or DM you first!"})]})}function b(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>a});var s=t(67294);const i={},r=s.createContext(i);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);