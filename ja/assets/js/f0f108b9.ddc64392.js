"use strict";(self.webpackChunkdocs_1=self.webpackChunkdocs_1||[]).push([[702],{9342:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var a=t(85893),r=t(11151);const s={sidebar_position:2},i="SubQuery",o={id:"build/integrations/indexers/subquery",title:"SubQuery",description:"What is SubQuery?",source:"@site/docs/build/integrations/indexers/subquery.md",sourceDirName:"build/integrations/indexers",slug:"/build/integrations/indexers/subquery",permalink:"/ja/docs/build/integrations/indexers/subquery",draft:!1,unlisted:!1,editUrl:"https://github.com/AstarNetwork/astar-docs/tree/main/docs/build/integrations/indexers/subquery.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Subsquid",permalink:"/ja/docs/build/integrations/indexers/subsquid"},next:{title:"Subscan",permalink:"/ja/docs/build/integrations/indexers/subscan"}},l={},d=[{value:"What is SubQuery?",id:"what-is-subquery",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Getting started",id:"getting-started",level:2},{value:"Customizing the project in 3 simple steps",id:"customizing-the-project-in-3-simple-steps",level:2},{value:"1. Customize the schema file",id:"1-customize-the-schema-file",level:3},{value:"2. The project manifest file",id:"2-the-project-manifest-file",level:3},{value:"Substrate Manifest section",id:"substrate-manifest-section",level:3},{value:"WASM Manifest Section",id:"wasm-manifest-section",level:3},{value:"3. Customize the mapping file",id:"3-customize-the-mapping-file",level:3},{value:"Build Your Project",id:"build-your-project",level:2},{value:"Run Your Project Locally with Docker",id:"run-your-project-locally-with-docker",level:2},{value:"Query Your Project",id:"query-your-project",level:2},{value:"Next steps",id:"next-steps",level:2},{value:"Resources",id:"resources",level:2}];function c(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"subquery",children:"SubQuery"}),"\n",(0,a.jsx)(n.h2,{id:"what-is-subquery",children:"What is SubQuery?"}),"\n",(0,a.jsx)(n.p,{children:"SubQuery is an open-source and universal blockchain data indexer for developers that provides fast, flexible, reliable, and decentralised APIs to power leading multi-chain apps. Our goal is to save developers time and money by eliminating the need of building their own indexing solution and instead, fully focus on developing their applications."}),"\n",(0,a.jsx)(n.p,{children:"SubQuery's superior indexing capabilities support Astar native, EVM and WASM-based smart contracts all out of the box. (In reality a Docker container!) Starter projects are provided allowing developers to get up and running and index blockchain data in minutes."}),"\n",(0,a.jsx)(n.p,{children:"Another one of SubQuery's competitive advantages is the ability to aggregate data not only within a chain but across blockchains all within a single project. This allows the creation of feature-rich dashboard analytics or multi-chain block scanners."}),"\n",(0,a.jsxs)(n.p,{children:["Other advantages include superior performance with multiple RPC endpoint configurations, multi-worker capabilities and a configurable caching architecture. To find out more, visit our ",(0,a.jsx)(n.a,{href:"https://academy.subquery",children:"documentation"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://docs.docker.com/get-docker/",children:"Docker"}),": Containerization platform for software solutions."]}),"\n",(0,a.jsx)(n.p,{children:"Subquery CLI: Command line tool for creating SubQuery projects. Install this by running the following:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npm install -g @subql/cli\n"})}),"\n",(0,a.jsx)(n.h2,{id:"getting-started",children:"Getting started"}),"\n",(0,a.jsxs)(n.p,{children:["This quick start guide introduces SubQuery's Substrate WASM support by using an example project in Astar's Network. The example project indexes all Transactions and Approvals from the ",(0,a.jsx)(n.a,{href:"https://astar.subscan.io/account/bZ2uiFGTLcYyP8F88XzXa13xu5Mmp13VLiaW1gGn7rzxktc",children:"Astar Wasm based lottery contract"}),", as well as dApp staking events from ",(0,a.jsx)(n.a,{href:"https://docs.astar.network/docs/dapp-staking/",children:"Astar's dApp Staking"})," functions."]}),"\n",(0,a.jsx)(n.p,{children:"This project is unique, as it indexes data from both Astar's Substrate execution layer (native Astar pallets and runtime), and with smart contract data from Astar's WASM smart contract layer, within the same SubQuery project and into the same dataset. A very similar approach can be taken with indexing Astar's EVM layer too."}),"\n",(0,a.jsxs)(n.p,{children:["Initialise the SubQuery Starter Project with ",(0,a.jsx)(n.code,{children:"subql init"})," and then choose ",(0,a.jsx)(n.code,{children:"Substrate"})," as the network family, ",(0,a.jsx)(n.code,{children:"Astar"})," as the network and then select astar-wasm-starter for the purposes of this guide."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"~$ subql init astar-demo\n? Select a network family Substrate\n? Select a network Astar\n? Select a template project (Use arrow keys or type to search)\n\u276f astar-evm-starter      Astar EVM project template tutorial \n  astar-wasm-starter     Astar WASM project template tutorial \n  astar-starter          Starter project for Astar \n  Other                  Enter a custom git endpoint \n"})}),"\n",(0,a.jsx)(n.p,{children:"Continue with the set-up by following the prompt and customising the parameters or accepting the defaults."}),"\n",(0,a.jsxs)(n.p,{children:["Visit the ",(0,a.jsx)(n.a,{href:"https://academy.subquery.network/quickstart/quickstart.html",children:"SubQuery quick start guide"})," for more details."]}),"\n",(0,a.jsx)(n.h2,{id:"customizing-the-project-in-3-simple-steps",children:"Customizing the project in 3 simple steps"}),"\n",(0,a.jsx)(n.p,{children:"There are 3 important files that need to be modified. These are:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"The GraphQL Schema in schema.graphql"}),"\n",(0,a.jsx)(n.li,{children:"The Project Manifest in project.yaml"}),"\n",(0,a.jsx)(n.li,{children:"The Mapping functions in src/mappings/ directory"}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"1-customize-the-schema-file",children:"1. Customize the schema file"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"schema.graphql"})," file determines the shape of your data from SubQuery due to the mechanism of the GraphQL query language. Hence, updating the GraphQL Schema file is the perfect place to start. It allows you to define your end goal right at the start."]}),"\n",(0,a.jsxs)(n.p,{children:["The Astar-wasm-starter project has four entities. Transaction, Approval, DApp, and DAppReward (which has a ",(0,a.jsx)(n.a,{href:"https://academy.subquery.network/build/graphql.html#one-to-many-relationships",children:"foreign key"})," to Dapp). These index basic block data such as the timestamp, height and hash along with from and contract addresses and the value."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:"type Transaction @entity {\n  id: ID! # Transaction hash\n  transactionHash: String\n  blockHeight: BigInt\n  blockHash: String\n  timestamp: Date\n  value: BigInt\n  from: String!\n  to: String!\n  contractAddress: String!\n}\n\ntype Approval @entity {\n  id: ID! # Transaction hash\n  blockHeight: BigInt\n  value: BigInt\n  hash: String\n  owner: String!\n  spender: String!\n  contractAddress: String!\n}\n\ntype DApp @entity {\n  id: ID! #EVM is a required field\n  accountID: String!\n  totalStake: BigInt!\n}\n\ntype DAppReward @entity {\n  id: ID!\n  dApp: DApp!\n  accountID: String!\n  eraIndex: Int!\n  balanceOf: BigInt!\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["When you make any changes to the schema file, please ensure that you regenerate your types directory via ",(0,a.jsx)(n.code,{children:"yarn codegen"})," or ",(0,a.jsx)(n.code,{children:"npm run-script codegen"})]}),"\n",(0,a.jsxs)(n.p,{children:["You will find the generated models in the ",(0,a.jsx)(n.code,{children:"/src/types/models"})," directory."]}),"\n",(0,a.jsxs)(n.p,{children:["Check out the ",(0,a.jsx)(n.a,{href:"https://academy.subquery.network/build/graphql.html",children:"GraphQL Schema"})," documentation to get in-depth information on ",(0,a.jsx)(n.code,{children:"schema.graphql"})," file."]}),"\n",(0,a.jsx)(n.h3,{id:"2-the-project-manifest-file",children:"2. The project manifest file"}),"\n",(0,a.jsxs)(n.p,{children:["The Project Manifest (",(0,a.jsx)(n.code,{children:"project.yaml"}),") file works as an entry point to your project. It defines most of the details on how SubQuery will index and transform the chain data. For Substrate/Polkadot chains, there are three types of mapping handlers:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"https://academy.subquery.network/build/manifest/polkadot.html#mapping-handlers-and-filters",children:"BlockHanders"}),": On each and every block, run a mapping function"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"https://academy.subquery.network/build/manifest/polkadot.html#mapping-handlers-and-filters",children:"EventHandlers"}),": On each and every Event that matches optional filter criteria, run a mapping function"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"https://academy.subquery.network/build/manifest/polkadot.html#mapping-handlers-and-filters",children:"CallHanders"}),": On each and every extrinsic call that matches optional filter criteria, run a mapping function"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["For ",(0,a.jsx)(n.a,{href:"https://academy.subquery.network/build/substrate-evm.html",children:"EVM"})," and ",(0,a.jsx)(n.a,{href:"https://academy.subquery.network/build/substrate-wasm.html",children:"WASM"})," data processors on Substrate/Polkadot chains, there are only two types of mapping handlers:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"https://academy.subquery.network/build/substrate-wasm.html#event-handlers",children:"EventHandlers"}),": On each and every Event that matches optional filter criteria, run a mapping function"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"https://academy.subquery.network/build/substrate-wasm.html#call-handlers",children:"CallHanders"}),": On each and every extrinsic call that matches optional filter criteria, run a mapping function"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"substrate-manifest-section",children:"Substrate Manifest section"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsxs)(n.strong,{children:["Since we are planning to index all Polkadot transfers, we need to update the ",(0,a.jsx)(n.code,{children:"datasources"})," section as follows:"]})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"dataSources:\n  - kind: substrate/Runtime\n    # This is the datasource for Astar's Native Substrate processor\n    startBlock: 1\n    mapping:\n      file: ./dist/index.js\n      handlers:\n        - handler: handleNewContract\n          kind: substrate/EventHandler\n          filter:\n            module: dappsStaking\n            method: NewContract\n        - handler: handleBondAndStake\n          kind: substrate/EventHandler\n          filter:\n            module: dappsStaking\n            method: BondAndStake\n        - handler: handleUnbondAndUnstake\n          kind: substrate/EventHandler\n          filter:\n            module: dappsStaking\n            method: UnbondAndUnstake\n        - handler: handleReward\n          kind: substrate/EventHandler\n          filter:\n            module: dappsStaking\n            method: Reward\n"})}),"\n",(0,a.jsxs)(n.p,{children:["This indicates that you will be running a ",(0,a.jsx)(n.code,{children:"handleNewContract"})," mapping function whenever there is an event emitted from the ",(0,a.jsx)(n.code,{children:"NewContract"})," method on the ",(0,a.jsx)(n.code,{children:"dappsStaking"})," pallet. Similarly we will run other mapping functions for the three other events being emitted from the ",(0,a.jsx)(n.code,{children:"dappsStaking"})," to other mapping functions. This covers most interactions with the dApp staking feature that we are interested in."]}),"\n",(0,a.jsxs)(n.p,{children:["Check out our ",(0,a.jsx)(n.a,{href:"https://academy.subquery.network/build/manifest/polkadot.html",children:"Manifest File"})," documentation to get more information about the Project Manifest (",(0,a.jsx)(n.code,{children:"project.yaml"}),") file."]}),"\n",(0,a.jsx)(n.h3,{id:"wasm-manifest-section",children:"WASM Manifest Section"}),"\n",(0,a.jsxs)(n.p,{children:["If you're not using the ",(0,a.jsx)(n.a,{href:"https://github.com/subquery/subql-starter/tree/main/Astar/astar-wasm-starter",children:"WASM starter template"})," then please add the Wasm Datasource as a dependency using ",(0,a.jsx)(n.code,{children:"yarn add @subql/substrate-wasm-processor"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Here we are indexing all transfers and approve contract call events from the Astar contract ",(0,a.jsx)(n.code,{children:"bZ2uiFGTLcYyP8F88XzXa13xu5Mmp13VLiaW1gGn7rzxktc"}),". First you will need to import the contract ABI defintion. You can copy the entire JSON and save as a file ",(0,a.jsx)(n.code,{children:"./erc20Metadata.json"})," in the ",(0,a.jsx)(n.code,{children:"abis"})," directory."]}),"\n",(0,a.jsxs)(n.p,{children:["This section in the Project Manifest now imports all the correct definitions and lists the triggers that we look for on the blockchain when indexing. We add another section the datasource beneath the above ",(0,a.jsx)(n.a,{href:"#substrate-manifest-section",children:"substrate manifest section"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:'dataSources:\n  - kind: substrate/Runtime\n    # This is the datasource for Astar\'s Native Substrate processor\n    ...\n  - kind: substrate/Wasm\n    # This is the datasource for Astar\'s Wasm processor\n    startBlock: 3281780\n    processor:\n      file: ./node_modules/@subql/substrate-wasm-processor/dist/bundle.js\n      options:\n        abi: erc20\n        # contract: "a6Yrf6jAPUwjoi5YvvoTE4ES5vYAMpV55ZCsFHtwMFPDx7H" # Shibuya\n        contract: "bZ2uiFGTLcYyP8F88XzXa13xu5Mmp13VLiaW1gGn7rzxktc" # Mainnet\n    assets:\n      erc20:\n        file: ./abis/erc20Metadata.json\n    mapping:\n      file: ./dist/index.js\n      handlers:\n        - handler: handleWasmEvent\n          kind: substrate/WasmEvent\n          filter:\n            # contract: "a6Yrf6jAPUwjoi5YvvoTE4ES5vYAMpV55ZCsFHtwMFPDx7H" # Shibuya\n            contract: "bZ2uiFGTLcYyP8F88XzXa13xu5Mmp13VLiaW1gGn7rzxktc" # Mainnet\n            identifier: "Transfer"\n        - handler: handleWasmCall\n          kind: substrate/WasmCall\n          filter:\n            selector: "0x681266a0"\n            method: "approve"\n'})}),"\n",(0,a.jsxs)(n.p,{children:["The above code indicates that you will be running a ",(0,a.jsx)(n.code,{children:"handleWasmEvent"})," mapping function whenever there is an ",(0,a.jsx)(n.code,{children:"Transfer"})," event on any transaction from the Astar contract. Similarly, we will run the ",(0,a.jsx)(n.code,{children:"handleWasmCall"})," mapping function whenever there is a ",(0,a.jsx)(n.code,{children:"approve"})," log on the same contract"]}),"\n",(0,a.jsxs)(n.p,{children:["Check out our ",(0,a.jsx)(n.a,{href:"https://academy.subquery.network/build/substrate-wasm.html",children:"Substrate Wasm"})," documentation to get more information about the Project Manifest (",(0,a.jsx)(n.code,{children:"project.yaml"}),") file for Substrate WASM contracts."]}),"\n",(0,a.jsx)(n.h3,{id:"3-customize-the-mapping-file",children:"3. Customize the mapping file"}),"\n",(0,a.jsxs)(n.p,{children:["Mapping functions define how chain data is transformed into the optimised GraphQL entities that we previously defined in the ",(0,a.jsx)(n.code,{children:"schema.graphql"})," file."]}),"\n",(0,a.jsxs)(n.p,{children:["Navigate to the default mapping function in the ",(0,a.jsx)(n.code,{children:"src/mappings"})," directory. There are multiple exported functions: ",(0,a.jsx)(n.code,{children:"handleWasmCall"}),", ",(0,a.jsx)(n.code,{children:"handleWasmEvent"}),", ",(0,a.jsx)(n.code,{children:"handleNewContract"}),", ",(0,a.jsx)(n.code,{children:"handleBondAndStake"}),", ",(0,a.jsx)(n.code,{children:"handleUnbondAndUnstake"}),", and ",(0,a.jsx)(n.code,{children:"handleReward"}),". We wont go into all here but you should be able to figure out what each is doing."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:'type ApproveCallArgs = [AccountId, Balance];\n\nexport async function handleWasmCall(\n  call: WasmCall<ApproveCallArgs>\n): Promise<void> {\n  logger.info(`Processing WASM Call at ${call.blockNumber}`);\n  const approval = new Approval(`${call.blockNumber}-${call.idx}`);\n  approval.hash = call.hash;\n  approval.owner = call.from.toString();\n  approval.contractAddress = call.dest.toString();\n  if (typeof call.data !== "string") {\n    const [spender, value] = call.data.args;\n    approval.spender = spender.toString();\n    approval.value = value.toBigInt();\n  } else {\n    logger.info(`Decode call failed ${call.hash}`);\n  }\n  await approval.save();\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"handleWasmCall"})," function receives event data from the WASM execution environment whenever an call matches the filters that was specified previously in the ",(0,a.jsx)(n.code,{children:"project.yaml"}),". It instantiates a new ",(0,a.jsx)(n.code,{children:"Approval"})," entity and populates the fields with data from the Wasm Call payload. Then the ",(0,a.jsx)(n.code,{children:".save()"})," function is used to save the new entity (",(0,a.jsx)(n.em,{children:"SubQuery will automatically save this to the database"}),")."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"export async function handleBondAndStake(event: SubstrateEvent): Promise<void> {\n  logger.info(\n    `Processing new Dapp Staking Bond and Stake event at ${event.block.block.header.number}`\n  );\n  const {\n    event: {\n      data: [accountId, smartContract, balanceOf],\n    },\n  } = event;\n  // Retrieve the dapp by its ID\n  let dapp: DApp = await DApp.get(smartContract.toString());\n  if (!dapp) {\n    dapp = DApp.create({\n      id: smartContract.toString(),\n      accountID: accountId.toString(),\n      totalStake: BigInt(0),\n    });\n  }\n\n  dapp.totalStake += (balanceOf as Balance).toBigInt();\n  await dapp.save();\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"handleBondAndStake"})," function receives Substrate event data from the native Substrate environment whenever an event matches the filters that was specified previously in the ",(0,a.jsx)(n.code,{children:"project.yaml"}),". It extracts the various data from the event payload (in Substrate it's stored as a array of Codecs), then checks if an existing DApp record exists. If none exists (e.g. it's a new dApp), then it instantiates a new one and then updates the total stake to reflect the new staking mount. Then the ",(0,a.jsx)(n.code,{children:".save()"})," function is used to save the new/updated entity (",(0,a.jsx)(n.em,{children:"SubQuery will automatically save this to the database"}),")."]}),"\n",(0,a.jsxs)(n.p,{children:["Check out our mappings documentation for ",(0,a.jsx)(n.a,{href:"https://academy.subquery.network/build/mapping/polkadot.html",children:"Substrate"})," and for the ",(0,a.jsx)(n.a,{href:"https://academy.subquery.network/build/substrate-wasm.html",children:"Substrate WASM data processor"})," to get detailed information on mapping functions for each type."]}),"\n",(0,a.jsx)(n.h2,{id:"build-your-project",children:"Build Your Project"}),"\n",(0,a.jsxs)(n.p,{children:["Next, build your work to run your new SubQuery project. Run the build command from the project's root directory ",(0,a.jsx)(n.code,{children:"yarn build"})," or ",(0,a.jsx)(n.code,{children:"npm run-script build"}),". Note, whenever you make changes to your mapping functions, make sure to rebuild your project."]}),"\n",(0,a.jsx)(n.h2,{id:"run-your-project-locally-with-docker",children:"Run Your Project Locally with Docker"}),"\n",(0,a.jsx)(n.p,{children:"SubQuery provides a Docker container to run projects very quickly and easily for development purposes."}),"\n",(0,a.jsx)(n.p,{children:"The docker-compose.yml file defines all the configurations that control how a SubQuery node runs. For a new project, which you have just initialised, you won't need to change anything."}),"\n",(0,a.jsxs)(n.p,{children:["Run the following command under the project directory: ",(0,a.jsx)(n.code,{children:"yarn start:docker"})," or ",(0,a.jsx)(n.code,{children:"npm run-script start:docker"}),". It may take a few minutes to download the required images and start the various nodes and Postgres databases."]}),"\n",(0,a.jsxs)(n.p,{children:["Visit ",(0,a.jsx)(n.a,{href:"https://academy.subquery.network/run_publish/run.html",children:"Running SubQuery Locally"})," to get more information on the file and the settings."]}),"\n",(0,a.jsx)(n.h2,{id:"query-your-project",children:"Query Your Project"}),"\n",(0,a.jsxs)(n.p,{children:["Once the container is running, navigate to ",(0,a.jsx)(n.a,{href:"http://localhost:3000",children:"http://localhost:3000"})," in your browser and run the sample GraphQL command provided in the README file. Below is an example query from the Astar-wasm-starter project."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:"query {\n  transactions(first: 3, orderBy: BLOCK_HEIGHT_ASC) {\n    totalCount\n    nodes {\n      id\n      timestamp\n      blockHeight\n      transactionHash\n      blockHash\n      contractAddress\n      from\n      value\n    }\n  }\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Note:\nThere is a ",(0,a.jsx)(n.em,{children:"Docs"})," tab on the right side of the playground which should open a documentation drawer. This documentation is automatically generated and helps you find what entities and methods you can query. To learn more about the GraphQL Query language ",(0,a.jsx)(n.a,{href:"https://academy.subquery.network/run_publish/graphql.html",children:"here"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"You should see results similar to those below:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "data": {\n    "transactions": {\n      "totalCount": 17,\n      "nodes": [\n        {\n          "id": "3281781-0",\n          "timestamp": "2023-04-04T14:37:54.532",\n          "blockHeight": "3281781",\n          "transactionHash": "0x4f57e6ab4e8337375871fe4c8f7ae2e71601ea7fbd135b6f8384eb30db31ec44",\n          "blockHash": "0x6d65fe39ae469afd74d32e34a61382b1bbda37983dea745ea2afe58e57d4afbc",\n          "contractAddress": "bZ2uiFGTLcYyP8F88XzXa13xu5Mmp13VLiaW1gGn7rzxktc",\n          "from": "WJWxmJ27TdMZqvzLx18sZpH9s5ir9irFm1LRfbDeByamdHf",\n          "value": "25000000000000000000"\n        },\n        {\n          "id": "3281792-0",\n          "timestamp": "2023-04-04T14:40:06.386",\n          "blockHeight": "3281792",\n          "transactionHash": "0xbe8d6f09a96ff44e732315fbeff2862e9bdeb8353612a0bfab10632c410d8135",\n          "blockHash": "0xaa09e8060068931a58a162c150ccb73e0b4de528185f1da92b049ab31c299e5a",\n          "contractAddress": "bZ2uiFGTLcYyP8F88XzXa13xu5Mmp13VLiaW1gGn7rzxktc",\n          "from": "aFNoZEM64m1ifrHAwEPEuhfRM5L7kjnPhmtYjZaQHX2zb6y",\n          "value": "32000000000000000000"\n        },\n        {\n          "id": "3281797-1",\n          "timestamp": "2023-04-04T14:41:06.786",\n          "blockHeight": "3281797",\n          "transactionHash": "0xfdb111a314ee4e4460a3f2ab06221d5985c50e8f5cbae5a12f4f73b222d5954c",\n          "blockHash": "0xeb4e49463e174fc993417e852f499ddc6e3c4a15f355a576a74772604f2132e5",\n          "contractAddress": "bZ2uiFGTLcYyP8F88XzXa13xu5Mmp13VLiaW1gGn7rzxktc",\n          "from": "aFNoZEM64m1ifrHAwEPEuhfRM5L7kjnPhmtYjZaQHX2zb6y",\n          "value": "57000000000000000000"\n        }\n      ]\n    }\n  }\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"4",src:t(32433).Z+"",width:"2138",height:"920"})}),"\n",(0,a.jsx)(n.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,a.jsx)(n.p,{children:"SubQuery's indexing experience is designed to be as fast and as simple as possible allowing developers to index data from the blockchain in minutes with the help of the starter project and a docker environment."}),"\n",(0,a.jsx)(n.p,{children:"It is also flexible to enable indexing across different chains and filtering only the data relevant to your application making it lightweight, fast and efficient."}),"\n",(0,a.jsx)(n.p,{children:"We are excited to help you on your indexing journey so please reach out to us at the various links below to see how we can help further."}),"\n",(0,a.jsx)(n.h2,{id:"resources",children:"Resources"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://subquery.network/",children:"SubQuery Network"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://academy.subquery.network/",children:"SubQuery Documentation"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://discord.com/invite/subquery",children:"SubQuery Discord"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://twitter.com/SubQueryNetwork",children:"SubQuery Twitter"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://blog.subquery.network/",children:"SubQuery Blog"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},32433:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/4-b85a7df722e47f8317e58260dba10e45.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>i});var a=t(67294);const r={},s=a.createContext(r);function i(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);