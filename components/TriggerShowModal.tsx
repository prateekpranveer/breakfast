import React from "react";
import { motion } from "framer-motion";
import { X } from "react-feather";

const TriggerShowModal = () => {
  const [favModal, setFavModal] = React.useState(false);

  return (
    <div className="font-jost-400">
      {favModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.01 }}
            className="shadow-xl border rounded-md bg-white max-w-fit px-20 py-12"
            style={{ position: "relative" }}
          >
            // Modal Data Start
            <>
              <h1 className="text-xl">Auto Breakfast Selection!</h1>
              <div className="mt-3 items-center space-y-6">
                <div>
                  <h1>
                    Let's Create a Favourite to trigger auto breakfast
                    selection!
                  </h1>
                </div>
                <div>
                  <button className="bg-pink-600 px-4 py-2 border-2 tracking-wider text-white rounded-md border-black">
                    Create Favourite
                  </button>
                </div>
              </div>
            </>
            //Modal Data End
            <div
              onClick={() => {
                setFavModal(false);
              }}
              className="absolute top-4 right-4 w-8 h-8 rounded-full border border-gray-500 flex items-center justify-center cursor-pointer"
            >
              <X size={14} color="gray" />
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default TriggerShowModal;
