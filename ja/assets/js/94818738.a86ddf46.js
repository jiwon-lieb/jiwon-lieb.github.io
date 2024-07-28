"use strict";(self.webpackChunkdocs_1=self.webpackChunkdocs_1||[]).push([[4108],{14669:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var t=o(85893),s=o(11151);const r={sidebar_position:3},i="3. SSH Tunneling",c={id:"build/nodes/collator/secure_setup_guide/ssh_tunneling",title:"3. SSH Tunneling",description:"Grafana runs an HTTP server on your local node so basically, we shouldn\u2019t access it directly from the outside.",source:"@site/docs/build/nodes/collator/secure_setup_guide/ssh_tunneling.md",sourceDirName:"build/nodes/collator/secure_setup_guide",slug:"/build/nodes/collator/secure_setup_guide/ssh_tunneling",permalink:"/ja/docs/build/nodes/collator/secure_setup_guide/ssh_tunneling",draft:!1,unlisted:!1,editUrl:"https://github.com/AstarNetwork/astar-docs/tree/main/docs/build/nodes/collator/secure_setup_guide/ssh_tunneling.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"2. Secure SSH Connection",permalink:"/ja/docs/build/nodes/collator/secure_setup_guide/secure_connection"},next:{title:"4. Building Your Collator",permalink:"/ja/docs/build/nodes/collator/secure_setup_guide/building_node"}},l={},a=[];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"3-ssh-tunneling",children:"3. SSH Tunneling"}),"\n",(0,t.jsx)(n.h1,{id:"ssh-tunneling",children:"SSH Tunneling"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Grafana"})," runs an ",(0,t.jsx)(n.strong,{children:"HTTP"})," server on your local node so basically, we shouldn\u2019t access it directly from the outside."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"SSH tunneling"})," is considered to be a safe way to make traffic transit from your node to your local computer (or even phone). The principle is to make the SSH client listen to a specific port on your local machine, ",(0,t.jsx)(n.strong,{children:"encrypt traffic through SSH"})," protocol, and forward it to the target port on your node."]}),"\n",(0,t.jsx)("center",{children:(0,t.jsx)("img",{src:"https://i.imgur.com/eImkfgG.png",border:"1"})}),"\n",(0,t.jsxs)(n.p,{children:["Of course, you could also configure Grafana to run an HTTPS server but we do not want to expose another open port. Since our data will be encrypted with SSH, ",(0,t.jsx)(n.strong,{children:"we do not need HTTPS"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Once we have finished installing Grafana on our node, we will access it through this address on our local machine: ",(0,t.jsx)(n.code,{children:"http://localhost:2022"})]}),"\n",(0,t.jsxs)(n.p,{children:[" As PuTTy is a very popular client usable on many OS and used in this guide, here is where you can configure local port forwarding. If you want to ",(0,t.jsx)(n.a,{href:"https://bldstackingnode.medium.com/monitoring-substrate-node-polkadot-kusama-parachains-validator-guide-922734ea4cdb#3351",children:"use OpenSSL please follow this guide"}),"."]}),"\n",(0,t.jsx)("center",{children:(0,t.jsx)("img",{src:"https://i.imgur.com/8csCM4y.png",border:"1"})}),"\n",(0,t.jsxs)(n.p,{children:["Inside the SSH | Tunnel\u2019s menu, just add the local port and destination then click ",(0,t.jsx)(n.em,{children:"Add"}),"."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"2022"})," is the local port we arbitrary chose (please use a different unused local port inside the range 1024\u201349151)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"3000"})," is Grafana\u2019s port"]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"Don\u2019t forget to save the session."})})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,n,o)=>{o.d(n,{Z:()=>c,a:()=>i});var t=o(67294);const s={},r=t.createContext(s);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);