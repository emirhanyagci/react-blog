import PropTypes from "prop-types"; // ES6
import { useEffect, useState } from "react";
import { usePostsContext } from "../context/PostsContext";
import AddPost from "./AddPost";
import LoadingSpinner from "./LoadingSpinner";
import Card from "./Card";
function Blogs() {
  const [isLoading, setIsLoading] = useState(true);
  const { getPost, posts } = usePostsContext();
  useEffect(() => {
    getPost().then(() => {
      setIsLoading(false);
    });
  }, []);
  return (
    <div>
      <AddPost />
      <div className=" flex gap-5 flex-wrap items-start mt-10">
        {isLoading ? (
          <LoadingSpinner />
        ) : posts.length == 0 ? (
          <div className="text-2xl w-full text-center"> NO ITEM FOUND 🙁</div>
        ) : (
          posts.map((postData) => (
            <Card
              key={crypto.randomUUID()}
              title={postData.title}
              content={postData.content}
            />
          ))
        )}
      </div>
    </div>
  );
}
Blogs.propTypes = {
  isFetched: PropTypes.bool,
};
export default Blogs;
