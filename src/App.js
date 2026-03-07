import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import productsData from "./data/products";

import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import CartPage from "./pages/CartPage";

/*
  App: main application component
  - Manages cart state (stored in localStorage so it persists)
  - Handles add/remove actions
  - Passes search and category state to Home via props
*/
function App() {
  // search and filter state for product listing
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  // cart: array of product objects.
  // We persist cart to localStorage so a refresh keeps items.
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem("beaumart_cart");
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  // whenever cart changes, save to localStorage
  useEffect(() => {
    localStorage.setItem("beaumart_cart", JSON.stringify(cart));
  }, [cart]);

  // Add product to cart (we keep it simple: each click pushes a product instance)
  const addToCart = (product) => {
    // NOTE: Modern JS often uses "spread" like [...cart, product].
    // That's short for "create a new array with the existing items then add product".
    // Here we use that because it's clear and standard in React:
    setCart(prev => {
      const next = prev.concat(product); // concat returns a new array (safe)
      return next;
    });
  };

  // Remove item by index
  const removeFromCart = (index) => {
    setCart(prev => {
      const next = [];
      for (let i = 0; i < prev.length; i++) {
        if (i !== index) next.push(prev[i]);
      }
      return next;
    });
  };

  // Clear cart
  const clearCart = () => setCart([]);

  return (
    <div>
      <Navbar cartCount={cart.length} search={search} setSearch={setSearch} />

      <Routes>
        <Route path="/" element={
          <Home
            products={productsData}
            onAdd={addToCart}
            search={search}
            category={category}
            setCategory={setCategory}
          />
        } />

        <Route path="/product/:id" element={<ProductDetails onAdd={addToCart} />} />

        <Route path="/cart" element={
          <CartPage cart={cart} onRemove={removeFromCart} onClear={clearCart} />
        } />

        <Route path="*" element={<div className="page"><h2>Page not found</h2></div>} />
      </Routes>
    </div>
  );
}

export default App;