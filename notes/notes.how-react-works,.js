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



* Commit phase:

@ - React writes to the DOM: insertions,deletions,and updates (list of DOM updates are "flushed" to the DOM)

@ - Commiting is synchronous: DOM is updated in one go, it cant be interupted. This is necessary so that the DOM never shows partial results m ensuring a consistent UI (in sync with state at all times).

@ - After the commit phase completes, the workInProgress fiber tree becomes the current tree for the next render cycle

! HINT: React will never touch the DOM! React only renders. it will doesnt know where the render result will go

! HINT: React can be used on diffrent platforms("hosts")

! HINT: sometimes we update the DOM using renderers which is a terrible name because renderes do not render,they commit the result of render phase

* Recap => puttin it all together:
so the whole process of rendering and displaying a React application on the screen starts with a trigger which can either be the initial render of the app or a state update in one of the component instances this then triggers the render phase which does not produce any visual output so this phase starts by rendering all component instances that need a re-render and rendering in React simply means to call the components functions this will create one or more updated React elements which will be placed in a new virtual DOM,which is actually simply a tree of React elements. Now whats really important to remember about this process is that rendering a component will cause all of its child components to be rendered as well,no matter if props changer or not.This is becasue React doesnt know whether children have been affected by the parent re-rendering or not. Now next up this new virtual DOM needs to be reconciled with the current fiber tree.So with the representation of the element tree before the state update,this is necessary because it would be slow and inefficient to destroy and rebuild the entire DOM tree each time that something on the screen must be updated. Instead reconciliation tries to reuse as much of the DOM as possible by finding the smallest number of DOM updates that reflect the latest state update on the screen.Now this reconciliation process is done using a reconciler called fiber,which works with a mutable data structure called fiber tree and in this tree for each React element and DOM element,there is a fiber and this fiber holds the actual component state props and a queue of work. After reconciliation this queue of work will contain the DOM updates that are needed for that element.Now the computation of these updates is performed by a diffing algorihtm,which step by step compares the elements in the new virtual DOM with the elements in the current fiber tree t see what had changed. So the final result of the render phase. So basically of this reconciliation and diffing process is a second updated fiber tree as well as a list of necessary DOM updates.Now its important to note that the render phase is asynchronous,so fiber can prioritize and split work into chunks and pause and resume some work later and this is necessary for concurrent features and also to prevent the JavaScript engine to be blocked by complex render processes. But anyway the output of the render phase(the list of DOM updates) will finally actually be written to the DOM in the commit phase so in this phase, a so-called renderer like React DOM will insert,delete and update DOM elements so that we end up with an updated DOM that reflects the new state of the application and unlike the render phase,the commit phase is actually synchronous so all the DOM updates are performed in one go in order to ensure a consistent UI over time . Now finally once the brower realises that the DOM has been updated, it starts a new browser paint in order to visually update the user interface on the screen 


* How diffing works?
@ diffing uses 2 fundemental assumptions(rules):
1. Two elements of different types will produce different trees
2- Elements with a stable key prop stay the same across renders  


* Key prop:
@ - special prop which we can use to tell the diffing algorithm that an element is unique

@ - Allows React to distinguish between multiple instances of the same component type

@ - when a key stays the same across renders,the element will be kept in the DOM (even if the position in the tree changes)
* Using keys in lists

@ - When a key changes between renders,the element will be destroyed and a new one will be created (even if the position in the tree is the same as before)
* Using keys to reset state


* Using keys in lists:
@ -  when we dont use the keys then when we want to add a new element to the list (or items) the position of the last elements wil be changed so as the diffing rules React will remove and recreate them in the DOM so this is a waste of time but when we use key props they will have diffrent position in the tree but the key stays the same,so the element will be kept in the DOM and its better for UI performace
  

* Using key props to reset state (changing key):
@ - If we have the same element at the same position in the tree the DOM element and state will be kept

@ - Look at this example:

<QuestionBox>
<Question question{{
  title: "React VS JS",
  body: "Why should we use React?:"
}}
key = "q23" />
</QuestionBox>
 
Question state(answer): "React allows us to build apps faster"

@ Now when we want to update the title and body the question state will get reset because of the key (keys are different in each component):

<QuestionBox>
<Question question={{
  title "Best course ever :D",
  body: "This is the React course!"
}}
key="q89"
 />
</QuestionBox>

!HINT: This is just different question but they are at the same position

* The two type of logic in React components:
@ 1- Render logic:
- 👉 Code that lives at the top level of the component function
- 👉 Participartes in describing how the component view looks like
- 👉 Executed every time the component renders

@ 2- Event handler functions:
- 👉 Executed as a consequence of the event that the handler is listening for (change the event in this example)
- 👉 Code that actually does things: Update the state , perform an HTTP request,read an input field, navigate to another page,etc.


* Refresher => Functional programming principles:
@ Side effect:
- dependency on or modification of any data outside the function scope. "Interaction with the outside world". Examples: mutating external variables, HTTP requests, writing to DOM.

@ Pure function: 
- a function that has no side effect
? 👉 Does not change any variables outside its scope
? 👉 Given the same input, a pure function always return the same output
  

* Rules for render logic:
@ - component must be pure when it comes to render logic:
 given the same props(input),a component instance should always return the same JSX (output)
 @ - Render logic must produce no side effects:
++  no interaction with the "outside world" is allowed, so in render logic:
    👉 Do not perform network request (API calls)
    👉 Do not start timers
    👉 Do not directly use the DOM API
    👉 Do not mutate objects or variables outside of the function scope (this is why we cant mutate props!)
    👉 Do not update state (or refs): this will create an infinite loop!
    
! Side effects are allowed (and encouraged) in event handler functions! There is also a special hook to register side effects (useEffect)



* How state updates are batched?
@ - Renders are not triggered immediately, but scheduled for when the JS engine has some "free time".There is also batching of multiple setState calls in event handlers


! HINT: Updating in React is asynchronous

@ - Update state variables are not immediately available after setState call,but only after the re-render
@ - This also applies when only one state variable is updated 
@ - If we need to update state based on previous update,we use setState with callback (setAnswer (answer => ... ))


* Batching beyond event handler functions:
@ - React 17: only automatic batching in event handlers
@ - React 18: automatic batching in event handlers , timeouts , promises and native events

! HINT: We can opt out of automatic batching by wrapping a state update in ReactDOM.flushSync() (But we will never need this)

* DOM Refresher => Event propagation and declaration:
@ - Capturing phase
@ - Target element
@ - Bubbling phase

! HINT: By default event handlers listen to events on the target and during the bubbling phase 

! HINT: We can prevent bubbling with e.stopPropagation()

* Event delegation:

@ - Handling events for multiple elements centrally in one single parent element

@ - Better for performance and memory,as it needs only one handler function

@ - Add handler to parent (.options) 

@ - Check for target element (e.target) 

@ - If target is one of the <button>'s handle the event

 ? React registers all event handlers on the root DOM container. This is where all events are handled
! HINT: Behind the scenes,React performs event delegation for all events in our application 

* Synthetic events:

- 👉 wrapper around the DOM's native event object.

- 👉 Has some interface as native event objects,like stopPropagation() and preventDefault().

- 👉 Fixes browser inconsistencies,so that events work in the exact same way in all browsers.

- 👉 Most synthetic events bubble (including focus,blur,and change),except for scroll

* Event handlers in React VS. JS:
👉 Attributes for event handlers are named using camelCase (onClick insted of onclick or click)

👉 Default behavior can not be prevented by returning false (only by using preventDefault())

👉 Attach "capture" if you need to handle during capture phase (example: onClickCapture )



* Libararies VS. Framework & The React ecosystem:

@ - Framework (All in one kit): Everything you need to build a complete application is included in the framework ("batteries included")

! - NO CHOICE! your're stuck with the framework's tools and conventions (which is not always bad!).

@ - Library (Seperate ingredients): You can (or n eed to) choose multiple 3rd-party libraries to build a complete application

! Decision fatigue! You need to research,download,learn, and stay up-to-date with multiple external libraries.
 


* Section summary practical takeaways:

@ - A component is like a blueprint piece of UI that will eventually exist on the screen. When we "use" a component,React creates a component instance,which is like an actual physical manifestation of a component, containing props,state and more . A component instance,when rendered,will return a React element

@ - "Rendering" only means calling component functions and calculating what DOM elements need to be inserted , deleted , or updated. It has nothing to do with writing to the DOM.Therefore,each time a component instance is rendered and re-rendered , the function is called again.

@ - Only the initial app render and state updates can cause a render,which happens for the entire application,not just one single component

@ - When a component instance gets re-rendered, all its children will get re-rendered as well.This doesn't mean that all children will get updated in the DOM.thanks to reconciliation,which checks which elements have actually changed between two renders, But all this re-rendering can still have an impact on performance (more on that later in the course)

@ - Diffing is how React decides which DOM elements need to be added or modified. If between renders, a certain React element stays at the same position in the element tree,the corresponding DOM element and component state will stay the same.If the element changed to a different position, or if its a different element type,the DOM element and state will be destroyed

@ - Giving elements a  key prop allows React to distinguish between multiple component instances. When a key stays the same across renders,the element is kept in the DOM.This is why we need to use keys in lists.When we change the key between renders,the DOM element will be destroyed and rebuilt.We use this as a trick to reset state.

@ - Never declare a new component inside anothe component! Doing so will re-create the nested component every time the parent component re-renders.React will always see the nested component as new,and therefore reset its state each time the parent state is updated

@ - The logic that produces JSX output for a component instance ("render logic") is not allowed to produce any side effects: no API calls, no timers, no object or variable mutations, no state updates. Side effects are allowed in event handlers and useEffect (next section👉)

@ - The DOM is updated in the commit phase,but not by React, but by a "renderer" called ReactDOM. That's why we always need to include both libraries in a React web app project.We can use other renderers to use React on different platforms,for example to build mobile or native apps 

@ - Multiple state updates inside an event handler function are batched,so they happen all at once causing only one re-render.This means we can not access a state variable immediately after updating it: state updates are asynchronous.Since React 18 , batching also happens in timeouts,promises and native event handlers.

@ - When we using events in event handlers, we get access to a synthetic event object, not the browser's native object, so that event work the same way across all browsers. The difference is that most synthetic events bubble, including focus , blur, and change, which do not bubble as native browser events. Only the scroll event does not bubble.

@ - React is library and not a framework.This means that you can assemble your application using your favorite third-party libraries. The downside is that you need to find and learn all these additional libraries. No problem , as you will learn about the most commonly used libraries in this course.

 */


// Notes file