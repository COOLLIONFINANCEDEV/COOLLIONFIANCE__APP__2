import { createSlice } from "@reduxjs/toolkit";
import randomkey from "../../Helpers/randomKey";

const initialState = [
//  default state
//   {
//     state: "error",
//     message: "hello world what are you doing",
//   },
];

const AlertSlice = createSlice({
  name: "alert",
  initialState: initialState,
  reducers: {
    setAlert(state, action) {
      state.push({...action.payload,key: randomkey()});
    },
    deleteAlert(state, action) {
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

export const { setAlert, deleteAlert } = AlertSlice.actions;

export const selectAlert = (state) => state.alert;

export default AlertSlice.reducer;
