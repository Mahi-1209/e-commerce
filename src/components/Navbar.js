import React from "react";
import { Link } from "react-router-dom";

/*
  Navbar shows the store name, a search input (optional),
  and the cart count with a link to the Cart page.
  Props:
    - cartCount: number
    - search: current search string
    - setSearch: function to update search
*/
function Navbar({ cartCount, search, setSearch }) {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/" className="brand">BeauMart</Link>
      </div>

      <div className="nav-center">
        <input
          className="search-input"
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="nav-right">
        <Link to="/cart" className="cart-link">
          Cart ({cartCount})
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;