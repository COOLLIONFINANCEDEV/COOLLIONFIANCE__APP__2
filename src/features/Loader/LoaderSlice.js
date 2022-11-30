import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  // default state
  //   {
  //     state: true,
  //     message: "loading...",
  //      key: "loading..."
  //   },
];

const LoaderSlice = createSlice({
  name: "loader",
  initialState: initialState,
  reducers: {
    setLoader(state, action) {
      state.push({ ...action.payload });
    },
    deleteLoader(state, action) {
      const element = state.find((element) => {
        return element.key === action.payload.key;
      });

      const index = state.indexOf(element);
      if (index > -1) {
        state.splice(index, 1);
      }
    },
  },
});

export const { setLoader, deleteLoader } = LoaderSlice.actions;
export const selectLoader = (state) => state.loader;

export default LoaderSlice.reducer;
