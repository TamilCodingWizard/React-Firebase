import React,{useEffect} from "react";
import Post from "../../components/post/Post";
import "./Home.css";
import { useFetchCollection } from './../../hooks/useFetchCollection';
import { useThemeContext } from './../../hooks/useThemeContext';

export default function Home() {

  const {documents : posts} = useFetchCollection("posts")

  const {theme} = useThemeContext()

  useEffect(() => {

    if (theme === 'light') {
      document.body.style.backgroundColor = '#f2e9e6'
  } else {
      document.body.style.backgroundColor = '#e1e5ed'
  }
  },[theme])

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
