import PropTypes from "prop-types"; // ES6
import { useContext, useEffect, useState } from "react";
import BlogContext from "../context/blogsContext";
import AddPost from "./AddPost";
import LoadingSpinner from "./LoadingSpinner";
import Card from "./Card";
function Blogs({ isFetched }) {
  const [isLoading, setIsLoading] = useState(true);
  const blogs = useContext(BlogContext);
  useEffect(() => {
    if (!isFetched) setIsLoading(false);
    return () => {};
  }, [blogs]);
  return (
    <div>
      <AddPost />
      <div className=" flex gap-5 flex-wrap items-start mt-10">
        {isLoading ? (
          <LoadingSpinner />
        ) : blogs.length === 0 ? (
          <p>NO ITEM</p>
        ) : (
          blogs.map((blog) => (
            <Card
              key={crypto.randomUUID()}
              title={blog.value.title}
              content={blog.value.content}
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
