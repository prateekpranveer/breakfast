import { createSlice } from "@reduxjs/toolkit";

interface SidebarTrigger {
  sidebarOpen: boolean
}

const initialState:SidebarTrigger = {
  sidebarOpen: false
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    CLOSE_SIDEBAR: (state) => {
      return {
        ...state,
        sidebarOpen: false,
      };
    },
    OPEN_SIDEBAR: (state) => {
        return {
            ...state,
            sidebarOpen: true
        }
    }
  },
});

export const { CLOSE_SIDEBAR, OPEN_SIDEBAR } = sidebarSlice.actions;
export default sidebarSlice.reducer;
