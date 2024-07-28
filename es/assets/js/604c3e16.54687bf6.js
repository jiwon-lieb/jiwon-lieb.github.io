"use strict";(self.webpackChunkdocs_1=self.webpackChunkdocs_1||[]).push([[5265],{16430:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var r=n(85893),s=n(11151);const a={sidebar_position:1},o="Factory Storage and Getters",c={id:"build/wasm/from-zero-to-ink-hero/dex/Factory/getters",title:"Factory Storage and Getters",description:"If you are starting the tutorial from here, please check out this branch and open it in your IDE.",source:"@site/docs/build/wasm/from-zero-to-ink-hero/dex/Factory/getters.md",sourceDirName:"build/wasm/from-zero-to-ink-hero/dex/Factory",slug:"/build/wasm/from-zero-to-ink-hero/dex/Factory/getters",permalink:"/es/docs/build/wasm/from-zero-to-ink-hero/dex/Factory/getters",draft:!1,unlisted:!1,editUrl:"https://github.com/AstarNetwork/astar-docs/tree/main/docs/build/wasm/from-zero-to-ink-hero/dex/Factory/getters.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Modifiers",permalink:"/es/docs/build/wasm/from-zero-to-ink-hero/dex/Pair/modifiers"},next:{title:"Create Pair",permalink:"/es/docs/build/wasm/from-zero-to-ink-hero/dex/Factory/create-pair"}},i={},d=[{value:"1. Factory Storage",id:"1-factory-storage",level:2},{value:"2. Trait for Getters",id:"2-trait-for-getters",level:2},{value:"3. Implement Getters",id:"3-implement-getters",level:2},{value:"4. Implement gGetters in Contract",id:"4-implement-ggetters-in-contract",level:3}];function l(e){const t={a:"a",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"factory-storage-and-getters",children:"Factory Storage and Getters"}),"\n",(0,r.jsxs)(t.p,{children:["If you are starting the tutorial from here, please check out this ",(0,r.jsx)(t.a,{href:"https://github.com/AstarNetwork/wasm-tutorial-dex/tree/tutorial/modifiers_end",children:"branch"})," and open it in your IDE."]}),"\n",(0,r.jsx)(t.h2,{id:"1-factory-storage",children:"1. Factory Storage"}),"\n",(0,r.jsxs)(t.p,{children:["The Factory contract has ",(0,r.jsx)(t.a,{href:"https://github.com/Uniswap/v2-core/blob/ee547b17853e71ed4e0101ccfd52e70d5acded58/contracts/UniswapV2Factory.sol#L7",children:"storage fields"})," implemented in Solidity that we will need to implement in our contract(s):"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-solidity",children:"    address public feeTo;\n    address public feeToSetter;\n\n    mapping(address => mapping(address => address)) public getPair;\n    address[] public allPairs;\n"})}),"\n",(0,r.jsx)(t.p,{children:"Ink! uses most Substrate primitive types. Here is a table of conversion between Solidity and ink! types:"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Solidity"}),(0,r.jsx)(t.th,{children:"ink!"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"uint256"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://docs.rs/primitive-types/latest/primitive_types/struct.U256.html",children:"U256"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"any other uint"}),(0,r.jsx)(t.td,{children:"u128 (or lower)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"address"}),(0,r.jsx)(t.td,{children:"AccountId"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"mapping(key => value)"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://docs.rs/ink_storage/latest/ink_storage/struct.Mapping.html",children:"Mapping(key, value)"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"mapping(key1 => mapping(key2 => value))"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://substrate.stackexchange.com/a/3993/567",children:"Mapping((key1 ,key2), value)"})})]})]})]}),"\n",(0,r.jsxs)(t.p,{children:["Let's create a storage struct in the ",(0,r.jsx)(t.em,{children:"./logics/impls/factory/data.rs"})," file. Name the struct ",(0,r.jsx)(t.code,{children:"Data"})," and add the required fields:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-rust",children:"pub struct Data {\n    pub fee_to: AccountId,\n    pub fee_to_setter: AccountId,\n    pub get_pair: Mapping<(AccountId, AccountId), AccountId>,\n    pub all_pairs: Vec<AccountId>,\n}\n"})}),"\n",(0,r.jsxs)(t.p,{children:["The Factory contract will deploy instances of the Pair contract . In Substrate, the contract deployment process is split into ",(0,r.jsx)(t.a,{href:"https://use.ink/getting-started/deploy-your-contract",children:"two steps"}),":"]}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["Deploying your contract code to the blockchain (the Wasm blob will be uploaded and has a unique ",(0,r.jsx)(t.code,{children:"code_hash"}),")."]}),"\n",(0,r.jsx)(t.li,{children:"Creating an instance of your contract (by calling a constructor)."}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["That's why the Factory Storage should save the Pair contract ",(0,r.jsx)(t.code,{children:"code_hash"})," in order to instantiate it. Add a Pair ",(0,r.jsx)(t.code,{children:"code_hash"})," field to the Storage:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-rust",children:"    pub pair_contract_code_hash: Hash,\n"})}),"\n",(0,r.jsxs)(t.p,{children:["OpenBrush uses a specified storage key instead of the default one in the attribute ",(0,r.jsx)(t.a,{href:"https://github.com/727-Ventures/openbrush-contracts/blob/35aae841cd13ca4e4bc6d63be96dc27040c34064/lang/macro/src/lib.rs#L466",children:"openbrush::upgradeable_storage"}),". It implements all ",(0,r.jsx)(t.a,{href:"https://docs.openbrush.io/smart-contracts/upgradeable#suggestions-on-how-follow-the-rules",children:"required traits"})," with the specified storage key (storage key is a required input argument of the macro).\nTo generate a unique key, Openbrush provides a ",(0,r.jsx)(t.a,{href:"https://docs.openbrush.io/smart-contracts/upgradeable#unique-storage-key",children:"openbrush::storage_unique_key!"})," declarative macro that is based on the name of the struct and its file path. Let's add this to our struct and import the required fields:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-rust",children:"use ink::{\n    prelude::vec::Vec,\n    primitives::Hash,\n};\nuse openbrush::{\n    storage::Mapping,\n    traits::{\n        AccountId,\n        ZERO_ADDRESS,\n    },\n};\n\npub const STORAGE_KEY: u32 = openbrush::storage_unique_key!(Data);\n\n#[derive(Debug)]\n#[openbrush::upgradeable_storage(STORAGE_KEY)]\npub struct Data {\n    pub fee_to: AccountId,\n    pub fee_to_setter: AccountId,\n    pub get_pair: Mapping<(AccountId, AccountId), AccountId>,\n    pub all_pairs: Vec<AccountId>,\n    pub pair_contract_code_hash: Hash,\n}\n\nimpl Default for Data {\n    fn default() -> Self {\n        Self {\n            fee_to: ZERO_ADDRESS.into(),\n            fee_to_setter: ZERO_ADDRESS.into(),\n            get_pair: Default::default(),\n            all_pairs: Default::default(),\n            pair_contract_code_hash: Default::default(),\n        }\n    }\n}\n"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:"./logics/impls/factory/data.rs"})}),"\n",(0,r.jsx)(t.h2,{id:"2-trait-for-getters",children:"2. Trait for Getters"}),"\n",(0,r.jsxs)(t.p,{children:["Unlike Solidity, which will automatically create getters for the storage items, with ink! you will need add them yourself. There is already a ",(0,r.jsx)(t.code,{children:"Factory"})," trait with ",(0,r.jsx)(t.code,{children:"fee_to"})," function in the file ",(0,r.jsx)(t.em,{children:"./logics/traits/factory.rs"}),".",(0,r.jsx)(t.br,{}),"\n","Add all getters:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-rust",children:"use openbrush::traits::AccountId;\n\n#[openbrush::wrapper]\npub type FactoryRef = dyn Factory;\n\n#[openbrush::trait_definition]\npub trait Factory {\n    #[ink(message)]\n    fn all_pair_length(&self) -> u64;\n\n    #[ink(message)]\n    fn set_fee_to(&mut self, fee_to: AccountId) -> Result<(), FactoryError>;\n\n    #[ink(message)]\n    fn set_fee_to_setter(&mut self, fee_to_setter: AccountId) -> Result<(), FactoryError>;\n\n    #[ink(message)]\n    fn fee_to(&self) -> AccountId;\n\n    #[ink(message)]\n    fn fee_to_setter(&self) -> AccountId;\n\n    #[ink(message)]\n    fn get_pair(&self, token_a: AccountId, token_b: AccountId) -> Option<AccountId>;\n\n    fn _emit_create_pair_event(\n        &self,\n        _token_0: AccountId,\n        _token_1: AccountId,\n        _pair: AccountId,\n        _pair_len: u64,\n    );\n}\n"})}),"\n",(0,r.jsxs)(t.p,{children:["The last thing to do is to add the Error enum, and each contract should use its own. As they will be used in function arguments, we should implement Scale encoding & decoding.\nFor the moment we don't need a properly defined error, so simply add ",(0,r.jsx)(t.code,{children:"Error"})," as a field:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-rust",children:'...\n#[derive(Debug, PartialEq, Eq, scale::Encode, scale::Decode)]\n#[cfg_attr(feature = "std", derive(scale_info::TypeInfo))]\npub enum FactoryError {\n    Error\n}\n'})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:"./logics/traits/factory.rs"})}),"\n",(0,r.jsx)(t.h2,{id:"3-implement-getters",children:"3. Implement Getters"}),"\n",(0,r.jsxs)(t.p,{children:["in ",(0,r.jsx)(t.em,{children:"./logics/impls/factory/factory.rs"})," add and impl a block for the generic type ",(0,r.jsx)(t.code,{children:"data::Data"}),". We will wrap the Data struct in the Storage trait to add it as trait bound:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-rust",children:"pub use crate::{\n    impls::factory::*,\n    traits::factory::*,\n};\nuse openbrush::{\n    traits::{\n        AccountId,\n        Storage\n    },\n};\n\nimpl<T: Storage<data::Data>> Factory for T {}\n"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"all_pair_length"})}),"\n",(0,r.jsx)(t.p,{children:"This getter returns the total number of pairs:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-rust",children:"    fn all_pair_length(&self) -> u64 {\n    self.data::<data::Data>().all_pairs.len() as u64\n}\n"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"set_fee_to"})}),"\n",(0,r.jsx)(t.p,{children:"This setter sets the address collecting the fee:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-rust",children:"    fn set_fee_to(&mut self, fee_to: AccountId) -> Result<(), FactoryError> {\n    self.data::<data::Data>().fee_to = fee_to;\n    Ok(())\n}\n"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"set_fee_to_setter"})}),"\n",(0,r.jsx)(t.p,{children:"This setter sets the address of the fee setter:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-rust",children:"    fn set_fee_to_setter(&mut self, fee_to_setter: AccountId) -> Result<(), FactoryError> {\n    self.data::<data::Data>().fee_to_setter = fee_to_setter;\n    Ok(())\n}\n"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"fee_to"})}),"\n",(0,r.jsx)(t.p,{children:"This getter returns the address collecting the fee:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-rust",children:"    fn fee_to(&self) -> AccountId {\n    self.data::<data::Data>().fee_to\n}\n"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"fee_to_setter"})}),"\n",(0,r.jsx)(t.p,{children:"This getter returns the address of the fee setter:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-rust",children:"    fn fee_to(&self) -> AccountId {\n    self.data::<data::Data>().fee_to\n}\n"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"get_pair"})}),"\n",(0,r.jsx)(t.p,{children:"This getter takes two addresses as arguments and returns the Pair contract address (or None if not found):"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-rust",children:"    fn get_pair(&self, token_a: AccountId, token_b: AccountId) -> Option<AccountId> {\n    self.data::<data::Data>().get_pair.get(&(token_a, token_b))\n}\n"})}),"\n",(0,r.jsx)(t.h3,{id:"4-implement-ggetters-in-contract",children:"4. Implement gGetters in Contract"}),"\n",(0,r.jsxs)(t.p,{children:["In the ",(0,r.jsx)(t.em,{children:"./uniswap-v2/contracts"})," folder, create a ",(0,r.jsx)(t.code,{children:"factory"})," folder containing ",(0,r.jsx)(t.code,{children:"Cargo.toml"})," and ",(0,r.jsx)(t.code,{children:"lib.rs"})," files.",(0,r.jsx)(t.br,{}),"\n","The ",(0,r.jsx)(t.code,{children:"Cargo.toml"})," should look like this:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-toml",children:'[package]\nname = "factory_contract"\nversion = "0.1.0"\nauthors = ["Stake Technologies <devops@stake.co.jp>"]\nedition = "2021"\n\n[dependencies]\nink = { version = "4.0.0", default-features = false}\n\nscale = { package = "parity-scale-codec", version = "3", default-features = false, features = ["derive"] }\nscale-info = { version = "2.3", default-features = false, features = ["derive"], optional = true }\n\nopenbrush = { git = "https://github.com/727-Ventures/openbrush-contracts", version = "3.0.0", default-features = false }\nuniswap_v2 = { path = "../../logics", default-features = false }\n\n[lib]\npath = "lib.rs"\ncrate-type = ["cdylib"]\n\n[features]\ndefault = ["std"]\nstd = [\n    "ink/std",\n    "scale/std",\n    "scale-info/std",\n    "openbrush/std",\n    "uniswap_v2/std"\n]\nink-as-dependency = []\n\n[profile.dev]\noverflow-checks = false\n\n[profile.release]\noverflow-checks = false\n'})}),"\n",(0,r.jsxs)(t.p,{children:["In the ",(0,r.jsx)(t.code,{children:"lib.rs"})," file, create a factory module with Openbrush contract. Import the ",(0,r.jsx)(t.code,{children:"Storage"})," trait from Openbrush (as well as ",(0,r.jsx)(t.code,{children:"ZERO_ADDRESS"}),") and ",(0,r.jsx)(t.code,{children:"SpreadAllocate"})," from ink!\nAs reminder the ",(0,r.jsx)(t.code,{children:'#![cfg_attr(not(feature = "std"), no_std)]'})," attribute is for ",(0,r.jsx)(t.a,{href:"https://use.ink/faq#what-does-the-cfg_attrnotfeature--std-no_std-at-the-beginning-of-each-contract-mean",children:"conditional compilation"})," and the ",(0,r.jsx)(t.code,{children:"#![feature(min_specialization)]"})," is the feature needed to enable ",(0,r.jsx)(t.a,{href:"/es/docs/build/wasm/from-zero-to-ink-hero/dex/Structure/file-structure",children:"specialization"}),".\nAlso import everything (with ",(0,r.jsx)(t.code,{children:"*"}),") from ",(0,r.jsx)(t.code,{children:"impls::factory"})," and ",(0,r.jsx)(t.code,{children:"traits::factory"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-rust",children:'#![cfg_attr(not(feature = "std"), no_std)]\n#![feature(min_specialization)]\n\n#[openbrush::contract]\npub mod factory {\n    use openbrush::traits::{\n        Storage,\n        ZERO_ADDRESS,\n    };\n    use uniswap_v2::{\n        impls::factory::*,\n        traits::factory::*,\n    };\n'})}),"\n",(0,r.jsxs)(t.p,{children:["Add the ",(0,r.jsx)(t.a,{href:"https://use.ink/macros-attributes/storage",children:"storage struct"})," and Factory field (that we defined in traits):"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-rust",children:"    #[ink(storage)]\n#[derive(Default, Storage)]\npub struct FactoryContract {\n    #[storage_field]\n    factory: data::Data,\n}\n"})}),"\n",(0,r.jsx)(t.p,{children:"Implement the Factory trait in your contract struct:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-rust",children:"    impl Factory for FactoryContract {}\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Add an ",(0,r.jsx)(t.code,{children:"impl"})," block for the contract, and add the constructor. The constructor takes 2 arguments ",(0,r.jsx)(t.code,{children:"fee_to_setter"})," and the ",(0,r.jsx)(t.code,{children:"pair_code_hash"})," and saved them in storage:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-rust",children:"    impl FactoryContract {\n    #[ink(constructor)]\n    pub fn new(fee_to_setter: AccountId, pair_code_hash: Hash) -> Self {\n        let mut instance = Self::default();\n        instance.factory.pair_contract_code_hash = pair_code_hash;\n        instance.factory.fee_to_setter = fee_to_setter;\n        instance.factory.fee_to = ZERO_ADDRESS.into();\n        instance\n    }\n}\n"})}),"\n",(0,r.jsx)(t.p,{children:"And that's it! Check your Factory contract with (run in contract folder):"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-console",children:"cargo contract build\n"})}),"\n",(0,r.jsxs)(t.p,{children:["It should now look like this ",(0,r.jsx)(t.a,{href:"https://github.com/AstarNetwork/wasm-tutorial-dex/tree/tutorial/factory_storage",children:"branch"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>o});var r=n(67294);const s={},a=r.createContext(s);function o(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);