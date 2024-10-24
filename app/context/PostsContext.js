"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import app from "../shared/FirebaseConfig";
import Swal from "sweetalert2";

const PostsContext = createContext();

export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const db = getFirestore(app);

  const getPost = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "posts"));
      const postsArray = [];

      querySnapshot.forEach((doc) => {
        // Combine the document ID with the document data
        postsArray.push({ id: doc.id, ...doc.data() });
      });

      setPosts(postsArray);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error getting documents",
        text: error.message,
        confirmButtonText: "Ok",
      });
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  const postData = {
    posts,
    getPost,
  };

  return (
    <PostsContext.Provider value={{ ...postData }}>
      {children}
    </PostsContext.Provider>
  );
};

export const usePosts = () => {
  return useContext(PostsContext);
};
