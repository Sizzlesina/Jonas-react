/** @format */

import  SearchPosts  from "./SearchPosts";
import  Results  from "./Results";

 function Header({ posts, onClearPosts, searchQuery, setSearchQuery }) {
  return (
    <header>
      <h1>
        <span>⚛️</span>The Atomic Blog
      </h1>
      <div>
        <Results posts={posts} />
        <SearchPosts
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery} 
        />
        <button onClick={onClearPosts}>Clear posts</button>
      </div>
    </header>
  );
}
export default Header;
