import { createSlice } from '@reduxjs/toolkit' 
import { PayloadAction } from '@reduxjs/toolkit';

interface addBreakfast {
    modelOpen: boolean,
    date: string
}

const initialState:addBreakfast = {
    modelOpen: false,
    date: '',
}

const addBreakFastSlice = createSlice({
    name: 'addBreakFastSlice',
    initialState,
    reducers: {
        MODAL_OPEN: (state) => {
            state.modelOpen = true;
        },
        MODAL_CLOSE: (state) => {
            state.modelOpen = false;
        },
        
        ADD_DATE: (state,action) => {
            return {
                ...state,
                date: action.payload
            }
        },
    }
})

export const { MODAL_CLOSE, MODAL_OPEN, ADD_DATE } = addBreakFastSlice.actions;
export default addBreakFastSlice.reducer;