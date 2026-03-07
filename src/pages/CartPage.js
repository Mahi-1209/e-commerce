import React from "react";
import CartItem from "../components/CartItem";

/*
 Cart page lists items in the cart and shows total.
 For simplicity this implementation considers each "add" creates a separate item.
 (Later you can combine same product into quantity)
 Props:
  - cart: array of products
  - onRemove(index)
  - onClear()
*/
function CartPage({ cart, onRemove, onClear }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="page cart-page">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty — try adding a product.</p>
      ) : (
        <>
          <div className="cart-list">
            {cart.map((item, idx) => (
              <CartItem key={idx} item={item} index={idx} onRemove={onRemove} />
            ))}
          </div>

          <div className="cart-summary">
            <div>Total: <strong>₹{total}</strong></div>
            <div className="cart-actions-bottom">
              <button className="btn" onClick={onClear}>Clear Cart</button>
              <button className="btn" onClick={() => alert("Checkout flow not implemented in this frontend demo.")}>Checkout</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default CartPage;