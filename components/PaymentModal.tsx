import React from 'react'
import { X } from 'react-feather';
import {motion} from 'framer-motion'
import bfs from '@/axios';

declare global {
  interface Window {
    Razorpay: any;
  }
}

const PaymentModal = ({data}:any) => {
    const openCreate = true;

    const options = {
      key: 'rzp_test_oqsvenAUM3yMxq', // Replace with your Razorpay Key ID
      amount: data.amount, // Replace with the actual amount in paise
      currency: 'INR',
      name: 'Streaks Private Limited',
      description: 'Test Transaction',
      image: 'https://example.com/your_logo',
      order_id: data.orderId, // Pass the actual order ID obtained from the backend
      handler: function (response:any) {
        const paymentData = {
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_order_id: response.razorpay_order_id,
          razorpay_signature: response.razorpay_signature,
        };
      
        // Send payment data to backend for verification
        bfs.post('/ord/payment/verify', { response: paymentData })
          .then((res) => {
            const { signatureIsValid } = res.data;
            console.log(signatureIsValid)
            if (signatureIsValid) {
              // Payment is verified and successful
              console.log('Payment verification successful');
            } else {
              // Payment verification failed
              console.log('Payment verification failed');
            }
          })
          .catch((error) => {
            console.log('Error verifying payment:', error);
          });
      }
      ,
      prefill: {
        name: 'Gaurav Kumar',
        email: 'gaurav.kumar@example.com',
        contact: '9000090000',
      },
      notes: {
        address: 'Razorpay Corporate Office',
      },
      theme: {
        color: '#b82580',
      },
    };


    function initiatePaymentGateway() {
      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    }

    return (
        <div className="font-jost-300">
          {openCreate && (
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.01 }}
                className="shadow-xl border rounded-md bg-white max-w-fit px-20 py-12"
                style={{ position: "relative" }}
              >
               
           
            <>
            <h1>orderId: {data.orderId}</h1>
            <h1>Amount: {data.amount}</h1>
            <button onClick={initiatePaymentGateway} className='border px-3 py-1 mt-3'>Pay Now</button>
            </>

              </motion.div>
            </div>
          )}
        </div>
      );
}

export default PaymentModal