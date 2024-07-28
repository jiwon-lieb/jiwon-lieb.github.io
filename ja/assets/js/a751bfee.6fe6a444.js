"use strict";(self.webpackChunkdocs_1=self.webpackChunkdocs_1||[]).push([[3462],{5603:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>A,frontMatter:()=>r,metadata:()=>c,toc:()=>F});var s=n(85893),i=n(11151);const r={sidebar_position:5},a="XC20 in Smart Contracts",c={id:"learn/interoperability/xcm/building-with-xcm/xc20-smart-contracts",title:"XC20 in Smart Contracts",description:"So far we\u2019ve successfully transferred assets from Kusama to Shiden and shown how we can access those assets the same as any other within MetaMask. Now we will take it one step further and demonstrate how to use these assets with smart contracts.",source:"@site/docs/learn/interoperability/xcm/building-with-xcm/xc20-smart-contracts.md",sourceDirName:"learn/interoperability/xcm/building-with-xcm",slug:"/learn/interoperability/xcm/building-with-xcm/xc20-smart-contracts",permalink:"/ja/docs/learn/interoperability/xcm/building-with-xcm/xc20-smart-contracts",draft:!1,unlisted:!1,editUrl:"https://github.com/AstarNetwork/astar-docs/tree/main/docs/learn/interoperability/xcm/building-with-xcm/xc20-smart-contracts.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Making Existing ERC20 Assets Cross-chain Compatible",permalink:"/ja/docs/learn/interoperability/xcm/building-with-xcm/erc20-cross-chain-compatible"},next:{title:"Remote Transact via XCM",permalink:"/ja/docs/learn/interoperability/xcm/building-with-xcm/xc-remote-transact"}},o={},F=[];function d(e){const t={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"xc20-in-smart-contracts",children:"XC20 in Smart Contracts"}),"\n",(0,s.jsx)(t.p,{children:"So far we\u2019ve successfully transferred assets from Kusama to Shiden and shown how we can access those assets the same as any other within MetaMask. Now we will take it one step further and demonstrate how to use these assets with smart contracts."}),"\n",(0,s.jsxs)(t.p,{children:["Here is an example staking contract we\u2019ll be using for the demonstration (for DOT, replace ",(0,s.jsx)(t.code,{children:"ksm"})," with ",(0,s.jsx)(t.code,{children:"dot"}),"):"]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["XC20 address of relay chain token (KSM and DOT) is ",(0,s.jsx)(t.code,{children:"0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"})," (because ",(0,s.jsx)(t.code,{children:"Id"})," ",(0,s.jsx)(t.code,{children:"340,282,366,920,938,463,463,374,607,431,768,211,455"})," to hex is ",(0,s.jsx)(t.code,{children:"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"}),").",(0,s.jsx)(t.br,{}),"\n","To use this address inside a solidity smart-contract, check sum of the address should be respected. Please use ",(0,s.jsx)(t.a,{href:"https://web3-tools.netlify.app/",children:"toChecksumAddress"})," converter that will convert your address.",(0,s.jsx)(t.br,{}),"\n","for example ",(0,s.jsx)(t.code,{children:"0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"})," will be converted to ",(0,s.jsx)(t.code,{children:"0xFFfFfFffFFfffFFfFFfFFFFFffFFFffffFfFFFfF"})]})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"// SPDX-License-Identifier: MIT\npragma solidity ^0.8.0;\n\n// A partial ERC20 interface, just for the demo purposes\ninterface IERC20 {\n    function balanceOf(address owner) external view returns (uint256);\n    function approve(address spender, uint256 amount) external returns (bool);\n    function transfer(address to, uint256 amount) external returns (bool);\n    function transferFrom(address from, address to, uint256 amount) external returns (bool);\n}\n\ncontract XC20_Demo {\n    IERC20 public ksm = IERC20(0xFFfFfFffFFfffFFfFFfFFFFFffFFFffffFfFFFfF);\n    mapping(address => uint256) public stakers;\n\n    constructor() payable {}\n\n    function stake(uint256 amount) public {\n        require(ksm.transferFrom(msg.sender, address(this), amount));\n        stakers[msg.sender] += amount;\n    }\n\n    function unstake(uint256 amount) public {\n        require(stakers[msg.sender] >= amount);\n        require(ksm.transfer(msg.sender, amount));\n        stakers[msg.sender] -= amount;\n    }\n}\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Using the partial ERC20 interface (all methods are actually supported), we can check the balance of the account we used previously: ",(0,s.jsx)(t.code,{children:"0x107bAe763DC63e0686C574FdE1B58115c7d19280"})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"14",src:n(49521).Z+"",width:"290",height:"253"})}),"\n",(0,s.jsxs)(t.p,{children:["The amount shown is the same amount we see in MetaMask, ",(0,s.jsx)(t.strong,{children:"15 KSM"})," in total."]}),"\n",(0,s.jsxs)(t.p,{children:["Now, Lets stake 5 KSM in our simple staking dApp. The first step will be to approve the staking demo contract ",(0,s.jsx)(t.code,{children:"0x62425e07119144B5D5A16D96430c31aD0E17A877"})," for the transfer, using the IERC20 interface:"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"15",src:n(23215).Z+"",width:"646",height:"250"})}),"\n",(0,s.jsx)(t.p,{children:"Now we can stake 5 KSM."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"16",src:n(18109).Z+"",width:"512",height:"139"})}),"\n",(0,s.jsx)(t.p,{children:"After the operation is complete, we can check the staked amount."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"17",src:n(58663).Z+"",width:"509",height:"262"})}),"\n",(0,s.jsx)(t.p,{children:"We\u2019ve successfully staked 5 KSM!"}),"\n",(0,s.jsx)(t.p,{children:"To summarize what we\u2019ve done so far:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Transferred KSM tokens from Kusama to Shiden."}),"\n",(0,s.jsx)(t.li,{children:"Verified the tokens are present within MetaMask."}),"\n",(0,s.jsx)(t.li,{children:"Confirmed we are able to manipulate the XC20 tokens in the same way as other ERC20 tokens, via smart contract."}),"\n"]})]})}function A(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},49521:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/14-8cc76ac1ca0096c66f71905de945c2f0.png"},23215:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/15-35ce4791c71a9b2cefdb173828689476.png"},18109:(e,t,n)=>{n.d(t,{Z:()=>s});const s="data:image/png;base64,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"},58663:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/17-193602d6a554ed6498ad43defbe3b63f.png"},11151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>a});var s=n(67294);const i={},r=s.createContext(i);function a(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);