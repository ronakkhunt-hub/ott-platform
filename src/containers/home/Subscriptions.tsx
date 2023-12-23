import React, { useRef } from "react";

import MultiCarousel, {
  SubscriptionItemProps,
} from "../../components/carousel/Carousel";
import ReactOwlCarousel from "react-owl-carousel";
import { CustomArrows, SubscriptionItem } from "../../components/carousel";

interface Props {
  items: SubscriptionItemProps[];
}

const Subscriptions: React.FC<Props> = ({ items }) => {
  const sliderRef = useRef<ReactOwlCarousel>(null);

  return (
    <div className="pt-20 mx-5 sm:mx-5">
      <div className="max-w-7xl mx-auto z-20 mb-8">
        <h1 className="text-4xl font-normal text-white">Subscriptions</h1>
      </div>
      <div className="relative">
        <MultiCarousel
          className="max-w-7xl mx-auto"
          ref={sliderRef}
          Component={SubscriptionItem}
          items={items}
          defaultItems={6}
        />
        <CustomArrows
          previous={() => sliderRef.current?.to(1, 500)}
          next={() => sliderRef.current?.to(6, 500)}
        />
      </div>
    </div>
  );
};

export default Subscriptions;
