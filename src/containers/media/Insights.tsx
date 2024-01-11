import React, { useState } from "react";
import { MarkEmailUnread } from "@mui/icons-material";

import Comments from "./comments";
import Reviews from "./reviews";
import { MovieItem } from "../../components/carousel";
import data from "../../db.json";
import { classNames } from "../../utils/common";

interface Props {}

export const Insights: React.FC<Props> = ({}) => {
  const [tab, setTab] = useState("comment");

  return (
    <div className="relative pb-20 --gradient">
      <div
        className={`${classNames.container} lg:mx-18 relative flex flex-col gap-20 lg:flex-row items-start z-10`}
      >
        <div className="w-full lg:w-3/5">
          <div className={`border-b h-[1px] w-5/5 border-[#2f80ed1a]`} />
          <div className="mt-8">
            <div className="flex gap-4 md:gap-8 items-center">
              <div
                className={`flex gap-2 items-center text-xl md:text-2xl text-white transition-opacity duration-1000 cursor-pointer ${
                  tab === "comment" ? "opacity-100" : "opacity-50"
                } hover:opacity-100`}
                onClick={() => setTab("comment")}
              >
                Comments
                <span className="inline-flex items-center rounded-md bg-blue-500 px-1.5 py-0.5 text-xs font-medium text-white ring-1 ring-inset ring-gray-500/10">
                  5
                </span>
              </div>
              <div
                className={`flex gap-2 items-center text-xl md:text-2xl text-white transition-opacity duration-1000 cursor-pointer ${
                  tab === "review" ? "opacity-100" : "opacity-50"
                } hover:opacity-100`}
                onClick={() => setTab("review")}
              >
                Reviews
                <span className="inline-flex items-center rounded-md bg-blue-500 px-1.5 py-0.5 text-xs font-medium text-white ring-1 ring-inset ring-gray-500/10">
                  3
                </span>
              </div>
            </div>
            {tab === "comment" && (
              <div className={`text-white mt-6 animate-fade-in-down`}>
                <Comments />
              </div>
            )}
            {tab === "review" && (
              <div className={`text-white mt-6 animate-fade-in-down`}>
                <Reviews />
              </div>
            )}
          </div>
        </div>
        <div className="w-full lg:w-2/6">
          <div className="w-auto border border-[#2f80ed1a] p-8 rounded-2xl">
            <div className="flex flex-col gap-5 items-center">
              <MarkEmailUnread className="w-10 h-10 fill-blue-500" />
              <h1 className="text-2xl text-white">Notifications</h1>
              <p className="text-base text-white">
                Subscribe to notifications about new episodes
              </p>
              <input
                type="email"
                placeholder="Email"
                className="pl-4 w-full h-10 bg-[#2f80ed1a] text-white transition-all duration-700 outline-none focus:outline focus:outline-blue-500 rounded-xl"
              />
              <button className="w-full bg-blue-500 py-3 rounded-2xl text-white">
                Send
              </button>
            </div>
          </div>
          <div className="mt-16">
            <div className="text-xl text-white mb-5">New items</div>
            <div className="grid grid-cols-2 sm:grid-cols-4 place-items-start lg:grid-cols-2 gap-8">
              {data.movies.map((item, i) => i < 4 && <MovieItem item={item} />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
