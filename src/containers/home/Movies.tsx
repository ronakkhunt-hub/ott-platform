import React from "react";

import { classNames } from "../../utils/common";
import { MovieItem, MovieItemProps } from "../../components/carousel";

interface Props {
  movies: MovieItemProps[];
}

export const Movies: React.FC<Props> = ({ movies }) => {
  return (
    <div className="relative --gradient">
      <div
        className={`${classNames.container} relative grid gap-6 grid-cols-2 xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 pb-20 z-10`}
      >
        {movies.map((item, index) => (
          <MovieItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};
