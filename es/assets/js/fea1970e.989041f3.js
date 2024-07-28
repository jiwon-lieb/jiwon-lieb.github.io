"use strict";(self.webpackChunkdocs_1=self.webpackChunkdocs_1||[]).push([[6836],{63262:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>c,metadata:()=>l,toc:()=>u});var r=n(85893),s=n(11151),i=n(52991),o=n(53438);const c={},a="Tutorials",l={id:"tutorials/index",title:"Tutorials",description:"Overview",source:"@site/docs/tutorials/index.md",sourceDirName:"tutorials",slug:"/tutorials/",permalink:"/es/docs/tutorials/",draft:!1,unlisted:!1,editUrl:"https://github.com/AstarNetwork/astar-docs/tree/main/docs/tutorials/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"MetaMask Snaps",permalink:"/es/docs/build/astar-beta-labs/metamask-snaps/"},next:{title:"From Zero to ink! Hero",permalink:"/es/docs/tutorials/from-zero-to-ink-hero/"}},d={},u=[{value:"Overview",id:"overview",level:2}];function m(e){const t={h1:"h1",h2:"h2",p:"p",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"tutorials",children:"Tutorials"}),"\n",(0,r.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(t.p,{children:"In the following sections you can find hands-on tutorials designed to help developers get the most out of Astar Network."}),"\n",(0,r.jsx)("br",{}),"\n","\n","\n",(0,r.jsx)(i.Z,{items:(0,o.jA)().items})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},52991:(e,t,n)=>{n.d(t,{Z:()=>j});n(67294);var r=n(86010),s=n(53438),i=n(39960),o=n(13919),c=n(95999),a=n(92503);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=n(85893);function u(e){let{href:t,children:n}=e;return(0,d.jsx)(i.Z,{href:t,className:(0,r.Z)("card padding--lg",l.cardContainer),children:n})}function m(e){let{href:t,icon:n,title:s,description:i}=e;return(0,d.jsxs)(u,{href:t,children:[(0,d.jsxs)(a.Z,{as:"h2",className:(0,r.Z)("text--truncate",l.cardTitle),title:s,children:[n," ",s]}),i&&(0,d.jsx)("p",{className:(0,r.Z)("text--truncate",l.cardDescription),title:i,children:i})]})}function h(e){let{item:t}=e;const n=(0,s.LM)(t);return n?(0,d.jsx)(m,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function p(e){let{item:t}=e;const n=(0,o.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,s.xz)(t.docId??void 0);return(0,d.jsx)(m,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(p,{item:t});case"category":return(0,d.jsx)(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const n=(0,s.jA)();return(0,d.jsx)(j,{items:n.items,className:t})}function j(e){const{items:t,className:n}=e;if(!t)return(0,d.jsx)(x,{...e});const i=(0,s.MN)(t);return(0,d.jsx)("section",{className:(0,r.Z)("row",n),children:i.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(f,{item:e})},t)))})}},11151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>o});var r=n(67294);const s={},i=r.createContext(s);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);