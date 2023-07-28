"use client";
import React from "react";

const Tweet = () => {
  return (
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
  );
};

export default Tweet;
