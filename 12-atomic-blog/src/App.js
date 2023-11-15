/** @format */

import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Archive from "./components/Archive";
import Main from "./components/Main";
import { PostProvider } from "./PostContext";
// 1) Create a new context

function App() {
  /* const x = usePosts();
   console.log(x) // the value will be undefined
*/

  // Whenever `isFakeDark` changes, we toggle the `fake-dark-mode` class on the HTML element (see in "Elements" dev tool).
  const [isFakeDark, setIsFakeDark] = useState(false);

  useEffect(
    function () {
      document.documentElement.classList.toggle("fake-dark-mode");
    },
    [isFakeDark]
  );

  return (
    <section>
      <button
        onClick={() => setIsFakeDark((isFakeDark) => !isFakeDark)}
        className='btn-fake-dark-mode'>
        {isFakeDark ? "☀️" : "🌙"}
      </button>

      {/* // 2) Provide value to the child components */}
      <PostProvider>
        <Header />
        <Main />
        <Archive />
        <Footer />
      </PostProvider>
    </section>
  );
}

export default App;
