import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  total: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const { id, title, price, image } = action.payload;
      state.total += 1;
      // Check whether the product has already been in the state,
      // if so, plus one. Otherwise, add this product to the state.
      if (state[id]) state[id].cnt += 1;
      else
        state[id] = {
          cnt: 1,
          title,
          image,
          price,
        };
    },
  },
});

export const { addProduct } = cartSlice.actions;

export default cartSlice.reducer;
