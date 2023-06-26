import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "react-feather";

const StreakBox = ({ days, activeDay }: any) => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleDays = 53; // Number of days to show at a time

  const handlePrevClick = () => {
    setStartIndex(Math.max(0, startIndex - visibleDays));
  };

  const handleNextClick = () => {
    setStartIndex(
      Math.min(startIndex + visibleDays, days.length - visibleDays)
    );
  };

  return (
    <div className="flex items-center space-x-5">
      {startIndex > 0 && (
        <button
          onClick={handlePrevClick}
          className="arrow-button bg-gray-200 rounded-full p-2"
        >
          <ArrowLeft size={15} color="gray" />
        </button>
      )}

      <div className="streak-line w-full flex space-x-3">
        {days
          ?.slice(startIndex, startIndex + visibleDays)
          .map((day: any, index: any) => (
            <div
              key={index}
              className={`${
                activeDay && "bg-green-400"
              }streak-box w-2 h-2 rounded-full bg-gray-400`}
            ></div>
          ))}
      </div>

      {startIndex + visibleDays < days.length && (
        <button
          onClick={handleNextClick}
          className="arrow-button bg-gray-200 rounded-full p-2"
        >
          <ArrowRight size={15} color="gray" />
        </button>
      )}
    </div>
  );
};

export default StreakBox;
