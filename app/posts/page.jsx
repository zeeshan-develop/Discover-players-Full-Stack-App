"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Postitem from "./Postitem";
import { useSession } from "next-auth/react";

const Posts = ({ posts }) => {
  const { data: session } = useSession();
  const formatDate = (date) => {
    if (date && date.seconds) {
      return new Date(date.seconds * 1000).toLocaleDateString();
    }
    return date;
  };
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
        <div className="container px-5 py-24 mx-auto mt-4">
          <div className="flex flex-wrap -m-4">
            {session?.user.email && (
              <>
                {posts.map((post, index) => (
                  <Postitem post={post} val={index} key={index} />
                ))}
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Posts;
