"use client";
import React from "react";
import Image from "next/image"; // Import Image from next/image
import { usePosts } from "@/app/context/PostsContext";
import { useParams } from "next/navigation";

const PostsDetail = () => {
  const { posts } = usePosts();
  const { Id: postId } = useParams();
  const detail = posts[postId];

  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <Image
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={detail?.image}
              width={500} // Specify a width
              height={500} // Specify a height
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                Game
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-3">
                {detail?.title}
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  {/* Your star rating SVGs here */}
                  <span className="text-gray-600 ml-3">4 Reviews</span>
                </span>
                {/* Your social icons here */}
              </div>
              <p className="leading-relaxed text-justify mb-8">
                Fam locavore kickstarter distillery...
              </p>

              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  {detail?.price}
                </span>
                <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  Get
                </button>
                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  {/* Your heart SVG here */}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PostsDetail;
