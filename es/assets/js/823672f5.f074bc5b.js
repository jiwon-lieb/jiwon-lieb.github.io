"use strict";(self.webpackChunkdocs_1=self.webpackChunkdocs_1||[]).push([[6912],{50022:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>c,default:()=>x,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var n=r(85893),s=r(11151),a=r(74866),i=r(85162),o=(r(61294),r(56543));const l={sidebar_position:1,title:"Astar zkEVM Quickstart Guide",sidebar_label:"Quickstart"},c=void 0,d={id:"build/zkEVM/quickstart",title:"Astar zkEVM Quickstart Guide",description:"Astar zkEVM is a zero-knowledge scaling solution for Ethereum that offers an EVM-equivalent environment on which existing EVM smart contracts, developer tools, and wallets can work seamlessly. Astar zkEVM harnesses the power of zero-knowledge proofs to reduce transaction costs and increase throughput, while inheriting the security of Ethereum.",source:"@site/docs/build/zkEVM/quickstart.md",sourceDirName:"build/zkEVM",slug:"/build/zkEVM/quickstart",permalink:"/es/docs/build/zkEVM/quickstart",draft:!1,unlisted:!1,editUrl:"https://github.com/AstarNetwork/astar-docs/tree/main/docs/build/zkEVM/quickstart.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Astar zkEVM Quickstart Guide",sidebar_label:"Quickstart"},sidebar:"tutorialSidebar",previous:{title:"Build on Astar zkEVM",permalink:"/es/docs/build/zkEVM/"},next:{title:"Bridge to zkEVM",permalink:"/es/docs/build/zkEVM/bridge-to-zkevm"}},h={},u=[{value:"Connecting to zkEVM",id:"connecting-to-zkevm",level:2},{value:"Bridging Assets",id:"bridging-assets",level:2},{value:"Deploying Smart Contracts",id:"deploying-smart-contracts",level:2},{value:"Astar zkEVM Support for Developers",id:"astar-zkevm-support-for-developers",level:2}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components},{Details:r}=t;return r||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{style:{textAlign:"center"},children:(0,n.jsx)("img",{src:o.Z,style:{width:1200}})}),"\n",(0,n.jsxs)(t.p,{children:["Astar zkEVM is a zero-knowledge scaling solution for Ethereum that offers an ",(0,n.jsx)(t.strong,{children:"EVM-equivalent environment"})," on which existing EVM smart contracts, developer tools, and wallets can work seamlessly. Astar zkEVM harnesses the power of zero-knowledge proofs to reduce transaction costs and increase throughput, while inheriting the security of Ethereum."]}),"\n",(0,n.jsx)(t.p,{children:"Solidity developers are right at home on Astar zkEVM. Simply switch to the zkEVM RPC, and start building!"}),"\n",(0,n.jsx)(t.admonition,{title:"Reminder",type:"info",children:(0,n.jsx)(t.p,{children:"No special tools or wallets are required to build or interact with Astar zkEVM."})}),"\n",(0,n.jsx)(t.p,{children:"Developers can deploy existing contracts from other EVM chains to the zkEVM, and users are able to deposit assets from Ethereum to transact on the zkEVM in batches, which are ultimately finalized through novel use of zero-knowledge proofs. Native account abstraction means developers can craft user interfaces that are more intuitive and web2-like, that eliminate complexity and drastically simplify the onboarding process."}),"\n",(0,n.jsx)(t.h2,{id:"connecting-to-zkevm",children:"Connecting to zkEVM"}),"\n",(0,n.jsxs)(t.admonition,{title:"Reminder",type:"info",children:[(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Astar zKatana testnet and its related documentation are under active development."})}),(0,n.jsxs)(t.p,{children:["All feedback is welcome and highly appreciated, so please report errors or inconsistencies to a team member or as an issue on the ",(0,n.jsx)(t.a,{href:"https://github.com/AstarNetwork/astar-docs/issues",children:"Astar Docs Github repo"}),", thank you."]})]}),"\n",(0,n.jsxs)(t.p,{children:["To add ",(0,n.jsx)(t.strong,{children:"Astar zkEVM"})," or any testnet networks to your wallet manually, enter the following details :"]}),"\n",(0,n.jsxs)(a.Z,{children:[(0,n.jsx)(i.Z,{value:"mainnet",label:"Astar zkEVM",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"RPC URL"}),(0,n.jsx)(t.th,{children:"ChainID"}),(0,n.jsx)(t.th,{children:"Block Explorer URL"}),(0,n.jsx)(t.th,{children:"Currency"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"https://rpc.startale.com/astar-zkevm"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"3776"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://astar-zkevm.explorer.startale.com/",children:"https://astar-zkevm.explorer.startale.com/"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"ETH"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"https://astar-zkevm-rpc.dwellir.com"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"3776"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"ETH"})})]})]})]})}),(0,n.jsx)(i.Z,{value:"testnet 2",label:"zKyoto Testnet",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"RPC URL"}),(0,n.jsx)(t.th,{children:"ChainID"}),(0,n.jsx)(t.th,{children:"Block Explorer URL"}),(0,n.jsx)(t.th,{children:"Currency"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"https://rpc.startale.com/zkyoto"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"6038361"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://zkyoto.explorer.startale.com/",children:"https://zkyoto.explorer.startale.com/"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"ETH"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"https://astar-zkyoto-rpc.dwellir.com"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"6038361"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"ETH"})})]})]})]})})]}),"\n",(0,n.jsx)(t.p,{children:"To add the network to MetaMask you can either use the data above, or find a link to add the network at the bottom of the respective block explorer page."}),"\n",(0,n.jsx)(t.h2,{id:"bridging-assets",children:"Bridging Assets"}),"\n",(0,n.jsxs)(t.p,{children:["The next step is to ",(0,n.jsx)(t.a,{href:"/es/docs/build/zkEVM/bridge-to-zkevm",children:"bridge assets"})," from Ethereum \u2192 Astar zkEVM."]}),"\n",(0,n.jsx)(t.admonition,{type:"important",children:(0,n.jsxs)(t.p,{children:["Astar's canonical ",(0,n.jsx)(t.a,{href:"https://portal.astar.network",children:"zkEVM Bridge"})," does not inherit any counterparty risk compared to 3rd party bridge services, and is trustless at the protocol level."]})}),"\n",(0,n.jsx)(t.h2,{id:"deploying-smart-contracts",children:"Deploying Smart Contracts"}),"\n",(0,n.jsxs)(t.p,{children:["The development experience on zkEVM is seamless and identical to the Ethereum Virtual Machine. Developers building on zkEVM can use their existing code and tools to deploy on zkEVM, and dApp users will benefit from higher transaction throughput and lower fees. Read more about deploying smart contracts on the zkEVM ",(0,n.jsx)(t.a,{href:"/docs/build/zkEVM/smart-contracts/",children:"here."})]}),"\n",(0,n.jsx)(t.h2,{id:"astar-zkevm-support-for-developers",children:"Astar zkEVM Support for Developers"}),"\n",(0,n.jsxs)(t.p,{children:["Developers requiring support can open an issue on ",(0,n.jsx)(t.a,{href:"https://ethereum.stackexchange.com/",children:"Ethereum StackExchange"})," and tag it with ",(0,n.jsx)(t.code,{children:"Astar"})," (preferred) or join the ",(0,n.jsx)(t.a,{href:"https://discord.gg/astarnetwork",children:"Astar Discord server"}),"."]}),"\n",(0,n.jsxs)(r,{children:[(0,n.jsx)("summary",{children:"Ethereum StackExchange"}),(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Join the ",(0,n.jsx)(t.strong,{children:"Ethereum StackExchange"})," ",(0,n.jsx)(t.a,{href:"https://ethereum.stackexchange.com/",children:"here"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Create a new issue."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Make a detailed explanation of your issue."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["At the end add a tag ",(0,n.jsx)(t.code,{children:"Astar"})," to trigger Astar team."]}),"\n"]}),"\n"]})]}),"\n",(0,n.jsxs)(r,{children:[(0,n.jsx)("summary",{children:"Astar Discord server"}),(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Join the ",(0,n.jsx)(t.strong,{children:"Astar Discord"})," server ",(0,n.jsx)(t.a,{href:"https://discord.gg/astarnetwork",children:"here"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Accept the invite."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Take the ",(0,n.jsx)(t.strong,{children:"Developer"})," role under ",(0,n.jsx)(t.strong,{children:"#roles"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Navigate to the ",(0,n.jsx)(t.strong,{children:"Builder/#zkevm-learning"})," channel."]}),"\n"]}),"\n"]})]})]})}function x(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},85162:(e,t,r)=>{r.d(t,{Z:()=>i});r(67294);var n=r(86010);const s={tabItem:"tabItem_Ymn6"};var a=r(85893);function i(e){let{children:t,hidden:r,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.Z)(s.tabItem,i),hidden:r,children:t})}},74866:(e,t,r)=>{r.d(t,{Z:()=>E});var n=r(67294),s=r(86010),a=r(12466),i=r(16550),o=r(20469),l=r(91980),c=r(67392),d=r(50012);function h(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:s}}=e;return{value:t,label:r,attributes:n,default:s}}))}(r);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function x(e){let{queryString:t=!1,groupId:r}=e;const s=(0,i.k6)(),a=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l._X)(a),(0,n.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(s.location.search);t.set(a,e),s.replace({...s.location,search:t.toString()})}),[a,s])]}function m(e){const{defaultValue:t,queryString:r=!1,groupId:s}=e,a=u(e),[i,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[c,h]=x({queryString:r,groupId:s}),[m,j]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,a]=(0,d.Nk)(r);return[s,(0,n.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:s}),f=(()=>{const e=c??m;return p({value:e,tabValues:a})?e:null})();(0,o.Z)((()=>{f&&l(f)}),[f]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),j(e)}),[h,j,a]),tabValues:a}}var j=r(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=r(85893);function g(e){let{className:t,block:r,selectedValue:n,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.o5)(),d=e=>{const t=e.currentTarget,r=l.indexOf(t),s=o[r].value;s!==n&&(c(t),i(s))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;t=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;t=l[r]??l[l.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":r},t),children:o.map((e=>{let{value:t,label:r,attributes:a}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:h,onClick:d,...a,className:(0,s.Z)("tabs__item",f.tabItem,a?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function k(e){let{lazy:t,children:r,selectedValue:s}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function v(e){const t=m(e);return(0,b.jsxs)("div",{className:(0,s.Z)("tabs-container",f.tabList),children:[(0,b.jsx)(g,{...e,...t}),(0,b.jsx)(k,{...e,...t})]})}function E(e){const t=(0,j.Z)();return(0,b.jsx)(v,{...e,children:h(e.children)},String(t))}},56543:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/zkHeader-3a19f2ba3a4620aada5f95edc41dbc30.png"},61294:(e,t,r)=>{r.p},11151:(e,t,r)=>{r.d(t,{Z:()=>o,a:()=>i});var n=r(67294);const s={},a=n.createContext(s);function i(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);