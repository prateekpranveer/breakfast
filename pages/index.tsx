import Payfor from "@/components/Payfor";
import React, { useEffect, useReducer } from "react";
import { useSelector } from "react-redux";
import { styled } from "styled-components";
import bfs from "../axios";
import BreakfastShow from "@/components/BreakfastShow";
import Footer from "@/components/Footer";
import NewStreakModal from "@/components/NewStreakModal";
import withAuth from "@/middlewares/authMiddleware";
import TriggerShowModal from "@/components/TriggerShowModal";
import StreakTriggerDetails from "@/components/StreakTriggerDetails";
import AlertModal from "@/components/AlertModal";

const index = () => {
  const [foodList, setfoodList] = React.useState();

  useEffect(() => {
    const foodListing = async () => {
      const food = await bfs.get("/user/getfoodlist");
      setfoodList(food.data);
    };
    foodListing();
  }, []);

  return (
    <div>
      <div className="max-w-6xl px-12 mx-auto">
        <StreakTriggerDetails/>
        <Payfor/>
      </div>
      <AlertModal isOpen={true} onClose={true} message={'This is a title box'} />
      <TriggerShowModal />
      <NewStreakModal/>
      <div className="mt-10 mb-64">
        <BreakfastShow />
      </div>
      <Footer />
    </div>
  );
};

export default withAuth(index);

const Element = styled.div``;
