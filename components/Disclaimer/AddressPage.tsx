import React, {useState} from 'react'
import { Plus } from 'react-feather'
import ButtonLoading from '../ButtonLoading';
import { useDispatch } from 'react-redux';
import { REQUEST_AUTHENTICATION } from '@/store/authentication';


const AddressPage = ({handlePageTransition}:any) => {

  const [loadingButton, setloadingButton] = React.useState(false)
  const [fullName, setfullName] = useState()
  const [passowrd, setpassowrd] = useState()
  const [confirmPassword, setconfirmPassword] = useState()
  const [phoneNo, setphoneNo] = useState()

  const latitude = 37.7749; // Replace with your latitude
    const longitude = -122.4194;


  const dispatch = useDispatch()
  const handleClick = async () => {
    setloadingButton(true)
    dispatch({
      type: REQUEST_AUTHENTICATION,
      payload: {
        fullName: fullName,
        passowrd: passowrd,
        confirmPassword: confirmPassword,
        phoneNo: phoneNo,
      }
    }) 
      const apiKey = 'AIzaSyAcNvVTx6NFwen7fSrwSgQ5rwRG3sY3uhI'; // Replace with your Google Maps API key
      const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)
        if (data.status === 'OK' && data.results.length > 0) {
          const placeName = data.results[0].formatted_address;
          console.log('Place Name:', placeName);
        } else {
          console.log('Unable to retrieve place name.');
        }
      } catch (error) {
        console.log('Error:', error);
      }

      setTimeout(function() {
        handlePageTransition('allergy')
        setloadingButton(false)
      }, 2000);

    };
  
  return (
    <div className='max-w-6xl p-12 mt-10 mx-auto'>
      <div>
      <h1 className='font-pop-300 text-2xl tracking-widest'>ENTER YOUR LOCATION</h1>
      </div>
      <div className='font-pop-300 text-gray-600 items-center mt-4'>
            <input className='px-8 mt-4 py-6 border w-full' type="text" placeholder='Door/Flat No.'/>
            <input className='px-8 mt-4 py-6 border w-full' type="text" placeholder='Area'/>
            <div className='flex space-x-4'>
            <input className='px-8 mt-4 py-6 border w-full' type="text" placeholder='City'/>
            <input className='px-8 mt-4 py-6 border w-full' type="text" placeholder='Landmark'/>
            </div>
            <button onClick={handleClick} className='flex p-10 mt-6 h-5 items-center w-full justify-center text-white bg-gray-700 hover:bg-gray-900'>{loadingButton?<ButtonLoading/>:'SAVE ADDRESS AND PROCEED'}</button>
            </div>
    </div>
  )
}

export default AddressPage