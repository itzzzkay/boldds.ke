import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  const { slug, name, category, price, image } = product;

  return (
    <article className="product-card fade-up">
      <div className="product-image-wrapper">
        <span className="product-category">{category}</span>
        <img src={image} alt={name} className="product-image" loading="lazy" />
      </div>

      <div className="product-info">
        <h3>{name}</h3>
        <p className="product-price">KSh{price}.00</p>

        <Link to={`/products/${slug}`} className="view-btn">
          View Product
        </Link>
      </div>
    </article>
  );
}
