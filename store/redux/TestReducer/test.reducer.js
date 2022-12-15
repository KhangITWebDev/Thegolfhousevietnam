import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "test",

  initialState: {
    test: [],
  },

  reducers: {
    setTest: (state, action) => {
      state.test = action.payload;
    },
  },
});

export default slice.reducer;

// Actions

export const { setTest } = slice.actions;
