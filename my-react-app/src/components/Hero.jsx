import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero">
      <img
        src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?auto=format&fit=crop&w=1600&q=80"
        alt="Workspace"
        className="hero-image"
      />
      <div className="hero-overlay" />

      <div className="hero-content fade-up">
        <h1 className="hero-title">Wear Your Story. Print Your Identity.</h1>
        <p className="hero-subtitle">
          Custom hoodies, tees, mugs, notebooks, and everyday essentials — made
          for the creators, the teams, the students, the vibers.
        </p>
        <div className="hero-actions">
          <Link to="/products" className="btn">
            Shop Products
          </Link>
          <Link to="/contact" className="btn-outline">
            Start Your Idea
          </Link>
        </div>
      </div>
    </section>
  );
}
