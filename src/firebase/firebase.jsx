import { initializeApp } from "firebase/app";
import {
  doc,
  getFirestore,
  addDoc,
  getDocs,
  deleteDoc,
  collection,
} from "firebase/firestore";
import firebaseConfig from "./firebaseConfig";
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const setPost = async (title, content) => {
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
export const getPost = async () => {
  const blogsSnapshot = await getDocs(collection(db, "blogs"));
  const blogs = blogsSnapshot.docs.map((doc) => {
    return { value: doc.data(), id: doc.id };
  });

  return blogs;
};

export const deleteAllPost = async () => {
  const blogsSnapshot = await getDocs(collection(db, "blogs"));
  blogsSnapshot.docs.map(async (docs) => {
    console.log(doc.id);
    return await deleteDoc(doc(db, "blogs", docs.id));
  });
};

export default db;
