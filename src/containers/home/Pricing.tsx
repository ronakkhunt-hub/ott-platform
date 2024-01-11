import React from "react";

import { classNames, plans } from "../../utils/common";
import { Check, Close } from "@mui/icons-material";

export const Pricing: React.FC = () => {
  return (
    <div className="relative --gradient">
      <div className={`${classNames.container} relative mt-5 pb-20 z-10`}>
        <h1 className="text-4xl text-white mb-4">Select Your Plan</h1>
        <div className="text-lg text-white">
          No hidden fees, equipment rentals, or installation appointments.
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 lg:gap-8 mt-10">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`${
                index === 1
                  ? "row-start-1 sm:row-start-1 col-start-1 col-span-3 lg:col-start-2 lg:col-span-1"
                  : index === 0
                  ? "row-start-2 col-start-1 md:row-start-2 md:col-start-1 lg:row-start-1 lg:col-start-1 mt-8 sm:mr-4 lg:mt-0 lg:mr-0"
                  : "row-start-3 col-start-1 md:row-start-2 md:col-start-2 lg:row-start-1 lg:col-start-3 mt-8 sm:ml-4 lg:mt-0 lg:ml-0"
              } text-white rounded-2xl p-6 ${
                plan.highlight ? "bg-[#2c71d1ff]" : "bg-[#151f30ff]"
              }`}
            >
              <h2 className="text-xl font-semibold mb-4">{plan.name}</h2>
              <div
                className={`mb-4 border-b h-[1px] w-5/5 ${
                  plan.highlight ? "border-[#151f3033]" : "border-[#2f80ed1a]"
                }`}
              />
              <ul className="mb-4">
                {plan.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex gap-2 items-center mb-2 text-base"
                  >
                    {feature.available ? (
                      <Check className="w-4 h-4 fill-[#29b474]" />
                    ) : (
                      <Close className="w-4 h-4 fill-[#ff0000ff]" />
                    )}
                    {feature.title}
                  </li>
                ))}
              </ul>
              <div
                className={`border-b mb-4 h-[1px] w-5/5 ${
                  plan.highlight ? "border-[#151f3033]" : "border-[#2f80ed1a]"
                }`}
              />
              <p className="text-4xl font-bold mb-4">
                {plan.price}
                <span className="text-base">/month</span>
              </p>
              <button
                className={`w-full bg-[#141821ff] text-white px-4 py-4 transition duration-700 rounded-lg ${
                  plan.highlight
                    ? "hover:bg-white hover:text-[#141821ff]"
                    : "hover:bg-[#2f80ed]"
                }`}
              >
                SELECT PLAN
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
