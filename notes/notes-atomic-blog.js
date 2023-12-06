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
NO = Local state 
YES = Global state

@ - State Domain:
++ 1 - Remote state:
1 - All application data loaded from a remote server (API)
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


* How to use context?:
! First method:
@ - first: 
- create a variable and then use the createContext hook for that 
@ second:
- open a component and then cover the part that you want to set the values for that in a open and closed component like this:
@ third:
- use the useContext hook whenever we want to use the values and then destruct the values and use them (as the name that we set them at the first place)

++ Example:
@ App component:
const [city,setCity] = useState();
export const Context = createContext();
return(
<Context.Provider value={{
  city,
  setCity
}}>
<Main />
</Context.Provider>
);
@ Main component:
import {useContext} from 'react';
import {Context} from './App';
const {city,setCity} = useContext(Context);
! And then use the context value and avoid prop drilling



! Second method:
@ first:
- create a custom component named the (whatever)Context
@ second:
- create the context inside the component and use all state and effects inside the component
@ third:
- in the JSX part of the component create the open and closed component for the context and set the values inside of it
@ fourth:
- create another function inside the component to use the context and then return the context (set a condition for whent we dont have access to the context and the context is undefined)
@ fifth:
- export the context function and the useContext function
@ sixth:
- whenever we want to use the values of the context just import the useContext function then destruct the values

++ Example:
@ CitiesContext.js:
- import {useContext,createContext,useState} from 'react';
const CitiesContext = createContext();
function CitiesProvider({children}){
const [city,setCity] = useState();
return (
  <CitiesContext.Provider value={{
    city,
    setCity
  }}>
  {children}
  </CitiesContext.Provider>
)
}
function useCities(){
  const context = useContext(CitiesContext);
  if(context === undefined) throw new Error("CitiesContext used outside of the CitiesProvider");
  return context;
}
export { CitiesProvider, useCities }

@ App component:
import {CitiesProvider} from './CitiesContext';
function App(){
  return (
    <CitiesProvider>
    <Main />
    </CitiesProvider>
  )
}

@ Main component:
import {useCities} from './CitiesContext';
function Main(){
  const {city,setCity} = useCities();
  ! Now we can use the state without prop drilling
}


* Profiler developer tool:
@ is used for tracking the re-renders of the components

*/