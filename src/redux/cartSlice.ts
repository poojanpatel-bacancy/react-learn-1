import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  qty: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Omit<CartItem, 'qty'>>) {
      debugger;
      console.log(JSON.parse(JSON.stringify(state.items)));
      const item = state.items.find(i => i.id === action.payload.id);
      if (item) {
        item.qty += 1;
      } else {
        state.items.push({ ...action.payload, qty: 1 });
      }
      console.log(JSON.parse(JSON.stringify(state.items)));
    },
    removeFromCart(state, action: PayloadAction<number>) {
      debugger;
      state.items = state.items.filter(i => i.id !== action.payload);    
    },
    increaseQty(state, action: PayloadAction<number>) {
      debugger;
      const item = state.items.find(i => i.id === action.payload);
      if (item) item.qty += 1;
    },
    decreaseQty(state, action: PayloadAction<number>) {
      debugger;
      const item = state.items.find(i => i.id === action.payload);
      if (item && item.qty > 1) item.qty -= 1;
      else if (item) state.items = state.items.filter(i => i.id !== action.payload);
    },
    clearCart(state) {
      debugger;
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, increaseQty, decreaseQty, clearCart } = cartSlice.actions;
export default cartSlice.reducer; 