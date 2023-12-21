import React, { useRef } from "react";
import Carousel from "react-multi-carousel";
import {
    ArrowLongLeftIcon,
    ArrowLongRightIcon,
} from "@heroicons/react/24/outline";

import MultiCarousel, {
    TrendingItemProps,
} from "../../components/carousel/Carousel";
import TrendingItem from "../../components/carousel/TrendingItem";
import { carouselConfig, classNames } from "../../utils/common";
import CustomArrows from "../../components/carousel/CustomArrows";

interface Props {
    items: TrendingItemProps[];
}

const SeriesCarousel: React.FC<Props> = ({ items }) => {
    const sliderRef = useRef<Carousel>(null);

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
                    ref={sliderRef}
                    Component={TrendingItem}
                    className="max-w-7xl mx-auto mt-8"
                    items={items}
                    customArrow={true}
                    partialVisible={true}
                    config={carouselConfig()}
                />
                <CustomArrows
                    previous={() => sliderRef.current?.previous(3)}
                    next={() => sliderRef.current?.next(3)}
                />
            </div>
        </div>
    );
};

export default SeriesCarousel;
