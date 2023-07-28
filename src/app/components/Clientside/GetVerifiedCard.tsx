"use client";
import React from "react";

const GetVerifiedCard = () => {
  return (
    <div className=" rounded-xl bg-gray-900 w-[22rem]">
      <div className="flex flex-col">
        <div className="my-6">
          <h1 className="font-bold text-xl px-4">Get Verified</h1>
          <div>
            <h1 className="font-bold text-base text-start px-4 py-2 truncate">
              Subscribe to unlock new features.
            </h1>
            <div>
              <button className=" pt-2 pr-2 pl-2 pb-2 mx-3 rounded-full bg-primary px-1 py-2 text-base text-center font-bold hover:bg-opacity-70 transition duration-200">
                Get Verified
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetVerifiedCard;
