import React from "react";
import { BiHomeCircle, BiUser } from "react-icons/bi";
import {
  BsBell,
  BsBookmark,
  BsTwitter,
  BsEnvelope,
  BsThreeDots,
} from "react-icons/bs";

import { HiOutlineHashtag } from "react-icons/hi";
import Link from "next/link";

const NAVIGATION_ITEMS = [
  {
    title: "Twitter",
    icon: BsTwitter,
  },
  {
    title: "Home",
    icon: BiHomeCircle,
  },

  {
    title: "Explore",
    icon: HiOutlineHashtag,
  },
  {
    title: "Notifications",
    icon: BsBell,
  },
  {
    title: "Mesages",
    icon: BsEnvelope,
  },
  {
    title: "Bookmarks",
    icon: BsBookmark,
  },
  {
    title: "Profile",
    icon: BiUser,
  },
];

const LeftSideBar = () => {
  return (
    <section className="fixed w-[275px] flex flex-col items-stretch h-screen">
      <div className="flex flex-col items-stretch h-full space-y-4 mt-4 ">
        {NAVIGATION_ITEMS.map((item) => (
          <Link
            className="hover:bg-white/10 text-2xl transition justify-start w-fit duration-200 rounded-3xl p-2 flex items-center space-x-2 py-2 px-6"
            href={`/${item.title.toLowerCase()}`}
            key={item.title}
          >
            <div>
              <item.icon />
            </div>

            {item.title !== "Twitter" && <div>{item.title}</div>}
          </Link>
        ))}
        <button className="w-full rounded-full bg-primary m-4 px-4 py-4 text-2xl text-center hover:bg-opacity-70 transition duration-200">
          Tweet
        </button>
      </div>
      <button className="w-full justify-between flex items-center space-x-2 rounded-full bg-transparent m-4 px-4 py-4 text-center hover:bg-white/20 transition duration-200">
        <div className="flex items-center space-x-2">
          <div className="rounded-full bg-slate-400 w-10 h-10"></div>
          <div className="text-left text-sm">
            <div className="font-semibold">Saud Chaudry</div>
            <div className="">@saudchaudry1</div>
          </div>
        </div>

        <div>
          <BsThreeDots />
        </div>
      </button>
    </section>
  );
};

export default LeftSideBar;
