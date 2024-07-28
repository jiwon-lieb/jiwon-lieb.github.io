"use strict";(self.webpackChunkdocs_1=self.webpackChunkdocs_1||[]).push([[2653],{67544:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var i=n(85893),s=n(11151);const l={sidebar_position:2},o="SubWallet",a={id:"build/integrations/wallets/subwallet",title:"SubWallet",description:"Overview",source:"@site/docs/build/integrations/wallets/subwallet.md",sourceDirName:"build/integrations/wallets",slug:"/build/integrations/wallets/subwallet",permalink:"/es/docs/build/integrations/wallets/subwallet",draft:!1,unlisted:!1,editUrl:"https://github.com/AstarNetwork/astar-docs/tree/main/docs/build/integrations/wallets/subwallet.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Astar Safe (Gnosis Safe)",permalink:"/es/docs/build/integrations/wallets/astar-safe"},next:{title:"Transak",permalink:"/es/docs/build/integrations/wallets/transak"}},d={},c=[{value:"Overview",id:"overview",level:2},{value:"How to integrate with a dApp",id:"how-to-integrate-with-a-dapp",level:2},{value:"Use with TypeScript",id:"use-with-typescript",level:2}];function r(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"subwallet",children:"SubWallet"}),"\n",(0,i.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsxs)(t.p,{children:["SubWallet, Polkadot{.js}, and Talisman extensions allow dApps to connect to them via public interaction with the ",(0,i.jsx)(t.code,{children:"injectedWeb3"})," object of the window browser."]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["SubWallet (public with properties ",(0,i.jsx)(t.code,{children:"subwallet-js"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["Polkadot{.js} (public with properties ",(0,i.jsx)(t.code,{children:"polkadot-js"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["Talisman (public with properties ",(0,i.jsx)(t.code,{children:"talisman"}),")"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"20",src:n(58974).Z+"",width:"1174",height:"455"})}),"\n",(0,i.jsxs)(t.p,{children:["You can open the ",(0,i.jsx)(t.code,{children:"injectedWeb3"})," object in your browser's devtools."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"21",src:n(97640).Z+"",width:"826",height:"241"})}),"\n",(0,i.jsx)(t.h2,{id:"how-to-integrate-with-a-dapp",children:"How to integrate with a dApp"}),"\n",(0,i.jsxs)(t.admonition,{type:"info",children:[(0,i.jsx)(t.p,{children:"Refer to these examples:"}),(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Github Repository ",(0,i.jsx)(t.a,{href:"https://github.com/Koniverse/SubConnect",children:"https://github.com/Koniverse/SubConnect"})]}),"\n",(0,i.jsxs)(t.li,{children:["Demo App: ",(0,i.jsx)(t.a,{href:"https://connect.subwallet.app/",children:"https://connect.subwallet.app/"})]}),"\n",(0,i.jsxs)(t.li,{children:["Video Demo: ",(0,i.jsx)(t.a,{href:"https://bit.ly/38QhmfI",children:"https://bit.ly/38QhmfI"})]}),"\n"]})]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Check the extension is active:","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["When a wallet extension is active in a browser it will modify ",(0,i.jsx)(t.code,{children:"window.injectedWeb3"})," by adding its interaction and specifying the name."]}),"\n",(0,i.jsxs)(t.li,{children:["For example: check the SubWallet extension by this code: ",(0,i.jsx)(t.code,{children:"window.injectedWeb3 && window.injectedWeb3['subwallet-js']"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["Enable integration with your dApp by using the method ",(0,i.jsx)(t.code,{children:"enable()"})," of the extension interaction object"]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"const SubWalletExtension = window.injectedWeb3['subwallet-js'];\nconst extension = await SubWalletExtension.enable();\n"})}),"\n",(0,i.jsx)(t.p,{children:"After running the code extension, a popup will appear to confirm integration with your dApp."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["After enabling, the ",(0,i.jsx)(t.code,{children:"extension"})," variable may contain the following objects:","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"accounts"}),": Allow getting account data with 2 methods: ",(0,i.jsx)(t.code,{children:"get()"})," and ",(0,i.jsx)(t.code,{children:"subscribe()"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"signer"}),": Allow to sign data with 2 methods: ",(0,i.jsx)(t.code,{children:"signPayload()"})," and ",(0,i.jsx)(t.code,{children:"signRaw()"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"metadata"}),": Allow getting additional metadata list with method ",(0,i.jsx)(t.code,{children:"get()"})," and add/update with ",(0,i.jsx)(t.code,{children:"provide()"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"use-with-typescript",children:"Use with TypeScript"}),"\n",(0,i.jsxs)(t.p,{children:["If your dApp is written with TypeScript you will need to add ",(0,i.jsx)(t.code,{children:"@polkadot/extension-inject"})," to your ",(0,i.jsx)(t.code,{children:"package.json"})," to get the extension interfaces."]})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},58974:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/20-377c95859954085da8059c8dae085b39.png"},97640:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/21-f65bf8ea8628da9a7cfea9583bcd668a.png"},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>o});var i=n(67294);const s={},l=i.createContext(s);function o(e){const t=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(l.Provider,{value:t},e.children)}}}]);