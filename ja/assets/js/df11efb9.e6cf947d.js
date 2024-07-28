"use strict";(self.webpackChunkdocs_1=self.webpackChunkdocs_1||[]).push([[6533],{68488:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>r,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=t(85893),s=t(11151);const o={},c="Safe Account Abstraction",i={id:"build/zkEVM/integrations/account-abstraction/safe--aa/index",title:"Safe Account Abstraction",description:"The Safe\\{Core\\} Account Abstraction (AA) SDK aims to bring Account Abstraction to life by integrating Safe with Gelato Relay. This SDK helps developers to abstract the complexity of setting up a smart contract account.",source:"@site/docs/build/zkEVM/integrations/account-abstraction/safe--aa/index.md",sourceDirName:"build/zkEVM/integrations/account-abstraction/safe--aa",slug:"/build/zkEVM/integrations/account-abstraction/safe--aa/",permalink:"/ja/docs/build/zkEVM/integrations/account-abstraction/safe--aa/",draft:!1,unlisted:!1,editUrl:"https://github.com/AstarNetwork/astar-docs/tree/main/docs/build/zkEVM/integrations/account-abstraction/safe--aa/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Using Web3Auth on Astar zKatana",permalink:"/ja/docs/build/zkEVM/integrations/account-abstraction/web3auth/web3auth-zkatana"},next:{title:"Relayers",permalink:"/ja/docs/build/zkEVM/integrations/account-abstraction/relayers/"}},r={},l=[{value:"Safe AA SDKs",id:"safe-aa-sdks",level:2},{value:"Quick Start",id:"quick-start",level:2},{value:"Using 1Balance",id:"using-1balance",level:3},{value:"Using  SyncFee",id:"using--syncfee",level:3}];function d(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"safe-account-abstraction",children:"Safe Account Abstraction"}),"\n",(0,a.jsx)(e.p,{children:"The Safe{Core} Account Abstraction (AA) SDK aims to bring Account Abstraction to life by integrating Safe with Gelato Relay. This SDK helps developers to abstract the complexity of setting up a smart contract account."}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:"Account Abstraction Kit"}),"\nThe AA kit helps user ot create predeterministic smart contract wallets and execute gasless transactions with the Gelato Relay.\nThe safe will only be deployed when the first transaction is sent."]}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:"Protocol Kit"}),"\nThe Protocol Kit helps interact with the Safe contracts. It enables the creation of new Safe accounts, updating their configuration, and signing and executing transactions, among other features."]}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:"Relay Kit"}),"\nThe Relay Kit relays Safe transactions, allowing you to get them sponsored by a third party or paid with any supported ERC-20 token."]}),"\n",(0,a.jsx)(e.h2,{id:"safe-aa-sdks",children:"Safe AA SDKs"}),"\n",(0,a.jsx)(e.p,{children:"As part of the Gelato Raas AA offerings, we have deployed a custom safe-sdk creating following packages"}),"\n",(0,a.jsxs)(e.table,{children:[(0,a.jsx)(e.thead,{children:(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.th,{children:"Package"}),(0,a.jsx)(e.th,{children:"SDK"})]})}),(0,a.jsxs)(e.tbody,{children:[(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"Safe Protocol Kit"}),(0,a.jsx)(e.td,{children:"zkatana-gelato-protocol-kit"})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"Safe AA Kit"}),(0,a.jsx)(e.td,{children:"zkatana-gelato-account-abstraction-kit"})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"Safe Relay Kit"}),(0,a.jsx)(e.td,{children:"zkatana-gelato-relay-kit"})]})]})]}),"\n",(0,a.jsxs)(e.p,{children:["There are two different ways to send Gasless Transactions through a Safe, either sponsoring the gas with ",(0,a.jsx)(e.a,{href:"https://docs.gelato.network/developer-services/1balance",children:"1Balance"})," or paying with the Safe balance (SyncFee)"]}),"\n",(0,a.jsxs)(e.p,{children:["In following examples examples, it will be called the ",(0,a.jsx)(e.code,{children:"increment()"})," method on this simple counter contract deployed on zKatana ",(0,a.jsx)(e.a,{href:"https://zkatana.blockscout.com/address/0x47A9064a8D242860ABb43FC8340B3680487CC088?tab=read_contract",children:"https://zkatana.blockscout.com/address/0x47A9064a8D242860ABb43FC8340B3680487CC088?tab=read_contract"})]}),"\n",(0,a.jsx)(e.h2,{id:"quick-start",children:"Quick Start"}),"\n",(0,a.jsxs)(e.ol,{children:["\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsxs)(e.p,{children:["Clone the ",(0,a.jsx)(e.a,{href:"https://github.com/gelatodigital/astar-zkatana-starter-kit",children:"starter-kit"})," repo"]}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:"Install project dependencies:"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:"yarn install\n"})}),"\n",(0,a.jsx)(e.p,{children:"in the package.json we have already included zkatana-gelato-protocol-kit, zkatana-gelato-account-abstraction-kit and zkatana-gelato-relay-kit"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-shell",children:'  "zkatana-gelato-account-abstraction-kit": "^1.3.2",\n  "zkatana-gelato-protocol-kit": "^1.3.1",\n  "zkatana-gelato-relay-kit": "^1.3.2"\n'})}),"\n",(0,a.jsxs)(e.ol,{start:"3",children:["\n",(0,a.jsx)(e.li,{children:"Create a .env file with your private config:"}),"\n"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-shell",children:"cp .env.example .env\n"})}),"\n",(0,a.jsxs)(e.p,{children:["You will need to input your Private Key ",(0,a.jsx)(e.strong,{children:"PK"})," and ",(0,a.jsx)(e.strong,{children:"GELATO_RELAY_API_KEY"})," for sponsored transactions, you can get it at ",(0,a.jsx)(e.a,{href:"https://relay.gelato.network",children:"https://relay.gelato.network"})]}),"\n",(0,a.jsxs)(e.ol,{start:"4",children:["\n",(0,a.jsx)(e.li,{children:"Call the respective method:"}),"\n"]}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["Using 1Balance","\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-tyescript",children:" yarn aa1Balance\n"})}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["Using SyncFee","\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-tyescript",children:" yarn aaSyncFee\n"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(e.h3,{id:"using-1balance",children:"Using 1Balance"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-typescript",children:'\n  const safeTransactionData: MetaTransactionData = {\n    to: targetAddress,\n    data: nftContract.interface.encodeFunctionData("increment", []),\n    value: "0",\n    operation: OperationType.Call,\n  };\n  \n\n  const safeAccountAbstraction = new AccountAbstraction(signer);\n  const sdkConfig: AccountAbstractionConfig = {\n    relayPack,\n  };\n  await safeAccountAbstraction.init(sdkConfig);\n\n  const txConfig = {\n    TO: targetAddress,\n    DATA: safeTransactionData.data,\n    VALUE: "0",\n    // Options:\n    GAS_LIMIT: gasLimit,\n  };\n\n  const predictedSafeAddress = await safeAccountAbstraction.getSafeAddress();\n  console.log({ predictedSafeAddress });\n\n  const isSafeDeployed = await safeAccountAbstraction.isSafeDeployed();\n  console.log({ isSafeDeployed });\n\n  const safeTransactions: MetaTransactionData[] = [\n    {\n      to: txConfig.TO,\n      data: txConfig.DATA,\n      value: txConfig.VALUE,\n      operation: OperationType.Call,\n    },\n  ];\n  const options: MetaTransactionOptions = {\n    gasLimit: txConfig.GAS_LIMIT,\n    isSponsored: true,\n  };\n\n  const response = await safeAccountAbstraction.relayTransaction(\n    safeTransactions,\n    options\n  );\n  console.log(`https://relay.gelato.digital/tasks/status/${response} `);\n'})}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"Output"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-shell",children:"$ ts-node src/aa-safe-gasless/aa1Balance.ts\n{ predictedSafeAddress: '0x68D60c586763879c6614e2eFA709cCae708203c4' }\n{ isSafeDeployed: true }\nhttps://relay.gelato.digital/tasks/status/0xc34f62e1b057b298c144c79b3cc16e4e24bc2b1e91ce5cd7660f9b8c1791be91 \n"})}),"\n",(0,a.jsx)(e.h3,{id:"using--syncfee",children:"Using  SyncFee"}),"\n",(0,a.jsx)(e.p,{children:"Remember to fund your Safe as the gas fees will be deducted from your safe balance"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-typescript",children:'\n  const gasLimit = "10000000";\n\n\n  const safeTransactionData: MetaTransactionData = {\n    to: targetAddress,\n    data: nftContract.interface.encodeFunctionData("increment", []),\n    value: "0",\n    operation: OperationType.Call,\n  };\n\n  const safeAccountAbstraction = new AccountAbstraction(signer);\n  const sdkConfig: AccountAbstractionConfig = {\n    relayPack,\n  };\n  await safeAccountAbstraction.init(sdkConfig);\n\n  const txConfig = {\n    TO: targetAddress,\n    DATA: safeTransactionData.data,\n    VALUE: "0",\n    // Options:\n    GAS_LIMIT: gasLimit,\n    GAS_TOKEN: ethers.constants.AddressZero,\n  };\n\n  const predictedSafeAddress = await safeAccountAbstraction.getSafeAddress();\n  console.log({ predictedSafeAddress });\n\n  const isSafeDeployed = await safeAccountAbstraction.isSafeDeployed();\n  console.log({ isSafeDeployed });\n\n  const safeTransactions: MetaTransactionData[] = [\n    {\n      to: txConfig.TO,\n      data: txConfig.DATA,\n      value: txConfig.VALUE,\n      operation: OperationType.Call,\n    },\n  ];\n  const options: MetaTransactionOptions = {\n    gasLimit: txConfig.GAS_LIMIT,\n    gasToken: txConfig.GAS_TOKEN,\n    isSponsored: false,\n  };\n\n  const response = await safeAccountAbstraction.relayTransaction(\n    safeTransactions,\n    options\n  );\n  console.log(`https://relay.gelato.digital/tasks/status/${response} `);\n'})}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"Output"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-shell",children:"$ ts-node src/aa-safe-gasless/aaSyncFee.ts\n{ predictedSafeAddress: '0x68D60c586763879c6614e2eFA709cCae708203c4' }\n{ isSafeDeployed: true }\nhttps://relay.gelato.digital/tasks/status/0x6590f89386d9adb8a6d20ba7dffaa17958d4e66d49e6a0d3b5b1c144022abbc1 \n"})})]})}function h(n={}){const{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(d,{...n})}):d(n)}},11151:(n,e,t)=>{t.d(e,{Z:()=>i,a:()=>c});var a=t(67294);const s={},o=a.createContext(s);function c(n){const e=a.useContext(o);return a.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:c(n.components),a.createElement(o.Provider,{value:e},n.children)}}}]);