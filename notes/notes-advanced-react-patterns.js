/*
* Render prop pattern:
- For complete control over what the component renders,by passing in a function that tells the component what to render.Was more common before hooks,but still useful

* Compound component pattern:
- For very self-contained components that need/want to manage their own state. Compound components are like fancy super-components


* Faker API:
- We can use this fake api to test the application
@ How to use it?
1- npm i @faker-js/faker
2- import {faker} from '@faker-js/faker'
3- const variable = Array.from({length : (number), () =>{
  return {
    (another name) : faker.(a name (read the document).(something))
  }
}})

* Render prop
- Realise that we have a variable in a component that computes something now we want to pass in different type of data to the component but we cant have access to that variable (this may sound confusing just look at the example):
++ Example:
@ First component (List):
function List({title,items}){
  const [isCollapsed,setIsCollapsed] = useState(false);
  const variable = isCollapsed ? items.slice(0,3) : items; => This line of code will show the items up to 3 

  
return(
  <ul>
  {variable.map(product => <ProductItem key={product.productName} product={product}/>)}
  </ul>
)
}

- Now we want to use another item with different quantities but in here we can only loop over the variable and outside the componnet we cant do this i mean:
@ We can say that we want to get an children prop and do this:
function List({title,items,children}){
  const [isCollapsed,setIsCollapsed] = useState(false);
  const variable = isCollapsed ? items.slice(0,3) : items;

  return (
    <ul>
    {children}
    </ul>
  )
}
@ - But then we dont have access to the variable so what should we do?
? Now we use render prop

* How we use render prop?:
1- Give the component that we want to render the items of it a render prop
2-Receive that render prop 
3- map over the variable and return render
++ Example:
@ First component:
function List({title,items,render}){
  const [isCollapsed,setIsCollapsed] = useState(false);
  const variable = isCollapsed ? items.slice(0,3) : items;

  return (
    <ul>
    {variable.map(render)}
    </ul>
  )
}  

@ Root component:
function App(){
  const companies = (15 company details);
  const products = (15 product details);
  
  return (
    <div>
    <List title="Products" items={products} render={(product) => <ProductItem key={product.productName} product={product} /> } />

    <List title="Companies" items={companies} render={(company) => <companyItem key={company.companyName} company={company} /> } />
    </div>
  )
}

@ - Now we can use the List twice and with different data this help the reusability of the component

* Higher Order Component:
- Realise that we have a component that we want to add a feature to it that is simillar to another component so we can create a higher order component
@ How to use the higher order component?:
1- create a component named it with withSomething
2- function withSomething(wrappedComponent){
  return anotherComponent(props){
    (Logic of the component)
  }
  return (
    (New UI),
    @ Whenever we want to add the anotheComponent component
    <WrappedComponent {...props} anotherProp   />
  )
}
export default withSomething;
@ Usage in our app:
- When we want to use the logics so many times but we want to declare them once it helps to less hard codding

* Compound component pattern:
- If we needed so many props for a component we can easily just use the compound component for every prop

@ How to use compound component?:
1- Create a context
2- Create the parent component that holds the context values and provider (its more a context function not a parent component)
3- Create a child component to help implementing a common task related to the parent component
4- Add the child components as properties to parent component 

++ Example:
@ We want to write a counter component:
const CounterContext = createContext();

function Counter({children}){
  const [count,setCount] = useState(0);
  const increase = () => {
    setCount(c => c + 1);
  }
  const decrease = () => {
    setCount(c => c - 1);
  }
  return (
    <CounterContext.Provider value={{count,increase,decrease}}>
    <span>{children}</span>
    </CounterContext.Provider>
  )
}

function Count(){
  const {count} = useContext(CounterContext);
  <span>{count}</span>
}
function Label({children}){
  return <span>{children}</span>
}
function Increase({icon}){
  const {increase} = useContext(CounterContext);
  return <button onClick={increase}>{icon}</button>
}
function Decrease({icon}){
  const {decrease} = useContext(CounterContext);
  return <button onClick={decrease}>{icon}</button>
}

Counter.Count = Count;
Counter.Label = Label;
Counter.Increase = Increase;
Counter.Decrease = Decrease;

export default Counter

@ Now we can use the Counter component like this:
<Counter>
<Counter.Label>This is a counter</Counter.Label>
<Counter.Decrease />
<Counter.Count />
<Counter.Increase />
</Counter>

!HINT: These component wont work outside the Counter component

* React portal:
- with React Portal we can choose where to place the component
++ Example:
we dont want to place the component inside the div but we want it to be an children of body
@ so we do this:
function Modal({children,onClose}){
  import {CreatePortal} from 'react-dom';

  return CreatePortal(
      (JsX),
      (Where to place the jsx for example document.body)
  )
}
@ - Now this component is a direct child of the body element

* Clone element:
- cloneElement lets you create a new React element using another element as a starting point

@ How to use clone element?:
- When we have a child component with some props but in the application we want to use it with different props we use cloneElement funciton which can be imported from react library

++ Example:
@ Parent component:
import ChildComponent from './ChildComponent';
import cloneElement from 'react'

function Parent(){
  const originalElement = <ChildComponent name="Sina" age:{25} />;
  const clonedElement = cloneElement(originalComponent,{age : 26, name :"Ali" , gender :"Male"});

  return (
    <div>
    <h1>Original Element:</h1>
    {originalElement}

    <h1>Cloned Element:</h1>
    {clonedElement}


    </div>
  )
}

@ Child Component:
function ChildComponent(name,gender,age){
  return (
    <p>Name : {name}</p>
    <p>Age : {age}</p>
    {gender && <p>Gender : {gender}</p>}
  )
}
export default ChildComponent;


* Now the result will be:
Original Element:
Name : "Sina"
Age : 25

Cloned Element:
Name : Ali
Age : 26
Gender : Male

!HINT: The props value will be changed and if the props value exist the new value will be replaced and show up in the browser window SO the CloneElement will clone the element and then replace the new props and its values

*/