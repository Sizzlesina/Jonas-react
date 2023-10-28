/*
* A solution to prop drilling:
@ - Task: Passing state into multiple deeply nested child components
++ Solution 1:
- Passing props
! Problem: Prop drilling
Remeber that a good solution to "prop drilling" is better component composition (See "Thinking in React" section)
++ Solution 2:
- Context API:
! Read state from everywhere

* What is the context API:
- System to pass data throughout the app without manually passing props down the tree
- Allow us to "broadcast" global state to the entire app
@ - Provider: gives all child components access to value

@ - Value: data that we want to make available (usually state and functions)

@ - Consumers: all components that read the provided context value

value is updated => all consumers re-render
! A new way of re-rendering components

*/