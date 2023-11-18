/*
* Introduction to Redux:
@ - What is Redux:

1 - 3rd-party library to manage global state

2 - Standalone library, but easy to integrate with React apps using React-Redux library

3 - All global state is stored in one globally accessibale store, which is easy to update using "actions" (like useReducer)

4 - Two "versions":(1) Classic Redux, (2) Modern Redux Toolkit (will learn both)

++ Global state is updated
++ All consuming components re-render


! You need to have a really good undrestanding of the useReducer hook in order to undrestand Redux!


* Do you need to learn Redux?:
@ _ Historically, Redux was used in most React apps for all global state.Today,that has changed, because there are many alternatives.Many apps dont need Redux anymore,unless they need a lot of global UI state.

++ Yes. (Why?) => Because:
1 - Redux can be hard to learn, and this course teaches it well
2 - You will encounter Redux code in your job, so you should understand it
3 - Some apps do require Redux (or a similar library) 

++ Ideal useCase for Redux, when there is lots of state that updates frequently => global UI state

! For remote global state, we have better,more specialized tools and thats the REASON WHY MANY APPS DONT USE REDUX

* The mechanism of the useReducer hook:
1 - Event handler in component 
++ For example: action({type: "deposit",payload: 50}) => object that contains information on how the reducer should update state

* Difference between useReducer and Redux:

1 - In Redux we simply dispatch the action not to the reducer but to a store which multiple reducers live there and each reducer is a pure function that calculates the next state (state transition) based on the action and the current state.Usually one reducer per app feature (e.g. shopping cart + user data + theme)

2 - instead of writing action functions by hand we use a action creator function to automate writing action and is helpful to keep all possible actions in one central place (This is convention, not a must)


++ Store: All global state lives in this centralized container. Its the single source of truth of global state in the app

@ Redux cycle:
- In order to update global state with Redux,we start by calling an action creator in a component and then dispatch the action will that resulted from the action creator. This action then reach the store where the right reducer will pick it up and update the state according to the instructions. This then triggers a re-render of the UI where the cycle finishes.

++ Goal : Make the state update logic seperate from  the rest of the application 
? Real world task: Depositing $50 into your bank account
*/ 
