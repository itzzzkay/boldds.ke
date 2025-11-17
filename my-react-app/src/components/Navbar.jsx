import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { cartCount } = useCart();
  const location = useLocation();

  const toggleMode = () => {
    document.body.classList.toggle("light-mode");
  };

  const isActive = (path) => (location.pathname === path ? "active" : "");

  return (
    <nav className="nav">
      <div className="nav-inner">
        <div className="logo">BOLDDS</div>

        <button className="mode-toggle" onClick={toggleMode}>
          ☀ / 🌙
        </button>

        <div className="hamburger" onClick={() => setOpen(!open)}>
          <span className="line" />
          <span className="line" />
          <span className="line" />
        </div>

        <ul className={open ? "nav-links nav-active" : "nav-links"}>
          <li>
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className={isActive("/")}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              onClick={() => setOpen(false)}
              className={isActive("/products")}
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={() => setOpen(false)}
              className={isActive("/about")}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className={isActive("/contact")}
            >
              Contact
            </Link>
          </li>
        </ul>

        <div className="nav-right">
          <Link to="/cart" className="cart-icon" onClick={() => setOpen(false)}>
            🛒
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </Link>

          <div className="nav-buttons">
            <button className="btn-login">Login</button>
            <button className="btn-signup">Sign Up</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
