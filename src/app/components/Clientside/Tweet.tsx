"use client";
import React, {
  ChangeEvent,
  ChangeEventHandler,
  MouseEventHandler,
  useState,
} from "react";
import supabase from "../../supabase";
import { resolve } from "path";

const Tweet = () => {
  const [Tweet, setTweet] = useState("");

  const handleTweet = (event: ChangeEvent<HTMLInputElement>) => {
    return new Promise<void>(async (resolve) => {
      event.preventDefault();
      setTweet(event.target.value);
      const { error } = await supabase
        .from("tweet_table")
        .insert({ tweet: Tweet });

      if (error) {
        console.log(error);
      } else {
        console.log(Tweet + "-> Tweet Successful");
      }
      resolve();
    });
  };

  const submitBtn = document.getElementById(
    "submitButton"
  ) as HTMLButtonElement;

  let isButtonDisabled = false;

  function disableSubmitButton() {
    if (!isButtonDisabled) {
      isButtonDisabled = true;
      submitBtn.disabled = true;

      setTimeout(() => {
        isButtonDisabled = false;
        submitBtn.disabled = false;
      }, 5000);
    }

    submitBtn.addEventListener("click", disableSubmitButton);
    submitBtn.addEventListener("submit", disableSubmitButton);
  }

  const handleSubmit: MouseEventHandler = async (event) => {
    event.preventDefault();

    try {
      await Promise.all([handleTweet(), handleUpload()]);
      console.log("Both events completed");
    } catch (error) {
      console.error("An error occured", error);
    }

    disableSubmitButton(); // to disable buttonn on submission of tweet
  };

  const handleUpload = (e: ChangeEvent<HTMLInputElement>) => {
    return new Promise<void>(async (resolve) => {
      let file;

      if (e.target.files) {
        file = e.target.files[0];
      }

      const { data, error } = await supabase.storage
        .from("tweet_files")
        .upload("public" + file?.name, file as File);
      if (data) {
        console.log(data);
      } else if (error) {
        console.log(error);
      }

      resolve();
    });
  };

  return (
    <div className="border-t-[0.5px] px-4 border-b-[0.5px] flex items-stretch py-10  space-x-2 border-gray-600 relative">
      <div className="w-10 h-10 bg-slate-400 rounded-full flex-none"></div>
      <div className="flex flex-col w-full h-full">
        <input
          onChange={handleTweet}
          value={Tweet}
          type="text"
          className="w-full h-full placeholder:text-2xl placeholder:text-gray-600 bg-transparent outline-none border-b-[0.5px] border-gray-600 p-4 border-none"
          placeholder="What's happening?!"
        />

        <div className=" justify-between items-center flex">
          <div></div>

          <div className="flex flex-row w-full max-w-[100px]">
            <div>
              <button
                onClick={handleSubmit}
                type="submit"
                id="submitButton"
                className="w-full rounded-full bg-primary mt-2 px-4 py-2 text-lg text-center font-bold hover:bg-opacity-70 transition duration-200"
              >
                Tweet
              </button>
            </div>
          </div>
        </div>
        <div className="outline-bg-primary hover:bg-opacity-70 transition duration-200 flex  flex-col items-center ">
          <label htmlFor="file_input">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <div></div>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
          </label>
          <input
            type="file"
            accept="image/*"
            className="hidden"
            id="file_input"
            onChange={handleUpload}
          />
        </div>
      </div>
    </div>
  );
};

export default Tweet;
