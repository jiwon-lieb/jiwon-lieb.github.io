"use strict";(self.webpackChunkdocs_1=self.webpackChunkdocs_1||[]).push([[9862],{11192:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>h,frontMatter:()=>c,metadata:()=>o,toc:()=>d});var r=n(85893),s=n(11151);const c={sidebar_position:1},a="thirdweb SDK",o={id:"build/EVM/interact/thirdweb-sdk",title:"thirdweb SDK",description:"Introduction",source:"@site/docs/build/EVM/interact/thirdweb-sdk.md",sourceDirName:"build/EVM/interact",slug:"/build/EVM/interact/thirdweb-sdk",permalink:"/ja/docs/build/EVM/interact/thirdweb-sdk",draft:!1,unlisted:!1,editUrl:"https://github.com/AstarNetwork/astar-docs/tree/main/docs/build/EVM/interact/thirdweb-sdk.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Interact with EVM Smart Contract",permalink:"/ja/docs/build/EVM/interact/"},next:{title:"Web3 EVM Wallet Library",permalink:"/ja/docs/build/EVM/interact/web3-onboard"}},i={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Getting started",id:"getting-started",level:2},{value:"Creating an app",id:"creating-an-app",level:3},{value:"Initialize SDK on Astar",id:"initialize-sdk-on-astar",level:3},{value:"Get contract",id:"get-contract",level:3},{value:"Calling contract functions",id:"calling-contract-functions",level:3},{value:"Connect Wallet",id:"connect-wallet",level:3},{value:"Learn more",id:"learn-more",level:2}];function l(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"thirdweb-sdk",children:"thirdweb SDK"}),"\n",(0,r.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://thirdweb.com/",children:"thirdweb"})," is a complete web3 development framework that provides everything you need to connect your apps and games to decentralized networks"]}),"\n",(0,r.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["Latest version of ",(0,r.jsx)(t.a,{href:"https://nodejs.org/",children:"Node.js"})," installed."]}),"\n",(0,r.jsx)(t.li,{children:"Astar network wallet set up with basic usage knowledge."}),"\n",(0,r.jsx)(t.li,{children:"Basic knowledge of React."}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"getting-started",children:"Getting started"}),"\n",(0,r.jsx)(t.h3,{id:"creating-an-app",children:"Creating an app"}),"\n",(0,r.jsxs)(t.p,{children:["thirdweb provides several SDKs to allow you to interact with your contract including: ",(0,r.jsx)(t.a,{href:"https://portal.thirdweb.com/react",children:"React"}),", ",(0,r.jsx)(t.a,{href:"https://portal.thirdweb.com/react-native",children:"React Native"}),", ",(0,r.jsx)(t.a,{href:"https://portal.thirdweb.com/typescript",children:"TypeScript"}),", ",(0,r.jsx)(t.a,{href:"https://portal.thirdweb.com/python",children:"Python"}),", ",(0,r.jsx)(t.a,{href:"https://portal.thirdweb.com/go",children:"Go"}),", and ",(0,r.jsx)(t.a,{href:"https://portal.thirdweb.com/unity",children:"Unity"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"This document will show you how to interact with your contract deployed to Astar using React"}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["View the ",(0,r.jsx)(t.a,{href:"https://portal.thirdweb.com/react",children:"full React SDK reference"})," in thirdweb\u2019s documentation."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"To create a new application pre-configured with thirdweb\u2019s SDKs run and choose your preferred configurations:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-jsx",children:"npx thirdweb create app --evm\n"})}),"\n",(0,r.jsx)(t.p,{children:"or install it into your existing project by running:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-jsx",children:"npx thirdweb install\n"})}),"\n",(0,r.jsx)(t.h3,{id:"initialize-sdk-on-astar",children:"Initialize SDK on Astar"}),"\n",(0,r.jsxs)(t.p,{children:["Wrap your application in the ",(0,r.jsx)(t.code,{children:"ThirdwebProvider"})," component and change the ",(0,r.jsx)(t.code,{children:"activeChain"})," to Astar"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-jsx",children:'import { ThirdwebProvider } from "@thirdweb-dev/react";\nimport { Astar } from "@thirdweb-dev/chains";\n\nconst App = () => {\n  return (\n    <ThirdwebProvider activeChain={Astar}>\n      <YourApp />\n    </ThirdwebProvider>\n  );\n};\n'})}),"\n",(0,r.jsx)(t.h3,{id:"get-contract",children:"Get contract"}),"\n",(0,r.jsxs)(t.p,{children:["To connect to your contract, use the SDK\u2019s ",(0,r.jsx)(t.a,{href:"https://portal.thirdweb.com/typescript/sdk.thirdwebsdk.getcontract",children:(0,r.jsx)(t.code,{children:"getContract"})})," method."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-jsx",children:'import { useContract } from "@thirdweb-dev/react";\n\nfunction App() {\n  const { contract, isLoading, error } = useContract("{{contract_address}}");\n}\n'})}),"\n",(0,r.jsx)(t.h3,{id:"calling-contract-functions",children:"Calling contract functions"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["For extension based functions, use the built-in supported hooks. The following is an example using the NFTs extension to access a list of NFTs owned by an address- ",(0,r.jsx)(t.code,{children:"useOwnedNFTs"})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-jsx",children:'import { useOwnedNFTs, useContract, useAddress } from "@thirdweb-dev/react";\n\n// Your smart contract address\nconst contractAddress = "{{contract_address}}";\n\nfunction App() {\n  const address = useAddress();\n  const { contract } = useContract(contractAddress);\n  const { data, isLoading, error } = useOwnedNFTs(contract, address);\n}\n'})}),"\n",(0,r.jsxs)(t.p,{children:["Full reference: ",(0,r.jsx)(t.a,{href:"https://portal.thirdweb.com/react/react.usenft",children:"https://portal.thirdweb.com/react/react.usenft"})]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Use the ",(0,r.jsx)(t.code,{children:"useContractRead"})," hook to call any read functions on your contract by passing in the name of the function you want to use."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-jsx",children:'import { useContractRead, useContract } from "@thirdweb-dev/react";\n\n// Your smart contract address\nconst contractAddress = "{{contract_address}}";\n\nfunction App() {\n  const { contract } = useContract(contractAddress);\n  const { data, isLoading, error } = useContractRead(contract, "getName");\n}\n'})}),"\n",(0,r.jsxs)(t.p,{children:["Full reference: ",(0,r.jsx)(t.a,{href:"https://portal.thirdweb.com/react/react.usecontractread",children:"https://portal.thirdweb.com/react/react.usecontractread"})]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Use the ",(0,r.jsx)(t.code,{children:"useContractWrite"})," hook to call any writefunctions on your contract by passing in the name of the function you want to use."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-jsx",children:'import {\n  useContractWrite,\n  useContract,\n  Web3Button,\n} from "@thirdweb-dev/react";\n\n// Your smart contract address\nconst contractAddress = "{{contract_address}}";\n\nfunction App() {\n  const { contract } = useContract(contractAddress);\n  const { mutateAsync, isLoading, error } = useContractWrite(\n    contract,\n    "setName"\n  );\n\n  return (\n    <Web3Button\n      contractAddress={contractAddress}\n      // Calls the "setName" function on your smart contract with "My Name" as the first argument\n      action={() => mutateAsync({ args: ["My Name"] })}\n    >\n      Send Transaction\n    </Web3Button>\n  );\n}\n'})}),"\n",(0,r.jsxs)(t.p,{children:["Full reference: ",(0,r.jsx)(t.a,{href:"https://portal.thirdweb.com/react/react.usecontractread",children:"https://portal.thirdweb.com/react/react.usecontract"}),"write"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"connect-wallet",children:"Connect Wallet"}),"\n",(0,r.jsx)(t.p,{children:"Create a custom connect wallet experience by declaring supported wallets passed to your provider."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-jsx",children:'import {\n  ThirdwebProvider,\n  metamaskWallet,\n  coinbaseWallet,\n  walletConnectV1,\n  walletConnect,\n  safeWallet,\n  paperWallet,\n} from "@thirdweb-dev/react";\n\nfunction MyApp() {\n  return (\n    <ThirdwebProvider\n      supportedWallets={[\n        metamaskWallet(),\n        coinbaseWallet(),\n        walletConnect({\n          projectId: "YOUR_PROJECT_ID", // optional\n        }),\n        walletConnectV1(),\n        safeWallet(),\n        paperWallet({\n          clientId: "YOUR_CLIENT_ID", // required\n        }),\n      ]}\n      activeChain={Astar}\n    >\n      <App />\n    </ThirdwebProvider>\n  );\n}\n'})}),"\n",(0,r.jsx)(t.p,{children:"Add in a connect wallet button to prompt end-users to login with any of the above supported wallets."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-jsx",children:'import { ConnectWallet } from "@thirdweb-dev/react";\n\nfunction App() {\n  return <ConnectWallet />;\n}\n'})}),"\n",(0,r.jsxs)(t.p,{children:["Full reference: ",(0,r.jsx)(t.a,{href:"https://portal.thirdweb.com/react/connecting-wallets",children:"https://portal.thirdweb.com/react/connecting-wallets"})]}),"\n",(0,r.jsx)(t.h2,{id:"learn-more",children:"Learn more"}),"\n",(0,r.jsxs)(t.p,{children:["If you have any further questions or encounter any issues during the process, please ",(0,r.jsx)(t.a,{href:"https://support.thirdweb.com",children:"reach out to thirdweb support"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>a});var r=n(67294);const s={},c=r.createContext(s);function a(e){const t=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(c.Provider,{value:t},e.children)}}}]);