import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import LoginReducer from "../features/Login/LoginSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    login: LoginReducer,
  },
});
