import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "course",

  initialState: {
    courseList: [],
  },

  reducers: {
    setCourseList: (state, action) => {
      state.courseList = action.payload;
    },
    // setUserToUsersList: (state, action) => {
    //   state.usersList.push(action.payload);
    // },
  },
});

export default slice.reducer;

// Actions

export const { setCourseList } = slice.actions;
