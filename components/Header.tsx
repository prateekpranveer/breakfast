import { useRouter } from 'next/router'
import React from 'react'
import { Menu, Settings, User } from 'react-feather'
import { useSelector } from 'react-redux'
import { styled } from 'styled-components'
import Location from './Location'
import { useDispatch } from 'react-redux'
import { CLOSE_SIDEBAR, OPEN_SIDEBAR } from '@/store/sidebarTrigger'
import Link from 'next/link'
import { RootState } from '@/store/store'


const Header = () => {
  const auth = useSelector((state:RootState) => state.auth)
  const isOpen = useSelector((state:RootState) => state.sidebar)
  const router = useRouter()
  const dispatch = useDispatch()
  return (
    <Xyz className='max-w-8xl mr-auto shadow-md bg-white py-8'>
      <div className='flex justify-between max-w-6xl items-center mx-auto'>
        <Max className='flex items-center'>
          <BSLogo className='cursor-pointer' onClick={() => router.push('/')}><img  width={250} src="/logo.png" alt="" /></BSLogo>
          <Location/>
        </Max>
      
        {/* <Gifts onClick={() => {router.push('/rewards')}} className='flex space-x-4 border hover:bg-gray-100 cursor-pointer px-3 py-2 rounded-sm'>
          <h1 className='font-jost-300 tracking-wide text-sm'>Collect Rewards</h1>
          <img width={20} src={'/gold.svg'} alt="" />
        </Gifts> */}

        <div onClick={() => {
          if (!isOpen?.sidebarOpen){
          dispatch({
            type: OPEN_SIDEBAR
          })} else {
            dispatch({
              type: CLOSE_SIDEBAR
            })
          }
        }} className='flex font-jost-400 text-gray-600 space-x-3 px-2 py-1 items-center cursor-pointer'>
          <div className='min-w-fit mr-4'>
          <Link className='min-w-fit' href="/explorefasts"><h1 className='font-pop-300 text-sm tracking-wider'>EXPLORE BREAKFASTS</h1></Link>
        </div>
          <p className='font-jost-300'>{auth.authUserName}</p>
          <Settings color='gray'/>
        </div>
        </div>
    </Xyz>

  )
}

export default Header

const Xyz = styled.div`
  
`
const Max = styled.h1`

`

const BSLogo = styled.div`
`

const Gifts = styled.div`
`