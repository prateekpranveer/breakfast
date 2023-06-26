import bfs from '@/axios'
import React, { useEffect } from 'react'

const explorefasts = () => {
    const [allBreakfast, setallBreakfast] = React.useState([])

    useEffect(() => {
        const allBreakfasts = async() => {
            await bfs.get('/user/getfoodlist').then((res) => {
                setallBreakfast(res.data)
                console.log(res.data)
            })
        }
        allBreakfasts()
    }, [])

  return (
    <div className='max-w-6xl mx-auto h-12 px-12'>
        <div className='mt-6'>
            <h1 className='text-2xl font-jost-300'>Our Top Pick Breakfasts</h1>
            <div className='mt-4'>

                {
                    allBreakfast?.map((p: { foodName: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; price: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; foodDescription: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined },id: any) => (
                        <>
                        <div className='flex items-center space-x-3'>
                        <h1 className='font-jost-400'>{p.foodName}</h1>
                        <p className='font-jost-400 bg-pink-600 text-white text-xs px-2 py-1 rounded-sm'>₹ {p.price}</p>
                        </div>
                        <p className='text-sm font-jost-300 py-2'>{p.foodDescription}</p>
                        </>
                    ))
                }

            </div>
        </div>

        <div className='mt-6'>
            <h1 className='text-2xl font-jost-300'>Budget Friendly</h1>
            <div className='flex space-x-3'>

                
            </div>
        </div>

        <div className='mt-6'>
            <h1 className='text-2xl font-jost-300'>Breakfasts with Complementry</h1>
            <div className='flex space-x-3'>

                

            </div>
        </div>
    </div>
  )
}

export default explorefasts