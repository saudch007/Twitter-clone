"use client";
import React, { useEffect, useState } from "react";
import { BsChat, BsDot, BsThreeDots } from "react-icons/bs";
import { AiOutlineHeart, AiOutlineRetweet } from "react-icons/ai";
import { IoStatsChartOutline, IoShareOutline } from "react-icons/io5";

import supabase from "../../supabase";
import { Url } from "next/dist/shared/lib/router/router";

const ShowTweets = () => {
  const [tweets, setTweets] = useState<{ tweet: any }[]>([]);
  useEffect(() => {
    const fetchTweets = async () => {
      const { data, error } = await supabase
        .from("tweet_table")
        .select("tweet");

      if (data) {
        setTweets(data);
      } else if (error) {
        console.error(error);
      }
    };

    fetchTweets();
  }, [tweets]);

  ////////// Images //////////

  const [imageUrls, setImageUrls] = useState<Url[]>([]);
  const image_initial = process.env.IMAGE_URL_INITIAL as string;

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const { data } = await supabase.storage
          .from("tweet_files")
          .getPublicUrl(image_initial);

        if (data) {
          setImageUrls([data.publicUrl]);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchImages();
  }, [imageUrls]);

  return (
    <div className="flex flex-col">
      {tweets.map((elem, i) => (
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
            <div className="text-white text-base py-2">{elem.tweet}</div>
            <div className=" aspect-square w-full h-96 rounded-xl">
              {imageUrls.map((elem_url, i) => (
                <img
                  key={i}
                  src={elem_url.toString()}
                  className="object-cover rounded-xl"
                />
              ))}
            </div>

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
