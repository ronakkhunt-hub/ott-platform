import React, { useState } from "react";
import {
  EnvelopeIcon,
  HandThumbUpIcon,
  HandThumbDownIcon,
  ArrowUturnRightIcon,
  ArrowPathRoundedSquareIcon,
} from "@heroicons/react/24/outline";

import Pagination from "../../components/Pagination";
import { classNames } from "../../utils/common";

interface Props {}

const Insights: React.FC<Props> = ({}) => {
  const [tab, setTab] = useState("comment");

  const goToPage = () => {};

  return (
    <div className="mt-14">
      <div
        className={`${classNames.container} lg:mx-18 flex gap-20 items-start`}
      >
        <div className="w-3/5">
          <div className={`border-b h-[1px] w-5/5 border-[#2f80ed1a]`} />
          <div className="mt-8">
            <div className="flex gap-8 items-center">
              <div
                className={`flex gap-2 items-center text-2xl text-white transition-opacity duration-1000 cursor-pointer ${
                  tab === "comment" ? "opacity-100" : "opacity-50"
                } hover:opacity-100`}
                onClick={() => setTab("comment")}
              >
                Comments
                <span className="inline-flex items-center rounded-md bg-blue-600 px-1.5 py-0.5 text-xs font-medium text-white ring-1 ring-inset ring-gray-500/10">
                  5
                </span>
              </div>
              <div
                className={`flex gap-2 items-center text-2xl text-white transition-opacity duration-1000 cursor-pointer ${
                  tab === "review" ? "opacity-100" : "opacity-50"
                } hover:opacity-100`}
                onClick={() => setTab("review")}
              >
                Reviews
                <span className="inline-flex items-center rounded-md bg-blue-600 px-1.5 py-0.5 text-xs font-medium text-white ring-1 ring-inset ring-gray-500/10">
                  3
                </span>
              </div>
            </div>
            {tab === "comment" && (
              <div className={`text-white mt-6 animate-fade-in-down`}>
                <div className="p-5 mb-5 rounded-xl bg-[#151f30ff]">
                  <div className="flex gap-4 items-center">
                    <img
                      className="rounded-lg"
                      src="https://flixtv.volkovdesign.com/main/img/avatar.svg"
                    />
                    <div>
                      Brian Cranston
                      <div className="text-xs">30.08.2021, 17:53</div>
                    </div>
                  </div>
                  <div
                    className={`border-b mb-4 h-[1px] w-5/5 mt-6 border-[#2f80ed1a]`}
                  />
                  <h1>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum, you need to be sure there isn't
                    anything embarrassing hidden in the middle of text.
                  </h1>
                  <div
                    className={`border-b mb-4 h-[1px] w-5/5 mt-6 border-[#2f80ed1a]`}
                  />
                  <div className="flex justify-between">
                    <div className="flex gap-4 items-center">
                      <div className="flex gap-2 items-center cursor-pointer">
                        <HandThumbUpIcon className="w-5 h-5" />
                        12
                      </div>
                      <div
                        className={`border-l h-[15px] w-[1px] border-[#2f80ed1a]`}
                      />
                      <div className="flex gap-2 items-center cursor-pointer">
                        <HandThumbDownIcon className="w-5 h-5" />7
                      </div>
                    </div>
                    <div className="flex gap-4 items-center">
                      <div className="flex gap-2 items-center text-sm cursor-pointer transition-colors duration-700 hover:text-blue-600">
                        <ArrowUturnRightIcon className="w-4 h-4 stroke-blue-600" />
                        REPLY
                      </div>
                      <div className="flex gap-2 items-center text-sm cursor-pointer transition-colors duration-700 hover:text-blue-600">
                        <ArrowPathRoundedSquareIcon className="w-4 h-4 stroke-blue-600" />
                        QUOTE
                      </div>
                    </div>
                  </div>
                  <div className="p-5 mt-5 ml-8 rounded-xl bg-[#1e293bff]">
                    <div className="flex gap-4 items-center">
                      <img
                        className="rounded-lg"
                        src="https://flixtv.volkovdesign.com/main/img/avatar.svg"
                      />
                      <div>
                        Jesse Plemons
                        <div className="text-xs">24.08.2021, 16:41</div>
                      </div>
                    </div>
                    <div
                      className={`border-b mb-4 h-[1px] w-5/5 mt-6 border-[#2f80ed1a]`}
                    />
                    <h1>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </h1>
                    <div
                      className={`border-b mb-4 h-[1px] w-5/5 mt-6 border-[#2f80ed1a]`}
                    />
                    <div className="flex justify-between">
                      <div className="flex gap-4 items-center">
                        <div className="flex gap-2 items-center cursor-pointer">
                          <HandThumbUpIcon className="w-5 h-5" />
                          12
                        </div>
                        <div
                          className={`border-l h-[15px] w-[1px] border-[#2f80ed1a]`}
                        />
                        <div className="flex gap-2 items-center cursor-pointer">
                          <HandThumbDownIcon className="w-5 h-5" />7
                        </div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <div className="flex gap-2 items-center text-sm cursor-pointer transition-colors duration-700 hover:text-blue-600">
                          <ArrowUturnRightIcon className="w-4 h-4 stroke-blue-600" />
                          REPLY
                        </div>
                        <div className="flex gap-2 items-center text-sm cursor-pointer transition-colors duration-700 hover:text-blue-600">
                          <ArrowPathRoundedSquareIcon className="w-4 h-4 stroke-blue-600" />
                          QUOTE
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-5 mt-5 ml-8 rounded-xl bg-[#1e293bff]">
                    <div className="flex gap-4 items-center">
                      <img
                        className="rounded-lg"
                        src="https://flixtv.volkovdesign.com/main/img/avatar.svg"
                      />
                      <div>
                        Jesse Plemons
                        <div className="text-xs">24.08.2021, 16:41</div>
                      </div>
                    </div>
                    <div
                      className={`border-b mb-4 h-[1px] w-5/5 mt-6 border-[#2f80ed1a]`}
                    />
                    <h1>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </h1>
                    <div
                      className={`border-b mb-4 h-[1px] w-5/5 mt-6 border-[#2f80ed1a]`}
                    />
                    <div className="flex justify-between">
                      <div className="flex gap-4 items-center">
                        <div className="flex gap-2 items-center cursor-pointer">
                          <HandThumbUpIcon className="w-5 h-5" />
                          12
                        </div>
                        <div
                          className={`border-l h-[15px] w-[1px] border-[#2f80ed1a]`}
                        />
                        <div className="flex gap-2 items-center cursor-pointer">
                          <HandThumbDownIcon className="w-5 h-5" />7
                        </div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <div className="flex gap-2 items-center text-sm cursor-pointer transition-colors duration-700 hover:text-blue-600">
                          <ArrowUturnRightIcon className="w-4 h-4 stroke-blue-600" />
                          REPLY
                        </div>
                        <div className="flex gap-2 items-center text-sm cursor-pointer transition-colors duration-700 hover:text-blue-600">
                          <ArrowPathRoundedSquareIcon className="w-4 h-4 stroke-blue-600" />
                          QUOTE
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-5 mt-5 ml-8 rounded-xl bg-[#1e293bff]">
                    <div className="flex gap-4 items-center">
                      <img
                        className="rounded-lg"
                        src="https://flixtv.volkovdesign.com/main/img/avatar.svg"
                      />
                      <div>
                        Matt Jones
                        <div className="text-xs">11.08.2021, 11:11</div>
                      </div>
                    </div>
                    <div
                      className={`border-b mb-4 h-[1px] w-5/5 mt-6 border-[#2f80ed1a]`}
                    />
                    <h1>
                      It has survived not only five centuries, but also the leap
                      into electronic typesetting, remaining essentially
                      unchanged. It was popularised in the 1960s with the
                      release of Letraset sheets containing Lorem Ipsum
                      passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </h1>
                    <div
                      className={`border-b mb-4 h-[1px] w-5/5 mt-6 border-[#2f80ed1a]`}
                    />
                    <div className="flex justify-between">
                      <div className="flex gap-4 items-center">
                        <div className="flex gap-2 items-center cursor-pointer">
                          <HandThumbUpIcon className="w-5 h-5" />
                          12
                        </div>
                        <div
                          className={`border-l h-[15px] w-[1px] border-[#2f80ed1a]`}
                        />
                        <div className="flex gap-2 items-center cursor-pointer">
                          <HandThumbDownIcon className="w-5 h-5" />7
                        </div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <div className="flex gap-2 items-center text-sm cursor-pointer transition-colors duration-700 hover:text-blue-600">
                          <ArrowUturnRightIcon className="w-4 h-4 stroke-blue-600" />
                          REPLY
                        </div>
                        <div className="flex gap-2 items-center text-sm cursor-pointer transition-colors duration-700 hover:text-blue-600">
                          <ArrowPathRoundedSquareIcon className="w-4 h-4 stroke-blue-600" />
                          QUOTE
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-5 mb-5 rounded-xl bg-[#151f30ff]">
                  <div className="flex gap-4 items-center">
                    <img
                      className="rounded-lg"
                      src="https://flixtv.volkovdesign.com/main/img/avatar.svg"
                    />
                    <div>
                      Jonathan Banks
                      <div className="text-xs">02.08.2021, 15:24</div>
                    </div>
                  </div>
                  <div
                    className={`border-b mb-4 h-[1px] w-5/5 mt-6 border-[#2f80ed1a]`}
                  />
                  <h1>
                    Many desktop publishing packages and web page editors now
                    use Lorem Ipsum as their default model text, and a search
                    for 'lorem ipsum' will uncover many web sites still in their
                    infancy. Various versions have evolved over the years,
                    sometimes by accident, sometimes on purpose (injected humour
                    and the like).
                  </h1>
                  <div
                    className={`border-b mb-4 h-[1px] w-5/5 mt-6 border-[#2f80ed1a]`}
                  />
                  <div className="flex justify-between">
                    <div className="flex gap-4 items-center">
                      <div className="flex gap-2 items-center cursor-pointer">
                        <HandThumbUpIcon className="w-5 h-5" />
                        12
                      </div>
                      <div
                        className={`border-l h-[15px] w-[1px] border-[#2f80ed1a]`}
                      />
                      <div className="flex gap-2 items-center cursor-pointer">
                        <HandThumbDownIcon className="w-5 h-5" />7
                      </div>
                    </div>
                    <div className="flex gap-4 items-center">
                      <div className="flex gap-2 items-center text-sm cursor-pointer transition-colors duration-700 hover:text-blue-600">
                        <ArrowUturnRightIcon className="w-4 h-4 stroke-blue-600" />
                        REPLY
                      </div>
                      <div className="flex gap-2 items-center text-sm cursor-pointer transition-colors duration-700 hover:text-blue-600">
                        <ArrowPathRoundedSquareIcon className="w-4 h-4 stroke-blue-600" />
                        QUOTE
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-5 mb-5 rounded-xl bg-[#151f30ff]">
                  <div className="flex gap-4 items-center">
                    <img
                      className="rounded-lg"
                      src="https://flixtv.volkovdesign.com/main/img/avatar.svg"
                    />
                    <div>
                      Tess Harper
                      <div className="text-xs">07.08.2021, 14:33</div>
                    </div>
                  </div>
                  <div
                    className={`border-b mb-4 h-[1px] w-5/5 mt-6 border-[#2f80ed1a]`}
                  />
                  <h1>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum, you need to be sure there isn't
                    anything embarrassing hidden in the middle of text.
                  </h1>
                  <div
                    className={`border-b mb-4 h-[1px] w-5/5 mt-6 border-[#2f80ed1a]`}
                  />
                  <div className="flex justify-between">
                    <div className="flex gap-4 items-center">
                      <div className="flex gap-2 items-center cursor-pointer">
                        <HandThumbUpIcon className="w-5 h-5" />
                        12
                      </div>
                      <div
                        className={`border-l h-[15px] w-[1px] border-[#2f80ed1a]`}
                      />
                      <div className="flex gap-2 items-center cursor-pointer">
                        <HandThumbDownIcon className="w-5 h-5" />7
                      </div>
                    </div>
                    <div className="flex gap-4 items-center">
                      <div className="flex gap-2 items-center text-sm cursor-pointer transition-colors duration-700 hover:text-blue-600">
                        <ArrowUturnRightIcon className="w-4 h-4 stroke-blue-600" />
                        REPLY
                      </div>
                      <div className="flex gap-2 items-center text-sm cursor-pointer transition-colors duration-700 hover:text-blue-600">
                        <ArrowPathRoundedSquareIcon className="w-4 h-4 stroke-blue-600" />
                        QUOTE
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center mt-7 items-center px-5 py-4 rounded-xl bg-[#2f80ed1a]">
                  <Pagination totalPages={10} onPageChange={goToPage} />
                </div>
              </div>
            )}
            {tab === "review" && (
              <div className={`text-white  animate-fade-in-down`}>
                <h1>Review</h1>
                <h1>Review</h1>
                <h1>Review</h1>
                <h1>Review</h1>
                <h1>Review</h1>
                <h1>Review</h1>
                <h1>Review</h1>
                <h1>Review</h1>
                <h1>Review</h1>
                <h1>Review</h1>
                <h1>Review</h1>
              </div>
            )}
          </div>

          <div
            className={`${classNames.container} lg:mx-18 mt-16 p-5 rounded-xl border border-[#2f80ed1a]`}
          >
            <div className="flex gap-5 flex-col">
              <textarea
                placeholder="Add comment"
                className="w-full px-5 py-3 rounded-xl bg-[#151f30ff]"
                rows={5}
              ></textarea>
              <button className="bg-blue-600 text-white rounded-xl py-3 w-1/4">
                Send
              </button>
            </div>
          </div>
        </div>
        <div className="w-auto border border-[#2f80ed1a] p-8 rounded-2xl">
          <div className="flex flex-col gap-5 items-center">
            <EnvelopeIcon
              className="w-10 h-10 stroke-blue-600"
              strokeWidth={2}
            />
            <h1 className="text-2xl text-white">Notifications</h1>
            <p className="text-base text-white">
              Subscribe to notifications about new episodes
            </p>
            <input
              type="email"
              placeholder="Email"
              className="pl-4 w-full h-10 bg-[#2f80ed1a] text-white transition-all duration-700 outline-none focus:outline focus:outline-blue-600 rounded-xl"
            />
            <button className="w-full bg-blue-500 py-3 rounded-2xl text-white">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insights;
