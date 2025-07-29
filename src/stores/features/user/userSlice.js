import { createSlice } from "@reduxjs/toolkit";
const initialState = { isAuth: false, user: {} };
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.isAuth = true;
      state.user = action.payload;
    },
    unSetUser: (state) => {
      state.isAuth = false;
      state.user = {};
    },
  },
});

export const { setUser, unSetUser } = userSlice.actions;
export default userSlice.reducer;
