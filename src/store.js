import { configureStore } from '@reduxjs/toolkit';
import { fakeStoreApi } from './slices/fakeStoreApiSlice';
import cartReducer from './slices/cartSlice';

const store = configureStore({
  reducer: {
    [fakeStoreApi.reducerPath]: fakeStoreApi.reducer,
    cart: cartReducer,
  },
  middleware: defaultMiddleware => defaultMiddleware().concat(fakeStoreApi.middleware),
});

export default store;
