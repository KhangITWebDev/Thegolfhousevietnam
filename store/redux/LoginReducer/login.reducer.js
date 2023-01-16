import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "demo",

  initialState: {
    usersList: [],
  },

  reducers: {
    setUsersList: (state, action) => {
      state.usersList = action.payload;
    },
    // setUserToUsersList: (state, action) => {
    //   state.usersList.push(action.payload);
    // },
  },
});

export default slice.reducer;

// Actions

export const { setUsersList, setUserToUsersList } = slice.actions;
