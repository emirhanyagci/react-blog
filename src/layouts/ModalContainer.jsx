import { Outlet } from "react-router-dom";
function BlogsContainer() {
  return (
    <div className="mt-5 p-10">
      <Outlet />
    </div>
  );
}

export default BlogsContainer;
