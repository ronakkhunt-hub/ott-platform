import { ElementType, ForwardRefRenderFunction, forwardRef } from "react";
import Carousel, { ResponsiveType } from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { getDeviceType } from "../../utils/common";

interface Props {
  Component: ElementType;
  className?: string;
  items: PosterItemProps[] | SubscriptionItemProps[] | TrendingItemProps[];
  partialVisible?: boolean;
  config: ResponsiveType;
  customArrow?: boolean;
}

export interface PosterItemProps {
  poster: string;
  name: string;
  category: string;
  year: string;
  plan: string;
  rating: string;
  watchListed: boolean;
}

export interface SubscriptionItemProps {
  name: string;
  poster: string;
  total: number;
  watchListed: boolean;
}

export interface TrendingItemProps {
  name: string;
  poster: string;
  duration: string;
}

const MultiCarousel: ForwardRefRenderFunction<Carousel, Props> = (
  { Component, className, items, partialVisible, config, customArrow },
  ref
) => {
  const deviceType = getDeviceType();

  return (
    <Carousel
      ref={ref}
      className={className}
      swipeable={false}
      responsive={config}
      infinite={true}
      partialVisible={partialVisible}
      arrows={!customArrow}
      autoPlay={deviceType !== "desktop"}
      removeArrowOnDeviceType={["tablet", "mobile"]}
      deviceType={deviceType}
    >
      {items.map((item, index: number) => (
        <Component key={index} index={index} item={item} />
      ))}
    </Carousel>
  );
};

export default forwardRef(MultiCarousel);
