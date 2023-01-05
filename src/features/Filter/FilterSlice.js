import { createSlice } from "@reduxjs/toolkit";

const IntialiState = {
  Status: "",
  Search: "",
  Gender: "",
  "Sort Order": [],
  Location: {
    Africa: [],
    Amerique: [],
    Europe: [],
    Asie: [],
    Antartica: [],
    Oceania: [],
  },
  Sectors: [],
};

const FilterSlice = createSlice({
  name: "error",
  initialState: IntialiState,
  reducers: {
    addFilter(state, action) {
      const value = action.payload.value;
      const key = action.payload.key;
      if (state[key] === undefined) {
        state.Location[key].push(value);
      } else {
        state[key].push(value);
      }
    },
    addFilterRadio(state, action) {
      const value = action.payload.value;
      const key = action.payload.key;
      if (state[key] === undefined) {
        state.Location[key] = value;
      } else {
        state[key] = value;
      }
    },
    deleteFilter(state, action) {
      const value = action.payload.value;
      const key = action.payload.key;

      const index = state[key].indexOf(value);
      if (index > -1) {
        state[key].splice(index, 1);
      }
    },
  },
});

export const { addFilter, addFilterRadio, deleteFilter } = FilterSlice.actions;

export const selectFilter = (state) => state.filter;

export default FilterSlice.reducer;
