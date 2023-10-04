/*
Handling evnets in React:

we can handle the events on a onClick attribute on the element in the React codes 


onClick, onMouseEnter, onMouseLeave

onMouseEnter => when the mouse enters the element (Something like the hover)


we wont use the event handlers inside the element attribute and instead we will create a function for that



All the tips needed for state:

1. Data that a component can hold over time, necessary for information that it needs to remember throughout the app's lifecycle

2. "Component's memory"

3. "State variable / Piece of state": A single 
variable in a component (components state)

4. Component state: single local component variable ("Piece of state" , "state variable")

5. Updating component state triggers React to re-render the component


IN SUMMARY:
state allows us to do 2 important things:
1. Update the component's view (by re-rendering it)
2. Perisit local variables between renders



HINT: In React we cant write the hooks inside the if/else statements and component functions and inisde JSX: 

1.
function App(){
  if(true){
    const [step,setStep] = useState(1);
  }
}
---------------------------------------------------------
2.
function App(){
  function handleNext(){
    const [step,setStep] = useState(1);
  } 
}
---------------------------------------------------------
3.
function App(){
  return (
    const [step,setStep] = useState(1);
    <div>Hello world!</div>
  )
}


WARNING: Never update a value like this:

function App(){
  const [test] = useState({name : "jonas"})


  function handleNext(){
    test.name = "Fred"; *
  }


  return(
    <button onClick{handleNext} className="btn">Next</button>
  )
}


Instead do this:
function App(){
  const [test,setTest] = useState({name: "Jonas"})

  funciton handleNext(){
    setTest({name : "Fred"}) *
  }

  return (
    <button onClick={handleNext} className="btn">Next</button>
  )
}



*/