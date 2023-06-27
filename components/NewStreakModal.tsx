import React from "react";
import { motion } from "framer-motion";
import { X } from "react-feather";
import { useSelector, useDispatch } from "react-redux";
import { MODAL_CLOSE } from "@/store/addFast";
import { CLOSE_CREATE_MODAL } from "@/store/createStreak";
import Selection from "./Selection";
import bfs from "@/axios";
import { RootState } from "@/store/store";
import SubscriptionComponent from "./SubscriptionComponent";

const NewStreakModal = () => {
  const {openCreateModal} = useSelector((state: RootState) => state.streakCreate);
  console.log(openCreateModal)
  const {selected_timeline} = useSelector((state: RootState) => state.range);
  const auth = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const handleModal = () => {
    dispatch({
      type: MODAL_CLOSE,
    });
  };

  const handleCreateNewStreak = async () => {
    const extend = await bfs.post(
      `/user/createNewStreak/${auth.userId}/${selected_timeline}`
    );
  };

  return (
    <div className="font-jost-300">
      {openCreateModal && (
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
              onClick={() => {
                dispatch({
                  type: CLOSE_CREATE_MODAL,
                });
              }}
              className="absolute top-4 right-4 w-8 h-8 rounded-full border border-gray-500 flex items-center justify-center cursor-pointer"
            >
              <X size={14} color="gray" />
            </div>

            <div className="text-2xl mb-3">
              Let's Create a New Streak!
            </div>
            <SubscriptionComponent/>
            <button
              onClick={() => {
                handleCreateNewStreak();
                dispatch({
                  type: CLOSE_CREATE_MODAL,
                });
              }}
              className="text-sm font-pop-300 tracking-wider mt-8 px-6 py-4 rounded-md border bg-pink-600 text-white"
            >
              PROCEED TO CREATE
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default NewStreakModal;
