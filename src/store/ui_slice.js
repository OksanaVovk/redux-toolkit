import { createSlice } from "@reduxjs/toolkit";

const uiInitialState = {
  cartIsVisible: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: uiInitialState,
  reducers: {
    toggle(state, action) {
      state.cartIsVisible = !state.cartIsVisible;
    },
  },
});

// these exports should stay the way they are
export const uiActions = uiSlice.actions;

export default uiSlice;
