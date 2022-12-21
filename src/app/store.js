import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import LoginReducer from "../features/Login/LoginSlice";
import ErrorReducer from "../features/Error/ErrorSlice";
import AlertReducer from "../features/Alert/AlertSlice";
import LoaderSlice from "../features/Loader/LoaderSlice";
import CardSlice from "../features/Card/CardSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    login: LoginReducer,
    error: ErrorReducer,
    alert: AlertReducer,
    loader: LoaderSlice,
    card: CardSlice,
  },
});
