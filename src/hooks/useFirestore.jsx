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
      const postArr = blogsSnapshot.docs.map((post) => {
        return { payload: post.data(), id: post.id };
      });
      setPosts(postArr);

      return postArr;
    } catch (err) {
      throw new Error(err.messages);
    }
  };
  const deletePost = async (id) => {
    try {
      return await deleteDoc(doc(db, "blogs", id));
    } catch (err) {
      throw new Error(err);
    }
  };
  const deleteAllPost = async () => {
    try {
      const blogsSnapshot = await getDocs(collection(db, "blogs"));
      blogsSnapshot.docs.map(async (docs) => {
        return await deleteDoc(doc(db, "blogs", docs.id));
      });
    } catch (err) {
      throw new Error(err.messages);
    }
  };

  const sortPosts = (query) => {
    const newPosts = [...posts];

    newPosts.sort((a, b) => {
      return b.payload.title.includes(query) - a.payload.title.includes(query);
    });
    console.log(posts);
    console.log(newPosts);
    setPosts(newPosts);
  };

  useEffect(() => {
    console.log(123);
    try {
      onSnapshot(collection(db, "blogs"), (posts) => {
        let newPosts = [];
        posts.docs.map((post) => {
          newPosts.push({ payload: post.data(), id: post.id });
        });
        setPosts(newPosts);
      });
    } catch (err) {
      throw new Error(err.messages);
    }
  }, []);

  return { setPost, getPost, sortPosts, deletePost, deleteAllPost, posts };
}

export default useFirebase;
