import { createSlice } from '@reduxjs/toolkit'

interface createModal {
    openCreateModal: boolean
}

const initialState:createModal = {
    openCreateModal: false,
}

const streakCreatorSlice = createSlice({
    name: 'streakCreate',
    initialState,
    reducers: {
        OPEN_CREATE_MODAL: (state) => {
            return {
                ...state,
                openCreateModal: true,
            }
        },

        CLOSE_CREATE_MODAL: (state) => {
            return {
                ...state,
                openCreateModal:false,
            }
        }
    }
})

export const { OPEN_CREATE_MODAL, CLOSE_CREATE_MODAL } = streakCreatorSlice.actions;
export default streakCreatorSlice.reducer