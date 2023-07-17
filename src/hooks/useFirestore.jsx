import { useState, useEffect } from "react";
import { db } from "../firebase/firestore";
import {
  doc,
  onSnapshot,
  addDoc,
  getDocs,
  deleteDoc,
  collection,
} from "firebase/firestore";

function useFirebase() {
  const [posts, setPosts] = useState([]);
  const setPost = async (title, content) => {
    try {
      const docRef = await addDoc(collection(db, "blogs"), {
        title,
        content,
      });

      return docRef;
    } catch (err) {
      throw new Error(err.messages);
    }
  };
  const getPost = async () => {
    try {
      const blogsSnapshot = await getDocs(collection(db, "blogs"));
      const postArr = blogsSnapshot.docs.map((doc) => {
        return { value: doc.data(), id: doc.id };
      });
      setPosts(postArr);
      return postArr;
    } catch (err) {
      throw new Error(err.messages);
    }
  };

  const deleteAllPost = async () => {
    try {
      const blogsSnapshot = await getDocs(collection(db, "blogs"));
      blogsSnapshot.docs.map(async (docs) => {
        console.log(doc.id);
        return await deleteDoc(doc(db, "blogs", docs.id));
      });
    } catch (err) {
      throw new Error(err.messages);
    }
  };
  useEffect(() => {
    try {
      onSnapshot(collection(db, "blogs"), (posts) => {
        let newPosts = [];
        posts.docs.map((post) => {
          newPosts.push(post.data());
        });
        setPosts(newPosts);
      });
    } catch (err) {
      throw new Error(err.messages);
    }
  }, []);
  return { setPost, getPost, deleteAllPost, posts };
}

export default useFirebase;
