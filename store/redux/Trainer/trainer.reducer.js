import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "trainers",

  initialState: {
    trainers: [],
  },

  reducers: {
    setTrainersList: (state, action) => {
      state.trainers = action.payload;
    },
  },
});

export default slice.reducer;

// Actions

export const { setTrainersList } = slice.actions;
