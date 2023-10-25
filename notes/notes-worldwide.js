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

*/