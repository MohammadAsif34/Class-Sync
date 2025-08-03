import { configureStore } from "@reduxjs/toolkit";
import DayReducer from "../features/day/daySlice";
export const store = configureStore({
  reducer: {
    day: DayReducer,
  },
});
