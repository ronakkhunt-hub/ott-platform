import React from "react";

interface Props {
  className?: string;
}

export const Logo: React.FC<Props> = ({ className }) => {
  return (
    <a href="/" className={className}>
      <div className="text-white text-3xl font-bold uppercase">
        Pro
        <span className="text-sm text-blue-500 font-bold ml-1">TV</span>
      </div>
    </a>
  );
};
