import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { products } from './data/products';
import { addToCart, increaseQty, decreaseQty } from '../../redux/cartSlice';
import type { CartItem } from '../../redux/cartSlice';

const ProductList: React.FC = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: any) => state.cart.items) as CartItem[];

  const getQty = (id: number) => {
    const item = cartItems.find((item: CartItem) => item.id === id);
    return item ? item.qty : 0;
  };

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product) => {
          const qty = getQty(product.id);
          return (
            <li key={product.id} style={{ marginBottom: 16 }}>
              <span>{product.name} - ₹{product.price}</span>
              {qty === 0 ? (
                <button onClick={() => dispatch(addToCart(product))} style={{ marginLeft: 8 }}>Add to Cart</button>
              ) : (
                <>
                  <button onClick={() => dispatch(decreaseQty(product.id))} style={{ marginLeft: 8 }}>-</button>
                  <span style={{ margin: '0 8px' }}>{qty}</span>
                  <button onClick={() => dispatch(increaseQty(product.id))} style={{ marginLeft: 0 }}>+</button>
                </>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductList; 