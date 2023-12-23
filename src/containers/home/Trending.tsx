import React, { useRef } from "react";
import ReactOwlCarousel from "react-owl-carousel";

import MultiCarousel from "../../components/carousel/Carousel";
import {
  CustomArrows,
  TrendingItem,
  TrendingItemProps,
} from "../../components/carousel";
import { classNames } from "../../utils/common";

interface Props {
  items: TrendingItemProps[];
}

const Trending: React.FC<Props> = ({ items }) => {
  const carouselRef = useRef<ReactOwlCarousel>(null);

  return (
    <div className="relative mt-20">
      <div className={`${classNames.container} mt-20`}>
        <div className="flex gap-3 mt-20 mb-4 text-4xl text-white">
          <h1 className="text-sky-600 font-bold">
            Vue
            <span className="text-sm text-white font-bold ml-1">TV</span>
          </h1>
          Originals
        </div>
        <div className="text-lg text-white">
          Celebrity interviews, trending entertainment stories, and expert
          analysis.
        </div>
      </div>
      <div className="relative mx-5">
        <MultiCarousel
          ref={carouselRef}
          className="max-w-7xl mx-auto mt-8"
          Component={TrendingItem}
          defaultItems={3}
          items={items}
          config={{
            0: {
              items: 1,
            },
            600: {
              items: 2,
            },
            1000: {
              items: 3,
            },
          }}
        />
        <CustomArrows
          previous={() => carouselRef.current?.to(1, 500)}
          next={() => carouselRef.current?.to(3, 500)}
        />
      </div>
    </div>
  );
};

export default Trending;
