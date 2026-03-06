import { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import CartItem from "./components/CartItem";

const productsData = [
  { id: 1, name: "Laptop", price: 50000, image: "/images/laptop.jpeg" },
  { id: 2, name: "Headphones", price: 2000, image: "/images/headphones.jpg" },
  { id: 3, name: "Smartphone", price: 25000, image: "/images/phone.jpeg" },
  { id: 4, name: "Shoes", price: 3000, image: "/images/shoes.jpg" }
];

function App() {

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    let newCart = [];

    for (let i = 0; i < cart.length; i++) {
      if (i !== index) {
        newCart.push(cart[i]);
      }
    }

    setCart(newCart);
  };

  let total = 0;

  for (let i = 0; i < cart.length; i++) {
    total = total + cart[i].price;
  }

  return (
    <div className="container">

      <Navbar cartCount={cart.length} />

      <h2>Products</h2>

      <div className="products">

        {productsData.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}

      </div>

      <div className="cart">

        <h2>Shopping Cart</h2>

        {cart.length === 0 && <p>Cart is empty</p>}

        {cart.map((item, index) => (
          <CartItem
            key={index}
            item={item}
            index={index}
            removeFromCart={removeFromCart}
          />
        ))}

        <h3>Total: ₹{total}</h3>

      </div>

    </div>
  );
}

export default App;