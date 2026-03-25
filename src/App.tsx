import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import LandingPage from "./LandingPage";
import AuthPage from "./AuthPage";
import DashboardPage from "./Dashboard";

// ------------------ Navbar Responsive ------------------
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white px-6 py-3 flex justify-between items-center shadow-md">
      <div className="flex items-center gap-2">
        <img src="/assets/logo.png" alt="Coaching Sportif" className="w-10 h-10" />
        <span className="font-bold text-lg">Coaching Sportif</span>
      </div>

      {/* Menu Desktop */}
      <div className="hidden md:flex gap-6">
        <Link to="/" className="hover:text-green-300 transition">Accueil</Link>
        <Link to="/auth" className="hover:text-green-300 transition">Authentification</Link>
        <Link to="/dashboard" className="hover:text-green-300 transition">Dashboard</Link>
      </div>

      {/* Bouton Burger Mobile */}
      <button className="md:hidden focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-blue-600 flex flex-col items-center gap-4 py-4 md:hidden">
          <Link to="/" className="hover:text-green-300 transition" onClick={() => setIsOpen(false)}>Accueil</Link>
          <Link to="/auth" className="hover:text-green-300 transition" onClick={() => setIsOpen(false)}>Authentification</Link>
          <Link to="/dashboard" className="hover:text-green-300 transition" onClick={() => setIsOpen(false)}>Dashboard</Link>
        </div>
      )}
    </nav>
  );
}

// ------------------ App ------------------
function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
          </Routes>
        </main>
        <footer className="bg-gray-100 text-center py-4 text-sm text-gray-600">
          © 2026 Coaching Sportif - Projet Frontend UNIPRO
        </footer>
      </div>
    </Router>
  );
}

export default App;
