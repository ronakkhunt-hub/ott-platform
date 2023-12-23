import React from "react";

import { TrendingItemProps } from "./Carousel";
import { PlayCircleIcon } from "@heroicons/react/24/outline";

interface Props {
  item: TrendingItemProps;
}

export const TrendingItem: React.FC<Props> = ({ item }) => {
  const { name, poster, duration } = item;

  return (
    <div draggable={false} className="group transition duration-500">
      <div className="relative flex justify-center items-center">
        <figure
          draggable={false}
          className="relative rounded-lg max-w-lg carousel-item cursor-pointer overflow-hidden"
        >
          <img
            draggable={false}
            className="rounded-lg shadow-xl hover:shadow-2xl transition group-hover:scale-105 duration-500"
            src={poster}
          />
          <figcaption className="absolute bottom-9 left-8 text-white z-10">
            <div className="flex items-center gap-4 mt-2">
              <PlayCircleIcon
                className="w-7 h-7 group-hover:stroke-sky-600 stroke-white transition duration-500"
                strokeWidth={1}
              />
              <h4 className="text-md">{duration}</h4>
            </div>
          </figcaption>
        </figure>
      </div>
      <div className="text-left mt-4 text-white z-10">
        <h2 className="text-xl transition-colors group-hover:text-sky-600 duration-500">
          {name}
        </h2>
      </div>
    </div>
  );
};
