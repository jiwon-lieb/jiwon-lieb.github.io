"use strict";(self.webpackChunkdocs_1=self.webpackChunkdocs_1||[]).push([[4225],{92722:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=t(85893),s=t(11151);const i={sidebar_position:4},o="Making Existing ERC20 Assets Cross-chain Compatible",a={id:"learn/interoperability/xcm/building-with-xcm/erc20-cross-chain-compatible",title:"Making Existing ERC20 Assets Cross-chain Compatible",description:"If you would like to make an existing ERC20 asset cross-chain compatible, it's quite simple, following the instructions below",source:"@site/docs/learn/interoperability/xcm/building-with-xcm/erc20-cross-chain-compatible.md",sourceDirName:"learn/interoperability/xcm/building-with-xcm",slug:"/learn/interoperability/xcm/building-with-xcm/erc20-cross-chain-compatible",permalink:"/ja/docs/learn/interoperability/xcm/building-with-xcm/erc20-cross-chain-compatible",draft:!1,unlisted:!1,editUrl:"https://github.com/AstarNetwork/astar-docs/tree/main/docs/learn/interoperability/xcm/building-with-xcm/erc20-cross-chain-compatible.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Using XC20 Assets in EVM",permalink:"/ja/docs/learn/interoperability/xcm/building-with-xcm/send-xc20-evm"},next:{title:"XC20 in Smart Contracts",permalink:"/ja/docs/learn/interoperability/xcm/building-with-xcm/xc20-smart-contracts"}},c={},l=[{value:"XC20+ Extension",id:"xc20-extension",level:2},{value:"Wrapped Tokens",id:"wrapped-tokens",level:2},{value:"Wrapping ERC20 into XC20",id:"wrapping-erc20-into-xc20",level:2},{value:"Procedure",id:"procedure",level:2},{value:"1. Create an XC20 asset",id:"1-create-an-xc20-asset",level:3},{value:"2. Deploy the xcBurrito.sol smart contract",id:"2-deploy-the-xcburritosol-smart-contract",level:3},{value:"3. Transfer XC Asset Ownership to the xcBurrito Smart Contract",id:"3-transfer-xc-asset-ownership-to-the-xcburrito-smart-contract",level:3},{value:"User Actions",id:"user-actions",level:2},{value:"End result",id:"end-result",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"making-existing-erc20-assets-cross-chain-compatible",children:"Making Existing ERC20 Assets Cross-chain Compatible"}),"\n",(0,r.jsx)(n.p,{children:"If you would like to make an existing ERC20 asset cross-chain compatible, it's quite simple, following the instructions below"}),"\n",(0,r.jsx)(n.h2,{id:"xc20-extension",children:"XC20+ Extension"}),"\n",(0,r.jsxs)(n.p,{children:["In short, the ",(0,r.jsx)(n.strong,{children:"XC20"})," standard allows smart contracts to interact with cross-chain compatible assets, as if they were typical ERC20 assets.\nUnlike standard ERC20 assets deployed within the EVM environment, where balances, issuance, etc. are stored directly, ",(0,r.jsx)(n.strong,{children:"XC20"})," assets are mapped to a Substrate pallet, which means that developers do not have access to the same logic inherent to ERC20 format, such as ",(0,r.jsx)(n.code,{children:"_mint"})," or ",(0,r.jsx)(n.code,{children:"_burn"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["In general, this is fine for existing ",(0,r.jsx)(n.strong,{children:"XC20"})," assets since we shouldn't be minting or burning them in smart contracts (e.g. there is no valid reason to mint cross-chain DOT on Astar). However, there are use cases where having an extended set of functionalities is useful and required, such as for wrapped tokens."]}),"\n",(0,r.jsxs)(n.p,{children:["For this reason, we provide an extended ",(0,r.jsx)(n.strong,{children:"XC20"})," interface called ",(0,r.jsx)(n.strong,{children:"XC20+"}),". It provides the following methods:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Solidity",children:"// Used to check what is the existential deposit of XC20 asset\nfunction minimumBalance() external view returns (uint256);\n\n// Used to mint new funds\nfunction mint(address beneficiary, uint256 amount) external returns (bool);\n\n// Used to burn funds\nfunction burn(address who, uint256 amount) external returns (bool);\n"})}),"\n",(0,r.jsx)(n.p,{children:"The aforementioned list could be extended in the future."}),"\n",(0,r.jsxs)(n.p,{children:["Please note that minting and burning requires certain priviliges - read about ",(0,r.jsx)(n.strong,{children:"XC20"})," assets to learn more."]}),"\n",(0,r.jsxs)(n.admonition,{type:"caution",children:[(0,r.jsxs)(n.p,{children:["Please note that the ",(0,r.jsx)(n.code,{children:"burn()"})," function in ",(0,r.jsx)(n.strong,{children:"XC20+"})," is inhereting the behaviour of ",(0,r.jsx)(n.code,{children:"pallet-assets"})," ",(0,r.jsx)(n.code,{children:"burn()"})," function. Calling ",(0,r.jsx)(n.code,{children:"pallet-assets"})," ",(0,r.jsx)(n.code,{children:"burn()"})," function with a amount higher than the current balance will result in a burn of the amount available, and returning success."]}),(0,r.jsxs)(n.p,{children:["In contracts, the ",(0,r.jsx)(n.code,{children:"burn()"})," implementation in ",(0,r.jsx)(n.a,{href:"https://github.com/OpenZeppelin/openzeppelin-contracts/blob/3214f6c2567f0e7938f481b0a6b5cd2fe3b13cdb/contracts/token/ERC20/ERC20.sol#L283",children:(0,r.jsx)(n.code,{children:"ERC20Burnable.sol"})})," will burn the amount if it is lower or equal to the account's balance."]})]}),"\n",(0,r.jsx)(n.h2,{id:"wrapped-tokens",children:"Wrapped Tokens"}),"\n",(0,r.jsx)(n.p,{children:"A wrapped token is a token whose value is tied to an underlying cryptocurrency. An amount of the original token is locked in a digital vault, and in return allows an equivalent amount of wrapped tokens to be minted."}),"\n",(0,r.jsx)(n.p,{children:"This is useful for several reasons, to mention a few:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"To extend the functionalities of an existing token in conjunction with other ERC20 modules."}),"\n",(0,r.jsx)(n.li,{children:"To allow a native cryptocurrency to behave like an ERC20, e.g. Wrapped Ether (WETH)."}),"\n",(0,r.jsx)(n.li,{children:"To allow the use of currencies outside their native blockchain, e.g. Wrapped bitcoin (WBTC)."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["In the next example we will examie how to wrap an existing ERC20 token into ",(0,r.jsx)(n.strong,{children:"XC20"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"wrapping-erc20-into-xc20",children:"Wrapping ERC20 into XC20"}),"\n",(0,r.jsxs)(n.p,{children:["In this example, the underlying token will be an existing ERC20, called BURRITO. We want to wrap some BURRITOs and make them cross-chain-ready. Using a standard ",(0,r.jsx)(n.a,{href:"https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/extensions/ERC20Wrapper.sol",children:"ERC20Wrapper"})," token spec from OpenZeppelin will not be enough. Therefore we will need to override some of the ERC20Wrapper functions, and use ",(0,r.jsx)(n.strong,{children:"XC20+"})," functions.\nLet's call the newly wrapped token xcBURRITO.\nxcBURRITO takes the address of the underlaying token (BURRITO) and the newly created asset's address as constructor parameters. And we\u2019ll set values for the other required parameters, but notice that we have to include the ERC20Permit constructor call, because xcBURRITO is now a parent of BURITTO."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Solidity",children:'constructor(IERC20 burrito)\n   ERC20("Wrapped Burrito", "xcBUR")\n   ERC20Permit("Wrapped Burrito")\n   ERC20Wrapper(burrito)\n{}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Since we can't use ERC20Wrapper out of box we'll override it and use the ",(0,r.jsx)(n.strong,{children:"XC20+"})," interface."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Solidity",children:'import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Wrapper.sol";\nimport "./Burrito.sol";\n\ncontract XcBurrito is Xc20Plus, ERC20Wrapper, BURRITO{\n    constructor(IERC20 burrito)\n    Xc20Plus("Wrapped Burrito", "xcBUR")\n    ERC20Permit("Wrapped Burrito")\n    ERC20Wrapper(burrito)\n    {}\n\n    function _mint(address _to, uint256 _amount)\n        internal\n        override(ERC20)\n    {\n        // add here your pre-mint hooks if needed\n\n        require(\n            IERC20Plus(xcBurrito).mint(_to, _amount), "Minting xc token failed"\n        );\n\n        // add here your post-mint hooks if needed\n    }\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"procedure",children:"Procedure"}),"\n",(0,r.jsx)(n.h3,{id:"1-create-an-xc20-asset",children:"1. Create an XC20 asset"}),"\n",(0,r.jsxs)(n.p,{children:["Follow the documentation on how to ",(0,r.jsx)(n.a,{href:"/ja/docs/learn/interoperability/xcm/building-with-xcm/create-xc20-assets",children:"Create XC20 Assets"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"2-deploy-the-xcburritosol-smart-contract",children:"2. Deploy the xcBurrito.sol smart contract"}),"\n",(0,r.jsx)(n.p,{children:"To deploy the XcBurrito contract you will need 2 input parameters"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Burrito ERC20 token address (H160)"}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"XC20"})," asset address (H160)","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Follow the instructions about how to ",(0,r.jsx)(n.a,{href:"/ja/docs/learn/interoperability/xcm/building-with-xcm/create-xc20-assets#calculate-xc20-precompile-address",children:"Calculate an XC20 Address"}),". For example, if the asset_id is 17 (=0x11), the resulting EVM address will be ",(0,r.jsx)(n.code,{children:"0xffffffff00000000000000000000000000000011"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"3-transfer-xc-asset-ownership-to-the-xcburrito-smart-contract",children:"3. Transfer XC Asset Ownership to the xcBurrito Smart Contract"}),"\n",(0,r.jsxs)(n.p,{children:["To allow the ",(0,r.jsx)(n.strong,{children:"xcBurrito"})," contract to be able to mint/burn you need to call the ",(0,r.jsx)(n.code,{children:"setTeam()"})," extrinsic on pallet-assets, and configure the ",(0,r.jsx)(n.code,{children:"issuer"})," and ",(0,r.jsx)(n.code,{children:"admin"})," to be ",(0,r.jsx)(n.strong,{children:"xcBurrito"}),". This will allow the contract to issue wrapped ",(0,r.jsx)(n.strong,{children:"XC20"})," assets, but since the EVM contract has 24 bytes (H160), we will need to transform the EVM address to ss58 format before we can call the extrinsic.\n",(0,r.jsx)(n.img,{alt:"Set the team of XC20 asset by calling setTeam()",src:t(66732).Z+"",width:"2410",height:"1364"})]}),"\n",(0,r.jsxs)(n.p,{children:["You can renounce ownership of the ",(0,r.jsx)(n.strong,{children:"XC20"})," by calling the ",(0,r.jsx)(n.code,{children:"transferOwnership()"})," extrinsic on pallet-assets. Do note that after calling the extrinsic, you will no longer be able to\nchange the ",(0,r.jsx)(n.code,{children:"issuer"})," or ",(0,r.jsx)(n.code,{children:"admin"})," parameters, so you will want to ensure they are set correctly."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Renounce the ownership of an XC20 asset by calling transferOwnership()",src:t(16428).Z+"",width:"2410",height:"858"})}),"\n",(0,r.jsxs)(n.p,{children:["Now the xcBurrito contract is able to mint ",(0,r.jsx)(n.strong,{children:"XC20"})," tokens for callers who own Burrito ERC20 tokens."]}),"\n",(0,r.jsx)(n.h2,{id:"user-actions",children:"User Actions"}),"\n",(0,r.jsx)(n.p,{children:"To convert Burrito tokens into xcBurrito assets, users will need to perform the following actions."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Approve the xcBurrito smart contract to transfer ERC20 Burrito tokens from a user's balance, to the xcBurrito contract. As an alternative, the ",(0,r.jsx)(n.code,{children:"permit()"})," call can be used to improve UX."]}),"\n",(0,r.jsxs)(n.li,{children:["User calls xcBurrito ",(0,r.jsx)(n.code,{children:"depositFor()"})," for minting new ",(0,r.jsx)(n.strong,{children:"XC20"})," tokens, or ",(0,r.jsx)(n.code,{children:"withdrawTo()"})," for burning ",(0,r.jsx)(n.strong,{children:"XC20"})," tokens."]}),"\n",(0,r.jsxs)(n.li,{children:["The newly wrapped assets are able to be transferred between chains, like any other ",(0,r.jsx)(n.strong,{children:"XC20"})," asset (please see the XCM documentation for more details)."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"end-result",children:"End result"}),"\n",(0,r.jsxs)(n.p,{children:["The result of ",(0,r.jsx)(n.code,{children:"depositFor(user, amount)"})," will be:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["XcBurrito locks an ",(0,r.jsx)(n.code,{children:"amount"})," of ERC20 Burrito token."]}),"\n",(0,r.jsxs)(n.li,{children:["User's balance of ERC20 Burrito is decreased by ",(0,r.jsx)(n.code,{children:"amount"})]}),"\n",(0,r.jsxs)(n.li,{children:["XcBurrito contract mints the same ",(0,r.jsx)(n.code,{children:"amount"})," of xcBurrito assets"]}),"\n",(0,r.jsxs)(n.li,{children:["User's balance of xcBurrito asset is increased by ",(0,r.jsx)(n.code,{children:"amount"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["The result of ",(0,r.jsx)(n.code,{children:"withdrawTo(user, amount)"})," will be:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["XcBurrito contract burns an ",(0,r.jsx)(n.code,{children:"amount"})," of XcBurrito asset"]}),"\n",(0,r.jsxs)(n.li,{children:["User's balance of xcBurrito asset is decreased by ",(0,r.jsx)(n.code,{children:"amount"})]}),"\n",(0,r.jsxs)(n.li,{children:["XcBurrito contract transfers ",(0,r.jsx)(n.code,{children:"amount"})," of ERC20 Burrito token to user"]}),"\n",(0,r.jsxs)(n.li,{children:["User's balance of ERC20 Burrito is increased by ",(0,r.jsx)(n.code,{children:"amount"})]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},66732:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/erc20-cross-chain-compatible-1-0c1616a1bf6951c072865b52618dc1cf.png"},16428:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/erc20-cross-chain-compatible-2-fb1dbc2fb69f5da493aacdf2ff070fa4.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>o});var r=t(67294);const s={},i=r.createContext(s);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);