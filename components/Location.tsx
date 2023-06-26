import { RootState } from '@/store/store'
import React from 'react'
import { Edit } from 'react-feather'
import { useSelector } from 'react-redux'

const Location = () => {
  const auth = useSelector((state:RootState) => state.auth)
  return (
    <div className='max-w-6xl ml-auto mr-auto px-10 flex space-x-3 items-center w-80 truncate'><p className='text-pink-600 font-bold'>{auth.userAddress && 'HOME'}</p><p className='text-gray-600 font-jost-400 text-sm'>{auth.userAddress}</p></div>
  )
}

export default Location