"use client";
import Gamelists from "@/components/Gamelists";
import Hero from "@/components/Hero";
import Search from "@/components/Search";
import Posts from "./posts/page";
import { usePosts } from "./context/PostsContext";

const Home = () => {
  const { posts } = usePosts();

  return (
    <div>
      <Hero />
      <Search />
      <Gamelists />
      {posts ? <Posts posts={posts} /> : null}
    </div>
  );
};

export default Home;
