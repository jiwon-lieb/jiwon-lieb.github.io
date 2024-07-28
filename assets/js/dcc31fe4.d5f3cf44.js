"use strict";(self.webpackChunkdocs_1=self.webpackChunkdocs_1||[]).push([[2380],{6756:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var i=n(85893),s=n(11151);const r={sidebar_position:6},l="XCM - xTokens",c={id:"build/EVM/precompiles/xcm/xcm",title:"XCM - xTokens",description:"XCM precompiles - Interface",source:"@site/docs/build/EVM/precompiles/xcm/xcm.md",sourceDirName:"build/EVM/precompiles/xcm",slug:"/build/EVM/precompiles/xcm/",permalink:"/docs/build/EVM/precompiles/xcm/",draft:!1,unlisted:!1,editUrl:"https://github.com/AstarNetwork/astar-docs/tree/main/docs/build/EVM/precompiles/xcm/xcm.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Precompiles",permalink:"/docs/build/EVM/precompiles/"},next:{title:"Transfer native token",permalink:"/docs/build/EVM/precompiles/xcm/native-transfer"}},o={},d=[{value:"XCM precompiles - Interface",id:"xcm-precompiles---interface",level:3},{value:"transfer(currencyAddress, amount, destination, weight)",id:"transfercurrencyaddress-amount-destination-weight",level:4},{value:"transfer_with_fee(currencyAddress, amount, fee, destination, weight)",id:"transfer_with_feecurrencyaddress-amount-fee-destination-weight",level:4},{value:"transfer_multiasset(asset, amount, destination, weight)",id:"transfer_multiassetasset-amount-destination-weight",level:4},{value:"transfer_multiasset_with_fee(asset, amount, fee, destination, weight)",id:"transfer_multiasset_with_feeasset-amount-fee-destination-weight",level:4},{value:"transfer_multi_currencies(currencies, feeItem, destination, weight)",id:"transfer_multi_currenciescurrencies-feeitem-destination-weight",level:4},{value:"transfer_multi_assets(assets, feeItem, destination, weight)",id:"transfer_multi_assetsassets-feeitem-destination-weight",level:4},{value:"send_xcm(destination, xcmCall)",id:"send_xcmdestination-xcmcall",level:4},{value:"XCM EVM SDK",id:"xcm-evm-sdk",level:3},{value:"Create Multilocation",id:"create-multilocation",level:3},{value:"Builder Guides",id:"builder-guides",level:4}];function a(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"xcm---xtokens",children:"XCM - xTokens"}),"\n",(0,i.jsx)(t.h3,{id:"xcm-precompiles---interface",children:"XCM precompiles - Interface"}),"\n",(0,i.jsxs)(t.p,{children:["The interface can be found ",(0,i.jsx)(t.a,{href:"https://github.com/AstarNetwork/Astar/blob/master/precompiles/xcm/XCM_v2.sol#L1",children:"here"})," and contains the following functions:"]}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["Only available in Shibuya for now. For Shiden and Astar please check this ",(0,i.jsx)(t.a,{href:"https://github.com/AstarNetwork/Astar/blob/master/precompiles/xcm/XCM.sol",children:"interface"})]})}),"\n",(0,i.jsx)(t.h4,{id:"transfercurrencyaddress-amount-destination-weight",children:"transfer(currencyAddress, amount, destination, weight)"}),"\n",(0,i.jsx)(t.p,{children:"Transfer a token through XCM based on its address"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-solidity",children:"function transfer(\n    address currencyAddress,\n    uint256 amount,\n    Multilocation memory destination,\n    WeightV2 memory weight\n) external returns (bool);\n"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"currencyAddress"})," - The ERC20 address of the currency we want to transfer"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"amount"})," - The amount of tokens we want to transfer"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"destination"})," - The Multilocation to which we want to send the tokens"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"weight"})," - The weight we want to buy in the destination chain, to set the weightlimit to Unlimited, you should use the value 0 for ref_time"]}),"\n"]}),"\n",(0,i.jsx)(t.h4,{id:"transfer_with_feecurrencyaddress-amount-fee-destination-weight",children:"transfer_with_fee(currencyAddress, amount, fee, destination, weight)"}),"\n",(0,i.jsx)(t.p,{children:"Transfer a token through XCM based on its address specifying fee"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-solidity",children:"function transfer_with_fee(\n    address currencyAddress,\n    uint256 amount,\n    uint256 fee,\n    Multilocation memory destination,\n    WeightV2 memory weight\n) external returns (bool);\n"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"currencyAddress"})," - The ERC20 address of the currency we want to transfer"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"amount"})," - The amount of tokens we want to transfer"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"fee"})," - The amount to be spent to pay for execution in destination chain"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"destination"})," - The Multilocation to which we want to send the tokens"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"weight"})," - The weight we want to buy in the destination chain, to set the weightlimit to Unlimited, you should use the value 0 for ref_time"]}),"\n"]}),"\n",(0,i.jsx)(t.h4,{id:"transfer_multiassetasset-amount-destination-weight",children:"transfer_multiasset(asset, amount, destination, weight)"}),"\n",(0,i.jsx)(t.p,{children:"Transfer a token through XCM based on its MultiLocation"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-solidity",children:"function transfer_multiasset(\n    Multilocation memory asset,\n    uint256 amount,\n    Multilocation memory destination,\n    WeightV2 memory weight\n) external returns (bool);\n"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"asset"})," - The asset we want to transfer, defined by its multilocation. Currently only Concrete Fungible assets"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"amount"})," - The amount of tokens we want to transfer"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"destination"})," - The Multilocation to which we want to send the tokens"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"weight"})," - The weight we want to buy in the destination chain, to set the weightlimit to Unlimited, you should use the value 0 for ref_time"]}),"\n"]}),"\n",(0,i.jsx)(t.h4,{id:"transfer_multiasset_with_feeasset-amount-fee-destination-weight",children:"transfer_multiasset_with_fee(asset, amount, fee, destination, weight)"}),"\n",(0,i.jsx)(t.p,{children:"Transfer a token through XCM based on its MultiLocation specifying fee"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-solidity",children:"function transfer_multiasset_with_fee(\n    Multilocation memory asset,\n    uint256 amount,\n    uint256 fee,\n    Multilocation memory destination,\n    WeightV2 memory weight\n) external returns (bool);\n"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"asset"})," - The asset we want to transfer, defined by its multilocation. Currently only Concrete Fungible assets"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"amount"})," - The amount of tokens we want to transfer"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"fee"})," - The amount to be spent to pay for execution in destination chain"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"destination"})," - The Multilocation to which we want to send the tokens"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"weight"})," - The weight we want to buy in the destination chain, to set the weightlimit to Unlimited, you should use the value 0 for ref_time"]}),"\n"]}),"\n",(0,i.jsx)(t.h4,{id:"transfer_multi_currenciescurrencies-feeitem-destination-weight",children:"transfer_multi_currencies(currencies, feeItem, destination, weight)"}),"\n",(0,i.jsx)(t.p,{children:"Transfer several tokens at once through XCM based on its address specifying fee"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-solidity",children:"function transfer_multiasset_with_fee(\n    Multilocation memory asset,\n    uint256 amount,\n    uint256 fee,\n    Multilocation memory destination,\n    WeightV2 memory weight\n) external returns (bool);\n"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"currencies"})," - The currencies we want to transfer, defined by their address and amount."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"feeItem"})," - Which of the currencies to be used as fee"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"destination"})," - The Multilocation to which we want to send the tokens"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"weight"})," - The weight we want to buy in the destination chain, to set the weightlimit to Unlimited, you should use the value 0 for ref_time"]}),"\n"]}),"\n",(0,i.jsx)(t.h4,{id:"transfer_multi_assetsassets-feeitem-destination-weight",children:"transfer_multi_assets(assets, feeItem, destination, weight)"}),"\n",(0,i.jsx)(t.p,{children:"Transfer several tokens at once through XCM based on its location specifying fee"}),"\n",(0,i.jsx)(t.admonition,{type:"caution",children:(0,i.jsx)(t.p,{children:"Only a maximum of 2 assets can be transferred"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-solidity",children:"function transfer_multi_assets(\n    MultiAsset[] memory assets,\n    uint32 feeItem,\n    Multilocation memory destination,\n    WeightV2 memory weight\n) external returns (bool);\n"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"assets"})," - The assets we want to transfer, defined by their location and amount."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"feeItem"})," - Which of the currencies to be used as fee"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"destination"})," - The Multilocation to which we want to send the tokens"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"weight"})," - The weight we want to buy in the destination chain, to set the weightlimit to Unlimited, you should use the value 0 for ref_time"]}),"\n"]}),"\n",(0,i.jsx)(t.h4,{id:"send_xcmdestination-xcmcall",children:"send_xcm(destination, xcmCall)"}),"\n",(0,i.jsx)(t.p,{children:"Send xcm using PalletXCM call"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-solidity",children:"function send_xcm(\n    Multilocation memory destination,\n    bytes memory xcm_call\n) external returns (bool);\n"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"destination"})," - Multilocation of destination chain"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"xcmCall"})," - Encoded xcm call to send to destination"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"xcm-evm-sdk",children:"XCM EVM SDK"}),"\n",(0,i.jsxs)(t.p,{children:["Find it ",(0,i.jsx)(t.a,{href:"https://github.com/AstarNetwork/EVM-XCM-Examples/tree/main",children:"here"}),".\nThis repository contains examples demonstrating solidity contracts using XCM precompiles. It's an easy way to start if you want to understand and build with EVM & XCM\nInside the repository:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Learn how to do: asset transfer & withdraw as well as native token transfer"}),"\n",(0,i.jsx)(t.li,{children:"Zombienet config file: spawn a local zombienet with one relay chain and two parachains (Shibuya and Shiden node)"}),"\n",(0,i.jsx)(t.li,{children:"A setup script in order to create an asset and register it in both networks"}),"\n",(0,i.jsx)(t.li,{children:"Solidity examples of usage of XCM precompiles"}),"\n",(0,i.jsx)(t.li,{children:"Integration tests (hardhat) in order to understand the flow of the examples"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Please follow the instructions in the README to try it on your local machine."}),"\n",(0,i.jsx)(t.h3,{id:"create-multilocation",children:"Create Multilocation"}),"\n",(0,i.jsx)(t.p,{children:"A multilocation is defined by its number of parents and the encoded junctions (interior). Precompiles use the Multilocation type that is defined as follows:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-solidity",children:"    struct Multilocation {\n        uint8 parents;\n        bytes[] interior;\n    }\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Note that each multilocation has a ",(0,i.jsx)(t.code,{children:"parents"})," element, defined in this case by a ",(0,i.jsx)(t.code,{children:"uint8"}),', and an array of bytes. Parents refer to how many "hops" in the upwards direction you have to do if you are going through the relay chain. Being a ',(0,i.jsx)(t.code,{children:"uint8"}),", the normal values you would see are:"]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Origin"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Destination"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Parents Value"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Parachain A"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Parachain A"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"0"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Parachain A"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Relay Chain"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"1"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Parachain A"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Parachain B"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"1"})]})]})]}),"\n",(0,i.jsxs)(t.p,{children:["The bytes array (",(0,i.jsx)(t.code,{children:"bytes[]"}),") defines the interior and its content within the multilocation. The size of the array defines the ",(0,i.jsx)(t.code,{children:"interior"})," value as follows:"]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Array"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Size"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Interior Value"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"[]"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"0"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Here"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"[XYZ]"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"1"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"X1"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"[XYZ, ABC]"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"2"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"X2"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"[XYZ, ... N]"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"N"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"XN"})]})]})]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["Interior value ",(0,i.jsx)(t.code,{children:"Here"})," is often used for the relay chain (either as a destination or to target the relay chain asset)."]})}),"\n",(0,i.jsxs)(t.p,{children:["Suppose the bytes array contains data. Each element's first byte (2 hexadecimal numbers) corresponds to the selector of that ",(0,i.jsx)(t.code,{children:"XN"})," field. For example:"]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Byte Value"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Selector"}),(0,i.jsx)(t.th,{children:"Data Type"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"0x00"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Parachain"}),(0,i.jsx)(t.td,{children:"bytes4"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"0x01"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"AccountId32"}),(0,i.jsx)(t.td,{children:"bytes32"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"0x02"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"AccountIndex64"}),(0,i.jsx)(t.td,{children:"u64"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"0x03"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"AccountKey20"}),(0,i.jsx)(t.td,{children:"bytes20"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"0x04"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"PalletInstance"}),(0,i.jsx)(t.td,{children:"byte"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"0x05"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"GeneralIndex"}),(0,i.jsx)(t.td,{children:"u128"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"0x06"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"GeneralKey"}),(0,i.jsx)(t.td,{children:"bytes[]"})]})]})]}),"\n",(0,i.jsxs)(t.p,{children:["Next, depending on the selector and its data type, the following bytes correspond to the actual data being provided. Note that for ",(0,i.jsx)(t.code,{children:"AccountId32"}),", ",(0,i.jsx)(t.code,{children:"AccountIndex64"}),", and ",(0,i.jsx)(t.code,{children:"AccountKey20"}),", the ",(0,i.jsx)(t.code,{children:"network"})," field seen in the Polkadot.js Apps example is appended at the end. For example:"]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Selector"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Data Value"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Represents"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Parachain"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:'"0x00+000007E7"'}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Parachain ID 2023"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"AccountId32"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:'"0x01+AccountId32+00"'}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"AccountId32, Network(Option) Null"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"AccountId32"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:'"0x01+AccountId32+03"'}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"AccountId32, Network Polkadot"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"AccountKey20"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:'"0x03+AccountKey20+00"'}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"AccountKey20, Network(Option) Null"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"PalletInstance"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:'"0x04+03"'}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Pallet Instance 3"})]})]})]}),"\n",(0,i.jsx)(t.p,{children:"For example in solidity:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-solidity",children:'// Multilocation: { parents: 1, interior: X1 [Parachain: 2000] }\nbytes[] memory interior1 = new bytes[](1);\ninterior1[0] = bytes.concat(hex"00", bytes4(uint32(2000)));\nMultilocation memory destination = Multilocation({ \n    parents: 1,\n    interior: interior1\n});\n\n// Multilocation: { parents: 0, interior: Here }\nbytes[] memory interior1 = new bytes[](0); // Initialize as an empty bytes array\nMultilocation memory destination = Multilocation({\n    parents: 1,\n    interior: interior1\n});\n\n// Multilocation: { parents: 1, interior: X2 [Parachain: 2000, GeneralIndex: 1] }\nbytes[] memory interior = new bytes[](2);\ninterior[0] = bytes.concat(hex"00", bytes4(uint32(2000)));\ninterior[1] = bytes.concat(hex"05", abi.encodePacked(uint128(1)));\nXCM.Multilocation memory asset = XCM.Multilocation({ \n    parents: 1,\n    interior: interior\n});\n'})}),"\n",(0,i.jsx)(t.h4,{id:"builder-guides",children:"Builder Guides"}),"\n",(0,i.jsx)(t.p,{children:"Three builder guides on the subject of EVM XCM are available in the Builder section:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/build/builder-guides/leverage_parachains/interact_with_xc20",children:"How to create and interact with a mintable XC20 asset via Solidity smart contract"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/build/builder-guides/leverage_parachains/mint-nfts-crust",children:"Harnessing Crust Network for NFT Minting: A Developer's Guide"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/build/builder-guides/leverage_parachains/zombienet",children:"How to set up a Zombienet for XCM testing"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>l});var i=n(67294);const s={},r=i.createContext(s);function l(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);