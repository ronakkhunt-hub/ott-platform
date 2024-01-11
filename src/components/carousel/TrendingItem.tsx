import React from "react";

import { TrendingItemProps } from "./Carousel";
import { PlayCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";

interface Props {
  item: TrendingItemProps;
}

export const TrendingItem: React.FC<Props> = ({ item }) => {
  const { name, poster, duration } = item;

  return (
    <Link
      to="/media/fast-and-furious"
      className="group transition w-full duration-500"
    >
      <div className="relative flex justify-center items-center">
        <figure className="relative rounded-lg w-full carousel-item cursor-pointer overflow-hidden">
          <img
            className="rounded-lg shadow-xl hover:shadow-2xl transition group-hover:scale-105 duration-500"
            src={poster}
          />
          <figcaption className="absolute bottom-9 left-8 text-white z-10">
            <div className="flex items-center gap-4 mt-2">
              <PlayCircle
                className="w-7 h-7 group-hover:stroke-blue-500 fill-transparent stroke-white transition duration-500"
                strokeWidth={1}
              />
              <h4 className="text-md">{duration}</h4>
            </div>
          </figcaption>
        </figure>
      </div>
      <div className="text-left mt-4 text-white z-10">
        <h2 className="text-xl transition-colors group-hover:text-blue-500 duration-500">
          {name}
        </h2>
      </div>
    </Link>
  );
};
