import { createSlice } from "@reduxjs/toolkit";

const CompaniesSlice = createSlice({
  name: "companies",
  initialState: { companies: null },
  reducers: {
    AddCompanies(state, action) {
      state.companies = action.payload.companies;
    },
  },
});

export const { AddCompanies } = CompaniesSlice.actions;
export const selectCompanies = (state) => state.companies;

export default CompaniesSlice.reducer;
