import React from "react";
import { BookOpenIcon, EyeIcon } from "@heroicons/react/24/outline";

import { SubscriptionItemProps } from "./Carousel";

interface Props {
  index: number;
  item: SubscriptionItemProps;
}

const SubscriptionItem: React.FC<Props> = ({ index, item }) => {
  const { name, poster, total, watchListed } = item;

  console.log("index % 2 === 0", index, index % 2 === 0);

  return (
    <div
      className={`group transition duration-500 ${
        index % 2 === 0 ? "mr-2" : "ml-2"
      } xl:m-0`}
    >
      <div className="relative flex justify-center align-center">
        <div className="absolute top-6 left-6 z-10">
          <div className="h-8 w-8 flex justify-center items-center p-1 rounded-[10px] bg-[#151f30ff] opacity-0 scale-90 group-hover:scale-105 group-hover:opacity-100 transition duration-500">
            <BookOpenIcon
              className={`w-4 h-4 flex-none bg-[#151f30ff] ${
                watchListed ? "fill-sky-600" : "fill-transparent"
              } stroke-sky-600`}
            />
          </div>
        </div>
        <figure className="relative rounded-lg cursor-pointer movie-card overflow-hidden">
          <img
            className="rounded-lg shadow-xl hover:shadow-2xl transition group-hover:scale-105 group-hover:blur-sm duration-[.6s]"
            src={poster}
          />
          <EyeIcon
            className="w-14 h-14 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 opacity-0 scale-90 group-hover:scale-105 group-hover:opacity-100 transition duration-500 z-10"
            stroke="#ffffff"
          />
        </figure>
      </div>
      <div className="text-center mt-4 text-white z-10">
        <h2 className="text-base font-medium transition-colors group-hover:text-sky-600 duration-500">
          {name}
        </h2>
        <h4 className="text-xs mt-1">More than {total} movies</h4>
      </div>
    </div>
  );
};

export default SubscriptionItem;
