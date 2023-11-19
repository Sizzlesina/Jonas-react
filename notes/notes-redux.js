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


* How to use the Redux:
1 - npm i react-redux
2 - in the index.js file import the {Provider} from 'react-redux' and the store file that we created
3 - Cover the <App /> component into the <Provider /> tag and then pass in the store into a store={} prop of the <Provider />
4 - in the component that you want to use the redux import {useSelector} from 'react-redux'
5 - useSelector(store => store.(REDUCER THAT YOU WANT TO USE).(PROPERTY THAT YOU WANT TO USE) )
6 - save the above line of code into a variable like this:
const account = useSelector(store => store.account.balance)
*/ 
