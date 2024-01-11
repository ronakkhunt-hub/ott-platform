import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import React, { useState } from "react";

interface Props {
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination = ({ totalPages, onPageChange }: Props) => {
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
            currentPage === 1 ? "text-blue-500" : ""
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
            i === currentPage ? "text-blue-500" : ""
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
            currentPage === totalPages ? "text-blue-500" : ""
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
        className={`flex justify-center items-center w-8 h-8 rounded-full cursor-pointer text-sm bg-[#141821ff] text-blue-500`}
        onClick={handlePrevPage}
      >
        <ArrowLeft className="w-4" />
      </div>
      {renderPageNumbers()}
      <div
        className={`flex justify-center items-center w-8 h-8 rounded-full cursor-pointer text-sm bg-[#141821ff] text-blue-500`}
        onClick={handleNextPage}
      >
        <ArrowRight className="w-4" />
      </div>
    </div>
  );
};
