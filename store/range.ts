import { createSlice } from '@reduxjs/toolkit'

interface StreakSelect {
    default_range: string,
    selected_timeline: number,
}

const initialState:StreakSelect = {
    default_range: '2 Days',
    selected_timeline: 2,
}

const rangeSlice = createSlice({
    name: 'rangeSlice',
    initialState,
    reducers: {
        DAY_2: (state) => {
            return {
                ...state,
                default_range: '2 Days',
                selected_timeline: 2
            }
        },
        DAY_8: (state) => {
            return {
                ...state,
                default_range: '1 Week',
                selected_timeline: 8
            }
        },
        DAY_28: (state) => {
            return {
                ...state,
                default_range: '1 Month',
                selected_timeline: 28
            }
        }
    }
})


export const  {DAY_2, DAY_8, DAY_28} = rangeSlice.actions
export default rangeSlice.reducer