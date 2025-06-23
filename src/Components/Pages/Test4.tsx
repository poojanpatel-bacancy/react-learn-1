import ProductList from '../shopping_cart/ProductList';
import Cart from '../shopping_cart/Cart';
import CartSummary from '../shopping_cart/CartSummary';

function Test4() {
    return (
        <>
            <h2>Shopping Cart - <p style={{ color: 'red' }}>Redux demo</p></h2>
            <div style={{ display: 'flex', gap: 32 }}>
                <div>
                    <ProductList />
                    <CartSummary />
                </div>
                <Cart />
            </div>
        </>
    );
}

export default Test4;