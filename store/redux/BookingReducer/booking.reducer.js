import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "booking",

  initialState: {
    locationList: [],
  },

  reducers: {
    setLocationList: (state, action) => {
      state.locationList = action.payload;
    },
    // setUserToUsersList: (state, action) => {
    //   state.usersList.push(action.payload);
    // },
  },
});

export default slice.reducer;

// Actions

export const { setLocationList } = slice.actions;
