import React, { useRef } from "react";
import ReactOwlCarousel from "react-owl-carousel";

import MultiCarousel, {
  SubscriptionItemProps,
} from "../../components/carousel/Carousel";
import { CustomArrows, SubscriptionItem } from "../../components/carousel";
import { classNames } from "../../utils/common";

interface Props {
  items: SubscriptionItemProps[];
}

export const Subscriptions: React.FC<Props> = ({ items }) => {
  const carouselRef = useRef<ReactOwlCarousel>(null);

  return (
    <div className={`${classNames.container} mt-10`}>
      <div className="flex justify-between">
        <div className="text-3xl lg:text-4xl text-white">Subscriptions</div>
        <CustomArrows
          previous={() => carouselRef.current?.prev(500)}
          next={() => carouselRef.current?.next(500)}
        />
      </div>
      <MultiCarousel
        className="mx-auto mt-8"
        ref={carouselRef}
        Component={SubscriptionItem}
        items={items}
        defaultItems={6}
        margin={30}
        config={{
          0: {
            items: 2,
          },
          600: {
            items: 3,
          },
          1000: {
            items: 6,
          },
        }}
      />
    </div>
  );
};
