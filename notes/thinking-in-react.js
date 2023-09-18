/*
In this lecture we want to learn how to think in react:

The thinking in react process:

1. Break the desired UI into components and establish the component tree

2. Build a static version in React (without state)

3. Think about state: 
  1. When to use state
  2. Types of state: local vs global
  3. where to place each piece of state

4. Establish data-flow:
  1. One-way data-flow
  2. Child-to-parent communication
  3. Accessing global state



State management:
  Deciding when to create pieces of state, what types of state are necessary, where to place each piece of state, and how data flows through the app



Local state:
  1. State needed only by one or few components
  2. State that is defined in a component and only that component and child components have access to it (by passing via props)


Global state:
  1. State that many components might need
  2. Shared state that is accessible to every component in the entire application

HINT: We should always start with local state


in React we have One-way-data-flow that means data can only flow from parent to children components

*/ 