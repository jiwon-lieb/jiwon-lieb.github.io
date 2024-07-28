"use strict";(self.webpackChunkdocs_1=self.webpackChunkdocs_1||[]).push([[8767],{44857:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var s=t(85893),i=t(11151);const r={sidebar_position:8},a="Withdraw Assets",o={id:"learn/interoperability/xcm/building-with-xcm/xc-assets-withdraw",title:"Withdraw Assets",description:"In the Polkadot ecosystem there are two ways to transfer assets between remote chains: teleportation and reserve transfer. Teleportation is essentially burning an asset on one side, and minting it on the other, so that the total balance before and after the teleportation remains the same.",source:"@site/docs/learn/interoperability/xcm/building-with-xcm/xc-assets-withdraw.md",sourceDirName:"learn/interoperability/xcm/building-with-xcm",slug:"/learn/interoperability/xcm/building-with-xcm/xc-assets-withdraw",permalink:"/ja/docs/learn/interoperability/xcm/building-with-xcm/xc-assets-withdraw",draft:!1,unlisted:!1,editUrl:"https://github.com/AstarNetwork/astar-docs/tree/main/docs/learn/interoperability/xcm/building-with-xcm/xc-assets-withdraw.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Transfer Reserve Assets",permalink:"/ja/docs/learn/interoperability/xcm/building-with-xcm/xc-reserve-transfer"},next:{title:"Client Applications",permalink:"/ja/docs/learn/interoperability/xcm/building-with-xcm/client-applications"}},c={},d=[];function l(e){const n={a:"a",code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"withdraw-assets",children:"Withdraw Assets"}),"\n",(0,s.jsx)(n.p,{children:"In the Polkadot ecosystem there are two ways to transfer assets between remote chains: teleportation and reserve transfer. Teleportation is essentially burning an asset on one side, and minting it on the other, so that the total balance before and after the teleportation remains the same."}),"\n",(0,s.jsx)(n.p,{children:"The second way to transfer assets uses wrapped tokens, backed by assets on the origin chain. Assets to be transferred are locked on the origin chain, and 1:1 versions are created on the destination. Depending on the business logic, the origin chain that still owns the assets, may want to mint some derivatives to reflect that ownership. In this way, the original assets don't actually leave the chain, but their ownership becomes transferrable."}),"\n",(0,s.jsxs)(n.p,{children:["Suppose we would like to import Shibuya ",(0,s.jsx)(n.code,{children:"SBY"})," tokens as wrapped assets on Shiden, resulting in ",(0,s.jsx)(n.code,{children:"wSBY"}),"."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Shibuya network will need to have Shiden's sovereign account. This account is controlled by Shiden and represents all funds sent to it, from the remote chain (Shiden, from Shibuya's perspective in this example)."}),"\n",(0,s.jsxs)(n.li,{children:["Shiden network will need create the ",(0,s.jsx)(n.code,{children:"wSBY"})," asset, and configure it to act as a cross-chain (XC20) asset."]}),"\n",(0,s.jsx)(n.li,{children:"HRMP channels should both be enabled, and configured for parachains to communicate and exchange XCM messages."}),"\n",(0,s.jsxs)(n.li,{children:["In order pay for execution time, ",(0,s.jsx)(n.code,{children:"wSBY"})," should be configured as a payment asset on Shiden."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"During the transfer the following will occur:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["An amount of ",(0,s.jsx)(n.code,{children:"SBY"})," are moved from the source account to the sovereign account of Shiden on Shibuya."]}),"\n",(0,s.jsxs)(n.li,{children:["An XCM message containing the ",(0,s.jsx)(n.code,{children:"ReserveTransferAssets"})," instruction is sent to Shiden."]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"ReserveTransferAssets"})," instruction is processed by the ",(0,s.jsx)(n.code,{children:"assets"})," pallet on Shiden, and the corresponding amount of ",(0,s.jsx)(n.code,{children:"wSBY"})," is minted on Shiden."]}),"\n",(0,s.jsxs)(n.li,{children:["Minted ",(0,s.jsx)(n.code,{children:"wSBY"})," tokens are deposited to the destination account."]}),"\n",(0,s.jsxs)(n.li,{children:["A small amount of ",(0,s.jsx)(n.code,{children:"wSBY"})," is deducted from the destination account as payment for execution time"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," The above example is specific to the implementation of two particular parachains. XCM does not dictate or impose any restrictions on how to interpret incoming messages, or how to manage derivative assets. Other parachains may or may not use the ",(0,s.jsx)(n.code,{children:"assets"})," pallet; the only assumption is that ",(0,s.jsx)(n.code,{children:"assets_reserve_transfer"})," will form an XCM message with an origin specified by its ",(0,s.jsx)(n.code,{children:"parachain_id"}),". Everything else is dependent on the remote chain and its logic, and there are no retries attempted on failure."]}),"\n",(0,s.jsx)(n.h1,{id:"evm-precompiles",children:"EVM precompiles"}),"\n",(0,s.jsxs)(n.p,{children:["This functionality is exposed to EVM smart contracts via precompiles. The interface can be found ",(0,s.jsx)(n.a,{href:"https://github.com/AstarNetwork/Astar",children:"here"})," under XCM precompiles."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"    function assets_reserve_transfer(\n        address[] calldata asset_id,\n        uint256[] calldata asset_amount,\n        bytes32   recipient_account_id,\n        bool      is_relay,\n        uint256   parachain_id,\n        uint256   fee_index\n    ) external payable returns (bool);\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"asset_id"})," - A list of assets to transfer; for transferring native assets, see the next section."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"asset_amount"})," - The corresponding amount of assets."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"recipient_account_id"})," - The recipient account id on the destination chain (or a Relay Chain)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"is_relay"})," Is true if destination account is on the Relay Chain."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"parachain_id"})," - The destination parachain id."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"fee_index"})," - Which asset from ",(0,s.jsx)(n.code,{children:"asset_id"})," is use for paying XCM fees."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," there is another version of ",(0,s.jsx)(n.code,{children:"assets_reserve_transfer"})," precompile that accepts ",(0,s.jsx)(n.code,{children:"address"})," instead of ",(0,s.jsx)(n.code,{children:"bytes32"})," for the ",(0,s.jsx)(n.code,{children:"recipient_account_id"}),"."]}),"\n",(0,s.jsx)(n.h1,{id:"implementation-details",children:"Implementation details"}),"\n",(0,s.jsxs)(n.p,{children:["Astar uses a custom XCM pallet that was extended by ",(0,s.jsx)(n.code,{children:"reserve_withdraw_assets"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>a});var s=t(67294);const i={},r=s.createContext(i);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);