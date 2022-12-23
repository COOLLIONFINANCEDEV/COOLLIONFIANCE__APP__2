import { createSlice } from "@reduxjs/toolkit";
import { LENDER } from "../../Context/Roles/roles";

export const LoginSlice = createSlice({
  name: "login",
  initialState: {
    isAuthenticated: false,
    user: null,
    roles: null,
    company: { state: false, companies: [] },
  },
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
    UpdateUser(state, action) {
      const newUser = JSON.parse(action.payload.newUser);
      const user = action.payload.user;
      for (const key in user) {
        console.log(newUser[key]);
        if (key === "role") {
          user[key] =
            newUser[key] !== undefined
              ? { name: newUser[key].toUpperCase() }
              : { name: user[key].toUpperCase() };
        } else {
          user[key] = newUser[key] !== undefined ? newUser[key] : user[key];
        }
      }
      user.role.name = user.role.name.toUpperCase();
      localStorage.setItem("user", JSON.stringify(user));
    },
    SignOut(state, action) {
      state.isAuthenticated = false;
      state.user = null;
      localStorage.clear();
    },
    AddRoles(state, action) {
      state.roles = action.payload;
    },
    AddCompany(state, action) {
      state.company.state = action.payload.state;
      state.company.companies = action.payload.companies;
    },
  },
});

export const {
  CheckUser,
  SignOut,
  AddRoles,
  AddCompany,
  UpdateUser,
} = LoginSlice.actions;

export const selectLogin = (state) => state.login;

export default LoginSlice.reducer;
