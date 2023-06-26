import React from 'react'
import { Plus } from 'react-feather'


const AddressPage = ({handlePageTransition}:any) => {
  return (
    <div className='max-w-6xl p-12 mt-10 mx-auto'>
      <div>
      <h1 className='font-pop-300 text-4xl tracking-widest'>ENTER YOUR LOCATION</h1>
      </div>
      <div className='font-pop-300 text-gray-600 items-center mt-10'>
            <input className='px-8 mt-4 py-6 border w-full' type="text" placeholder='Door/Flat No.'/>
            <input className='px-8 mt-4 py-6 border w-full' type="text" placeholder='Area'/>
            <div className='flex space-x-4'>
            <input className='px-8 mt-4 py-6 border w-full' type="text" placeholder='City'/>
            <input className='px-8 mt-4 py-6 border w-full' type="text" placeholder='Landmark'/>
            </div>
            <button onClick={() => handlePageTransition('allergy')} className='flex p-6 mt-6 items-center w-full justify-center text-white bg-red-300'>SAVE ADDRESS & PROCEED</button>
            </div>
    </div>
  )
}

export default AddressPage