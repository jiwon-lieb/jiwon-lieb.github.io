"use strict";(self.webpackChunkdocs_1=self.webpackChunkdocs_1||[]).push([[2248],{54564:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=t(85893),o=t(11151);const i={},a="Override mint() Method",s={id:"tutorials/from-zero-to-ink-hero/nft/Override/override",title:"Override mint() Method",description:"Mint allowed only for Owner",source:"@site/docs/tutorials/from-zero-to-ink-hero/nft/Override/override.md",sourceDirName:"tutorials/from-zero-to-ink-hero/nft/Override",slug:"/tutorials/from-zero-to-ink-hero/nft/Override/",permalink:"/ja/docs/tutorials/from-zero-to-ink-hero/nft/Override/",draft:!1,unlisted:!1,editUrl:"https://github.com/AstarNetwork/astar-docs/tree/main/docs/tutorials/from-zero-to-ink-hero/nft/Override/override.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Openbrush Wizard",permalink:"/ja/docs/tutorials/from-zero-to-ink-hero/nft/Wizard/"},next:{title:"Custom Trait",permalink:"/ja/docs/tutorials/from-zero-to-ink-hero/nft/CustomTrait/"}},l={},c=[{value:"Mint allowed only for Owner",id:"mint-allowed-only-for-owner",level:2},{value:"Make the mint() Function Payable",id:"make-the-mint-function-payable",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"override-mint-method",children:["Override ",(0,r.jsx)(n.code,{children:"mint()"})," Method"]}),"\n",(0,r.jsx)(n.h2,{id:"mint-allowed-only-for-owner",children:"Mint allowed only for Owner"}),"\n",(0,r.jsxs)(n.p,{children:["You may have noticed while using the Openbrush wizard, that prior to adding the Security -> Ownable trait, the contract will not have the ",(0,r.jsx)(n.code,{children:"mint()"})," function overridden, so anyone is able to mint new tokens, by default."]}),"\n",(0,r.jsxs)(n.p,{children:["However, after including the ",(0,r.jsx)(n.em,{children:"Ownable"})," trait, the default ",(0,r.jsx)(n.code,{children:"mint()"})," function will be overridden, and restricted to being called by the contract owner, only."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:"#[overrider(PSP34Mintable)]\n#[openbrush::modifiers(only_owner)]\nfn mint(&mut self, account: AccountId, id: Id) -> Result<(), PSP34Error>{\n    psp34::InternalImpl::_mint_to(self, account, id)\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The wizard also creates a line in the ",(0,r.jsx)(n.code,{children:"new()"})," constructor that sets the initial owner of the contract to the account address used to deploy it:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:"_instance._init_with_owner(_instance.env().caller());\n"})}),"\n",(0,r.jsx)(n.p,{children:"At this stage we will make a few changes:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"We do not want tokens to be mintable by the contract owner, only. We would like anyone who paid a fee to be able to mint tokens, as well."}),"\n",(0,r.jsx)(n.li,{children:"We would like to charge a fee of 1 SDN token per token minted (or any other native token, depending on the network)."}),"\n",(0,r.jsx)(n.li,{children:"The constructor should not call the mint function."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"make-the-mint-function-payable",children:"Make the mint() Function Payable"}),"\n",(0,r.jsxs)(n.p,{children:["Making a function payable in an ink! contract is relatively straightforward. Simply add ",(0,r.jsx)(n.code,{children:"payable"})," to the ink! macro as follows:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:"#[ink(message, payable)]\n"})}),"\n",(0,r.jsxs)(n.p,{children:["However, since ",(0,r.jsx)(n.code,{children:"PSP34Mintable"})," is an imported trait, the ",(0,r.jsx)(n.code,{children:"payable"})," attribute can't be overridden in the current state of Openbrush. Therefore, we will need to introduce a new trait, and implement it in our contract.\nThe trait ",(0,r.jsx)(n.code,{children:"PSP34Mintable"})," and it's ",(0,r.jsx)(n.code,{children:"mint()"})," function will no longer be needed, so can be removed from the contract."]}),"\n",(0,r.jsxs)(n.p,{children:["Let's introduce a new ",(0,r.jsx)(n.code,{children:"mint()"})," function to the contract, and add it after the constructor."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:"#[ink(message, payable)]\npub fn mint(&mut self, account: AccountId, id: Id) -> Result<(), PSP34Error> {\n    psp34::InternalImpl::_mint_to(self, account, id)\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["This will make the function payable, which means ",(0,r.jsx)(n.code,{children:"mint()"})," will be able to receive native tokens, however, we still need to check the amount of funds transferred by the call.\nIf the value transferred is not 1 native token, the ",(0,r.jsx)(n.code,{children:"mint()"})," method will return an error message that can be customized to suit your needs."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:'#[ink(message, payable)]\npub fn mint(&mut self, account: AccountId, id: Id) -> Result<(), PSP34Error> {\n    if self.env().transferred_value() != 1_000_000_000_000_000_000 {\n        return Err(PSP34Error::Custom(String::from("BadMintValue")));\n    }\n\n    psp34::InternalImpl::_mint_to(self, account, id)\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"Format your code with:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cargo fmt --all\n"})}),"\n",(0,r.jsx)(n.p,{children:"Check if code compiles:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cargo check\n"})}),"\n",(0,r.jsxs)(n.p,{children:["At this stage, your code should look something like ",(0,r.jsx)(n.a,{href:"https://github.com/swanky-dapps/nft/tree/tutorial/mint-step2",children:"this"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>a});var r=t(67294);const o={},i=r.createContext(o);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);