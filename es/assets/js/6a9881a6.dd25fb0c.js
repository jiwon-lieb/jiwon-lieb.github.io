"use strict";(self.webpackChunkdocs_1=self.webpackChunkdocs_1||[]).push([[4388],{9810:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=t(85893),s=t(11151),o=t(74866),l=t(85162);const i={sidebar_position:3},a="Spin up a Collator",c={id:"build/nodes/collator/spinup_collator",title:"Spin up a Collator",description:"Collators are responsible for the network stability, it is very important to be able to react at any time of the day or night in case of trouble. We strongly encourage collators to set up a monitoring and alerting system, learn more about this from our secure setup guide.",source:"@site/docs/build/nodes/collator/spinup_collator.md",sourceDirName:"build/nodes/collator",slug:"/build/nodes/collator/spinup_collator",permalink:"/es/docs/build/nodes/collator/spinup_collator",draft:!1,unlisted:!1,editUrl:"https://github.com/AstarNetwork/astar-docs/tree/main/docs/build/nodes/collator/spinup_collator.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Collator Requirements",permalink:"/es/docs/build/nodes/collator/requirements"},next:{title:"Ultimate Beginners Guide",permalink:"/es/docs/build/nodes/collator/secure_setup_guide/"}},d={},u=[{value:"Service Parameters",id:"service-parameters",level:3},{value:"Verify synchronization",id:"verify-synchronization",level:3},{value:"Session Keys",id:"session-keys",level:3},{value:"Author session keys",id:"author-session-keys",level:4},{value:"Set session keys",id:"set-session-keys",level:4},{value:"Identity",id:"identity",level:3},{value:"Set identity",id:"set-identity",level:4},{value:"Request judgment",id:"request-judgment",level:4},{value:"Bond funds",id:"bond-funds",level:3},{value:"Production blocks",id:"production-blocks",level:3},{value:"Leave candidacy",id:"leave-candidacy",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"spin-up-a-collator",children:"Spin up a Collator"}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsxs)(n.p,{children:["Collators are responsible for the network stability, it is very important to be able to react at any time of the day or night in case of trouble. We strongly encourage collators to set up a monitoring and alerting system, learn more about this from our ",(0,r.jsx)(n.a,{href:"/docs/build/nodes/collator/secure_setup_guide/",children:"secure setup guide"}),"."]})}),"\n",(0,r.jsx)(n.h3,{id:"service-parameters",children:"Service Parameters"}),"\n",(0,r.jsxs)(o.Z,{children:[(0,r.jsx)(l.Z,{value:"astar",label:"Astar",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"./astar-collator \\\n  --state-pruning 1000 \\\n  --blocks-pruning 1000 \\\n  --collator \\\n  --name {COLLATOR_NAME} \\\n  --chain astar \\\n  --base-path /var/lib/astar \\\n  --telemetry-url 'wss://telemetry.polkadot.io/submit/0' \\\n  -- \\\n  --sync warp\n"})})}),(0,r.jsx)(l.Z,{value:"shiden",label:"Shiden",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"./astar-collator \\\n  --state-pruning 1000 \\\n  --blocks-pruning 1000 \\\n  --collator \\\n  --name {COLLATOR_NAME} \\\n  --chain shiden \\\n  --base-path /var/lib/astar \\\n  --telemetry-url 'wss://telemetry.polkadot.io/submit/0' \\\n  -- \\\n  --sync warp\n"})})}),(0,r.jsx)(l.Z,{value:"shibuya",label:"Shibuya",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"./astar-collator \\\n  --state-pruning 1000 \\\n  --blocks-pruning 1000 \\\n  --collator \\\n  --name {COLLATOR_NAME} \\\n  --chain shibuya \\\n  --base-path /var/lib/astar \\\n  --telemetry-url 'wss://telemetry.polkadot.io/submit/ 0' \\\n  -- \\\n  --sync warp\n"})})})]}),"\n",(0,r.jsx)(n.h3,{id:"verify-synchronization",children:"Verify synchronization"}),"\n",(0,r.jsxs)(n.p,{children:["Before jumping to the next steps, you have to wait until your node is ",(0,r.jsx)(n.strong,{children:"fully synchronized"}),". This can take a long time depending on the chain height. Please note that syncing to one of our networks requires the node to sync with the network and with the relay chain."]}),"\n",(0,r.jsx)(n.p,{children:"Check the current synchronization:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"journalctl -f -u shibuya-node -n100\n"})}),"\n",(0,r.jsx)(n.h3,{id:"session-keys",children:"Session Keys"}),"\n",(0,r.jsx)(n.h4,{id:"author-session-keys",children:"Author session keys"}),"\n",(0,r.jsx)(n.p,{children:"Run the following command to author session keys:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'curl -H "Content-Type: application/json" -d \'{"id":1, "jsonrpc":"2.0", "method": "author_rotateKeys", "params":[]}\' http://localhost:9944\n'})}),"\n",(0,r.jsx)(n.p,{children:"The result will look like this (you just need to copy the key):"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'{"jsonrpc":"2.0","result":"0x600e6cea49bdeaab301e9e03215c0bcebab3cafa608fe3b8fb6b07a820386048","id":1}\n'})}),"\n",(0,r.jsx)(n.h4,{id:"set-session-keys",children:"Set session keys"}),"\n",(0,r.jsx)(n.p,{children:"Go to the Polkadot.js portal and connect to respective network (Astar, Shiden or Shibuya)."}),"\n",(0,r.jsxs)(n.p,{children:["Go to ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Developper > Extrinsic"})})," and select your ",(0,r.jsx)(n.strong,{children:"collator account"})," and extrinsic type: ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"session / setKeys"})})]}),"\n",(0,r.jsxs)(n.p,{children:["Enter the ",(0,r.jsx)(n.strong,{children:"session keys"})," and set proof to ",(0,r.jsx)(n.code,{children:"0x00"}),":"]}),"\n",(0,r.jsx)("center",{children:(0,r.jsx)("img",{src:"https://i.imgur.com/fXfqGal.png",border:"1"})}),"\n",(0,r.jsx)(n.p,{children:"Submit the transaction."}),"\n",(0,r.jsx)(n.h3,{id:"identity",children:"Identity"}),"\n",(0,r.jsx)(n.h4,{id:"set-identity",children:"Set identity"}),"\n",(0,r.jsxs)(n.p,{children:["On the Polkadot.js portal select ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Accounts"})}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Open the 3 dots next to your collators address: ",(0,r.jsx)(n.strong,{children:"Set on-chain Identity"}),":"]}),"\n",(0,r.jsx)("center",{children:(0,r.jsx)("img",{src:"https://i.imgur.com/YIIWINt.png",border:"1"})}),"\n",(0,r.jsx)(n.p,{children:"Enter all fields you want to set:"}),"\n",(0,r.jsx)("center",{children:(0,r.jsx)("img",{src:"https://i.imgur.com/pkC4glq.png",border:"1"})}),"\n",(0,r.jsx)(n.p,{children:"Send the transaction."}),"\n",(0,r.jsx)(n.h4,{id:"request-judgment",children:"Request judgment"}),"\n",(0,r.jsxs)(n.p,{children:["On the Polkadot.js portal select ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Developer > Extrinsic"})}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Select your ",(0,r.jsx)(n.strong,{children:"collator account"})," and extrinsic type: ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"identity / requestJudgment"})}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Send the transaction."}),"\n",(0,r.jsx)(n.h3,{id:"bond-funds",children:"Bond funds"}),"\n",(0,r.jsxs)(n.p,{children:["To start collating, you need to have ",(0,r.jsx)(n.strong,{children:"32 000 SDN"})," tokens for Shiden or ",(0,r.jsx)(n.strong,{children:"3 200 000 ASTR"})," tokens for Astar."]}),"\n",(0,r.jsxs)(n.p,{children:["On the Polkadot.js portal select ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Developer > Extrinsic"})}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Select your ",(0,r.jsx)(n.strong,{children:"collator account"})," and extrinsic type: ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"CollatorSelection / registerAsCandidate"})}),":"]}),"\n",(0,r.jsx)("center",{children:(0,r.jsx)("img",{src:"https://i.imgur.com/3YvdJbt.png",border:"1"})}),"\n",(0,r.jsx)(n.p,{children:"Submit the transaction."}),"\n",(0,r.jsx)(n.h3,{id:"production-blocks",children:"Production blocks"}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["Onboarding takes place at ",(0,r.jsx)(n.code,{children:"n+1"})," session."]})}),"\n",(0,r.jsxs)(n.p,{children:["Once your collator is active, you will see your name inside ",(0,r.jsx)(n.strong,{children:"Network"})," tab every time you produce a block:"]}),"\n",(0,r.jsx)("center",{children:(0,r.jsx)("img",{src:"https://i.imgur.com/e70Tpbq.png",border:"1"})}),"\n",(0,r.jsx)(n.h3,{id:"leave-candidacy",children:"Leave candidacy"}),"\n",(0,r.jsx)(n.p,{children:"Once you become a collator and enter a session, you are required to produce blocks for that session. To avoid slashing, candidates must first initiate the leave process."}),"\n",(0,r.jsxs)(n.p,{children:["On the Polkadot.js portal select ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Developer > Extrinsic"})}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Select your ",(0,r.jsx)(n.strong,{children:"collator account"})," and extrinsic type: ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"CollatorSelection / leaveIntent"})}),":"]}),"\n",(0,r.jsx)("center",{children:(0,r.jsx)("img",{src:"/img/tutorial/collator-selection-leave-intent.png",border:"1"})}),"\n",(0,r.jsx)(n.p,{children:"The collator has now removed themselves from the next session. After the current session has ended, candidates can withdraw their bond."}),"\n",(0,r.jsxs)(n.p,{children:["On the Polkadot.js portal select ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Developer > Extrinsic"})}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Select your ",(0,r.jsx)(n.strong,{children:"collator account"})," and extrinsic type: ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"CollatorSelection / withdrawBond"})}),":"]}),"\n",(0,r.jsx)("center",{children:(0,r.jsx)("img",{src:"/img/tutorial/collator-selection-withdraw-bond.png",border:"1"})})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>l});t(67294);var r=t(86010);const s={tabItem:"tabItem_Ymn6"};var o=t(85893);function l(e){let{children:n,hidden:t,className:l}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,l),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>k});var r=t(67294),s=t(86010),o=t(12466),l=t(16550),i=t(20469),a=t(91980),c=t(67392),d=t(50012);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const s=(0,l.k6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,a._X)(o),(0,r.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(s.location.search);n.set(o,e),s.replace({...s.location,search:n.toString()})}),[o,s])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,o=h(e),[l,a]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:o}))),[c,u]=m({queryString:t,groupId:s}),[x,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,o]=(0,d.Nk)(t);return[s,(0,r.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:s}),j=(()=>{const e=c??x;return p({value:e,tabValues:o})?e:null})();(0,i.Z)((()=>{j&&a(j)}),[j]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);a(e),u(e),b(e)}),[u,b,o]),tabValues:o}}var b=t(72389);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=t(85893);function g(e){let{className:n,block:t,selectedValue:r,selectValue:l,tabValues:i}=e;const a=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),d=e=>{const n=e.currentTarget,t=a.indexOf(n),s=i[t].value;s!==r&&(c(n),l(s))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=a.indexOf(e.currentTarget)+1;n=a[t]??a[0];break}case"ArrowLeft":{const t=a.indexOf(e.currentTarget)-1;n=a[t]??a[a.length-1];break}}n?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>a.push(e),onKeyDown:u,onClick:d,...o,className:(0,s.Z)("tabs__item",j.tabItem,o?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function f(e){let{lazy:n,children:t,selectedValue:s}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function v(e){const n=x(e);return(0,y.jsxs)("div",{className:(0,s.Z)("tabs-container",j.tabList),children:[(0,y.jsx)(g,{...e,...n}),(0,y.jsx)(f,{...e,...n})]})}function k(e){const n=(0,b.Z)();return(0,y.jsx)(v,{...e,children:u(e.children)},String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>l});var r=t(67294);const s={},o=r.createContext(s);function l(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);