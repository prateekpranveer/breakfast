import { ADD_DATE, MODAL_OPEN } from '@/store/addFast'
import React from 'react'
import { Edit, Edit2, Plus } from 'react-feather'
import { useDispatch } from 'react-redux'
import ChoiceModal from './ChoiceModal'
import { useSelector } from 'react-redux'
import bfs from '@/axios'
import { RootState } from '@/store/store'

const Replica = ({name,date}:any) => {

  const auth = useSelector((state:RootState) => state.auth)
  const [foodList, setfoodList] = React.useState()

  React.useEffect(() => {
    const foodListing = async () => {
      const food = await bfs.get('/user/getfoodlist');
      setfoodList(food.data)
    }
    foodListing()
  }, [auth])

  const dispatch = useDispatch()
  return (
    <div>
        <div onClick={() => {
          dispatch({
            type: MODAL_OPEN,
          })
          dispatch({
            type: ADD_DATE,
            payload: date.date
          })
        }} className='flex items-center font-jost-400 cursor-pointer'>
            <div className='left'>
                <h1 className={`${`text-sm text-white rounded-sm px-2 py-2 ${!name?'bg-red-500':'bg-green-400'}`}`}>{date.month}  {date.date}</h1>
            </div>
            <div className='right'>
                <h1 className='text-xs font-mono-400 px-2 py-2 rounded-sm bg-white border shadow flex items-center space-x-2 min-w-fit'><span>{name?name:'Add Breakfast'}</span><span>{!name?<><Plus size={14}/></>:<><Edit size={12}/></>}</span></h1>
            </div>
        </div>
        <ChoiceModal data = {foodList}/>
       
    </div>
  )
}

export default Replica