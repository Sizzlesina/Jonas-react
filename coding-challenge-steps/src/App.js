/** @format */

import { useState } from "react";

export default function App() {
  return (
    <div className='App'>
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);
  const date = new Date("september 11 2023");
  date.setDate(date.getDate() + count);

  function stepDecrease() {
    setStep((s) => s - 1);
  }
  function stepIncrease() {
    setStep((s) => s + 1);
  }
  function countDecrease() {
    setCount((c) => c - step);
  }
  function countIncrease() {
    setCount((c) => c + step);
  }

  return (
    <div>
      <div className='steps'>
        <button onClick={stepDecrease}>-</button>
        <span>Step: {step}</span>
        <button onClick={stepIncrease}>+</button>
      </div>
      <div>
        <button onClick={countDecrease}>-</button>
        <span>Count: {count}</span>
        <button onClick={countIncrease}>+</button>
      </div>

      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
}
