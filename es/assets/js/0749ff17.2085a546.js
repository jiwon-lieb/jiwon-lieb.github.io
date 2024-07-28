"use strict";(self.webpackChunkdocs_1=self.webpackChunkdocs_1||[]).push([[985],{86097:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var o=r(85893),n=r(11151);const s={sidebar_position:3},i="Custom Modifier",c={id:"build/wasm/from-zero-to-ink-hero/dex/Factory/modifiers",title:"Custom Modifier",description:"In the Factory contract, prior to the setFeeTo and setFeeToSetter entries, there is a check that occurs, and the caller is feeToSetter.",source:"@site/docs/build/wasm/from-zero-to-ink-hero/dex/Factory/modifiers.md",sourceDirName:"build/wasm/from-zero-to-ink-hero/dex/Factory",slug:"/build/wasm/from-zero-to-ink-hero/dex/Factory/modifiers",permalink:"/es/docs/build/wasm/from-zero-to-ink-hero/dex/Factory/modifiers",draft:!1,unlisted:!1,editUrl:"https://github.com/AstarNetwork/astar-docs/tree/main/docs/build/wasm/from-zero-to-ink-hero/dex/Factory/modifiers.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Create Pair",permalink:"/es/docs/build/wasm/from-zero-to-ink-hero/dex/Factory/create-pair"},next:{title:"Contract Environment",permalink:"/es/docs/build/wasm/contract_environment/"}},a={},d=[{value:"<code>only_fee_setter</code>",id:"only_fee_setter",level:2}];function l(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"custom-modifier",children:"Custom Modifier"}),"\n",(0,o.jsxs)(t.p,{children:["In the Factory contract, prior to the ",(0,o.jsx)(t.strong,{children:"setFeeTo"})," and ",(0,o.jsx)(t.strong,{children:"setFeeToSetter"})," entries, there is a ",(0,o.jsx)(t.a,{href:"https://github.com/Uniswap/v2-core/blob/ee547b17853e71ed4e0101ccfd52e70d5acded58/contracts/UniswapV2Factory.sol#L41",children:"check"})," that occurs, and the caller is ",(0,o.jsx)(t.code,{children:"feeToSetter"}),".\nLet's create a custom modifier for it."]}),"\n",(0,o.jsx)(t.h2,{id:"only_fee_setter",children:(0,o.jsx)(t.code,{children:"only_fee_setter"})}),"\n",(0,o.jsxs)(t.p,{children:["In the ",(0,o.jsx)(t.em,{children:".logics/impls/factory/factory.rs"})," file, import ",(0,o.jsx)(t.code,{children:"modifier_definition"})," and ",(0,o.jsx)(t.code,{children:"modifiers"}),":"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-rust",children:"use openbrush::{\n    modifier_definition,\n    modifiers,\n    traits::{\n        AccountId,\n        Storage,\n        ZERO_ADDRESS,\n    },\n};\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Let's define the generic modifier below the ",(0,o.jsx)(t.code,{children:"impl"})," block. Some rules for the generic type parameters:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"If it should use Storage structs - it should accept a type parameter."}),"\n",(0,o.jsxs)(t.li,{children:["It should have the same return type - ",(0,o.jsx)(t.code,{children:"Result<R, E>"})," where E is wrapped in From Trait."]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["In the body of the modifier we will ensure that the caller address is equal to ",(0,o.jsx)(t.code,{children:"fee_to_setter"}),", otherwise return an Error:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-rust",children:"#[modifier_definition]\npub fn only_fee_setter<T, F, R, E>(instance: &mut T, body: F) -> Result<R, E>\n    where\n        T: Storage<data::Data>,\n        F: FnOnce(&mut T) -> Result<R, E>,\n        E: From<FactoryError>,\n{\n    if instance.data().fee_to_setter != T::env().caller() {\n        return Err(From::from(FactoryError::CallerIsNotFeeSetter))\n    }\n    body(instance)\n}\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Prepend the modifier to the top of the ",(0,o.jsx)(t.strong,{children:"set_fee_to"})," and ",(0,o.jsx)(t.strong,{children:"set_fee_to_setter"})," functions:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-rust",children:"#[modifiers(only_fee_setter)]\nfn set_fee_to(&mut self, fee_to: AccountId) -> Result<(), FactoryError> {\n    self.data::<data::Data>().fee_to = fee_to;\n    Ok(())\n}\n\n#[modifiers(only_fee_setter)]\nfn set_fee_to_setter(&mut self, fee_to_setter: AccountId) -> Result<(), FactoryError> {\n    self.data::<data::Data>().fee_to_setter = fee_to_setter;\n    Ok(())\n}\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Add ",(0,o.jsx)(t.code,{children:"CallerIsNotFeeSetter"})," variant to ",(0,o.jsx)(t.code,{children:"FactoryError"}),":"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-rust",children:'#[derive(Debug, PartialEq, Eq, scale::Encode, scale::Decode)]\n#[cfg_attr(feature = "std", derive(scale_info::TypeInfo))]\npub enum FactoryError {\n    PairError(PairError),\n    CallerIsNotFeeSetter,\n    ZeroAddress,\n    IdenticalAddresses,\n    PairInstantiationFailed,\n}\n'})}),"\n",(0,o.jsx)(t.p,{children:"And that's it! Check your Factory contract with (run in the contract folder):"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-console",children:"cargo contract build\n"})}),"\n",(0,o.jsxs)(t.p,{children:["It should now look like this ",(0,o.jsx)(t.a,{href:"https://github.com/AstarNetwork/wasm-tutorial-dex/tree/tutorial/factory_modifiers",children:"branch"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},11151:(e,t,r)=>{r.d(t,{Z:()=>c,a:()=>i});var o=r(67294);const n={},s=o.createContext(n);function i(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);