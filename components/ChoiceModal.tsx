import React from "react";
import { X } from "react-feather";
import { useSelector } from "react-redux";
import { MODAL_OPEN, MODAL_CLOSE } from "@/store/addFast";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import bfs from "@/axios";
import { RootState } from "@/store/store";

const ChoiceModal = ({ data }: any) => {
  const [selectedOption, setSelectedOption] = React.useState<any>(null);
  const { date } = useSelector((state: RootState) => state.addBreakfast);
  const { streakId } = useSelector((state: RootState) => state.streak);
  const addFast = useSelector((state: RootState) => state.addBreakfast);

  const dispatch = useDispatch();
  const handleModal = () => {
    dispatch({
      type: MODAL_CLOSE,
    });
  };

  const handleBookBreakfast = async () => {
    const bookBreakfast = await bfs.post(
      `/user/aquireFood/${streakId}/${selectedOption._id}/${date}`
    );
    dispatch({
      type: MODAL_CLOSE,
    });
  };

  return (
    <div className="font-jost-300">
      {addFast.modelOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.01 }}
            className="shadow-xl border rounded-md bg-white max-w-fit px-20 py-12"
            style={{ position: "relative" }}
          >
            <div
              onClick={handleModal}
              className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center cursor-pointer"
            >
              <X size={14} color="gray" />
            </div>
            <div className="text-lg font-bold mb-4">
              What would you like to eat on {date}?
            </div>
            <select
              onChange={(e) => {
                const selectedValue = e.target.value;
                const selectedFood = data?.find(
                  (food: { foodName: string }) =>
                    food.foodName === selectedValue
                );
                setSelectedOption(selectedFood);
              }}
              className="h-12 border-gray-400 border-2 px-4 rounded-md mb-4"
            >
              {data?.map((p: any, id: any) => (
                <option key={id} value={p.foodName}>
                  {p.foodName}
                </option>
              ))}
            </select>
            <div className="text-sm font-jost-400 mb-4">
              <div>
                <h1>
                  Complementary:{" "}
                  <span className="font-jost-300 ">
                    {selectedOption?.complementry}
                  </span>
                </h1>
              </div>
              <div className="mt-4">
                <h1 className="flex space-x-2">
                  <p>You will earn:</p>
                  <span className="font-jost-300 flex space-x-2">
                    <p>4</p>
                    <img height={20} width={20} src="/cake.svg" alt="" />
                  </span>
                </h1>
              </div>
              <div className="text-sm mt-4">
                <h1>Health Benefits:</h1>
                <p className="font-jost-300 w-80">
                  {selectedOption?.foodDescription}
                </p>
              </div>
              <div className="mt-6 text-center">
                <button
                  onClick={handleBookBreakfast}
                  className="bg-pink-700 text-white py-2 px-4 rounded-md text-sm"
                >
                  Book Breakfast {date}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default ChoiceModal;
