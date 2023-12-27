import React, { useRef } from "react";
import ReactOwlCarousel from "react-owl-carousel";
import { TicketIcon } from "@heroicons/react/24/outline";

import MultiCarousel from "../../components/carousel/Carousel";
import {
  TrendingItemProps,
  TrendingItem,
  CustomArrows,
} from "../../components/carousel";
import EpisodeDetail from "./EpisodeDetail";
import { classNames } from "../../utils/common";

interface Props {
  items: TrendingItemProps[];
}

const SeriesCarousel: React.FC<Props> = ({ items }) => {
  const carouselRef = useRef<ReactOwlCarousel>(null);

  return (
    <div className="relative mt-10">
      <div className={`${classNames.customContainer} lg:mx-20`}>
        <div className="flex gap-2 items-center">
          <TicketIcon className="w-5 h-5 stroke-sky-600" strokeWidth={2} />
          <div className="text-lg text-white">1st Season</div>
        </div>
      </div>
      <div className="relative mx-5">
        <MultiCarousel
          ref={carouselRef}
          Component={TrendingItem}
          className="max-w-7xl mx-auto mt-8"
          defaultItems={5}
          items={items}
          config={{
            0: {
              items: 1,
            },
            600: {
              items: 3,
            },
            1000: {
              items: 5,
            },
          }}
        />
        <CustomArrows
          previous={() => carouselRef.current?.prev(500)}
          next={() => carouselRef.current?.next(500)}
        />
      </div>

      <div className={`${classNames.customContainer} lg:mx-20 mt-10`}>
        <EpisodeDetail
          genres={["Action", "Thriller", "Comedy"]}
          shares={["facebook", "twitter", "instagram"]}
        />
      </div>
    </div>
  );
};

export default SeriesCarousel;
