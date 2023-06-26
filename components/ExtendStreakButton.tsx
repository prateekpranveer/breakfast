import bfs from '@/axios'
import { OPEN_CREATE_MODAL } from '@/store/createStreak'
import { RootState } from '@/store/store'
import React from 'react'
import { Plus } from 'react-feather'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

const ExtendStreakButton = () => {

  const dispatch = useDispatch()
  const auth = useSelector((state:RootState) => state.auth)
  const timeLine = useSelector((state:RootState) => state.range)

  const handleExtendStreak = async () => {
    await bfs.post(`/createNewStreak/${auth.userId}/${timeLine.selected_timeline}`)
  }

  return (
    <div>
        <button onClick={() => {
          dispatch({
            type: OPEN_CREATE_MODAL
          })
        }} className='text-sm px-2 py-1 border font-jost-400 flex items-center bg-sky-600 text-white rounded-md space-x-2'><span>Extend</span><Plus size={12}/><span></span></button>
    </div>
  )
}

export default ExtendStreakButton