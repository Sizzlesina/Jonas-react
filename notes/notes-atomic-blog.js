/*
* A solution to prop drilling:
@ - Task: Passing state into multiple deeply nested child components
++ Solution 1:
- Passing props
! Problem: Prop drilling
Remeber that a good solution to "prop drilling" is better component composition (See "Thinking in React" section)
++ Solution 2:
- Context API:
! Read state from everywhere

* What is the context API:
- System to pass data throughout the app without manually passing props down the tree
- Allow us to "broadcast" global state to the entire app
@ - Provider: gives all child components access to value

@ - Value: data that we want to make available (usually state and functions)

@ - Consumers: all components that read the provided context value

value is updated => all consumers re-render
! A new way of re-rendering components


* What is state management:
@ - State management: Giving each piece of state the right home

- when to use state
- Types of state (accessibility) local vs. global
- Types of state (domain): UI vs. remote
- Where to place each piece of state
- Tools to manage all types of state


* Types of state:
@ - State Accessibility: 
++ 1 - local state:
- Needed only by one or few components
- Only accessible in component and child components
++ 2 - Global state:
- Might be needed by many components
- Accessible to every component in the application  
! Which one to choose? "if this component was rendered twice, should a state update on one of them reflect in the other one?" => 
NO = Local state YES = Global state

@ - State Domain:
++ 1 - Remote state:
1 - All application data loaded from a remote server(API)
2 - Usually asynchronous
3 - Needs re-fetching + updating
++ 2 - UI state:
1 - Everything else
2 - Theme, list filters, form data, etc.
3 - Usually synchronous and stored in the application

* State placement options:
@ Local components: 
Tools: useState,useReducer,useRef
when to use: local state
@ Parent component:
Tools: useState,useReducer,useRef
when to use: lifting up state
@ Context:
Tools: ContextAPI + useState or useReducer
when to use: Global state (preferably UI state)
@ 3rd-party library:
Tools: Redux,React Query,SWR,Zustand,etc.
when to use: Global state (remote or UI)
@ URL:
Tools: React Router
when to use: Global state,passing between pages
@ Browser;
Tools: Local storage,session storage,etc.
when to use: Storing data in user's browser

* State management tools options:
@ How to manage different types of state in practice?

++ Local UI state => 
- useState
- useReducer
- useRef

++ Local Remote state => 
- fetch + useEffect + useState / useReducer

! Mostly in small applications
++ Global UI state =>
- Context API + useState/useReducer
- Redux ,Zustand ,Recoil ,etc. 
- React Router

++ Global Remote state => 
- Context API + useState/useReducer 
- Redux ,Zustand ,Recoil ,etc. 
! tools highly specialized in handling remote state like : 
- React Query ,SWR and RTK Query

*/