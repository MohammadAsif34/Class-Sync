import { createSlice } from "@reduxjs/toolkit";

const initialState = { isOpen: false };
const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    openMenu: (s) => {
      s.isOpen = true;
    },
    closeMenu: (s) => {
      s.isOpen = false;
    },
    toggleMenu: (s) => {
      s.isOpen = !s.isOpen;
    },
  },
});

export const { openMenu, closeMenu, toggleMenu } = menuSlice.actions;
export default menuSlice.reducer;
