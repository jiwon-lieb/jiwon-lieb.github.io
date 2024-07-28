"use strict";(self.webpackChunkdocs_1=self.webpackChunkdocs_1||[]).push([[7269],{24953:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=r(85893),s=r(11151),i=(r(3837),r(52991)),a=r(53438);const o={},d="For Developers",c={id:"use/dapp-staking/for-devs/index",title:"For Developers",description:"Overview",source:"@site/docs/use/dapp-staking/for-devs/index.md",sourceDirName:"use/dapp-staking/for-devs",slug:"/use/dapp-staking/for-devs/",permalink:"/ja/docs/use/dapp-staking/for-devs/",draft:!1,unlisted:!1,editUrl:"https://github.com/AstarNetwork/astar-docs/tree/main/docs/use/dapp-staking/for-devs/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"dApps\u304b\u3089\u30a2\u30f3\u30b9\u30c6\u30fc\u30ad\u30f3\u30b0",permalink:"/ja/docs/use/dapp-staking/for-stakers/unstaking"},next:{title:"dApp\u306e\u7ba1\u7406\u3068\u30ea\u30ef\u30fc\u30c9\u306e\u53d7\u3051\u53d6\u308a",permalink:"/ja/docs/use/dapp-staking/for-devs/manage-dApp-Staking"}},l={},p=[{value:"Overview",id:"overview",level:2},{value:"Tier System and Rewards",id:"tier-system-and-rewards",level:3},{value:"Other pages may be of interest:",id:"other-pages-may-be-of-interest",level:3}];function h(e){const t={a:"a",admonition:"admonition",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"for-developers",children:"For Developers"}),"\n",(0,n.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsxs)(t.p,{children:["Discover ",(0,n.jsx)(t.a,{href:"/docs/learn/dapp-staking/",children:"dApp Staking"}),", a unique mechanism that allows communities to support their favorite teams by staking ASTR or SDN with them. When staking ASTR or SDN on a dApp, users not only support the development of innovative apps but also receive staking rewards from inflation."]}),"\n",(0,n.jsxs)(t.p,{children:["You can educate yourself more by reading the technical documentation about ",(0,n.jsx)(t.a,{href:"/docs/learn/dapp-staking/",children:"dApp Staking"}),"."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Are you a product owner and want to list your dApp in our staking mechanism to earn rewards?"})}),"\n",(0,n.jsxs)(t.p,{children:["Please take the following parameters into consideration and make sure you meet the ",(0,n.jsx)(t.a,{href:"/ja/docs/use/dapp-staking/for-devs/requirements",children:"requirements"}),":"]}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["Before reading the dApp Staking section for dApp owner, make sure you understand the concept of periods, subperiods and eras, as well as the dApp Staking V3 parameters explained ",(0,n.jsx)(t.a,{href:"/docs/learn/dapp-staking/#period--subperiods",children:"here"}),"."]})}),"\n",(0,n.jsx)(t.h3,{id:"tier-system-and-rewards",children:"Tier System and Rewards"}),"\n",(0,n.jsxs)(t.p,{children:["dApp Staking introduces the concept of a tier system for dApps. It's important to fully understand the ",(0,n.jsx)(t.a,{href:"/docs/learn/dapp-staking/dapp-staking-protocol#tier-system",children:"tier mechanism"})," before proceeding with dApp Staking application and registration as a dApp owner."]}),"\n",(0,n.jsxs)(t.p,{children:["Currently, there are ",(0,n.jsx)(t.strong,{children:"4 tiers"})," with a limited number of slots per tier. Tier capacity for dApp staking is calculated at the start of each period based on the ASTR price as described ",(0,n.jsx)(t.a,{href:"/docs/learn/dapp-staking/dapp-staking-protocol#tier-system",children:"here"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["The slots allocated to each tier can be viewed on the ",(0,n.jsx)(t.a,{href:"https://portal.astar.network/astar/dapp-staking/discover",children:"dApp Staking Page"})," of the Astar Portal."]}),"\n",(0,n.jsxs)(t.p,{children:["At the end of each ",(0,n.jsx)(t.strong,{children:"Build&Earn"})," subperiod, dApps are assigned to a tier based on the total value staked on them by users. Each tier has a ",(0,n.jsx)(t.strong,{children:"threshold"})," that a dApp must reach in order to access it."]}),"\n",(0,n.jsxs)(t.p,{children:["The threshold for tier 4 is fixed, but for the other tiers, the threshold is ",(0,n.jsx)(t.strong,{children:"dynamic"})," and calculated at the start of each new period based on the total number of slots for the period. To find out more, ",(0,n.jsx)(t.a,{href:"/docs/learn/dapp-staking/dapp-staking-protocol#tier-threshold-entry",children:"click here"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Rewards"})," for dApps are also ",(0,n.jsx)(t.strong,{children:"dynamic"}),", fluctuating from tier to tier. The higher the tier, the greater the number of ASTR tokens allocated from inflation as rewards for that tier."]}),"\n",(0,n.jsx)(t.p,{children:"The rewards of a tier are divided between all available slots and distributed to the dApps occupying slots. This means that the rewards for dApps within a tier are the same for each dApp, even if not all slots within a tier are occupied."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsxs)(t.em,{children:["Refer to the ",(0,n.jsx)(t.a,{href:"/docs/learn/dapp-staking/protocol-parameters#network-values",children:"dApp staking parameters"})," page to find out more about the tier system and reward allocation."]})}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsx)(t.p,{children:"You have to claim your rewards to receive them. We recommend that you claim your rewards at least once a week or, optimistically, 2 or 3 times a week."})}),"\n",(0,n.jsxs)(t.admonition,{type:"info",children:[(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Example:"})}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Tier 1 has 5 slots for dApps and 50,000 ASTR tokens are allocated as a reward;"}),"\n",(0,n.jsx)(t.li,{children:"At the end of the voting subperiod, only 3 slots are occupied by dApps in Tier 1 ;"}),"\n",(0,n.jsx)(t.li,{children:"These 3 dApps will each receive 10,000 ASTR as reward;"}),"\n",(0,n.jsx)(t.li,{children:"The remaining 20,000 ASTR tokens will not be minted by the network and will be considered burnt;"}),"\n"]})]}),"\n",(0,n.jsx)(t.p,{children:"If there are more dApps eligible for a tier than there is capacity, the dApps with the higher score get the advantage. dApps which missed out on a higher tier get priority for entry into the next lower tier (if there still is any)."}),"\n",(0,n.jsx)(t.p,{children:"In the case a dApp doesn't satisfy the entry threshold for any tier, even though there is still capacity, the dApp will simply be left out of tiers and won't earn\xa0any\xa0reward."}),"\n",(0,n.jsx)(t.admonition,{type:"warning",children:(0,n.jsxs)(t.p,{children:["In the event that a dApp is ",(0,n.jsx)(t.strong,{children:"unregistered"})," from dApp Staking following a governance decision, all developer unclaimed rewards will become unavailable. We recommend that dApp owners claim their rewards regularly."]})}),"\n",(0,n.jsxs)(t.p,{children:["In case you have any questions, please check the ",(0,n.jsx)(t.a,{href:"/docs/learn/dapp-staking/dapp-staking-faq/",children:"FAQ page"})," in the Learn section or join our ",(0,n.jsx)(t.a,{href:"https://discord.com/invite/astarnetwork",children:"Discord channel"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"other-pages-may-be-of-interest",children:"Other pages may be of interest:"}),"\n","\n","\n",(0,n.jsx)(i.Z,{items:(0,a.jA)().items})]})}function u(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},52991:(e,t,r)=>{r.d(t,{Z:()=>x});r(67294);var n=r(86010),s=r(53438),i=r(39960),a=r(13919),o=r(95999),d=r(92503);const c={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var l=r(85893);function p(e){let{href:t,children:r}=e;return(0,l.jsx)(i.Z,{href:t,className:(0,n.Z)("card padding--lg",c.cardContainer),children:r})}function h(e){let{href:t,icon:r,title:s,description:i}=e;return(0,l.jsxs)(p,{href:t,children:[(0,l.jsxs)(d.Z,{as:"h2",className:(0,n.Z)("text--truncate",c.cardTitle),title:s,children:[r," ",s]}),i&&(0,l.jsx)("p",{className:(0,n.Z)("text--truncate",c.cardDescription),title:i,children:i})]})}function u(e){let{item:t}=e;const r=(0,s.LM)(t);return r?(0,l.jsx)(h,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,o.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function m(e){let{item:t}=e;const r=(0,a.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,s.xz)(t.docId??void 0);return(0,l.jsx)(h,{href:t.href,icon:r,title:t.label,description:t.description??n?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return(0,l.jsx)(m,{item:t});case"category":return(0,l.jsx)(u,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const r=(0,s.jA)();return(0,l.jsx)(x,{items:r.items,className:t})}function x(e){const{items:t,className:r}=e;if(!t)return(0,l.jsx)(g,{...e});const i=(0,s.MN)(t);return(0,l.jsx)("section",{className:(0,n.Z)("row",r),children:i.map(((e,t)=>(0,l.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,l.jsx)(f,{item:e})},t)))})}},3837:(e,t,r)=>{r.d(t,{Z:()=>s});r(67294);var n=r(85893);function s(e){let{src:t,caption:r,width:s="460px"}=e;return(0,n.jsxs)("center",{children:[(0,n.jsx)("br",{}),(0,n.jsxs)("figure",{children:[(0,n.jsx)("img",{src:t,alt:r,width:s}),(0,n.jsx)("figcaption",{children:r})]}),(0,n.jsx)("br",{})]})}},11151:(e,t,r)=>{r.d(t,{Z:()=>o,a:()=>a});var n=r(67294);const s={},i=n.createContext(s);function a(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);