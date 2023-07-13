import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="p-5 border-b-2 border-orange-400 flex justify-between">
      <Link to="" className="font-bold tracking-widest text-xl">
        {" "}
        🏠HOME
      </Link>
      <div className="flex items-center space-x-3">
        <div>x blog post founded</div>
        <input
          className="bg-transparent text-sm rounded-sm h-full px-2 border-orange-400 border-[1px]  outline-none "
          type="text"
          placeholder="Search posts..."
          name=""
          id=""
        />
        <button className="bg-orange-400 px-4 h-full rounded-md ">
          Clear Posts
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
