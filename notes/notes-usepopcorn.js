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

++ DONT afraid to use a long component name its regular in React development



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



! Component composition:

? take a look at this example here:

  function Modal(){
    return (
      <div className="modal">
      <Success />
      </div>
    )
  }
  function Success(){
    return <p>Well done!</p>
  }

 
? now we use the Success inside the Modal component and we simply connect all the JSX together so in this way we cannot reuse the component and we want a reusable component so we do this:


funciton Modal({children}){
  return (
    <div className="modal>
    {children}
    </div>
  )
}
function Success(){
  return <p>Well done!</p>
}

? now when we use the Modal component we simply do this:

<Modal>
<Success />
</Modal>


! Props as an API:
  * any component is alwasys create by someone and always consumed by someone.

  * the creator will creates the component and define what props the component can accept while the consumer uses the component somewhere in the application by specifying values for the props.

 ? if we havve this mindeset(creator and consumer) we can think of the component props as the public API of the component


* as the creator when we choose what props the consumer is allowed to pass in, we are essentially defining the public interface of our component and at the same time we are choosing how much complexity of the component we want to expose to the consumer of the API because in the end a component is basically just an abstraction so we are encapsulating a part of the UI and the associated logic into a component and allow consumers to interact with that component via props
 

! when we decide about what props to allow in a component we need to find a good balance how strict we want it to be SO about how many props we want to enable for configuration 

? for example lets say were building a weather component so a component that simply displays the weathe we could make it extremely simple for example onyl allowing one prop for the location for which the consumer wants the weather so it might be perfectly fine but it might also make the component not flexible enough or maybe even straight out useless for the consumer

++ on the other hand we could allow props for the URL of the weather data,the number of days , whether it should be daily or hourly,how many days , which temprature unit, what data should be displayed and so on ( we can have too much props) 

@ the conclusion of the saying is that we need to find the right balance between too little and too many props,that works for both the consumer and the creator 




? Prop types:
@ with prop types we can basically specify the type of value that we expect the consumer of the component to pass in for each of the props
*/ 