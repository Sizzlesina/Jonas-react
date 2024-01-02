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

* How to use the supabase:
1- Go to the supabase.com site
2- Create a new account
3- Create a new organization
4- Use the database

* Modeling state:
@ - state "domains"/slices: 
1- Bookings
2- Cabins
3- Guests
4- Settings
5- Users
@ - Features categories:
1- Bookings : Bookings
2- Cabins : Cabins
3- Guests : Guests
4- Dashboard : Bookings
5- Check in and out : Bookings
6- App settings : Settings
7- Authentication : Users

!HINT: 
👉 - All this will be global remote state,stored within Supabase
👉 - There will be one table for each state "slice" in the database

* The Bookings table:
- Bookings are about a guest renting a cabin

- So a booking need information about what guest is booking which cabin: we need to connect them

@ - Supabase uses a postgres DB, which is SQL (relational DB). So we join tables using foreign keys

- We connect a booking with a cabin by storing the cabin's id (primary key) inside the booking cabinId (foreign key)

* Tables in Supabase:
- We can create a table in Supabase and then store the data there then we can add 1 row to the table and add data to it


* What is React Query? :
- Powerful library for managing remote (server) state

- Many feature that allows us to write a lot less code, while also making the UX a lot better:
  👉 Data is stored in a cache
  👉 Automatic loading and error states
  👉 Automatic re-fetching to keep state synched
  👉 Pre-fetching
  👉 Easy remote state mutation (updating)
  👉 Offline support

- Needed because remote state is fundementally different from regular (UI) state

* How to use React Query:
@ - In the App.jsx component or the root component:
1- npm i @tanstack/react-query
2- import { QueryClient , QueryClientProvider } from '@tanstack/react-query';
++ 3-  const queryClient = new QueryClient({
++  defaultOptions:{
++    queries: {
++      staleTime : (time to stale data),
++     },
++   },
++ }),

4- In the JSX part of the code we wrap the components into one QueryClientProvider and then we give it a client prop with the value of queryClient
++ Example:
<QueryClientProvider client={queryClient}>
<SinaComponent />
</QueryClientProvider>

@ - In the component that we want to use the data :
1- import {useQuery} from '@tanstack/react-query';
2- then destruct the states that we need like this:
++ const {isLoading,error,data: (rename)} = useQuery({
++  queryKey = ['some string'], => this queryKey must be a string or a object
++  queryFn : getUsers(), => the queryFn must return a promise so we can use fetch functions here
++ })
3- then the code that we need


* So what it do? In a simple word:
- It will get the data from Supabase and then creates some state itself which we can use and then we can use the data without the need to fetch it and it wont cause loading for fetching data because it will store the data into cache 


* React Query Mutations:
- We can mutate the data and add or delete from the data we have with this functionality
 
 * How to use React Query mutation:
1 - 
const queryClient = useQueryClient();
const {mutate,mutateAsync} = useMutation({
  mutationFn : deleteData (this function is written by myself for example),
  onSuccess : () => {
    queryClient .invalidateQueries(['queryKey'])
  }
})

++ Descriptions about the code above:
@ - We must create a queryClient variable to when we change the data then we check the data again and use the invalidateQueries method

@ - mutate and mutateAsync are a function that we can use on onClicks or whatever we want

@- mutationFn must be write by ourself

@ - onSuccess is for when the mutation done successfully

@ - when we use the invalidateQueries method we must use the queryKey that before we added to the queries

@ - We can also use the onError method in the mutation in case we have an error 


* Libraries:
- In this course we used many libraries which im gonna talk about them:
@ 1- react-hot-toast
this library is used for showing a toast to the user (notification) instead of using the alert which is a javascript method
* How to use Toaster:
1- npm i react-hot-toast
@ In the root component:
2- import {Toaster} from 'react-hot-toast'
3-  <Toaster
        position='(position that we wanna give to the Toaster)'
        gutter={(A number)}
        containerStyle={{ (Styles that we wanna give to the Toaster pay attention that it must be inside an object) }}
        toastOptions={{
          susccess: {
            duration: (a number in miliseconds),
          },
          error: {
            duration: (a number in miliseconds),
          },
          style: {
          (Styles that we wanna give to the Toaster pay attention that it must be inside an object)
          },
        }}
      />
@ In the component that we wanna use the Toaster:
4- import toast from 'react-hot-toast'
5- whenever we wanna use the toast : toast.error or toast.success or something like this we can use the toast methods

@ 2- react-hook-form:
- In this library we can controll our Forms very good
* How to use react-hook-form:
1- npm i react-hook-form
2- import {useForm} from 'react-hook-form'
3- const {register,handleSubmit} = useForm(); 

* Now we want to talk more about the functionality of the useForm hook:
@ register : 
- We can destruct register from the useForm hook like this:
const {register} = useForm();
and the register is used for storing the form data
!HINT: We can destruct the rest of the methods like this
* How can we use register?:
<Form>
<Input id="id" {...register("id")} />
</Form>
!HINT: In here the Form component and the Input component are styled components

* What is the other functinality of the register?:
- After the id string we can pass in an object to the register like this:
++ {...register("id",{})}
- Now in the object we can write whatever functionality we need like : required,min,validate, etc...
@ Now lets talk about all of them;
1- required => a message that we show to the user whenever the field is empty and has no value
++ Example:
{...register("id",{
  required: "This field should have a value"
})}

2- min => this property needs to be an object it has a value and a message that it will show to the user if the value that user enters was not have the minimum value
++ Example:
{...register("id",{
  min:{
    value : 1,
    message : "This field should have the minimun value of 1"
  }
})}

3- validate => this will get an callback funciton that checks for the validation of the field and the callback function gets a value parameter that is a value of the input field
++ Example:
{...register("id",{
  validate : (value) => value > 100 || "This field value must be more than 100" 
})}

@ handleSubmit :
- This is give us the data of the form when we submit it
* How can we use handleSubmit?:
1- funciton onSubmit(data){
  (something we want to do to the data)
}
2- <Form onSubmit(handleSubmit(onSubmit))>
<Input id="id" {...register("id")} />
</Form>

@ reset :
- This will reset the form
* How can we use reset?:
- just pass it in whenever you need it like this : reset()

@ getValues :
- Realise that when we use the validate property of the register method we want to have access to the value of another input to check for the validation so how can we have access to that value?
++ Solution:
const {getValues} = useForm();
<Form>
<Input id="price" {...register("price")}/>
<Input id"discount" {...register("discount",{
  validate : (value) => getValues().price > value || "Discount must be less than price"
})} />
</Form>

@ formState :
- In case we have an error we can have access to the error with formState
++ Example:
const {formState} = useForm();
const {errors} = formState;

<Form>
<Input id"name" {...register("name",{
  required : "This field must have a value"
})}/>
{errors?.name?.message && <Error>{errors.name.message}</Error>}
</Form>



* How to have access to the children props in anothe component:
- Its good to know this trick in case we want to have access to the props of a children prop
@ The children component:
<ParentComponent>
<ChildrenComponent id={id} />
</ParentComponent>

@ The parent component:
function ParentComponent({children}){
  const variable = children.props.id
}

* Styled component:
- When we creating a style component for an html element like input we can even choose the attributes of the element like this:
++ const Input = styled.input.attrs({type : "text"})`
++ (the styles)`


*/

// ++ Warning: If you dont undrestand the code just copy it and paste it in a React component 
