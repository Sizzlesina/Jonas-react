/*
* Where To Create Side Effects:
@ - Review;
A side effect is basically any "interaction between a React component and the world outside the component" . We can also think of a side as "code that actually does something". Examples: Data fetching, setting up subscriptions, setting up timers, manually accessing to the DOM , etc.

@ - We need side effects all the time. They make our application do something. NOT in render logic!

++ We can create side effects in two different places in React;
1 - Event handlers => functions that are triggered whenever that the event that they are listening to happens.
! Triggered by events (onClick,onSubmit,etc.)
++ Sometimes this is not enough for the application's needs

2 - Effects (useEffect) => Effects allow us to write code that will run at different moments: mount,re-render,or unmount.
! Triggered by rendering


* Event handlers VS. Effects:
@ When?

++ Event handlers : 
- Executed when the corresponding event happens
! Preffered way to creating side effects

++ Effects: 
- Executed after the component mounts (initial render) and after subsequent re-renders (according to dependency array).

- Used to keep a component synchronized with some external system (in this example, with the API movie data).

! These two will produce the same result,but at different moments.

*/