"use strict";(self.webpackChunkdocs_1=self.webpackChunkdocs_1||[]).push([[5911],{10048:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>c,metadata:()=>l,toc:()=>u});var i=n(85893),r=n(11151),s=n(52991),a=n(53438);const c={},o="Account Abstraction",l={id:"build/integrations/account-abstraction/index",title:"Account Abstraction",description:"Please note that this section is under active development.",source:"@site/docs/build/integrations/account-abstraction/index.md",sourceDirName:"build/integrations/account-abstraction",slug:"/build/integrations/account-abstraction/",permalink:"/es/docs/build/integrations/account-abstraction/",draft:!1,unlisted:!1,editUrl:"https://github.com/AstarNetwork/astar-docs/tree/main/docs/build/integrations/account-abstraction/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Integrations",permalink:"/es/docs/build/integrations/"},next:{title:"Banana SDK",permalink:"/es/docs/build/integrations/account-abstraction/banana/"}},d={},u=[{value:"Overview",id:"overview",level:2},{value:"Using Account Abstraction",id:"using-account-abstraction",level:3},{value:"Meta Transactions",id:"meta-transactions",level:4},{value:"ERC-4337",id:"erc-4337",level:4}];function h(t){const e={admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",ul:"ul",...(0,r.a)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"account-abstraction",children:"Account Abstraction"}),"\n",(0,i.jsx)(e.admonition,{type:"note",children:(0,i.jsx)(e.p,{children:"Please note that this section is under active development."})}),"\n",(0,i.jsx)(e.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(e.p,{children:"Here you will find all the information required to refine the end-user experience and allow for seamless web2-like interactions with dApps and accounts on the Astar EVM."}),"\n",(0,i.jsx)(e.p,{children:"Account Abstraction is a blockchain technology that enables users to utilize smart contracts as their accounts. While the default account for most users is an Externally Owned Account (EOA), which is controlled by an external private key, it requires users to have a considerable understanding of blockchain technology to use them securely. Fortunately, smart contract accounts can create superior user experiences."}),"\n",(0,i.jsx)(e.h3,{id:"using-account-abstraction",children:"Using Account Abstraction"}),"\n",(0,i.jsx)(e.p,{children:"There are two primary ways users can use account abstraction: with third party meta transaction services or by sending ERC-4337 transactions."}),"\n",(0,i.jsx)(e.h4,{id:"meta-transactions",children:"Meta Transactions"}),"\n",(0,i.jsx)(e.p,{children:"Meta transactions are bespoke third party services for achieving account abstraction."}),"\n",(0,i.jsx)(e.h4,{id:"erc-4337",children:"ERC-4337"}),"\n",(0,i.jsx)(e.p,{children:"ERC-4337, also known as EIP-4337."}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Banana Wallet SDK"}),"\n"]}),"\n",(0,i.jsx)("br",{}),"\n","\n","\n",(0,i.jsx)(s.Z,{items:(0,a.jA)().items})]})}function m(t={}){const{wrapper:e}={...(0,r.a)(),...t.components};return e?(0,i.jsx)(e,{...t,children:(0,i.jsx)(h,{...t})}):h(t)}},52991:(t,e,n)=>{n.d(e,{Z:()=>f});n(67294);var i=n(86010),r=n(53438),s=n(39960),a=n(13919),c=n(95999),o=n(92503);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=n(85893);function u(t){let{href:e,children:n}=t;return(0,d.jsx)(s.Z,{href:e,className:(0,i.Z)("card padding--lg",l.cardContainer),children:n})}function h(t){let{href:e,icon:n,title:r,description:s}=t;return(0,d.jsxs)(u,{href:e,children:[(0,d.jsxs)(o.Z,{as:"h2",className:(0,i.Z)("text--truncate",l.cardTitle),title:r,children:[n," ",r]}),s&&(0,d.jsx)("p",{className:(0,i.Z)("text--truncate",l.cardDescription),title:s,children:s})]})}function m(t){let{item:e}=t;const n=(0,r.LM)(e);return n?(0,d.jsx)(h,{href:n,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:e.description??(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function p(t){let{item:e}=t;const n=(0,a.Z)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,r.xz)(e.docId??void 0);return(0,d.jsx)(h,{href:e.href,icon:n,title:e.label,description:e.description??i?.description})}function x(t){let{item:e}=t;switch(e.type){case"link":return(0,d.jsx)(p,{item:e});case"category":return(0,d.jsx)(m,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function b(t){let{className:e}=t;const n=(0,r.jA)();return(0,d.jsx)(f,{items:n.items,className:e})}function f(t){const{items:e,className:n}=t;if(!e)return(0,d.jsx)(b,{...t});const s=(0,r.MN)(e);return(0,d.jsx)("section",{className:(0,i.Z)("row",n),children:s.map(((t,e)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(x,{item:t})},e)))})}},11151:(t,e,n)=>{n.d(e,{Z:()=>c,a:()=>a});var i=n(67294);const r={},s=i.createContext(r);function a(t){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function c(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:a(t.components),i.createElement(s.Provider,{value:e},t.children)}}}]);