import React from "react";

/*
 Props:
  - item: product object in cart
  - index: position in cart array
  - onRemove(index)
  - onChangeQty(index, delta)
*/
function CartItem({ item, index, onRemove, onChangeQty }) {
  // If the cart stores quantity, adapt accordingly. For simplicity we store repeated items.
  return (
    <div className="cart-row">
      <div className="cart-left">
        <img src={item.image} alt={item.name} className="cart-thumb"/>
        <div>
          <div className="cart-name">{item.name}</div>
          <div className="cart-category">{item.category}</div>
        </div>
      </div>

      <div className="cart-right">
        <div className="cart-price">₹{item.price}</div>
        <div className="cart-actions">
          <button className="small-btn" onClick={() => onRemove(index)}>Remove</button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;