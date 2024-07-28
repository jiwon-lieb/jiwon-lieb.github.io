"use strict";(self.webpackChunkdocs_1=self.webpackChunkdocs_1||[]).push([[8125],{11949:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>t,contentTitle:()=>o,default:()=>u,frontMatter:()=>c,metadata:()=>s,toc:()=>l});var i=n(85893),r=n(11151);const c={sidebar_position:4},o="Herramientas XCM",s={id:"learn/interoperability/xcm/integration/tools",title:"Herramientas XCM",description:"Hemos preparado una caja de xcm-tools que facilita a los usuarios la b\xfasqueda de una cuenta soberana o el c\xe1lculo de un Id. de activo XC20. Esta secci\xf3n est\xe1 destinada a desarrolladores o integradores que posean conocimientos t\xe9cnicos b\xe1sicos.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/learn/interoperability/xcm/integration/tools.md",sourceDirName:"learn/interoperability/xcm/integration",slug:"/learn/interoperability/xcm/integration/tools",permalink:"/es/docs/learn/interoperability/xcm/integration/tools",draft:!1,unlisted:!1,editUrl:"https://github.com/AstarNetwork/astar-docs/tree/main/docs/learn/interoperability/xcm/integration/tools.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Multilocalizaci\xf3n de activos",permalink:"/es/docs/learn/interoperability/xcm/integration/multilocation"},next:{title:"A\xf1adir activos al Portal Astar",permalink:"/es/docs/learn/interoperability/xcm/integration/add-to-portal"}},t={},l=[{value:"Instalaci\xf3n",id:"instalaci\xf3n",level:2},{value:"Cuenta Soberana",id:"cuenta-soberana",level:2},{value:"Direcci\xf3n XC20",id:"direcci\xf3n-xc20",level:2},{value:"Cuenta remota",id:"cuenta-remota",level:2}];function d(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.h1,{id:"herramientas-xcm",children:"Herramientas XCM"}),"\n",(0,i.jsx)(a.p,{children:"Hemos preparado una caja de xcm-tools que facilita a los usuarios la b\xfasqueda de una cuenta soberana o el c\xe1lculo de un Id. de activo XC20. Esta secci\xf3n est\xe1 destinada a desarrolladores o integradores que posean conocimientos t\xe9cnicos b\xe1sicos."}),"\n",(0,i.jsx)(a.h2,{id:"instalaci\xf3n",children:"Instalaci\xf3n"}),"\n",(0,i.jsxs)(a.ol,{children:["\n",(0,i.jsxs)(a.li,{children:["Aseg\xfarese de que su m\xe1quina es capaz de compilar el c\xf3digo Substrate. Para m\xe1s informaci\xf3n, consulta ",(0,i.jsx)(a.a,{href:"https://docs.substrate.io/install/",children:"aqu\xed"}),"."]}),"\n",(0,i.jsxs)(a.li,{children:["Clonar ",(0,i.jsx)(a.a,{href:"https://github.com/AstarNetwork/Astar",children:"Astar repo"})]}),"\n",(0,i.jsxs)(a.li,{children:["Sit\xfaate en la ra\xedz del repositorio y ejecuta ",(0,i.jsx)(a.code,{children:"cargo build --release -p xcm-tools"})]}),"\n",(0,i.jsxs)(a.li,{children:["Una vez finalizada la compilaci\xf3n, busque el binario ",(0,i.jsx)(a.code,{children:"xcm-tools"})," en la carpeta ",(0,i.jsx)(a.code,{children:"./target/release"})]}),"\n",(0,i.jsx)(a.li,{children:"Gu\xe1rdalo para utilizarlo m\xe1s tarde y no tener que recompilarlo desde cero."}),"\n"]}),"\n",(0,i.jsx)(a.h2,{id:"cuenta-soberana",children:"Cuenta Soberana"}),"\n",(0,i.jsx)(a.p,{children:"Para encontrar la direcci\xf3n de la cuenta soberana de una parachain en la Relay Chain, utilice el siguiente comando:"}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-bash",children:"./xcm-tools sovereign-account 2006\n5Ec4AhPW97z4ZyYkd3mYkJrSeZWcwVv4wiANES2QrJi1x17F\n"})}),"\n",(0,i.jsxs)(a.p,{children:["Reemplace ",(0,i.jsx)(a.strong,{children:"2006"})," con el Id de parachain que usted requiera."]}),"\n",(0,i.jsx)(a.p,{children:"Para calcular la direcci\xf3n de la cuenta soberana de una parachain hermana, utilice el siguiente comando:"}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-bash",children:"./xcm-tools sovereign-account -s 2006\n5Eg2fntKDrAxhaGuB3idrxCFu3BveuyB1MooVPYuj2jaoSsw\n"})}),"\n",(0,i.jsxs)(a.p,{children:["E.g. esta ser\xe1 la direcci\xf3n de la cuenta soberana de Astar en Statemint.\nReemplace ",(0,i.jsx)(a.strong,{children:"2006"})," con el Id de parachain que usted requiera."]}),"\n",(0,i.jsx)(a.h2,{id:"direcci\xf3n-xc20",children:"Direcci\xf3n XC20"}),"\n",(0,i.jsx)(a.p,{children:"Para calcular la direcci\xf3n de una EVM XC20, utilice el siguiente comando:"}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-bash",children:"./xcm-tools asset-id 42424242424242\npallet_assets: 42424242424242\nEVM XC20: 0xffffffff000000000000000000002695a9e649b2\n"})}),"\n",(0,i.jsx)(a.p,{children:"Tambi\xe9n puede introducir un Id. de activo est\xe1ndar (como el que se ve en pallet-assets), y obtendr\xe1 la direcci\xf3n H160 de ese activo."}),"\n",(0,i.jsx)(a.h2,{id:"cuenta-remota",children:"Cuenta remota"}),"\n",(0,i.jsxs)(a.p,{children:["Para calcular la cuenta remota, revisa (",(0,i.jsx)(a.a,{href:"https://github.com/paritytech/polkadot/blob/master/xcm/xcm-builder/src/location_conversion.rs#L25",children:"aqu\xed"}),"), hemos prove\xeddo un comando espec\xedfico. Sin embargo, el posible formato de ",(0,i.jsx)(a.code,{children:"MultiLocation"})," se limita a:"]}),"\n",(0,i.jsxs)(a.ol,{children:["\n",(0,i.jsx)(a.li,{children:(0,i.jsx)(a.code,{children:"{ parents: 1, interior: X1(AccountId32{ network: _, id: 0x<id>}) }"})}),"\n",(0,i.jsx)(a.li,{children:(0,i.jsx)(a.code,{children:"{ parents: 1, interior: X2(Parachain(<parachain_id>), AccountId32{ network: _, id: 0x<id>}) }"})}),"\n",(0,i.jsx)(a.li,{children:(0,i.jsx)(a.code,{children:"{ parents: 1, interior: X2(Parachain(<parachain_id>), AccountKey20{ network: _, key: 0x<id>}) }"})}),"\n"]}),"\n",(0,i.jsx)(a.p,{children:"Para el primer caso, utilice el siguiente comando:"}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-bash",children:"./xcm-tools remote-account -a 0x84746218b9858233f45f99d742aa3ea2f31aeb5a525938f240fdee3000000000\n5H2dw5K45MfT4dwB7u924MYFASzGoWvACzKuMo3TdgJRkg2R\n"})}),"\n",(0,i.jsxs)(a.p,{children:["El valor bajo ",(0,i.jsx)(a.code,{children:"-a"})," es una clave p\xfablica SS58."]}),"\n",(0,i.jsx)(a.p,{children:"Para el segundo caso, utilice el siguiente comando:"}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-bash",children:"./xcm-tools remote-account -p 1000 -a 0x84746218b9858233f45f99d742aa3ea2f31aeb5a525938f240fdee3000000000\n5FkWm28hUM7XC9qvrS3w4RP38wCgajfvFpqyfjeTSVxShdzC\n"})}),"\n",(0,i.jsxs)(a.p,{children:["El valor bajo ",(0,i.jsx)(a.code,{children:"-p"})," es el parachain Id, mientras que ",(0,i.jsx)(a.code,{children:"-a"})," es de nuevo la clave p\xfablica."]})]})}function u(e={}){const{wrapper:a}={...(0,r.a)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,a,n)=>{n.d(a,{Z:()=>s,a:()=>o});var i=n(67294);const r={},c=i.createContext(r);function o(e){const a=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function s(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(c.Provider,{value:a},e.children)}}}]);