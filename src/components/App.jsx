import PostProvider from "../context/blogsContext";
import { Route, Routes } from "react-router-dom";
import Navbar from "../layouts/Navbar";
import ModalContainer from "../layouts/ModalContainer";
import Home from "./Home";
import Blogs from "./Blogs";

function App() {
  return (
    <PostProvider>
      <Navbar />
      <Routes>
        <Route element={<ModalContainer />}>
          <Route path="" element={<Home />}></Route>
          <Route path="blogs" element={<Blogs />}></Route>
        </Route>
      </Routes>
    </PostProvider>
  );
}

export default App;
