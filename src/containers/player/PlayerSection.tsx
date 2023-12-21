import React from "react";
import Plyr from "plyr-react";
import "plyr-react/plyr.css";
import {
  ArrowDownTrayIcon,
  PlayCircleIcon,
  StarIcon,
} from "@heroicons/react/24/outline";

import { classNames } from "../../utils/common";
import { BookOpenIcon } from "@heroicons/react/20/solid";

const PlayerSection: React.FC = () => {
  return (
    <div className="relative pt-24">
      <div
        className="absolute top-0 left-0 right-0 h-[450px] --banner-gradient-top"
        style={{
          background:
            "url(https://flixtv.volkovdesign.com/main/img/details.jpg) center top / cover no-repeat",
        }}
      ></div>
      <div className={`${classNames.customContainer} relative pt-20 z-10`}>
        <div className="group mb-10 cursor-pointer w-max flex gap-3 items-center transition duration-600">
          <PlayCircleIcon
            className="w-14 h-14 stroke-white group-hover:stroke-sky-600 transition duration-600"
            strokeWidth={0.8}
          />
          <h2 className="text-lg text-white group-hover:text-sky-600 transition duration-600">
            Trailer
          </h2>
        </div>
        <h1 className="text-4xl text-white font-[Rubik]">
          The Fast and the Furious
        </h1>
        <div className="flex gap-4 items-center mt-5 text-white">
          <div className="flex gap-2 items-center">
            <StarIcon className="w-4 h-4 stroke-sky-600" />
            9.7
          </div>
          <div className="w-1 h-1 bg-sky-600 rounded-full" />
          Action
          <div className="w-1 h-1 bg-sky-600 rounded-full" />
          2021
          <div className="w-1 h-1 bg-sky-600 rounded-full" />
          1 h 42 min
          <div className="w-1 h-1 bg-sky-600 rounded-full" />
          16+
        </div>
        <p className=" text-white text-base font-normal leading-7 mt-10">
          It is a long established fact that a reader will be distracted by
          the readable content of a page when looking at its layout. The point
          of using Lorem Ipsum is that it has a more-or-less normal
          distribution of letters, as opposed to using 'Content here, content
          here', making it look like readable English.
        </p>
        <div className=" mt-10 rounded-2xl overflow-hidden">
          <Plyr
            source={{
              type: "video",
              sources: [{ src: "cBVGlBWQzuc", provider: "youtube" }],
            }}
          />
        </div>
        <div className="flex items-center justify-between mt-4">
          <div className="flex gap-2 items-center text-white">
            <ArrowDownTrayIcon className="w-6 h-6 stroke-sky-600" />
            Download:
            <div className="flex gap-1 items-center">
              <a className="px-2 transition duration-900 hover:text-sky-600" href="480p">
                480p
              </a>
              <div className="h-3 w-1 border-l-2 border-sky-900" />
              <a className="px-2 transition duration-900 hover:text-sky-600" href="720p">
                720p
              </a>
              <div className="h-3 w-1 border-l-2 border-sky-900" />
              <a className="px-2 transition duration-900 hover:text-sky-600" href="1080p">
                1080p
              </a>
              <div className="h-3 w-1 border-l-2 border-sky-900" />
              <a className="px-2 transition duration-900 hover:text-sky-600" href="4k">
                4k
              </a>
            </div>
          </div>
          <div className="flex gap-2 items-center cursor-pointer group">
            <BookOpenIcon className="w-5 h-5 stroke-sky-600 group-hover:stroke-yellow-600" />
            <div className="text-md text-white">Add to favourite</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerSection;
