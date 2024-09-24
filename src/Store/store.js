import { configureStore } from '@reduxjs/toolkit'
import {setupListeners} from '@reduxjs/toolkit/query';
import { ProductSlice } from './Slices/ProductSlice';

const store = configureStore({
  reducer: {
    product:ProductSlice.reducer
  },
})

setupListeners(store.dispatch);

export default store;