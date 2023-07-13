import { useState } from "react";
import BlogContext from "../context/blogsContext";
import { getBlogs } from "../firebase/firebase";
import { Route, Routes } from "react-router-dom";
import Navbar from "../layouts/Navbar";
import Home from "./Home";
import Blogs from "./Blogs";
function App() {
  const [blogs, setBlogs] = useState([]);
  getBlogs().then((blogs) => {
    setBlogs(blogs);
  });
  return (
    <BlogContext.Provider value={blogs}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
      </Routes>
    </BlogContext.Provider>
  );
}

export default App;
