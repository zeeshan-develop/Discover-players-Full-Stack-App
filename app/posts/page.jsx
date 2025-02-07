"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Postitem from "./Postitem";
import { useSession } from "next-auth/react";

const Posts = ({ posts, searchTerm }) => {
  const { data: session } = useSession();

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    AOS.init({
      offset: 120,
      duration: 1000,
    });
    AOS.refresh();
  }, []);

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto mt-4 overflow-hidden">
          <div className="flex flex-wrap -m-4">
            {session?.user.email && (
              <>
                {filteredPosts.length > 0 ? (
                  filteredPosts.map((post, index) => (
                    <Postitem post={post} val={index} key={index} />
                  ))
                ) : (
                  <p className="text-gray-500">No results found</p>
                )}
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Posts;
