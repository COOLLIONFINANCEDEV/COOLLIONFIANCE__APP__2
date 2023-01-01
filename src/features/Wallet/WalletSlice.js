import { createSlice } from "@reduxjs/toolkit";

const WalletSlice = createSlice({
  name: "wallet",
  initialState: { wallet: null },
  reducers: {
    AddWallet(state, action) {
      state.wallet = action.payload.wallet;
    },
  },
});

export const { AddWallet } = WalletSlice.actions;
export const selectedWallet = (state) => state.wallet;

export default WalletSlice.reducer;
