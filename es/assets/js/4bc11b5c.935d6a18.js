"use strict";(self.webpackChunkdocs_1=self.webpackChunkdocs_1||[]).push([[7303],{60736:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>w,contentTitle:()=>y,default:()=>U,frontMatter:()=>v,metadata:()=>f,toc:()=>z});var s=t(85893),i=t(11151);const c=t.p+"assets/images/add-cdk-1-22e679f6d42d30bf3fb9432b8e9b0d6c.png",l=t.p+"assets/images/add-cdk-2-c2c378ae5189fb795f23ed54c72fea14.png",r=t.p+"assets/images/add-cdk-3-32c6b4ff6664dc7a988c62192b98dc60.png",d=t.p+"assets/images/add-cdk-4-e6b9853da581fc8ddf926afac45333ad.png",a=t.p+"assets/images/add-cdk-5-53063456491d34462b87a550b58a8623.gif",o=t.p+"assets/images/add-cdk-6-cbe992acdc938d44aaae13012c894520.gif",p=t.p+"assets/images/add-cdk-7-3adee1051ac4486fb737ad3a1a97c6b1.png",h=t.p+"assets/images/add-cdk-8-7b3f4b1e1766520b4d6b049f96abc5f0.png",u=t.p+"assets/images/add-cdk-9-2fa13c0250d58f78ec16c40f43d7f089.png",m=t.p+"assets/images/add-cdk-10-e1938ef2886e8407ddb2d627dadf4568.png",x=t.p+"assets/images/add-cdk-11-417c8a15fa62ed04c43d901bcea4eaa0.png",j=t.p+"assets/images/add-cdk-12-a5f3870f174d520625c0a6a4400964c0.png",g=t.p+"assets/images/add-cdk-13-4feb901aa58bd274811147b1d5527f68.png",k=t.p+"assets/images/add-cdk-14-fbb49232ec2caf02bbb42e93299731db.png",b=t.p+"assets/images/add-cdk-15-98c649889590003bb944bc7c7d653c92.png",v={sidebar_position:1,title:"Setup Local Validium Node",sidebar_label:"Setup Local Validium Node"},y=void 0,f={id:"build/zkEVM/zk-node/setup-local-validium-node",title:"Setup Local Validium Node",description:"Validium",source:"@site/docs/build/zkEVM/zk-node/setup-local-validium-node.md",sourceDirName:"build/zkEVM/zk-node",slug:"/build/zkEVM/zk-node/setup-local-validium-node",permalink:"/es/docs/build/zkEVM/zk-node/setup-local-validium-node",draft:!1,unlisted:!1,editUrl:"https://github.com/AstarNetwork/astar-docs/tree/main/docs/build/zkEVM/zk-node/setup-local-validium-node.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Setup Local Validium Node",sidebar_label:"Setup Local Validium Node"},sidebar:"tutorialSidebar",previous:{title:"Setup Local Rollup Node",permalink:"/es/docs/build/zkEVM/zk-node/setup-local-rollup-node"},next:{title:"Setup zkEVM Mainnet RPC",permalink:"/es/docs/build/zkEVM/zk-node/setup-mainnet-rpc-node"}},w={},z=[{value:"Validium",id:"validium",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Hardware Requirements",id:"hardware-requirements",level:3},{value:"Software Requirements",id:"software-requirements",level:3},{value:"Install make",id:"install-make",level:2},{value:"Clone the repo",id:"clone-the-repo",level:2},{value:"Launch validium locally",id:"launch-validium-locally",level:2},{value:"Useful commands",id:"useful-commands",level:3},{value:"Test validium",id:"test-validium",level:2},{value:"Add the network to a Web3 wallet",id:"add-the-network-to-a-web3-wallet",level:2},{value:"Test the bridge",id:"test-the-bridge",level:2},{value:"L1 to L2",id:"l1-to-l2",level:3},{value:"L2 to L1",id:"l2-to-l1",level:3}];function L(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"validium",children:"Validium"}),"\n",(0,s.jsx)(n.p,{children:"This quick start guide shows you how to set up a CDK validium on your local machine that sets up and runs the following components:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"zkEVM databases: data node, event, explorer L1 and L2, pool, state, and bridge service"}),"\n",(0,s.jsx)(n.li,{children:"zkEVM node components: aggregator, approve service, sequencer and sequence sender, synchronizer"}),"\n",(0,s.jsx)(n.li,{children:"L1 network (mock)"}),"\n",(0,s.jsx)(n.li,{children:"Prover"}),"\n",(0,s.jsx)(n.li,{children:"Explorers L1, L2"}),"\n",(0,s.jsx)(n.li,{children:"JSON RPC explorer"}),"\n",(0,s.jsx)(n.li,{children:"L2 gas pricer"}),"\n",(0,s.jsx)(n.li,{children:"DAC: data availability service, dac setup committee"}),"\n",(0,s.jsx)(n.li,{children:"zkEVM bridge service and UI"}),"\n"]}),"\n",(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsx)(n.mdxAdmonitionTitle,{}),(0,s.jsx)(n.p,{children:"The documentation describes standard deployments.\nEdit the configuration files to implement your own custom setups."})]}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsx)(n.h3,{id:"hardware-requirements",children:"Hardware Requirements"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"A Linux-based OS (e.g., Ubuntu Server 22.04 LTS)."}),"\n",(0,s.jsx)(n.li,{children:"At least 16GB RAM with a 4-core CPU."}),"\n",(0,s.jsx)(n.li,{children:"An AMD64 architecture system."}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsx)(n.p,{children:"CDK does not support ARM-based Macs."})}),"\n",(0,s.jsx)(n.h3,{id:"software-requirements",children:"Software Requirements"}),"\n",(0,s.jsxs)(n.p,{children:["The tutorial for current version of the environment requires ",(0,s.jsx)(n.code,{children:"go"})," and ",(0,s.jsx)(n.code,{children:"docker"})," to be previously installed on your machine. If you don\u2019t have these installed, check out the links provided below:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://go.dev/doc/install",children:"Go"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docs.docker.com/engine/install/ubuntu/",children:"Docker and Docker compose"})}),"\n"]}),"\n",(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsx)(n.mdxAdmonitionTitle,{}),(0,s.jsx)(n.p,{children:"This document uses docker compose v2."})]}),"\n",(0,s.jsx)(n.h2,{id:"install-make",children:"Install make"}),"\n",(0,s.jsx)(n.p,{children:"Install make on Ubuntu:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo apt install make\n"})}),"\n",(0,s.jsx)(n.h2,{id:"clone-the-repo",children:"Clone the repo"}),"\n",(0,s.jsx)(n.p,{children:"Run the following commands:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/Snapchain/zkValidium-quickstart.git\ncd zkValidium-quickstart\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Create the ",(0,s.jsx)(n.code,{children:".env"})," file by copying the example:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cp .env.example .env\n"})}),"\n",(0,s.jsx)(n.h2,{id:"launch-validium-locally",children:"Launch validium locally"}),"\n",(0,s.jsx)(n.p,{children:"Pull the required Docker images from Docker Hub:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo docker compose pull\n"})}),"\n",(0,s.jsx)(n.p,{children:"After pulling the images, start your local CDK validium:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo make run\n"})}),"\n",(0,s.jsx)(n.p,{children:"To ensure all services are running properly, check the status of each container:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo docker compose ps\n"})}),"\n",(0,s.jsx)(n.p,{children:"You should see similar to this output:"}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:"Container status details"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'$ sudo docker ps --format "table {{.Names}}\\t{{.Command}}\\t{{.Status}}\\t{{.Ports}}"\nNAMES                              COMMAND                  STATUS                    PORTS\nexplorer-sig-provider              "./sig-provider-serv\u2026"   Up 11 minutes             0.0.0.0:8151->8050/tcp, :::8151->8050/tcp\nvisualizer-proxy                   "/docker-entrypoint.\u2026"   Up 11 minutes             80/tcp, 0.0.0.0:8083->8081/tcp, :::8083->8081/tcp\nexplorer-visualizer                "./visualizer-server"    Up 11 minutes             0.0.0.0:8152->8050/tcp, :::8152->8050/tcp\nexplorer-smart-contract-verifier   "./smart-contract-ve\u2026"   Up 11 minutes             0.0.0.0:8150->8050/tcp, :::8150->8050/tcp\nexplorer-proxy-l2                  "/docker-entrypoint.\u2026"   Up 11 minutes             0.0.0.0:80->80/tcp, :::80->80/tcp, 0.0.0.0:8084->8080/tcp, :::8084->8080/tcp\nexplorer-stats-l2                  "./stats-server"         Up 11 minutes             0.0.0.0:8154->8050/tcp, :::8154->8050/tcp\nexplorer-stats-db-l2               "docker-entrypoint.s\u2026"   Up 11 minutes             0.0.0.0:7434->5432/tcp, :::7434->5432/tcp\nexplorer-frontend-l2               "./entrypoint.sh nod\u2026"   Up 11 minutes             0.0.0.0:3001->3000/tcp, :::3001->3000/tcp\nexplorer-backend-l2                "sh -c \'bin/blocksco\u2026"   Up 11 minutes             0.0.0.0:4001->4000/tcp, :::4001->4000/tcp\nzkevm-explorer-json-rpc            "/bin/sh -c \'/app/zk\u2026"   Up 11 minutes             0.0.0.0:8124->8124/tcp, :::8124->8124/tcp, 8123/tcp, 0.0.0.0:8134->8134/tcp, :::8134->8134/tcp\nexplorer-backend-l2-db             "docker-entrypoint.s\u2026"   Up 11 minutes             0.0.0.0:5437->5432/tcp, :::5437->5432/tcp\nexplorer-proxy-l1                  "/docker-entrypoint.\u2026"   Up 11 minutes             0.0.0.0:81->80/tcp, :::81->80/tcp, 0.0.0.0:8082->8080/tcp, :::8082->8080/tcp\nexplorer-stats-l1                  "./stats-server"         Up 12 minutes             0.0.0.0:8153->8050/tcp, :::8153->8050/tcp\nexplorer-stats-db-l1               "docker-entrypoint.s\u2026"   Up 12 minutes             0.0.0.0:7433->5432/tcp, :::7433->5432/tcp\nexplorer-frontend-l1               "./entrypoint.sh nod\u2026"   Up 12 minutes             0.0.0.0:3000->3000/tcp, :::3000->3000/tcp\nexplorer-backend-l1                "sh -c \'bin/blocksco\u2026"   Up 12 minutes             0.0.0.0:4000->4000/tcp, :::4000->4000/tcp\nexplorer-backend-l1-db             "docker-entrypoint.s\u2026"   Up 12 minutes             0.0.0.0:5436->5432/tcp, :::5436->5432/tcp\nzkevm-bridge-ui                    "/bin/sh /app/script\u2026"   Up 12 minutes             0.0.0.0:8088->80/tcp, :::8088->80/tcp\nzkevm-bridge-service               "/bin/sh -c \'/app/zk\u2026"   Up 12 minutes             0.0.0.0:8080->8080/tcp, :::8080->8080/tcp, 0.0.0.0:9090->9090/tcp, :::9090->9090/tcp\nzkevm-bridge-db                    "docker-entrypoint.s\u2026"   Up 12 minutes             5438/tcp, 0.0.0.0:5438->5432/tcp, :::5438->5432/tcp\nzkevm-json-rpc                     "/bin/sh -c \'/app/zk\u2026"   Up 12 minutes             0.0.0.0:8123->8123/tcp, :::8123->8123/tcp, 0.0.0.0:8133->8133/tcp, :::8133->8133/tcp, 0.0.0.0:9091->9091/tcp, :::9091->9091/tcp\nzkevm-aggregator                   "/bin/sh -c \'/app/zk\u2026"   Up 12 minutes             8123/tcp, 0.0.0.0:50081->50081/tcp, :::50081->50081/tcp, 0.0.0.0:9093->9091/tcp, :::9093->9091/tcp\nzkevm-l2gaspricer                  "/bin/sh -c \'/app/zk\u2026"   Up 12 minutes             8123/tcp\nzkevm-sequence-sender              "/bin/sh -c \'/app/zk\u2026"   Up 12 minutes             8123/tcp\nzkevm-sequencer                    "/bin/sh -c \'/app/zk\u2026"   Up 12 minutes             0.0.0.0:6060->6060/tcp, :::6060->6060/tcp, 0.0.0.0:6900->6900/tcp, :::6900->6900/tcp, 8123/tcp, 0.0.0.0:9092->9091/tcp, :::9092->9091/tcp\nzkevm-eth-tx-manager               "/bin/sh -c \'/app/zk\u2026"   Up 12 minutes             8123/tcp, 0.0.0.0:9094->9091/tcp, :::9094->9091/tcp\nzkevm-sync                         "/bin/sh -c \'/app/zk\u2026"   Up 12 minutes             8123/tcp, 0.0.0.0:9095->9091/tcp, :::9095->9091/tcp\nzkevm-prover                       "zkProver -c /usr/sr\u2026"   Up 12 minutes             0.0.0.0:50061->50061/tcp, :::50061->50061/tcp, 0.0.0.0:50071->50071/tcp, :::50071->50071/tcp\nzkevm-data-availability            "/bin/sh -c \'/app/cd\u2026"   Up 12 minutes             0.0.0.0:8444->8444/tcp, :::8444->8444/tcp\nzkevm-data-node-db                 "docker-entrypoint.s\u2026"   Up 12 minutes (healthy)   0.0.0.0:5444->5432/tcp, :::5444->5432/tcp\nzkevm-mock-l1-network              "geth --http --http.\u2026"   Up 12 minutes             0.0.0.0:8545-8546->8545-8546/tcp, :::8545-8546->8545-8546/tcp, 30303/tcp, 30303/udp\nzkevm-event-db                     "docker-entrypoint.s\u2026"   Up 12 minutes             0.0.0.0:5435->5432/tcp, :::5435->5432/tcp\nzkevm-pool-db                      "docker-entrypoint.s\u2026"   Up 12 minutes             0.0.0.0:5433->5432/tcp, :::5433->5432/tcp\nzkevm-state-db                     "docker-entrypoint.s\u2026"   Up 12 minutes             0.0.0.0:5432->5432/tcp, :::5432->5432/tcp\n'})})]}),"\n",(0,s.jsxs)(n.p,{children:["If a service isn\u2019t running (i.e. it is in ",(0,s.jsx)(n.strong,{children:"Exit 1"})," state), investigate further using the logs:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo docker compose logs <container_name>\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["Find the ",(0,s.jsx)(n.strong,{children:"<container_name>"})," in the docker command output."]})}),"\n",(0,s.jsx)(n.h3,{id:"useful-commands",children:"Useful commands"}),"\n",(0,s.jsx)(n.p,{children:"To stop CDK validium, use:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo make stop\n"})}),"\n",(0,s.jsx)(n.p,{children:"To restart all services:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo make restart\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"This local deployment runs on an L1 Geth instance."})}),"\n",(0,s.jsx)(n.h2,{id:"test-validium",children:"Test validium"}),"\n",(0,s.jsxs)(n.p,{children:["Verify the block explorer is running by navigating to ",(0,s.jsx)(n.a,{href:"http://localhost",children:"localhost"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"You should see a page similar to this:"}),"\n",(0,s.jsx)("div",{style:{textAlign:"center"},children:(0,s.jsx)("img",{src:c,style:{width:1e3}})}),"\n",(0,s.jsx)(n.h2,{id:"add-the-network-to-a-web3-wallet",children:"Add the network to a Web3 wallet"}),"\n",(0,s.jsxs)(n.p,{children:["Follow MetaMask\u2019s instructions on ",(0,s.jsx)(n.a,{href:"https://support.metamask.io/hc/en-us/articles/360043227612-How-to-add-a-custom-network-RPC",children:"how to set up a network manually"}),"."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Set the chain ID to ",(0,s.jsx)(n.strong,{children:"1001"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["The currency symbol can be anything but we will use ",(0,s.jsx)(n.strong,{children:"POL"})," by default."]}),"\n",(0,s.jsxs)(n.li,{children:["The RPC node and block explorer containers can be found at ports ",(0,s.jsx)(n.strong,{children:"8123"})," and ",(0,s.jsx)(n.strong,{children:"80"}),", respectively."]}),"\n"]}),"\n",(0,s.jsx)("div",{style:{textAlign:"center"},children:(0,s.jsx)("img",{src:l,style:{width:1e3}})}),"\n",(0,s.jsx)(n.p,{children:"Switch to the new network:"}),"\n",(0,s.jsx)("div",{style:{textAlign:"center"},children:(0,s.jsx)("img",{src:r,style:{width:1e3}})}),"\n",(0,s.jsx)(n.admonition,{type:"important",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["An account with test funds is available with private key ",(0,s.jsx)(n.code,{children:"0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80"})]}),"\n",(0,s.jsx)(n.li,{children:"NEVER transfer real assets to the address associated with this private key."}),"\n"]})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://support.metamask.io/hc/en-us/articles/360015489331-How-to-import-an-account",children:"Import the account to MetaMask"}),". The balance shows up as 100000 POL:"]}),"\n",(0,s.jsx)("div",{style:{textAlign:"center"},children:(0,s.jsx)("img",{src:d,style:{width:1e3}})}),"\n",(0,s.jsx)(n.p,{children:"Transfer some tokens to another account:"}),"\n",(0,s.jsx)("div",{style:{textAlign:"center"},children:(0,s.jsx)("img",{src:a,style:{width:1e3}})}),"\n",(0,s.jsx)(n.p,{children:"After confirming the transaction, check the updated balances:"}),"\n",(0,s.jsx)("div",{style:{textAlign:"center"},children:(0,s.jsx)("img",{src:o,style:{width:1e3}})}),"\n",(0,s.jsx)(n.p,{children:"You can also view the transaction details in the block explorer by clicking on the transaction details in MetaMask:"}),"\n",(0,s.jsx)("div",{style:{textAlign:"center"},children:(0,s.jsx)("img",{src:p,style:{width:1e3}})}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(n.admonition,{title:"Troubleshooting stuck transactions with MetaMask",type:"warning",children:[(0,s.jsx)(n.p,{children:"If you encounter a stuck transaction, it is likely due to an incorrect nonce setting."}),(0,s.jsx)(n.p,{children:"To resolve this issue, follow the steps below:"}),(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Open Metamask and navigate to your account."}),"\n",(0,s.jsx)(n.li,{children:"Click on Settings."}),"\n",(0,s.jsx)(n.li,{children:"In the Settings menu, select Advanced."}),"\n",(0,s.jsx)(n.li,{children:"Locate the option Clear activity and nonce data and click on it."}),"\n",(0,s.jsx)(n.li,{children:"This resets the nonce data associated with the account, which often resolves transaction-related issues."}),"\n"]})]}),"\n",(0,s.jsx)(n.h2,{id:"test-the-bridge",children:"Test the bridge"}),"\n",(0,s.jsx)(n.p,{children:"CDK has a native bridge with UI that allows you to transfer funds between the L1 and the L2 validium."}),"\n",(0,s.jsx)(n.h3,{id:"l1-to-l2",children:"L1 to L2"}),"\n",(0,s.jsx)(n.p,{children:"Add the L1 RPC to MetaMask:"}),"\n",(0,s.jsx)("div",{style:{textAlign:"center"},children:(0,s.jsx)("img",{src:h,style:{width:1e3}})}),"\n",(0,s.jsx)(n.p,{children:"Switch to the L1 network and you will see the previously imported account with ~999 POL on the L1 chain."}),"\n",(0,s.jsxs)(n.p,{children:["Verify the bridge UI by navigating to ",(0,s.jsx)(n.a,{href:"http://localhost:8088/",children:"localhost:8088"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Click on ",(0,s.jsx)(n.strong,{children:"Connect a wallet > MetaMask"}),"."]}),"\n",(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsx)(n.mdxAdmonitionTitle,{}),(0,s.jsx)(n.p,{children:"You won\u2019t see this view the second time around."})]}),"\n",(0,s.jsx)("div",{style:{textAlign:"center"},children:(0,s.jsx)("img",{src:u,style:{width:1e3}})}),"\n",(0,s.jsxs)(n.p,{children:["Select the previously imported account ",(0,s.jsx)(n.code,{children:"0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"}),". Once you are connected, you should see a page like this:"]}),"\n",(0,s.jsx)("div",{style:{textAlign:"center"},children:(0,s.jsx)("img",{src:m,style:{width:1e3}})}),"\n",(0,s.jsxs)(n.p,{children:["Enter the amount (e.g. 5) to bridge and click ",(0,s.jsx)(n.strong,{children:"Continue"}),", after confirming you understood what you\u2019re doing, you will see the ",(0,s.jsx)(n.strong,{children:"Confirm Bridge"})," page."]}),"\n",(0,s.jsxs)(n.p,{children:["Click ",(0,s.jsx)(n.strong,{children:"Bridge"})," and approve the transaction on the MetaMask pop-up:"]}),"\n",(0,s.jsx)("div",{style:{textAlign:"center"},children:(0,s.jsx)("img",{src:x,style:{width:1e3}})}),"\n",(0,s.jsxs)(n.p,{children:["Once bridging is complete, you should see the ",(0,s.jsx)(n.strong,{children:"Activity"})," page:"]}),"\n",(0,s.jsx)("div",{style:{textAlign:"center"},children:(0,s.jsx)("img",{src:j,style:{width:1e3}})}),"\n",(0,s.jsx)(n.h3,{id:"l2-to-l1",children:"L2 to L1"}),"\n",(0,s.jsxs)(n.p,{children:["witch network on MetaMask to your validium chain and navigate back to ",(0,s.jsx)(n.a,{href:"http://localhost:8088/",children:"localhost:8088"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"You should see both the updated L1 and L2 balances:"}),"\n",(0,s.jsx)("div",{style:{textAlign:"center"},children:(0,s.jsx)("img",{src:g,style:{width:1e3}})}),"\n",(0,s.jsx)(n.p,{children:"Enter an amount and follow the same process to bridge the fund back to the L1."}),"\n",(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsx)(n.mdxAdmonitionTitle,{}),(0,s.jsx)(n.p,{children:"You cannot bridge back fund more than what you have previously bridged from L1 to the L2."})]}),"\n",(0,s.jsxs)(n.p,{children:["The L2->L1 bridging is slightly different than L1->L2 and you will see the ",(0,s.jsx)(n.strong,{children:"Activity"})," page like this after the transaction is executed:"]}),"\n",(0,s.jsx)("div",{style:{textAlign:"center"},children:(0,s.jsx)("img",{src:k,style:{width:1e3}})}),"\n",(0,s.jsxs)(n.p,{children:["Click ",(0,s.jsx)(n.strong,{children:"Finalise"})," and approve the transaction (Note: MetaMask will pop up a window to ask you to switch to the L1 network first). Then you will see this once the bridging is completed:"]}),"\n",(0,s.jsx)("div",{style:{textAlign:"center"},children:(0,s.jsx)("img",{src:b,style:{width:1e3}})})]})}function U(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(L,{...e})}):L(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>l});var s=t(67294);const i={},c=s.createContext(i);function l(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);