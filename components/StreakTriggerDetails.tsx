import React from "react";
import ExtendStreakButton from "./ExtendStreakButton";

const StreakTriggerDetails = () => {
  return (
    <div>
      <div className="mt-4">
        <div className="w-full px-6 items-center rounded-lg font-mono-300 text-xs justify-between flex bg-slate-100 h-16">
          <div className="flex flex-col space-y-1">
            <div className="flex space-x-3 items-center">
              <h1 className="font-mono-400">YOUR CURRENT STREAK</h1>
              <button className="bg-slate-500 px-2 py-0.5 text-xs text-white rounded-md">
                Download Receipt
              </button>
            </div>
            <div className="flex space-x-4">
              <h1>Streak Type: PREMIUM</h1>
              <h1>Streak Price: INR 290.00</h1>
              <h1>Payment Status: PAID</h1>
            </div>
          </div>
          <div>
            <button>
              <h1 className="bg-pink-500 text-sm hover:bg-pink-800 text-white px-4 py-3 w-60 rounded-lg">
                <ExtendStreakButton/>
              </h1>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StreakTriggerDetails;
