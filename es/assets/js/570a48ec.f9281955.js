"use strict";(self.webpackChunkdocs_1=self.webpackChunkdocs_1||[]).push([[1260],{99026:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var n=s(85893),a=s(11151);const r={sidebar_position:2},l="Add wallets into Astar Portal",i={id:"build/builder-guides/integration_toolings/add-wallets-to-portal",title:"Add wallets into Astar Portal",description:"Overview",source:"@site/docs/build/builder-guides/integration_toolings/add-wallets-to-portal.md",sourceDirName:"build/builder-guides/integration_toolings",slug:"/build/builder-guides/integration_toolings/add-wallets-to-portal",permalink:"/es/docs/build/builder-guides/integration_toolings/add-wallets-to-portal",draft:!1,unlisted:!1,editUrl:"https://github.com/AstarNetwork/astar-docs/tree/main/docs/build/builder-guides/integration_toolings/add-wallets-to-portal.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Analyzing on-chain data using Covalent API + Python",permalink:"/es/docs/build/builder-guides/integration_toolings/cookbook_1"},next:{title:"Deploy Astar Portal on Vercel",permalink:"/es/docs/build/builder-guides/integration_toolings/deploy-astar-portal"}},o={},d=[{value:"Overview",id:"overview",level:2},{value:"How to integrate",id:"how-to-integrate",level:2},{value:"Define the wallet variables",id:"define-the-wallet-variables",level:3},{value:"Add wallet information",id:"add-wallet-information",level:3},{value:"Add a visual asset representing your wallet",id:"add-a-visual-asset-representing-your-wallet",level:3},{value:"Requirements for creating a PR",id:"requirements-for-creating-a-pr",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"add-wallets-into-astar-portal",children:"Add wallets into Astar Portal"}),"\n",(0,n.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsxs)(t.p,{children:["Users can connect to Astar portal using both EVM and Substrate based wallets. Below are the basic steps and important links needed to integrate a new wallet into the ",(0,n.jsx)(t.a,{href:"https://portal.astar.network/astar/assets",children:"Astar portal"}),"."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"22",src:s(85833).Z+"",width:"3188",height:"1874"})}),"\n",(0,n.jsx)(t.h2,{id:"how-to-integrate",children:"How to integrate"}),"\n",(0,n.jsxs)(t.p,{children:["Developers can create a PR to ",(0,n.jsx)(t.a,{href:"https://github.com/AstarNetwork/astar-apps",children:"our portal"})," for adding wallets to our portal. We'll walk you through the steps below."]}),"\n",(0,n.jsx)(t.h3,{id:"define-the-wallet-variables",children:"Define the wallet variables"}),"\n",(0,n.jsxs)(t.p,{children:["The extension name ",(0,n.jsx)(t.code,{children:"enum"})," value comes from:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"const extensions = await getInjectedExtensions();\nconsole.log('extensions', extensions); -> extensions[index] -> name\n"})}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Add the ",(0,n.jsx)(t.code,{children:"extension name"})," at the ",(0,n.jsx)(t.a,{href:"https://github.com/AstarNetwork/astar-apps/blob/ecb067e9683eb5224fac96c5bf9fa9ce4c123a7d/src/config/wallets.ts#L8",children:"SupportWallet"})," enum."]}),"\n",(0,n.jsxs)(t.li,{children:["Add the ",(0,n.jsx)(t.code,{children:"SupportWallet.[new_value]"})," to the ",(0,n.jsx)(t.a,{href:"https://github.com/AstarNetwork/astar-apps/blob/ecb067e9683eb5224fac96c5bf9fa9ce4c123a7d/src/config/wallets.ts#L23",children:"WalletModalOption"})," array."]}),"\n",(0,n.jsxs)(t.li,{children:["Add the ",(0,n.jsx)(t.code,{children:"SupportWallet.[new_value]"})," to the ",(0,n.jsx)(t.a,{href:"https://github.com/AstarNetwork/astar-apps/blob/ecb067e9683eb5224fac96c5bf9fa9ce4c123a7d/src/config/wallets.ts#L48",children:"SubstrateWallets"})," array only if it is a Substrate wallet."]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"add-wallet-information",children:"Add wallet information"}),"\n",(0,n.jsxs)(t.p,{children:["For Substrate wallets, add information to the ",(0,n.jsx)(t.a,{href:"https://github.com/AstarNetwork/astar-apps/blob/ecb067e9683eb5224fac96c5bf9fa9ce4c123a7d/src/config/wallets.ts#L64",children:"supportWalletObj"})," object variable."]}),"\n",(0,n.jsx)(t.p,{children:"e.g."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"export const supportWalletObj = {\n  [SupportWallet.TalismanNative]: {\n    img: require('/src/assets/img/logo-talisman.svg'),\n    name: 'Talisman (Native)',\n    source: SupportWallet.TalismanNative,\n    walletUrl: 'https://app.talisman.xyz/',\n    guideUrl: 'https://app.talisman.xyz/',\n    isSupportBrowserExtension: true,\n    isSupportMobileApp: false,\n  },\n};\n"})}),"\n",(0,n.jsxs)(t.p,{children:["For Ethereum wallets, add information to the ",(0,n.jsx)(t.a,{href:"https://github.com/AstarNetwork/astar-apps/blob/ecb067e9683eb5224fac96c5bf9fa9ce4c123a7d/src/config/wallets.ts#L130",children:"supportEvmWalletObj"})," object variable."]}),"\n",(0,n.jsx)(t.p,{children:"e.g."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"export const supportEvmWalletObj = {\n  [SupportWallet.TalismanEvm]: {\n    img: require('/src/assets/img/logo-talisman.svg'),\n    name: 'Talisman (EVM)',\n    source: SupportWallet.TalismanEvm,\n    walletUrl: 'https://app.talisman.xyz/',\n    guideUrl: 'https://app.talisman.xyz/',\n    isSupportBrowserExtension: true,\n    isSupportMobileApp: false,\n    ethExtension: 'talismanEth',\n  },\n};\n"})}),"\n",(0,n.jsx)(t.h3,{id:"add-a-visual-asset-representing-your-wallet",children:"Add a visual asset representing your wallet"}),"\n",(0,n.jsxs)(t.p,{children:["Add a small ",(0,n.jsx)(t.code,{children:".svg"})," or ",(0,n.jsx)(t.code,{children:".png"})," to the ",(0,n.jsx)(t.a,{href:"https://github.com/AstarNetwork/astar-apps/tree/main/src/assets/img",children:"assets"})," directory."]}),"\n",(0,n.jsx)(t.h2,{id:"requirements-for-creating-a-pr",children:"Requirements for creating a PR"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Developers must test sending transactions from our portal. Perform basic tests using the guide below:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Substrate wallets (such as ",(0,n.jsx)(t.a,{href:"https://polkadot.js.org/",children:"Polkadot.js"}),")","\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Native token transfer"}),"\n",(0,n.jsx)(t.li,{children:"XCM assets transfer"}),"\n",(0,n.jsxs)(t.li,{children:["XCM transfer","\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Deposit"}),"\n",(0,n.jsx)(t.li,{children:"Withdrawal"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["dApp staking transfer","\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Stake"}),"\n",(0,n.jsx)(t.li,{children:"Withdrawal"}),"\n",(0,n.jsx)(t.li,{children:"Nomination transfer"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["EVM wallets (such as ",(0,n.jsx)(t.a,{href:"https://metamask.io/",children:"MetaMask"}),")","\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Native token transfer"}),"\n",(0,n.jsx)(t.li,{children:"ERC20 token transfer"}),"\n",(0,n.jsx)(t.li,{children:"XC20(XCM assets) token transfer"}),"\n",(0,n.jsxs)(t.li,{children:["XCM transfer","\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Withdrawal"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Submit the ",(0,n.jsx)(t.a,{href:"https://astar.subscan.io/",children:"Subscan"})," or ",(0,n.jsx)(t.a,{href:"https://blockscout.com/astar/",children:"Blockscout"})," links (both Astar and Shiden networks) for transaction details of the items listed above."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Submit screen recordings of connect, a transaction, and account switch visual interactions."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Deploy the forked app and submit the staging URL (",(0,n.jsx)(t.a,{href:"/es/docs/build/builder-guides/integration_toolings/deploy-astar-portal",children:"ref"}),")."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},85833:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/22-2ff05817cbdc2eb140561988aa19a2c0.png"},11151:(e,t,s)=>{s.d(t,{Z:()=>i,a:()=>l});var n=s(67294);const a={},r=n.createContext(a);function l(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);