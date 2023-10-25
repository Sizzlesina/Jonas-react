/*
* Why useReducer:
@ - State management with useState is not enough in certain situation:
1 - when components have a lot of state variables and state updates,sperad across many event handlers all over the component
2 - When multiple state updates need to happen at the same time (as a reaction to the same event, "like starting a game")
3 - When updating one piece of state depends on one or multiple other pieces of state

* Managing state with useReducer:
@ - state with useReducer:
1 - An alternative way of setting state,ideal for complex state and related pieces of state
2 - Stores related pieces of staet in a state object
3 - useReducer needs reducer: function containing all logic to update state.Decouples state logic from component
4 - reducer: pure function (no side effects!) that takes current state and action,and returns the next state
5 - action: object that describes how to update state 
6 - dispatch: function to trigger state updates, by "sending" actions from event handlers to the reducer

* How reducers update state:
@ - lets say that we're in an event handler in some component and we now need to update some state so what do we do?
- we call the dispatch function that we got back from useReducer in order to dispatch an action to the reducer and this action is an object that contains information for the reducer (informaton about how the reducer should update the state)
@ - Now basically the reducer takes in this action together with the current state and it will then return a brand new state object which we usually call the next state in the context of reducers and as always with state updating the state will then trigger a re-render of the component instance

@ - if you're wondering why the reducer function is actually called a reducer the answer is that becasue it follows the exact same idea as the array.reduce method. So just like the reduce method that accumulates all array values into one single value,the react reducer accumulates all actions into one single state over time.

@ - Now behind the scenes the dispatch function has access to the reducer because we passed it into the useReducer hook so dispatch is really coordinating this whole thing and also giving the reducer access to the current state.

* A mental model for reducers:
@ - Real-world task: withdrawing $5,000 from your bank account

dispathcher => Who requests the update
reducer =>  Who makes the update
state => What needs to be updated
action => How to make the update



* useState VS useReducer
@ useState:
- Ideal for single,independent,pieces of state (numbers,strings,single arrays,etc.)

- Logic to update state is placed directly in event handlers or effects, spread all over one or multiple components

- State is updated by calling setState (setter returned from useState)

- imperative state updates

- Easy to understand and to use
@ useReducer:
- Ideal for multiple related pieces of state and complex state (e.g. object with many values and nested objects and arrays)

- logic to update state lives in one central place, decoupled from components: the reducer

- State is updated by dispatching an action to a reducer 

- Declarative state updates: complex state transitions are mapped to actions

- More difficult to understand and implement

* When to use useReducer?
@ - Just one piece of state ?
@ yes => use useState
--------------------------------------------------
@ No => Do states frequently updates together?
-------------------------------------------------
?? #1 Yes => Are you willing to implement slightly more complex code? 
--------------------------------------------------
! Yes => use useReducer
! No => use useState
---------------------------------------------------
?? No => Over 3 or 4 pieces of related state,including objects?
----------------------------------------------------
++ Yes => #1 (read from the hashed part)
++ No => Too many event handlers make components large and confusing?
----------------------------------------------------
Yes => #1 (read from the hashed part)
No => use useState


! HINT: useState should remain your default choice for managing state 

*/