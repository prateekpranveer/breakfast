import React from 'react'
import { Plus } from 'react-feather'
import ButtonLoading from '../ButtonLoading';
import { useRouter } from 'next/router';


const RegisterPage = ({setprime}:any) => {

  const router = useRouter()

  const [loadingButton, setloadingButton] = React.useState(false)
 
  const handleClick = async () => {
    setloadingButton(true) 
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
        setprime(false)
        localStorage.setItem('Disclaimer', 'Done')
        router.reload()
        setTimeout(function() {
          setprime(false)
          setloadingButton(false)
        }, 1000);
      }, 2000);

    };
  
  return (
    <div className='max-w-6xl p-12 mt-10 mx-auto'>
      <div>
      <h1 className='font-pop-300 text-2xl tracking-widest'>REGISTER</h1>
      </div>
      <div className='font-pop-300 text-gray-600 items-center mt-4'>
            <input className='px-8 mt-4 py-6 border w-full' type="text" placeholder='Full Name'/>
            <input className='px-8 mt-4 py-6 border w-full' type="text" placeholder='Phone No.'/>
            <div className='flex space-x-4'>
            <input className='px-8 mt-4 py-6 border w-full' type="text" placeholder='Password'/>
            <input className='px-8 mt-4 py-6 border w-full' type="text" placeholder='Confirm Password'/>
            </div>
            <button onClick={handleClick} className='flex tracking-widest p-10 mt-6 h-5 items-center w-full justify-center text-white bg-gray-700 hover:bg-gray-900'>{loadingButton?<ButtonLoading/>:'CONTINUE TO REGISTER'}</button>
            </div>
    </div>
  )
}

export default RegisterPage