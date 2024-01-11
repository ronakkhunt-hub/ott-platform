import React from "react";
import { Link } from "react-router-dom";
import {
  Bookmark,
  BookmarkBorder,
  VisibilityOutlined,
} from "@mui/icons-material";

import { SubscriptionItemProps } from "./Carousel";

interface Props {
  item: SubscriptionItemProps;
}

export const SubscriptionItem: React.FC<Props> = ({ item }) => {
  const { name, poster, total, watchListed } = item;

  return (
    <Link
      to="/media/fast-and-furious"
      className="group transition duration-500 w-full"
    >
      <div className="relative flex justify-center align-center">
        <div className="absolute top-6 left-6 z-10">
          <div className="h-8 w-8 flex justify-center items-center p-1 rounded-[10px] bg-[#151f30ff] opacity-0 scale-90 group-hover:scale-105 group-hover:opacity-100 transition duration-500">
            {watchListed ? (
              <Bookmark
                className={`w-5 h-5 flex-none bg-[#151f30ff] fill-blue-500`}
              />
            ) : (
              <BookmarkBorder
                className={`w-5 h-5 flex-none bg-[#151f30ff] fill-blue-500`}
              />
            )}
          </div>
        </div>
        <figure className="relative rounded-lg w-full cursor-pointer movie-card overflow-hidden">
          <img
            className="rounded-lg shadow-xl hover:shadow-2xl transition group-hover:scale-105 group-hover:blur-sm duration-[.6s]"
            src={poster}
          />
          <VisibilityOutlined className="w-14 h-14 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 opacity-0 scale-90 group-hover:scale-105 group-hover:opacity-100 transition duration-500 z-10 fill-white" />
        </figure>
      </div>
      <div className="text-center mt-4 text-white z-10">
        <h2 className="text-base font-medium transition-colors group-hover:text-blue-500 duration-500">
          {name}
        </h2>
        <h4 className="text-xs mt-1">More than {total} movies</h4>
      </div>
    </Link>
  );
};
