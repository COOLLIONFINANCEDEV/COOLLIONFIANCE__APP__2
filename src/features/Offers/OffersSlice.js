import { createSlice } from "@reduxjs/toolkit";

const OffersSlice = createSlice({
  name: "offers",
  initialState: { offers: null },
  reducers: {
    AddAllOffers(state, action) {
      state.offers = action.payload.offers;
    },
    AddUserOffer(state, action) {
      state.offers = action.payload.offers;
    },
  },
});

export const { AddAllOffers, AddUserOffer } = OffersSlice.actions;
export const selectedOffers = (state) => state.offers;

export default OffersSlice.reducer;
