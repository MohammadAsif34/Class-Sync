import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "../features/menubar/menuSlice";
import userReducer from "../features/user/userSlice";

export const store = configureStore({
  reducer: { menu: menuReducer, user: userReducer },
});
