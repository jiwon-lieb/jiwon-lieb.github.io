"use strict";(self.webpackChunkdocs_1=self.webpackChunkdocs_1||[]).push([[8022],{15518:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=t(85893),a=t(11151);const r={},s="PayableMint Trait Implementation",l={id:"build/wasm/from-zero-to-ink-hero/nft/PayableMintImpl/payablemintimpl",title:"PayableMint Trait Implementation",description:"In this section we will:",source:"@site/docs/build/wasm/from-zero-to-ink-hero/nft/PayableMintImpl/payablemintimpl.md",sourceDirName:"build/wasm/from-zero-to-ink-hero/nft/PayableMintImpl",slug:"/build/wasm/from-zero-to-ink-hero/nft/PayableMintImpl/",permalink:"/docs/build/wasm/from-zero-to-ink-hero/nft/PayableMintImpl/",draft:!1,unlisted:!1,editUrl:"https://github.com/AstarNetwork/astar-docs/tree/main/docs/build/wasm/from-zero-to-ink-hero/nft/PayableMintImpl/payablemintimpl.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"PayableMint Trait",permalink:"/docs/build/wasm/from-zero-to-ink-hero/nft/PayableMintTrait/"},next:{title:"Events",permalink:"/docs/build/wasm/from-zero-to-ink-hero/nft/Events/"}},o={},c=[{value:"New Type Definition",id:"new-type-definition",level:2},{value:"<code>mint()</code> Implementation",id:"mint-implementation",level:2},{value:"<code>withdraw()</code> Implementation",id:"withdraw-implementation",level:2},{value:"<code>set_base_uri()</code> and <code>token_uri()</code> Implementation",id:"set_base_uri-and-token_uri-implementation",level:2},{value:"Update Shiden34 Contract",id:"update-shiden34-contract",level:2},{value:"Compose Unit Test",id:"compose-unit-test",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"payablemint-trait-implementation",children:"PayableMint Trait Implementation"}),"\n",(0,i.jsx)(n.p,{children:"In this section we will:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Define a new data type."}),"\n",(0,i.jsxs)(n.li,{children:["Implement functions defined in the ",(0,i.jsx)(n.code,{children:"PayableMint"})," trait from the previous section in file ",(0,i.jsx)(n.code,{children:"logics/impl/payable_mint.rs"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"Update the contract's constructor to accept new parameters."}),"\n",(0,i.jsxs)(n.li,{children:["Write a unit test for ",(0,i.jsx)(n.code,{children:"mint()"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"new-type-definition",children:"New Type Definition"}),"\n",(0,i.jsxs)(n.p,{children:["Since the contract is able to accept new parameters, we will need storage to log them. Let's create a new file called ",(0,i.jsx)(n.code,{children:"logics/impls/payable_mint/types.rs"})," and add new type ",(0,i.jsx)(n.code,{children:"Data"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"use openbrush::traits::Balance;\n\n#[derive(Default, Debug)]\n#[openbrush::storage_item]\npub struct Data {\n    pub last_token_id: u64,\n    pub max_supply: u64,\n    pub price_per_mint: Balance,\n}rice_per_mint: Balance,\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Don't forget to update the ",(0,i.jsx)(n.code,{children:"logics/impls/payable_mint/mod.rs"})," file with:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"pub mod types;\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Since we introduced data storage, we will need to add a trait bound ",(0,i.jsx)(n.code,{children:"Storage<Data>"})," in ",(0,i.jsx)(n.code,{children:"logics/impls/payable_mint/payable_mint.rs"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"use crate::impls::payable_mint::types::Data;\n\n#[openbrush::trait_definition]\npub trait PayableMintImpl:\n    Storage<Data>\n    + Storage<psp34::Data>\n    + Storage<ownable::Data>\n    + Storage<metadata::Data>\n    {...}\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"mint-implementation",children:[(0,i.jsx)(n.code,{children:"mint()"})," Implementation"]}),"\n",(0,i.jsxs)(n.p,{children:["There are several checks that need to be performed before the token mint can proceed. To keep our ",(0,i.jsx)(n.code,{children:"mint()"})," function easy to read, let's introduce an ",(0,i.jsx)(n.code,{children:"Internal"})," trait with helper functions in our implementation file ",(0,i.jsx)(n.code,{children:"logics/impls/payable_mint/payable_mint.rs"})," and add two helper functions ",(0,i.jsx)(n.code,{children:"check_value()"})," and ",(0,i.jsx)(n.code,{children:"check_amount()"})," by defining traits and implementing them in the same file:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:'pub trait Internal: Storage<Data> + psp34::Internal {\n    /// Check if the transferred mint values is as expected\n    fn check_value(&self, transferred_value: u128, mint_amount: u64) -> Result<(), PSP34Error> {\n        if let Some(value) = (mint_amount as u128).checked_mul(self.data::<Data>().price_per_mint) {\n            if transferred_value == value {\n                return Ok(());\n            }\n        }\n        return Err(PSP34Error::Custom(String::from("BadMintValue")));\n    }\n\n    /// Check amount of tokens to be minted\n    fn check_amount(&self, mint_amount: u64) -> Result<(), PSP34Error> {\n        if mint_amount == 0 {\n            return Err(PSP34Error::Custom(String::from("CannotMintZeroTokens")));\n        }\n        if let Some(amount) = self.data::<Data>().last_token_id.checked_add(mint_amount) {\n            if amount <= self.data::<Data>().max_supply {\n                return Ok(());\n            }\n        }\n        return Err(PSP34Error::Custom(String::from("CollectionIsFull")));\n    }\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Using these helper functions our ",(0,i.jsx)(n.code,{children:"mint()"})," implementation will look like this:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"#[ink(message, payable)]\nfn mint(&mut self, to: AccountId, mint_amount: u64) -> Result<(), PSP34Error> {\n    self.check_value(Self::env().transferred_value(), mint_amount)?;\n    self.check_amount(mint_amount)?;\n\n    let next_to_mint = self.data::<Data>().last_token_id + 1; // first mint id is 1\n    let mint_offset = next_to_mint + mint_amount;\n\n    for mint_id in next_to_mint..mint_offset {\n        psp34::InternalImpl::_mint_to(self, to, Id::U64(mint_id))?;\n        self.data::<Data>().last_token_id += 1;\n    }\n\n    Ok(())\n}\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"withdraw-implementation",children:[(0,i.jsx)(n.code,{children:"withdraw()"})," Implementation"]}),"\n",(0,i.jsx)(n.p,{children:"This trait allows the contract owner to initiate withdrawal of funds from the contract by implementing a withdraw function:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:'/// Withdraws funds to contract owner\n#[ink(message)]\n#[openbrush::modifiers(only_owner)]\nfn withdraw(&mut self) -> Result<(), PSP34Error> {\n    let balance = Self::env().balance();\n    let current_balance = balance\n        .checked_sub(Self::env().minimum_balance())\n        .unwrap_or_default();\n    let owner = self.data::<ownable::Data>().owner.get().unwrap().unwrap();\n    Self::env()\n        .transfer(owner, current_balance)\n        .map_err(|_| PSP34Error::Custom(String::from("WithdrawalFailed")))?;\n    Ok(())\n}\n'})}),"\n",(0,i.jsxs)(n.h2,{id:"set_base_uri-and-token_uri-implementation",children:[(0,i.jsx)(n.code,{children:"set_base_uri()"})," and ",(0,i.jsx)(n.code,{children:"token_uri()"})," Implementation"]}),"\n",(0,i.jsxs)(n.p,{children:["To make the code cleaner, let's create additional helper function ",(0,i.jsx)(n.code,{children:"token_exist()"})," and add it to the ",(0,i.jsx)(n.code,{children:"Internal"})," trait:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"pub trait Internal: Storage<Data> + psp34::Internal {\n    ...\n\n     /// Check if token is minted\n    fn token_exists(&self, id: Id) -> Result<(), PSP34Error> {\n        self._owner_of(&id).ok_or(PSP34Error::TokenNotExists)?;\n        Ok(())\n    }\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Now the implementation of ",(0,i.jsx)(n.code,{children:"set_base_uri()"})," and ",(0,i.jsx)(n.code,{children:"token_uri()"})," will look like this:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:'...\n/// Set new value for the baseUri\n#[ink(message)]\n#[openbrush::modifiers(only_owner)]\nfn set_base_uri(&mut self, uri: String) -> Result<(), PSP34Error> {\n    let id = PSP34Impl::collection_id(self);\n    metadata::Internal::_set_attribute(self, id, String::from("baseUri"), uri);\n\n    Ok(())\n}\n\n/// Get URI from token ID\n#[ink(message)]\nfn token_uri(&self, token_id: u64) -> Result<String, PSP34Error> {\n    self.token_exists(Id::U64(token_id))?;\n    let base_uri = PSP34MetadataImpl::get_attribute(\n        self,\n        PSP34Impl::collection_id(self),\n        String::from("baseUri"),\n    );\n    let token_uri = base_uri.unwrap() + &token_id.to_string() + &String::from(".json");\n    Ok(token_uri)\n'})}),"\n",(0,i.jsx)(n.h2,{id:"update-shiden34-contract",children:"Update Shiden34 Contract"}),"\n",(0,i.jsxs)(n.p,{children:["Since we have added a new type ",(0,i.jsx)(n.code,{children:"Data"}),", let's import it into our ",(0,i.jsx)(n.code,{children:"Shiden34"})," contract:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"use payable_mint_pkg::impls::payable_mint::*;\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Add a new element in the ",(0,i.jsx)(n.code,{children:"struct Shiden34"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"...\n#[storage_field]\npayable_mint: types::Data,\n"})}),"\n",(0,i.jsx)(n.p,{children:"Update the constructor to accept new parameters:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:'...\n#[ink(constructor)]\npub fn new(\n    name: String,\n    symbol: String,\n    base_uri: String,\n    max_supply: u64,\n    price_per_mint: Balance,\n) -> Self {\n    let mut instance = Self::default();\n    let caller = instance.env().caller();\n    ownable::InternalImpl::_init_with_owner(&mut instance, caller);\n    let collection_id = psp34::PSP34Impl::collection_id(&instance);\n    metadata::InternalImpl::_set_attribute(\n        &mut instance,\n        collection_id.clone(),\n        String::from("name"),\n        name,\n    );\n    metadata::InternalImpl::_set_attribute(\n        &mut instance,\n        collection_id.clone(),\n        String::from("symbol"),\n        symbol,\n    );\n    metadata::InternalImpl::_set_attribute(\n        &mut instance,\n        collection_id,\n        String::from("baseUri"),\n        base_uri,\n    );\n    instance.payable_mint.max_supply = max_supply;\n    instance.payable_mint.price_per_mint = price_per_mint;\n    instance.payable_mint.last_token_id = 0;\n    instance\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"compose-unit-test",children:"Compose Unit Test"}),"\n",(0,i.jsxs)(n.p,{children:["Let's write a simple unit test to check the ",(0,i.jsx)(n.code,{children:"mint()"})," function. In ink! contracts, the unit test needs to be placed inside the contract module, and by default, Alice creates the contract.\nAfter all imports, let's write a helper method to initiate the contract:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:'#[cfg(test)]\n#[cfg(test)]\nmod tests {\n    use super::*;\n    use crate::shiden34::PSP34Error::*;\n    use ink::env::test;\n\n    const PRICE: Balance = 100_000_000_000_000_000;\n\n    fn init() -> Shiden34 {\n        const BASE_URI: &str = "ipfs://myIpfsUri/";\n        const MAX_SUPPLY: u64 = 10;\n        Shiden34::new(\n            String::from("Shiden34"),\n            String::from("SH34"),\n            String::from(BASE_URI),\n            MAX_SUPPLY,\n            PRICE,\n        )\n    }\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Test minting 5 tokens to Bob's account. Call to ",(0,i.jsx)(n.code,{children:"mint()"})," will be from Bob's account:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"#[ink::test]\nfn mint_multiple_works() {\n    let mut sh34 = init();\n    let accounts = test::default_accounts::<Environment>();\n    set_sender(accounts.bob);\n    let num_of_mints: u64 = 5;\n\n    assert_eq!(PSP34Impl::total_supply(&sh34), 0);\n    test::set_value_transferred::<ink::env::DefaultEnvironment>(\n        PRICE * num_of_mints as u128,\n    );\n    assert!(payable_mint::PayableMintImpl::mint(&mut sh34, accounts.bob, num_of_mints).is_ok());\n    assert_eq!(PSP34Impl::total_supply(&sh34), num_of_mints as u128);\n    assert_eq!(PSP34Impl::balance_of(&sh34, accounts.bob), 5);\n    assert_eq!(PSP34EnumerableImpl::owners_token_by_index(&sh34, accounts.bob, 0), Ok(Id::U64(1)));\n    assert_eq!(PSP34EnumerableImpl::owners_token_by_index(&sh34, accounts.bob, 1), Ok(Id::U64(2)));\n    assert_eq!(PSP34EnumerableImpl::owners_token_by_index(&sh34, accounts.bob, 2), Ok(Id::U64(3)));\n    assert_eq!(PSP34EnumerableImpl::owners_token_by_index(&sh34, accounts.bob, 3), Ok(Id::U64(4)));\n    assert_eq!(PSP34EnumerableImpl::owners_token_by_index(&sh34, accounts.bob, 4), Ok(Id::U64(5)));\n    assert_eq!(\n        PSP34EnumerableImpl::owners_token_by_index(&sh34, accounts.bob, 5),\n        Err(TokenNotExists)\n    );\n}\n\nfn set_sender(sender: AccountId) {\n    ink::env::test::set_caller::<Environment>(sender);\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"Run unit test:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cargo test\n"})}),"\n",(0,i.jsxs)(n.p,{children:["At this stage, your code should look something like ",(0,i.jsx)(n.a,{href:"https://github.com/swanky-dapps/nft/tree/tutorial/payablemint-step5",children:"this"}),"."]})]})}function m(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>s});var i=t(67294);const a={},r=i.createContext(a);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);