import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import LandingPage from "./src/LandingPage";
import auth from "./src/auth";
import DashboardPage from "./src/Dashboard";

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

// ------------------ AuthPage (Login/Register/Reset) ------------------
type AuthMode = "login" | "register" | "reset";

function AuthPage() {
  const [mode, setMode] = useState<AuthMode>("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("sportif");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mode === "login") {
      console.log("Login:", { email, password });
    } else if (mode === "register") {
      console.log("Register:", { name, role, email, password, confirmPassword });
    } else {
      console.log("Reset password:", { email });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <form onSubmit={handleSubmit} className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md">
        <img src="logo-sport.png" alt="Coaching Sportif" className="mx-auto mb-4 w-20 h-20" />

        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
          {mode === "login" && "Connexion Coaching Sportif"}
          {mode === "register" && "Créer un compte Coaching Sportif"}
          {mode === "reset" && "Réinitialiser votre mot de passe"}
        </h2>

        {mode === "register" && (
          <>
            <input type="text" placeholder="Nom complet" value={name} onChange={(e) => setName(e.target.value)} className="border p-3 rounded w-full mb-4" />
            <select value={role} onChange={(e) => setRole(e.target.value)} className="border p-3 rounded w-full mb-4">
              <option value="sportif">Sportif</option>
              <option value="coach">Coach</option>
            </select>
          </>
        )}

        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="border p-3 rounded w-full mb-4" />

        {(mode === "login" || mode === "register") && (
          <input type="password" placeholder="Mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} className="border p-3 rounded w-full mb-4" />
        )}

        {mode === "register" && (
          <input type="password" placeholder="Confirmer le mot de passe" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="border p-3 rounded w-full mb-4" />
        )}

        <button type="submit" className="bg-blue-600 text-white w-full py-2 rounded font-semibold hover:bg-blue-700 transition">
          {mode === "login" && "Se connecter"}
          {mode === "register" && "Créer mon compte"}
          {mode === "reset" && "Envoyer le lien"}
        </button>

        <div className="text-sm text-center text-gray-500 mt-4 space-y-2">
          {mode !== "login" && (
            <p><button type="button" onClick={() => setMode("login")} className="text-blue-600 hover:underline">Déjà inscrit ? Se connecter</button></p>
          )}
          {mode !== "register" && (
            <p><button type="button" onClick={() => setMode("register")} className="text-green-600 hover:underline">Créer un compte</button></p>
          )}
          {mode !== "reset" && (
            <p><button type="button" onClick={() => setMode("reset")} className="text-orange-600 hover:underline">Mot de passe oublié ?</button></p>
          )}
        </div>
      </form>
    </div>
  );
}

// ------------------ Pages Placeholder ------------------
function LandingPage() {
  return <div className="p-8 text-center">Bienvenue sur la plateforme Coaching Sportif</div>;
}

function DashboardPage() {
  return <div className="p-8 text-center">Votre tableau de bord sportif</div>;
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
