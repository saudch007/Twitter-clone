import React from "react";

import Tweet from "./Clientside/Tweet";
import ShowTweets from "./Serverside/ShowTweets";

const Main = () => {
  return (
    <main className="ml-[320px] flex w-[600px] h-full min-h-screen flex-col border-l-[0.5px] border-r-[0.5px] border-gray-600">
      <h1 className="text-xl font-bold p-6 bg-black/10 sticky top-0 backdrop-blur-lg">
        Home
      </h1>
      <Tweet />
      <ShowTweets />
    </main>
  );
};

export default Main;
