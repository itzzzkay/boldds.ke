import { useParams, Link } from "react-router-dom";
import { PRODUCTS } from "../data/products";
import { useCart } from "../context/CartContext";
import { useState } from "react";

export default function ProductDetails() {
  const { slug } = useParams();
  const product = PRODUCTS.find((p) => p.slug === slug);
  const { addToCart } = useCart();

  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("M");
  const images = product ? product.images || [product.image] : [];
  const [activeImage, setActiveImage] = useState(images[0] || "");

  if (!product) {
    return (
      <section className="details-page">
        <div className="container">
          <h2>Product not found</h2>
          <Link to="/products" className="btn-outline">
            Back to Products
          </Link>
        </div>
      </section>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    alert("Added to cart!");
  };

  return (
    <section className="details-page">
      <div className="container details-layout fade-up">
        {/* Left: gallery */}
        <div className="details-gallery">
          <div className="details-main-image">
            <img src={activeImage} alt={product.name} />
          </div>

          {images.length > 1 && (
            <div className="details-thumbs-row">
              {images.map((img) => (
                <button
                  key={img}
                  className={
                    img === activeImage ? "thumb thumb-active" : "thumb"
                  }
                  onClick={() => setActiveImage(img)}
                >
                  <img src={img} alt={product.name} />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right: info */}
        <div className="details-info">
          <h1>{product.name}</h1>
          <p className="details-category">{product.category}</p>
          <p className="details-price">KSh{product.price}.00</p>

          <p className="details-description">{product.description}</p>

          <div className="details-select-row">
            <div className="details-select">
              <label>Size</label>
              <select
                value={size}
                onChange={(e) => setSize(e.target.value)}
                disabled={product.category === "Accessories"}
              >
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>
            </div>

            <div className="details-select">
              <label>Quantity</label>
              <div className="qty-control">
                <button
                  onClick={() =>
                    setQuantity((q) => (q > 1 ? q - 1 : 1))
                  }
                >
                  −
                </button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity((q) => q + 1)}>
                  +
                </button>
              </div>
            </div>
          </div>

          <button className="btn details-add" onClick={handleAddToCart}>
            Add to Cart
          </button>

          <Link to="/products" className="back-link">
            ← Back to all products
          </Link>
        </div>
      </div>
    </section>
  );
}
