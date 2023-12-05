import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedUserToken: null,
  userDetails: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserToken: (state, action) => {
      state.loggedUserToken = action.payload;
    },
    setUserDetails: (state, action) => {
      state.userDetails = action.payload;
    },
    logout: (state) => {
      state.loggedUserToken = null;
      state.userDetails = null;
    },
  },
});

export const { setUserToken, setUserDetails, logout } = userSlice.actions;

export default userSlice.reducer;
