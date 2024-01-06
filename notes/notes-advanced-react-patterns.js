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
- A prop that we will give to the component that we want to render in case to (idk check that later)

*/