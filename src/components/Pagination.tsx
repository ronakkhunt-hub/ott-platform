import React, { useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

interface Props {
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ totalPages, onPageChange }: Props) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;

    const hasMorePagesThanVisible = totalPages > maxVisiblePages;

    const startPage = Math.max(
      1,
      currentPage - Math.floor(maxVisiblePages / 2)
    );
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (
      hasMorePagesThanVisible &&
      currentPage > Math.floor(maxVisiblePages / 2) + 1
    ) {
      pageNumbers.push(
        <div
          className={`flex justify-center items-center w-8 h-8 rounded-full cursor-pointer text-sm bg-[#141821ff] ${
            currentPage === 1 ? "text-blue-600" : ""
          }`}
          onClick={() => handlePageChange(1)}
        >
          1
        </div>
      );
      pageNumbers.push(<span key="ellipsis1">...</span>);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <div
          className={`flex justify-center items-center w-8 h-8 rounded-full cursor-pointer text-sm bg-[#141821ff] ${
            i === currentPage ? "text-blue-600" : ""
          }`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </div>
      );
    }

    if (
      hasMorePagesThanVisible &&
      currentPage < totalPages - Math.floor(maxVisiblePages / 2)
    ) {
      pageNumbers.push(<span key="ellipsis1">...</span>);
      pageNumbers.push(
        <div
          className={`flex justify-center items-center w-8 h-8 rounded-full cursor-pointer text-sm bg-[#141821ff] ${
            currentPage === totalPages ? "text-blue-600" : ""
          }`}
          onClick={() => handlePageChange(totalPages)}
        >
          {totalPages}
        </div>
      );
    }

    return pageNumbers;
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  return (
    <div className="flex gap-2">
      <div
        className={`flex justify-center items-center w-8 h-8 rounded-full cursor-pointer text-sm bg-[#141821ff] text-blue-600`}
        onClick={handlePrevPage}
      >
        <ArrowLeftIcon className="w-4" />
      </div>
      {renderPageNumbers()}
      <div
        className={`flex justify-center items-center w-8 h-8 rounded-full cursor-pointer text-sm bg-[#141821ff] text-blue-600`}
        onClick={handleNextPage}
      >
        <ArrowRightIcon className="w-4" />
      </div>
    </div>
  );
};

export default Pagination;
