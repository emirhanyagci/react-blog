import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="flex justify-center">
      <Link to="/blogs">Go Blogs</Link>
    </div>
  );
}

export default Home;
