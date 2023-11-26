/*
* what is routing?
@ Routing:
- With routing, we match different URLs to diffrent UI views (React components): routes

- This enables users to navigate between different applications screens, using the browser URL

- Keeps the UI in sync with the current browser URL

- routing in React will be used with React router

- Allow us to build single-page applications

! HINT: Routing in React is client side

* single page applications (SPA):
@ - APplications that is executed entirely on the client (browsers)

@ - Routes: different URls correspond to different views (components)

@ - The page is never reloaded 

@ - Feels like a native app

@ - user clicked router link => URL is changed => DOM is updated : React component corresponding to the new URL is rendered


 * Creating react app:
1 - npm create vite@4
2 - npm install
3 - npm run dev
* Creating eslint file:
1 - npm install eslint vite-plugin-eslint eslint-config-react-app --save-dev

2 - create a eslintrc.json file

3 - write this piece of code => {"extends": "react-app" }

4 - in the vite.config.js : 

import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

export default defineConfig({
  plugins: [react(),eslint()],
});

* How to use the routers:
1- npm install react-router-dom
2-
import {BrowserRouter,Routes,Route} from 'react-router-dom';

 <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='product' element={<Product />} />
        <Route path='pricing' element={<Pricing />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );

* Styling options in React:
@ - Styling => React doesnt care about styling
1 - Inline CSS => Where? : JSX elements How? : style prop Scope: JSX element Based on: css
! Local

2 - CSS or Sass file => Where? : External file How? : className prop Scope: Entire app Based on: css
! Global,cause problems

3 - CSS Modules => Where? : One external file per component How? : className prop Scope: Component Based on: css

4 - CSS-in-JS => Where? : External file or component file How? : creates new component Scope: component Based on: JavaScript

5 - Utility-first-CSS (tailwind) => Where? : JSX elements How? : className prop Scope: JSX element Based on: css

6 - Alternative to styling with CSS : UI libraries like MUI,Chakra UI ,Mantine , etc.


! HINT: <Outlet /> will work exactly as same as the {child} prop but for routes


* How to setup a fake API:
1 - npm install json-server
2 - in the package.json file in the scripts write: "server" : "json-server --watch (data direcroty) --port 9000(or whatever) --delay 500(its for delaying the API fetch"
for example:
"server": "json-server --watch data/cities.json --port 9000 --delay 500"
3 - npm run server 


* The URL for state management:
@ - The URL is an excellent place to store UI state and an alternative to useState in some situations! 
Examples: open/closed panels, currently selected list item,list sorting order,applied list filters

++ Why we do that?
1 - Easy way to store in a global place,accssible to all components in the app
2 - Good way to "pass" data from one page into the next page
3 - Makes it possible to bookmark and share the page with the exact UI state it had at the time
 
* How we can do this using React Router?
@ tools:
www.example.com/app/cities/lisbon?lat=38.728&lng=-9.141
++ Path: app/cities
++ Params: lisbon
++ Query string: lat=38.728&lng=-9.141

* Lets look at this example in more detail:
@ - City name and GPS Location were retrieved from the URL instead of application state
++ lisbon => city name
++ lat=38.728&lng=-9.141 => GPS Location
*/