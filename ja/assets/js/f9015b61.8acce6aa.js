"use strict";(self.webpackChunkdocs_1=self.webpackChunkdocs_1||[]).push([[520],{73006:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=n(85893),r=n(11151);const o={},a="PayableMint Trait",s={id:"build/wasm/from-zero-to-ink-hero/nft/PayableMintTrait/payableminttrait",title:"PayableMint Trait",description:"So far, our mint() function is quite generic, giving freedom to a caller to mint any token, but at the same time not allowing insight into which tokens have already been minted. In this section we will more clearly define mint(), and add several utility functions commonly found in popular NFT projects, that will make this example contract more suitable for production release.",source:"@site/docs/build/wasm/from-zero-to-ink-hero/nft/PayableMintTrait/payableminttrait.md",sourceDirName:"build/wasm/from-zero-to-ink-hero/nft/PayableMintTrait",slug:"/build/wasm/from-zero-to-ink-hero/nft/PayableMintTrait/",permalink:"/ja/docs/build/wasm/from-zero-to-ink-hero/nft/PayableMintTrait/",draft:!1,unlisted:!1,editUrl:"https://github.com/AstarNetwork/astar-docs/tree/main/docs/build/wasm/from-zero-to-ink-hero/nft/PayableMintTrait/payableminttrait.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Custom Trait",permalink:"/ja/docs/build/wasm/from-zero-to-ink-hero/nft/CustomTrait/"},next:{title:"PayableMint Trait Implementation",permalink:"/ja/docs/build/wasm/from-zero-to-ink-hero/nft/PayableMintImpl/"}},l={},c=[{value:"Extending the Trait with Utility Functions",id:"extending-the-trait-with-utility-functions",level:2},{value:"<code>mint(to: AccountId, mint_amount: u64)</code>",id:"mintto-accountid-mint_amount-u64",level:3},{value:"<code>withdraw()</code>",id:"withdraw",level:3},{value:"<code>set_base_uri(uri: PreludeString)</code>",id:"set_base_uriuri-preludestring",level:3},{value:"<code>token_uri(token_id: u64) -&gt; PreludeString</code>",id:"token_uritoken_id-u64---preludestring",level:3},{value:"<code>max_supply() -&gt; u64;</code>",id:"max_supply---u64",level:3},{value:"<code>price() -&gt; Balance;</code>",id:"price---balance",level:3},{value:"Full Trait Definition",id:"full-trait-definition",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"payablemint-trait",children:"PayableMint Trait"}),"\n",(0,i.jsxs)(t.p,{children:["So far, our ",(0,i.jsx)(t.code,{children:"mint()"})," function is quite generic, giving freedom to a caller to mint any token, but at the same time not allowing insight into which tokens have already been minted. In this section we will more clearly define ",(0,i.jsx)(t.code,{children:"mint()"}),", and add several utility functions commonly found in popular NFT projects, that will make this example contract more suitable for production release."]}),"\n",(0,i.jsx)(t.h2,{id:"extending-the-trait-with-utility-functions",children:"Extending the Trait with Utility Functions"}),"\n",(0,i.jsxs)(t.p,{children:["Changes are applied in the ",(0,i.jsx)(t.code,{children:"logics/traits/payable_mint.rs"})," file."]}),"\n",(0,i.jsx)(t.h3,{id:"mintto-accountid-mint_amount-u64",children:(0,i.jsx)(t.code,{children:"mint(to: AccountId, mint_amount: u64)"})}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"mint()"})," function will now accept an NFT receiver account, and amount of tokens to be minted.\nThis will allow the contract to control which token will be minted next, and minting of more than one token at a time."]}),"\n",(0,i.jsx)(t.h3,{id:"withdraw",children:(0,i.jsx)(t.code,{children:"withdraw()"})}),"\n",(0,i.jsxs)(t.p,{children:["Since our contract accepts native token fees for minting, the owner needs to be able to withdraw the funds, otherwise they'll be locked in the contract forever. This function is set with an ",(0,i.jsx)(t.code,{children:"only_owner"})," modifier, that restricts the ability to withdraw funds to the contract owner, only, which are then transferred to the owner's address."]}),"\n",(0,i.jsx)(t.h3,{id:"set_base_uriuri-preludestring",children:(0,i.jsx)(t.code,{children:"set_base_uri(uri: PreludeString)"})}),"\n",(0,i.jsxs)(t.p,{children:["First we need to import ",(0,i.jsx)(t.code,{children:"String"})," from ",(0,i.jsx)(t.code,{children:"ink_prelude"})," and rename it so as to not be confused with the Openbrush String Implementation. The difference is that Openbrush String is in fact a vector of u8 elements, and since we expect users to use ",(0,i.jsx)(t.code,{children:"utf-8"})," strings, we will use String from prelude."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-rust",children:"use ink_prelude::string::String as PreludeString;\n"})}),"\n",(0,i.jsxs)(t.p,{children:["This function is able to change the ",(0,i.jsx)(t.code,{children:"base_uri"})," for our collection. This function is not used frequently, but will come in handy if the collection metadata becomes corrupted and requires updating. The initial ",(0,i.jsx)(t.code,{children:"base_uri"})," will be set during contract creation, which is described in next section."]}),"\n",(0,i.jsx)(t.h3,{id:"token_uritoken_id-u64---preludestring",children:(0,i.jsx)(t.code,{children:"token_uri(token_id: u64) -> PreludeString"})}),"\n",(0,i.jsxs)(t.p,{children:["Given the ",(0,i.jsx)(t.code,{children:"token_id"})," this method will return the full ",(0,i.jsx)(t.code,{children:"uri"})," for token's metadata."]}),"\n",(0,i.jsx)(t.h3,{id:"max_supply---u64",children:(0,i.jsx)(t.code,{children:"max_supply() -> u64;"})}),"\n",(0,i.jsx)(t.p,{children:"Read the max supply of tokens for this collection."}),"\n",(0,i.jsx)(t.h3,{id:"price---balance",children:(0,i.jsx)(t.code,{children:"price() -> Balance;"})}),"\n",(0,i.jsx)(t.p,{children:"Read the token price."}),"\n",(0,i.jsx)(t.h2,{id:"full-trait-definition",children:"Full Trait Definition"}),"\n",(0,i.jsxs)(t.p,{children:["At this stage, your ",(0,i.jsx)(t.code,{children:"logics/traits/payable_mint.rs"})," file should look something like this:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-rust",children:"use ink::prelude::string::String as PreludeString;\n\nuse openbrush::{\n    contracts::psp34::PSP34Error,\n    traits::{\n        AccountId,\n        Balance,\n    },\n};\n\n#[openbrush::wrapper]\npub type PayableMintRef = dyn PayableMint;\n\n#[openbrush::trait_definition]\npub trait PayableMint {\n    #[ink(message, payable)]\n    fn mint(&mut self, to: AccountId, mint_amount: u64) -> Result<(), PSP34Error>;\n    #[ink(message)]\n    fn withdraw(&mut self) -> Result<(), PSP34Error>;\n    #[ink(message)]\n    fn set_base_uri(&mut self, uri: PreludeString) -> Result<(), PSP34Error>;\n    #[ink(message)]\n    fn token_uri(&self, token_id: u64) -> Result<PreludeString, PSP34Error>;\n    #[ink(message)]\n    fn max_supply(&self) -> u64;\n    #[ink(message)]\n    fn price(&self) -> Balance;\n}\n"})})]})}function u(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>a});var i=n(67294);const r={},o=i.createContext(r);function a(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);