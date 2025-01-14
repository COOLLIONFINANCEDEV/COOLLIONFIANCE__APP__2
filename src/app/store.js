import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from "../features/Login/LoginSlice";
import AlertReducer from "../features/Alert/AlertSlice";
import LoaderSlice from "../features/Loader/LoaderSlice";
import CardSlice from "../features/Card/CardSlice";
import FilterSlice from "../features/Filter/FilterSlice";
import PoppuSlice from "../features/Poppu/PoppuSlice";
import OffersSlice from "../features/Offers/OffersSlice";
import InvestmentsSlice from "../features/Investment/InvestmentsSlice";

export const store = configureStore({
  reducer: {
    login: LoginReducer,
    alert: AlertReducer,
    loader: LoaderSlice,
    card: CardSlice,
    filter: FilterSlice,
    poppu: PoppuSlice,
    offers: OffersSlice,
    investments: InvestmentsSlice,
  },
});
