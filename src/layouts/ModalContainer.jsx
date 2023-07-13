import { Outlet } from "react-router-dom";
function BlogsContainer() {
  return (
    <div className="bg-red-500 mt-5 p-10">
      <Outlet />
    </div>
  );
}

export default BlogsContainer;
