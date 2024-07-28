"use strict";(self.webpackChunkdocs_1=self.webpackChunkdocs_1||[]).push([[1470],{43813:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var t=r(85893),s=r(11151),a=r(74866),l=r(85162);const o={sidebar_position:4},i="4. Building Your Collator",c={id:"build/nodes/collator/secure_setup_guide/building_node",title:"4. Building Your Collator",description:"Let's get started",source:"@site/docs/build/nodes/collator/secure_setup_guide/building_node.md",sourceDirName:"build/nodes/collator/secure_setup_guide",slug:"/build/nodes/collator/secure_setup_guide/building_node",permalink:"/docs/build/nodes/collator/secure_setup_guide/building_node",draft:!1,unlisted:!1,editUrl:"https://github.com/AstarNetwork/astar-docs/tree/main/docs/build/nodes/collator/secure_setup_guide/building_node.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"3. SSH Tunneling",permalink:"/docs/build/nodes/collator/secure_setup_guide/ssh_tunneling"},next:{title:"5. Node Monitoring",permalink:"/docs/build/nodes/collator/secure_setup_guide/node_monitoring"}},d={},u=[{value:"Let&#39;s get started",id:"lets-get-started",level:2},{value:"Build the node",id:"build-the-node",level:2},{value:"Build from source",id:"build-from-source",level:3},{value:"Build from binaries",id:"build-from-binaries",level:3},{value:"Run a Docker container",id:"run-a-docker-container",level:3},{value:"Launch Your Collator",id:"launch-your-collator",level:2},{value:"Set systemd service",id:"set-systemd-service",level:2},{value:"Snapshot",id:"snapshot",level:3},{value:"Finalizing",id:"finalizing",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"4-building-your-collator",children:"4. Building Your Collator"}),"\n","\n","\n",(0,t.jsx)(n.h2,{id:"lets-get-started",children:"Let's get started"}),"\n",(0,t.jsx)(n.p,{children:"Let's start with updating our server. Connect to your server and update:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"sudo apt-get update\nsudo apt-get upgrade\nsudo apt install -y adduser libfontconfig1\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["the last command (related to ",(0,t.jsx)(n.code,{children:"libfontconfig1"}),") is optional and required if you want install Grafana in the later sections of Secure Setup Guide)."]})}),"\n",(0,t.jsx)(n.h2,{id:"build-the-node",children:"Build the node"}),"\n",(0,t.jsx)(n.p,{children:"To build a collator node, you have 3 different options"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"From source"}),": experience with using Linux"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"From binary"}),": easiest way to start and update node with new releases"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Run a Docker container"}),": Docker background requires"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"build-from-source",children:"Build from source"}),"\n",(0,t.jsx)(n.p,{children:"Building a node from source code is the most complicated path, but will also provide the best optimized node version for your server."}),"\n",(0,t.jsxs)(n.p,{children:["Make sure your server is ready to build a collator. The instructions that follow do not go into details which you can find in official ",(0,t.jsx)(n.a,{href:"https://docs.substrate.io/install/linux/",children:"Substrate Docs"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"## Prerequisites (Software required for compilation)\n##\nsudo apt install build-essential\nsudo apt install --assume-yes git clang curl cmake llvm protobuf-compiler\nsudo apt update\n\n## Install Rust\n##\ncurl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\nsource $HOME/.cargo/env\nrustup update nightly\nrustup target add wasm32-unknown-unknown --toolchain nightly\n"})}),"\n",(0,t.jsx)(n.p,{children:"Clone the Astar repository:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"git clone https://github.com/AstarNetwork/Astar.git\ncd Astar\n"})}),"\n",(0,t.jsx)(n.p,{children:"Make sure you have the latest commit in place:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"git checkout\ngit pull\n"})}),"\n",(0,t.jsx)(n.p,{children:"Compile the node binary:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'CARGO_PROFILE_RELEASE_LTO=true RUSTFLAGS="-C codegen-units=1" cargo build --release\n'})}),"\n",(0,t.jsx)(n.h3,{id:"build-from-binaries",children:"Build from binaries"}),"\n",(0,t.jsxs)(n.p,{children:["The easiest way to install an Astar node is to download the binaries. You can find them here: ",(0,t.jsx)(n.a,{href:"https://github.com/AstarNetwork/Astar",children:"Astar releases"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Get the file and extract:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'wget $(curl -s https://api.github.com/repos/AstarNetwork/Astar/releases/latest | grep "tag_name" | awk \'{print "https://github.com/AstarNetwork/Astar/releases/download/" substr($2, 2, length($2)-3) "/astar-collator-v" substr($2, 3, length($2)-4) "-ubuntu-x86_64.tar.gz"}\')\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"tar -xvf astar-collator*.tar.gz\n"})}),"\n",(0,t.jsx)(n.h3,{id:"run-a-docker-container",children:"Run a Docker container"}),"\n",(0,t.jsxs)(n.p,{children:["You can find here the ",(0,t.jsx)(n.a,{href:"https://hub.docker.com/r/staketechnologies/astar-collator",children:"Astar Docker hub"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Pull the latest Docker version"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"docker pull staketechnologies/astar-collator:latest\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"launch-your-collator",children:"Launch Your Collator"}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsxs)(n.p,{children:["The following steps are suitable for ",(0,t.jsx)(n.strong,{children:"binary"})," usage (built from source or downloaded).\nIn case you want to run a Docker container, you will have to adapt those."]})}),"\n",(0,t.jsxs)(n.p,{children:["Create a dedicated user for the node and move the ",(0,t.jsx)(n.strong,{children:"node binary"})," (in this example, username is ",(0,t.jsx)(n.code,{children:"astar"}),"):"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"sudo useradd --no-create-home --shell /usr/sbin/nologin astar\nsudo cp ./astar-collator /usr/local/bin\nsudo chmod +x /usr/local/bin/astar-collator\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Create a dedicated directory for the ",(0,t.jsx)(n.strong,{children:"chain storage data"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"sudo mkdir /var/lib/astar\nsudo chown astar:astar /var/lib/astar\n"})}),"\n",(0,t.jsx)(n.p,{children:"Now, let's go to our binary directory and start the collator manually:"}),"\n",(0,t.jsxs)(a.Z,{children:[(0,t.jsx)(l.Z,{value:"astar",label:"Astar",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"cd /usr/local/bin\n\nsudo -u astar ./astar-collator --collator --chain astar --state-pruning 1000 --name {COLLATOR_NAME} --base-path /var/lib/astar --telemetry-url 'wss://telemetry.polkadot.io/submit/ 0' -- --sync warp\n"})})}),(0,t.jsx)(l.Z,{value:"shiden",label:"Shiden",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"cd /usr/local/bin\n\nsudo -u astar ./astar-collator --collator --chain shiden --state-pruning 1000 --name {COLLATOR_NAME} --base-path /var/lib/astar --telemetry-url 'wss://telemetry.polkadot.io/submit/ 0' -- --sync warp\n"})})}),(0,t.jsx)(l.Z,{value:"shibuya",label:"Shibuya",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"cd /usr/local/bin\n\nsudo -u astar ./astar-collator --collator --chain shibuya --state-pruning 1000 --name {COLLATOR_NAME} --base-path /var/lib/astar --telemetry-url 'wss://telemetry.polkadot.io/submit/ 0' -- --sync warp\n"})})})]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["Type in the place of ",(0,t.jsx)(n.strong,{children:"{COLLATOR_NAME}"}),", what you would like to call your node."]})}),"\n",(0,t.jsxs)(n.p,{children:["See your node syncing on ",(0,t.jsx)(n.a,{href:"https://telemetry.polkadot.io/#list/0x9eb76c5184c4ab8679d2d5d819fdf90b9c001403e9e17da2e14b6d8aec4029c6",children:"https://telemetry.polkadot.io/"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Useful commands to be used in screen:\n",(0,t.jsxs)(n.em,{children:[(0,t.jsx)(n.code,{children:"ctrl+a+d"})," (detach actual session)"]}),"\n",(0,t.jsxs)(n.em,{children:[(0,t.jsx)(n.code,{children:"screen ls"})," (this will list all running screens)"]}),"\n",(0,t.jsxs)(n.em,{children:[(0,t.jsx)(n.code,{children:"screen -r"})," (restore a screen session)"]})]}),"\n",(0,t.jsx)(n.p,{children:"Stop the manual node and kill the screen session:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"ctrl+c\nctrl+a+k\n"})}),"\n",(0,t.jsx)(n.h2,{id:"set-systemd-service",children:"Set systemd service"}),"\n",(0,t.jsxs)(n.p,{children:["To run a stable collator node, a ",(0,t.jsx)(n.strong,{children:"systemd service"})," has to be set and activated. This will ensure that the node is restarting even after a server reboot."]}),"\n",(0,t.jsx)(n.p,{children:"Create a service file"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"sudo nano /etc/systemd/system/astar.service\n"})}),"\n",(0,t.jsx)(n.p,{children:"Add service parameters (this example is for Astar Network):"}),"\n",(0,t.jsxs)(a.Z,{children:[(0,t.jsx)(l.Z,{value:"astar",label:"Astar",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"[Unit]\nDescription=Astar Collator\n\n[Service]\nUser=astar\nGroup=astar\n  \nExecStart=/usr/local/bin/astar-collator \\\n  --state-pruning archive \\\n  --collator \\\n  --name {COLLATOR_NAME} \\\n  --chain astar \\\n  --base-path /var/lib/astar \\\n  --telemetry-url 'wss://telemetry.polkadot.io/submit/ 0' \\\n  -- \\\n  --sync warp\n\nRestart=always\nRestartSec=120\n\n[Install]\nWantedBy=multi-user.target\n"})})}),(0,t.jsx)(l.Z,{value:"shiden",label:"Shiden",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"[Unit]\nDescription=Astar Collator\n\n[Service]\nUser=astar\nGroup=astar\n  \nExecStart=/usr/local/bin/astar-collator \\\n  --pruning archive \\\n  --collator \\\n  --name {COLLATOR_NAME} \\\n  --chain shiden \\\n  --base-path /var/lib/astar \\\n  --telemetry-url 'wss://telemetry.polkadot.io/submit/ 0' \\\n  -- \\\n  --sync warp\n\nRestart=always\nRestartSec=120\n\n[Install]\nWantedBy=multi-user.target\n"})})}),(0,t.jsx)(l.Z,{value:"shibuya",label:"Shibuya",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"[Unit]\nDescription=Astar Collator\n\n[Service]\nUser=astar\nGroup=astar\n  \nExecStart=/usr/local/bin/astar-collator \\\n  --pruning archive \\\n  --collator \\\n  --name {COLLATOR_NAME} \\\n  --chain shibuya \\\n  --base-path /var/lib/astar \\\n  --telemetry-url 'wss://telemetry.polkadot.io/submit/ 0' \\\n  -- \\\n  --sync warp\n\nRestart=always\nRestartSec=120\n\n[Install]\nWantedBy=multi-user.target\n"})})})]}),"\n",(0,t.jsx)(n.p,{children:"Start the service:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"sudo systemctl start astar.service\n"})}),"\n",(0,t.jsx)(n.p,{children:"Check the node log and that everything is syncing fine:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"journalctl -f -u astar.service -n100\n"})}),"\n",(0,t.jsx)(n.p,{children:"Enable the service:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"sudo systemctl enable astar.service\n"})}),"\n",(0,t.jsx)(n.h3,{id:"snapshot",children:"Snapshot"}),"\n",(0,t.jsxs)(n.p,{children:["Please refer to the ",(0,t.jsx)(n.a,{href:"/docs/build/nodes/snapshots",children:(0,t.jsx)(n.strong,{children:"snapshot page"})}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"finalizing",children:"Finalizing"}),"\n",(0,t.jsx)(n.p,{children:"To finalize your collator you need to:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Setup an account"}),"\n",(0,t.jsx)(n.li,{children:"Author your session key"}),"\n",(0,t.jsx)(n.li,{children:"Set up your session key"}),"\n",(0,t.jsx)(n.li,{children:"Verify your identity"}),"\n",(0,t.jsx)(n.li,{children:"Bond tokens"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["this part is covered in chapter ",(0,t.jsx)(n.a,{href:"/docs/build/nodes/collator/spinup_collator",children:"Spin up a Collator"})]})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},85162:(e,n,r)=>{r.d(n,{Z:()=>l});r(67294);var t=r(86010);const s={tabItem:"tabItem_Ymn6"};var a=r(85893);function l(e){let{children:n,hidden:r,className:l}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,t.Z)(s.tabItem,l),hidden:r,children:n})}},74866:(e,n,r)=>{r.d(n,{Z:()=>w});var t=r(67294),s=r(86010),a=r(12466),l=r(16550),o=r(20469),i=r(91980),c=r(67392),d=r(50012);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:s}}=e;return{value:n,label:r,attributes:t,default:s}}))}(r);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function b(e){let{queryString:n=!1,groupId:r}=e;const s=(0,l.k6)(),a=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,i._X)(a),(0,t.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(s.location.search);n.set(a,e),s.replace({...s.location,search:n.toString()})}),[a,s])]}function x(e){const{defaultValue:n,queryString:r=!1,groupId:s}=e,a=h(e),[l,i]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:a}))),[c,u]=b({queryString:r,groupId:s}),[x,m]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,a]=(0,d.Nk)(r);return[s,(0,t.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:s}),j=(()=>{const e=c??x;return p({value:e,tabValues:a})?e:null})();(0,o.Z)((()=>{j&&i(j)}),[j]);return{selectedValue:l,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),m(e)}),[u,m,a]),tabValues:a}}var m=r(72389);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=r(85893);function g(e){let{className:n,block:r,selectedValue:t,selectValue:l,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.o5)(),d=e=>{const n=e.currentTarget,r=i.indexOf(n),s=o[r].value;s!==t&&(c(n),l(s))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;n=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;n=i[r]??i[i.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":r},n),children:o.map((e=>{let{value:n,label:r,attributes:a}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>i.push(e),onKeyDown:u,onClick:d,...a,className:(0,s.Z)("tabs__item",j.tabItem,a?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function v(e){let{lazy:n,children:r,selectedValue:s}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function y(e){const n=x(e);return(0,f.jsxs)("div",{className:(0,s.Z)("tabs-container",j.tabList),children:[(0,f.jsx)(g,{...e,...n}),(0,f.jsx)(v,{...e,...n})]})}function w(e){const n=(0,m.Z)();return(0,f.jsx)(y,{...e,children:u(e.children)},String(n))}},11151:(e,n,r)=>{r.d(n,{Z:()=>o,a:()=>l});var t=r(67294);const s={},a=t.createContext(s);function l(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);