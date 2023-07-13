import { useState, useEffect } from "react";
import BlogContext from "../context/blogsContext";
import { getPost } from "../firebase/firebase";
import { Route, Routes } from "react-router-dom";
import Navbar from "../layouts/Navbar";
import ModalContainer from "../layouts/ModalContainer";
import Home from "./Home";
import Blogs from "./Blogs";
function App() {
  const [blogs, setBlogs] = useState([]);
  const [isFetched, setIsFetched] = useState(false);
  useEffect(() => {
    getPost().then((blogs) => {
      setIsFetched(true);
      setBlogs(blogs);
    });
  }, []);

  return (
    <BlogContext.Provider value={blogs}>
      <Navbar />
      <Routes>
        <Route element={<ModalContainer />}>
          <Route path="" element={<Home />}></Route>
          <Route path="blogs" element={<Blogs isFetched={isFetched} />}></Route>
        </Route>
      </Routes>
    </BlogContext.Provider>
  );
}

export default App;
