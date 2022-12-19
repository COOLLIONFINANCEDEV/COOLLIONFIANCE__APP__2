import { createSlice } from "@reduxjs/toolkit";
import { LENDER } from "../../Context/Roles/roles";

export const LoginSlice = createSlice({
  name: "login",
  initialState: { isAuthenticated: false, user: null, roles: null },
  reducers: {
    CheckUser(state, action) {
      const localStorageToken = localStorage.getItem("accessToken");
      const localStorageUser = localStorage.getItem("user");
      if (localStorageToken && localStorageUser) {
        state.isAuthenticated = true;
        let userInfo = JSON.parse(localStorageUser);
        const role = userInfo.role.name.toUpperCase();
        userInfo.role = role;
        state.user = userInfo;
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
    AddRoles(state, action) {
      state.roles = action.payload;
    },
  },
});

export const { CheckUser, SignOut, AddRoles } = LoginSlice.actions;

export const selectLogin = (state) => state.login;

export default LoginSlice.reducer;
