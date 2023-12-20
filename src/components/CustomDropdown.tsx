import React, { useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

import { DropdownItem } from "./FilterSection";

interface Props {
  index: number;
  dropdownItem: DropdownItem;
  toggleDropdown: (index?: number) => void;
}

const CustomDropdown: React.FC<Props> = ({
  index,
  dropdownItem,
  toggleDropdown,
}) => {
  const { title, items, isOpen } = dropdownItem;

  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const optionsListRef = useRef<HTMLDivElement>(null);

  // const filterDropdown = (value: string) => {
  //   setHighlightedIndex(-1);
  // };

  const handleOptionClick = (option: string) => {
    toggleDropdown();
    setHighlightedIndex(-1);
  };

  // const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
  //   if (event.key === "Enter") {
  //     toggleDropdown();
  //     setHighlightedIndex(-1);
  //   } else if (event.key === "ArrowDown") {
  //     event.preventDefault();
  //     setHighlightedIndex((prevIndex) =>
  //       prevIndex === items.length - 1 ? prevIndex : prevIndex + 1
  //     );
  //     if (optionsListRef.current) {
  //       const selectedOptionElement =
  //         optionsListRef.current.children[highlightedIndex + 1];
  //       if (selectedOptionElement) {
  //         selectedOptionElement.scrollIntoView({ block: "nearest" });
  //       }
  //     }
  //   } else if (event.key === "ArrowUp") {
  //     event.preventDefault();
  //     setHighlightedIndex((prevIndex) => (prevIndex <= 0 ? 0 : prevIndex - 1));
  //     if (optionsListRef.current && highlightedIndex >= 0) {
  //       const selectedOptionElement =
  //         optionsListRef.current.children[highlightedIndex - 1];
  //       if (selectedOptionElement) {
  //         selectedOptionElement.scrollIntoView({ block: "nearest" });
  //       }
  //     }
  //   }
  // };

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
          className={`group-hover:text-sky-500 transition duration-900 -mt-1`}
        >
          {title}
        </span>
        <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400 scale-75" />
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

export default CustomDropdown;
