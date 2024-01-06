/** @format */

import { createContext, useContext, useState } from "react";
// 1- Create a context
const CounterContext = createContext();

// 2- Create the parent component
function Counter({ children }) {
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount((c) => c + 1);
  };
  const decrease = () => {
    setCount((c) => c - 1);
  };

  return (
    <CounterContext.Provider value={{ count, increase, decrease }}>
      <span>{children}</span>
    </CounterContext.Provider>
  );
}
// 3- Create a child component to help implementing the common task
function Count() {
  const { count } = useContext(CounterContext);
  return <span>{count}</span>;
}
function Label({ children }) {
  return <span>{children}</span>;
}
function Increase({ icon }) {
  const { increase } = useContext(CounterContext);
  return <button onClick={increase}>{icon}</button>;
}
function Decrease({ icon }) {
  const { decrease } = useContext(CounterContext);
  return <button onClick={decrease}>{icon}</button>;
}

// 4- Add the child components as properties to parent component (optional)
Counter.Count = Count;
Counter.Label = Label;
Counter.Increase = Increase;
Counter.Decrease = Decrease;

export default Counter;
