"use strict";(self.webpackChunkdocs_1=self.webpackChunkdocs_1||[]).push([[6478],{10908:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var i=n(85893),a=n(11151);const r={sidebar_position:4},o="Next step",s={id:"build/builder-guides/hacking/next",title:"Next step",description:"Here comes the fun! Time to build your own dApp.",source:"@site/docs/build/builder-guides/hacking/next.md",sourceDirName:"build/builder-guides/hacking",slug:"/build/builder-guides/hacking/next",permalink:"/es/docs/build/builder-guides/hacking/next",draft:!1,unlisted:!1,editUrl:"https://github.com/AstarNetwork/astar-docs/tree/main/docs/build/builder-guides/hacking/next.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Hack EVM Smart Contracts",permalink:"/es/docs/build/builder-guides/hacking/hack_evm"},next:{title:"Astar Beta Labs",permalink:"/es/docs/build/astar-beta-labs/"}},l={},c=[{value:"Enter Community",id:"enter-community",level:2},{value:"Ideas to build",id:"ideas-to-build",level:2},{value:"Pool Together",id:"pool-together",level:3},{value:"Voting",id:"voting",level:3},{value:"Tamagotchi",id:"tamagotchi",level:3},{value:"Charity Raffle",id:"charity-raffle",level:3}];function d(e){const t={a:"a",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"next-step",children:"Next step"}),"\n",(0,i.jsx)(t.p,{children:"Here comes the fun! Time to build your own dApp.\nHere you will find a list of ideas to implement in any of the smart contract environments."}),"\n",(0,i.jsx)(t.h2,{id:"enter-community",children:"Enter Community"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Join Astar Discord and Post GM."}),"\n",(0,i.jsx)(t.li,{children:"Follow Twitter."}),"\n",(0,i.jsx)(t.li,{children:"Create an account on Stack Exchange."}),"\n",(0,i.jsx)(t.li,{children:"Create an account, Post Hi on Forum (A thread just for this purpose)."}),"\n",(0,i.jsx)(t.li,{children:"Subscribe to Astar Newsletter."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"ideas-to-build",children:"Ideas to build"}),"\n",(0,i.jsx)(t.p,{children:"These ideas can be implemented as WASM or EVM smart contract. Main intention is for the ink! developers."}),"\n",(0,i.jsx)(t.h3,{id:"pool-together",children:"Pool Together"}),"\n",(0,i.jsxs)(t.p,{children:["Explore this ",(0,i.jsx)(t.a,{href:"https://app.pooltogether.com/",children:"project"})," and build your own version in ink!"]}),"\n",(0,i.jsx)(t.h3,{id:"voting",children:"Voting"}),"\n",(0,i.jsx)(t.p,{children:"Use Ink! v4 with Swanky-node to develop a smart contract which allows people to vote The rules are:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Contract owner initializes a set of candidates (2-10)."}),"\n",(0,i.jsx)(t.li,{children:"Lets anyone vote for the candidates."}),"\n",(0,i.jsx)(t.li,{children:"Each voter is limited to only one ote (per address)."}),"\n",(0,i.jsx)(t.li,{children:"Displays the vote totals received by each candidate."}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"tamagotchi",children:"Tamagotchi"}),"\n",(0,i.jsx)(t.p,{children:"Use Ink! v4 with Swanky-node to create a virtual pet smart contract, allowing users to create, interact with, and trade virtual pets securely and transparently on the blockchain.\nCreate Tamagotchi: The smart contract should allow users to create a Tamagotchi object with attributes such as hunger, happiness, and energy levels."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:'Interact with Tamagotchi: Users should be able to interact with the Tamagotchi object by calling functions to modify its attributes, such as "feed", "play", and "rest".'}),"\n",(0,i.jsx)(t.li,{children:"Implement Rules: The smart contract should enforce rules and restrictions to prevent users from overfeeding, neglecting, or exploiting the Tamagotchi object."}),"\n",(0,i.jsx)(t.li,{children:"Track Lifespan: The smart contract should track the Tamagotchi object's lifespan and trigger events such as death, rebirth, or evolution based on its age, level, and behavior."}),"\n",(0,i.jsx)(t.li,{children:"Support Multiple Tamagotchis: The smart contract should support multiple Tamagotchi objects, each with its own set of attributes and state, and allow users to own, trade, or exchange them."}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"charity-raffle",children:"Charity Raffle"}),"\n",(0,i.jsx)(t.p,{children:"Use Ink! v4 from Swanky-node to develop a smart contract which allows people to enter a charity raffle. The rules are:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"A user can send in anywhere between 0.01 and 0.1 tokens."}),"\n",(0,i.jsx)(t.li,{children:"A user can only play once."}),"\n",(0,i.jsx)(t.li,{children:"A user is added to the pool with one submission, regardless of money that was sent in."}),"\n",(0,i.jsx)(t.li,{children:"There can be a maximum of 2 winners."}),"\n",(0,i.jsx)(t.li,{children:"The raffle must go on for 15 minutes before a draw can be initiated, but the 15 minute countdown only starts once there are at least 5 players in the pool."}),"\n",(0,i.jsx)(t.li,{children:"Anyone can call the draw function at any time, but it will only draw a winner when the 15 minute timer has expired."}),"\n",(0,i.jsx)(t.li,{children:"The draw function can be called twice for a maximum of two winners."}),"\n",(0,i.jsx)(t.li,{children:"The winners get nothing (it\u2019s a raffle for a real world item, like a t-shirt, so ignore on-chain effects of a win) but they need to be clearly exposed by the contract, i.e. the list of winners has to be a public value dapps and users can read from the contract."}),"\n",(0,i.jsx)(t.li,{children:"The collected money from the pot is automatically sent to a pre-defined address when the second winner is drawn."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Happy coding!"})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>o});var i=n(67294);const a={},r=i.createContext(a);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);