import React from "react";

const Title = ({ text1, text2 }) => {
  return (
    <div className="inline-flex gap-2 items-center mb-3">
      <p className="w-20 sm:w-18 h-[1px] sm:h-[2px] bg-gray-500"></p>
      <p className="text-2xl font-semibold text-gray-700">
        {text1}{" "}
        <span className="text-2xl font-bold text-gray-900">{text2}</span>
      </p>
      <p className="w-20 sm:w-18 h-[1px] sm:h-[2px] bg-gray-900"></p>
    </div>
  );
};

export default Title;
