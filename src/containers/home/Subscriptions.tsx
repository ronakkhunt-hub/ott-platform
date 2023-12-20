import React, { useRef } from "react";
import Carousel from "react-multi-carousel";
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/outline";

import MultiCarousel, {
  SubscriptionItemProps,
} from "../../components/carousel/Carousel";
import SubscriptionItem from "../../components/carousel/SubscriptionItem";
import { carouselConfig } from "../../utils/common";
import CustomArrows from "../../components/carousel/CustomArrows";

interface Props {
  items: SubscriptionItemProps[];
}

const Subscriptions: React.FC<Props> = ({ items }) => {
  const sliderRef = useRef<Carousel>(null);

  return (
    <div className="pt-20 mx-5 sm:mx-5">
      <div className="max-w-7xl mx-auto z-20 mb-8">
        <h1 className="text-4xl font-normal text-white">Subscriptions</h1>
      </div>
      <div className="relative">
        <MultiCarousel
          ref={sliderRef}
          Component={SubscriptionItem}
          className="max-w-7xl mx-auto"
          items={items}
          customArrow={true}
          partialVisible={true}
          config={carouselConfig(6, 4, 2)}
        />
        <CustomArrows
          previous={() => sliderRef.current?.previous(6)}
          next={() => sliderRef.current?.next(6)}
        />
      </div>
    </div>
  );
};

export default Subscriptions;
