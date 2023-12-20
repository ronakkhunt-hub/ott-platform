import React from "react";

import MovieCard from "../../components/MovieCard";
import { classNames } from "../../utils/common";

interface Props {
  movies: MovieItem[];
}

export interface MovieItem {
  poster: string;
  name: string;
  category: string;
  year: string;
  plan: string;
  rating: string;
  watchListed: boolean;
}

const Movies: React.FC<Props> = ({ movies }) => {
  return (
    <div className="relative --gradient">
      <div
        className={`${classNames.container} relative grid gap-6 grid-cols-2 xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 mt-7 pb-20 z-10`}
      >
        {movies.map((item, index) => (
          <MovieCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Movies;
