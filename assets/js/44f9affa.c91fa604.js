"use strict";(self.webpackChunkdocs_1=self.webpackChunkdocs_1||[]).push([[3238],{86888:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>a});var i=r(85893),n=r(11151);const o={sidebar_position:3},s="Deploy Astar Portal on Vercel",l={id:"build/builder-guides/integration_toolings/deploy-astar-portal",title:"Deploy Astar Portal on Vercel",description:"Overview",source:"@site/docs/build/builder-guides/integration_toolings/deploy-astar-portal.md",sourceDirName:"build/builder-guides/integration_toolings",slug:"/build/builder-guides/integration_toolings/deploy-astar-portal",permalink:"/docs/build/builder-guides/integration_toolings/deploy-astar-portal",draft:!1,unlisted:!1,editUrl:"https://github.com/AstarNetwork/astar-docs/tree/main/docs/build/builder-guides/integration_toolings/deploy-astar-portal.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Add wallets into Astar Portal",permalink:"/docs/build/builder-guides/integration_toolings/add-wallets-to-portal"},next:{title:"Deploying Astar Blockchain HTTP Server using API Sidecar",permalink:"/docs/build/builder-guides/integration_toolings/using-sidecar"}},d={},a=[{value:"Overview",id:"overview",level:2},{value:"Deploying with Vercel",id:"deploying-with-vercel",level:2},{value:"Obtain the deployed URL",id:"obtain-the-deployed-url",level:2},{value:"References",id:"references",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"deploy-astar-portal-on-vercel",children:"Deploy Astar Portal on Vercel"}),"\n",(0,i.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsxs)(t.p,{children:["Submitting a staging URL whenever making a PR to ",(0,i.jsx)(t.a,{href:"https://github.com/AstarNetwork/astar-apps",children:"Astar Portal"})," from the forked repo is recommended. Here's what you need to know about deploying the forked Astar Portal repo on Vercel."]}),"\n",(0,i.jsx)(t.h2,{id:"deploying-with-vercel",children:"Deploying with Vercel"}),"\n",(0,i.jsxs)(t.p,{children:["Deploying Astar Portal (built with ",(0,i.jsx)(t.a,{href:"https://quasar.dev/",children:"Quasar Framework"}),") with ",(0,i.jsx)(t.a,{href:"https://vercel.com",children:"Vercel"})," is super easy. All you have to do is to download the ",(0,i.jsx)(t.a,{href:"https://vercel.com/docs/cli",children:"Vercel CLI"})," and log in by running:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"$ vercel login\n"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"vercel1",src:r(15365).Z+"",width:"1118",height:"189"})}),"\n",(0,i.jsxs)(t.p,{children:["Then proceed to build Astar Portal by running ",(0,i.jsx)(t.code,{children:"$ yarn build"}),".\nAfter the build is finished, change the directory into your deploy root (example: /dist/spa) and run:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"$ cd dist/spa\n# from /dist/spa (or your distDir)\n$ vercel\n"})}),"\n",(0,i.jsx)(t.p,{children:"The Vercel CLI should now display a list of information about your deployment, such as the staging url."}),"\n",(0,i.jsx)(t.p,{children:"That\u2019s it! You\u2019re done!"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"vercel2",src:r(62406).Z+"",width:"1838",height:"804"})}),"\n",(0,i.jsx)(t.h2,{id:"obtain-the-deployed-url",children:"Obtain the deployed URL"}),"\n",(0,i.jsxs)(t.p,{children:["After you've finished deployment (see steps above), you can open your ",(0,i.jsx)(t.a,{href:"https://vercel.com/dashboard",children:"Vercel dashboard"})," to obtain the deployed URL."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"vercel3",src:r(19336).Z+"",width:"1284",height:"743"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"vercel4",src:r(77307).Z+"",width:"1376",height:"784"})}),"\n",(0,i.jsx)(t.h2,{id:"references",children:"References"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://quasar.dev/quasar-cli-vite/developing-spa/deploying#deploying-with-vercel",children:"Deploying Quasar application with Vercel"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},15365:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/vercel1-2f9ffe5b9083982d671bf8dabcda71e7.png"},62406:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/vercel2-5fa454b45fe38457e59910778242223d.png"},19336:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/vercel3-d44e92c3d4e0707b5e2564a480508e25.jpg"},77307:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/vercel4-d6fe4fc72e0580986aaa8e5e0051f4f3.png"},11151:(e,t,r)=>{r.d(t,{Z:()=>l,a:()=>s});var i=r(67294);const n={},o=i.createContext(n);function s(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);