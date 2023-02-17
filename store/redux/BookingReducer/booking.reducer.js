import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "booking",

  initialState: {
    userLogin: [],
    locationList: [],
    registration: [],
    schedule: [],
    bookingList: [],
  },

  reducers: {
    setUserLogin: (state, action) => {
      state.userLogin = action.payload;
    },
    setLocationList: (state, action) => {
      state.locationList = action.payload;
    },
    setRegistration: (state, action) => {
      state.registration = action.payload;
    },
    setSchedule: (state, action) => {
      state.schedule = action.payload;
    },
    setBookingList: (state, action) => {
      state.bookingList = action.payload;
    },
  },
});

export default slice.reducer;

// Actions

export const {
  setUserLogin,
  setLocationList,
  setRegistration,
  setSchedule,
  setBookingList,
} = slice.actions;
