/** @format */

import { useState, useEffect } from "react";

// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

export default function App() {
  const [from, setFrom] = useState("EUR");
  const [to, setTo] = useState("USD");
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState("");
  const [isLoading, setIsLoading] = useState();

  useEffect(
    function () {
      const controller = new AbortController();

      async function fetchData() {
        setIsLoading(true);
        try {
          if (to === from) {
            return setConvertedAmount(amount);
          }
          const res = await fetch(
            `https://api.frankfurter.app/latest?amount=${amount}&from=${from}&to=${to}`,
            { signal: controller.signal }
          );
          const data = await res.json();
          setConvertedAmount(data.rates[to]);
        } catch (err) {
          if(err.name !== "AbortError")
          console.error(err.message);
        } finally {
          setIsLoading(false);
        }
      }
      fetchData();
      return function () {
        controller.abort();
      };
    },
    [amount, to, from]
  );
  return (
    <div>
      <input
        type='text'
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <select value={from} onChange={(e) => setFrom(e.target.value)}>
        <option value='USD'>USD</option>
        <option value='EUR'>EUR</option>
        <option value='CAD'>CAD</option>
        <option value='INR'>INR</option>
      </select>
      <select value={to} onChange={(e) => setTo(e.target.value)}>
        <option value='USD'>USD</option>
        <option value='EUR'>EUR</option>
        <option value='CAD'>CAD</option>
        <option value='INR'>INR</option>
      </select>
      {isLoading ? (
        <p>is loading</p>
      ) : (
        <p>
          {convertedAmount} {to}
        </p>
      )}
    </div>
  );
}
// Better commit 
