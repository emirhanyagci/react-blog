import { Link } from "react-router-dom";
import Button from "../components/Button";
import { usePosts } from "../context/blogsContext";
function Navbar() {
  const { deleteAllPost } = usePosts();
  return (
    <nav className="p-5 border-b-2 border-orange-400 flex justify-between">
      <Link to="" className="font-bold tracking-widest text-xl">
        {" "}
        🏠HOME
      </Link>
      <div className="flex items-center space-x-5">
        <div>0 blog post founded</div>
        <input
          className="bg-transparent text-sm rounded-sm h-full px-2 py-3 border-orange-400 border-[1px]  outline-none "
          type="text"
          placeholder="Search posts..."
          name=""
          id=""
        />
        <Button
          onClickHandler={deleteAllPost}
          className="bg-orange-400 px-4 h-full rounded-md hover:bg-orange-500 "
        >
          Clear Posts
        </Button>
      </div>
    </nav>
  );
}

export default Navbar;
