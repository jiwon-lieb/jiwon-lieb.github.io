"use strict";(self.webpackChunkdocs_1=self.webpackChunkdocs_1||[]).push([[1635],{1954:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var a=n(85893),r=n(11151);const s={sidebar_position:4},i="DIA Wasm Oracle",c={id:"build/integrations/oracles/dia-wasm",title:"DIA Wasm Oracle",description:"Introduction",source:"@site/docs/build/integrations/oracles/dia-wasm.md",sourceDirName:"build/integrations/oracles",slug:"/build/integrations/oracles/dia-wasm",permalink:"/es/docs/build/integrations/oracles/dia-wasm",draft:!1,unlisted:!1,editUrl:"https://github.com/AstarNetwork/astar-docs/tree/main/docs/build/integrations/oracles/dia-wasm.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"DIA Oracle",permalink:"/es/docs/build/integrations/oracles/dia"},next:{title:"Band Protocol VRF",permalink:"/es/docs/build/integrations/vrf/band"}},o={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Getting started",id:"getting-started",level:2},{value:"Contract Integration",id:"contract-integration",level:3},{value:"Link the contract with an Oracle",id:"link-the-contract-with-an-oracle",level:3},{value:"Access the value",id:"access-the-value",level:3},{value:"Config changes",id:"config-changes",level:3},{value:"Addresses",id:"addresses",level:2},{value:"Learn more",id:"learn-more",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"dia-wasm-oracle",children:"DIA Wasm Oracle"}),"\n",(0,a.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,a.jsx)(t.p,{children:"DIA has a dedicated Wasm-based oracle. It can be universally deployed on any chain that supports substrate Wasm environment."}),"\n",(0,a.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,a.jsx)(t.p,{children:"Make sure the version of ink you are on is v3.0.1."}),"\n",(0,a.jsx)(t.h2,{id:"getting-started",children:"Getting started"}),"\n",(0,a.jsx)(t.p,{children:"To access values from DIA wasm oracles you need to copy the diadata directory to your contract so that you can access DIA structs, that contain the oracle data."}),"\n",(0,a.jsx)(t.h3,{id:"contract-integration",children:"Contract Integration"}),"\n",(0,a.jsx)(t.p,{children:"In your contract, create storage with DiaDataref, this is used to access values from the oracle."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"    #[ink(storage)]\n    pub struct OracleExample {\n        diadata: DiadataRef,\n        ....\n        ....\n    }\n"})}),"\n",(0,a.jsx)(t.p,{children:"This struct can be used to access data from pub functions from the oracle contract."}),"\n",(0,a.jsx)(t.h3,{id:"link-the-contract-with-an-oracle",children:"Link the contract with an Oracle"}),"\n",(0,a.jsx)(t.p,{children:"To instantiate a contract's access to the oracle you need to pass the DIA oracle address, either using the constructor or by creating a separate write function to update with the value of oracle at a later stage."}),"\n",(0,a.jsx)(t.p,{children:"Here is an example using a constructor:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"    #[ink(constructor)]\n    pub fn new(\n        oracle_address: AccountId, \n    ) -> Self {\n        let diadata: DiadataRef = ink_env::call::FromAccountId::from_account_id(oracle_address);  \n        Self {\n            diadata\n        }\n    }\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Here, ",(0,a.jsx)(t.code,{children:"oracle_address"})," refers to the DIA oracle address of a deployed oracle contract."]}),"\n",(0,a.jsx)(t.h3,{id:"access-the-value",children:"Access the value"}),"\n",(0,a.jsx)(t.p,{children:"Next, to access an oracle value you can simple call the get() function:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:' pub fn get(&self ) -> diadata::ValueTime {\n            return self.diadata.get(String::from("ETH"));\n        }\n'})}),"\n",(0,a.jsx)(t.p,{children:"This returns the ETH price value time given by the oracle."}),"\n",(0,a.jsx)(t.h3,{id:"config-changes",children:"Config changes"}),"\n",(0,a.jsx)(t.p,{children:"Make sure you add diadata/std in you config:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:'std = [\n    "ink_metadata/std",\n    "ink_env/std",\n    "ink_storage/std",\n    "ink_primitives/std",\n    "scale/std",\n    "scale-info/std",\n    "diadata/std",\n]\n'})}),"\n",(0,a.jsx)(t.h2,{id:"addresses",children:"Addresses"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Astar Wasm Smart Contract"}),": ",(0,a.jsx)(t.a,{href:"https://shiden.subscan.io/account/XmVR4FbKWLYQgyHVxkFiBYScVo662WgSCoS84uZZPWNrtRT",children:"XmVR4FbKWLYQgyHVxkFiBYScVo662WgSCoS84uZZPWNrtRT"}),"\n",(0,a.jsx)(t.strong,{children:"Shibuya Wasm Smart Contract"}),": ",(0,a.jsx)(t.a,{href:"https://shibuya.subscan.io/account/X5NLwAUYX7FwVk25a8JwaXtuVJQsW87GQcKxYoF3aLyu8Pz",children:"X5NLwAUYX7FwVk25a8JwaXtuVJQsW87GQcKxYoF3aLyu8Pz"})]}),"\n",(0,a.jsx)(t.h2,{id:"learn-more",children:"Learn more"}),"\n",(0,a.jsxs)(t.p,{children:["See the entire oracle code and instructions on how to run and oracle service by yourself in ",(0,a.jsx)(t.a,{href:"https://github.com/diadata-org/dia-wasm-oracle",children:"our github repo"}),"."]})]})}function u(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>i});var a=n(67294);const r={},s=a.createContext(r);function i(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);