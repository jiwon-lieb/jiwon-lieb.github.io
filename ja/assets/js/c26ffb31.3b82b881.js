"use strict";(self.webpackChunkdocs_1=self.webpackChunkdocs_1||[]).push([[3433],{74913:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>b,contentTitle:()=>h,default:()=>g,frontMatter:()=>u,metadata:()=>f,toc:()=>m});var i=t(85893),a=t(11151);const s=t.p+"assets/images/guide01-9a1f9392be9d31b1d3ca1ab379dade59.png",o=t.p+"assets/images/guide02-672147c2cd3f34398d11f5af0bbfc7a7.png",c=t.p+"assets/images/guide03-039a12496059d1677cd64a7229b53400.png",r=t.p+"assets/images/guide04-c663efe1438d69b8aca560a715703781.png",l=t.p+"assets/images/guide05-f1e2b4a3ff5296de411b7000ca92dbca.png",d=t.p+"assets/images/guide06-83a690bb9e7c5b94c38a90981233083c.png",u={sidebar_position:2},h="How to create a unified account",f={id:"build/astar-beta-labs/account-unification/users_guide",title:"How to create a unified account",description:"What is a Unified Account?",source:"@site/docs/build/astar-beta-labs/account-unification/users_guide.md",sourceDirName:"build/astar-beta-labs/account-unification",slug:"/build/astar-beta-labs/account-unification/users_guide",permalink:"/ja/docs/build/astar-beta-labs/account-unification/users_guide",draft:!1,unlisted:!1,editUrl:"https://github.com/AstarNetwork/astar-docs/tree/main/docs/build/astar-beta-labs/account-unification/users_guide.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Account Unification",permalink:"/ja/docs/build/astar-beta-labs/account-unification/"},next:{title:"MetaMask Snaps",permalink:"/ja/docs/build/astar-beta-labs/metamask-snaps/"}},b={},m=[{value:"What is a Unified Account?",id:"what-is-a-unified-account",level:2},{value:"What is possible?",id:"what-is-possible",level:2},{value:"How to create an unified account",id:"how-to-create-an-unified-account",level:2},{value:"Disclaimer: Before creating a Unified account, please ensure you understand the following",id:"disclaimer-before-creating-a-unified-account-please-ensure-you-understand-the-following",level:3},{value:"1, Start by connecting Native account.",id:"1-start-by-connecting-native-account",level:3},{value:"2, Read the disclaimer.",id:"2-read-the-disclaimer",level:3},{value:"3, Connect to EVM wallet.",id:"3-connect-to-evm-wallet",level:3},{value:"4, Add your account name.",id:"4-add-your-account-name",level:3},{value:"5, Send xcTokens.",id:"5-send-xctokens",level:3},{value:"6, Confirm everything looks okay. Press the button and the accounts will be unified.",id:"6-confirm-everything-looks-okay-press-the-button-and-the-accounts-will-be-unified",level:3},{value:"7, To confirm the accounts were unified:",id:"7-to-confirm-the-accounts-were-unified",level:3}];function p(e){const n={a:"a",admonition:"admonition",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"how-to-create-a-unified-account",children:"How to create a unified account"}),"\n","\n","\n",(0,i.jsx)(n.h2,{id:"what-is-a-unified-account",children:"What is a Unified Account?"}),"\n",(0,i.jsx)(n.p,{children:"Creating a Unified account is simple, however, it's important to understand that this is still an emerging technology. We do not recommend attempting account unification until you are familiar with how it works."}),"\n",(0,i.jsxs)(n.p,{children:["A Unified account provides a simplified experience for end-users of Astar Substrate-based networks. Since on Astar Substrate, native Wasm and the EVM use two different address formats, new users find it challenging to grasp how they function. While both Astar Native and Astar EVM accounts are ",(0,i.jsx)(n.em,{children:"typically"})," required, with unified accounts, users don't have to worry about which wallet they are connected to. When unifed accounts work in conjuction with XVM, they are designed to form a powerful new way to abstract away the inner workings of the Substrate native VM side from end users, entirely, allowing them to interact with both networks seamlessly using only MetaMask."]}),"\n",(0,i.jsx)(n.h2,{id:"what-is-possible",children:"What is possible?"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Two accounts; one balance. When accounts are unified, they share the same balance. The moment ASTR tokens are withdrawn from a CEX exchange to an Astar Native account, the balance is updated on the Astar EVM side. There's no need to transfer between them any longer; users can stake tokens immediately, for example, or use a DEX."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Furthermore, it's already possible to interact with Wasm dApps using a Unified account, as long as the dApp supports EVM wallets. The core team is currently developing XVM, which allows a Unified account to interact with EVM smart contracts."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"how-to-create-an-unified-account",children:"How to create an unified account"}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsx)(n.p,{children:"At this moment this feature is only available on Shibuya testnet."})}),"\n",(0,i.jsx)(n.h3,{id:"disclaimer-before-creating-a-unified-account-please-ensure-you-understand-the-following",children:"Disclaimer: Before creating a Unified account, please ensure you understand the following"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Unified accounts are specific to each network. Creating a Unified account on Shibuya using Shibuya Native account A and Shibuya EVM account A does not carry over to Shiden or Astar."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Staking balances on the EVM must be unstaked first before initiating the process since staked tokens cannot be transferred to the unified balance."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Custom xcTokens (rather than official XCM tokens) are not included automatically during the account unification process, so they need to be transferred to an EVM wallet separately. To obtain test xcTokens on Shibuya, please contact @kahori on Discord."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"There is a fee (slightly more than 1 SBY) for creating a Unified account. If you have an existing Account ID (Substrate), this charge acts more like a deposit than a fee. However, it can not be refunded as accounts currently cannot be separated after they are unified."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"1-start-by-connecting-native-account",children:"1, Start by connecting Native account."}),"\n",(0,i.jsx)(n.p,{children:"Please prepare following:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Shibuya Native account"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Shibuya EVM account"})}),"\n",(0,i.jsx)(n.li,{children:"Must have no staking balance."}),"\n",(0,i.jsxs)(n.li,{children:["Must have non-zero balances on both accounts (enough for gas) Use the faucet built into the ",(0,i.jsx)(n.a,{href:"https://portal.astar.network",children:"Portal"})," to obtain enough for gas fees, if you need to."]}),"\n",(0,i.jsx)(n.li,{children:"To understand the process more thoroughly, obtain some test tokens. Please ask a team member if you do not know how to obtain test tokens."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Make sure you are connected to the Shibuya testnet. You should see a new account icon on the Asset page, and can initiate the process from there."}),"\n",(0,i.jsx)("div",{style:{textAlign:"center"},children:(0,i.jsx)("img",{src:s,style:{width:600}})}),"\n",(0,i.jsx)("div",{style:{textAlign:"center"},children:(0,i.jsx)("img",{src:o,style:{width:600}})}),"\n",(0,i.jsx)(n.h3,{id:"2-read-the-disclaimer",children:"2, Read the disclaimer."}),"\n",(0,i.jsx)("div",{style:{textAlign:"center"},children:(0,i.jsx)("img",{src:c,style:{width:450}})}),"\n",(0,i.jsx)(n.h3,{id:"3-connect-to-evm-wallet",children:"3, Connect to EVM wallet."}),"\n",(0,i.jsx)(n.p,{children:"It is recommended to use a new wallet, but if you wish to use an existing EVM account, please make sure to unstake all tokens first."}),"\n",(0,i.jsx)("div",{style:{textAlign:"center"},children:(0,i.jsx)("img",{src:r,style:{width:450}})}),"\n",(0,i.jsx)(n.h3,{id:"4-add-your-account-name",children:"4, Add your account name."}),"\n",(0,i.jsx)(n.p,{children:"The account name will be visible on-chain. We are working on adding NFT pfp support in time for when Account Unification comes on Astar."}),"\n",(0,i.jsx)("div",{style:{textAlign:"center"},children:(0,i.jsx)("img",{src:l,style:{width:450}})}),"\n",(0,i.jsx)(n.h3,{id:"5-send-xctokens",children:"5, Send xcTokens."}),"\n",(0,i.jsx)(n.p,{children:"xcTokens\xa0do\xa0not live in the EVM\xa0account balance. Before unifying the balance, the portal will send xcTokens to a Unified account. When testing the environment, most of you may not have xcTokens. Please find a team member and ask for them for this purpose. You will be asked to sign an EVM transaction."}),"\n",(0,i.jsx)("div",{style:{textAlign:"center"},children:(0,i.jsx)("img",{src:d,style:{width:450}})}),"\n",(0,i.jsx)(n.h3,{id:"6-confirm-everything-looks-okay-press-the-button-and-the-accounts-will-be-unified",children:"6, Confirm everything looks okay. Press the button and the accounts will be unified."}),"\n",(0,i.jsx)(n.h3,{id:"7-to-confirm-the-accounts-were-unified",children:"7, To confirm the accounts were unified:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Check that the SBY tokens balances are unified."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Check that xcTokens ERC token balances are available after connecting a Substrate wallet."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"You can send xcTokens from the unified Substrate account."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"We are working on a wallet modal to create a Unified Account section, where users can use unified accounts without needing to select a specific wallet."})})]})}function g(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>o});var i=t(67294);const a={},s=i.createContext(a);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);