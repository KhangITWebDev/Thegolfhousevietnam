import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "carts",

  initialState: {
    cartList: [],
  },

  reducers: {
    setCartList: (state, action) => {
      state.cartList = action.payload;
    },
    // setUserRegister: (state, action) => {
    //   state.userRegister = action.payload;
    // },
  },
});

export default slice.reducer;

// Actions

export const { setCartList } = slice.actions;
