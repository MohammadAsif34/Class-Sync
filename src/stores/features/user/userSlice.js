import { createSlice } from "@reduxjs/toolkit";
const initialState = { isAuth: false };
const userSlice = createSlice({
  name: "user",
  initialState,
  reducer: {
    setUser: (state) => {
      state.isAuth = true;
    },
  },
});

const { setUser } = userSlice.actions;
export default userSlice.reducer;
