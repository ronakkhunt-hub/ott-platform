import React from "react";
import {
  BookOpenIcon,
  PlayCircleIcon,
  StarIcon,
} from "@heroicons/react/24/outline";

import { MovieItem } from "../containers/home/Movies";

interface Props {
  item: MovieItem;
}

const MovieCard: React.FC<Props> = ({ item }) => {
  const { name, poster, plan, category, year, watchListed, rating } = item;

  return (
    <div className="group transition duration-500">
      <div className="relative flex align-center">
        <div className="absolute top-6 left-6 w-3/4 flex justify-between items-center z-10">
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
        <figure className="relative rounded-lg cursor-pointer w-full movie-card overflow-hidden">
          <img
            className="rounded-lg shadow-xl hover:shadow-2xl w-full transition group-hover:scale-105 group-hover:blur-sm duration-[.6s]"
            src={poster}
          />
          <PlayCircleIcon
            className="w-14 h-14 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 opacity-0 scale-90 group-hover:scale-105 group-hover:opacity-100 transition duration-500 z-10"
            stroke="#ffffff"
          />
        </figure>
      </div>
      <div className="mt-4 text-white z-10">
        <h2 className="text-base font-medium transition-colors group-hover:text-sky-600 duration-500">
          {name}
        </h2>
        <div className="flex items-center gap-4 mt-1">
          <h4 className="text-xs">{plan}</h4>
          <h4 className="text-xs">{category}</h4>
          <h4 className="text-xs">{year}</h4>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
