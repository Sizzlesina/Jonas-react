/*
* Introduction to Redux:
@ - What is Redux:

1 - 3rd-party library to manage global state

2 - Stand alone library, but easy to integrate with React apps using React-Redux library

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
- In order to update global state with Redux,we start by calling an action creator in a component and then dispatch the action that will resulted from the action creator. This action then reach the store where the right reducer will pick it up and update the state according to the instructions. This then triggers a re-render of the UI where the cycle finishes.

++ Goal : Make the state update logic seperate from the rest of the application 
? Real world task: Depositing $50 into your bank account

* For using the createStore and combineReducers methods and something like that:
@ - npm i redux then import the methods you want

* For using the redux store Provider in the index.js component and then use the store:
@ - npm i react-redux
* How to create the Redux hook store and reducer files:
1 - npm i redux
2 - a store file and a reducerNameSlice file for each reducer
3 - in the reducer files write the reducers 
4 - export default the function name in the reducer files and the handler function as a named export
5 - in the store file import the createStore and combineReducers and the reducer files
6 - const rootReducer = combineReducers(favorite name: reducer1 file , favorite name: reducer2 name)
7 - const store = createStore(rootReducer)
8 - export default store;

* How to write the Redux reducers:
1 - initialState
2 - export default reducerFunction(){
  (switch case )
}
3 - export function dispatchFunction(){
  return {type :( whatever that you write in the case and the action for that), payload(if needed) : (Something that you want)}
}
++ the dispatch function is a way of updating states and instead of writing them inside another component we will write them inside the reducer file and then use them in the component that we want
* How to use the Redux:
1 - npm i react-redux
2 - in the index.js file import the {Provider} from 'react-redux' and the store file that we created
3 - Cover the <App /> component into the <Provider /> tag and then pass in the store into a store={} prop of the <Provider />
@ Whenever we want to use the Redux reducer states:
1 - in the component that you want to use the redux import {useSelector} from 'react-redux'
2 - useSelector(store => store.(REDUCER THAT YOU WANT TO USE).(PROPERTY THAT YOU WANT TO USE) )
3 - save the above line of code into a variable like this:
const account = useSelector(store => store.account.balance)
4 - USE
@ Whenever we want to use dispatch from the Redux and do something to the action:
1 - import {useDispatch} from 'react-redux'
2 - const dispatch = useDispatch()
3 - import the dispatch function that you want to use from the Redux reducer file 
4 - USE it like this: 

import {useDispatch} from 'react-redux'
import {createCustomer} from 'customerSlice';
const dispatch = useDispatch();

function handleClick(){
  dispatch(createCustomer());
}


* What is Redux middlewear?
@ - Where to make an asynchronous API call (or any other async operation) in Redux?
++ In store:
No asynchronous operations 
Reducers need to be pure functions

++ So maybe its better to fetch the data in the component and then dispatch an action to the store:
- this way can make asynchronous operations and then dispatch
- fetching data in components is not ideal

++ But if not in the store and not in the component then where do we perform asyncronous actions?
@ Middleware : A function that sits between dispatching the action and the store. Allows to run code after dispatching,but before reaching the reducer in the store:
- Perfect for asynchronous code
- API calls, timers, logging, etc.
- The place for side effects

@ The most popular middleware in Redux is (Redux Thunk)

- In thunk the action that we dispatched in the component will immediately dispatched and then get into the middleware (Thunk) then we start fetching data into the thunk but it can be also other asynchronous operation (but lets stick to the data fetching) then we dispatch the function into the store and the state will be updated 

* What is Redux tookit?
@ - The modern and prefered way of writing Redux code
@ - An opinionated approach, forcing us to use Redux best practices
@ - 100% compatible with "classic" Redux, allowing us to use them together
@ - Allows us to write a lot less code to achieve the same result (less "boilerplate")
@ - Gives us three big things (but there are many more...):
1 - We can write code that "mutates" state inside reducers (will be converted to immutable logic behind the scenes by "Immer" library)
2 - Action creators are automatically created
3 - Automatic setup of thunk middleware and devtools


* Till this part lets have a summary on whats going on:
@ - Using the Redux in the old way was to use the createStore and then combine the reducers together and then pass them to the store and whenever we want to use them just use a callback model of calling useSelector and then use the part of the Redux that we want and whenever we want to do some actions to the state use the useDispatch method and then use the dispatch function that we want (already the dispatch function are in the reducer file)

++ But in the old way we learned two new things:
1 - Redux devtools
2 - Thunk middleware

@ Thunk: when we want to use a asynchronous function in the reducers of the Redux we will use the middleware (thunk middleware) and then as the second paremeter of the createStore we will pass in the thunk 

* How to use the thunk?:
1 - npm i redux-thunk
2 - 
import thunk from 'redux-thunk';
import {applyMiddleware} from 'redux';
3 - const store = createStore(rootReducer,applyMiddleware(thunk))

@ Redux devtools: We can use the Redux devtools in the browser to record the actions done in the application

* How to use Redux devtools?:
1 - npm i redux-devtools-extension
2 - import {composeWithDevtools} from 'redux-devtools-extension';
3 - const store = createStore(rootReducer,composeWithDevtools(applyMiddleware(thunk)))

@ Now we want to use the Redux toolkit to create the store and this is the modern way of using Redux and the createStore is dupricated

* How to use Redux toolkit?:
1 - npm i @reduxjs/toolkit
2 - import {configureStore} from '@reduxjs/toolkit'
3 - const store = configureStore({
  reducer:{
    (FIRST REDUCER NAME) : (REDUCER FILE NAME THAT GOT IMPORTED TO THE STORE FILE),
  },
});

* How to write the reducer files in the new way of creating store?:
1 - import {createSlice} from '@reduxjs/toolkit'
2 - const intialState = {
  (states)
}
3 - const slicaNameSlice = createSlice({
  name : (NAME THAT WE WANT),
  initialState : (INITIAL STATE NAME),
  reducers: {
    (NAME OF THE REDUCER FUNCTION)(state,action){
      (IN HERE WE MUST MUTATE THE STATES LIKE THIS => state.loan += state.balance;)
    }
  }
})

++ The case action type name will be as the same structure as before => reducerName/reducerAction
4 - export const {dispatch-function names} = (Reducer-function name).actions;
5 - export default (Reducer-function name).reducer;
++ Example:
@ export const {increment,decrement} = accountSlice.actions;
@ export default accountSlice.reducer;

* How to use thunks in Redux toolkit:
@ - In order to use the thunks in Redux toolkit we can use the create async thunk function that Redux toolkit provides us however using this function is a lot of extra work because the easier solution is to use the action creator function that we already used before




! HINT: In the example of this section we change the value of the deposit payload inside the deposit function and then we pass in a parameter and then set it to payload value which in here is : amount which is a state



* Context API VS. Redux:
@ - Context API + useReducer :
++ Pros:
1- 👍 Built into React
2- 👍 Easy to set up a single context
++ Cons:
1- 👎  Additional state "slice" requires new context set up from scratch ("provider hell" in App.js) 
2- 👎 No mechanism for async operations
3- 👎 Performace optimization is a pain
4- 👎 Only React Devtools
@ - Redux:
++ Cons:
1-  👎 Requires additional package (larger bundle size)
2- 👎 More work to set up initially
++ Pros:
1- 👍 Once set up, its easy to create additional state "slices"
2- 👍 Supports middleware for async operations
3- 👍 Performance is optimized out the box
4- 👍 Excellent Devtools

! HINT: Keep in mind that we should not use these solutions for remote state

* When to use Context API or Redux?
@ - Context ApI + useReducer:

- "Use the context API for global state management in small apps"
- 👉 When you just need to share a value that doesnt change often [color theme,preferred language,authenticated user,...]
- 👉 When you need to solve a simple prop drilling problem
- 👉 When you need to manage state in a local sub-tree of the app (For example in the compound component pattern)

@ - Redux (These are not super common in UI state):

- "Use Redux for global state management in large apps"
- 👉 When you have lots of global UI state that needs to be updated freqeuntly (because Redux is optimized for this) [Shopping cart,current tabs,complex filters or search,...]
- 👉 When you have complex state with nested objects and arrays (because you can mutate state with Redux Toolkit)

++ Warning: There is no right answer that lifts every project.it all depends on the project needs!


*/ 
