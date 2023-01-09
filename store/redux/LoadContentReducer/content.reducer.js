import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "contents",

  initialState: {
    contents: [],
  },

  reducers: {
    setContentList: (state, action) => {
      state.contents = action.payload;
    },
  },
});

export default slice.reducer;

// Actions

export const { setContentList } = slice.actions;
