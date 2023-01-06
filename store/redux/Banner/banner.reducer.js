import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "banners",

  initialState: {
    banners: [],
  },

  reducers: {
    setBannersList: (state, action) => {
      state.banners = action.payload;
    },
  },
});

export default slice.reducer;

// Actions

export const { setBannersList } = slice.actions;
