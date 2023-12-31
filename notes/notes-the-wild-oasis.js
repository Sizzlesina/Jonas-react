/*
* How to plan a React application:
1- Gather application requirements and features
2- Divide teh application in pages
3- Divide the application into featutes categories
4- Decide on what libraries to use (technology decisions)


* Project requirements from the bussiness:
@ Step 1:
? Authentication : { 1- Users of the app are hotel employees.They need to be logged into the application to perform tasks.

? 2- New users can only be signed up inside the applications(to guarantee that only actual hotel employees can get accounts)

? 3- Users should be able to upload an avatar,and change their name and password }

++ Cabins : { 4- App needs a table view with all cabins, showing the cabin photo,name,capacity,price and current discount

++ 5- Users should be able to update or delete a cabin,and to create new cabins(including uploading a photo) }

! Bookings: { 6- App needs a table view with all bookings, showing arrival and departure dates, status and paid amount, as well as cabin and guest data 

! 7- The bookings status can be "unconfirmed" (booked but not yet checked in), "checked in",or "checked out". The table should be filterable by this important status

! 8- Other booking data including: number of guests, number of nights, guest observations, whether they booked breakfast, breakfast price }

* Check in/out : { 9- Users should be able to delete,check in, or check out a booking as the guest arrives (no editing necessary for now)

* 10- Bookings may not have been paid yet on guest arrival.Therefore, on check in,users need to accept payment (outside the app), and then confirm that payment has been received (inside the app)

* 11- On check in,the guest should have the ability to add breakfast for the entire stay,if they hadn't already }

Guests : { 12- Guest data should contain: full name,email,national ID,nationality, and a country flag for easy identification}

@ Dashboard : { 13- The initial app screen should be a deshboard, to display important information for the last 7, 30 or 90 days:
  @ 👉 A list of guests checking in and out on the current day.Users should be able to perform these tasks from here
  @ 👉 Statistics on recent bookings, sales, check ins, and occupancy rate
  @ 👉 A chart showing all daily hotel sales, showing both "total" sales and "extras" sales (only breakfast at the moment)
  @ 👉 A chart showing statistics on stay durations, as this is an important metric for the hotel}

++ Settings : { 14- Users should be able to define a few application-wide settings:breakfast price, min and max nights/bookings, max guests/bookings}

15- App needs a dark mode

@ Step 2+3:
* Features categories:
1- Bookings
2- Cabins 
3- Guests 
4- Dashboard
5- Check in and out
6- App settings
7- Authentication

* Necessary pages:
1- Dashboard => /dashboard
2- Bookings => /bookings
3- Cabins => /cabins
4- Bookings check in => checkin/:bookingID
5- App settings => /settings
6- User sign up => /users
7- Login => /login
8- Account settings => /account

!HINT: most of the state will be global

@ Step 4:
* Client-side rendering (CSR) or server-side rendering(SSR)?
++ - CSR with plain React:
- Used to build single-page applications (SPAs)
- All HTML is rendered on the client
- All JavaScript needs to be downloaded before apps start running: bad for performance
++ like React

++ - SSR with framework:
- Used to build multi-page applications(MPAs)
- Some HTML is rendered in the server
- More performant, as less JavaScript needs to be downloaded
- The React team is moving more and more in this direction
++ like NEXTjs and REMIX

* Technology decisions:
Routing => React Router => The standard for React SPAs

Styling => Styled components => Very popular way of writing component-scoped CSS,right insdie JavaScript. A technology worth learning

Remote state management => React Query => The best way of managing remote state,with features like caching automatic re-fetching,pre-fetching, offline support,etc. Alternatives are SWR and RTK Query, but this is the most popular

UI state management => Context API => There is almost no UI state needs in this app, so one simple context with useState will be enough, No need for Redux

Form management => React Hook Form => Handling bigger forms can be a lot of work,such as manual state creation and error handling, A library can simplify all this

Other tools => React icons/React hot toast/Recharts/data-fns/Supabase


* Styling:
- For styling this project we use something called styled component which is a library

* How to use the styled components?
- npm i styled-components
- import styled from 'styled-components';

* About styled component:
- This component will return an component for every style that we wanna use for a element:

++ For example
const H1 = styled.h1`
font-size : 60px;
font-weight : 600;
`
!HINTS: 
- We must write the styles inside an template  literal 

- The CSS we write will only scoped to the component that we declare the styled component

- The styled components can get props as normal JSX element for example if we have an input we can pass in the type of it as a prop and if we have a button we can pass in the onClick prop

- We can reuse the styled components as many times as we want

- Hover states for the styles in the styled components be like: &:hover{
  font-size : 10px;
}
!The & points to the element itself

- If we using a variable to asign the styles to it and then add it to the styled component but we want the syntax highlighting we can use css before the variable styles:
++ For example:
import styled , { css } from 'styled-components'
const test = css`text-align : center;`;
const Heading = styled.h1`
${test}
`

* Props in styled components:
- When we pass in a prop for a styled component we can get the prop in a callback function like this:
++ Example:
const Button = styled.button`
${props => props.(name of the prop) === (value of the prop) && css`(the styles that we want)` }`

* (as) prop:
- This prop can tell the component to show up as which element for example we apply the styles for a h1 element but we want the element to be a h2 so we do this:
@ H1 component:
const H1 = styled.h1`
${props => props.type === 'h1' && css`font-size : 20px;`}
${props => props.type === 'h2' && css`font-size : 10px;`}
`
@ App component:
import H1 from 'somewhere'
funciton App(){
  return (
    <H1 type='h1' >Hello world!</H1>
    <H1 type='h2' as='h2' >Hello world!</H1>
  )
}

! Now the second element as well as it got the h2 styles it will show up in the HTML files as a h2 element

* Something about props:
- We can define default props for a component like this:

ComponentName.defaultProps = {
  prop : value
}

* Route:
- When we want a route to be the index route we must duplicate the route and then clean the path part and give it a index prop then in the element part as we want the name of it to show up in the route we must use the Navigate component which is a react-router-dom component and then replace it to the route we want:
++ Example:
import { Navigate } from 'react-router-dom';

<Route index element={<Navigate replace to='main' />}/>
<Route path='main' element={<Main />}/>


* Global styles:
- We can use global styles insdie a js file and then named it as the same and we can make the styles global using createGlobalStyle function:
++ Example:
const GlobalStyles = createGlobalStyle`
(the styles)
`
export default GlobalStyles;

!HINT: This functionality only can be used in the styled components

* Supabase :
- Service that allows developers to easily create a back-end with a postgres database 

- Automatically creates a database and API so we can easily request and receive data from the server

- No back-end development needed! 🥳

- Perfect to get up and runnning quickly!

- Not just an API: Superbase also comes with easy-to-use user authentication and file storage

*/