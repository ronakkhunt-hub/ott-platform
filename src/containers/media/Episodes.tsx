import React, { useRef } from "react";
import ReactOwlCarousel from "react-owl-carousel";
import { ConfirmationNumberOutlined } from "@mui/icons-material";

import { EpisodeDetail } from "./EpisodeDetail";
import MultiCarousel, {
  TrendingItemProps,
} from "../../components/carousel/Carousel";
import { TrendingItem, CustomArrows } from "../../components/carousel";
import { classNames } from "../../utils/common";

interface Props {
  items: TrendingItemProps[];
}

export const Episodes: React.FC<Props> = ({ items }) => {
  const carouselRef = useRef<ReactOwlCarousel>(null);

  return (
    <div className={classNames.container}>
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <ConfirmationNumberOutlined className="w-5 h-5 sm:w-6 h-6 fill-blue-500" />
          <div className="text-lg text-white">1st Season</div>
        </div>
        <CustomArrows
          previous={() => carouselRef.current?.prev(500)}
          next={() => carouselRef.current?.next(500)}
        />
      </div>
      <MultiCarousel
        ref={carouselRef}
        Component={TrendingItem}
        className="mx-auto mt-8"
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

      <EpisodeDetail
        genres={["Action", "Thriller", "Comedy"]}
        shares={["facebook", "twitter", "instagram"]}
      />
    </div>
  );
};
