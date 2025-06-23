import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increaseQty, decreaseQty, removeFromCart } from '../../redux/cartSlice';
import type { CartItem } from '../../redux/cartSlice';

const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const items = useSelector((state: any) => state.cart.items) as CartItem[];

  if (items.length === 0) return <div><h2>Cart</h2><p>Cart is empty.</p></div>;

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {items.map((item: CartItem) => (
          <li key={item.id} style={{ marginBottom: 16 }}>
            <span>{item.name} - ₹{item.price} x {item.qty}</span>
            <button onClick={() => dispatch(decreaseQty(item.id))} style={{ marginLeft: 8 }}>-</button>
            <button onClick={() => dispatch(increaseQty(item.id))} style={{ marginLeft: 0 }}>+</button>
            <button onClick={() => dispatch(removeFromCart(item.id))} style={{ marginLeft: 8 }}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart; 