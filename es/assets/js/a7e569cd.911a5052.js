"use strict";(self.webpackChunkdocs_1=self.webpackChunkdocs_1||[]).push([[1895],{56795:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>t});var r=n(85893),i=n(11151);const s={sidebar_position:1},l="Abrir canales HRMP",o={id:"learn/interoperability/xcm/integration/hrmp",title:"Abrir canales HRMP",description:"Resumen",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/learn/interoperability/xcm/integration/hrmp.md",sourceDirName:"learn/interoperability/xcm/integration",slug:"/learn/interoperability/xcm/integration/hrmp",permalink:"/es/docs/learn/interoperability/xcm/integration/hrmp",draft:!1,unlisted:!1,editUrl:"https://github.com/AstarNetwork/astar-docs/tree/main/docs/learn/interoperability/xcm/integration/hrmp.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"FAQ sobre contratos inteligentes",permalink:"/es/docs/learn/interoperability/xcm/building-with-xcm/faq-for-smart-contracts"},next:{title:"Registro de activos XCM",permalink:"/es/docs/learn/interoperability/xcm/integration/asset-registration"}},c={},t=[{value:"Resumen",id:"resumen",level:2},{value:"Instrucciones t\xe9cnicas",id:"instrucciones-t\xe9cnicas",level:2},{value:"Entendiendo los par\xe1metros",id:"entendiendo-los-par\xe1metros",level:3},{value:"Llamada codificada en Relay Chain",id:"llamada-codificada-en-relay-chain",level:2},{value:"XCM a Relay Chain",id:"xcm-a-relay-chain",level:2},{value:"Enviar solicitud para abrir el canal HRMP",id:"enviar-solicitud-para-abrir-el-canal-hrmp",level:2},{value:"Flujo de trabajo",id:"flujo-de-trabajo",level:2},{value:"Crear Propuesta",id:"crear-propuesta",level:3},{value:"Integraci\xf3n en Testnet",id:"integraci\xf3n-en-testnet",level:3},{value:"Abriendo un canal HRMP",id:"abriendo-un-canal-hrmp",level:3}];function d(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.h1,{id:"abrir-canales-hrmp",children:"Abrir canales HRMP"}),"\n",(0,r.jsx)(a.h2,{id:"resumen",children:"Resumen"}),"\n",(0,r.jsx)(a.p,{children:"Antes de que dos parachains puedan comunicarse directamente, deben abrir canales entre s\xed. Como cada canal es unidireccional, hay que abrir dos, uno en cada direcci\xf3n."}),"\n",(0,r.jsx)(a.h2,{id:"instrucciones-t\xe9cnicas",children:"Instrucciones t\xe9cnicas"}),"\n",(0,r.jsx)(a.h3,{id:"entendiendo-los-par\xe1metros",children:"Entendiendo los par\xe1metros"}),"\n",(0,r.jsx)(a.p,{children:"La apertura de un canal requiere que la cuenta soberana parachain en la Relay Chain tenga saldo en el token nativo (KSM o DOT). Esto es obligatorio, de lo contrario, la apertura del canal fallar\xe1, ya que las transacciones no se ejecutar\xe1n."}),"\n",(0,r.jsxs)(a.p,{children:["La forma m\xe1s sencilla de comprobar los par\xe1metros requeridos es abriendo la Relay Chain en ",(0,r.jsx)(a.a,{href:"https://polkadot.js.org/apps/#/explorer",children:"Polkadot.js Apps"}),", en Developer -> Chain State -> ",(0,r.jsx)(a.code,{children:"configuration"})," -> ",(0,r.jsx)(a.code,{children:"activeConfig"}),". Lo que te interesa se ver\xe1 as\xed (tomado de Polkadot):"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-json",children:"hrmpMaxParachainOutboundChannels: 30\nhrmpMaxParathreadOutboundChannels: 0\nhrmpSenderDeposit: 100,000,000,000\nhrmpRecipientDeposit: 100,000,000,000\nhrmpChannelMaxCapacity: 1,000\nhrmpChannelMaxTotalSize: 102,400\nhrmpMaxParachainInboundChannels: 30\nhrmpMaxParathreadInboundChannels: 0\nhrmpChannelMaxMessageSize: 102,400\n"})}),"\n",(0,r.jsxs)(a.p,{children:["Bas\xe1ndonos en la informaci\xf3n anterior, podemos ver que se requieren ",(0,r.jsx)(a.strong,{children:"10 DOT"})," para abrir un canal o para confirmarlo. Tambi\xe9n podemos ver que hay un n\xfamero m\xe1ximo de canales de entrada y salida por parachain - 30 en el caso de Polkadot, en el momento de escribir esto."]}),"\n",(0,r.jsx)(a.p,{children:"Los dos par\xe1metros que hay que especificar al abrir un canal son:"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.code,{children:"max_capacity"})," - n\xfamero m\xe1ximo de mensajes que pueden ser puestos en cola en el canal."]}),"\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.code,{children:"max_message_size"})," - tama\xf1o m\xe1ximo del mensaje enviado."]}),"\n"]}),"\n",(0,r.jsx)(a.p,{children:"Podemos elegir los valores m\xe1ximos al abrir el canal en consecuencia."}),"\n",(0,r.jsx)(a.h2,{id:"llamada-codificada-en-relay-chain",children:"Llamada codificada en Relay Chain"}),"\n",(0,r.jsx)(a.p,{children:"El primer paso consiste en preparar los datos de llamada codificados para solicitar la apertura de un canal o aceptar una solicitud de canal abierto existente."}),"\n",(0,r.jsxs)(a.ol,{children:["\n",(0,r.jsx)(a.li,{children:"Visite la aplicaci\xf3n polkadot.js en su navegador y seleccione Polkadot o Kusama."}),"\n",(0,r.jsxs)(a.li,{children:["Ve a ",(0,r.jsx)(a.code,{children:"Developer -> Extrinsics"}),"."]}),"\n",(0,r.jsx)(a.li,{children:"Encuentre hrmp bajo todos los palets disponibles y selecci\xf3nelos."}),"\n",(0,r.jsxs)(a.li,{children:["Selecciona la llamada ",(0,r.jsx)(a.code,{children:"hrmpInitOpenChannel"})," y llena los par\xe1metros.","\n",(0,r.jsxs)(a.ol,{children:["\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.strong,{children:"recipient"}),": la parachain con la que quieres abrir el canal."]}),"\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.strong,{children:"proposedMaxCapacity"}),": escoja el valor de activeConfig."]}),"\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.strong,{children:"proposedMaxMessageSize"}),": elija el valor de activeConfig."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["Copia y almacena los datos de llamada codificados para m\xe1s tarde:","\n",(0,r.jsxs)(a.ol,{children:["\n",(0,r.jsxs)(a.li,{children:["e.g. ",(0,r.jsx)(a.code,{children:"0x3c00d6070000e803000000900100"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(a.p,{children:"Puede repetir exactamente los mismos pasos para obtener los datos de llamadas codificadas para hrmpAcceptOpenChannel."}),"\n",(0,r.jsx)(a.h2,{id:"xcm-a-relay-chain",children:"XCM a Relay Chain"}),"\n",(0,r.jsxs)(a.p,{children:["La suposici\xf3n aqu\xed es que usted est\xe1 usando el est\xe1ndar de Polkadot ",(0,r.jsx)(a.code,{children:"pallet-xcm"}),", que tiene una llamada de env\xedo."]}),"\n",(0,r.jsxs)(a.p,{children:["Utilizando una llamada ",(0,r.jsx)(a.strong,{children:"root"})," desde tu parachain, debes enviar un mensaje XCM a la Relay Chain, indic\xe1ndole que ejecute los datos de llamada codificados que has preparado en el paso anterior."]}),"\n",(0,r.jsxs)(a.ol,{children:["\n",(0,r.jsxs)(a.li,{children:["Abre tu parachain en ",(0,r.jsx)(a.a,{href:"https://polkadot.js.org/apps",children:"polkadot.js app"})]}),"\n",(0,r.jsxs)(a.li,{children:["Click en ",(0,r.jsx)(a.code,{children:"Developer -> Extrinsic"})]}),"\n",(0,r.jsxs)(a.li,{children:["Busque la paleta XCM en el men\xfa desplegable (probablemente se llame ",(0,r.jsx)(a.code,{children:"polkadotXcm"})," o ",(0,r.jsx)(a.code,{children:"xcmPallet"}),")"]}),"\n",(0,r.jsxs)(a.li,{children:["Selecciona ",(0,r.jsx)(a.code,{children:"enviar"})," como la llamada:","\n",(0,r.jsxs)(a.ol,{children:["\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.strong,{children:"destination"}),": ",(0,r.jsx)(a.code,{children:"V1 {XcmV1MultiLocation { parents: 1, interior: Here}}"})]}),"\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.strong,{children:"message"}),":","\n",(0,r.jsxs)(a.ol,{children:["\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.code,{children:"V2"})," (o \xfaltima versi\xf3n soportada)"]}),"\n",(0,r.jsx)(a.li,{children:"Ahora a\xf1ada 5 instrucciones al mensaje."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.strong,{children:"WithdrawAsset"}),": ",(0,r.jsx)(a.code,{children:"{Concrete {0, Here}, Fungible {1000000000000}}"}),":","\n",(0,r.jsxs)(a.ol,{children:["\n",(0,r.jsx)(a.li,{children:"1 DOT o 1 KSM es suficiente para ejecutar esto."}),"\n",(0,r.jsx)(a.li,{children:"Debe asegurarse de que su cuenta soberana en la Relay Chain tiene fondos suficientes."}),"\n",(0,r.jsxs)(a.li,{children:["Consulte la p\xe1gina ",(0,r.jsx)(a.a,{href:"https://app.gitbook.com/o/-LgGrgOEDyFYjYWIb1DT/s/-M8GVK5H7hOsGnYqg-7q-872737601/~/changes/AhpKoCvdYLwztMP8vCAb/xcm/xcm-integration/xcm-tools",children:"Herramientas XCM"})," para obtener ayuda sobre el c\xe1lculo de la cuenta soberana."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.strong,{children:"BuyExecution"}),": ",(0,r.jsx)(a.code,{children:"{Concrete {0, Here}, Fungible {1000000000000}, Unlimited}"})]}),"\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.strong,{children:"Transact"}),": ",(0,r.jsx)(a.code,{children:"{Native, 1000000000, <encoded_call_data>}"}),":","\n",(0,r.jsxs)(a.ol,{children:["\n",(0,r.jsx)(a.li,{children:"Utilice los datos de llamadas codificados que ha preparado anteriormente."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(a.li,{children:(0,r.jsx)(a.strong,{children:"RefundSurplus"})}),"\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.strong,{children:"DepositAsset"}),": ",(0,r.jsx)(a.code,{children:"{Wild {All}, 1, {parents: 0, interior: X1(Parachain(2007))}}"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(a.li,{children:"Enviar y luego verificar la ejecuci\xf3n en la Relay Chain"}),"\n"]}),"\n",(0,r.jsx)(a.p,{children:"Deber\xe1 enviar dos llamadas de este tipo tanto para aceptar la solicitud como para iniciarla (o puede preparar una llamada por lotes). Una vez aceptado un canal, estar\xe1 disponible al inicio de la siguiente sesi\xf3n."}),"\n",(0,r.jsx)(a.h2,{id:"enviar-solicitud-para-abrir-el-canal-hrmp",children:"Enviar solicitud para abrir el canal HRMP"}),"\n",(0,r.jsxs)(a.p,{children:["Para abrir un canal HRMP con Astar o Shiden tendr\xe1 que crear una propuesta en nuestro ",(0,r.jsx)(a.a,{href:"https://forum.astar.network/",children:"forum"}),". Crea tu propuesta en la categor\xeda correcta:"]}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["Shiden Network: ",(0,r.jsx)(a.a,{href:"https://forum.astar.network/c/shiden/proposal/10",children:"https://forum.astar.network/c/shiden/proposal/10"})]}),"\n",(0,r.jsxs)(a.li,{children:["Astar Network: ",(0,r.jsx)(a.a,{href:"https://forum.astar.network/c/astar/proposal/20",children:"https://forum.astar.network/c/astar/proposal/20"})]}),"\n"]}),"\n",(0,r.jsxs)(a.p,{children:["Hemos creado una plantilla que puede utilizar para publicar su propuesta, que encontrar\xe1 ",(0,r.jsx)(a.a,{href:"https://astarnetwork.notion.site/Open-HRMP-Channel-Template-166eb1b8202d4439a8c00e4a50fe0d89",children:"aqu\xed"}),"."]}),"\n",(0,r.jsx)(a.h2,{id:"flujo-de-trabajo",children:"Flujo de trabajo"}),"\n",(0,r.jsx)(a.h3,{id:"crear-propuesta",children:"Crear Propuesta"}),"\n",(0,r.jsx)(a.p,{children:"Despu\xe9s de crear su propuesta, informaremos a nuestra comunidad, y se espera que usted haga un seguimiento en caso de que la comunidad tenga preguntas. Para continuar con el siguiente paso necesitar\xe1s la aprobaci\xf3n de nuestro consejo (gobernanza), que se realizar\xe1 a trav\xe9s de una encuesta en nuestro foro."}),"\n",(0,r.jsx)(a.h3,{id:"integraci\xf3n-en-testnet",children:"Integraci\xf3n en Testnet"}),"\n",(0,r.jsx)(a.p,{children:"El primer paso es que la parachain incorpore su red de pruebas a la Relay Chain Rococo. Una vez hecho esto, debe informarnos sobre su endpoint y parachain Id."}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:"Intercambiar puntos finales p\xfablicos."}),"\n",(0,r.jsx)(a.li,{children:"Intercambio de parachain-Ids."}),"\n"]}),"\n",(0,r.jsx)(a.p,{children:"Abriremos canales, registraremos activos e iniciaremos transferencias de prueba."}),"\n",(0,r.jsx)(a.h3,{id:"abriendo-un-canal-hrmp",children:"Abriendo un canal HRMP"}),"\n",(0,r.jsxs)(a.p,{children:["Tras las pruebas en Rococo, iniciaremos el proceso de apertura del canal HRMP y, si es necesario, iniciaremos tambi\xe9n el proceso de adici\xf3n del activo XCM. Lee m\xe1s sobre la incorporaci\xf3n de activos XCM ",(0,r.jsx)(a.a,{href:"https://app.gitbook.com/o/-LgGrgOEDyFYjYWIb1DT/s/-M8GVK5H7hOsGnYqg-7q-872737601/xcm/xcm-integration/xcm-asset-registration",children:"aqu\xed"}),"."]})]})}function p(e={}){const{wrapper:a}={...(0,i.a)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,a,n)=>{n.d(a,{Z:()=>o,a:()=>l});var r=n(67294);const i={},s=r.createContext(i);function l(e){const a=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(s.Provider,{value:a},e.children)}}}]);