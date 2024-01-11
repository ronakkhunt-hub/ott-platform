import React, { MouseEventHandler } from "react";
import { EastRounded, WestRounded } from "@mui/icons-material";

interface Props {
  previous: MouseEventHandler<HTMLDivElement>;
  next: MouseEventHandler<HTMLDivElement>;
}

export const CustomArrows: React.FC<Props> = ({ previous, next }) => {
  return (
    <div className="flex gap-2 items-center">
      <div
        className="mr-2 flex justify-center items-center h-12 w-12 rounded-full bg-[#151f30ff] transition duration-700 hover:bg-blue-500 cursor-pointer"
        onClick={previous}
      >
        <WestRounded className={`w-6 h-6 fill-white`} />
      </div>
      <div
        className="ml-2 flex justify-center items-center h-12 w-12 rounded-full bg-[#151f30ff] transition duration-700 hover:bg-blue-500 cursor-pointer"
        onClick={next}
      >
        <EastRounded className={`w-6 h-6 fill-white`} />
      </div>
    </div>
  );
};
