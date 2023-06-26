import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Streak {
  streak: boolean;
  streakId: string;
  streakPrice: number;
  foodAcquired: FoodAcquired[]
  streakSize: number
}

interface FoodAcquired {
  defaultDate: {
    month: string;
    date: number;
    _id: string;
  };
  foodTaken: null;
  paid: boolean;
  _id: string;

}

const initialState: Streak = {
  streak: false,
  streakId: '',
  streakPrice: 0.0,
  foodAcquired: [],
  streakSize: 0,
};

const streakSlice = createSlice({
  name: 'streak',
  initialState,
  reducers: {
    CREATE_STREAK: (state) => {
      return {
        ...state,
        streak: true,
      };
    },
    SET_STREAK_ARRAY: (state, action) => {
      return {
        ...state,
        foodAcquired: action.payload,
      };
    },
    GET_STREAK_ARRAY: (state) => {
      return {
        ...state,
      };
    },
    SET_STREAK_ID: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        streakId: action.payload,
      };
    },
    SET_STREAK_PRICE: (state, action: PayloadAction<number>) => {
      return {
        ...state,
        streakPrice: action.payload,
      };
    },
    SET_STREAK_SIZE: (state, action: PayloadAction<number>) => {
      return {
        ...state,
        streakSize: action.payload
      }
    }
  },
});

export const {
  CREATE_STREAK,
  SET_STREAK_ARRAY,
  GET_STREAK_ARRAY,
  SET_STREAK_ID,
  SET_STREAK_PRICE,
  SET_STREAK_SIZE
} = streakSlice.actions;
export default streakSlice.reducer;
