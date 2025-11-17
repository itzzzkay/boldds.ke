import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { PRODUCTS } from "../data/products";

export default function Products() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Clothing", "Accessories", "Stationery"];

  const filtered =
    filter === "All"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === filter);

  return (
    <section className="products-page">
      <div className="container">
        <h2 className="section-title">All Products</h2>
        <p className="section-subtitle">
          Browse our full range of customizable products.
        </p>

        <div className="filter-row">
          {categories.map((c) => (
            <button
              key={c}
              className={filter === c ? "filter-btn active" : "filter-btn"}
              onClick={() => setFilter(c)}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="products-grid">
          {filtered.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
