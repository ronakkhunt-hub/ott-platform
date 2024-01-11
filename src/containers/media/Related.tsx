import React, { useRef } from "react";
import ReactOwlCarousel from "react-owl-carousel";

import MultiCarousel, {
  MovieItemProps,
} from "../../components/carousel/Carousel";
import { CustomArrows, MovieItem } from "../../components/carousel";
import { classNames } from "../../utils/common";

interface Props {
  items: MovieItemProps[];
}

export const Related: React.FC<Props> = ({ items }) => {
  const carouselRef = useRef<ReactOwlCarousel>(null);

  return (
    <div className={`${classNames.container} mt-5`}>
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <div className="text-3xl lg:text-4xl text-white">
            Similar movies and TV series
          </div>
        </div>
        <CustomArrows
          previous={() => carouselRef.current?.prev(500)}
          next={() => carouselRef.current?.next(500)}
        />
      </div>
      <MultiCarousel
        className="mx-auto mt-8"
        ref={carouselRef}
        margin={20}
        Component={MovieItem}
        config={{
          0: {
            items: 1,
          },
          446: {
            items: 2,
          },
          600: {
            items: 3,
          },
          1000: {
            items: 6,
          },
        }}
        items={items}
        defaultItems={6}
      />
    </div>
  );
};
