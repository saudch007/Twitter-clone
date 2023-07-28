import Link from "next/link";
import React from "react";
import { BsChat, BsDot } from "react-icons/bs";

const RightSide = () => {
  return (
    <section className="absolute flex flex-col right-0 w-[320px] items-stretch h-screen px-6 ml-auto">
      <div className="py-6 flex flex-row justify-items-center">
        <input
          id="searchBox"
          type="text"
          placeholder="Search Twitter"
          className="px-10 py-3 rounded-3xl bg-gray-900"
        />
      </div>

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
      <br />
      <div className=" rounded-xl bg-gray-900 w-[22rem]">
        <div className="flex flex-col">
          <div className="my-6">
            <h1 className="font-bold text-xl px-4">Trends for you</h1>
            <div>
              <div>
                <div className="h-full font-bold text-base text-start px-4 py-2 truncate ">
                  <div className="flex flex-col ">
                    {Array.from({ length: 10 }).map((_, i) => (
                      <>
                        <div className="hover:bg-white/10 transition duration-200">
                          <h2 className="text-sm text-gray-500">
                            Trending in Pakistan
                          </h2>
                          <div className="flex flex-row">
                            <div className="mr-auto">#Trends_here</div>
                            <div>...</div>
                          </div>
                        </div>

                        <br />
                      </>
                    ))}
                  </div>
                </div>
                <div className="mx-5 flex flex-row">
                  <p>
                    <a className="" href="/">
                      See more
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />

      <div className=" rounded-xl bg-gray-900 w-[22rem]">
        <div className="flex flex-col">
          <div className="my-6">
            <h1 className="font-bold text-xl px-4">Who to follow</h1>
            <div>
              <div>
                <div className="h-full font-bold text-base text-start px-4 py-2 truncate ">
                  <div className="flex flex-col ">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <>
                        <div className="">
                          <div className="flex flex-row">
                            <div className="w-10 h-10 bg-slate-400 rounded-full"></div>

                            <div className="flex flex-col">
                              <div className="px-4">Saud</div>
                              <h2 className="px-4 text-sm text-gray-500">
                                @saudchaudry1
                              </h2>
                            </div>

                            <button className="bg-white mx-6 h-9 hover:bg-gray-200 text-black font-bold  px-4 rounded-full">
                              Follow
                            </button>
                          </div>
                        </div>

                        <br />
                      </>
                    ))}
                  </div>
                </div>
                <div className="mx-5 flex flex-row">
                  <p>
                    <a className="" href="/">
                      See more
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RightSide;
