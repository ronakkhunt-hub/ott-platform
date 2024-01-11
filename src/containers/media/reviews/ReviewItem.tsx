import { StarPurple500 } from "@mui/icons-material";
import React from "react";

interface Props {
  review: ReviewItemProps;
}

export interface ReviewItemProps {
  user?: {
    name: string;
    profile: string;
  };
  message: string;
  description: string;
  createdAt: string;
  rating: number;
}

const ReviewItem: React.FC<Props> = ({ review }) => {
  const { user, message, description, createdAt, rating } = review;

  return (
    <>
      <div className="p-5 mt-5 rounded-xl bg-[#151f30ff]">
        <div className="flex justify-between">
          <div className="flex gap-4 items-center">
            <img className="rounded-lg" src={user?.profile} />
            <div>
              {message}
              <div className="text-xs">
                {createdAt} By {user?.name}
              </div>
            </div>
          </div>
          <div className="flex gap-1 items-center">
            <StarPurple500 className="w-5 h-5 fill-blue-500" />
            {rating}
          </div>
        </div>
        <div
          className={`border-b mb-4 h-[1px] w-5/5 mt-6 border-[#2f80ed1a]`}
        />
        <h1>{description}</h1>
      </div>
    </>
  );
};

export default ReviewItem;
