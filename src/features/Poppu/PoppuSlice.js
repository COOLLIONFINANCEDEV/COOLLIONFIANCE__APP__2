import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  // default state
  //   {
  //     state: true,
  //     message: "loading...",
  //   },
];

const PoppuSlice = createSlice({
  name: "poppu",
  initialState: initialState,
  reducers: {
    setPoppu(state, action) {
      state.push({ ...action.payload });
    },
  },
});

export const { setPoppu } = PoppuSlice.actions;
export const selectPoppu = (state) => state.poppu;

export default PoppuSlice.reducer;
