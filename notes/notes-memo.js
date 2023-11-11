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



- When we have a component inside an another component and we dont the inside component to be re-rendered we can simply just pass in the component as a children prop to the other component and put it in the component as a child


* Underestanding memo:
@ What is memoization?
- Optimization technique that executes a pure function once and saves the result in memory. If we try to execute the function again with the same arguments as before, the previously saved result will be returned , without executing the function again

👉 Memoize components with memo
👉 Memoize objects with useMemo
👉 Memoize functions with useCallback
 
@ It will:
1 - Prevent wasted renders
2 - Improve app speed/responsiveness

* The memo function:
@ - Used to create a component that will not re-render when its parent re-renders, as long as the props stay the same between renders - Memoized component

@ - Only affect props! A memoized component will still re-render when its own state changes or when a context that it's subscibed to changes

@ - Only makes sense when the component is heavy (slow rendering) re-renders often, and does so with the same props


* An issue with memo:
@ - In React, everything is re-created on every render (including objects and functions)

@ - In javascript, two objects or functions that look the same, are actually different ( {} != {} ) 

@ - Therefore => If objects or functions are passed as props, the child component will always see them as new props on each re-render

@ - If props are different between re-renders, memo will not work

++ Soluton: We need to memoize objects and funcitons, to make them stable (preserve) between re-renders (memoized {} == memoized {} )


* Two new hooks(useMemo and useCallback):
@ - Used to memoize values (useMemo) and functions (useCallback) between renders

@ - Values passed into useMemo and useCallback will be stored in memory ("cached") and returned in subsequent re-renders, as long as dependencies ("Inputs") stay the same

@ - useMemo and useCallback have a dependency array (like useEffect) whenever one dependency changes, the value will be re-created

* Three big use cases:
1 - Memoizing props to prevent wasted renders (together with memo)

2 - Memoizing values to avoid expensive re-calculations on every render

3 - Memoizing values that are used in dependency array of another hook
++ For example to avoid infinite useEffect loops
*/