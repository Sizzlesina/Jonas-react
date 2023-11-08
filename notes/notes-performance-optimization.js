/*
* Peformance optimization tools:
@ 1- Prevent wasted renders:
👉 memo
👉 useMemo
👉 useCallback
👉 passing elements as children or regular prop
@ 2- Improve app speed/ responsiveness: 
👉 useMemo
👉 useCallback
👉 useTransition
@ 3- Reduce bundle size:
👉 Using fewer 3rd-party packages 
👉 Code splitting and lazy loading

++ Quote: This list of tools and techniques is, by no means, exhaustive. You're already doing many optimizations by following the best practices i have been showing you. -Jonas

* When does a components instance re-render?
@ A component isntance only get re-render in 3 different situations:
1 - State changes
2 - Context changes
3 - Parent re-renders => Creates the false impression that changing the props re-renders a component. This is not true

! Question: when the props changes will the component get re-renders? 
* Answer : NO     

++ Remember: a render does not mean that the DOM actually gets updated, it just means the component function gets called. But this can be an expensive operation.


* Wasted render: a render that didn't produce any change in the DOM 
!- usually the wasted render is not a problem for react because react is very fast
++ - Only a problem when they happen too frequently or when the component is very slow                   
*/