import { configureStore } from "@reduxjs/toolkit";
import addBreakFastReducer from "./addFast";
import rangeReducer from "./range";
import authentication from "./authentication";
import sidebarTrigger from "./sidebarTrigger";
import streak from "./streak";
import createStreak from "./createStreak";

export const store = configureStore({
  reducer: {
    addBreakfast: addBreakFastReducer,
    range: rangeReducer,
    auth: authentication,
    sidebar: sidebarTrigger,
    streak: streak,
    streakCreate: createStreak,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
