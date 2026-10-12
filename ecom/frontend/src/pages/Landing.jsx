import { Link } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { useAuth } from "../context/AuthContext.jsx";
import { ROLE_HOME } from "../routes/ProtectedRoute.jsx";

const FEATURES = [
  ["✦", "AI-Powered Recommendations", "Suggestions that improve with every click, search and purchase."],
  ["⌕", "Smart Product Discovery", "Find what you mean, not just what you typed, with intelligent search."],
  ["🔒", "Secure Shopping", "Encrypted sessions, hashed passwords and protected checkout."],
  ["◎", "Personalized Experience", "A storefront that adapts to your tastes and shopping habits."],
  ["♡", "Wishlist & Cart", "Save favorites and build your cart across every device."],
  ["⇢", "Order Tracking", "Follow every order from confirmation to your doorstep."],
];

const DEMO_PRODUCTS = [
  ["Aero Headphones", "98% match", "g1"],
  ["Linen Weekender", "94% match", "g2"],
  ["Studio Lamp", "91% match", "g3"],
];

export default function Landing() {
  const { isAuthenticated, user } = useAuth();
  const startTo = isAuthenticated ? ROLE_HOME[user.role] : "/register";

  return (
    <>
      <Navbar />
      <main>
        <section id="home" className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="pill">AI-powered commerce</span>
              <h1>Shop Smarter.<br /><span className="gradient-text">Discover Better.</span></h1>
              <p className="lead">An AI-powered shopping experience designed to help you discover products that match your interests.</p>
              <div className="cta-row">
                <Link className="btn btn-primary btn-lg" to={startTo}>Start Shopping</Link>
                <a className="btn btn-outline btn-lg" href="#products">Explore Products</a>
              </div>
              {!isAuthenticated && (
                <p className="muted small">Already a member? <Link to="/login">Sign in</Link> · New here? <Link to="/register">Create an account</Link></p>
              )}
            </div>
            <div className="hero-visual" aria-hidden="true">
              <div className="orb" />
              <div className="glass-card c1"><div className="thumb g1" /><b>Aero Headphones</b><small>Picked for you</small></div>
              <div className="glass-card c2"><div className="thumb g2" /><b>Linen Weekender</b><small>94% match</small></div>
              <div className="glass-card c3"><span className="spark">✦</span><b>Because you liked</b><small>Minimal desk setups</small></div>
            </div>
          </div>
        </section>

        <section id="products" className="section alt">
          <div className="container">
            <h2 className="section-title">Products picked around you</h2>
            <p className="section-sub">A preview of personalized discovery. The full catalog arrives in the next release.</p>
            <div className="grid-3">
              {DEMO_PRODUCTS.map(([name, match, g]) => (
                <article key={name} className="product-card">
                  <div className={`product-img ${g}`} />
                  <h3>{name}</h3><span className="badge">{match}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="features" className="section">
          <div className="container">
            <h2 className="section-title">Everything you need to shop with confidence</h2>
            <div className="grid-3">
              {FEATURES.map(([icon, title, text]) => (
                <article key={title} className="feature-card">
                  <span className="feature-icon" aria-hidden="true">{icon}</span>
                  <h3>{title}</h3><p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section alt">
          <div className="container about">
            <div>
              <h2 className="section-title left">An intelligent platform, not just a store</h2>
              <p>ShopAi brings e-commerce, data analytics, artificial intelligence and machine learning together so every visit feels personal and every recommendation earns its place.</p>
            </div>
            <ul className="chips">
              {["E-commerce", "Data Analytics", "Artificial Intelligence", "Machine Learning", "Personalization"].map((c) => <li key={c}>{c}</li>)}
            </ul>
          </div>
        </section>

        {!isAuthenticated && (
          <section className="section">
            <div className="container cta-band">
              <h2>Ready to discover your next favorite product?</h2>
              <div className="cta-row center">
                <Link className="btn btn-white btn-lg" to="/register">Create Account</Link>
                <Link className="btn btn-outline-light btn-lg" to="/login">Login</Link>
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
