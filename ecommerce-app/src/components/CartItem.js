function CartItem({ item, index, removeFromCart }) {

  return (
    <div className="cart-item">

      {item.name} - ₹{item.price}

      <button onClick={() => removeFromCart(index)}>
        Remove
      </button>

    </div>
  );

}

export default CartItem;