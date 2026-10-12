import { Link } from "react-router-dom";
import Logo from "./Logo.jsx";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Logo light />
          <p>An AI-powered shopping platform built around you.</p>
        </div>
        <div>
          <h4>Quick links</h4>
          <a href="#features">Features</a><a href="#about">About</a>
          <Link to="/login">Login</Link><Link to="/register">Create account</Link>
        </div>
        <div>
          <h4>Contact</h4>
          <a href="mailto:support@ShopAi.example">support@ShopAi.example</a>
          <span>Mon–Fri, 9am–6pm</span>
        </div>
        <div>
          <h4>Legal</h4>
          <a href="#privacy">Privacy Policy</a><a href="#terms">Terms</a>
        </div>
      </div>
      <div className="container footer-bottom">© {new Date().getFullYear()} ShopAi. All rights reserved.</div>
    </footer>
  );
}
