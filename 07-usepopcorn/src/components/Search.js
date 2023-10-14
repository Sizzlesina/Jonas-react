/** @format */
import { useRef, useEffect } from "react";

export default function Search({ query, setQuery }) {
  // useEffect(function(){
  //   const el = document.querySelector(".search");
  //   console.log(el);
  //   el.focus();
  //   // in React we wont select an element manually becasue it can cause us so many problems and instead we use "useRef"
  // },[])

  const inputElement = useRef(null);

  useEffect(
    function () {
      function callback(e) {
        if (document.activeElement === inputElement.current) return;

        if (e.code === "Enter") {
          inputElement.current.focus();
          setQuery("");
        }
      }
      document.addEventListener("keydown", callback);
      return () => document.addEventListener("keydown", callback);
    },
    [setQuery]
  );

  return (
    <input
      className='search'
      type='text'
      placeholder='Search movies...'
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputElement}
    />
  );
}
