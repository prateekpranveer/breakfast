import React from "react";
import Footer from "../Footer";
import router from "next/router";
import { ArrowRight, Map, MapPin } from "react-feather";
import ButtonLoading from "../ButtonLoading";
import { useDispatch } from "react-redux";
import { REQUEST_GEOLOCATION_FILL } from "@/store/register";

const DisclaimerPage = ({ handlePageTransition }: any) => {

  const [locationButtonLoading, setlocationButtonLoading] = React.useState(false)
  const [longitude, setlongitude] = React.useState<any>()
  const [latitude, setlatitude] = React.useState<any>()
  const dispatch  = useDispatch()

  const handleClick = async () => {
    setlocationButtonLoading(!locationButtonLoading) 

    navigator.geolocation.getCurrentPosition(async function(position) {
      dispatch({
        type: REQUEST_GEOLOCATION_FILL,
        payload: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        }
      })
    },
    function(error) {
      console.log("Error getting location:", error);
    }
    );
      // const apiKey = 'AIzaSyAcNvVTx6NFwen7fSrwSgQ5rwRG3sY3uhI'; // Replace with your Google Maps API key
      // const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;
      // try {
      //   const response = await fetch(url);
      //   const data = await response.json();
      //   console.log(data)
      //   if (data.status === 'OK' && data.results.length > 0) {
      //     const placeName = data.results[0].formatted_address;
      //     console.log('Place Name:', placeName);
      //   } else {
      //     console.log('Unable to retrieve place name.');
      //   }
      // } catch (error) {
      //   console.log('Error:', error);
      // }

      setTimeout(function() {
        handlePageTransition('address')
        setlocationButtonLoading(false)
      }, 2000);

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
          <div className="min-w-fit bg-gray-700 hover:bg-gray-900 rounded-md items-center flex space-x-4 text-white text-sm py-6 px-4 mt-12">
            <div className="w-5 h-5">
            {
              locationButtonLoading?<ButtonLoading/>:<><MapPin size={15}/></>
            }
            </div>
            <button onClick={handleClick} className="tracking-wider">
              Fetch My Current Location
            </button>
          </div>
          <div className="w-64 bg-pink-700 rounded-md text-white text-sm py-6 px-2 mt-4">
            <button onClick={handleClick} className="tracking-wider">
              LOGIN
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
