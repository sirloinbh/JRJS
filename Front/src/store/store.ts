// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import categoryReducer from './categorySlice';
import pageReducer from './pageSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    category: categoryReducer,
    page: pageReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
