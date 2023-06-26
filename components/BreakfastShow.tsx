import React from "react";
import { ArrowRight } from "react-feather";
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
            <h1 className="mb-8 text-2xl font-jost-300">
              Our Top Picked Breakfasts
            </h1>
            <div className="flex flex-wrap gap-4">
              {allBreakfast?.map((p,id) => (
                <div key={id} className="w-48">
                  <img
                    width={170}
                    className="rounded-md"
                    src={p.foodImage}
                    alt=""
                  />
                  <h1 className="font-jost-400 text-md mt-2">{p.foodName}</h1>
                </div>
              ))}
            </div>
            <div className="mt-12 text-5xl font-pop-300 tracking-widest flex space-x-6 items-center">
              <h1>EXPLORE MORE BREAKFASTS </h1>
              <span className="p-6 bg-pink-700 text-white rounded-full">
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
