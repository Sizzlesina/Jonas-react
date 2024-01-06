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

*/