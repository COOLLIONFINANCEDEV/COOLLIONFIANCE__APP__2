import { createSlice } from "@reduxjs/toolkit";

const InvestmentsSlice = createSlice({
  name: "investments",
  initialState: { investments: null },
  reducers: {
    AddAllInvestment(state, action) {
      state.investments = action.payload.investements;
    },
  },
});

export const { AddAllInvestment } = InvestmentsSlice.actions;
export const selectedInvestments = (state) => state.investments;

export default InvestmentsSlice.reducer;
