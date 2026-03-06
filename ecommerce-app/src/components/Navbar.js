function Navbar({ cartCount }) {

  return (
    <div className="navbar">

      <h2>BeauMart</h2>

      <div>
        Cart: {cartCount}
      </div>

    </div>
  );

}

export default Navbar;