/** @format */
import {Link} from "react-router-dom";
import PageNav from "../components/PageNav";

function HomePage() {
  return (
    <div>
      <PageNav />
      <h1>WorldWise</h1>

      <Link to='/pricing'>Pricing</Link>
    </div>
  );
}

export default HomePage;
