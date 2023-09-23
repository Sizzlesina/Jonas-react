/** @format */

import  NumResults  from "./NumResults";
import  Logo  from "./Logo";
import  Search  from "./Search";

export default function Navbar() {
  return (
    <nav className='nav-bar'>
      <Logo />
      <Search />
      <NumResults />
    </nav>
  );
}
