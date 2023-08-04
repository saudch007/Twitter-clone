"use client";
import React, { ChangeEvent, MouseEventHandler, useState } from "react";
import supabase from "../../supabase";

const Tweet = () => {
  const [Tweet, setTweet] = useState("");
  const [EventState, setEventState] = useState<ChangeEvent<HTMLInputElement>>();
  const [FileState, setFileState] = useState<File>();
  const placeholderValue = "What's happening?";
  const [showNotification, setShowNotification] = useState(false);

  function TweetHandle() {
    return new Promise<void>(async (resolve) => {
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
  }

  const handleTweet = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setTweet(event.target.value);
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
    showNotification ? setShowNotification(false) : setShowNotification(true);

    try {
      const syntheticEvent = EventState as ChangeEvent<HTMLInputElement>;

      await Promise.all([TweetHandle(), Uploader(FileState)]);
      console.log("Both events completed");
    } catch (error) {
      console.error("An error occured", error);
    }

    disableSubmitButton(); // to disable buttonn on submission of tweet
    showNotification ? setShowNotification(true) : setShowNotification(false);
  };

  async function Uploader(file: File | undefined) {
    const { data, error } = await supabase.storage
      .from("tweet_files")
      .upload("public" + file?.name, file as File);
    if (data) {
      console.log(data);
    } else if (error) {
      console.log(error);
    }
  }

  const handleUpload = (e: ChangeEvent<HTMLInputElement>) => {
    return new Promise<void>(async (resolve) => {
      var file;

      if (e.target.files) {
        file = e.target.files[0];
      }

      setFileState(file);

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
          placeholder={placeholderValue}
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

              <div>
                {showNotification && (
                  <div
                    id="toast-success"
                    className="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
                    role="alert"
                  >
                    <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
                      <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                      </svg>
                      <span className="sr-only">Check icon</span>
                    </div>
                    <div className="ml-3 text-sm font-normal">
                      Item moved successfully.
                    </div>
                  </div>
                )}
              </div>
            </div>
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
          onChange={(e) => {
            handleUpload(e);
            setEventState(e);
          }}
        />
      </div>
    </div>
  );
};

export default Tweet;
