import React, { useState } from "react";

import { CustomDropdown } from "./CustomDropdown";
import { classNames, genreList, yearList } from "../utils/common";

const dropdownData = [
  {
    title: "All genres",
    items: genreList,
    isOpen: false,
  },
  {
    title: "All the years",
    items: yearList,
    isOpen: false,
  },
];

export interface DropdownItem {
  title: string;
  items: string[];
  isOpen: boolean;
}

interface MenuItemProps {
  menuName: string;
  isActive: boolean;
  onClick: (menuName: string) => void;
}

export const FilterSection: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState("Featured");
  const [indicatorStyle, setIndicatorStyle] = useState<React.CSSProperties>({
    width: "99px",
    transform: "translateX(8px)",
  });
  const [dropdowns, setDropdowns] = useState<DropdownItem[]>(dropdownData);

  const handleMenuClick = (menuName: string) => {
    const button = document.getElementById(menuName) as HTMLButtonElement;
    const indicatorWidth = button.offsetWidth;
    const indicatorOffset = button.offsetLeft;

    setIndicatorStyle({
      width: `${indicatorWidth}px`,
      transform: `translateX(${indicatorOffset}px)`,
    });

    setActiveMenu(menuName);
  };

  const toggleDropdown = (index?: number) => {
    const updated = dropdowns.map((item, i) => ({
      ...item,
      isOpen: index === undefined ? false : index === i ? !item.isOpen : false,
    }));
    setDropdowns(updated);
  };

  return (
    <div className={`${classNames.container}`}>
      <div className="flex justify-between flex-col gap-5 md:flex-row bg-[#151f30ff] mt-10 p-6 py-5 rounded-2xl">
        <div className="flex gap-3">
          {dropdowns.map((item, index: number) => (
            <CustomDropdown
              index={index}
              dropdownItem={item}
              toggleDropdown={toggleDropdown}
            />
          ))}
        </div>

        <div className="flex rounded-2xl bg-[#141821ff] relative">
          <div className="flex p-2">
            <MenuItem
              menuName="Featured"
              isActive={activeMenu === "Featured"}
              onClick={handleMenuClick}
            />
            <MenuItem
              menuName="Popular"
              isActive={activeMenu === "Popular"}
              onClick={handleMenuClick}
            />
            <MenuItem
              menuName="Newest"
              isActive={activeMenu === "Newest"}
              onClick={handleMenuClick}
            />
            <div
              className="absolute left-0 top-2 bg-[#151f30ff] h-7 rounded-lg transition-transform duration-300 z-0"
              style={indicatorStyle}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const MenuItem = ({ menuName, isActive, onClick }: MenuItemProps) => {
  return (
    <>
      <button
        id={menuName}
        className={`z-10 ${
          isActive ? "text-blue-500" : "text-white"
        } px-3 md:px-4 pt-0.5 rounded-lg transition duration-300`}
        onClick={() => onClick(menuName)}
      >
        {menuName}
      </button>
    </>
  );
};
