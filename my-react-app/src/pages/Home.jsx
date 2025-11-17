import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import Testimonials from "../components/Testimonials";
import { PRODUCTS } from "../data/products";
import { Link } from "react-router-dom";

export default function Home() {
  const featured = PRODUCTS.slice(0, 3);

  return (
    <main>
      <Hero />

      {/* =========================== */}
      {/* FEATURED PRODUCTS           */}
      {/* =========================== */}
      <section className="home-section fade-up">
        <div className="container">
          <h2 className="section-title">Top Picks This Month</h2>
          <p className="section-subtitle">
            The pieces everyone’s copping right now — trending, clean, and built
            different.
          </p>

          <div className="products-grid">
            {featured.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* =========================== */}
      {/* WHY CHOOSE BOLDDS           */}
      {/* =========================== */}
      <section className="why-section section-split fade-up">
        <div className="container split-inner">
          <div className="split-image">
            <img
              src={`${import.meta.env.BASE_URL}images/whyy.jpg`}
              alt="Custom merch workspace"
            />
          </div>

          <div className="split-content">
            <h2 className="section-title">Why Thousands Choose BOLDDS</h2>
            <p className="section-subtitle">
              Not all custom merch is made equal. BOLDDS hits different — here’s
              why:
            </p>

            <div className="why-grid">
              <div className="why-item">
                <h3>⭐ Quality You Can Feel</h3>
                <p>
                  Premium hoodies, tees, mugs, notebooks, and accessories. No
                  thin fabric. No fading prints.
                </p>
              </div>

              <div className="why-item">
                <h3>⭐ Customization That Looks Clean</h3>
                <p>
                  Minimal, aesthetic, crisp designs made for real drip — not
                  noise.
                </p>
              </div>

              <div className="why-item">
                <h3>⭐ Built for Students, Teams & Creators</h3>
                <p>
                  Whether it’s for your club, your squad, or just your vibe —
                  BOLDDS brings ideas to life.
                </p>
              </div>

              <div className="why-item">
                <h3>⭐ Affordable, Without Looking Cheap</h3>
                <p>
                  High-quality, premium-feel merch that doesn’t drain your
                  wallet.
                </p>
              </div>

              <div className="why-item">
                <h3>⭐ Fast Turnaround Times</h3>
                <p>Events coming up? No problem — we deliver fast.</p>
              </div>

              <div className="why-item">
                <h3>⭐ Small Batch Friendly</h3>
                <p>
                  No minimum orders. Even one item gets premium treatment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================== */}
      {/* HOW IT WORKS                */}
      {/* =========================== */}
      <section className="how-section section-split split-reverse fade-up">
        <div className="container split-inner">
          <div className="split-image">
            <img
              src={`${import.meta.env.BASE_URL}images/how.jpg`}
              alt="Printing and production process"
            />
          </div>

          <div className="split-content">
            <h2 className="section-title">How BOLDDS Brings Your Idea to Life</h2>
            <p className="section-subtitle">Simple. Fast. Aesthetic.</p>

            <div className="how-grid">
              <div className="how-item">
                <span>1️⃣</span>
                <h3>You come with the vibe.</h3>
                <p>Send your idea, artwork, logo, inspo pic, or even a sketch.</p>
              </div>

              <div className="how-item">
                <span>2️⃣</span>
                <h3>We design it clean.</h3>
                <p>We refine your idea into a crisp, print-ready design.</p>
              </div>

              <div className="how-item">
                <span>3️⃣</span>
                <h3>You pick your blank.</h3>
                <p>
                  Hoodie, tee, tote, mug, notebook, sticker pack — whatever fits
                  your vision.
                </p>
              </div>

              <div className="how-item">
                <span>4️⃣</span>
                <h3>We print it premium.</h3>
                <p>High-quality prints that don’t crack or fade.</p>
              </div>

              <div className="how-item">
                <span>5️⃣</span>
                <h3>You get your drip.</h3>
                <p>Delivered fast. Made to last. Made to stand out.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================== */}
      {/* WHO WE PRINT FOR            */}
      {/* =========================== */}
      <section className="who-section section-split fade-up">
        <div className="container split-inner">
          <div className="split-image">
            <img
              src="/images/who.jpg"
              alt="Custom mugs and notebooks"
            />
          </div>

          <div className="split-content">
            <h2 className="section-title">Perfect For:</h2>

            <div className="who-grid">
              <div className="who-item">
                <h3>🎓 Students & Campus Life</h3>
                <p>
                  Society merch, squad hoodies, farewell gifts, birthdays — all
                  covered.
                </p>
              </div>

              <div className="who-item">
                <h3>💼 Small Businesses</h3>
                <p>
                  Merch for branding, TikTok content, product shoots, packaging,
                  and staff wear.
                </p>
              </div>

              <div className="who-item">
                <h3>✍️ Creators & Aesthetic Lovers</h3>
                <p>
                  Notebooks, tees, hoodies, cases, stickers — match your whole
                  vibe.
                </p>
              </div>

              <div className="who-item">
                <h3>🎁 Personalized Gifts</h3>
                <p>
                  Clean, meaningful gifts for birthdays, friendships, and
                  celebrations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================== */}
      {/* OUR MISSION                 */}
      {/* =========================== */}
      <section className="mission-section fade-up">
        <div className="container">
          <h2 className="section-title">Our Mission</h2>
          <p className="section-subtitle">
            To let people wear what they feel. To turn ideas into style. To make
            drip personal — not mass-produced.
          </p>

          <div className="mission-image-wrapper">
            <img
              src="/images/mission.jpg"
              alt="Creative desk workspace"
            />
          </div>
        </div>
      </section>

      {/* =========================== */}
      {/* OUR PROMISE                 */}
      {/* =========================== */}
      <section className="promise-section section-split split-reverse fade-up">
        <div className="container split-inner">
          <div className="split-image">
            <img
              src="/images/promise.jpg"
              alt="Folded streetwear clothing"
            />
          </div>

          <div className="split-content">
            <h2 className="section-title">The BOLDDS Promise</h2>
            <div className="promise-grid">
              <div className="promise-item">✔ You will love the quality</div>
              <div className="promise-item">✔ Prints will not fade</div>
              <div className="promise-item">
                ✔ Colors match your design exactly
              </div>
              <div className="promise-item">✔ Quick delivery times</div>
              <div className="promise-item">
                ✔ 100% aesthetic, every single time
              </div>
              <div className="promise-item">
                ✔ Fair pricing for premium gear
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================== */}
      {/* SHOP BY CATEGORY            */}
      {/* =========================== */}
      <section className="categories-section fade-up">
        <div className="container">
          <h2 className="section-title">Shop by Category</h2>

          <div className="categories-grid">
            <Link to="/products" className="category-card">
              <div className="category-image-wrapper">
                <img
                  src="/images/cat-clothing.jpg"
                  alt="Clothing merch"
                />
              </div>
              <h3>Clothing</h3>
              <p>Hoodies, tees, caps — streetwear heat.</p>
            </Link>

            <Link to="/products" className="category-card">
              <div className="category-image-wrapper">
                <img
                  src="/images/cat-accessories.jpg"
                  alt="Accessories"
                />
              </div>
              <h3>Accessories</h3>
              <p>Mugs, stickers, totes, cases, bottles.</p>
            </Link>

            <Link to="/products" className="category-card">
              <div className="category-image-wrapper">
                <img
                  src="/images/cat-stationery.jpg"
                  alt="Stationery"
                />
              </div>
              <h3>Stationery</h3>
              <p>Clean, aesthetic notebooks for studying & planning.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* =========================== */}
      {/* TESTIMONIALS                */}
      {/* =========================== */}
      <Testimonials />
    </main>
  );
}
