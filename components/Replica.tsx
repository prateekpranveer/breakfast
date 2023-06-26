import { ADD_DATE, MODAL_OPEN } from '@/store/addFast'
import React from 'react'
import { Plus } from 'react-feather'
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
                <h1 className={`${`text-sm text-white rounded-sm px-2 py-1 bg-green-500`}`}>{date.month}  {date.date}</h1>
            </div>
            <div className='right'>
                <h1 className='text-sm px-2 py-1 rounded-sm bg-gray-100 flex items-center space-x-2 min-w-fit'><span>{name}</span><span><Plus size={14}/></span></h1>
            </div>
        </div>
        <ChoiceModal data = {foodList}/>
       
    </div>
  )
}

export default Replica