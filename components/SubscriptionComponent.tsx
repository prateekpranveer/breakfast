import React from 'react'
import SingleSubscription from './SingleSubscription'

const SubscriptionComponent = () => {
  return (
    <div className='flex space-x-6 mt-6'>
        <div className='w-60 border h-40 shadow-lg rounded-lg hover:bg-gray-100 cursor-pointer'>
            <SingleSubscription/>
        </div>
        <div className='w-60 border shadow-lg rounded-lg h-40 hover:bg-gray-100 cursor-pointer'>
        <SingleSubscription/>
        </div>
        <div className='w-60 border shadow-lg rounded-lg h-40 hover:bg-gray-100 cursor-pointer'>
        <SingleSubscription/>
        </div>
    </div>
  )
}

export default SubscriptionComponent