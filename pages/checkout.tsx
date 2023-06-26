import React from "react";
import { ArrowUpRight } from "react-feather";
import { useSelector } from "react-redux";
import Head from "next/head";
import withAuth from "@/middlewares/authMiddleware";
import PaymentModal from "@/components/PaymentModal";
import bfs from "@/axios";
import { RootState } from "@/store/store";

const Checkout = () => {
  const [paymentModal, setpaymentModal] = React.useState(false);
  const { foodAcquired, streakPrice } = useSelector(
    (state: RootState) => state.streak
  );
  const [orderId, setorderId] = React.useState("");

  const paymentDetails = {
    orderId: orderId,
    amount: streakPrice,
  };

  const body = {
    data: streakPrice * 100,
  };

  React.useEffect(() => {
    const orderId = async () => {
      const sorderId = await bfs.post(`/ord/orderId`, body);
      console.log(sorderId);
      setorderId(sorderId.data?.order);
    };
    orderId();
  }, []);

  const openPaymentModal = () => {};

  if (foodAcquired.length === 0) {
    return <h1>Kindly Complete Your Current Streak to Pay!</h1>;
  } else {
    return (
      <div className="max-w-6xl mx-auto px-12">
        <Head>
          <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
        </Head>
        <div>
          <div className="flex font-pop-300 items-center space-x-4">
            <span>
              <ArrowUpRight size={30} color="#FF1493" />
            </span>
            <h1>Delivery by Every Morning between 7 A.M. to 9 A.M.</h1>
          </div>
        </div>
        <div className="mt-4 font-jost-400">
          <h1 className="font-jost-300 border max-w-fit py-2 px-4 rounded-md hover:bg-gray-100 cursor-pointer">
            Apply Coupan
          </h1>
        </div>

        <div className="mt-8 font-jost-400 text-gray-700 shadow-sm">
          <table className="max-w-fit divide-y divide-pink-400 text-sm">
            <thead className="bg-white">
              <tr>
                <th className="px-4 py-2 text-left font-xl uppercase tracking-wider">
                  Date
                </th>
                <th className="px-4 py-2 text-left font-xl uppercase tracking-wider">
                  Choice
                </th>
                <th className="px-4 py-2 text-left font-xl uppercase tracking-wider">
                  Price
                </th>
                <th className="px-4 py-2 text-left font-xl uppercase tracking-wider">
                  Complementry
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {foodAcquired?.map((p: any, id: any) => (
                <tr key={p.foodTaken.foodName}>
                  <td className="px-4 py-2 whitespace-nowrap">{`${p.defaultDate.month} ${p.defaultDate.date}`}</td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    {p.foodTaken?.foodName}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    ₹ {p.foodTaken.price}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    {p.foodTaken.complementry}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div>
          <div className="mt-12 text-sm px-6 py-2 border max-w-fit rounded-md bg-sky-500 text-white">
            <button onClick={() => setpaymentModal(true)}>Pay Now</button>
          </div>
        </div>

        {paymentModal && <PaymentModal data={paymentDetails} />}
      </div>
    );
  }
};

export default withAuth(Checkout);
