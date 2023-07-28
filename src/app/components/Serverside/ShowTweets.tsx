import React from "react";
import { BsChat, BsDot, BsThreeDots } from "react-icons/bs";
import { AiOutlineHeart, AiOutlineRetweet } from "react-icons/ai";
import { IoStatsChartOutline, IoShareOutline } from "react-icons/io5";

const ShowTweets = () => {
  return (
    <div className="flex flex-col">
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className="border-b-[0.5px] border-gray-600 p-4 flex space-x-4"
        >
          <div>
            <div className="w-10 h-10 bg-slate-200 rounded-full" />
          </div>

          <div className="flex flex-col">
            <div className="flex items-center w-full justify-between ">
              <div className="flex items-center space-x-1 w-full">
                <div className="font-bold">Saud Chaudry</div>
                <div className="text-gray-500">@saudchaudry1</div>
                <div className="text-gray-500">
                  <BsDot />
                </div>
                <div className="text-gray-500">1 hour ago</div>
              </div>
              <div>
                <BsThreeDots />
              </div>
            </div>
            <div className="text-white text-base py-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
              nesciunt praesentium facilis suscipit voluptas aut delectus
              asperiores quam velit eius perferendis sint consequatur voluptate,
              earum repellat corrupti maxime recusandae esse quia laborum
              aliquid dolor blanditiis dolorem commodi. Iste illo quam
              perferendis.
            </div>
            <div className="bg-slate-400 aspect-square w-full h-96 rounded-xl"></div>

            <div className="flex items-center justify-around w-full">
              <div className="rounded-full hover:bg-white/10 transition duration-200 p-3 cursor-pointer">
                <BsChat />
              </div>
              <div className="rounded-full hover:bg-white/10 transition duration-200 p-3 cursor-pointer">
                <AiOutlineRetweet />
              </div>
              <div className="rounded-full hover:bg-white/10 transition duration-200 p-3 cursor-pointer">
                <AiOutlineHeart />
              </div>
              <div className="rounded-full hover:bg-white/10 transition duration-200 p-3 cursor-pointer">
                <IoStatsChartOutline />
              </div>
              <div className="rounded-full hover:bg-white/10 transition duration-200 p-3 cursor-pointer">
                <IoShareOutline />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowTweets;
