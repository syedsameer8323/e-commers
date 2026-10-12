import { useNavigate } from "react-router-dom";
import Logo from "../components/Logo.jsx";
import { useAuth } from "../context/AuthContext.jsx";

// Placeholders only. Replace the body of each with the real dashboard in later modules.
function Shell({ title, children }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  return (
    <div className="dash">
      <header className="dash-bar">
        <Logo />
        <div className="dash-user">
          <span className="badge">{user.role}</span>
          <button className="btn btn-outline" onClick={async () => { await logout(); navigate("/login"); }}>Logout</button>
        </div>
      </header>
      <main className="dash-main">
        <h1>{title}</h1>
        {children}
        <div className="empty-state"><span>✦</span><p>Nothing here yet. This area is coming soon.</p></div>
      </main>
    </div>
  );
}

export function CustomerDashboard() {
  const { user } = useAuth();
  return <Shell title={`Welcome, ${user.name}`}><p className="muted">Your personalized recommendations will appear here.</p></Shell>;
}
export const SellerDashboard = () => <Shell title="Seller Dashboard"><p className="muted">Manage your products and orders here.</p></Shell>;
export const AdminDashboard = () => <Shell title="Admin Dashboard"><p className="muted">Manage users, products and analytics here.</p></Shell>;
