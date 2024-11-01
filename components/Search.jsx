"use client";

import { useState } from "react";

const Search = () => {
  const [searchtext, setSearchtext] = useState();

  const onSearchButon = () => {
    // console.log("search player value", searchtext);
  };
  return (
    <div>
      <div className="relative xl:w-2/6 lg:w-3/4 mx-auto ">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 sm:p-8 ps-10 text-sm sm:text-[20px] tracking-wider text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search with Zipcode"
          required
          onChange={(text) => setSearchtext(text.target.value)}
        />
        <button
          type="submit"
          className="text-white tracking-widest   absolute end-2.5 bottom-2.5 sm:bottom-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-lg   px-4 py-1 sm:py-4 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={() => onSearchButon()}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
