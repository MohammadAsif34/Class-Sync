import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  current_day: new Date().getDay(),
  selected_day: new Date().getDay(),
};
export const DaySlice = createSlice({
  name: "day",
  initialState,
  reducers: {
    setSelectedDay: (state, action) => {
      state.selected_day = action.payload;
    },
  },
});

export const { setSelectedDay } = DaySlice.actions;
export default DaySlice.reducer;
