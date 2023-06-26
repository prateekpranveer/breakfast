import { createSlice } from "@reduxjs/toolkit";

interface AuthenticationState {
  authenticated: boolean;
  token: string;
  routerPathName: "/";
  userId: string;
  authUserName: string;
  userAddress: string;
  longitude: number;
  latitude: number;
}

const initialState: AuthenticationState = {
  authenticated: false,
  token: "",
  routerPathName: "/",
  userId: "",
  authUserName: "",
  userAddress: "",
  longitude: 0,
  latitude: 0,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    REQUEST_AUTHENTICATION: (state, action) => {
      return {
        ...state,
        authenticated: true,
        token: action.payload.token,
        routerPathName: action.payload.prevPath,
        userId: action.payload.userId,
        authUserName: action.payload.userName,
        userAddress: action.payload.userAddress,
        longitude: action.payload.longitude,
        latitude: action.payload.latitude,
      };
    },
    SET_ROUTER_STATE: (state, action) => {
      return {
        ...state,
        routerPathName: action.payload,
      };
    },
  },
});

export const { REQUEST_AUTHENTICATION, SET_ROUTER_STATE } = authSlice.actions;
export default authSlice.reducer;
