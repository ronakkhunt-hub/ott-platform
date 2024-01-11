import React from "react";
import Plyr from "plyr-react";
import "plyr-react/plyr.css";

import { classNames } from "../../utils/common";
import {
  BookmarkBorder,
  CloudDownloadOutlined,
  PlayCircle,
  StarPurple500,
} from "@mui/icons-material";

export const Player: React.FC = () => {
  return (
    <div className="relative pt-24">
      <div
        className="absolute top-0 left-0 right-0 h-[450px] --banner-gradient-top"
        style={{
          background:
            "url(https://flixtv.volkovdesign.com/main/img/details.jpg) center top / cover no-repeat",
        }}
      ></div>
      <div className={classNames.container}>
        <div className={`relative w-full lg:w-3/5 pt-20 z-10`}>
          <div className="group mb-10 cursor-pointer w-max flex gap-3 items-center transition duration-500">
            <PlayCircle
              className="w-14 h-14 stroke-white fill-transparent group-hover:stroke-blue-500 transition duration-500"
              strokeWidth={0.8}
            />
            <h2 className="text-lg text-white group-hover:text-blue-500 transition duration-500">
              Trailer
            </h2>
          </div>
          <h1 className="text-4xl text-white font-[Rubik]">
            The Fast and the Furious
          </h1>
          <div className="flex flex-wrap gap-4 items-center mt-5 text-white">
            <div className="flex gap-2 items-center">
              <StarPurple500 className="w-4 h-4 fill-blue-500" />
              9.7
            </div>
            <div className="w-1 h-1 bg-blue-500 rounded-full" />
            Action
            <div className="w-1 h-1 bg-blue-500 rounded-full" />
            2021
            <div className="w-1 h-1 bg-blue-500 rounded-full" />
            1 h 42 min
            <div className="w-1 h-1 bg-blue-500 rounded-full" />
            16+
          </div>
          <p className="text-white text-base font-normal leading-7 mt-10">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </p>
          <div className="mt-10 rounded-2xl overflow-hidden">
            <Plyr
              source={{
                type: "video",
                sources: [{ src: "cBVGlBWQzuc", provider: "youtube" }],
              }}
            />
          </div>
          <div className="flex gap-2 flex-col sm:flex-row items-start sm:items-center justify-between mt-4">
            <div className="flex gap-2 flex-wrap items-center text-sm sm:text-lg text-white">
              <CloudDownloadOutlined
                className="h-4 w-4 sm:w-6 sm:h-6 fill-blue-500"
                strokeWidth={2}
              />
              Download:
              <div className="flex gap-1 items-center">
                <a
                  className="px-2 transition duration-900 hover:text-blue-500"
                  href="480p"
                >
                  480p
                </a>
                <div className="h-3 w-1 border-l-2 border-blue-900" />
                <a
                  className="px-2 transition duration-900 hover:text-blue-500"
                  href="720p"
                >
                  720p
                </a>
                <div className="h-3 w-1 border-l-2 border-blue-900" />
                <a
                  className="px-2 transition duration-900 hover:text-blue-500"
                  href="1080p"
                >
                  1080p
                </a>
                <div className="h-3 w-1 border-l-2 border-blue-900" />
                <a
                  className="px-2 transition duration-900 hover:text-blue-500"
                  href="4k"
                >
                  4k
                </a>
              </div>
            </div>
            <div className="flex gap-2 items-center text-sm sm:text-lg cursor-pointer">
              <BookmarkBorder className="h-4 w-4 sm:w-6 sm:h-6 fill-blue-500" />
              <div className="text-md text-white">Add to favourite</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
