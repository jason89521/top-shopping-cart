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
  initialState: cartAdapter.getInitialState(),
  reducers: {
    addProduct: (state, action) => {
      const { id } = action.payload;
      const selectedEntity = cartAdapter.getSelectors().selectById(state, id);
      if (selectedEntity) {
        const newEntity = { ...selectedEntity, cnt: selectedEntity.cnt + 1 };
        cartAdapter.setOne(state, newEntity);
      } else {
        const newEntity = { ...action.payload, cnt: 1 };
        cartAdapter.addOne(state, newEntity);
      }
    },
    updateCntById: {
      reducer: (state, action) => {
        const { id, newCnt } = action.payload;
        const selectedEntity = cartAdapter.getSelectors().selectById(state, id);
        cartAdapter.setOne(state, { ...selectedEntity, cnt: newCnt });
      },
      prepare: (id, cnt) => {
        const cntNum = parseInt(cnt, 10);
        const newCnt = isNaN(cntNum) || cntNum < 0 ? 0 : cntNum;
        return { payload: { id, newCnt } };
      },
    },
    incrementById: (state, action) => {
      const selectedEntity = { ...cartAdapter.getSelectors().selectById(state, action.payload) };
      selectedEntity.cnt += 1;
      cartAdapter.setOne(state, selectedEntity);
    },
    decrementById: (state, action) => {
      const selectedEntity = { ...cartAdapter.getSelectors().selectById(state, action.payload) };
      const newCnt = selectedEntity.cnt - 1;
      selectedEntity.cnt = newCnt < 0 ? 0 : newCnt;
      cartAdapter.setOne(state, selectedEntity);
    },
    removeById: cartAdapter.removeOne,
  },
});

export const { addProduct, updateCntById, incrementById, decrementById, removeById } =
  cartSlice.actions;

export const { selectAll: getAllFromCart } = cartAdapter.getSelectors();

export default cartSlice.reducer;
