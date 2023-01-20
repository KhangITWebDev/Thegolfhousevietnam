import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "province",

  initialState: {
    province: [],
    district: [],
    ward: [],
  },

  reducers: {
    setProvince: (state, action) => {
      state.province = action.payload;
    },
    setDistrict: (state, action) => {
      state.district = action.payload;
    },
    setWard: (state, action) => {
      state.ward = action.payload;
    },
  },
});

export default slice.reducer;

// Actions

export const { setProvince, setDistrict, setWard } = slice.actions;
