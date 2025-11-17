export default function CartItem({ item, updateQuantity, removeFromCart }) {
  const { product, quantity } = item;

  return (
    <div className="cart-item">
      <div className="cart-item-left">
        <img src={product.image} alt={product.name} />
        <div>
          <h3>{product.name}</h3>
          <p className="cart-item-category">{product.category}</p>
          <button
            className="cart-remove"
            onClick={() => removeFromCart(product.slug)}
          >
            Remove
          </button>
        </div>
      </div>

      <div className="cart-item-right">
        <p className="cart-price">KSh{product.price}.00</p>

        <div className="cart-qty">
          <button
            onClick={() => updateQuantity(product.slug, quantity - 1)}
            aria-label="Decrease quantity"
          >
            −
          </button>
          <span>{quantity}</span>
          <button
            onClick={() => updateQuantity(product.slug, quantity + 1)}
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>

        <p className="cart-subtotal">
          KSh{product.price * quantity}.00
        </p>
      </div>
    </div>
  );
}
