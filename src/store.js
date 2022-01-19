import { configureStore } from '@reduxjs/toolkit';
import { fakeStoreApi } from './slices/fakeStoreApiSlice';

export const store = configureStore({
  reducer: {
    [fakeStoreApi.reducerPath]: fakeStoreApi.reducer,
  },
  middleware: defaultMiddleware => defaultMiddleware().concat(fakeStoreApi.middleware),
});
