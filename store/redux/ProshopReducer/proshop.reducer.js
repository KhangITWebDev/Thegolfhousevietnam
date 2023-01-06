import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "proshop",

  initialState: {
    proshopList: [],
  },

  reducers: {
    setProshopList: (state, action) => {
      state.proshopList = action.payload;
    },
    // setUserToUsersList: (state, action) => {
    //   state.usersList.push(action.payload);
    // },
  },
});

export default slice.reducer;

// Actions

export const { setProshopList } = slice.actions;
