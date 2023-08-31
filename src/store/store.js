import { configureStore } from '@reduxjs/toolkit';
import { productSlice } from '../slice/products/productSlice';
import { authSlice } from '../slice/authSlice';

export const store = configureStore({
  reducer: {
    products: productSlice.reducer,
    auth: authSlice.reducer,
  },
});
