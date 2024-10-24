"use client";
import { useState, useEffect } from "react";
import { GameListsData } from "@/app/shared/Data";
import Image from "next/image";
const Gamelists = () => {
  const [listsdata, setListsData] = useState();

  useEffect(() => {
    setListsData(GameListsData);
  });
  return (
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap   justify-center ">
        {listsdata?.map((item) => (
          <div className="lg:w-1/6 lg:mb-0 mb-6 p-4" key={item.id}>
            <div className="h-full text-center">
              <Image
                alt={item.name}
                className="mb-8 rounded-full inline-block border-2 border-gray-200 bg-gray-100 hover:animate-bounce cursor-pointer duration-150"
                src={item.image}
                width={80} // Adjust the width as needed
                height={80} // Adjust the height as needed
              />

              <p className="text-gray-500">{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gamelists;
