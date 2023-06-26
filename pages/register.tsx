import React, { useState } from 'react'
import Link from 'next/link'
import ButtonLoading from '@/components/ButtonLoading'
import bfs from '@/axios'
import { useRouter } from 'next/router'

const Register = () => {

  const [userName, setuserName] = React.useState('')
  const [email, setemail] = React.useState('')
  const [password, setpassword] = React.useState('')
  const [error, seterror] = useState('')
  const [location, setlocation] = useState('')
  const router = useRouter()
  // const [longitude, setlongitude] = useState(0)
  // const [latitude, setlatitude] = useState(0)

  const longitude = 22.5879498
  const latitude = 88.3992865

  const api_key = 'AIzaSyAcNvVTx6NFwen7fSrwSgQ5rwRG3sY3uhI'


  React.useEffect(() => {
    const handleFetch =  () => {
      const watchId =  navigator.geolocation.watchPosition(async(position) => {
          console.log(position)
          // setlatitude(position.coords.latitude)
          // setlongitude(position.coords.longitude)
          const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${api_key}`);
      const data = await response.json();
      console.log(data);
      })
  }
  handleFetch()
  }, [])
  

  const [loading, setloading] = React.useState(false)
  const handleRegistration = async () => {
    setloading(true)
    await bfs.post('/auth/register', {name:userName, email:email, password:password, address: location}).then(res => {
        router.push('/auth')
        setloading(false)
    }).catch(err => {
      seterror(err.response?.data.error);
      console.log(err.response?.data.error)
      setloading(false)
      router.push('/register')
    })  
  }

  return (
    <div>
      <div className='min-w-fit max-w-6xl flex justify-center mx-auto px-4'>
        <div className='space-y-4 flex flex-col items-center max-w-fit p-32 bg-slate-50 rounded-lg font-jost-300'>
          <div className='border rounded-md border-gray-500 px-4 py-2 max-w-fit'><input onChange={(e) => setuserName(e.target.value)} className='bg-transparent w-48 focus:outline-none' type="text" name="" id="" placeholder='Full Name' /></div>
          <div className='border rounded-md border-gray-500 px-4 py-2 max-w-fit'><input onChange={(e) => setemail(e.target.value)} className='bg-transparent w-48 focus:outline-none' type="email" name="" id="" placeholder='Email Id' /></div>
          <div className='border rounded-md border-gray-500 px-4 py-2 max-w-fit'><input onChange={(e) => setpassword(e.target.value)} className='bg-transparent w-48 focus:outline-none' type="password" name="" id="" placeholder='Password' /></div>
          <div className='border rounded-md border-gray-500 px-4 py-2 max-w-fit'><input className='bg-transparent w-48 focus:outline-none' type="password" name="" id="" placeholder='Retype Password' /></div>
          <div className='border rounded-md border-gray-500 px-4 py-2 max-w-fit'><textarea onChange={(e) => setlocation(e.target.value)} className='bg-transparent w-48 focus:outline-none' name="" id="" placeholder='Your Full Address' /></div>

          <div onClick={handleRegistration} className={`border-2 rounded-md w-full items-center flex justify-center ${loading?'bg-white':'bg-pink-600'} text-white font-rale-400 text-sm py-3`}><button className='tracking-wide'>{loading?<><ButtonLoading/></>:<h1>Register</h1>}</button></div>
          <div className='font-jost-300 flex space-x-2'><h1>Already a Member?</h1><span className='font-jost-400 border-b-2 border-blue-500 text-blue-600'><Link href={'/auth'}>Login!</Link></span></div>
          <div className='text-red-600'>*{error}</div>
        </div>
        </div>
    </div>
  )
}

export default Register