import { configureStore } from '@reduxjs/toolkit';
import { productsReducer } from '../pages/products/productsSlice';
import { viewReducer } from '../pages/products/viewedSlice';
import { categoryReducer } from '../pages/products/categorySlice'
import { tabReducer } from '../pages/tabSlice';

export const store = configureStore({
  reducer: {
    tabs: tabReducer,
    products: productsReducer,
    viewed: viewReducer,
    categories: categoryReducer,
  },
});
