import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import permissionsReducer from './permissionsSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    permissions: permissionsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store; 