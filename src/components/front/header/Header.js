import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = ({ cartItems }) => {
  return (
    <header className="header">
      <div>
        <h1>
          <Link to="/" className="logo">
            Electronic Shop
          </Link>
        </h1>
      </div>
      <div className="header-links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/signup">SignUp</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/cart" className="cart">
              <i class="fas fa-shopping-cart" />
              <span className="cart-lenth">
                {cartItems.length === 0 ? "" : cartItems.length}
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
