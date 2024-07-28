"use strict";(self.webpackChunkdocs_1=self.webpackChunkdocs_1||[]).push([[7041],{7639:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>o,toc:()=>l});var r=t(85893),n=t(11151);const c={sidebar_position:8},i="8. Launch Services",o={id:"build/nodes/collator/secure_setup_guide/launch_services",title:"8. Launch Services",description:"Launch Services",source:"@site/docs/build/nodes/collator/secure_setup_guide/launch_services.md",sourceDirName:"build/nodes/collator/secure_setup_guide",slug:"/build/nodes/collator/secure_setup_guide/launch_services",permalink:"/es/docs/build/nodes/collator/secure_setup_guide/launch_services",draft:!1,unlisted:!1,editUrl:"https://github.com/AstarNetwork/astar-docs/tree/main/docs/build/nodes/collator/secure_setup_guide/launch_services.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"7. Services",permalink:"/es/docs/build/nodes/collator/secure_setup_guide/services"},next:{title:"9. Run Monitor Dashboard",permalink:"/es/docs/build/nodes/collator/secure_setup_guide/start_monitoring"}},a={},l=[{value:"Launch Services",id:"launch-services",level:2},{value:"Test Alert manager <a></a>",id:"test-alert-manager-",level:2}];function d(e){const s={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"8-launch-services",children:"8. Launch Services"}),"\n",(0,r.jsx)(s.h2,{id:"launch-services",children:"Launch Services"}),"\n",(0,r.jsxs)(s.p,{children:["Launch a ",(0,r.jsx)(s.strong,{children:"daemon reload"})," to take the services into account in ",(0,r.jsx)(s.code,{children:"systemd"}),":"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"sudo systemctl daemon-reload\n"})}),"\n",(0,r.jsx)(s.p,{children:"Start the services:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"sudo systemctl start prometheus.service\nsudo systemctl start node_exporter.service\nsudo systemctl start process-exporter.service\nsudo systemctl start alertmanager.service\nsudo systemctl start grafana-server\n"})}),"\n",(0,r.jsx)(s.p,{children:"And check that they are working fine, one by one:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"systemctl status prometheus.service\nsystemctl status node_exporter.service\nsystemctl status process-exporter.service\nsystemctl status alertmanager.service\nsystemctl status grafana-server\n"})}),"\n",(0,r.jsx)(s.p,{children:"A service working fine should look like this:"}),"\n",(0,r.jsx)("center",{children:(0,r.jsx)("img",{src:"https://i.imgur.com/GtgGvQd.png",border:"1"})}),"\n",(0,r.jsx)(s.p,{children:"When everything is okay, activate the services!"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"sudo systemctl enable prometheus.service\nsudo systemctl enable node_exporter.service\nsudo systemctl enable process-exporter.service\nsudo systemctl enable alertmanager.service\nsudo systemctl enable grafana-server\n"})}),"\n",(0,r.jsxs)(s.h2,{id:"test-alert-manager-",children:["Test Alert manager ",(0,r.jsx)("a",{href:"#ac61",id:"ac61"})]}),"\n",(0,r.jsx)(s.p,{children:"Run this command to fire an alert:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:'curl -H "Content-Type: application/json" -d \'[{"labels":{"alertname":"Test"}}]\' localhost:9093/api/v1/alerts\n'})}),"\n",(0,r.jsx)(s.p,{children:"Check your inbox, you have a surprise:"}),"\n",(0,r.jsx)("center",{children:(0,r.jsx)("img",{src:"https://i.imgur.com/WItIQ8a.png",border:"1"})}),"\n",(0,r.jsxs)(s.p,{children:["You will always receive a ",(0,r.jsx)(s.strong,{children:"Firing"})," alert first, then a ",(0,r.jsx)(s.strong,{children:"Resolved"})," notification to indicate the alert isn\u2019t active anymore."]})]})}function u(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,s,t)=>{t.d(s,{Z:()=>o,a:()=>i});var r=t(67294);const n={},c=r.createContext(n);function i(e){const s=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(c.Provider,{value:s},e.children)}}}]);