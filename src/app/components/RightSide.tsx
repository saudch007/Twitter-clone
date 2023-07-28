import Link from "next/link";
import React from "react";
import { BsChat, BsDot } from "react-icons/bs";
import Searchbar from "./Clientside/Searchbar";
import GetVerifiedCard from "./Clientside/GetVerifiedCard";
import Trends from "./Serverside/Trends";
import FollowList from "./Serverside/FollowList";

const RightSide = () => {
  return (
    <section className="absolute flex flex-col right-0 w-[320px] items-stretch h-screen px-6 ml-auto">
      <Searchbar />

      <GetVerifiedCard />
      <br />
      <Trends />
      <br />

      <FollowList />
    </section>
  );
};

export default RightSide;
