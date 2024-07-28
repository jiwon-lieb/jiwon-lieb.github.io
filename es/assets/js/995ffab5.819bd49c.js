"use strict";(self.webpackChunkdocs_1=self.webpackChunkdocs_1||[]).push([[947],{57360:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var n=i(85893),s=i(11151);const r={},a="Withdraw Asset",o={id:"build/EVM/precompiles/xcm/withdraw-assets",title:"Withdraw Asset",description:"Let's use transfer_multiasset to:",source:"@site/docs/build/EVM/precompiles/xcm/withdraw-assets.md",sourceDirName:"build/EVM/precompiles/xcm",slug:"/build/EVM/precompiles/xcm/withdraw-assets",permalink:"/es/docs/build/EVM/precompiles/xcm/withdraw-assets",draft:!1,unlisted:!1,editUrl:"https://github.com/AstarNetwork/astar-docs/tree/main/docs/build/EVM/precompiles/xcm/withdraw-assets.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Transfer Asset",permalink:"/es/docs/build/EVM/precompiles/xcm/transfer-asssets"},next:{title:"SR25519",permalink:"/es/docs/build/EVM/precompiles/sr25519"}},c={},l=[{value:"1. Asset Multilocation",id:"1-asset-multilocation",level:4},{value:"2. Beneficiary Multilocation",id:"2-beneficiary-multilocation",level:4},{value:"3. Weight",id:"3-weight",level:4},{value:"4. calling XCM precompiles",id:"4-calling-xcm-precompiles",level:4}];function d(e){const t={a:"a",br:"br",code:"code",h1:"h1",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"withdraw-asset",children:"Withdraw Asset"}),"\n",(0,n.jsxs)(t.p,{children:["Let's use ",(0,n.jsx)(t.code,{children:"transfer_multiasset"})," to:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["transfer back asset id = 1 token of ",(0,n.jsx)(t.code,{children:"parachainId"})," ",(0,n.jsx)(t.strong,{children:"2007"})," to ",(0,n.jsx)(t.code,{children:"parachainId"})," ",(0,n.jsx)(t.strong,{children:"2000"})]}),"\n",(0,n.jsxs)(t.li,{children:["for amount ",(0,n.jsx)(t.strong,{children:"10000000000000000000000"})]}),"\n"]}),"\n",(0,n.jsx)(t.h4,{id:"1-asset-multilocation",children:"1. Asset Multilocation"}),"\n",(0,n.jsxs)(t.p,{children:["The assetId Multilocation in the Parachain ",(0,n.jsx)(t.strong,{children:"2000"})," is defined by: ",(0,n.jsx)(t.code,{children:"Multilocation: { parents: 1, interior: X2 [Parachain: 2000, GeneralIndex: 1] }"}),(0,n.jsx)(t.br,{}),"\n","parachainId ",(0,n.jsx)(t.code,{children:"2000"})," prefixed with 0x00. So the interior bytes are: 0x00 + bytes4(2000)\nGeneralIndex should be prefixed by 0x05 and u128(1): 0x05 + 1"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-solidity",children:'bytes[] memory interior1 = new bytes[](2);\ninterior1[0] = bytes.concat(hex"00", bytes4(uint32(2000)));\ninterior1[1] = bytes.concat(hex"05", abi.encodePacked(uint128(1)));\nXCM.Multilocation memory asset = XCM.Multilocation({ \n    parents: 1,\n    interior: interior1\n});\n'})}),"\n",(0,n.jsx)(t.h4,{id:"2-beneficiary-multilocation",children:"2. Beneficiary Multilocation"}),"\n",(0,n.jsxs)(t.p,{children:["Let's suppose the ",(0,n.jsx)(t.code,{children:"beneficiary"})," is the EVM address ",(0,n.jsx)(t.code,{children:"0xd43593c715fdd31c61141abd04a99fd6822c8558"})," of the contract in parachain ",(0,n.jsx)(t.strong,{children:"2000"}),". The Multilocation is ",(0,n.jsx)(t.code,{children:"{ parents: 1, interior: X2 [Parachain: 2000, AccountId20: { id: *caller address* , network: any }] }"}),".",(0,n.jsx)(t.br,{}),"\n","The interior field is of type H160 (20 bytes EVM address) so prefixed with 0x03 and suffix with 0x00 (network: any). The interior bytes are 0x03 + EVM address + 0x00"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-solidity",children:'bytes[] memory interior = new bytes[](2);\ninterior[0] = bytes.concat(hex"00", bytes4(uint32(2000)));\ninterior[1] = bytes.concat(hex"03", msg.sender, hex"00");\nXCM.Multilocation memory destination = XCM.Multilocation({\n    parents: 1,\n    interior: interior\n});\n'})}),"\n",(0,n.jsx)(t.h4,{id:"3-weight",children:"3. Weight"}),"\n",(0,n.jsx)(t.p,{children:"The weight we want to buy in the destination chain, to set the weightlimit to Unlimited, you should use the value 0 for ref_time."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-solidity",children:"XCM.WeightV2 memory weight = XCM.WeightV2({\n    ref_time: 30_000_000_000,\n    proof_size: 300_000\n});\n"})}),"\n",(0,n.jsx)(t.h4,{id:"4-calling-xcm-precompiles",children:"4. calling XCM precompiles"}),"\n",(0,n.jsx)(t.p,{children:"Import the XCM precompiles in your contract and call it like this:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-solidity",children:'address public constant XCM_ADDRESS =\n0x0000000000000000000000000000000000005004;\n\nrequire(\n    XCM(XCM_ADDRESS).transfer_multiasset(\n        asset,\n        amount,\n        destination,\n        weight\n    ),\n    "Failed to send xcm"\n);\n'})}),"\n",(0,n.jsxs)(t.p,{children:["Please check full example in the ",(0,n.jsx)(t.a,{href:"https://github.com/AstarNetwork/EVM-XCM-Examples/tree/main/contracts/withdraw-assets",children:"XCM EVM SDK"})]})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},11151:(e,t,i)=>{i.d(t,{Z:()=>o,a:()=>a});var n=i(67294);const s={},r=n.createContext(s);function a(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);