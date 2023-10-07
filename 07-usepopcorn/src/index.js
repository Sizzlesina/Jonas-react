/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import AppV2 from "./components/AppV2";
import "./index.css";
// import StarRating from "./components/StarRating";


// function Test() {
//   const [movieRating, setMovieRating] = useState(0);

//   return (
//     <div>
//       <StarRating color='blue' maxRating={10} onSetRating={setMovieRating} />
//       <p>This movie was rated {movieRating} stars</p>
//     </div>
//   );
// }
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppV2/>
  </React.StrictMode>
);
/* <StarRating maxRating={5} />
  <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
      />
      <StarRating
      size={24} color="red" className="test" defaultRating={3}
      />
    <Test /> */
