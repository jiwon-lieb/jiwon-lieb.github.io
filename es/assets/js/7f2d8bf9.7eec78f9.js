"use strict";(self.webpackChunkdocs_1=self.webpackChunkdocs_1||[]).push([[4900],{84488:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var i=t(85893),s=t(11151),a=t(3837);const o={title:"Sentio Debugger",sidebar_position:8},r="Sentio Debugger",d={id:"build/integrations/indexers/sentio",title:"Sentio Debugger",description:"Basic",source:"@site/docs/build/integrations/indexers/sentio.md",sourceDirName:"build/integrations/indexers",slug:"/build/integrations/indexers/sentio",permalink:"/es/docs/build/integrations/indexers/sentio",draft:!1,unlisted:!1,editUrl:"https://github.com/AstarNetwork/astar-docs/tree/main/docs/build/integrations/indexers/sentio.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Sentio Debugger",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Covalent",permalink:"/es/docs/build/integrations/indexers/covalent"},next:{title:"Node Providers",permalink:"/es/docs/build/integrations/node-providers/"}},c={},l=[{value:"Basic",id:"basic",level:2},{value:"Transaction Information",id:"transaction-information",level:2},{value:"Transaction Metadata",id:"transaction-metadata",level:3},{value:"Events",id:"events",level:3},{value:"State Diff",id:"state-diff",level:3},{value:"Contract Code Explorer",id:"contract-code-explorer",level:3},{value:"Trace the Money",id:"trace-the-money",level:2},{value:"Balance Change",id:"balance-change",level:3},{value:"Fund Flows",id:"fund-flows",level:3},{value:"Trace and Call",id:"trace-and-call",level:2},{value:"Trace modes and options",id:"trace-modes-and-options",level:3},{value:"Debugging",id:"debugging",level:2},{value:"Debugger tab layout",id:"debugger-tab-layout",level:3},{value:"Single-Step Mode",id:"single-step-mode",level:3},{value:"Function-only Mode",id:"function-only-mode",level:3},{value:"Simulation",id:"simulation",level:2},{value:"Simulation UI",id:"simulation-ui",level:3},{value:"Simulation API",id:"simulation-api",level:3},{value:"Create Simulation",id:"create-simulation",level:4},{value:"Get Detail Trace",id:"get-detail-trace",level:4},{value:"Trace Decoded Trace",id:"trace-decoded-trace",level:4}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"sentio-debugger",children:"Sentio Debugger"}),"\n",(0,i.jsx)(n.h2,{id:"basic",children:"Basic"}),"\n",(0,i.jsx)(n.p,{children:"Sentio debugger is a tool that helps developers understand how transactions work."}),"\n",(0,i.jsxs)(n.p,{children:["Search for specific transactions on the ",(0,i.jsx)(n.a,{href:"https://app.sentio.xyz/explorer",children:"Explorer page"})]}),"\n",(0,i.jsx)(a.Z,{caption:"Transaction Search",src:t(42921).Z,width:"100%"}),"\n",(0,i.jsx)(n.p,{children:"The Transaction Explorer has a few key features, including:"}),"\n",(0,i.jsx)(n.h2,{id:"transaction-information",children:"Transaction Information"}),"\n",(0,i.jsx)(n.p,{children:"Sentio provides standard information about specific transactions."}),"\n",(0,i.jsx)(n.h3,{id:"transaction-metadata",children:"Transaction Metadata"}),"\n",(0,i.jsxs)(n.p,{children:["For each transaction, Sentio adds standard transaction metadata, and a link to the block explorer page on the ",(0,i.jsx)(n.strong,{children:"Overview"})," tab."]}),"\n",(0,i.jsx)(a.Z,{caption:"Transaction Metadata",src:t(77162).Z,width:"100%"}),"\n",(0,i.jsx)(n.h3,{id:"events",children:"Events"}),"\n",(0,i.jsxs)(n.p,{children:["Events are decoded where ABIs are available, and are otherwise displayed according to ",(0,i.jsx)(n.em,{children:"best effort"})," on the ",(0,i.jsx)(n.strong,{children:"Events"})," tab."]}),"\n",(0,i.jsx)(a.Z,{caption:"Events data",src:t(52970).Z,width:"100%"}),"\n",(0,i.jsx)(n.h3,{id:"state-diff",children:"State Diff"}),"\n",(0,i.jsxs)(n.p,{children:["When a transaction causes state changes, Sentio lists them on the ",(0,i.jsx)(n.strong,{children:"State"})," tab."]}),"\n",(0,i.jsx)(a.Z,{caption:"State changes",src:t(22766).Z,width:"100%"}),"\n",(0,i.jsx)(n.h3,{id:"contract-code-explorer",children:"Contract Code Explorer"}),"\n",(0,i.jsxs)(n.p,{children:["Sentio provides a code explorer for all the related code on the ",(0,i.jsx)(n.strong,{children:"Contracts"})," tab."]}),"\n",(0,i.jsx)(a.Z,{caption:"Contract explorer",src:t(95839).Z,width:"100%"}),"\n",(0,i.jsx)(n.h2,{id:"trace-the-money",children:"Trace the Money"}),"\n",(0,i.jsxs)(n.p,{children:["The best way to understand a transaction is to trace the money. Sentio provides both ",(0,i.jsx)(n.strong,{children:"Balance Change"})," and ",(0,i.jsx)(n.strong,{children:"Fund Flow"})," analysis tools."]}),"\n",(0,i.jsx)(n.h3,{id:"balance-change",children:"Balance Change"}),"\n",(0,i.jsx)(n.p,{children:"While a transaction is executing, multiple contracts may have their balances updated. Sentio displays the balance changes that occur during a transaction."}),"\n",(0,i.jsx)(a.Z,{caption:"Balance Change",src:t(44134).Z,width:"100%"}),"\n",(0,i.jsx)(n.p,{children:"For example, in this MEV arbitrage transaction above, each party involved has a balance of different assets increasing and decreasing, except one address (0xa0d...) which has only an increasing asset, indicating that it made the arbitrage profit."}),"\n",(0,i.jsx)(n.h3,{id:"fund-flows",children:"Fund Flows"}),"\n",(0,i.jsxs)(n.p,{children:["Sentio provides detailed and ",(0,i.jsx)(n.strong,{children:"ordered"})," fund flows. In the following example we visualize the process of how an arbitrageur made a profit by utilizing several trading venues."]}),"\n",(0,i.jsx)(a.Z,{caption:"Fund Flows",src:t(32154).Z,width:"100%"}),"\n",(0,i.jsx)(n.h2,{id:"trace-and-call",children:"Trace and Call"}),"\n",(0,i.jsx)(n.p,{children:"Sentio provides trace view of transactions."}),"\n",(0,i.jsx)(n.h3,{id:"trace-modes-and-options",children:"Trace modes and options"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Trace mode:"})," Full trace mode includes cross-contract calls (CALL) and in-contract calls (JUMP)."]}),"\n",(0,i.jsx)(a.Z,{caption:"Full Trace",src:t(84079).Z,width:"100%"}),"\n",(0,i.jsx)(n.p,{children:"You can also hide in-contract calls (JUMP) by turning off Full trace."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Options:"})," Users can hide static calls and select the level of trace displayed."]}),"\n",(0,i.jsx)(a.Z,{caption:"Trace Levels",src:t(3756).Z,width:"100%"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Call Graph:"})," Sentio provides the call graph that shows the contract interactions within a transaction."]}),"\n",(0,i.jsx)(a.Z,{caption:"Call Graph",src:t(64250).Z,width:"100%"}),"\n",(0,i.jsx)(n.h2,{id:"debugging",children:"Debugging"}),"\n",(0,i.jsxs)(n.p,{children:["To understand a transaction even further, developers can use the ",(0,i.jsx)(n.strong,{children:"Debugger"})," tab to visualize the execution line-by-line."]}),"\n",(0,i.jsx)(a.Z,{caption:"Debugger",src:t(63418).Z,width:"100%"}),"\n",(0,i.jsx)(n.h3,{id:"debugger-tab-layout",children:"Debugger tab layout"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Traces"})}),"\n",(0,i.jsxs)(n.p,{children:["On the upper-left section, Sentio shows the trace of the transaction, this is the same as ",(0,i.jsx)(n.em,{children:"trace and call."})," Users can use this to select a location and execute directly to that position."]}),"\n",(0,i.jsx)(a.Z,{caption:"Call Trace Window",src:t(79536).Z,width:"100%"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Stack Traces"})}),"\n",(0,i.jsx)(n.p,{children:"The bottom-left section contains the current call stack information, for example:"}),"\n",(0,i.jsx)(a.Z,{caption:"Stack Trace Window",src:t(37262).Z,width:"100%"}),"\n",(0,i.jsx)(n.h3,{id:"single-step-mode",children:"Single-Step Mode"}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsx)(n.p,{children:"To use single-step mode:"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Turn on single-step mode."}),"\n",(0,i.jsxs)(n.li,{children:["(optional) Use Debug Build -- Sentio will recompile the contract with different compiler parameters to achieve the best source mapping. See ",(0,i.jsx)(n.strong,{children:"Limitations"})," below."]}),"\n"]})]}),"\n",(0,i.jsx)(a.Z,{caption:"Debugger Options",src:t(9400).Z,width:"100%"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Use Debugger"})}),"\n",(0,i.jsx)(n.p,{children:"The debugger has standard definitions of:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Step-Over: Move to the next line of execution."}),"\n",(0,i.jsx)(n.li,{children:"Step-Into: If there is a function, steps into the function."}),"\n",(0,i.jsx)(n.li,{children:"Step-Out: If we are in a function, steps out the function to the upper level."}),"\n",(0,i.jsx)(n.li,{children:"Continue: This is the standard break-point."}),"\n",(0,i.jsx)(n.li,{children:"Restart: Restart from the beginning."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Inspect Variables"})}),"\n",(0,i.jsx)(n.p,{children:"The debugger automatically shows the local variables within the call context, and all the contract variables."}),"\n",(0,i.jsx)(a.Z,{src:t(10164).Z,width:"100%"}),"\n",(0,i.jsxs)(n.p,{children:["The debugger also supports adding ",(0,i.jsx)(n.strong,{children:"user defined watched variables (similar to a regular debugger.)"})]}),"\n",(0,i.jsx)(a.Z,{src:t(78688).Z,width:"100%"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Limitations"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Contracts compiled with the viaIR option are not fully supported."}),"\n",(0,i.jsx)(n.li,{children:"When debugging a release build, since they are fully optimized, source-mapping issues and unexpected execution orders may present themselves."}),"\n",(0,i.jsx)(n.li,{children:"When debugging a debug build, gas usage is ignored, which may cause different code execution. e.g. if the original transaction runs out of gas, the debug build will indicate the transaction fully executes."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"function-only-mode",children:"Function-only Mode"}),"\n",(0,i.jsxs)(n.p,{children:["If single-step mode is turned off, the debugger will behave at the ",(0,i.jsx)(n.em,{children:"function"})," level."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Use the debugger"})}),"\n",(0,i.jsx)(n.p,{children:"The debugger has standard definitions of:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Next: proceeds to the next function call (depth first search order)"}),"\n",(0,i.jsx)(n.li,{children:"Previous: reverts to the previous function call"}),"\n",(0,i.jsxs)(n.li,{children:["Step Over: proceeds to the next function call (",(0,i.jsx)(n.strong,{children:"does not"})," follow nested calls)"]}),"\n",(0,i.jsx)(n.li,{children:"Step Up: goes up one level"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Inspect the variables"})}),"\n",(0,i.jsxs)(n.p,{children:["In this mode, developers can visualize ",(0,i.jsx)(n.strong,{children:"Inputs"}),", ",(0,i.jsx)(n.strong,{children:"Return Value"})," and ",(0,i.jsx)(n.strong,{children:"Gas info."})]}),"\n",(0,i.jsx)(a.Z,{src:t(87999).Z,width:"100%"}),"\n",(0,i.jsx)(n.h2,{id:"simulation",children:"Simulation"}),"\n",(0,i.jsxs)(n.p,{children:["The Sentio simulator allows you to run simulations and analyze the data collected in great detail.\nYou can quickly begin simulations through the Sentio ",(0,i.jsx)(n.a,{href:"https://docs.sentio.xyz/sentio-debugger/simulation/simulation-ui",children:"UI"})," or by calling the ",(0,i.jsx)(n.a,{href:"https://docs.sentio.xyz/sentio-debugger/simulation/simulation-api",children:"API"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"simulation-ui",children:"Simulation UI"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"From existing transaction"}),"\nThe simplest way to start a simulation is to click the simulator button as shown below, on a transaction that has been opened."]}),"\n",(0,i.jsx)(a.Z,{src:t(9581).Z,width:"100%"}),"\n",(0,i.jsx)(n.p,{children:"In this case, it will copy all the parameters from the existing transaction and you could make adjustments on top of it. Like block number, block index, gas fee, block header, state, etc."}),"\n",(0,i.jsx)(a.Z,{src:t(12187).Z,width:"50%"}),"\n",(0,i.jsx)(n.p,{children:"Click the simulate transaction button will save this run to the simulation history of your project and show you the result, just like what you see from the normal debugger UI."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Direct Build"})}),"\n",(0,i.jsx)(n.p,{children:"You can also click the simulator button on the left navigation bar and go to the simulator page which shows all the history simulations. Click the simulation button on the right corner will pop a similar UI but without prepopulated transaction data."}),"\n",(0,i.jsx)(a.Z,{src:t(96975).Z,width:"85%"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Override Contract"})}),"\n",(0,i.jsx)(n.p,{children:"Use the compilations tab to upload a local contract compilation folder."}),"\n",(0,i.jsx)(a.Z,{src:t(3467).Z,width:"50%"}),"\n",(0,i.jsx)(n.p,{children:"When doing the simulation, choose the contract override."}),"\n",(0,i.jsx)(a.Z,{src:t(76279).Z,width:"50%"}),"\n",(0,i.jsx)(n.h3,{id:"simulation-api",children:"Simulation API"}),"\n",(0,i.jsx)(n.h4,{id:"create-simulation",children:"Create Simulation"}),"\n",(0,i.jsxs)(n.p,{children:["For all simulation API calls, you should have an API key, and pass it by header with the field api-key. Refer to ",(0,i.jsx)(n.a,{href:"https://docs.sentio.xyz/references/concepts/api-key",children:"API Key"})," for how to obtain one."]}),"\n",(0,i.jsx)(n.p,{children:"The simulation body should be included in the request body. You can follow the example below."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'curl --location \'https://app.sentio.xyz/api/v1/solidity/simulate\' \\\n--header \'api-key: <API_KEY>\' \\\n--header \'Content-Type: application/json\' \\\n--data \'{\n    "projectOwner": "<USER>",\n    "projectSlug": "<PROJECT>",\n    "simulation": {\n        "networkId": "1",          // Chain ID, "1" for Ethereum mainnet. See chainlist.org for details\n        "blockNumber": "17415072",\n        "transactionIndex": "97",  // transaction index in the block\n        \n        // standard field for evm transactions\n        "from": "0x5e8bb488e85ea732e17150862b1acfc213a7c13d",\n        "to": "0xef1c6e67703c7bd7107eed8303fbe6ec2554bf6b",\n        "value": "0x0",\n        "gas": "0x31ae2",\n        "gasPrice": "0xe59a1adbe",\n        "input": "0x3593564c000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000647dffef0000000000000000000000000000000000000000000000000000000000000002080c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000160000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000003077b58d5d378391980000000000000000000000000000000000000000000000000000000032b2ced3e40e9d100000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000002000000000000000000000000082646b22a3960da69ef7a778c16dd6fb85dd999000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc200000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000032b2ced3e40e9d1",\n        \n        // overrides\n        "stateOverrides": {\n            "0x0811fd1808e14f0b93f0514313965a5f142c5539": {\n                "balance": "0x1111111111111111"\n            }\n        },\n        "blockOverride": {\n            "baseFee": "0x0"\n        }\n    }\n}\'\n'})}),"\n",(0,i.jsx)(n.p,{children:"Your simulations will be saved, and a unique ID for each simulation is included in the response. It will be useful for fetching simulation details."}),"\n",(0,i.jsx)(n.h4,{id:"get-detail-trace",children:"Get Detail Trace"}),"\n",(0,i.jsxs)(n.p,{children:["State Diff\nEndpoint: ",(0,i.jsx)(n.a,{href:"https://app.sentio.xyz/api/v1/solidity/state_diff",children:"https://app.sentio.xyz/api/v1/solidity/state_diff"}),"\nAPI key is required."]}),"\n",(0,i.jsx)(a.Z,{src:t(19360).Z,width:"50%"}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"curl --location 'https://app.sentio.xyz/api/v1/solidity/state_diff?networkId=1&txId.simulationId=pVwBCxr3&projectOwner=<USER>&projectSlug=<PROJECT>' \\\n--header 'api-key: <API_KEY>'\n"})}),"\n",(0,i.jsx)(n.h4,{id:"trace-decoded-trace",children:"Trace Decoded Trace"}),"\n",(0,i.jsxs)(n.p,{children:["Endpoint: ",(0,i.jsx)(n.a,{href:"https://app.sentio.xyz/api/v1/solidity/call_trace",children:"https://app.sentio.xyz/api/v1/solidity/call_trace"}),"\nAPI key is required."]}),"\n",(0,i.jsx)(a.Z,{src:t(16921).Z,width:"50%"}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"curl --location 'https://app.sentio.xyz/api/v1/solidity/call_trace?withInternalCalls=true&networkId=1&txId.simulationId=pVwBCxr3&projectOwner=<USER>&projectSlug=<PROJECT>' \\\n--header 'api-key: <API_KEY>'\n"})}),"\n",(0,i.jsxs)(n.p,{children:["For more information about Sentio Debugger and for information not listed here, visit their ",(0,i.jsx)(n.a,{href:"https://docs.sentio.xyz",children:"official documentation"})," page."]})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},3837:(e,n,t)=>{t.d(n,{Z:()=>s});t(67294);var i=t(85893);function s(e){let{src:n,caption:t,width:s="460px"}=e;return(0,i.jsxs)("center",{children:[(0,i.jsx)("br",{}),(0,i.jsxs)("figure",{children:[(0,i.jsx)("img",{src:n,alt:t,width:s}),(0,i.jsx)("figcaption",{children:t})]}),(0,i.jsx)("br",{})]})}},42921:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/sentio1-6f1adfa8fe533f1d4b443f1aa7aaf44a.png"},63418:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/sentio10-a8bc019b417c1b0255132e67d739d0db.png"},79536:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/sentio11-edcd88568c87a8a822bbf565a913854d.png"},37262:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/sentio12-9dd66bc0ed4519ffc072fa1549284aad.png"},9400:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/sentio13-45ac767f949602ff1fa546e2c5a081cd.png"},10164:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/sentio14-89bf588dce9830903e4d5668dde3063f.png"},78688:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/sentio15-e28be6db2df66358e1b050b0fc96fbf0.png"},87999:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/sentio16-d518fc51192a8eaef5f1079b45944b4c.png"},9581:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/sentio17-ee80b5cb1806f3f24821f43e38f40aa5.png"},12187:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/sentio18-428e0931209948ba0f3311bd8d5a0d4b.png"},96975:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/sentio19-96cc3f300346d3a7c010f345c5d6759f.png"},77162:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/sentio2-d202c97459a48f4ee400a1dc25bc4653.png"},3467:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/sentio20-0f952b46c1902ff4530c71416f90616e.png"},76279:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/sentio21-beb8fbc830e30b82f9c768223c332235.png"},19360:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/sentio22-e4eef60ead9163de392d87498af5c009.png"},16921:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/sentio23-3d2a02fafb204ce2ccc972f9f130720e.png"},52970:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/sentio3-57d4577575abedfd035ff966cbbede07.png"},22766:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/sentio4-c1bea8d5e7bc2315de4c0f8078025b00.png"},95839:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/sentio5-53e07c90916d9d166bd54579af396997.png"},44134:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/sentio55-eff9d838874576d9a296e020435f1271.png"},32154:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/sentio6-60bbd7c3dff0709b4e37fa1fc207f1d2.png"},84079:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/sentio7-b5fe355f2f8e57a083ad8825a6a8d7bc.png"},3756:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/sentio8-8ffe3e4d3fde5b2acd78c2bdc826710e.png"},64250:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/sentio9-3a80f47d32cec3168094a0fb2e444d43.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>o});var i=t(67294);const s={},a=i.createContext(s);function o(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);