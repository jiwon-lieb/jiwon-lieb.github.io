"use strict";(self.webpackChunkdocs_1=self.webpackChunkdocs_1||[]).push([[2635],{44167:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var t=i(85893),s=i(11151);const r={sidebar_position:3},a="Multilocalizaci\xf3n de activos",o={id:"learn/interoperability/xcm/integration/multilocation",title:"Multilocalizaci\xf3n de activos",description:"Puedes utilizar estos valores MultiLocation para a\xf1adir activos nativos de Astar a la lista de tokens extranjeros de una parachain, junto con otros activos minteados en nuestra cadena.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/learn/interoperability/xcm/integration/multilocation.md",sourceDirName:"learn/interoperability/xcm/integration",slug:"/learn/interoperability/xcm/integration/multilocation",permalink:"/es/docs/learn/interoperability/xcm/integration/multilocation",draft:!1,unlisted:!1,editUrl:"https://github.com/AstarNetwork/astar-docs/tree/main/docs/learn/interoperability/xcm/integration/multilocation.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Registro de activos XCM",permalink:"/es/docs/learn/interoperability/xcm/integration/asset-registration"},next:{title:"Herramientas XCM",permalink:"/es/docs/learn/interoperability/xcm/integration/tools"}},l={},c=[{value:"Rococo Astar",id:"rococo-astar",level:2},{value:"Astar",id:"astar",level:2},{value:"Shiden",id:"shiden",level:2},{value:"Activo personalizado",id:"activo-personalizado",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"multilocalizaci\xf3n-de-activos",children:"Multilocalizaci\xf3n de activos"}),"\n",(0,t.jsxs)(n.p,{children:["Puedes utilizar estos valores ",(0,t.jsx)(n.code,{children:"MultiLocation"})," para a\xf1adir activos nativos de Astar a la lista de tokens extranjeros de una parachain, junto con otros activos minteados en nuestra cadena."]}),"\n",(0,t.jsx)(n.h2,{id:"rococo-astar",children:"Rococo Astar"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"{ parents: 1, interior: X1(Parachain(2006)) }"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Decimales: ",(0,t.jsx)(n.strong,{children:"18"})]}),"\n",(0,t.jsxs)(n.li,{children:["Dep\xf3sito existencial: ",(0,t.jsx)(n.strong,{children:"1_000_000"})]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"astar",children:"Astar"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"{ parents: 1, interior: X1(Parachain(2006)) }"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Nombre: ",(0,t.jsx)(n.strong,{children:"Astar"})]}),"\n",(0,t.jsxs)(n.li,{children:["S\xedmbolo: ",(0,t.jsx)(n.strong,{children:"ASTR"})]}),"\n",(0,t.jsxs)(n.li,{children:["Decimales: ",(0,t.jsx)(n.strong,{children:"18"})]}),"\n",(0,t.jsxs)(n.li,{children:["Dep\xf3sito existencial: ",(0,t.jsx)(n.strong,{children:"1_000_000"})]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"shiden",children:"Shiden"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"{ parents: 1, interior: X1(Parachain(2007)) }"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Nombre: ",(0,t.jsx)(n.strong,{children:"Shiden"})]}),"\n",(0,t.jsxs)(n.li,{children:["S\xedmbolo: ",(0,t.jsx)(n.strong,{children:"SDN"})]}),"\n",(0,t.jsxs)(n.li,{children:["Decimales: ",(0,t.jsx)(n.strong,{children:"18"})]}),"\n",(0,t.jsxs)(n.li,{children:["Dep\xf3sito existencial: ",(0,t.jsx)(n.strong,{children:"1_000_000"})]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"activo-personalizado",children:"Activo personalizado"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"{ parents: 1, interior: X3(Parachain(2006/7), PalletInstance(36), GeneralIndex(*asset_id*) }"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Tenga en cuenta que estos recursos pueden ser creados por cualquier usuario."}),"\n",(0,t.jsxs)(n.li,{children:["Los metadatos de los activos (si est\xe1n disponibles) pueden encontrarse en la cadena, consultando al propietario del activo o en nuestra ",(0,t.jsx)(n.a,{href:"https://app.gitbook.com/o/-LgGrgOEDyFYjYWIb1DT/s/-M8GVK5H7hOsGnYqg-7q-872737601/xcm/xcm-asset-list",children:"lista oficial de activos"}),"."]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>a});var t=i(67294);const s={},r=t.createContext(s);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);