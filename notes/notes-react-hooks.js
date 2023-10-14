/*
* what is React hooks?
@ - Special built-in function that allows us to "hook" into React internals:
Creating and accessing state from Fiber tree
Registering side effects in Fiber tree
Manual DOM selections
Many more...

@ - Always start with "use" (useState,useEffect,etc.)

@ - Enable easy resusing of non-visual logic: we can compose multiple hooks into our own custom hooks

@ - Given function components the ability to own state and run side effects at different lifecycle points (before v 16.8 only available in class components)

* Overview of all built-in hooks:
! Most used:
@ 1 - useState (have learned)
@ 2 - useEffect (have learned)
@ 3 - useReducer (will learn)
@ 4 - useContext (will learn)
! Less used:
++ 1 - useRef (will learn)
++ 2 - useCallback (will learn)
++ 3 - useMemo (will learn)
++ 4 - useTransition (will learn)
++ 5 - useDeferredValue (will learn)
? 6 -  useLayoutEffect (will not learn)
? 7 - useDebugValue (will not learn)
? 8 - useImprerativeHandle (will not learn)
? 9 - useId (will not learn)
! Only for libraries:
? 1 - useSyncExternalStore (will not learn)
? 2 - useInsertionEffect (will not learn)

* Rules of hooks:
@ 1 - Only call hooks at the top level:
- Do not call hooks inside conditionals,loops,nested functions or after an early return.
- This is necessary to ensure that hooks are always called in the same order (hooks rely on this)

@ 2 - Only call hooks from React functions:
- Only call hooks inside a function component or a custom hook
 
! HINT: These rules are automatically enforced by React's ESLint rules


* Summary of defining and updating state:
@ 1 - Creating state:
Simple => const [count,setCount] = useState(23);

Based on function (lazy evaluation) => const [count,setCount] = useState(
  () => localStorage.getItem('count') 
);
! Function must be pure and accept no arguments. Called only on initial render

@ 2 - Updating state :
simple => setCount(1000);

Based on current state => setCount( (c) => c + 1);
! Function must be pure and return next state.

! HINT: Make sure to NOT mutate objects or arrays,but to replace them

*/