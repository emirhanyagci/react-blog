import { Outlet } from "react-router-dom";
function BlogsContainer() {
  return (
    <div className="mt-5 p-10 flex justify-center">
      <div className="xl:w-2/3 lg:w-[85%] md:w-[95%] ">
        <Outlet />
      </div>
    </div>
  );
}

export default BlogsContainer;
