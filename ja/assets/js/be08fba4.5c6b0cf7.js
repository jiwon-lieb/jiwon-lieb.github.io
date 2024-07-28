"use strict";(self.webpackChunkdocs_1=self.webpackChunkdocs_1||[]).push([[5749],{67153:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>x,frontMatter:()=>l,metadata:()=>o,toc:()=>h});var t=r(85893),s=r(11151),i=r(74866),a=r(85162);const l={},d="Archive Node",o={id:"build/nodes/archive-node/index",title:"Archive Node",description:"Overview",source:"@site/docs/build/nodes/archive-node/index.md",sourceDirName:"build/nodes/archive-node",slug:"/build/nodes/archive-node/",permalink:"/ja/docs/build/nodes/archive-node/",draft:!1,unlisted:!1,editUrl:"https://github.com/AstarNetwork/astar-docs/tree/main/docs/build/nodes/archive-node/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Node Operators",permalink:"/ja/docs/build/nodes/"},next:{title:"Binary",permalink:"/ja/docs/build/nodes/archive-node/binary"}},c={},h=[{value:"Overview",id:"overview",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Machine",id:"machine",level:3},{value:"Ports",id:"ports",level:3},{value:"Installation",id:"installation",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"archive-node",children:"Archive Node"}),"\n","\n","\n",(0,t.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsxs)(n.p,{children:["An ",(0,t.jsx)(n.strong,{children:"archive node"})," stores the history of past blocks. Most of times, an archive node is used as ",(0,t.jsx)(n.strong,{children:"RPC endpoint"}),".\nRPC plays a vital role on our network: it connects users and dApps to the blockchain through WebSocket and HTTP endpoints. For example, our ",(0,t.jsx)(n.a,{href:"/docs/build/environment/endpoints",children:"public endpoints"})," run archive nodes for anyone to quickly connect to Astar chains."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"DApp projects"})," need to run their own RPC node as archive to the retrieve necessary blockchain data and not to rely on public infrastructure. Public endpoints respond slower because of the large amount of users connected and are rate limited."]}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsxs)(n.p,{children:["Be careful not to confuse with a ",(0,t.jsx)(n.strong,{children:"full node"})," that has a pruned database: a full node only stores the current state and most recent blocks (256 blocks by default) and uses much less storage space."]})}),"\n",(0,t.jsx)(n.p,{children:"We maintain 3 different networks: the testnet Shibuya, Shiden as a parachain of Kusama, and Astar as a parachain of Polkadot."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Astar chain"}),(0,t.jsx)(n.th,{children:"Relay Chain"}),(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"Token"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Testnet"}),(0,t.jsx)(n.td,{children:"Tokyo (hosted by Astar)"}),(0,t.jsx)(n.td,{children:"Shibuya"}),(0,t.jsx)(n.td,{children:"$SBY"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Shiden"}),(0,t.jsx)(n.td,{children:"Kusama"}),(0,t.jsx)(n.td,{children:"Shiden"}),(0,t.jsx)(n.td,{children:"$SDN"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Astar"}),(0,t.jsx)(n.td,{children:"Polkadot"}),(0,t.jsx)(n.td,{children:"Astar"}),(0,t.jsx)(n.td,{children:"$ASTR"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,t.jsx)(n.h3,{id:"machine",children:"Machine"}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Storage space will increase as the network grows."}),"\n",(0,t.jsx)(n.li,{children:"Archive nodes may require a larger server, depending on the amount and frequency of data requested by a dApp."}),"\n"]})}),"\n",(0,t.jsxs)(i.Z,{children:[(0,t.jsx)(a.Z,{value:"astar",label:"Astar",default:!0,children:(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Component"}),(0,t.jsx)(n.th,{children:"Requirement"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"System"}),(0,t.jsx)(n.td,{children:"Ubuntu 22.04"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"CPU"}),(0,t.jsx)(n.td,{children:"8 cores"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Memory"}),(0,t.jsx)(n.td,{children:"16 GB"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Hard Disk"}),(0,t.jsx)(n.td,{children:"500 GB SSD (NVMe preferable)"})]})]})]})}),(0,t.jsx)(a.Z,{value:"shiden",label:"Shiden",default:!0,children:(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Component"}),(0,t.jsx)(n.th,{children:"Requirement"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"System"}),(0,t.jsx)(n.td,{children:"Ubuntu 22.04"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"CPU"}),(0,t.jsx)(n.td,{children:"8 cores"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Memory"}),(0,t.jsx)(n.td,{children:"16 GB"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Hard Disk"}),(0,t.jsx)(n.td,{children:"500 GB SSD (NVMe preferable)"})]})]})]})}),(0,t.jsx)(a.Z,{value:"shibuya",label:"Shibuya",default:!0,children:(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Component"}),(0,t.jsx)(n.th,{children:"Requirement"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"System"}),(0,t.jsx)(n.td,{children:"Ubuntu 22.04"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"CPU"}),(0,t.jsx)(n.td,{children:"4 cores"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Memory"}),(0,t.jsx)(n.td,{children:"8 GB"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Hard Disk"}),(0,t.jsx)(n.td,{children:"200 GB SSD (NVMe preferable)"})]})]})]})})]}),"\n",(0,t.jsx)(n.h3,{id:"ports",children:"Ports"}),"\n",(0,t.jsx)(n.p,{children:"The Astar node runs in parachain configuration, meaning they will listen at different ports by default for both the parachain and the embedded relay chain."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Parachain Port"}),(0,t.jsx)(n.th,{children:"Relaychain Port"}),(0,t.jsx)(n.th,{children:"Custom Port Flag"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"P2P"}),(0,t.jsx)(n.td,{children:"30333"}),(0,t.jsx)(n.td,{children:"30334"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"--port"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"RPC"}),(0,t.jsx)(n.td,{children:"9944"}),(0,t.jsx)(n.td,{children:"9945"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"--rpc-port"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Prometheus"}),(0,t.jsx)(n.td,{children:"9615"}),(0,t.jsx)(n.td,{children:"9616"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"--prometheus-port"})})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["For all types of nodes, ports ",(0,t.jsx)(n.code,{children:"30333"})," and ",(0,t.jsx)(n.code,{children:"30334"})," need to be opened for incoming traffic at the Firewall.\n",(0,t.jsx)(n.strong,{children:"Collator nodes should not expose WS and RPC ports to the public."})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsx)(n.p,{children:"There are 2 different ways to run an Astar node:"}),"\n",(0,t.jsxs)(n.p,{children:["Using ",(0,t.jsx)(n.a,{href:"/docs/build/nodes/archive-node/binary",children:"Binary"})," - run the node from binary file and set it up as systemd service"]}),"\n",(0,t.jsxs)(n.p,{children:["Using ",(0,t.jsx)(n.a,{href:"/docs/build/nodes/archive-node/docker",children:"Docker"})," - run the node within a Docker container"]})]})}function x(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},85162:(e,n,r)=>{r.d(n,{Z:()=>a});r(67294);var t=r(86010);const s={tabItem:"tabItem_Ymn6"};var i=r(85893);function a(e){let{children:n,hidden:r,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,t.Z)(s.tabItem,a),hidden:r,children:n})}},74866:(e,n,r)=>{r.d(n,{Z:()=>k});var t=r(67294),s=r(86010),i=r(12466),a=r(16550),l=r(20469),d=r(91980),o=r(67392),c=r(50012);function h(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:s}}=e;return{value:n,label:r,attributes:t,default:s}}))}(r);return function(e){const n=(0,o.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function x(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function j(e){let{queryString:n=!1,groupId:r}=e;const s=(0,a.k6)(),i=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,d._X)(i),(0,t.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(s.location.search);n.set(i,e),s.replace({...s.location,search:n.toString()})}),[i,s])]}function p(e){const{defaultValue:n,queryString:r=!1,groupId:s}=e,i=u(e),[a,d]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!x({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:i}))),[o,h]=j({queryString:r,groupId:s}),[p,b]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,i]=(0,c.Nk)(r);return[s,(0,t.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:s}),f=(()=>{const e=o??p;return x({value:e,tabValues:i})?e:null})();(0,l.Z)((()=>{f&&d(f)}),[f]);return{selectedValue:a,selectValue:(0,t.useCallback)((e=>{if(!x({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);d(e),h(e),b(e)}),[h,b,i]),tabValues:i}}var b=r(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=r(85893);function v(e){let{className:n,block:r,selectedValue:t,selectValue:a,tabValues:l}=e;const d=[],{blockElementScrollPositionUntilNextRender:o}=(0,i.o5)(),c=e=>{const n=e.currentTarget,r=d.indexOf(n),s=l[r].value;s!==t&&(o(n),a(s))},h=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=d.indexOf(e.currentTarget)+1;n=d[r]??d[0];break}case"ArrowLeft":{const r=d.indexOf(e.currentTarget)-1;n=d[r]??d[d.length-1];break}}n?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":r},n),children:l.map((e=>{let{value:n,label:r,attributes:i}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>d.push(e),onKeyDown:h,onClick:c,...i,className:(0,s.Z)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function y(e){let{lazy:n,children:r,selectedValue:s}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function g(e){const n=p(e);return(0,m.jsxs)("div",{className:(0,s.Z)("tabs-container",f.tabList),children:[(0,m.jsx)(v,{...e,...n}),(0,m.jsx)(y,{...e,...n})]})}function k(e){const n=(0,b.Z)();return(0,m.jsx)(g,{...e,children:h(e.children)},String(n))}},11151:(e,n,r)=>{r.d(n,{Z:()=>l,a:()=>a});var t=r(67294);const s={},i=t.createContext(s);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);