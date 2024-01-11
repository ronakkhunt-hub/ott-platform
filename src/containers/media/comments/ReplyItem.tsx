import React, { useState } from "react";
import {
  Loop,
  Reply,
  Send,
  ThumbDownOffAlt,
  ThumbUpOffAlt,
  UTurnLeft,
} from "@mui/icons-material";
import { scrollTo } from "../../../utils/common";

interface Props {
  reply: ReplyProps;
  commentId: string;
}

export interface ReplyProps {
  id: string;
  sender?: {
    name: string;
    profile: string;
  };
  receiver?: {
    name: string;
    profile: string;
  };
  message: string;
  repliedTo?: string;
  createdAt: string;
  likes: number;
  dislikes: number;
}

const ReplyItem: React.FC<Props> = ({ reply, commentId }) => {
  const {
    id,
    sender,
    receiver,
    message,
    repliedTo,
    createdAt,
    likes,
    dislikes,
  } = reply;
  const [isReplying, setIsReplying] = useState(false);

  return (
    <>
      <div
        id={`${commentId}-${id}`}
        className="p-5 mt-5 ml-8 rounded-xl bg-[#1e293bff]"
      >
        <div className="flex gap-4 items-center">
          <img className="rounded-lg" src={sender?.profile} />
          <div>
            {sender?.name}
            <div className="text-xs">{createdAt}</div>
          </div>
        </div>
        <div
          className={`border-b mb-4 h-[1px] w-5/5 mt-6 border-[#2f80ed1a]`}
        />
        {repliedTo ? (
          <div
            className="text-blue-500 cursor-pointer"
            onClick={() => scrollTo(`${commentId}-${repliedTo}`)}
          >
            @{receiver?.name}
          </div>
        ) : (
          <div
            className="text-blue-500 cursor-pointer"
            onClick={() => scrollTo(commentId)}
          >
            @{receiver?.name}
          </div>
        )}
        <h1>{message}</h1>
        <div
          className={`border-b mb-4 h-[1px] w-5/5 mt-6 border-[#2f80ed1a]`}
        />
        <div className="flex justify-between">
          <div className="flex gap-4 items-center">
            <div className="flex gap-2 items-center cursor-pointer">
              <ThumbUpOffAlt className="w-5 h-5" />
              {likes}
            </div>
            <div className={`border-l h-[15px] w-[1px] border-[#2f80ed1a]`} />
            <div className="flex gap-2 items-center cursor-pointer">
              <ThumbDownOffAlt className="w-5 h-5" />
              {dislikes}
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <div
              className="flex gap-2 items-center text-sm cursor-pointer transition-colors duration-700 hover:text-blue-500"
              onClick={() => setIsReplying(!isReplying)}
            >
              <Reply className="w-4 h-4 fill-blue-500" />
              <div className="hidden sm:block">REPLY</div>
            </div>
            <div className="flex gap-2 items-center text-sm cursor-pointer transition-colors duration-700 hover:text-blue-500">
              <Loop className="w-4 h-4 fill-blue-500" />
              <div className="hidden sm:block">QUOTE</div>
            </div>
          </div>
        </div>
      </div>
      {isReplying && (
        <div className="relative flex gap-3 sm:gap-5 flex-col sm:flex-row items-center p-5 mt-5 ml-8 rounded-xl bg-[#1e293bff]">
          <input
            type="text"
            placeholder="Enter comment"
            className="h-10 w-full pl-5 pr-12 outline-none rounded-xl text-gray-800"
          />
          <div
            className="absolute right-8"
            onClick={() => setIsReplying(false)}
          >
            <Send className="fill-blue-500" />
          </div>
        </div>
      )}
    </>
  );
};

export default ReplyItem;
