import { useState } from "react";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../firebase/firebaseConfig";

import {
  doc,
  onSnapshot,
  getFirestore,
  addDoc,
  getDocs,
  deleteDoc,
  collection,
} from "firebase/firestore";
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

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
      throw new Error(err);
    }
  };
  const getPost = async () => {
    const blogsSnapshot = await getDocs(collection(db, "blogs"));
    const postArr = blogsSnapshot.docs.map((doc) => {
      return { value: doc.data(), id: doc.id };
    });
    console.log(postArr);
    setPost(postArr);
    console.log(1);
    return postArr;
  };

  const deleteAllPost = async () => {
    const blogsSnapshot = await getDocs(collection(db, "blogs"));
    blogsSnapshot.docs.map(async (docs) => {
      console.log(doc.id);
      return await deleteDoc(doc(db, "blogs", docs.id));
    });
  };
  onSnapshot(collection(db, "blogs"), (posts) => {
    let newPosts = [];
    posts.docs.map((post) => {
      newPosts.push(post.data());
    });
    setPosts(newPosts);
  });

  return { getPost, setPost, deleteAllPost, posts };
}

export default useFirebase;
