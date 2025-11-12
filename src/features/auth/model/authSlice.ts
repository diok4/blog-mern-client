import { createSlice } from "@reduxjs/toolkit";

interface IAuthSlice {
  token: null | string;
  loggedIn: boolean;
}

const initialState: IAuthSlice = {
  token: null,
  loggedIn: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loggedIn(state, action) {
      (state.loggedIn = true), (state.token = action.payload.token);
    },
    logout(state) {
      (state.loggedIn = false), (state.token = null);
    },
  },
});

export const { loggedIn, logout } = authSlice.actions;
export default authSlice.reducer;
