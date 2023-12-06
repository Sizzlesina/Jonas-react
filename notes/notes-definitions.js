/*
* Closure: 
@ - A closure is when a function has access to variables (can read and change them) defined in its outer scope, even when the function is executed outside of the scope where it was defined. A closure is a function enclosing a refrence (variable) to its outer scope. Functions can access variables outside of their scope.


++ a simple example:

funciton outerFunction(){
  let outerFuncVar = "outside";
  function innerFunction(){
    console.log(`the value is: ${outerFuncVar});
  }
  return innerFunction();
}
outerFunction();
? Console output => the value is: outside

@ The outer function returns an inner function that "closes" over the outer function variable outerFuncVar. This is why it is called a closure. The outerFunction, which returns the innerFunction, can be called anywhere outside of its scope and the innerFunction will have access to, it can remember, the outerFuncVar. When it is called, it can read the value of this variable.


- After a function returns, its local variables may be marked for gerbage collection and removed from memory

* Garbage collection: 
- Is a type of automatic memory management used by JavaScript to free memory when an allocated block of memory, such as a variable and its value, is not needed anymore.


++ Another example:
function outerOuterFunction() {
  let outerOuterFuncVar = "outside outside";
  return function outerFunction() {
    let outerFuncVar = "outside";
    function innerFunction() {
      console.log(`The outerFunction value is: ${outerFuncVar}`);
      console.log(`The outerOuterFunction value is: ${outerOuterFuncVar}`);
    }
    return innerFunction;
  };
}

const outerFunct = outerOuterFunction();
const innerFunct = outerFunct();
innerFunct();

++ An example of closure and stale closure in React:
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setTimeout(() => {
      // Stale closure example
      console.log('Stale count:', count); // The count value won't be up-to-date
    }, 1000);

    // Closure example
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};

export default Counter;
@ In this example becasue of the setTimeOut callback function the "count" value will be the initial value and it wont change now to overcome this problem we can use the useEffect hook:

import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      // No stale closure issue
      console.log('Updated count:', count);
    }, 1000);

    return () => clearTimeout(timer);
  }, [count]);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};

export default Counter;


* Stale state:
- Stale state refers to a situation where a component's state value becomes outdated or stale due to asynchronous operations or delayed updates. It can occur when a value is captured in a closure or callback during the creation of an asynchronous operation, but the value changes before the operation completes.

++ For example:
import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setTimeout(() => {
      // Stale state example
      setCount(count + 1);  
    }, 2000);
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};

++ Now the update of the example above:
import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setTimeout(() => {
      setCount(prevCount => prevCount + 1); // Access previous count value
    }, 2000);
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};

export default Counter;

!HINT: Its better to use a callback function when you want to use the setMethods of the state to have access to the previous values of the state


* FormData:
@ This method is getting used for sending data to the API
- using append we can append a new value to the FormData
- FormData is a constructor function

*/