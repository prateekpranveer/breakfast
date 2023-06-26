import React from 'react'
const recentBreakfast = [
    {
        name: 'Poha with Salads'
    },
    {
        name: 'Parantha with Curd and Pickle'
    },
    {
        name: 'Oat Meal with Fruits'
    },
    {
        name: 'Panner Paratha in Desi Ghee'
    },
    {
        name: 'Veg Overloaded Sandwich with Milk'
    },
    {
        name: 'Bread Omlet with Banana'
    },
    
]

const Profile = () => {
  return (
    <div className='max-w-6xl mx-auto'>
        <div className='mt-10'>
            <h1 className='text-3xl px-12 font-jost-300'>Hi Prateek Kumar</h1>
            <h1 className='text-md mt-2 px-12 font-jost-300'>Dhalua Main Road, Navapalli, New Garia, 700130, Kolkata, WB</h1>
            <div className='px-12 font-jost-300 mt-12'>
                <h1 className='border-gray-600 border-b-2 max-w-fit '>Your Most Loved Breakfasts</h1>
                <div className='mt-4 flex text-sm font-jost-400 gap-x-4 gap-y-2 flex-wrap'>
                    {
                        recentBreakfast.map((p) => (
                            <h1 className='bg-pink-800 text-white rounded-sm px-4 py-1'>{p.name}</h1>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile