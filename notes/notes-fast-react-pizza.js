/*
* The project:🍕 Fast React Pizza Co. :
@ Remember our very first project?
- 👉 Now the same restaurant (bussiness) needs a simple way of allowing customers to order pizza and get them delivered to their home   
- 👉 We were hired to build the application front-end

* How to plan and build a React application:
@ From the earlier "Thinking in React" lectures:
1 - Break the desired UI into components 
2 - Build a static version (no state UI)
3 - Think about state management + data flow
👇👇
++ - This works well for small apps with one page and a few features
++ - In real-world apps, we need to adapt this process

* So how to do it actually?
1 - Gather application requirements and features
2 - Divide the application into pages:{
 ++ 👉 Think about the overall and page-level UI
 ++ 👉 Break the desired UI into components (from earlier)
 ++ 👉 Design and build a static version (no state yet) (from earlier)
}
3 - Divide the application into features categories:{
  ++ 👉 Think about state management + data flow (from earlier)
}
4 - Decide on what libraries to use (technology desicions)

! HINT: This is just a rough overview.In the real-world things are never this linear

* Project requirements from the business:
@ Step 1:
1 - Very simple application,where users can order one or more pizzas from a menu
2 - Requires no user accounts and no login:users just input their names before using the app
3 - The pizza menu can change, so it should be loaded from an API (DONE✅)
4 - Users can add multiple pizzas to a cart before odrering
5 - Ordering requires just the user's name,phone number and address
6 - If possible,GPS location should be also be provided to make delivery easier
7 - Users can make their orders as "priority" for an additional 20% of the cart price
8 - Orders are made by sending a POST request with the order data (user data + selected pizzas) to the API
9 - Payments are made on delivery, so no payment processing is necessary to the app
10 - Each order will get a unique ID that should be displayed,so the user can later look up their order based on the ID
11 - Users should be able to mark their orders as "priority" order even after it has been placed

! HINT: From these requirements,we can undrestand the features we need to implement

@ Step 2 + 3 (Features + Pages) :
++ Feature categories:
1 - User (For the HomePage)
2 - Menu (For the Pizza menu)
3 - Cart (For the Cart)
4 - Order (One for placing a new order and one for looking up an order)

! HINT: All features can be placed into one of these. So this is what the app will essentially be about

++ Necessary pages:
1 - HomePage => /
2 - Pizza menu => /menu
3 - Cart => /cart
4 - Placing a new order => /order/new
5 - Looking up an order => /order/:orderID

* State management + technology decisions:
! Types of state:
1 - User => Global UI state (no accounts,so stays in app)
2 - Menu => Global remote state (menu is fetched from API)
3 - Cart => Global UI state (no need for API,just stored in app)
4 - Order => Global remote state (fetched and submitted to API)

++ State "Domains"/"Slices" => these actually map quite nicely to the app features

! Techs:

@ - Routing => React Router = the standard for React SPA's

@ - Styling => tailwind css = Trendy way of styling that we want to learn

@ - Remote state management => React Router = new way of fetching data right inside React Router (v6.4) that is worth exploring ("render-as-you-fetch" instead of "fetch-on-render").Not really state management,as it doesnt persist state.

@ - UI state management => Redux = State is fairly complex.Redux has many advantages for UI state.Also we want to practice Redux a bit a more

! HINT: This is just one of many tech stacks we could have chosen:

* Router:
- Now we can use router with the createBrowerRouter method and we dont need to use components anymore

! Some Hints about the new way of writing the React Router:
1 - we can use the nested routers by using <Outlet /> as same as before but this time instead of writing the nested routes inside together components we can use the children property inside the createBrowserRouter and the route that we want to be the parent route then we can write the children routes inside of it

++ example:
@ in the Parent component:

import {Outlet} from 'react-router-dom';
export default function AppLayout(){
  return(
    <main>
    <h1>this is where the children Routes placed 👇</h1>
    <Outlet />
    </main>
  )
}
@ in the component where the Routes placed:

const route = createBrowserRoute([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <HomePage /> 
      },
       (and the other routes...)
    ]
  }
])
function App(){
  return <RouterProvider router={router} />
}
export default App;

* Something about the loader function inside the React components (when we create a vite project):
1 - we can use a loader function inside the component to fetch the API that we want whenever we going to the component route 

++ For example:
function Menu(){
  return <h1>Menu</h1>
};
export async function loader(){
  const menu = await fetch("some API")
  return menu; 
}
++ Now when we open the route of the component the data will be fetched and else we dont need to fetch the data 

! HINT:
we wont use it as same as the example above and we should use a custom hook named : useLaoderData() that is a hook inside the react-router-dom so we should install the react-router-dom package and then use this function to load the data whenever we open the component and change the route to the component route

++ example:
import {useLoaderData} from 'react-router-dom'
const menu = useLoaderData();
conosle.log(menu);

* Error handling in new React Router method:
- We can handle wrong routes and show an Error component by writing the errorElement property inside the createBrowserRouter method and then import the Error component

@ Now that we handle the error we can show the Error message as the user opens the wrong route by using a custom hook called useRouteError()

++ example: 
import {useRouteError} from 'react-router-dom';
const error = useRouteError();
console.log(error);


*/