import { createSlice } from "@reduxjs/toolkit";

const ErrorIntialiState = {
  oauth: {
    registration: {
      email: {
        state: false,
        message: "",
      },
      password: {
        state: false,
        message: "",
      },
      lastPassword: {
        state: false,
        message: "",
      },
      text: {
        state: false,
        message: "",
      },
    },
    company: {
      email: {
        state: false,
        message: "",
      },
      phone: {
        state: false,
        message: "",
      },
      website: {
        state: false,
        message: "",
      },
      payment: {
        state: false,
        message: "",
      },
      comment: {
        state: false,
        message: "",
      },
      name: {
        state: false,
        message: "",
      },
      sector: {
        state: false,
        message: "",
      },
    },
    update: {
      email: {
        state: false,
        message: "",
      },
      password: {
        state: false,
        message: "",
      },
      text: {
        state: false,
        message: "",
      },
    },
    twoFactor: {
      twoFactor: {
        state: false,
        message: "",
      },
    },
  },
};

const ErrorSlice = createSlice({
  name: "error",
  initialState: ErrorIntialiState,
  reducers: {
    hanbleError(state, action) {
      const section = action.payload.section;
      const name = action.payload.name;
      const child = action.payload.child;
      const update = action.payload.update;
      state[name][section][child] = update;
    },
    ResetError(state, action) {
      const section = action.payload.section;
      const name = action.payload.name;
      const child = action.payload?.child;

      if (child === undefined || child === null) {
        for (let key in state[name][section]) {
          state[name][section][key].state = false;
          state[name][section][key].message = "";
        }
      } else if (child !== undefined && child !== null) {
        state[name][section][child].state = false;
        state[name][section][child].message = "";
      }
    },
  },
});

export const { hanbleError, ResetError } = ErrorSlice.actions;

export const selectError = (state) => state.error;

export default ErrorSlice.reducer;
