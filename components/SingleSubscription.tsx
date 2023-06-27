import React from 'react'
import { Check, X } from 'react-feather'

const SingleSubscription = () => {
  return (
    <div className='p-3'>
        <div className=''>

            <div className='flex space-x-1'>
            <h1 className='font-jost-300 rounded-full text-xs tracking-widest px- max-w-fit px-3 text-white p-1 bg-blue-500'>BASIC</h1>
            <h1 className='font-jost-400 rounded-sm text-xs tracking-widest px- max-w-fit px-2 py-1'>2 Days</h1>
            </div>

            <div className='mt-3'>
                <div className='flex space-x-2 items-center'>
                    <Check size={12}/>
                    <h1 className='text-sm font-jost-300'>Breakfast Every Morning</h1>
                </div>
                <div className='flex space-x-2 items-center'>
                    <Check size={12}/>
                    <h1 className='text-sm font-jost-300'>Cutlery Included</h1>
                </div>
                <div className='flex space-x-2 items-center'>
                    <X size={12} color='red'/>
                    <h1 className='text-sm font-jost-300'>Refund Coupans</h1>
                </div>
                <div className='flex space-x-2 items-center'>
                    <X size={12} color='red'/>
                    <h1 className='text-sm font-jost-300'>Complementry</h1>
                </div>
            </div>

        </div>
    </div>
  )
}

export default SingleSubscription