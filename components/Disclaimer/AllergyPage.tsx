import { useRouter } from 'next/router'
import React from 'react'
import { Plus } from 'react-feather'

const AllergyPage = ({setprime}:any) => {
    const router = useRouter()
  return (
    <div>
        <div className='max-w-6xl mx-auto justify-center items-center mt-40 p-12'>
            <h1 className='font-pop-300 tracking-widest text-4xl'>I AM ALLERGIC TO</h1>
            <div className='flex font-pop-300 text-gray-600 items-center space-x-3 mt-10'>
            <input className='px-8 py-6 border w-full' type="text" placeholder='Ingredient Name'/>
            <button className='flex p-6 bg-red-300'><Plus color='white'/></button>
            </div>
            <button onClick={() => {
            localStorage.setItem('Disclaimer', 'Done')
            router.reload()
            
        }} className='px-8 py-4 border mt-6 font-pop-300 bg-red-300 text-white rounded-sm'>Continue</button>
        </div>
    </div>
  )
}

export default AllergyPage