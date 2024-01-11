import React from "react";
import CommentItem from "./CommentItem";
import ReplyItem from "./ReplyItem";
import data from "../../../db.json";
import { classNames } from "../../../utils/common";

const Comments = () => {
  const commentsData = data.comments;

  return (
    <>
      {commentsData.map((comment, index) => {
        return comment.replies?.length > 0 ? (
          <div className="p-5 mb-5 rounded-xl bg-[#151f30ff]">
            <CommentItem key={index} comment={comment} />
            {comment.replies.map((reply) => (
              <ReplyItem reply={reply} commentId={comment.id} />
            ))}
          </div>
        ) : (
          <div className="p-5 mb-5 rounded-xl bg-[#151f30ff]">
            <CommentItem key={index} comment={comment} />
          </div>
        );
      })}
      <div
        className={`${classNames.container} lg:mx-18 mt-16 p-5 rounded-xl border border-[#2f80ed1a]`}
      >
        <div className="flex gap-5 flex-col">
          <textarea
            placeholder="Add comment"
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

export default Comments;
