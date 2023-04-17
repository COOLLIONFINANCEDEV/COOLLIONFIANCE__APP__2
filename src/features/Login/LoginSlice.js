import { createSlice } from "@reduxjs/toolkit";
import { LENDER } from "../../Context/Roles/roles";

export const LoginSlice = createSlice({
  name: "login",
  initialState: {
    isAuthenticated: false,
    user: null,
    accountType: null,
    tenant: null,
  },
  reducers: {
    CheckUser(state, action) {
      const localStorageToken = localStorage.getItem("accessToken");
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));

      if (
        localStorageToken &&
        userInfo.user &&
        userInfo.accountType &&
        userInfo.tenant
      ) {
        const role = userInfo.accountType.codename;
        userInfo.user.role = role;
        state.user = userInfo.user;
        state.accountType = userInfo.accountType;
        state.tenant = userInfo.tenant;
        state.isAuthenticated = true;
      } else {
        state.isAuthenticated = false;
        state.user = { name: "", lastName: "", role: LENDER() };
      }
    },
    SignOut(state, action) {
      state.isAuthenticated = false;
      state.user = null;
      localStorage.clear();
    },
  },
});

export const { CheckUser, SignOut } = LoginSlice.actions;

export const selectLogin = (state) => state.login;

export default LoginSlice.reducer;
