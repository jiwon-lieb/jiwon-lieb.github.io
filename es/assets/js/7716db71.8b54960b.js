"use strict";(self.webpackChunkdocs_1=self.webpackChunkdocs_1||[]).push([[5628],{52228:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>t,metadata:()=>i,toc:()=>l});var r=n(85893),s=n(11151);const t={sidebar_position:2},o="Crear una cartera Astar",i={id:"use/manage-wallets/create-wallet",title:"Crear una cartera Astar",description:"Cuentas Astar",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/use/manage-wallets/create-wallet.md",sourceDirName:"use/manage-wallets",slug:"/use/manage-wallets/create-wallet",permalink:"/es/docs/use/manage-wallets/create-wallet",draft:!1,unlisted:!1,editUrl:"https://github.com/AstarNetwork/astar-docs/tree/main/docs/use/manage-wallets/create-wallet.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"SubWallet",permalink:"/es/docs/use/manage-wallets/wallet-providers/subwallet"},next:{title:"Crear una billetera Multisig",permalink:"/es/docs/use/manage-wallets/create-multisig"}},c={},l=[{value:"Cuentas Astar",id:"cuentas-astar",level:2},{value:"Formato de Direcci\xf3n",id:"formato-de-direcci\xf3n",level:3},{value:"Astar Portal",id:"astar-portal",level:2},{value:"Recomendaci\xf3n: Polkadot{.js} Browser Plugin",id:"recomendaci\xf3n-polkadotjs-browser-plugin",level:2},{value:"Instalar el Plugin del Navegador",id:"instalar-el-plugin-del-navegador",level:3},{value:"Crear Cuenta",id:"crear-cuenta",level:3},{value:"Conecte su cartera al portal Astar",id:"conecte-su-cartera-al-portal-astar",level:2},{value:"Soporte",id:"soporte",level:2}];function d(e){const a={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.h1,{id:"crear-una-cartera-astar",children:"Crear una cartera Astar"}),"\n",(0,r.jsx)(a.h2,{id:"cuentas-astar",children:"Cuentas Astar"}),"\n",(0,r.jsx)(a.h3,{id:"formato-de-direcci\xf3n",children:"Formato de Direcci\xf3n"}),"\n",(0,r.jsx)(a.p,{children:"El formato de direcci\xf3n utilizado en las cadenas basadas en Substrate como Astar es ss58. Ss58 es una modificaci\xf3n de Base-58-check de Bitcoin, con algunas modificaciones menores. En particular, el formato contiene un prefijo de tipo de direcci\xf3n que identifica una direcci\xf3n como perteneciente a una red espec\xedfica. Astar Network es especial en el ecosistema Polkadot porque es el \xfanico parachain que soporta EVM como contrato inteligente WASM. El uso de dos m\xe1quinas virtuales diferentes conlleva dos tipos de direcciones diferentes."}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:"Una direcci\xf3n Astar Native o direcci\xf3n SS58"}),"\n",(0,r.jsx)(a.li,{children:"Una direcci\xf3n Astar EVM o direcci\xf3n H160 que comienza con 0x"}),"\n"]}),"\n",(0,r.jsx)("img",{width:"800",alt:"1",src:"https://user-images.githubusercontent.com/77480847/186840773-5874ba05-a067-4204-b72f-3f1017de85b7.png"}),"\n",(0,r.jsx)("img",{width:"800",alt:"2",src:"https://user-images.githubusercontent.com/77480847/186840936-692dc1f3-c5a8-450f-813c-6067c60f8cc2.png"}),"\n",(0,r.jsx)(a.p,{children:"Interactuar\xe1 con nuestra direcci\xf3n nativa Astar cuando el uso de WASM dApps est\xe1n listos o nuestra p\xe1gina dApps Staking. El uso de esta direcci\xf3n requiere una extensi\xf3n distinta de MetaMask. Le recomendamos que utilice la extensi\xf3n Polkadot JS si es nuevo en el ecosistema."}),"\n",(0,r.jsx)(a.h2,{id:"astar-portal",children:"Astar Portal"}),"\n",(0,r.jsx)(a.p,{children:"El [Portal Astar] es el lugar donde hay que estar para hacer cualquier cosa en nuestro ecosistema. Los desarrolladores de Astar han creado una ventanilla \xfanica para todos los que quieran interactuar en nuestro ecosistema."}),"\n",(0,r.jsx)(a.p,{children:"A trav\xe9s de nuestro portal, puedes conectarte a diferentes redes del ecosistema Astar."}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.strong,{children:"Astar Network"}),": parachain en Polkadot."]}),"\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.strong,{children:"Shiden Network"}),": parachain en Kusama."]}),"\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.strong,{children:"Shibuya"}),": parachain testnet"]}),"\n"]}),"\n",(0,r.jsx)("img",{width:"500",alt:"2",src:"https://user-images.githubusercontent.com/77480847/186842212-fa88eef0-b768-448e-995f-cc5834eb7c88.png"}),"\n",(0,r.jsx)(a.h2,{id:"recomendaci\xf3n-polkadotjs-browser-plugin",children:"Recomendaci\xf3n: Polkadot{.js} Browser Plugin"}),"\n",(0,r.jsx)(a.p,{children:"El plugin Polkadot{.js} proporciona un equilibrio razonable de seguridad y usabilidad. Proporciona un mecanismo local independiente para generar su direcci\xf3n e interactuar con el portal Astar. Recomendamos a los usuarios que sean nuevos en nuestro ecosistema y quieran crear una direcci\xf3n nativa de Astar que utilicen este monedero. Si no tienes la extensi\xf3n Polkadot JS recibir\xe1s una ventana emergente en nuestro portal cuando intentes conectar tu monedero."}),"\n",(0,r.jsx)(a.h3,{id:"instalar-el-plugin-del-navegador",children:"Instalar el Plugin del Navegador"}),"\n",(0,r.jsxs)(a.p,{children:["El complemento del navegador est\xe1 disponible tanto para ",(0,r.jsx)(a.a,{href:"https://chrome.google.com/webstore/detail/polkadot%7Bjs%7D-extension/mopnmbcafieddcagagdcbnhejhlodfdd?hl=en",children:"Google Chrome"})," (y navegadores basados en Chromium como Brave) como para ",(0,r.jsx)(a.a,{href:"https://addons.mozilla.org/en-US/firefox/addon/polkadot-js-extension",children:"Firefox"}),". Despu\xe9s de instalar el plugin, deber\xeda ver el logo naranja y blanco de Polkadot{.js} en la barra de men\xfa de su navegador."]}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{alt:"4",src:n(59403).Z+"",width:"1100",height:"829"})}),"\n",(0,r.jsx)(a.h3,{id:"crear-cuenta",children:"Crear Cuenta"}),"\n",(0,r.jsx)(a.p,{children:"Abra la extensi\xf3n del navegador Polkadot{.js} haciendo clic en el logotipo de la barra superior de su navegador. Ver\xe1s una ventana emergente del navegador."}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{alt:"6",src:n(66122).Z+"",width:"552",height:"65"})}),"\n",(0,r.jsx)(a.p,{children:'Haga clic en el bot\xf3n grande m\xe1s - "Crear nueva cuenta". El plugin de Polkadot{.js} usar\xe1 la aleatoriedad del sistema para hacer una nueva semilla para ti y la mostrar\xe1 en forma de doce palabras.'}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{alt:"7",src:n(10421).Z+"",width:"555",height:"592"})}),"\n",(0,r.jsx)(a.p,{children:'Deber\xeda respaldar estas palabras. Por favor, guarde la semilla en alg\xfan lugar seguro, secreto y protegido. Si por alg\xfan motivo no puede acceder a su cuenta a trav\xe9s de Polkadot{.js}, puede volver a introducir su semilla a trav\xe9s del "men\xfa A\xf1adir cuenta" seleccionando "Importar cuenta desde semilla preexistente".'}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{alt:"8",src:n(85449).Z+"",width:"554",height:"593"})}),"\n",(0,r.jsx)(a.p,{children:"Lo mejor es crear una cuenta que est\xe9 permitida en cualquier cadena del ecosistema Polkadot. Esta cuenta puede ser utilizada para Polkadot y Kusama. Su cuenta cambiar\xe1 autom\xe1ticamente el formato cuando se conecte a una cadena."}),"\n",(0,r.jsxs)(a.p,{children:["Un ",(0,r.jsx)(a.strong,{children:"nombre descriptivo"})," es arbitrario y solo para tu uso. No se almacena en la cadena de bloques y no ser\xe1 visible para otros usuarios que consulten su direcci\xf3n a trav\xe9s de un explorador de bloques. Si tiene varias cuentas, puede ser \xfatil que sea lo m\xe1s descriptivo y detallado posible."]}),"\n",(0,r.jsxs)(a.p,{children:["La ",(0,r.jsx)(a.strong,{children:"contrase\xf1a"})," se utilizar\xe1 para cifrar la informaci\xf3n de esta cuenta. Deber\xe1 volver a introducirla cuando utilice la cuenta para cualquier tipo de transacci\xf3n saliente o cuando la utilice para firmar criptogr\xe1ficamente un mensaje."]}),"\n",(0,r.jsx)(a.admonition,{type:"danger",children:(0,r.jsxs)(a.p,{children:["Ten en cuenta que esta contrase\xf1a ",(0,r.jsx)(a.strong,{children:"NO"})," protege tu frase de semilla. Si alguien conoce las doce palabras de tu semilla mnemot\xe9cnica, seguir\xe1 teniendo control sobre tu cuenta aunque no conozca la contrase\xf1a."]})}),"\n",(0,r.jsx)(a.p,{children:'Tras hacer clic en "A\xf1adir la cuenta con la semilla generada", se crear\xe1 su cuenta. Recomendamos tambi\xe9n guardar su cuenta como archivo json en alg\xfan lugar seguro.'}),"\n",(0,r.jsx)(a.h2,{id:"conecte-su-cartera-al-portal-astar",children:"Conecte su cartera al portal Astar"}),"\n",(0,r.jsx)(a.p,{children:"Vuelve a [Portal Astar] y actualiza la p\xe1gina. Recibir\xe1 un popup que Polkadot JS necesita estar autorizado para ser utilizado en nuestro portal. \xa1Dar permiso a la extensi\xf3n para hacerlo!"}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{alt:"9",src:n(94944).Z+"",width:"520",height:"428"})}),"\n",(0,r.jsx)(a.p,{children:"Cuando haya dado el permiso de extensi\xf3n, conectemos la cartera. Una ventana emergente se mostrar\xe1 con todas las extensiones posibles. Acabamos de crear una nueva cuenta con Polkadot JS, as\xed que vamos a seleccionar esta extensi\xf3n."}),"\n",(0,r.jsx)("img",{width:"500",alt:"10",src:"https://user-images.githubusercontent.com/77480847/186843723-2363e66d-1a16-4653-afdd-61c5d5e29ca7.png"}),"\n",(0,r.jsx)(a.p,{children:"Una vez que haya hecho clic en Polkadot JS, puede seleccionar su cuenta reci\xe9n creada. Seleccione su cuenta y presione confirmar."}),"\n",(0,r.jsx)("img",{width:"530",alt:"11",src:"https://user-images.githubusercontent.com/77480847/186843769-9c9ee368-3b74-46ee-8794-a88451b13438.png"}),"\n",(0,r.jsx)(a.p,{children:"Ha conectado con \xe9xito una cartera Astar a nuestro portal. Tenga en cuenta que puede utilizar esta cartera en todos las parachains del ecosistema de Dotsama."}),"\n",(0,r.jsx)(a.h2,{id:"soporte",children:"Soporte"}),"\n",(0,r.jsx)(a.p,{children:"En caso de que tenga alg\xfan problema. \xdanete a nuestra comunidad y nuestros Embajadores te apoyar\xe1n. \xa1Por favor, recuerde que nunca le enviaremos DM primero! Si se le acerca alguien fingiendo formar parte del equipo, no se conf\xede."})]})}function u(e={}){const{wrapper:a}={...(0,s.a)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},59403:(e,a,n)=>{n.d(a,{Z:()=>r});const r=n.p+"assets/images/4-9f5489bb968f1003d94db9267d2a12f2.png"},66122:(e,a,n)=>{n.d(a,{Z:()=>r});const r="data:image/png;base64,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"},10421:(e,a,n)=>{n.d(a,{Z:()=>r});const r=n.p+"assets/images/7-e6ca0b6404a9599d90df58f941a1e646.png"},85449:(e,a,n)=>{n.d(a,{Z:()=>r});const r=n.p+"assets/images/8-ec3b6d978ff337c72dfe510b519e874d.png"},94944:(e,a,n)=>{n.d(a,{Z:()=>r});const r=n.p+"assets/images/9-61c6b26f47fff3dc6e3d58cb1651c6bf.png"},11151:(e,a,n)=>{n.d(a,{Z:()=>i,a:()=>o});var r=n(67294);const s={},t=r.createContext(s);function o(e){const a=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(t.Provider,{value:a},e.children)}}}]);