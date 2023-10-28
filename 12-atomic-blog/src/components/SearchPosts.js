/** @format */
import { usePosts } from "../components/PostContext";

function SearchPosts() {
  const { setSearchQuery, searchQuery } = usePosts();
  return (
    <input
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder='Search posts...'
    />
  );
}
export default SearchPosts;
