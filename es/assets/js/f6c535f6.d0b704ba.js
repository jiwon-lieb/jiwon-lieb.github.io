"use strict";(self.webpackChunkdocs_1=self.webpackChunkdocs_1||[]).push([[8009],{1731:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=t(85893),a=t(11151);const o={sidebar_position:4},i="Burn",s={id:"tutorials/from-zero-to-ink-hero/dex/Pair/burn",title:"Burn",description:"If you are starting the tutorial from here, please check out this branch and open it in your IDE.",source:"@site/docs/tutorials/from-zero-to-ink-hero/dex/Pair/burn.md",sourceDirName:"tutorials/from-zero-to-ink-hero/dex/Pair",slug:"/tutorials/from-zero-to-ink-hero/dex/Pair/burn",permalink:"/es/docs/tutorials/from-zero-to-ink-hero/dex/Pair/burn",draft:!1,unlisted:!1,editUrl:"https://github.com/AstarNetwork/astar-docs/tree/main/docs/tutorials/from-zero-to-ink-hero/dex/Pair/burn.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Mint",permalink:"/es/docs/tutorials/from-zero-to-ink-hero/dex/Pair/mint"},next:{title:"Swap",permalink:"/es/docs/tutorials/from-zero-to-ink-hero/dex/Pair/swap"}},l={},c=[{value:"1. Add Burn Functions to Pair Trait",id:"1-add-burn-functions-to-pair-trait",level:2},{value:"2. Safe Transfer",id:"2-safe-transfer",level:2},{value:"3. Burn",id:"3-burn",level:3},{value:"4. Implement Event",id:"4-implement-event",level:2}];function d(e){const n={a:"a",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"burn",children:"Burn"}),"\n",(0,r.jsxs)(n.p,{children:["If you are starting the tutorial from here, please check out this ",(0,r.jsx)(n.a,{href:"https://github.com/AstarNetwork/wasm-tutorial-dex/tree/tutorial/storage-end",children:"branch"})," and open it in your IDE."]}),"\n",(0,r.jsx)(n.h2,{id:"1-add-burn-functions-to-pair-trait",children:"1. Add Burn Functions to Pair Trait"}),"\n",(0,r.jsxs)(n.p,{children:["At this stage, we will implement a ",(0,r.jsx)(n.a,{href:"https://github.com/Uniswap/v2-core/blob/ee547b17853e71ed4e0101ccfd52e70d5acded58/contracts/UniswapV2Pair.sol#L134",children:"burn"})," function in the Pair contract.",(0,r.jsx)(n.br,{}),"\n","In ",(0,r.jsx)(n.em,{children:"./logics/traits/pair.rs"})," add the ",(0,r.jsx)(n.strong,{children:"burn"})," function to the Pair trait, as well as the internal child function ",(0,r.jsx)(n.strong,{children:"_safe_transfer"}),".\nAlso, we will add a function to emit a burn event in the contract:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:"pub trait Pair {\n    ...\n    #[ink(message)]\n    fn burn(&mut self, to: AccountId) -> Result<(Balance, Balance), PairError>;\n\n    fn _safe_transfer(\n        &mut self,\n        token: AccountId,\n        to: AccountId,\n        value: Balance,\n    ) -> Result<(), PairError>;\n    \n    fn _emit_burn_event(\n        &self,\n        _sender: AccountId,\n        _amount_0: Balance,\n        _amount_1: Balance,\n        _to: AccountId,\n    );\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"2-safe-transfer",children:"2. Safe Transfer"}),"\n",(0,r.jsxs)(n.p,{children:["In the Pair.sol contract, within the burn function, there is a ",(0,r.jsx)(n.a,{href:"https://github.com/Uniswap/v2-core/blob/ee547b17853e71ed4e0101ccfd52e70d5acded58/contracts/UniswapV2Pair.sol#L148",children:"_safeTransfer"})," function. In PSP22, a transfer is ",(0,r.jsx)(n.a,{href:"https://github.com/w3f/PSPs/blob/master/PSPs/psp-22.md#psp22receiver",children:"safe by default"})," if it's implemented with ",(0,r.jsx)(n.code,{children:"PSP22Receiver"}),", which is the case for the Openbrush PSP22 implementation (in ",(0,r.jsx)(n.a,{href:"https://github.com/Supercolony-net/openbrush-contracts/blob/e366f6ff1e5892c6a624833dd337a6da16a06baa/contracts/src/token/psp22/psp22.rs#L172",children:"_do_safe_transfer_check"}),")\nWe will use a basic call to ",(0,r.jsx)(n.strong,{children:"transfer"})," the PSP22:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:"impl<T: Storage<data::Data> + Storage<psp22::Data>> Pair for T {\n    ...\n    fn _safe_transfer(\n        &mut self,\n        token: AccountId,\n        to: AccountId,\n        value: Balance,\n    ) -> Result<(), PairError> {\n        PSP22Ref::transfer(&token, to, value, Vec::new())?;\n        Ok(())\n    }\n    ...\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"./logics/impls/pair/pair.rs"})}),"\n",(0,r.jsx)(n.p,{children:"and add the import statement for Vec:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:"use ink::prelude::vec::Vec;\n"})}),"\n",(0,r.jsx)(n.h3,{id:"3-burn",children:"3. Burn"}),"\n",(0,r.jsxs)(n.p,{children:["The first line of this function is the same as mint (as we obtain the same values).\nIn the ",(0,r.jsx)(n.a,{href:"https://github.com/Uniswap/v2-core/blob/ee547b17853e71ed4e0101ccfd52e70d5acded58/contracts/UniswapV2Pair.sol#L147",children:"line #147"})," ",(0,r.jsx)(n.code,{children:"_burn(address(this), liquidity);"})," actually calls the burn of the internal ERC20 (as Pair is an extended ERC20).\nThe flow of the function body:"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"First obtain the values for reserves, balances and liquidity."}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"mint_fee"})}),"\n",(0,r.jsxs)(n.li,{children:["Burn liquidity and transfer token from contract to ",(0,r.jsx)(n.code,{children:"to"})]}),"\n",(0,r.jsx)(n.li,{children:"Update reserves."}),"\n",(0,r.jsx)(n.li,{children:"Emit an event."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:"impl<T: Storage<data::Data> + Storage<psp22::Data>> Pair for T {\n    ...\n    fn burn(&mut self, to: AccountId) -> Result<(Balance, Balance), PairError> {\n        let reserves = self.get_reserves();\n        let contract = Self::env().account_id();\n        let token_0 = self.data::<data::Data>().token_0;\n        let token_1 = self.data::<data::Data>().token_1;\n        let mut balance_0 = PSP22Ref::balance_of(&token_0, contract);\n        let mut balance_1 = PSP22Ref::balance_of(&token_1, contract);\n        let liquidity = self._balance_of(&contract);\n\n        let fee_on = self._mint_fee(reserves.0, reserves.1)?;\n        let total_supply = self.data::<psp22::Data>().supply;\n        let amount_0 = liquidity\n            .checked_mul(balance_0)\n            .ok_or(PairError::MulOverFlow6)?\n            .checked_div(total_supply)\n            .ok_or(PairError::DivByZero3)?;\n        let amount_1 = liquidity\n            .checked_mul(balance_1)\n            .ok_or(PairError::MulOverFlow7)?\n            .checked_div(total_supply)\n            .ok_or(PairError::DivByZero4)?;\n\n        if amount_0 == 0 || amount_1 == 0 {\n            return Err(PairError::InsufficientLiquidityBurned)\n        }\n\n        self._burn_from(contract, liquidity)?;\n\n        self._safe_transfer(token_0, to, amount_0)?;\n        self._safe_transfer(token_1, to, amount_1)?;\n\n        balance_0 = PSP22Ref::balance_of(&token_0, contract);\n        balance_1 = PSP22Ref::balance_of(&token_1, contract);\n\n        self._update(balance_0, balance_1, reserves.0, reserves.1)?;\n\n        if fee_on {\n            let k = reserves\n                .0\n                .checked_mul(reserves.1)\n                .ok_or(PairError::MulOverFlow5)?;\n            self.data::<data::Data>().k_last = k;\n        }\n\n        self._emit_burn_event(Self::env().caller(), amount_0, amount_1, to);\n\n        Ok((amount_0, amount_1))\n    }\n    ...\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Add the empty implementation of ",(0,r.jsx)(n.strong,{children:"_emit_burn_event"}),". It should have the ",(0,r.jsx)(n.code,{children:"default"})," keyword as we will override this function in the Pair contract:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:"impl<T: Storage<data::Data> + Storage<psp22::Data>> Pair for T {\n    ...\n    default fn _emit_burn_event(\n        &self,\n        _sender: AccountId,\n        _amount_0: Balance,\n        _amount_1: Balance,\n        _to: AccountId,\n    ) {\n    }\n    ...\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Adds the Error fields to ",(0,r.jsx)(n.code,{children:"PairError"})," in ",(0,r.jsx)(n.em,{children:"./logics/traits/pair.rs"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:'#[derive(Debug, PartialEq, Eq, scale::Encode, scale::Decode)]\n#[cfg_attr(feature = "std", derive(scale_info::TypeInfo))]\npub enum PairError {\n    PSP22Error(PSP22Error),\n    TransferError,\n    InsufficientLiquidityMinted,\n    InsufficientLiquidityBurned,\n    Overflow,\n    SubUnderFlow1,\n    SubUnderFlow2,\n    SubUnderFlow3,\n    SubUnderFlow14,\n    MulOverFlow1,\n    MulOverFlow2,\n    MulOverFlow3,\n    MulOverFlow4,\n    MulOverFlow5,\n    MulOverFlow6,\n    MulOverFlow7,\n    MulOverFlow14,\n    MulOverFlow15,\n    DivByZero1,\n    DivByZero2,\n    DivByZero3,\n    DivByZero4,\n    DivByZero5,\n    AddOverflow1,\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"4-implement-event",children:"4. Implement Event"}),"\n",(0,r.jsxs)(n.p,{children:["In the contracts ",(0,r.jsx)(n.em,{children:"./contracts/pair/lib.rs"})," file, add the Event struct and override the implementation of emit event:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:"...\n#[ink(event)]\npub struct Burn {\n    #[ink(topic)]\n    pub sender: AccountId,\n    pub amount_0: Balance,\n    pub amount_1: Balance,\n    #[ink(topic)]\n    pub to: AccountId,\n}\n...\nimpl Pair for PairContract {\n    ...\n    fn _emit_burn_event(\n        &self,\n        sender: AccountId,\n        amount_0: Balance,\n        amount_1: Balance,\n        to: AccountId,\n    ) {\n        self.env().emit_event(Burn {\n            sender,\n            amount_0,\n            amount_1,\n            to,\n        })\n    }\n}\n...\n"})}),"\n",(0,r.jsx)(n.p,{children:"And that's it! In these examples we have demonstrated how to easily build an advanced Rust & ink! implementation.\nCheck your Pair contract with (run in contract folder):"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-console",children:"cargo contract build\n"})}),"\n",(0,r.jsxs)(n.p,{children:["It should now look like this ",(0,r.jsx)(n.a,{href:"https://github.com/AstarNetwork/wasm-tutorial-dex/tree/tutorial/burn_end",children:"branch"}),"."]})]})}function u(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>i});var r=t(67294);const a={},o=r.createContext(a);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);