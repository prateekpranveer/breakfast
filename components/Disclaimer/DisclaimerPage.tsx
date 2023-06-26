import React from "react";
import Footer from "../Footer";
import router from "next/router";
import { ArrowRight } from "react-feather";

const DisclaimerPage = ({ handlePageTransition }: any) => {
  const handleClick = () => {
    handlePageTransition("address"); // Transition to the 'address' page
  };
  return (
    <div className="flex">
      <div className="max-w-6xl p-12 mx-auto mt-10 h-12 w-full text-center tracking-widest font-pop-300">
        <div className="text-2xl text-slate-500">INTRODUCING</div>
        <div className="flex items-center justify-center mt-8">
          <img width={300} src="/logo.png" alt="" />
        </div>
        <h1 className="font-jost-300 tracking-normal text-xl mt-12 w-80 mx-auto">
          Ignite your mornings with a kaleidoscope of flavors and colors, as you
          wholeheartedly embrace the ritual of regular breakfast, fostering a
          radiant and exquisite existence.
        </h1>
        <div className="flex flex-col items-center">
          <div className="w-64 bg-gray-700 rounded-md text-white text-sm py-6 px-2 mt-12">
            <button onClick={handleClick} className="tracking-wider">
              Fetch My Current Location
            </button>
          </div>
          <div className="mt-16 flex space-x-3 items-center">
            <p className="tracking-wide font-jost-400 text-slate-600">
              What is Breakfast Streak and How it Works?
            </p>
            <div
              onClick={() => router.push("/disclaimar")}
              className="bg-gray-700 cursor-pointer shadow-lg p-2 rounded-full"
            >
              <ArrowRight size={16} color="white" />
            </div>
          </div>
        </div>
      </div>

      <div className="min-w-fit">
        <img src="/dinner.svg" alt="" />
      </div>
      <Footer />
    </div>
  );
};

export default DisclaimerPage;
