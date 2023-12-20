import React from "react";
import { BookOpenIcon, StarIcon } from "@heroicons/react/24/outline";

import { PosterItemProps } from "./Carousel";

interface Props {
  item: PosterItemProps;
}

const PosterItem: React.FC<Props> = ({ item }) => {
  const { name, poster, plan, category, year, watchListed, rating } = item;

  return (
    <div className="relative group transition-colors duration-500 flex items-center justify-center">
      <div className="absolute top-8 w-[70%] flex justify-between items-center z-10">
        <div className="h-8 w-8 flex justify-center items-center p-1 rounded-[10px] bg-[#151f30ff] opacity-0 scale-90 group-hover:scale-105 group-hover:opacity-100 transition duration-500">
          <BookOpenIcon
            className={`w-4 h-4 flex-none bg-[#151f30ff] ${
              watchListed ? "fill-sky-600" : "fill-transparent"
            } stroke-sky-600`}
          />
        </div>
        <div className="h-8 text-sm flex gap-2 items-center px-2 py-1 text-white rounded-[10px] bg-[#151f30ff] opacity-0 scale-90 group-hover:scale-105 group-hover:opacity-100 transition duration-500">
          <StarIcon
            className={
              "w-4 h-4 flex-none bg-[#151f30ff] fill-transparent stroke-sky-600"
            }
          />
          {rating}
        </div>
      </div>
      <figure className="relative rounded-lg max-w-lg carousel-item cursor-pointer overflow-hidden">
        <img
          className="rounded-lg shadow-xl hover:shadow-2xl transition group-hover:scale-105 duration-[.6s]"
          src={poster}
        />
        <figcaption className="absolute bottom-9 left-8 text-white z-10">
          <h2 className="text-3xl transition-colors group-hover:text-sky-600 duration-500">
            {name}
          </h2>
          <div className="flex items-center gap-4 mt-2">
            <h4 className="text-md">{plan}</h4>
            <h4 className="text-md">{category}</h4>
            <h4 className="text-md">{year}</h4>
          </div>
        </figcaption>
      </figure>
    </div>
  );
};

export default PosterItem;
