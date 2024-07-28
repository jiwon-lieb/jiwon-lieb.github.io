"use strict";(self.webpackChunkdocs_1=self.webpackChunkdocs_1||[]).push([[9727],{68585:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var t=i(85893),s=i(11151);const o={},r="How to set up a Zombienet for XCM testing",a={id:"build/builder-guides/leverage_parachains/zombienet",title:"How to set up a Zombienet for XCM testing",description:"TL;DR",source:"@site/docs/build/builder-guides/leverage_parachains/zombienet.md",sourceDirName:"build/builder-guides/leverage_parachains",slug:"/build/builder-guides/leverage_parachains/zombienet",permalink:"/es/docs/build/builder-guides/leverage_parachains/zombienet",draft:!1,unlisted:!1,editUrl:"https://github.com/AstarNetwork/astar-docs/tree/main/docs/build/builder-guides/leverage_parachains/zombienet.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Mint NFTs with Lighthouse",permalink:"/es/docs/build/builder-guides/leverage_parachains/mint-nfts-lighthouse"},next:{title:"Analyzing on-chain data using Covalent API + Python",permalink:"/es/docs/build/builder-guides/integration_toolings/cookbook_1"}},l={},c=[{value:"TL;DR",id:"tldr",level:2},{value:"What is Zombienet?",id:"what-is-zombienet",level:2},{value:"What is XCM?",id:"what-is-xcm",level:2},{value:"Set up Zombienet CLI",id:"set-up-zombienet-cli",level:2},{value:"Build the <code>polkadot</code> binary file",id:"build-the-polkadot-binary-file",level:3},{value:"Download <code>astar-collator</code> binary file",id:"download-astar-collator-binary-file",level:3},{value:"Download the configuration file for Zombienet",id:"download-the-configuration-file-for-zombienet",level:3},{value:"Start the Zombienet with the configuration file",id:"start-the-zombienet-with-the-configuration-file",level:3},{value:"Set up cross-chain assets on two parachains",id:"set-up-cross-chain-assets-on-two-parachains",level:2},{value:"Execute a simple remote call from Shiden to Shibuya",id:"execute-a-simple-remote-call-from-shiden-to-shibuya",level:2},{value:"FAQ",id:"faq",level:2},{value:"Reference",id:"reference",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"how-to-set-up-a-zombienet-for-xcm-testing",children:"How to set up a Zombienet for XCM testing"}),"\n",(0,t.jsx)(n.h2,{id:"tldr",children:"TL;DR"}),"\n",(0,t.jsx)(n.p,{children:"Zombienet is a testing framework for Substrate-based blockchains, providing a simple CLI tool that allows users to spawn any Substrate-based blockchains including Astar, with the Polkadot relaychain. The assertions used in the tests can include on-chain storage, metrics, logs, and custom javascript scripts that interact with the chain."}),"\n",(0,t.jsxs)(n.p,{children:["To test XCM-related features, there are mainly two options: Rococo or a local Zombienet. But some parachains may not deploy testnets to Rococo, or some XCM-related testings (XC-20 asset registration, HRMP channel opening, etc.) may require ",(0,t.jsx)(n.code,{children:"sudo"})," access to the testnet which is in the testnet operator\u2019s hands. Thus, the ideal choice for XCM testings is local Zombienet."]}),"\n",(0,t.jsx)(n.p,{children:"In this guide, we will support you on how to set up Zombienet, how to spawn and configure the testnet with the latest release of the Polkadot relaychain, Astar, and how to test XCM-related features with local Zombienet."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"what-is-zombienet",children:"What is Zombienet?"}),"\n",(0,t.jsx)(n.p,{children:"Zombienet is a testing framework for Substrate-based blockchains, providing a simple CLI tool that allows users to spawn any Substrate-based blockchains including Astar, and the Polkadot relaychain. The assertions used in the tests can include on-chain storage, metrics, logs, and custom javascript scripts that interact with the chain."}),"\n",(0,t.jsx)(n.p,{children:"In this guide, we are setting up a local testnet environment with Polkadot relaychains with our parachains connected."}),"\n",(0,t.jsx)(n.h2,{id:"what-is-xcm",children:"What is XCM?"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Cross-Consensus Message Format (XCM)"})," aims to be a language to communicate ideas between consensus systems. One of Polkadot's promises is interoperability, and XCM is the vehicle through which it will deliver this promise. Simply, it is a standard that allows protocol developers to define the data and origins that their chains can send and receive from, including cross-chain asset transfer between parachains."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"set-up-zombienet-cli",children:"Set up Zombienet CLI"}),"\n",(0,t.jsxs)(n.p,{children:["In this section, we will set up Zombienet CLI using a binary. You can also set up Zombienet with docker, kubernetes, and\xa0more using the guide ",(0,t.jsx)(n.a,{href:"https://github.com/paritytech/zombienet#requirements-by-provider",children:"here"}),"."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Let\u2019s create a folder in the root directory to hold the binaries"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"mkdir cookbook-zombienet\ncd cookbook-zombienet\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Go to ",(0,t.jsx)(n.a,{href:"https://github.com/paritytech/zombienet/releases",children:"Zombienet"})," and download the binary built for your local environment."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Please don\u2019t forget to replace the release version number in the command line to the latest release."}),"\n",(0,t.jsxs)(n.li,{children:["In this cookbook, we are using ",(0,t.jsx)(n.a,{href:"https://github.com/paritytech/zombienet/releases/download/v1.3.22/zombienet-macos",children:"Zombienet v1.3.22"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Move the binary to our guide folder."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"mv ~/downloads/zombienet-macos ~/cookbook-zombienet\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Add execution permission to the Zombienet CLI binary file. ",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.strong,{children:"Note"}),": if you are using a Mac, you may need an extra step to configure the security settings:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Go to Apple menu >\xa0System Settings > Privacy & Security."}),"\n",(0,t.jsxs)(n.li,{children:["Under security, add the ",(0,t.jsx)(n.code,{children:"astar"})," binary file that you just downloaded to the whitelist."]}),"\n",(0,t.jsx)(n.li,{children:"Continue with the following command."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"chmod +x zombienet-macos\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Confirm if the binary is executable in your local environment."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"./zombienet-macos --help\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"When the Zombienet CLI is installed correctly, you should see the following info:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:'Usage: zombienet [options] [command]\n\nOptions:\n  -c, --spawn-concurrency <concurrency>  Number of concurrent spawning process to launch, default is 1\n  -p, --provider <provider>              Override provider to use (choices: "podman", "kubernetes", "native")\n  -m, --monitor                          Start as monitor, do not auto cleanup network\n  -d, --dir <path>                       Directory path for placing the network files instead of random temp one (e.g. -d /home/user/my-zombienet)\n  -f, --force                            Force override all prompt commands\n  -h, --help                             display help for comma\n'})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.h3,{id:"build-the-polkadot-binary-file",children:["Build the ",(0,t.jsx)(n.code,{children:"polkadot"})," binary file"]}),"\n",(0,t.jsxs)(n.p,{children:["In order to spawn a testnet with a relaychain and two parachains, we need the corresponding binary files for Polkadot relaychain and Astar Network. In this section, we will build the ",(0,t.jsx)(n.code,{children:"polkadot"})," binary file."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["First, let\u2019s clone the ",(0,t.jsx)(n.code,{children:"polkadot"})," source code"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"git clone https://github.com/paritytech/polkadot\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Make sure you have the latest Rust and the support tools installed so that you can compile the ",(0,t.jsx)(n.code,{children:"polkadot"})," source code smoothly."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"rustup update\nbrew install protobuf\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Checkout the latest release (v0.9.34 for now), compile the ",(0,t.jsx)(n.code,{children:"polkadot"})," source code, and build the ",(0,t.jsx)(n.code,{children:"polkadot"})," binary file."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"cd polkadot\ngit checkout release-v0.9.34\ncargo build --release\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["After the compilation, you will have a ",(0,t.jsx)(n.code,{children:"polkadot"})," binary file. Rename the old Polkadot folder and move the ",(0,t.jsx)(n.code,{children:"polkadot"})," binary to our guide folder."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"mv ~/cookbook-zombienet/polkadot ~/cookbook-zombienet/polkadot-built\nmv ~/cookbook-zombienet/polkadot-built/target/release/polkadot ~/cookbook-zombienet\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.h3,{id:"download-astar-collator-binary-file",children:["Download ",(0,t.jsx)(n.code,{children:"astar-collator"})," binary file"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Download the latest release of the ",(0,t.jsx)(n.a,{href:"https://github.com/AstarNetwork/Astar/releases",children:"astar-collator"})," for macOS or Ubuntu from ",(0,t.jsx)(n.a,{href:"https://github.com/AstarNetwork/Astar/releases",children:"https://github.com/AstarNetwork/Astar/releases"})]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"Please make sure you are running a macOS or Ubuntu with the appropriate version. For macOS, please use the versions above MacOS 12.0."})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Move the binary file to our cookbook folder."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"mv ~/downloads/astar-collator ~/cookbook-zombienet\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Add execution permission to the binary file ",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.strong,{children:"Note"}),": if you are using a Mac, you may need an extra step to configure the security settings:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Go to Apple menu >\xa0System Settings > Privacy & Security."}),"\n",(0,t.jsxs)(n.li,{children:["Under security, add the ",(0,t.jsx)(n.code,{children:"astar"})," binary file that you just downloaded to the whitelist."]}),"\n",(0,t.jsx)(n.li,{children:"Continue with the following command."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"chmod +x ./astar-collator\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"download-the-configuration-file-for-zombienet",children:"Download the configuration file for Zombienet"}),"\n",(0,t.jsxs)(n.p,{children:["In order to spawn the Zombienet, we need to add a configuration file to specify the configurations. We have a configuration file ready that is configured to two parachains named ",(0,t.jsx)(n.code,{children:"shiden-dev"})," and ",(0,t.jsx)(n.code,{children:"shibuya-dev"}),", and a relaychain named ",(0,t.jsx)(n.code,{children:"rococo-local"}),": ",(0,t.jsx)(n.a,{href:"https://github.com/AstarNetwork/Astar/tree/master/third-party/zombienet",children:"here"}),"."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Download the configuration file from ",(0,t.jsx)(n.a,{href:"https://github.com/AstarNetwork/Astar/blob/master/third-party/zombienet/multi_parachains.toml",children:"here"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"curl -o multi_parachains.toml https://raw.githubusercontent.com/AstarNetwork/Astar/master/third-party/zombienet/multi_parachains.toml\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"start-the-zombienet-with-the-configuration-file",children:"Start the Zombienet with the configuration file"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Start the Zombienet with the configuration file"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"./zombienet-macos -p native spawn multi_parachains.toml\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"After starting the Zombienet successfully, you will be able to see the local testnet endpoint and explorer link as shown below:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Untitled",src:i(67451).Z+"",width:"2958",height:"2100"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"set-up-cross-chain-assets-on-two-parachains",children:"Set up cross-chain assets on two parachains"}),"\n",(0,t.jsxs)(n.p,{children:["The HRMP channels between ",(0,t.jsx)(n.code,{children:"shiden-dev"})," and ",(0,t.jsx)(n.code,{children:"shibuya-dev"})," are opened as configured in the ",(0,t.jsx)(n.code,{children:"multi_parachains.toml"})," configuration file."]}),"\n",(0,t.jsxs)(n.p,{children:["To proceed to the next step of XCM testing, we only need to register the native assets of ",(0,t.jsx)(n.code,{children:"shiden-dev"})," and ",(0,t.jsx)(n.code,{children:"shibuya-dev"})," on each other to pay for XCM execution on the remote chain."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Go to ",(0,t.jsx)(n.a,{href:"https://polkadot.js.org/apps/?rpc=ws://127.0.0.1:51931#/explorer",children:"Polkadot.JS Explorer"})," (or the link specified in ",(0,t.jsx)(n.code,{children:"Direct Link"})," of ",(0,t.jsx)(n.code,{children:"collator1"})," )"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.code,{children:"Developer \u2192 Extrinsics \u2192 Decode"})," and input the following call data, to register ",(0,t.jsx)(n.code,{children:"xcSDN"})," on ",(0,t.jsx)(n.code,{children:"shibuya-dev"}),". Please make sure to submit the extrinsics via ",(0,t.jsx)(n.code,{children:"Alice"}),"'s account which have enough ",(0,t.jsx)(n.code,{children:"SBY"})," balance."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"0x63000b02102401910100d43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d0102093d002410910114786353444e14786353444e12003600010101005d1f91013601010101005d1f02286bee\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Go to ",(0,t.jsx)(n.a,{href:"https://polkadot.js.org/apps/?rpc=ws://127.0.0.1:51934#/explorer",children:"Polkadot.JS Explorer"})," (or the link specified in ",(0,t.jsx)(n.code,{children:"Direct Link"})," of ",(0,t.jsx)(n.code,{children:"collator2"})," )"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.code,{children:"Developer \u2192 Extrinsics \u2192 Decode"})," and input the following call data, to register ",(0,t.jsx)(n.code,{children:"xcSBY"})," on ",(0,t.jsx)(n.code,{children:"shiden-dev"}),". Please make sure to submit the extrinsics via ",(0,t.jsx)(n.code,{children:"Alice"}),"'s account which have enough ",(0,t.jsx)(n.code,{children:"SDN"})," balance."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"0x63000b02102401210300d43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d0102093d00241021031478635342591478635342591200360001010100411f2103360101010100411f02286bee\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"execute-a-simple-remote-call-from-shiden-to-shibuya",children:"Execute a simple remote call from Shiden to Shibuya"}),"\n",(0,t.jsxs)(n.p,{children:["In this section, we will create an XCM remote call that will send an instruction from ",(0,t.jsx)(n.code,{children:"shiden-dev"})," to execute ",(0,t.jsx)(n.code,{children:"System::remark_with_event"})," on ",(0,t.jsx)(n.code,{children:"shibuya-dev"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"For more details on how to create a remote execution call and how the derived account works, we will explain in another guide."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Send some ",(0,t.jsx)(n.code,{children:"SBY"})," to Alice\u2019s derived account on ",(0,t.jsx)(n.strong,{children:"Shibuya"})," - ",(0,t.jsx)(n.code,{children:"5Cvcv8RvSsp6go2pQ8FRXcGLAzNp5eyC8Je7KLHz5zFwuUyT"})," to pay for the gas fee of executing ",(0,t.jsx)(n.code,{children:"System::remark_with_event"}),"."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The remote call won\u2019t be executed via Alice's account on Shibuya directly, but with a new derived account. Thus, we need to send ",(0,t.jsx)(n.code,{children:"SBY"})," to the derived account."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Untitled",src:i(166).Z+"",width:"1900",height:"822"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Initiate the remote call by inputting the following call data in ",(0,t.jsx)(n.strong,{children:"Shiden\u2019s"})," ",(0,t.jsx)(n.code,{children:"Developer \u2192 Extrinsics \u2192 Decode"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"0x330001010100411f021400040000000013000064a7b3b6e00d130000000013000064a7b3b6e00d00060102286bee140a0808abba140d010004000101002611a3b92e2351f8b6c98b7b0654dc1daab45b2619ea357a848d4fe2b5ae1863\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["After 2 blocks, you will be able to observe the executed ",(0,t.jsx)(n.code,{children:"System::remark_with_event"})," in ",(0,t.jsx)(n.strong,{children:"Shibuya\u2019s"})," explore under the recent blocks."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Untitled",src:i(31864).Z+"",width:"1020",height:"314"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Untitled",src:i(92588).Z+"",width:"1448",height:"530"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"faq",children:"FAQ"}),"\n",(0,t.jsxs)(n.p,{children:["Please join our ",(0,t.jsx)(n.a,{href:"https://discord.com/invite/Z3nC9U4",children:"Discord"})," for technical support."]}),"\n",(0,t.jsx)(n.h2,{id:"reference",children:"Reference"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/paritytech/zombienet",children:"Zombienet"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://docs.astar.network/docs/xcm/integration/zombienet-testing",children:"Astar Documentation"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://hackmd.io/@brunopgalvao/S1Ilj5zA5",children:"Bruno Galvao"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},166:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/Untitled 1-d4ba51575395b8df8606b47f1dedbde9.png"},31864:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/Untitled 2-31978e9a2d96ad52b37a7f69ba6382c3.png"},92588:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/Untitled 3-c243bbec0278a05b96dcf45939371332.png"},67451:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/Untitled-ca061b40a5a10d1a9a2571f37ae821a2.png"},11151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>r});var t=i(67294);const s={},o=t.createContext(s);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);