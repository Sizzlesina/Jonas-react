/** @format */
import {useEffect} from 'react';

export default function Search({query,setQuery}) {


  useEffect(function(){
    const el = document.querySelector(".search");
    console.log(el);
    el.focus();
    // in React we wont select an element manually becasue it can cause us so many problems and instead we use "useRef"
  },[])

  return (
    <input
      className='search'
      type='text'
      placeholder='Search movies...'
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}
