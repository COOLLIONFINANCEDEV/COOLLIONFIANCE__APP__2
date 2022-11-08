import { createSlice } from "@reduxjs/toolkit";

export const LoginSlice = createSlice({
  name: "login",
  initialState: { isAuthenticated: false, user: null },
  reducers: {
    CheckUser(state, action) {
      const localStorageToken = localStorage.getItem("accessToken");
      const localStorageUser = localStorage.getItem("user");
      if (localStorageToken && localStorageUser) {
        state.isAuthenticated = true;
        state.user = localStorageUser;
      } else {
        state.isAuthenticated = false;
      }
    },
    SignIn(state, action) {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    SignOut(state, action) {
      state.isAuthenticated = false;
      state.user = null;
    },
    SignUp(state, action) {},
    UpdateUser(state, action) {},
    DeleteUser(state, action) {},
  },
});

export const { CheckUser, SignIn, SignOut, SignUp, UpdateUser, DeleteUser } =
  LoginSlice.actions;

export const selectLogin = (state) => state.login;

export default LoginSlice.reducer;
