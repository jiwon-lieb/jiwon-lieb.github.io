"use strict";(self.webpackChunkdocs_1=self.webpackChunkdocs_1||[]).push([[8466],{23394:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>h});var a=r(85893),t=r(11151),s=r(74866),o=r(85162);const i={sidebar_position:2},l="Docker",d={id:"build/nodes/archive-node/docker",title:"Docker",description:"A Docker container allows you to easily run a node without depending on the platform it is running on. This method should only be used if you already have experience with Docker containers.",source:"@site/docs/build/nodes/archive-node/docker.md",sourceDirName:"build/nodes/archive-node",slug:"/build/nodes/archive-node/docker",permalink:"/docs/build/nodes/archive-node/docker",draft:!1,unlisted:!1,editUrl:"https://github.com/AstarNetwork/astar-docs/tree/main/docs/build/nodes/archive-node/docker.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Binary",permalink:"/docs/build/nodes/archive-node/binary"},next:{title:"Nginx Server",permalink:"/docs/build/nodes/archive-node/nginx"}},c={},h=[{value:"Installation",id:"installation",level:2},{value:"Start Docker node",id:"start-docker-node",level:2},{value:"Next steps",id:"next-steps",level:2},{value:"Extra Operations",id:"extra-operations",level:2},{value:"Get node logs",id:"get-node-logs",level:3},{value:"Indexers and Oracles",id:"indexers-and-oracles",level:3},{value:"Upgrade node",id:"upgrade-node",level:2},{value:"Purge node",id:"purge-node",level:3},{value:"Snapshot",id:"snapshot",level:3}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"docker",children:"Docker"}),"\n",(0,a.jsxs)(n.p,{children:["A ",(0,a.jsx)(n.strong,{children:"Docker container"})," allows you to easily run a node without depending on the platform it is running on. This method should only be used if you already have experience with Docker containers."]}),"\n",(0,a.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,a.jsxs)(n.p,{children:["Start by installing docker: ",(0,a.jsx)(n.a,{href:"https://linuxize.com/post/how-to-install-and-use-docker-on-ubuntu-20-04/",children:"How to install Docker on Ubuntu"})]}),"\n",(0,a.jsxs)(n.p,{children:["Create a local directory for the ",(0,a.jsx)(n.strong,{children:"chain storage data"})," and a dedicated user:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"sudo mkdir /var/lib/astar\nsudo useradd --no-create-home --shell /usr/sbin/nologin astar\nsudo chown astar:astar /var/lib/astar\n"})}),"\n",(0,a.jsx)(n.h2,{id:"start-docker-node",children:"Start Docker node"}),"\n",(0,a.jsx)(n.p,{children:"This guide goes over the process of starting a container with both WS and RPC endpoints. For a single type of endpoint, simply remove the unnecessary port and command."}),"\n",(0,a.jsx)(n.p,{children:"Launch the docker node in detached mode:"}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsx)(n.p,{children:"Make sure to change the {NODE_NAME}"})}),"\n",(0,a.jsxs)(s.Z,{children:[(0,a.jsx)(o.Z,{value:"astar",label:"Astar",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"docker run -d \\\n--name astar-container \\\n-u $(id -u astar):$(id -g astar) \\\n-p 30333:30333 \\\n-p 9944:9944 \\\n-v \"/var/lib/astar/:/data\" \\\nstaketechnologies/astar-collator:latest \\\nastar-collator \\\n--pruning archive \\\n--rpc-cors all \\\n--name {NODE_NAME} \\\n--chain astar \\\n--base-path /data \\\n--rpc-external \\\n--rpc-methods Safe \\\n--rpc-max-request-size 1 \\\n--rpc-max-response-size 1 \\\n--telemetry-url 'wss://telemetry.polkadot.io/submit/ 0'\n"})})}),(0,a.jsx)(o.Z,{value:"shiden",label:"Shiden",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"docker run -d \\\n--name shiden-container \\\n-u $(id -u astar):$(id -g astar) \\\n-p 30333:30333 \\\n-p 9944:9944 \\\n-v \"/var/lib/astar/:/data\" \\\nstaketechnologies/astar-collator:latest \\\nastar-collator \\\n--pruning archive \\\n--rpc-cors all \\\n--name {NODE_NAME} \\\n--chain shiden \\\n--base-path /data \\\n--rpc-external \\\n--rpc-methods Safe \\\n--rpc-max-request-size 1 \\\n--rpc-max-response-size 1 \\\n--telemetry-url 'wss://telemetry.polkadot.io/submit/ 0'\n"})})}),(0,a.jsx)(o.Z,{value:"shibuya",label:"Shibuya",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"docker run -d \\\n--name shibuya-container \\\n-u $(id -u astar):$(id -g astar) \\\n-p 30333:30333 \\\n-p 9944:9944 \\\n-v \"/var/lib/astar/:/data\" \\\nstaketechnologies/astar-collator:latest \\\nastar-collator \\\n--pruning archive \\\n--rpc-cors all \\\n--name {NODE_NAME} \\\n--chain shibuya \\\n--base-path /data \\\n--rpc-external \\\n--rpc-methods Safe \\\n--rpc-max-request-size 1 \\\n--rpc-max-response-size 1 \\\n--telemetry-url 'wss://telemetry.polkadot.io/submit/ 0'\n"})})})]}),"\n",(0,a.jsx)(n.p,{children:"Test the node health via the RPC port with this command:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:'curl -H "Content-Type: application/json" --data \'{ "jsonrpc":"2.0", "method":"system_health", "params":[],"id":1 }\' localhost:9944\n'})}),"\n",(0,a.jsx)(n.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,a.jsxs)(n.p,{children:["In any case, wait for the chain to be fully synchronized by checking the ",(0,a.jsx)(n.a,{href:"/docs/build/nodes/archive-node/binary#get-node-logs",children:"node log"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"How the archive node will be used will largely determine what steps to follow next:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["If accessing the node publicly, running an ",(0,a.jsx)(n.a,{href:"/docs/build/nodes/archive-node/nginx",children:"nginx server"})," is the recommended option."]}),"\n",(0,a.jsxs)(n.li,{children:["If the dApp is running on the same server as the node, then it can be accessed directly with the ",(0,a.jsx)(n.code,{children:"localhost"})," address. This setup is recommended for testing purposes only."]}),"\n",(0,a.jsxs)(n.li,{children:["If running the node locally for testing purposes, switch networks in ",(0,a.jsx)(n.a,{href:"https://polkadot.js.org/apps",children:"Polkadot.js portal"})," to explore the chain:"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"1",src:r(66215).Z+"",width:"331",height:"528"})}),"\n",(0,a.jsx)(n.h2,{id:"extra-operations",children:"Extra Operations"}),"\n",(0,a.jsx)(n.h3,{id:"get-node-logs",children:"Get node logs"}),"\n",(0,a.jsx)(n.p,{children:"To obtain the last 100 lines from the node logs, use the following command:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:'docker logs -f -n 100 $(docker ps -aq --filter name="{CHAIN}-container")\n'})}),"\n",(0,a.jsxs)(n.p,{children:["replacing ",(0,a.jsx)(n.code,{children:"{CHAIN}"})," with ",(0,a.jsx)(n.code,{children:"astar"}),", ",(0,a.jsx)(n.code,{children:"shiden"}),", or ",(0,a.jsx)(n.code,{children:"shibuya"})]}),"\n",(0,a.jsx)(n.p,{children:"eg."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:'docker logs -f -n 100 $(docker ps -aq --filter name="astar-container")\n'})}),"\n",(0,a.jsx)(n.h3,{id:"indexers-and-oracles",children:"Indexers and Oracles"}),"\n",(0,a.jsxs)(n.p,{children:["To access data from indexers (like The Graph) or Oracles (like Chainlink), add the follwing debug flags to the node launch command, after the ",(0,a.jsx)(n.code,{children:"astar-collator"})," line:"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"--ethapi=debug"})}),"\n",(0,a.jsx)(n.h2,{id:"upgrade-node",children:"Upgrade node"}),"\n",(0,a.jsxs)(n.p,{children:["When a node upgrade is necessary, node operators are notified with instructions in the ",(0,a.jsx)(n.a,{href:"https://t.me/+cL4tGZiFAsJhMGJk",children:"Astar Dev Announcement Telegram"}),", ",(0,a.jsx)(n.a,{href:"https://discord.gg/Z3nC9U4",children:"Astar Discord"}),", and ",(0,a.jsx)(n.a,{href:"https://matrix.to/#/#shiden-runtime-ann:matrix.org",children:"Astar Node Upgrade Element channel"}),". Join and follow any of these channels to receive news about node updates and node upgrades."]}),"\n",(0,a.jsx)(n.p,{children:"To upgrade to the latest node version, stop and remove the actual container:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:'docker stop $(docker ps -q --filter name="{CHAIN}-container")\ndocker rm $(docker ps -a -q --filter name="{CHAIN}-container")\n'})}),"\n",(0,a.jsxs)(n.p,{children:["where ",(0,a.jsx)(n.code,{children:"{CHAIN}"})," is ",(0,a.jsx)(n.code,{children:"astar"}),", ",(0,a.jsx)(n.code,{children:"shiden"}),", or ",(0,a.jsx)(n.code,{children:"shibuya"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:['Then start a new container with the information under "Start Docker Node". Chain data will be kept on your machine under ',(0,a.jsx)(n.code,{children:"/var/lib/astar/"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"purge-node",children:"Purge node"}),"\n",(0,a.jsx)(n.p,{children:"To start a new container from scratch without any chain data, simply remove the container and wipe the chain data directory:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:'docker rm -f $(docker ps -a -q --filter name="CHAIN-container")\nsudo rm -R /var/lib/astar/*\n'})}),"\n",(0,a.jsxs)(n.p,{children:["where ",(0,a.jsx)(n.code,{children:"CHAIN"})," is ",(0,a.jsx)(n.code,{children:"astar"}),", ",(0,a.jsx)(n.code,{children:"shiden"}),", or ",(0,a.jsx)(n.code,{children:"shibuya"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Then start a new container by following the instructions under the ",(0,a.jsx)(n.a,{href:"/docs/build/nodes/archive-node/docker#start-docker-node",children:"Start Docker node"})," section."]}),"\n",(0,a.jsx)(n.h3,{id:"snapshot",children:"Snapshot"}),"\n",(0,a.jsxs)(n.p,{children:["Please refer to ",(0,a.jsx)(n.a,{href:"/docs/build/nodes/snapshots/",children:(0,a.jsx)(n.strong,{children:"snapshot page"})}),".\n:::"]})]})}function p(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},85162:(e,n,r)=>{r.d(n,{Z:()=>o});r(67294);var a=r(86010);const t={tabItem:"tabItem_Ymn6"};var s=r(85893);function o(e){let{children:n,hidden:r,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.Z)(t.tabItem,o),hidden:r,children:n})}},74866:(e,n,r)=>{r.d(n,{Z:()=>y});var a=r(67294),t=r(86010),s=r(12466),o=r(16550),i=r(20469),l=r(91980),d=r(67392),c=r(50012);function h(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:r}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:r,attributes:a,default:t}}=e;return{value:n,label:r,attributes:a,default:t}}))}(r);return function(e){const n=(0,d.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:r}=e;const t=(0,o.k6)(),s=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,l._X)(s),(0,a.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(t.location.search);n.set(s,e),t.replace({...t.location,search:n.toString()})}),[s,t])]}function x(e){const{defaultValue:n,queryString:r=!1,groupId:t}=e,s=u(e),[o,l]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:s}))),[d,h]=m({queryString:r,groupId:t}),[x,g]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,s]=(0,c.Nk)(r);return[t,(0,a.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:t}),b=(()=>{const e=d??x;return p({value:e,tabValues:s})?e:null})();(0,i.Z)((()=>{b&&l(b)}),[b]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),g(e)}),[h,g,s]),tabValues:s}}var g=r(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=r(85893);function j(e){let{className:n,block:r,selectedValue:a,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),c=e=>{const n=e.currentTarget,r=l.indexOf(n),t=i[r].value;t!==a&&(d(n),o(t))},h=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;n=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;n=l[r]??l[l.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.Z)("tabs",{"tabs--block":r},n),children:i.map((e=>{let{value:n,label:r,attributes:s}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>l.push(e),onKeyDown:h,onClick:c,...s,className:(0,t.Z)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":a===n}),children:r??n},n)}))})}function v(e){let{lazy:n,children:r,selectedValue:t}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===t));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function k(e){const n=x(e);return(0,f.jsxs)("div",{className:(0,t.Z)("tabs-container",b.tabList),children:[(0,f.jsx)(j,{...e,...n}),(0,f.jsx)(v,{...e,...n})]})}function y(e){const n=(0,g.Z)();return(0,f.jsx)(k,{...e,children:h(e.children)},String(n))}},66215:(e,n,r)=>{r.d(n,{Z:()=>a});const a=r.p+"assets/images/1-8e0f0b65e33be83e0e787d65faee3bf3.png"},11151:(e,n,r)=>{r.d(n,{Z:()=>i,a:()=>o});var a=r(67294);const t={},s=a.createContext(t);function o(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);