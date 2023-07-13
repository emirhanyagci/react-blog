import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, getDocs, collection } from "firebase/firestore";
import firebaseConfig from "./firebaseConfig";
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const setBlog = async (title, content) => {
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
export const getBlogs = async () => {
  const blogsSnapshot = await getDocs(collection(db, "blogs"));
  const blogs = blogsSnapshot.docs.map((doc) => {
    return doc.data();
  });
  return blogs;
};
export default db;
