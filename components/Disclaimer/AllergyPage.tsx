import { useRouter } from 'next/router'
import React from 'react'
import { Plus } from 'react-feather'
import ButtonLoading from '../ButtonLoading'
import { useDispatch } from 'react-redux'
import { REQUEST_ALLERGY_FILL } from '@/store/register'

const AllergyPage = ({handlePageTransition}:any) => {
  
  const [buttonLoading, setbuttonLoading] = React.useState(false)
  const [allergyArray, setallergyArray] = React.useState<any>([])
  const dispatch = useDispatch()

  const handleClick = async () => {
    setbuttonLoading(true) 
    dispatch({
      type: REQUEST_ALLERGY_FILL,
      payload: allergyArray
    })
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
        handlePageTransition('register')
        setbuttonLoading(false)
      }, 2000);

    };

    const router = useRouter()
  return (
    <div>
        <div className='max-w-6xl mx-auto justify-center items-center mt-40 p-12'>
            <h1 className='font-pop-300 tracking-widest text-2xl'>I AM ALLERGIC TO</h1>
            <h1 className='mt-4 font-jost-300 text-xl'>We carefully consider your allergies when selecting ingredients for your Breakfast!</h1>
            <div className='flex font-pop-300 text-gray-600 items-center space-x-3 mt-10'>
            <input className='px-8 py-6 border w-full' type="text" placeholder='Ingredient Name'/>
            <button className='flex p-6 bg-gray-700'><Plus color='white'/></button>
            </div>
            <button onClick={handleClick} className='h-20 border w-full mt-6 font-pop-300 bg-gray-700 hover:bg-gray-900 text-white rounded-sm'>{buttonLoading?<ButtonLoading/>:'CONTINUE'}</button>
        </div>
    </div>
  )
}

export default AllergyPage