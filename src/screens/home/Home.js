import React,{useState,useEffect} from "react";
import Post from "../../components/post/Post";
import "./Home.css";
import { useFetch } from "./../../hooks/useFetch";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";

export default function Home() {
  const [posts,setPosts] = useState(null);

  useEffect(() => {
    const collectionsRef = collection(db,"posts")
  
    getDocs(collectionsRef)
        .then ((snapshot) => {
          let results = []

          snapshot.docs.forEach((doc) => {
            results.push({...doc.data(),id:doc.id})
          })

          setPosts(results)
        })
        .catch ((err) => console.log(err))
  },[])

  console.log(posts);
  return (
    <div className="container outer">
      {posts &&
        posts.map((post) => {
          return <Post post={post} key={post.id} />;
        })}
    </div>
  );
}
