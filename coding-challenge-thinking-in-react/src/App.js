/** @format */

import { useState } from "react";

export default function App() {
  return <TipCalculator />;
}

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip = bill * ((percentage1 + percentage2) / 2 / 100);

  function handleReset() {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  }
  return (
    <div>
      <BillInput bill={bill} setBill={setBill} />
      <SelectInput pecentage={percentage1} onSelect={setPercentage1}>
        How do you like the service?
      </SelectInput>
      <SelectInput percentage={percentage2} onSelect={setPercentage2}>
        How do your friend like the service?
      </SelectInput>
      <Output tip={tip} bill={bill} />
      <Reset onReset={handleReset}/>
    </div>
  );
}

function BillInput({ bill, setBill }) {
  return (
    <form>
      <label>How much was the bill?</label>
      <input
        type='text'
        placeholder='Bill...'
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
    </form>
  );
}

function SelectInput({ children, percentage, onSelect }) {
  return (
    <div>
      <label>{children}</label>
      <select value={percentage} onChange={(e) => onSelect(Number(e.target.value))}>
        <option value='0'>Dissatisfied (0%)</option>
        <option value='5'>It was okay (5%)</option>
        <option value='10'>It was good (10%)</option>
        <option value='20'>Absolutely amazing (20%)</option>
      </select>
    </div>
  );
}

function Output({ bill, tip }) {
  return (
    <h2>
      You pay ${bill + tip} (${bill} + ${tip} tip)
    </h2>
  );
}

function Reset({onReset}) {
  return <button onClick={onReset}>Reset</button>;
}
// Exercise