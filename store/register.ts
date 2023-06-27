import { createSlice } from "@reduxjs/toolkit";

interface AuthenticationState {
  fullName: string;
  fullAddress: string;
  password: string;
  confirmPassword: string;
  phoneNo: number,
  longitude: number;
  latitude: number;
  allergic: Allergy[];
}

interface Allergy {
  ingredient: string;
}

const initialState: AuthenticationState = {
  fullName: "",
  fullAddress: "",
  password: "",
  confirmPassword: "",
  phoneNo: 0,
  longitude: 0,
  latitude: 0,
  allergic: [],
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    REQUEST_ADDRESS_FILL: (state, action) => {
      return {
        ...state,
        fullAddress: action.payload
      };
    },
    REQUEST_ALLERGY_FILL: (state, action) => {
      return {
        ...state,
        allergic: action.payload,
      };
    },

    REQUEST_GEOLOCATION_FILL: (state, action) => {
      return {
        ...state,
        latitude: action.payload.latitude,
        longitude: action.payload.longitude,
      };
    },
    REQUEST_REGISTRATION_FILL: (state, action) => {
      return {
        ...state,
        fullName: action.payload.fullName,
        password: action.payload.password,
        confirmPassword: action.payload.confirmPassword,
        phoneNo: action.payload.phoneNo,
      };
    },
  },
});

export const {
  REQUEST_ADDRESS_FILL,
  REQUEST_ALLERGY_FILL,
  REQUEST_GEOLOCATION_FILL,
  REQUEST_REGISTRATION_FILL,
} = authSlice.actions;
export default authSlice.reducer;
