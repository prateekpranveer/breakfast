import React from "react";
import { ArrowRight, Star } from "react-feather";
import bfs from "@/axios";
import Spinner from "./Spinner";

interface Breakfast {
  _id: string;
  price: number;
  foodName: string;
  foodIndex: number;
  complementry: string;
  foodDescription: string;
  foodImage: string;
}

const BreakfastShow = () => {
  const [allBreakfast, setallBreakfast] = React.useState<Array<Breakfast>>([]);

  React.useEffect(() => {
    const allBreakfasts = async () => {
      await bfs.get("/user/getfoodlist").then((res) => {
        setallBreakfast(res.data);
      });
    };
    allBreakfasts();
  }, []);

  return (
    <div>
      {!allBreakfast ? (
        <>
          <Spinner />
        </>
      ) : (
        <>
          <div className="mx-auto max-w-6xl px-12">
            {/* <h1 className="mb-8 text-2xl font-jost-300">
              Our Top Picked Breakfasts
            </h1> */}
            {/* <div className="flex flex-wrap gap-4">
              {allBreakfast?.map((p,id) => (
                <div key={id} className="w-80 shadow-lg border flex space-x-2 rounded-md">
                  <img
                    width={60}
                    className="rounded-md mr-4"
                    src={p.foodImage}
                    alt=""
                  />
                  <div className="">
                  <h1 className="font-pop-300 text-sm text-md mt-2">{p.foodName}</h1>
                  <div className="flex mt-1">
                  <Star size={14} color="gray"/>
                  <Star size={14} color="gray"/>
                  <Star size={14} color="gray"/>
                  <Star size={14} color="gray"/>
                  <Star size={14} color="gray"/>
                  </div>
                  </div>
                </div>
              ))}
            </div> */}
            <div className="mt-12 text-5xl font-pop-300 tracking-widest flex space-x-6 items-center">
              <h1>EXPLORE BREAKFASTS </h1>
              <span className="p-4 bg-pink-500 cursor-pointer hover:bg-pink-800 shadow-lg text-white rounded-full">
                <ArrowRight />
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default BreakfastShow;
