"use strict";(self.webpackChunkdocs_1=self.webpackChunkdocs_1||[]).push([[5499],{5445:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>t});var s=n(85893),r=n(11151);const o={sidebar_position:6},i="Redes",l={id:"learn/networks",title:"Redes",description:"Vista general",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/learn/networks.md",sourceDirName:"learn",slug:"/learn/networks",permalink:"/es/docs/learn/networks",draft:!1,unlisted:!1,editUrl:"https://github.com/AstarNetwork/astar-docs/tree/main/docs/learn/networks.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Glosario",permalink:"/es/docs/learn/glossary"},next:{title:"Architecture",permalink:"/es/docs/learn/architecture/"}},d={},t=[{value:"Vista general",id:"vista-general",level:2},{value:"Redes locales",id:"redes-locales",level:2},{value:"Nodo local",id:"nodo-local",level:3},{value:"Nodo Swanky",id:"nodo-swanky",level:3},{value:"Zombienet",id:"zombienet",level:3},{value:"Redes de prueba",id:"redes-de-prueba",level:2},{value:"Shibuya",id:"shibuya",level:3},{value:"Rocstar",id:"rocstar",level:3},{value:"Redes Principales",id:"redes-principales",level:2},{value:"Shiden",id:"shiden",level:3},{value:"Astar",id:"astar",level:3}];function c(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.h1,{id:"redes",children:"Redes"}),"\n",(0,s.jsx)(a.h2,{id:"vista-general",children:"Vista general"}),"\n",(0,s.jsx)(a.p,{children:"Antes de iniciar el desarrollo, es importante conocer la familia de redes Astar y elegir la red adecuada en funci\xf3n de lo que quieras hacer. Actualmente, hay varias redes disponibles, incluida la red Local que funciona exclusivamente dentro de su entorno de desarrollo. Todas las redes admiten RPC de Substrate y EVM."}),"\n",(0,s.jsx)(a.h2,{id:"redes-locales",children:"Redes locales"}),"\n",(0,s.jsx)(a.h3,{id:"nodo-local",children:"Nodo local"}),"\n",(0,s.jsxs)(a.p,{children:["Puedes clonar el repositorio Astar y ejecutar el nodo local proporcionado, o descargar el binario precompilado y ejecutarlo, en su lugar. Ambos m\xe9todos se describen en la secci\xf3n ",(0,s.jsx)(a.a,{href:"/docs/build",children:"Build"}),"."]}),"\n",(0,s.jsx)(a.h3,{id:"nodo-swanky",children:"Nodo Swanky"}),"\n",(0,s.jsxs)(a.p,{children:["Nodo Swanky es una blockchain basada en Substrate configurada para habilitar el m\xf3dulo de contratos inteligentes ",(0,s.jsx)(a.code,{children:"pallet-contracts"}),", y otras caracter\xedsticas que ayudan al desarrollo local de contratos inteligentes Wasm.\nPara obtener m\xe1s informaci\xf3n sobre nodo Swanky, consulte la secci\xf3n ",(0,s.jsx)(a.a,{href:"https://docs.astar.network/docs/build/wasm/swanky-suite/",children:"Swanky Suite"}),"."]}),"\n",(0,s.jsx)(a.h3,{id:"zombienet",children:"Zombienet"}),"\n",(0,s.jsxs)(a.p,{children:["Con Zombienet los usuarios pueden descargar binarios arbitrarios de Relay Chain y parachain (o utilizar im\xe1genes) para configurar una red local de prueba configurable. Los usuarios tendr\xe1n acceso a todas las acciones privilegiadas en la Cadena de Retransmisi\xf3n y los parachains, lo que simplifica las pruebas. Para m\xe1s informaci\xf3n sobre Zombienet, consulta el cap\xedtulo ",(0,s.jsx)(a.a,{href:"https://docs.astar.network/docs/build/environment/zombienet-testing",children:"Entorno de compilaci\xf3n"}),"."]}),"\n",(0,s.jsx)(a.h2,{id:"redes-de-prueba",children:"Redes de prueba"}),"\n",(0,s.jsx)(a.h3,{id:"shibuya",children:"Shibuya"}),"\n",(0,s.jsx)(a.p,{children:"Shibuya tiene casi las mismas especificaciones de cadena que Shiden y Astar, y proporciona un entorno ideal para que los desarrolladores prueben y depuren antes de lanzar su dApp en la red principal.\nShibuya funciona como parachain de la Relay Chain de Tokio, gestionada internamente por el equipo de Astar, y apoya a Shibuya, \xfanicamente, como paracaidista de prueba."}),"\n",(0,s.jsx)(a.p,{children:"El s\xedmbolo del token nativo de Shibuya es SBY."}),"\n",(0,s.jsx)(a.p,{children:"Para obtener fichas de prueba del grifo, visita el Portal Astar y con\xe9ctate a Shibuya. Si por alguna raz\xf3n el grifo est\xe1 vac\xedo, ponte en contacto con el equipo Astar en Discord."}),"\n",(0,s.jsx)(a.h3,{id:"rocstar",children:"Rocstar"}),"\n",(0,s.jsx)(a.p,{children:"Rococo es una Relay Chain de prueba utilizada por las comunidades Polkadot y Kusama. El equipo de Astar ha desplegado una parachain para ello llamada Rocstar, que se utiliza principalmente para integraciones entre cadenas con otros equipos del ecosistema. Para obtener fichas de prueba para Rocstar, por favor contacta con el equipo de Astar en Discord."}),"\n",(0,s.jsx)(a.p,{children:"El s\xedmbolo del token nativo de Rocstar es ROC."}),"\n",(0,s.jsx)(a.h2,{id:"redes-principales",children:"Redes Principales"}),"\n",(0,s.jsx)(a.p,{children:"Astar tiene dos redes principales, como la mayor\xeda de parachains en el ecosistema de Polkadot. Una en la Relay Chain de Kusama, y otra en la Relay chain de Polkadot."}),"\n",(0,s.jsx)(a.h3,{id:"shiden",children:"Shiden"}),"\n",(0,s.jsx)(a.p,{children:"Shiden es una parachain conectada a la Relay Chain de Kusama, y se utiliza para desplegar y probar nuevas versiones del tiempo de ejecuci\xf3n de Astar en un entorno de producci\xf3n en vivo (canario). Shiden no se considera una red de pruebas, ya que SDN tiene su propio tokenomics y valor, pero se utiliza para validar y estabilizar nuevas versiones y actualizaciones de software para Astar Network."}),"\n",(0,s.jsx)(a.p,{children:"El s\xedmbolo del token nativo de Shiden es SDN."}),"\n",(0,s.jsx)(a.h3,{id:"astar",children:"Astar"}),"\n",(0,s.jsx)(a.p,{children:"A estas alturas ya habr\xe1s adivinado que la red Astar es una parachain de la Relay Chain de Polkadot."}),"\n",(0,s.jsx)(a.p,{children:"El s\xedmbolo del token nativo de Astar es ASTR."})]})}function u(e={}){const{wrapper:a}={...(0,r.a)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},11151:(e,a,n)=>{n.d(a,{Z:()=>l,a:()=>i});var s=n(67294);const r={},o=s.createContext(r);function i(e){const a=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:a},e.children)}}}]);