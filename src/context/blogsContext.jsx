import PropTypes from "prop-types";

import { createContext, useState, useContext, useEffect } from "react";
import {
  doc,
  onSnapshot,
  getFirestore,
  addDoc,
  getDocs,
  deleteDoc,
  collection,
} from "firebase/firestore";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../firebase/firebaseConfig";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const BlogContext = createContext([]);

export default function PostProvider({ children }) {
  const [posts, setPosts] = useState("asd");
  const setPost = async (title, content) => {
    try {
      const docRef = await addDoc(collection(db, "blogs"), {
        title,
        content,
      });

      return docRef;
    } catch (err) {
      throw new Error(err);
    }
  };
  const getPost = async () => {
    const blogsSnapshot = await getDocs(collection(db, "blogs"));
    const postArr = blogsSnapshot.docs.map((doc) => {
      return { value: doc.data(), id: doc.id };
    });
    setPosts(postArr);
    return postArr;
  };

  const deleteAllPost = async () => {
    const blogsSnapshot = await getDocs(collection(db, "blogs"));
    blogsSnapshot.docs.map(async (docs) => {
      console.log(doc.id);
      return await deleteDoc(doc(db, "blogs", docs.id));
    });
  };
  useEffect(() => {
    onSnapshot(collection(db, "blogs"), (posts) => {
      let newPosts = [];
      posts.docs.map((post) => {
        newPosts.push(post.data());
      });
      setPosts(newPosts);
    });
  }, []);

  return (
    <BlogContext.Provider value={{ getPost, setPost, deleteAllPost, posts }}>
      {children}
    </BlogContext.Provider>
  );
}

PostProvider.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClickHandler: PropTypes.func,
};
function usePosts() {
  const context = useContext(BlogContext);
  return context;
}
export { PostProvider, usePosts };
