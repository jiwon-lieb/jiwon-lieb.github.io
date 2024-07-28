"use strict";(self.webpackChunkdocs_1=self.webpackChunkdocs_1||[]).push([[8753],{95097:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>h});var r=n(85893),s=n(11151),a=n(52991),o=n(53438);const i={},c="Relayers",l={id:"build/zkEVM/integrations/account-abstraction/relayers/index",title:"Relayers",description:"Account Abstraction (EIP-4337) provides a mechanism for native Meta Transactions to be a part of the Ethereum protocol.",source:"@site/docs/build/zkEVM/integrations/account-abstraction/relayers/index.md",sourceDirName:"build/zkEVM/integrations/account-abstraction/relayers",slug:"/build/zkEVM/integrations/account-abstraction/relayers/",permalink:"/ja/docs/build/zkEVM/integrations/account-abstraction/relayers/",draft:!1,unlisted:!1,editUrl:"https://github.com/AstarNetwork/astar-docs/tree/main/docs/build/zkEVM/integrations/account-abstraction/relayers/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Safe Account Abstraction",permalink:"/ja/docs/build/zkEVM/integrations/account-abstraction/safe--aa/"},next:{title:"Gelato Relay",permalink:"/ja/docs/build/zkEVM/integrations/account-abstraction/relayers/gelato-relay"}},d={},h=[{value:"Meta Transactions",id:"meta-transactions",level:2},{value:"How Relayers work",id:"how-relayers-work",level:3}];function u(e){const t={h1:"h1",h2:"h2",h3:"h3",p:"p",strong:"strong",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"relayers",children:"Relayers"}),"\n",(0,r.jsx)(t.p,{children:"Account Abstraction (EIP-4337) provides a mechanism for native Meta Transactions to be a part of the Ethereum protocol."}),"\n",(0,r.jsx)(t.h2,{id:"meta-transactions",children:"Meta Transactions"}),"\n",(0,r.jsx)(t.p,{children:"Meta transactions allow users to perform Ethereum transactions without having ETH for gas fees. Instead, they sign a transaction with their private key and then pass it to a third party, known as a Relayer, that broadcasts the transaction to the Ethereum network. The Relayer pays the gas fee and, in turn, can be compensated by the user in another token or even off-chain."}),"\n",(0,r.jsx)(t.h3,{id:"how-relayers-work",children:"How Relayers work"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"User-Signed Payloads:"})," Users create and sign transaction payloads but don't broadcast them to the network directly."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Relayer Role:"})," Instead of broadcasting transactions, users send their signed payloads to a Relayer. The Relayer then wraps these payloads in standard Ethereum transactions and broadcasts them to the network."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Gas Payment:"})," The gas for transactions is paid by the Relayer. However, it is also possible for the Relayer to be reimbursed by users in a token other than ETH."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Sponsorship:"})," Sponsors cover transaction fees. In this context, the sponsor could be considered a specific type of Relayer that willingly pays transaction fees on behalf of users without expecting reimbursement."]}),"\n",(0,r.jsx)("br",{}),"\n","\n","\n",(0,r.jsx)(a.Z,{items:(0,o.jA)().items})]})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},52991:(e,t,n)=>{n.d(t,{Z:()=>b});n(67294);var r=n(86010),s=n(53438),a=n(39960),o=n(13919),i=n(95999),c=n(92503);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=n(85893);function h(e){let{href:t,children:n}=e;return(0,d.jsx)(a.Z,{href:t,className:(0,r.Z)("card padding--lg",l.cardContainer),children:n})}function u(e){let{href:t,icon:n,title:s,description:a}=e;return(0,d.jsxs)(h,{href:t,children:[(0,d.jsxs)(c.Z,{as:"h2",className:(0,r.Z)("text--truncate",l.cardTitle),title:s,children:[n," ",s]}),a&&(0,d.jsx)("p",{className:(0,r.Z)("text--truncate",l.cardDescription),title:a,children:a})]})}function p(e){let{item:t}=e;const n=(0,s.LM)(t);return n?(0,d.jsx)(u,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,i.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function m(e){let{item:t}=e;const n=(0,o.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,s.xz)(t.docId??void 0);return(0,d.jsx)(u,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(m,{item:t});case"category":return(0,d.jsx)(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e;const n=(0,s.jA)();return(0,d.jsx)(b,{items:n.items,className:t})}function b(e){const{items:t,className:n}=e;if(!t)return(0,d.jsx)(y,{...e});const a=(0,s.MN)(t);return(0,d.jsx)("section",{className:(0,r.Z)("row",n),children:a.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(f,{item:e})},t)))})}},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>o});var r=n(67294);const s={},a=r.createContext(s);function o(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);