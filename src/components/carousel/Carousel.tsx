import {
  CSSProperties,
  ElementType,
  ForwardRefRenderFunction,
  forwardRef,
} from "react";
import ReactOwlCarousel, { Options } from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

interface Props {
  Component: ElementType;
  className?: string;
  center?: boolean;
  margin?: number;
  items: PosterItemProps[] | SubscriptionItemProps[] | TrendingItemProps[];
  style?: CSSProperties;
  defaultItems: number;
  config?: { [key: string]: Options };
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

export interface MovieItemProps {
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

const MultiCarousel: ForwardRefRenderFunction<ReactOwlCarousel, Props> = (
  { Component, style, className, center, margin, items, defaultItems, config },
  ref
) => {
  return (
    <ReactOwlCarousel
      ref={ref}
      style={style}
      className={className}
      loop
      center={center ? center : false}
      margin={margin ? margin : 10}
      items={defaultItems}
      dots={false}
      lazyLoad={true}
      nav
      navText={[]}
      responsive={
        config ?? {
          0: {
            items: 1,
          },
          600: {
            items: 3,
          },
          1000: {
            items: 6,
          },
        }
      }
    >
      {items.map((item, index: number) => (
        <Component key={index} item={item} />
      ))}
    </ReactOwlCarousel>
  );
};

export default forwardRef(MultiCarousel);
