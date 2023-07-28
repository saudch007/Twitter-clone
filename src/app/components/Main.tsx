import React from "react";
import { BsChat, BsDot, BsThreeDots } from "react-icons/bs";
import { AiOutlineHeart, AiOutlineRetweet } from "react-icons/ai";
import { IoStatsChartOutline, IoShareOutline } from "react-icons/io5";

const Main = () => {
  return (
    <main className="ml-[320px] flex w-[600px] h-full min-h-screen flex-col border-l-[0.5px] border-r-[0.5px] border-gray-600">
      <h1 className="text-xl font-bold p-6 bg-black/10 sticky top-0 backdrop-blur-lg">
        Home
      </h1>
      <div className="border-t-[0.5px] px-4 border-b-[0.5px] flex items-stretch py-4  space-x-2 border-gray-600 relative">
        <div className="w-10 h-10 bg-slate-400 rounded-full flex-none"></div>
        <div className="flex flex-col w-full h-full">
          <input
            type="text"
            className="w-full h-full placeholder:text-2xl placeholder:text-gray-600 bg-transparent outline-none border-b-[0.5px] border-gray-600 p-4 border-none"
            placeholder="What's happening?!"
          />

          <div className=" justify-between items-center flex">
            <div></div>

            <div className="w-full max-w-[100px]">
              <button className="w-full rounded-full bg-primary px-4 py-2 text-lg text-center font-bold hover:bg-opacity-70 transition duration-200">
                Tweet
              </button>
            </div>
          </div>
        </div>
      </div>

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
                asperiores quam velit eius perferendis sint consequatur
                voluptate, earum repellat corrupti maxime recusandae esse quia
                laborum aliquid dolor blanditiis dolorem commodi. Iste illo quam
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
    </main>
  );
};

export default Main;
