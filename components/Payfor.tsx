import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Plus } from "react-feather";
import Replica from "./Replica";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  SET_STREAK_ARRAY,
  SET_STREAK_ID,
  SET_STREAK_PRICE,
  SET_STREAK_SIZE,
} from "@/store/streak";
import ExtendStreakButton from "./ExtendStreakButton";
import bfs from "@/axios";
import { OPEN_CREATE_MODAL } from "@/store/createStreak";
import { RootState } from "@/store/store";

const Payfor = () => {
  const [pureUser, setpureUser] = useState(false);

  const router = useRouter();
  const dispatch = useDispatch();
  const auth = useSelector((state: RootState) => state.auth);
  const {streakSize} = useSelector((state: RootState) => state.streak);
  const { modelOpen } = useSelector((state: RootState) => state.addBreakfast);
  const { openCreateModal } = useSelector(
    (state: RootState) => state.streakCreate
  );

  const {foodAcquired, streakPrice} = useSelector((state: RootState) => state.streak);

  useEffect(() => {
    const checkPureUser = async () => {
      if (auth.userId) {
        const user = await bfs.get(`/user/getStreakSize/${auth.userId}`);
        if (user.data.streakSize === 0) {
          setpureUser(true);
        }
      }
    };
    checkPureUser();
  }, []);

  const handleDispatchCreateFirstStreak = () => {
    dispatch({
      type: OPEN_CREATE_MODAL,
    });
  };

  useEffect(() => {
    const getStreakDetails = async () => {
      if (auth.token) {
        const response = await bfs.get(`/user/getCurrentStreak/${auth.userId}`);
        
        dispatch({
          type: SET_STREAK_ARRAY,
          payload: response.data.foodAcquired,
        });
        dispatch({
          type: SET_STREAK_SIZE,
          payload: response.data.streakSize
        })
        dispatch({
          type: SET_STREAK_ID,
          payload: response.data._id,
        });
        dispatch({
          type: SET_STREAK_PRICE,
          payload: response.data.streakPrice,
        });
      }
    };
    getStreakDetails();
  }, [auth, modelOpen, openCreateModal]);

  if (!auth.token) {
    return (
      <>
        <div className="mt-4 font-jost-300">
          <p className="text-xl">Kindly Login before Creating a Streak!</p>
          <button
            onClick={() => router.push("/auth")}
            className="px-8 py-4 bg-sky-600 rounded-md shadow-md text-white mt-4"
          >
            Go to Login!
          </button>
        </div>
      </>
    );
  }

  return (
    <div className="">
      <div>
      </div>

      {pureUser ? (
        <>
          <div className="max-w-fit mt-4 mb-12">
            <button
              onClick={handleDispatchCreateFirstStreak}
              className="flex rounded-md font-jost-400 text-gray-600 space-x-4 text-lg items-center py-4 px-6 bg-gray-50 border"
            >
              <span>Create Streak</span>
              <span>
                <Plus color="gray" />
              </span>
            </button>
          </div>
        </>
      ) : (
        <>
          <div>
            <div className="flex mt-4 justify-between items-center font-jost-400 text-gray-600 mb-12">
              <div className="flex items-center space-x-4">
                <div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap min-w-fit max-w-fit gap-3 mb-12">
              {foodAcquired?.map((p: any, id: any) => (
                <div key={id}>
                  <Replica date={p.defaultDate} name={p.foodTaken?.foodName} />
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Payfor;
