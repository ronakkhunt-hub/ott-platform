import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/outline";
import React, { MouseEventHandler } from "react";

interface Props {
  previous: MouseEventHandler<HTMLDivElement>;
  next: MouseEventHandler<HTMLDivElement>;
}

const CustomArrows: React.FC<Props> = ({ previous, next }) => {
  return (
    <>
      <div
        className="hidden md:flex absolute flex justify-center items-center px-3.5 py-3.5 rounded-full top-2/4 -translate-y-full left-8 bg-[#151f30ff] transition duration-700 hover:bg-sky-600 cursor-pointer"
        onClick={previous}
      >
        <ArrowLongLeftIcon className={`w-7 h-7 stroke-white`} />
      </div>
      <div
        className="hidden md:flex absolute flex justify-center items-center px-3.5 py-3.5 rounded-full top-2/4 -translate-y-full right-8 bg-[#151f30ff] transition duration-700 hover:bg-sky-600 cursor-pointer"
        onClick={next}
      >
        <ArrowLongRightIcon className={`w-7 h-7 stroke-white`} />
      </div>
    </>
  );
};

export default CustomArrows;
