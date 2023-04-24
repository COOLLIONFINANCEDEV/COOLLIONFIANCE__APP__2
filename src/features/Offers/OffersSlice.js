import { createSlice } from "@reduxjs/toolkit";

const OffersSlice = createSlice({
  name: "offers",
  initialState: { offers: null, stats: null, offerDashboard: null },
  reducers: {
    AddAllOffers(state, action) {
      state.offers = action.payload.offers;
    },
    AddAllOffersDashboard(state, action) {
      state.offerDashboard = action.payload.offerDashboard;
    },
    AddAllStats(state, action) {
      state.stats = action.payload.stats;
    },
    AddUserOffer(state, action) {
      state.offers = action.payload.offers;
    },
    UpdateOffers(state, action) {
      const newOffer = action.payload.newOffer;
      const lastOffer = action.payload.lastOffer;
      const UpdateOffer = {};
      for (const key in lastOffer) {
        UpdateOffer[key] =
          newOffer[key] !== undefined ? newOffer[key] : lastOffer[key];
      }
      state.offers = UpdateOffer;
    },
  },
});

export const {
  AddAllOffers,
  AddUserOffer,
  UpdateOffers,
  AddAllStats,
  AddAllOffersDashboard,
} = OffersSlice.actions;
export const selectedOffers = (state) => state.offers;

export default OffersSlice.reducer;
