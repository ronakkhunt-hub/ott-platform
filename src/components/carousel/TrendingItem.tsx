import React from "react";

import { TrendingItemProps } from "./Carousel";

interface Props {
  item: TrendingItemProps;
}

const TrendingItem: React.FC<Props> = ({ item }) => {
  const { name, poster, duration } = item;

  return (
    <div className="group transition duration-500">
      <div className="relative flex justify-center items-center">
        <figure className="relative rounded-lg max-w-lg carousel-item cursor-pointer overflow-hidden">
          <img
            className="rounded-lg shadow-xl hover:shadow-2xl transition group-hover:scale-105 duration-[.6s]"
            src={poster}
          />
          <figcaption className="absolute bottom-9 left-8 text-white z-10">
            <div className="flex items-center gap-4 mt-2">
              <h4 className="text-md">{duration}</h4>
            </div>
          </figcaption>
        </figure>
      </div>
      <div className="text-left mt-4 mx-2 text-white z-10">
        <h2 className="text-xl transition-colors group-hover:text-sky-600 duration-500">
          {name}
        </h2>
      </div>
    </div>
  );
};

export default TrendingItem;
