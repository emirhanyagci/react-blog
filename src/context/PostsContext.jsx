import PropTypes from "prop-types";

import { createContext, useContext } from "react";
import useFirestore from "../hooks/useFirestore";
const PostsContext = createContext([]);

export function PostsProvider({ children }) {
  const { setPost, getPost, deleteAllPost, posts, sortPosts } = useFirestore();
  return (
    <PostsContext.Provider
      value={{ getPost, setPost, sortPosts, deleteAllPost, posts }}
    >
      {children}
    </PostsContext.Provider>
  );
}

PostsProvider.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClickHandler: PropTypes.func,
};
export const usePostsContext = () => useContext(PostsContext);
