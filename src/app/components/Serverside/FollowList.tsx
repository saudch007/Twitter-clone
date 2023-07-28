import React from "react";

const FollowList = () => {
  return (
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
  );
};

export default FollowList;
