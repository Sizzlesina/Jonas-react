/** @format */
import { useContext } from "react";
import { PostContext } from "../App";

function SearchPosts() {
  const { setSearchQuery, searchQuery } = useContext(PostContext);
  return (
    <input
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder='Search posts...'
    />
  );
}
export default SearchPosts;
