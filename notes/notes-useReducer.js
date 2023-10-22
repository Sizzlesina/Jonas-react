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

*/