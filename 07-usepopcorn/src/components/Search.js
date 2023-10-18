/** @format */
import { useRef, useEffect } from "react";
import { useKey } from "../useKey";

export default function Search({ query, setQuery }) {
  // useEffect(function(){
  //   const el = document.querySelector(".search");
  //   console.log(el);
  //   el.focus();
  //   // in React we wont select an element manually becasue it can cause us so many problems and instead we use "useRef"
  // },[])

  const inputElement = useRef(null);

  useKey("Enter", function () {
    if (document.activeElement === inputElement.current) return;

    inputElement.current.focus();
    setQuery("");
  });

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

