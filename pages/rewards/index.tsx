import Rewards from '@/components/Rewards'
import { useRouter } from 'next/router'
import React from 'react'
import withAuth from '../../middlewares/authMiddleware'

const RewardsMain = () => {
    const router = useRouter()
    const handleRedeemClick = () => {
        router.push('/rewards/redeem')
    }

    return (
        <div className='max-w-6xl px-12 mx-auto'>
            <div className='font-jost-300 tracking-widest text-xl flex justify-between items-center'>
                <div className='flex space-x-4'>
                    <h1>REWARDS</h1>
                    <img className='' src='/heart.svg' alt="" />
                </div>
                <div>
                    <div className='flex items-center space-x-6'>
                        <div className='flex space-x-3 items-center'>
                            <img width={30} src='/candy.svg' alt="" />
                            <p className='font-jost-400 text-slate-500 text-sm'>4</p>
                        </div>
                        <div className='flex space-x-3 items-center'>
                            <img width={30} src='/cake.svg' alt="" />
                            <p className='font-jost-400 text-slate-500 text-sm'>3</p>
                        </div>
                        <div className='flex space-x-3 items-center'>
                            <img width={30} src='/silver.svg' alt="" />
                            <p className='font-jost-400 text-slate-500 text-sm'>12</p>
                        </div>
                        <div className='flex space-x-3 items-center'>
                            <img height={30} width={30} src='/icecream.svg' alt="" />
                            <p className='font-jost-400 text-slate-500 text-sm'>1</p>
                        </div>
                        <div className='flex space-x-3 items-center'>
                            <img width={30} src='/gold.svg' alt="" />
                            <p className='font-jost-400 text-slate-500 text-sm'>32</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div onClick={handleRedeemClick} className='mt-10 z-30'>
                <button className='cursor-pointer px-8 py-4 bg-pink-600 border-black border-2 rounded-md text-white font-jost-400 tracking-widest text-xs'>REDEEM NOW</button>
            </div> */}

            <div className='p-12 bg-slate-100 mt-12 font-jost-300'>
                <h1 className='text-lg'>The Gifts will be Available Soon!</h1>
                <h1>Your earned credit will be available to redeem as soon as gifts appear!</h1>
                </div>

            <Rewards />
        </div>
    )
}

export default withAuth(RewardsMain)