import React from 'react';
import { useSelector } from 'react-redux';
import type { CartItem } from '../../redux/cartSlice';

const CartSummary: React.FC = () => {
  const items = useSelector((state: any) => state.cart.items) as CartItem[];
  const totalItems = items.reduce((sum: number, item: CartItem) => sum + item.qty, 0);
  const totalPrice = items.reduce((sum: number, item: CartItem) => sum + item.qty * item.price, 0);

  return (
    <div style={{ border: '1px solid #ccc', padding: 16, marginTop: 16 }}>
      <h3>Cart Summary</h3>
      <div>Total Items: {totalItems}</div>
      <div>Total Price: ₹{totalPrice}</div>
    </div>
  );
};

export default CartSummary; 