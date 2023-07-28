import React from "react";

const Trends = () => {
  return (
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
  );
};

export default Trends;
