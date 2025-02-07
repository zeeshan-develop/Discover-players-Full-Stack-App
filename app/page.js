"use client";
import Gamelists from "@/components/Gamelists";
import Hero from "@/components/Hero";
import Search from "@/components/Search";

const Home = () => {
  return (
    <div>
      <Hero />
      <Gamelists />
      <Search />
    </div>
  );
};

export default Home;
