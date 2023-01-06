import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "news",

  initialState: {
    news: [],
  },

  reducers: {
    setNewsList: (state, action) => {
      state.news = action.payload;
    },
  },
});

export default slice.reducer;

// Actions

export const { setNewsList } = slice.actions;
