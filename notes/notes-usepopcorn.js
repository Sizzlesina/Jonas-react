/*

! Component size MATTERS:
the component shouldn't be so HUGE or so SMALL it should be in an average size


? the propeties that a application should have are:
  1.it's components should have logical seperation (of the content or of the layouts)
  2. Some components must be reusable
  3. and the components should have low complexity
  4. its components should have a well defined responisibility




! The 4 criteria for splitting a UI into components:
  1. Logical seperation of content/layout
  2. Reusability
  3. Responsibilities / complexity
  4. Personal coding style





! HINT: 
* be aware that creating a new component will creates a new abstraction. Abstraction have a cost, because more abstractions require more mental energy to switch back and forth between components. So try not to create new components too early. 

todo => DONT afraid to use a long component name its regular in React development



! Component categories:
  ?  👉 Most of your components will naturally fall into one of three categories: 
                             
1. Stateless / presentational components:
  👉 No state
  👉 can receive props and simply present received data or other content
 👉 Usually smalll and reusable

2. Stateful components :
  👉 Have state
  👉 can still be reusable

3. Structural components:
  👉 "Pages", "layouts", or "screens" of the app
  👉 Result of composition
  👉 Can be huge and non-reusable (but dont have to)


*/