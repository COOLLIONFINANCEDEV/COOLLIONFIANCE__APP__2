import { createSlice } from "@reduxjs/toolkit";
import { LENDER } from "../../Context/Roles/roles";

export const LoginSlice = createSlice({
  name: "login",
  initialState: {
    isAuthenticated: false,
    user: null,
    roles: null,
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
      const UpdateLastUser = {};
      for (const key in user) {
        if (key === "role") {
          UpdateLastUser[key] =
            newUser[key] !== undefined
              ? { name: newUser[key].toUpperCase() }
              : { name: user[key].toUpperCase() };
        } else {
          UpdateLastUser[key] =
            newUser[key] !== undefined ? newUser[key] : user[key];
        }
      }
      localStorage.setItem("user", JSON.stringify(UpdateLastUser));
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
      const lastUser = action.payload.user;
      const company = action.payload.company;
      const newUser = {};
      for (const key in lastUser) {
        if (Object.hasOwnProperty.call(lastUser, key)) {
          if (key === "companies") {
            newUser[key] = [company];
          } else {
            newUser[key] = lastUser[key];
          }
        }
      }

      localStorage.setItem("user", JSON.stringify(newUser));
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
