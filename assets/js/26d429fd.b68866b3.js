"use strict";(self.webpackChunkdocs_1=self.webpackChunkdocs_1||[]).push([[7734],{85734:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var t=s(85893),a=s(11151);const i={},d="How to Install and Run",r={id:"build/dapp-staking/indexer/tutorial",title:"How to Install and Run",description:"Indexder Installation",source:"@site/docs/build/dapp-staking/indexer/tutorial.md",sourceDirName:"build/dapp-staking/indexer",slug:"/build/dapp-staking/indexer/tutorial",permalink:"/docs/build/dapp-staking/indexer/tutorial",draft:!1,unlisted:!1,editUrl:"https://github.com/AstarNetwork/astar-docs/tree/main/docs/build/dapp-staking/indexer/tutorial.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"The API and the Indexer",permalink:"/docs/build/dapp-staking/indexer/"},next:{title:"Integrations",permalink:"/docs/build/integrations/"}},o={},l=[{value:"Indexder Installation",id:"indexder-installation",level:2},{value:"1. Prerequisites",id:"1-prerequisites",level:3},{value:"2. sqd CLI installation",id:"2-sqd-cli-installation",level:3},{value:"3. Cloning the repo",id:"3-cloning-the-repo",level:3},{value:"Run",id:"run",level:2},{value:"Develop",id:"develop",level:2},{value:"Types",id:"types",level:3},{value:"Schema",id:"schema",level:3},{value:"Deploy to the aquarium",id:"deploy-to-the-aquarium",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"how-to-install-and-run",children:"How to Install and Run"}),"\n",(0,t.jsx)(n.h2,{id:"indexder-installation",children:"Indexder Installation"}),"\n",(0,t.jsx)(n.h3,{id:"1-prerequisites",children:"1. Prerequisites"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"npm, node \u2265 v16"}),"\n",(0,t.jsx)(n.li,{children:"git"}),"\n",(0,t.jsx)(n.li,{children:"docker"}),"\n",(0,t.jsx)(n.li,{children:"docker-compose with docker user & group"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"This is the list of install commands of the prerequisites for Ubuntu 22.04 for the program list above."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'# For node and npm\ncurl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | sudo gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg\nNODE_MAJOR=18\necho "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_$NODE_MAJOR.x nodistro main" | sudo tee /etc/apt/sources.list.d/nodesource.list\nsudo apt update\nsudo apt install nodejs\n\n# For docker\nsudo install -m 0755 -d /etc/apt/keyrings\nsudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc\nsudo chmod a+r /etc/apt/keyrings/docker.asc\necho \\\n  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \\\n  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \\\n  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null\nsudo apt-get update\nsudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin docker-compose\nsudo gpasswd -a $USER docker\nnewgrp docker\n'})}),"\n",(0,t.jsx)(n.h3,{id:"2-sqd-cli-installation",children:"2. sqd CLI installation"}),"\n",(0,t.jsx)(n.p,{children:"Start by installing the @subsquid/cli command line interface globally with:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo npm i -g @subsquid/cli\n\n"})}),"\n",(0,t.jsx)(n.h3,{id:"3-cloning-the-repo",children:"3. Cloning the repo"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"git clone [https://github.com/AstarNetwork/dapps-staking-indexer-v3](https://github.com/AstarNetwork/dapps-staking-indexer-v3)\ncd dapps-staking-indexer-v3\n"})}),"\n",(0,t.jsx)(n.h2,{id:"run",children:"Run"}),"\n",(0,t.jsx)(n.p,{children:"Use the following commands to start the ingestion process:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm ci\nsqd up\nsqd process\n"})}),"\n",(0,t.jsx)(n.p,{children:"Next, start the GraphQL server in a separate terminal with:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sqd serve\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"http://localhost:4350/graphql",children:"http://localhost:4350/graphql"})}),"\n",(0,t.jsx)(n.h2,{id:"develop",children:"Develop"}),"\n",(0,t.jsx)(n.h3,{id:"types",children:"Types"}),"\n",(0,t.jsx)(n.p,{children:"When changes are made to the rpc types, use the following commands:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm generate-metadata # for local node development\nsqd typegen # operates on metadata or rpc and modifies types\n"})}),"\n",(0,t.jsx)(n.h3,{id:"schema",children:"Schema"}),"\n",(0,t.jsx)(n.p,{children:"When you make changes to the schema, use the following commands:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sqd codegen\nsqd build # modify your squid to use the new schema until it builds\nsqd down; sqd up\nsqd migration:generate # rerun everytime there is a change to the schema\n"})}),"\n",(0,t.jsx)(n.p,{children:"This drops then re-creates the database and regenerates any migrations."}),"\n",(0,t.jsx)(n.h2,{id:"deploy-to-the-aquarium",children:"Deploy to the aquarium"}),"\n",(0,t.jsx)(n.p,{children:"There are 3 manifests, one for each network: astar, shiden and shibuya."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sqd deploy . -r --org astar-network -m manifests/astar.yaml\n"})})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>r,a:()=>d});var t=s(67294);const a={},i=t.createContext(a);function d(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);