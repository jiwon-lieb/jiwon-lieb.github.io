"use strict";(self.webpackChunkdocs_1=self.webpackChunkdocs_1||[]).push([[5632],{39035:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var a=t(85893),s=t(11151);const r={sidebar_position:3},o="How to Generate Pseudo-Random Numbers in Ink! Smart Contract",i={id:"build/builder-guides/xvm_wasm/pseudo_random",title:"How to Generate Pseudo-Random Numbers in Ink! Smart Contract",description:"Generating random numbers is an essential feature of many decentralized applications, but generating truly random numbers in a trustless, decentralized environment is a challenging problem. In this article, we will show you how to implement a simple pseudo-random function in your Ink! smart contract and generate pseudo-random numbers within a specified range.",source:"@site/docs/build/builder-guides/xvm_wasm/pseudo_random.md",sourceDirName:"build/builder-guides/xvm_wasm",slug:"/build/builder-guides/xvm_wasm/pseudo_random",permalink:"/docs/build/builder-guides/xvm_wasm/pseudo_random",draft:!1,unlisted:!1,editUrl:"https://github.com/AstarNetwork/astar-docs/tree/main/docs/build/builder-guides/xvm_wasm/pseudo_random.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Create and manage a PSP22 assets on Shibuya",permalink:"/docs/build/builder-guides/xvm_wasm/manage_psp22_asset"},next:{title:"How to run a local Astar blockchain for contract testing",permalink:"/docs/build/builder-guides/astar_features/run_local_network"}},d={},u=[{value:"<strong>Implementation</strong>",id:"implementation",level:2},{value:"<strong>Usage</strong>",id:"usage",level:2},{value:"<strong>Example Unit Test</strong>",id:"example-unit-test",level:3},{value:"<strong>Conclusion</strong>",id:"conclusion",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"how-to-generate-pseudo-random-numbers-in-ink-smart-contract",children:"How to Generate Pseudo-Random Numbers in Ink! Smart Contract"}),"\n",(0,a.jsx)(n.p,{children:"Generating random numbers is an essential feature of many decentralized applications, but generating truly random numbers in a trustless, decentralized environment is a challenging problem. In this article, we will show you how to implement a simple pseudo-random function in your Ink! smart contract and generate pseudo-random numbers within a specified range."}),"\n",(0,a.jsx)(n.h2,{id:"implementation",children:(0,a.jsx)(n.strong,{children:"Implementation"})}),"\n",(0,a.jsxs)(n.p,{children:["First, create a new Ink! smart contract and modify the ",(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.code,{children:"PseudoRandom"})})," struct to include the ",(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.code,{children:"salt"})})," variable. The ",(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.code,{children:"salt"})})," will be incremented by 1 each time the ",(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.code,{children:"get_pseudo_random"})})," function is called."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-rust",children:"#[ink(storage)]\npub struct PseudoRandom {\n    salt: u64,\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Then, update the ",(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.code,{children:"get_pseudo_random"})})," function to take an input parameter for the maximum value in the range, and to return a number between 0 and the maximum value in the range using the following code:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-rust",children:"use ink::env::hash;\n\n#[ink(message)]\npub fn get_pseudo_random(&mut self, max_value: u8) -> u8 {\n    let seed = self.env().block_timestamp();\n    let mut input: Vec<u8> = Vec::new();\n    input.extend_from_slice(&seed.to_be_bytes());\n    input.extend_from_slice(&self.salt.to_be_bytes());\n    let mut output = <hash::Keccak256 as hash::HashOutput>::Type::default();\n    ink::env::hash_bytes::<hash::Keccak256>(&input, &mut output);\n    self.salt += 1;\n    let number = output[0] % (max_value + 1);\n    number\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["This function generates a hash value that is based on the block timestamp and the incremented ",(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.code,{children:"salt"})})," value. The ",(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.code,{children:"max_value"})})," parameter is used to determine the maximum value in the range. The modulo operator ",(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.code,{children:"% (max_value + 1)"})})," is then used to return a number between 0 and the maximum value in the range."]}),"\n",(0,a.jsx)(n.h2,{id:"usage",children:(0,a.jsx)(n.strong,{children:"Usage"})}),"\n",(0,a.jsxs)(n.p,{children:["To generate a pseudo-random number within a specified range, simply call the ",(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.code,{children:"get_pseudo_random"})})," function with the maximum value in the range as the input parameter. For example, to generate a number between 0 and 99, you would call the function with a ",(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.code,{children:"max_value"})})," of 99:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-rust",children:"let mut my_contract = PseudoRandom::new();\nlet random_number = my_contract.get_pseudo_random(99);\n"})}),"\n",(0,a.jsx)(n.h3,{id:"example-unit-test",children:(0,a.jsx)(n.strong,{children:"Example Unit Test"})}),"\n",(0,a.jsxs)(n.p,{children:["To ensure that the ",(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.code,{children:"get_pseudo_random"})})," function works as expected, you can write a unit test that calls the function with different ",(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.code,{children:"max_value"})})," parameters and checks that the generated random numbers are within the expected range. Here's an example unit test that you can add to your Ink! smart contract:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-rust",children:"#[test]\nfn test_get_pseudo_random() {\n    let mut contract = PseudoRandom::new();\n    for max_value in 1..=100 {\n        let result = contract.get_pseudo_random(max_value);\n        assert!(result <= max_value);\n    }\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"conclusion",children:(0,a.jsx)(n.strong,{children:"Conclusion"})}),"\n",(0,a.jsxs)(n.p,{children:["By implementing a pseudo-random function in your Ink! smart contract, you can generate pseudo-random numbers within a specified range in a decentralized and trustless environment. However, it is important to note that the ",(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.code,{children:"get_pseudo_random"})})," function does not provide the same level of security and trust as a true verifiable random function (VRF)."]}),"\n",(0,a.jsx)(n.p,{children:"While the function uses the block timestamp and a salt value to generate a hash value, which is then used to generate a pseudo-random number, it may still be possible for an attacker to predict the output of the function. Additionally, this implementation may not be suitable for applications that require high levels of security, such as gambling or financial applications."}),"\n",(0,a.jsx)(n.p,{children:"If you require a truly verifiable and secure random function for your smart contract, you may want to consider using an external oracle solution or a specialized random number generator that is specifically designed for use in smart contracts."})]})}function c(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>o});var a=t(67294);const s={},r=a.createContext(s);function o(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);