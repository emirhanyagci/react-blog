import { useContext, useEffect } from "react";
import BlogContext from "../context/blogsContext";
import Card from "./Card";
function Blogs() {
  const blogs = useContext(BlogContext);
  useEffect(() => {
    console.log(blogs);
    return () => {};
  }, [blogs]);
  return (
    <div className=" flex gap-5 flex-wrap items-start">
      <Card
        title="Primary Interface"
        content="blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla"
      />
    </div>
  );
}

export default Blogs;
