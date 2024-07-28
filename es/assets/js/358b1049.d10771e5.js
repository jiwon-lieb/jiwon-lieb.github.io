"use strict";(self.webpackChunkdocs_1=self.webpackChunkdocs_1||[]).push([[8927],{89870:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var s=n(85893),a=n(11151);const r={sidebar_position:1},i="Astar.js for Wasm Smart Contracts",o={id:"build/wasm/interact/astarjs",title:"Astar.js for Wasm Smart Contracts",description:"Astar.js is a library for interacting with the with the Astar/Shiden/Shibuya chains using Javascript/Typescript. It is a collection of modules that allow you to interact with the Astar blockchain through a local or remote node. It can be used in the browser or in Node.js.",source:"@site/docs/build/wasm/interact/astarjs.md",sourceDirName:"build/wasm/interact",slug:"/build/wasm/interact/astarjs",permalink:"/es/docs/build/wasm/interact/astarjs",draft:!1,unlisted:!1,editUrl:"https://github.com/AstarNetwork/astar-docs/tree/main/docs/build/wasm/interact/astarjs.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Interact with Wasm Smart Contract",permalink:"/es/docs/build/wasm/interact/"},next:{title:"Transaction Fees",permalink:"/es/docs/build/wasm/transaction-fees"}},c={},l=[{value:"Installation",id:"installation",level:2},{value:"Examples",id:"examples",level:2},{value:"Usage",id:"usage",level:2},{value:"Contract build artifacts",id:"contract-build-artifacts",level:3},{value:"Connecting to API",id:"connecting-to-api",level:3},{value:"Initialise ContractPromise Class",id:"initialise-contractpromise-class",level:3},{value:"Query Contract Messages",id:"query-contract-messages",level:3},{value:"Send Contract Transaction the easy way",id:"send-contract-transaction-the-easy-way",level:3},{value:"Send Contract Transaction the hard way",id:"send-contract-transaction-the-hard-way",level:3},{value:"Weights V2",id:"weights-v2",level:2},{value:"Events",id:"events",level:2},{value:"Best Practice",id:"best-practice",level:2},{value:"References",id:"references",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"astarjs-for-wasm-smart-contracts",children:"Astar.js for Wasm Smart Contracts"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://github.com/AstarNetwork/astar.js/wiki",children:"Astar.js"})," is a library for interacting with the with the Astar/Shiden/Shibuya chains using Javascript/Typescript. It is a collection of modules that allow you to interact with the Astar blockchain through a local or remote node. It can be used in the browser or in Node.js."]}),"\n",(0,s.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:" @polkadot/api"})," and ",(0,s.jsx)(t.code,{children:"@polkadot/api-contract"})," package will be used alongside the ",(0,s.jsx)(t.code,{children:"@astar-network/astar-api"})," and ",(0,s.jsx)(t.code,{children:"@astar-network/astar-sdk-core"})," package. With that in mind, we can install from npm:"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"yarn add @polkadot/api@9.13.6 @polkadot/api-contract@9.13.6 @astar-network/astar-api@0.1.17 @astar-network/astar-sdk-core@0.1.17"})}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.p,{children:"You can find a working examples here:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Flipper contract ",(0,s.jsx)(t.a,{href:"https://github.com/AstarNetwork/wasm-flipper",children:"flipper"}),". This is a simple contract that allows users to flip a boolean value."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Lottery contract ",(0,s.jsx)(t.a,{href:"https://github.com/astarNetwork/wasm-lottery",children:"lottery"}),". Here is another dapp example that uses Astar.js to interact with WASM smart contract. This is a simple lottery dapp that allows users to enter and draw the lottery."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(t.h3,{id:"contract-build-artifacts",children:"Contract build artifacts"}),"\n",(0,s.jsxs)(t.p,{children:["The contract metadata and the wasm code are generated by building the contract with ",(0,s.jsx)(t.a,{href:"/es/docs/build/wasm/swanky-suite/cli",children:"Swanky"})," CLI."]}),"\n",(0,s.jsx)(t.h3,{id:"connecting-to-api",children:"Connecting to API"}),"\n",(0,s.jsx)(t.p,{children:"The API provides application developers the ability to send transactions and recieve data from blockchain node.\nHere is an example to create an API instance:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:'import { ApiPromise } from "@polkadot/api";\nimport { WsProvider } from "@polkadot/rpc-provider";\nimport { options } from "@astar-network/astar-api";\nimport { sendTransaction } from "@astar-network/astar-sdk-core";\n\nasync function main() {\n  const provider = new WsProvider("ws://localhost:9944");\n  // OR\n  // const provider = new WsProvider(\'wss://shiden.api.onfinality.io/public-ws\');\n  const api = new ApiPromise(options({ provider }));\n  await api.isReady;\n\n  // Use the api\n  // For example:\n  console.log((await api.rpc.system.properties()).toHuman());\n\n  process.exit(0);\n}\n\nmain();\n'})}),"\n",(0,s.jsx)(t.h3,{id:"initialise-contractpromise-class",children:"Initialise ContractPromise Class"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"ContractPromise"})," interface allows us to interact with a deployed contract. In the previous Blueprint example this instance was created via ",(0,s.jsx)(t.code,{children:"createContract"}),". In general use, we can also create an instance via ",(0,s.jsx)(t.code,{children:"new"}),", i.e. when we are attaching to an existing contract on-chain:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:'import { Abi, ContractPromise } from "@polkadot/api-contract";\n\n// After compiling the contract a ABI json is created in the artifacts. Import the ABI:\nimport ABI from "./artifacts/lottery.json";\n\nconst abi = new Abi(ABI, api.registry.getChainProperties());\n\n// Initialise the contract class\nconst contract = new ContractPromise(api, abi, address); // address is the deployed contract address\n'})}),"\n",(0,s.jsx)(t.h3,{id:"query-contract-messages",children:"Query Contract Messages"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:'// Get the gas WeightV2 using api.consts.system.blockWeights[\'maxBlock\']\nconst gasLimit = api.registry.createType(\n  "WeightV2",\n  api.consts.system.blockWeights["maxBlock"]\n);\n\n// Query the contract message\nconst { gasRequired, result, output } = await contract.query.pot(\n  account.address,\n  {\n    gasLimit,\n  }\n);\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Underlying the above ",(0,s.jsx)(t.code,{children:".query.<messageName>"})," is using the ",(0,s.jsx)(t.code,{children:"api.rpc.contracts.call"})," API on the smart contracts pallet to retrieve the value. For this interface, the format is always of the form ",(0,s.jsx)(t.code,{children:"messageName(<account address to use>, <value>, <gasLimit>, <...additional params>)"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"send-contract-transaction-the-easy-way",children:"Send Contract Transaction the easy way"}),"\n",(0,s.jsx)(t.p,{children:"Sending contract transaction is normally two steps process. The first step is to dry-run the transaction and check for errors. Astar.js has a helper function to do this. This helper function will return the transaction object which you can use to sign and send the transaction."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:'import { sendTransaction } from "@astar-network/astar-sdk-core";\n\ntry {\n  const result = await sendTransaction(\n    api, // The api instance of type ApiPromise\n    contract, // The contract instance of type ContractPromise\n    "enter", // The message to send or transaction to call\n    account.address, // The sender address\n    new BN("1000000000000000000") // 1 TOKEN or it could be value you want to send to the contract in title\n    // The rest of the arguments are the arguments to the message\n  );\n\n  // Sign and send the transaction\n  // The result is a promise that resolves to unsubscribe function\n  const unsub = await result.signAndSend(account.address, (res) => {\n    if (res.status.isInBlock) {\n      console.log("in a block");\n    }\n    if (res.status.isFinalized) {\n      console.log("finalized");\n      console.log("Successfully entered in lottery!");\n      unsub();\n    }\n  });\n} catch (error) {\n  // If there is an error, it will be thrown here\n  console.log(error);\n}\n'})}),"\n",(0,s.jsx)(t.h3,{id:"send-contract-transaction-the-hard-way",children:"Send Contract Transaction the hard way"}),"\n",(0,s.jsx)(t.p,{children:"If you want to have more control over the transaction, you can use the two steps process. The first step is to dry-run the transaction and check for errors. The second step is to sign and send the transaction."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"\n// Get the initial gas WeightV2 using api.consts.system.blockWeights['maxBlock']\nconst gasLimit = api.registry.createType(\n  'WeightV2',\n  api.consts.system.blockWeights['maxBlock']\n)\n\n// Query the contract message\n// This will return the gas required and storageDeposit to execute the message\n// and the result of the message\nconst { gasRequired, storageDeposit, result } = await contract.query.enter(\n  account.address,\n  {\n    gasLimit: gasLimit,\n    storageDepositLimit: null,\n    value: new BN('1000000000000000000')\n  }\n)\n\n// Check for errors\nif (result.isErr) {\n  let error = ''\n  if (result.asErr.isModule) {\n    const dispatchError = api.registry.findMetaError(result.asErr.asModule)\n    error = dispatchError.docs.length ? dispatchError.docs.concat().toString() : dispatchError.name\n  } else {\n    error = result.asErr.toString()\n  }\n\n  console.error(error)\n  return\n}\n\n// Even if the result is Ok, it could be a revert in the contract execution\nif (result.isOk) {\n  const flags = result.asOk.flags.toHuman()\n  // Check if the result is a revert via flags\n  if (flags.includes('Revert')) {\n    const type = contract.abi.messages[5].returnType // here 5 is the index of the message in the ABI\n    const typeName = type?.lookupName || type?.type || ''\n    const error = contract.abi.registry.createTypeUnsafe(typeName, [result.asOk.data]).toHuman()\n\n    console.error(error ? (error as any).Err : 'Revert')\n    return\n  }\n}\n\n// Gas require is more than gas returned in the query\n// To be safe, we double the gasLimit.\n// Note, doubling gasLimit will not cause spending more gas for the Tx\nconst estimatedGas = api.registry.createType(\n  'WeightV2',\n  {\n    refTime: gasRequired.refTime.toBn().mul(BN_TWO),\n    proofSize: gasRequired.proofSize.toBn().mul(BN_TWO),\n  }\n) as WeightV2\n\nsetLoading(true)\n\nconst unsub = await contract.tx\n  .enter({\n    gasLimit: estimatedGas,\n    storageDepositLimit: null,\n    value: new BN('1000000000000000000') // 1 TOKEN or it could be value you want to send to the contract in title\n  })\n  .signAndSend(account.address, (res) => {\n    // Send the transaction, like elsewhere this is a normal extrinsic\n    // with the same rules as applied in the API (As with the read example,\n    // additional params, if required can follow)\n    if (res.status.isInBlock) {\n      console.log('in a block')\n    }\n    if (res.status.isFinalized) {\n      console.log('Successfully sent the txn')\n      unsub()\n    }\n  })\n"})}),"\n",(0,s.jsx)(t.h2,{id:"weights-v2",children:"Weights V2"}),"\n",(0,s.jsxs)(t.p,{children:["The above is the current interface for estimating the gas used for a transaction. However, the Substrate runtime has a new interface for estimating the weight of a transaction. This is available on the ",(0,s.jsx)(t.code,{children:"api.tx.contracts.call"})," interface. The interface is the same as the above, however the ",(0,s.jsx)(t.code,{children:"gasLimit"})," is now specified as a ",(0,s.jsx)(t.code,{children:"refTime"})," and ",(0,s.jsx)(t.code,{children:"proofSize"}),". ",(0,s.jsx)(t.code,{children:"refTime"})," is the time it takes to execute a transaction with a proof size of 1. ",(0,s.jsx)(t.code,{children:"proofSize"})," is the size of the proof in bytes. The ",(0,s.jsx)(t.code,{children:"gasLimit"})," is calculated as ",(0,s.jsx)(t.code,{children:"refTime * proofSize"}),". The ",(0,s.jsx)(t.code,{children:"refTime"})," and ",(0,s.jsx)(t.code,{children:"proofSize"})," can be retrieved from the ",(0,s.jsx)(t.code,{children:"api.consts.system.blockWeights"})," interface."]}),"\n",(0,s.jsx)(t.h2,{id:"events",children:"Events"}),"\n",(0,s.jsxs)(t.p,{children:["On the current version of the API, any event raised by the contract will be transparently decoded with the relevant ABI and will be made available on the ",(0,s.jsx)(t.code,{children:"result"})," (from ",(0,s.jsx)(t.code,{children:".signAndSend(alicePair, (result) => {...}"}),") as ",(0,s.jsx)(t.code,{children:"contractEvents"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["When no events are emitted this value would be ",(0,s.jsx)(t.code,{children:"undefined"}),", however should events be emitted, the array will contain all the decoded values."]}),"\n",(0,s.jsx)(t.h2,{id:"best-practice",children:"Best Practice"}),"\n",(0,s.jsxs)(t.p,{children:["One thing you need to remember is that ",(0,s.jsx)(t.code,{children:"#[ink(payable)]"})," added to an ",(0,s.jsx)(t.code,{children:"#[ink(message)]"})," prevents ",(0,s.jsx)(t.code,{children:"ink_env::debug_println!"})," messages to be logged in console when executing the smart contract call. Debug messages are only emitted during a dry run (query), not during the actual transaction (tx)(Source). When you're calling the contract, first query it, then perform your transaction if there are no error messages."]}),"\n",(0,s.jsx)(t.h2,{id:"references",children:"References"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://use.ink/",children:"Ink! official documentation"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/AstarNetwork/astar.js/wiki",children:"Astar.js"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>i});var s=n(67294);const a={},r=s.createContext(a);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);