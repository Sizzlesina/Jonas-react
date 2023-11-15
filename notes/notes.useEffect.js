/*
* Where To Create Side Effects:
@ - Review;
A side effect is basically any "interaction between a React component and the world outside the component" . We can also think of a side as "code that actually does something". Examples: Data fetching, setting up subscriptions, setting up timers, manually accessing to the DOM , etc.

@ - We need side effects all the time. They make our application do something. NOT in render logic!

++ We can create side effects in two different places in React;
1 - Event handlers => functions that are triggered whenever that the event that they are listening to happens.
! Triggered by events (onClick,onSubmit,etc.)
++ Sometimes this is not enough for the application's needs

2 - Effects (useEffect) => Effects allow us to write code that will run at different moments: mount,re-render,or unmount.
! Triggered by rendering


* Event handlers VS. Effects:
@ When?

++ Event handlers : 
- Executed when the corresponding event happens
! Preffered way to creating side effects

++ Effects: 
- Executed after the component mounts (initial render) and after subsequent re-renders (according to dependency array).

- Used to keep a component synchronized with some external system (in this example, with the API movie data).

! These two will produce the same result,but at different moments.



* Whats the useEffect dependency array?
@ - By default, effects run after every render. We can prevent that by passing a dependency array

@ - Without the dependency array, React doesn't know when to run the effect

@ - Each time one of dependencies changes , the effect will be executed again

@ - Every state variable and prop used inside the effect MUST be included in the dependency array
! Otherwise we get a "stale closure". We will go more into depth in a future section 👉 



* useEffect is a synchronization mechanism:
@ - The mechanics of effects: 
- useEffect is like an event listener that is listening for one dependency to change.Whenever a dependency changes,it will execute the effect again!


- Effects react to updates to state and props used inside the effect (the dependencies). So effects are "reactive" (like state updates re-rendering the UI)

++ title change / userRating changes => effect is executed again => document title is updated

? Component state/ props => synchronize with => Exterrnal system (side effect)

* Synchronization and lifecycle:
@ - Dependency (state or props) changes => Effect is executed again and Component is re-redered 
! Effects and component lifecycle are deeply connected

- We can use the dependency array to run effects when the component renders or re-renders
 
some examples for dependency array:

@ - useEffect(fn, [x,y,z])
* Synchronization => Effect synchronizes with x,y,z
++ Lifecycle => Runs on mount and re-renders triggered by updating x,y or z

@ - useEffect(fn,[]) 
* Synchronization => Effect synchronizes with no state / props
++ Lifecycle => Runs only on mount (initial render)

@ - useEffect(fn)
* Synchronization => Effect synchronizes with everything
++ Lifecycle => Runs on every render (usually bad⛔)

Update news of the course progress => today im sick and cant work properly


* The cleanup function:
@ - Function that we can return from an effect (optional)  
@ - Runs on two different ocassions:
  1 - Before the effect is executed again
  2 - After a component has unmounted

@ - Necessary whenever the side effect keeps happening after the component has been re-rendered or unmounted 

@ - Each effect should do only one thing! Use one useEffect hook for each side effect. This makes effects easier to clean up.

++ Component renders => Execute effect if dependency array includes update data

++ Component unmounts => Execute cleanup function

* useEffect dependency array rules:
- Every state variable, prop, and context value used inside the effect MUST be included in the dependency array

- All "reactive values" must be included! That means any function or variable that refrence any other reactive value   

- Dependencies choose themselves: NEVER ignore the exhaustive-deps ESLint rule!

- Do NOT use objects or arrays as dependencies (objects are recreated on each render, and React sees new objects as different, {} !== {} )

++ The same rules apply to the dependency arrays of other hooks: useMemo and useCallback

@ Reactive value: 
- State,prop,or context value or any other value that refrences a reactive value

* Removing unnecessary dependencies:
@ 🤖 - Removing function dependencies
👉 Move function into the effect
👉 If you need the function in multiple places,memoize it (useCallback)
👉 If the function doesn't refrence any reactive values,move it out of the component

@ 📦 - Removing objects dependencies
👉 Instead of including the entire object,include only properties you need (primitive values)
👉 If that doesn't work,use the same strategies as for functions (moving or memoizing object)

@ 🎯 - Other strategies
👉 If you have multiple related reactive values as dependencies,try using a reducer (useReducer)
👉 If you dont need to include setState (from useState) and dispatch (from useReducer) in the dependencies, as React guarantees them to be stable across renders

* When not to use an effect:
- Effects should be used as a last resort,when no other solution makes sense, React calls them an "escape hatch" to step outside of React
@ Three cases where effects are overused:
1 - Responding to a user event.An event handler function should be used instead
2 - Fetching data on component mount. This is fine in small apps,but in real-world app,a library like React Query should be used
3 - Synchronizing state changes with one another (setting state based on another state variable). Try to use derived state and event handlers (We actually do this in the current projects,but for a good reason)
*/