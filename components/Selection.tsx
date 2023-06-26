import { RootState } from '@/store/store';
import { DAY_2,DAY_28,DAY_8 } from '@/store/range';
import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { styled } from 'styled-components'

const Selection = () => {
    const dispatch = useDispatch();
    const range = useSelector((state:RootState) => state.range)
    return (
        <Xyz className='max-w-6xl ml-auto mr-auto'>
            <Twig className='flex space-x-2 font-jost-400 items-center text-xs'>
            <Options onClick={() => dispatch({type: DAY_2})} className={`text-xs tracking-w1der 0.5order ${range.selected_timeline==2 && 'text-white bg-gray-600'}  max-w-fit cursor-pointer px-1.5 py-0.5 rounded-sm`}>2 Days</Options>
            <Options onClick={() => dispatch({type: DAY_8})} className={`text-xs tracking-wider ${range.selected_timeline==7 && 'text-white bg-gray-600'} text-gray-600 max-w-fit cursor-pointer px-1.5 py-0.5 border rounded-sm`}>1 Week</Options>
            <Options onClick={() => dispatch({type: DAY_28})} className={`text-xs tracking-wider ${range.selected_timeline==28 && 'text-white bg-gray-600'} border text-gray-600 cursor-pointer max-w-fit px-1.5 py-0.5 rounded-sm`}>1 Month</Options>
            </Twig>
        </Xyz>
    )
}

export default Selection

const Xyz = styled.div``
const Options = styled.div``
const Twig = styled.div``