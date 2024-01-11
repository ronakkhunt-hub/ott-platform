import React, { useRef } from "react";
import ReactOwlCarousel from "react-owl-carousel";

import MultiCarousel, {
  TrendingItemProps,
} from "../../components/carousel/Carousel";
import { CustomArrows, TrendingItem } from "../../components/carousel";
import { classNames } from "../../utils/common";
import { Logo } from "../../components";

interface Props {
  items: TrendingItemProps[];
}

export const Trending: React.FC<Props> = ({ items }) => {
  const carouselRef = useRef<ReactOwlCarousel>(null);

  return (
    <div className={`${classNames.container} mt-10`}>
      <div className="flex justify-between items-center">
        <div className="">
          <div className="flex gap-3 mb-4 text-3xl lg:text-4xl text-white">
            <Logo />
            Originals
          </div>
          <div className="text-lg text-white">
            Celebrity interviews, trending entertainment stories, and expert
            analysis.
          </div>
        </div>
        <CustomArrows
          previous={() => carouselRef.current?.prev(500)}
          next={() => carouselRef.current?.next(500)}
        />
      </div>
      <MultiCarousel
        ref={carouselRef}
        className="mx-auto mt-8"
        Component={TrendingItem}
        defaultItems={3}
        margin={30}
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
    </div>
  );
};
