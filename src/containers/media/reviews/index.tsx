import React from "react";
import ReviewItem from "./ReviewItem";
import data from "../../../db.json";
import { classNames } from "../../../utils/common";

const Reviews = () => {
  const reviewsData = data.reviews;

  return (
    <>
      {reviewsData.map((review, index) => (
        <ReviewItem key={index} review={review} />
      ))}
      <div
        className={`${classNames.container} lg:mx-18 mt-16 p-5 rounded-xl border border-[#2f80ed1a]`}
      >
        <div className="flex gap-5 flex-col">
          <div className="flex gap-5">
            <input
              type="text"
              placeholder="Title"
              className="pl-5 h-10 w-3/4 rounded-xl bg-[#151f30ff] transition-all duration-700 outline-none focus:outline focus:outline-blue-500"
            />
            <select className="h-10 pl-2 w-1/4 outline-none rounded-xl bg-[#151f30ff]">
              <option value="">Rating</option>
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
              <option value="">5</option>
              <option value="">6</option>
              <option value="">7</option>
              <option value="">8</option>
              <option value="">9</option>
              <option value="">10</option>
            </select>
          </div>
          <textarea
            placeholder="Add review"
            className="resize-none w-full px-5 py-3 rounded-xl bg-[#151f30ff] transition-all duration-700 outline-none focus:outline focus:outline-blue-500"
            rows={5}
          ></textarea>
          <button className="bg-blue-500 text-white rounded-xl py-3 w-1/4">
            Send
          </button>
        </div>
      </div>
    </>
  );
};

export default Reviews;
