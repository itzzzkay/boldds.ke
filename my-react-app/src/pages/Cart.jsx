import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import CartItem from "../components/CartItem";

export default function Cart() {
  const { cartItems, cartTotal, updateQuantity, removeFromCart, clearCart } =
    useCart();

  const isEmpty = cartItems.length === 0;

  return (
    <section className="cart-page">
      <div className="container cart-layout fade-up">
        <div className="cart-main">
          <h2>Shopping Cart</h2>

          {isEmpty ? (
            <div className="cart-empty">
              <p>Your cart is empty.</p>
              <Link to="/products" className="btn">
                Browse Products
              </Link>
            </div>
          ) : (
            <>
              {cartItems.map((item) => (
                <CartItem
                  key={item.product.slug}
                  item={item}
                  updateQuantity={updateQuantity}
                  removeFromCart={removeFromCart}
                />
              ))}
              <button className="cart-clear" onClick={clearCart}>
                Clear Cart
              </button>
            </>
          )}
        </div>

        <aside className="cart-summary">
          <h3>Order Summary</h3>
          <div className="cart-summary-row">
            <span>Subtotal</span>
            <span>KSh{cartTotal}.00</span>
          </div>
          <p className="cart-note">
            Shipping and taxes are calculated at checkout.
          </p>

          <button className="btn cart-checkout" disabled={isEmpty}>
            Proceed to Checkout
          </button>

          <Link to="/products" className="cart-continue">
            ← Continue shopping
          </Link>
        </aside>
      </div>
    </section>
  );
}
