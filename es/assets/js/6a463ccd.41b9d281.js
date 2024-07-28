"use strict";(self.webpackChunkdocs_1=self.webpackChunkdocs_1||[]).push([[4987],{78994:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var s=n(85893),r=n(11151),i=n(52991),a=n(53438);const o={},c="XCM",l={id:"learn/interoperability/xcm/using-xcm/index",title:"XCM",description:"Astar Network es un centro de aplicaciones descentralizado, flexible y altamente interoperable que admite no s\xf3lo WebAssembly y contratos inteligentes EVM, sino tambi\xe9n comunicaciones entre m\xe1quinas virtuales (XVM).",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/learn/interoperability/xcm/using-xcm/index.md",sourceDirName:"learn/interoperability/xcm/using-xcm",slug:"/learn/interoperability/xcm/using-xcm/",permalink:"/es/docs/learn/interoperability/xcm/using-xcm/",draft:!1,unlisted:!1,editUrl:"https://github.com/AstarNetwork/astar-docs/tree/main/docs/learn/interoperability/xcm/using-xcm/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"XCM",permalink:"/es/docs/learn/interoperability/xcm/"},next:{title:"Construyendo con XCM",permalink:"/es/docs/learn/interoperability/xcm/building-with-xcm/"}},d={},u=[];function m(e){const t={h1:"h1",p:"p",strong:"strong",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"xcm",children:"XCM"}),"\n",(0,s.jsx)(t.p,{children:"Astar Network es un centro de aplicaciones descentralizado, flexible y altamente interoperable que admite no s\xf3lo WebAssembly y contratos inteligentes EVM, sino tambi\xe9n comunicaciones entre m\xe1quinas virtuales (XVM).\nAstar suele utilizar XCM para aprovechar los activos de otras parachains. Adem\xe1s, XCM encuentra utilidad dentro de los contratos inteligentes para construir dApps puramente cross-chain, para su despliegue en EVM o Wasm stack, o ambos."}),"\n",(0,s.jsxs)(t.p,{children:["El caso m\xe1s frecuente es el de usuarios que transfieren su ",(0,s.jsx)(t.strong,{children:"DOT"})," de Polkadot a ",(0,s.jsx)(t.strong,{children:"Astar"}),", y viceversa. La versi\xf3n del ecosistema Astar de ",(0,s.jsx)(t.strong,{children:"DOT"})," puede utilizarse para contratos inteligentes, y las dApps pueden integrarla. Otra aplicaci\xf3n com\xfanmente observada es dentro de las dApps DeFi, donde XCM permite el comercio ",(0,s.jsx)(t.strong,{children:"DOT"})," sin necesidad de un puente, y ofrece intercambios de activos a trav\xe9s de m\xfaltiples cadenas que anteriormente habr\xedan requerido muchos pasos, requiriendo s\xf3lo una transacci\xf3n. La versi\xf3n del ecosistema Astar de ",(0,s.jsx)(t.strong,{children:"DOT"})," puede entonces ser utilizada para contratos inteligentes, y las dApps pueden integrarla."]}),"\n",(0,s.jsx)(t.p,{children:"En esta secci\xf3n, describiremos los detalles t\xe9cnicos de XCM para que los desarrolladores puedan aprovecharlo en sus dApps. Tenga en cuenta que los ejemplos de Astar/Polkadot y Shiden/Kusama son intercambiables, ya que ambas redes admiten las mismas funciones."}),"\n",(0,s.jsx)("br",{}),"\n","\n","\n",(0,s.jsx)(i.Z,{items:(0,a.jA)().items})]})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},52991:(e,t,n)=>{n.d(t,{Z:()=>g});n(67294);var s=n(86010),r=n(53438),i=n(39960),a=n(13919),o=n(95999),c=n(92503);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=n(85893);function u(e){let{href:t,children:n}=e;return(0,d.jsx)(i.Z,{href:t,className:(0,s.Z)("card padding--lg",l.cardContainer),children:n})}function m(e){let{href:t,icon:n,title:r,description:i}=e;return(0,d.jsxs)(u,{href:t,children:[(0,d.jsxs)(c.Z,{as:"h2",className:(0,s.Z)("text--truncate",l.cardTitle),title:r,children:[n," ",r]}),i&&(0,d.jsx)("p",{className:(0,s.Z)("text--truncate",l.cardDescription),title:i,children:i})]})}function p(e){let{item:t}=e;const n=(0,r.LM)(t);return n?(0,d.jsx)(m,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,o.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function x(e){let{item:t}=e;const n=(0,a.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",s=(0,r.xz)(t.docId??void 0);return(0,d.jsx)(m,{href:t.href,icon:n,title:t.label,description:t.description??s?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(x,{item:t});case"category":return(0,d.jsx)(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function f(e){let{className:t}=e;const n=(0,r.jA)();return(0,d.jsx)(g,{items:n.items,className:t})}function g(e){const{items:t,className:n}=e;if(!t)return(0,d.jsx)(f,{...e});const i=(0,r.MN)(t);return(0,d.jsx)("section",{className:(0,s.Z)("row",n),children:i.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(h,{item:e})},t)))})}},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>a});var s=n(67294);const r={},i=s.createContext(r);function a(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);