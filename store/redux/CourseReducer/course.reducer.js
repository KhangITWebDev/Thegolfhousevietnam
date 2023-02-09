import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "course",

  initialState: {
    courseList: [],
    userRegister: [],
  },

  reducers: {
    setCourseList: (state, action) => {
      state.courseList = action.payload;
    },
    setUserRegister: (state, action) => {
      state.userRegister = action.payload;
    },
  },
});

export default slice.reducer;

// Actions

export const { setCourseList, setUserRegister } = slice.actions;
