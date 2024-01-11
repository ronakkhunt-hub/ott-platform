import React, { useEffect, useRef, useState } from "react";

import { DropdownItem } from "./FilterSection";
import { KeyboardArrowDown } from "@mui/icons-material";

interface Props {
  index: number;
  dropdownItem: DropdownItem;
  toggleDropdown: (index?: number) => void;
}

export const CustomDropdown: React.FC<Props> = ({
  index,
  dropdownItem,
  toggleDropdown,
}) => {
  const { title, items, isOpen } = dropdownItem;

  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const optionsListRef = useRef<HTMLDivElement>(null);

  const handleOptionClick = (option: string) => {
    toggleDropdown();
    setHighlightedIndex(-1);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (!(event.target as HTMLElement).closest(`.dropdown-content`)) {
        toggleDropdown();
        setHighlightedIndex(-1);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className={`relative flex gap-3 min-w-min rounded dropdown-content`}>
      <div
        onClick={() => toggleDropdown(index)}
        className={`group transition duration-900 flex gap-2 items-center cursor-pointer text-white`}
      >
        <span
          className={`group-hover:text-blue-500 transition duration-900 -mt-1`}
        >
          {title}
        </span>
        <KeyboardArrowDown className="h-5 w-5 flex-none text-gray-400 scale-75" />
      </div>
      {isOpen && (
        <div
          className="absolute top-10 flex flex-col p-2 bg-white min-w-min max-h-[300px] overflow-scroll hide-scrollbar rounded shadow-2xl z-20"
          ref={optionsListRef}
        >
          {items.map((option, index) => (
            <div
              key={option}
              onClick={() => handleOptionClick(option)}
              className={`py-3 px-2 cursor-pointer ${
                highlightedIndex === index && "bg-grey-900"
              }`}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
