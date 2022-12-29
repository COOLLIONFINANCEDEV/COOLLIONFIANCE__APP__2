import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import LoginReducer from "../features/Login/LoginSlice";
import ErrorReducer from "../features/Error/ErrorSlice";
import AlertReducer from "../features/Alert/AlertSlice";
import LoaderSlice from "../features/Loader/LoaderSlice";
import CardSlice from "../features/Card/CardSlice";
import FilterSlice from "../features/Filter/FilterSlice";
import PoppuSlice from "../features/Poppu/PoppuSlice";
import ProjectSlice from "../features/Project/ProjectSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    login: LoginReducer,
    error: ErrorReducer,
    alert: AlertReducer,
    loader: LoaderSlice,
    card: CardSlice,
    filter: FilterSlice,
    poppu: PoppuSlice,
    project: ProjectSlice,
  },
});
