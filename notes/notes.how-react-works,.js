/*
@ we want to review the code that a developer was written before us and learn how to analyze the code that another person writes

* Component VS. Instance VS. Element:

++ 1. Description of a piece of UI

++ 2. A component is a funciton that returns React elements (element tree), usually written as JSX 
----------------------------------------------------
* Component instance:

! 1. Instances are created when we "use" components

! 2. React internally calls the Tab() => in the project take a look at the Tab component

! 3. Actual "physical" manifestation of a component

! 4. Has its own state and props

! 5. Has a lifecycle (can be born,live and die) 
-----------------------------------------------------
* React element:

? 1. JSX is converted to React.createElement() function calls

? 2. A React element is the result of these function calls  

? 3. Information necessary to create DOM elements
-----------------------------------------------------
* DOM element(HTML):
@ actual visual representation of the component instance in the browser 
 
-----------------------------------------------------
@ when we implement a component we should use it somewhere for example we will create a component like Tab() and then use it too many times in another component which will be called component instance and then the component instance will be return some React elements which has some properties then the React element will be inserted to DOM 

----------------------------------------------------
* when we call a component as a function React will no longer see it as a component and it wont show up in the component tree and just the content inside of that will be rendered 
-----------------------------------------------------
 ? _How Rendering Works Overview_

 * Quick recap before we get started:

    ++ In react as we creating our application what we're really doing is building a bunch of components

    @ we then use these components inside other components as many times as we want which will cause react to create one or more component instances of each component so these are basically the actual physical components that live in our application and hold state and props   

    @ Now as React calls each component instance each JSX will produce a bunch of React.createELement function calls in turn will produce a React element for each component instance

    @ And so this React element will ultimately be transformed to DOM elements and displayed as a user interface 


    ! Now we want to talk about how the React elements actually end up in the DOM and displayed on the screen?

* How components are displayed on the screen:

++ By updating state somewhere => Render is triggered

!THEN

++ React calls component functions and figures out how DOM should be updated => Render phase

!THEN

++ React actually writes to the DOM, updating,inserting, and deleting elements => Commit phase

!THEN

++ The browser will notice that the DOM has been updated and so it repaints the screen => Browser paint

? HINT: common sense meaning of the word "render"


* HINT: In React, rendering is NOT updating the DOM or displaying elements on the screen. Rendering only happens internally inside React, it does not produce visual changes.

 

! Render triggering:
 the two situations that trigger renders:

* Initial render of the application:
  the first time the application runs

* State is updated in one or more component instance (re-render):
  state update is happening in one or more component instances somewhere in the application

++ HINT: The render process is triggered for the entire application
 
++ HINT: In practice, it looks like React only re-render the component where the state update happens but that's not how it works behind the scenes

++ HINT: Renders are not triggered immediately, but scheduled for when the JS engine has some "free time".There is also batching of multiple setState calls in event handlers


* The render phase:
! Component instance that triggered re-render => Re  act elements => New Virtual DOM 



* Virtual DOM:

@ 1. Tree of all React elements created from all instances in the component tree

@ 2. Cheap and fast to create multiple trees

@ 3. Nothing to do with "shadow DOM"

++  HINT: Rendering a component will cause all its child components to be rendered as well (no matter if props changed or not)

++ HINT: Necessary because React doesnt know wherther children will be affected  
----------------------------------------------------
* What is Reconciliation and why do we need it?
! question:
  why not update the entire DOM whenever state changes somewhere in the app?

++ that would be inefficient and wasteful:

  @ 1. Writing to the DOM is (relatively) slow

  @ 2. Usually only a small part of the DOM needs to be updated

++ React reuses as much of the existing DOM as possible

! HOW?

@ Answer:
*  Reconciliation: Deciding which DOM elements actually need to be inserted, deleted or updated in order to reflect the latest state changes


the current reconciler in React is called Fiber;
 @ Fiber will take the entire element tree and based on it builds yet another tree,which is the fiber tree 
! The fiber tree: 
@ internal tree that has a "fiber" for each component
! Fibers are NOT re-created on every render 
! Work can be done asynchronously:
- Rendering process can be split into chunks,tasks can be prioritized and work can be paused,reused or thrown away
- Enables concurrent features like suspense or transitions 
- Long renders wont block JS engine 


* Reconciliation in action:
-some descriptions about the reconciliation in action(you can check the video later)


*/