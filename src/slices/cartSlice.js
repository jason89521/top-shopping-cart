import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

const cartAdapter = createEntityAdapter({
  sortComparer: (a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  },
});

export const cartSlice = createSlice({
  name: 'cart',
  initialState: cartAdapter.getInitialState({
    totalProducts: 0,
  }),
  reducers: {
    addProduct: (state, action) => {
      const entity = { ...action.payload };
      const selectedEntity = cartAdapter.getSelectors().selectById(state, entity.id);
      if (selectedEntity) {
        const newEntity = { ...selectedEntity, cnt: selectedEntity.cnt + 1 };
        cartAdapter.setOne(state, newEntity);
      } else {
        entity.cnt = 1;
        cartAdapter.addOne(state, entity);
      }
    },
  },
});

export const { addProduct } = cartSlice.actions;

export default cartSlice.reducer;
