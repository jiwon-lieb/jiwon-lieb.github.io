/*! For license information please see ebc0c334.633e6e25.js.LICENSE.txt */
"use strict";(self.webpackChunkdocs_1=self.webpackChunkdocs_1||[]).push([[4711],{42497:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var i=t(85893),r=t(11151),o=t(62251);const s={sidebar_position:3},l="Light Client node with no RPC",a={id:"build/environment/light-client",title:"Light Client node with no RPC",description:"Integrate with the Astar networks using a light client.",source:"@site/docs/build/environment/light-client.md",sourceDirName:"build/environment",slug:"/build/environment/light-client",permalink:"/ja/docs/build/environment/light-client",draft:!1,unlisted:!1,editUrl:"https://github.com/AstarNetwork/astar-docs/tree/main/docs/build/environment/light-client.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Test Tokens",permalink:"/ja/docs/build/environment/faucet"},next:{title:"Running Local Network",permalink:"/ja/docs/build/environment/local-network"}},c={},d=[{value:"Overview",id:"overview",level:2},{value:"Run it in Replit",id:"run-it-in-replit",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"light-client-node-with-no-rpc",children:"Light Client node with no RPC"}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"Integrate with the Astar networks using a light client."})}),"\n",(0,i.jsx)(n.p,{children:"This documentation will guide you on how to connect to the Astar Network using a light client (ScProvider) with the Polkadot.js API and Substrate Connect."}),"\n",(0,i.jsx)(n.p,{children:"Prerequisites:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Node.js (",(0,i.jsx)(n.a,{href:"https://nodejs.org/en/download/",children:"https://nodejs.org/en/download/"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:["npm (",(0,i.jsx)(n.a,{href:"https://www.npmjs.com/get-npm",children:"https://www.npmjs.com/get-npm"}),")"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(n.p,{children:"Astar Network is a scalable smart contract platform on Polkadot that supports Ethereum compatibility. Connecting to the Astar Network using a light client (ScProvider) allows you to interact with the network without having to sync the entire blockchain."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Initialize a new Node.js project\nCreate a new directory for your project and navigate to it in your terminal or command prompt. Initialize a new Node.js project by running:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"mkdir astar-light-client\ncd astar-light-client\nnpm init -y\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:"Install required packages\nInstall the required packages by running:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm install @polkadot/api @substrate/connect\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsxs)(n.li,{children:["Create the chain specification file\nCreate a new file named ",(0,i.jsx)(n.code,{children:"astar.json"})," in the ",(0,i.jsx)(n.code,{children:"chain-specs"})," directory of your project. You can download the latest Astar chain specification file from the Astar GitHub repository or use this link."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Create a new directory named ",(0,i.jsx)(n.code,{children:"chain-specs"})," and save the ",(0,i.jsx)(n.code,{children:"astar.json"})," file in it:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"mkdir chain-specs\nwget https://raw.githubusercontent.com/AstarNetwork/astar-apps/main/src/config/api/polkadot/chain-specs/astar.json -P chain-specs\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"4",children:["\n",(0,i.jsxs)(n.li,{children:["Create a script to connect to the Astar Network\nCreate a new file named ",(0,i.jsx)(n.code,{children:"connect-astar.js"})," in your project directory and paste the following script into it:"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'const { ApiPromise, ScProvider } = require("@polkadot/api");\nconst Sc = require("@substrate/connect");\n\nasync function queryInfo(api) {\n  const assetMetadata = await api.query.assets.metadata.entries();\n\n  assetMetadata.map((asset) => {\n    let h = asset[1].toHuman();\n    console.log(JSON.stringify(h));\n  });\n}\n\nasync function setup() {\n  const jsonParachainSpecAstar = require("./chain-specs/astar.json");\n  const astarSpec = JSON.stringify(jsonParachainSpecAstar);\n\n  const relayProvider = new ScProvider(Sc, Sc.WellKnownChain.polkadot);\n  const provider = new ScProvider(Sc, astarSpec, relayProvider);\n\n  await provider.connect();\n  const api = await ApiPromise.create({ provider });\n\n  console.log("Connected to Astar Network using ScProvider (light client)");\n  await queryInfo(api);\n  process.exit();\n}\n\nsetup();\n'})}),"\n",(0,i.jsx)(n.p,{children:"This script sets up a connection to the Astar Network using a light client (ScProvider) by leveraging Substrate Connect and the Polkadot.js API."}),"\n",(0,i.jsxs)(n.ol,{start:"5",children:["\n",(0,i.jsx)(n.li,{children:"Run the script\nNow, you can run the script to connect to the Astar Network:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"node connect-astar.js\n"})}),"\n",(0,i.jsx)(n.p,{children:"If the connection is successful, the script will output the following message:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-txt",children:'Connected to Astar Network using ScProvider (light client)\n{"deposit":"86,000,000,000","name":"MochiMochiCoin","symbol":"MMC","decimals":"2","isFrozen":false}\n...\n{"deposit":"0","name":"Liquid DOT","symbol":"LDOT","decimals":"10","isFrozen":false}\n'})}),"\n",(0,i.jsx)(n.p,{children:"Congratulations! You have successfully connected to the Astar Network using a light client (ScProvider) with the Polkadot.js API and Substrate Connect. You can now use the api instance to interact with the Astar Network and query data or submit transactions."}),"\n",(0,i.jsx)(n.h2,{id:"run-it-in-replit",children:"Run it in Replit"}),"\n","\n","\n",(0,i.jsx)(o.Z,{url:"https://replit.com/@gluneau/Light-Client-Demo-for-Astar-and-Shiden?embed=true",width:"100%",height:"500px",id:"myId",className:"myClassname",display:"initial",position:"relative",allowFullScreen:!0})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},27418:e=>{var n=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var n={},t=0;t<10;t++)n["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(n).map((function(e){return n[e]})).join(""))return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach((function(e){i[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},i)).join("")}catch(r){return!1}}()?Object.assign:function(e,r){for(var o,s,l=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),a=1;a<arguments.length;a++){for(var c in o=Object(arguments[a]))t.call(o,c)&&(l[c]=o[c]);if(n){s=n(o);for(var d=0;d<s.length;d++)i.call(o,s[d])&&(l[s[d]]=o[s[d]])}}return l}},62251:(e,n,t)=>{t.d(n,{Z:()=>s});var i=t(67294),r=t(27418),o=t.n(r);const s=({url:e,allowFullScreen:n,position:t,display:r,height:s,width:l,overflow:a,styles:c,onLoad:d,onMouseOver:u,onMouseOut:h,scrolling:p,id:m,frameBorder:j,ariaHidden:g,sandbox:w,allow:f,className:y,title:b,ariaLabel:v,ariaLabelledby:x,name:k,target:P,loading:O,importance:C,referrerpolicy:N,allowpaymentrequest:S,src:A,key:q})=>{const I=o()({src:A||e,target:P||null,style:{position:t||null,display:r||"initial",overflow:a||null},scrolling:p||null,allowpaymentrequest:S||null,importance:C||null,sandbox:w&&[...w].join(" ")||null,loading:O||null,styles:c||null,name:k||null,className:y||null,allowFullScreen:"allowFullScreen",referrerpolicy:N||null,title:b||null,allow:f||null,id:m||null,"aria-labelledby":x||null,"aria-hidden":g||null,"aria-label":v||null,width:l||null,height:s||null,onLoad:d||null,onMouseOver:u||null,onMouseOut:h||null,key:q||"iframe"});let M=Object.create(null);for(let i of Object.keys(I))null!=I[i]&&(M[i]=I[i]);for(let i of Object.keys(M.style))null==M.style[i]&&delete M.style[i];if(M.styles)for(let i of Object.keys(M.styles))M.styles.hasOwnProperty(i)&&(M.style[i]=M.styles[i]),Object.keys(M.styles).pop()==i&&delete M.styles;if(n)if("allow"in M){const e=M.allow.replace("fullscreen","");M.allow=`fullscreen ${e.trim()}`.trim()}else M.allow="fullscreen";return j>=0&&(M.style.hasOwnProperty("border")||(M.style.border=j)),i.createElement("iframe",Object.assign({},M))}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>s});var i=t(67294);const r={},o=i.createContext(r);function s(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);