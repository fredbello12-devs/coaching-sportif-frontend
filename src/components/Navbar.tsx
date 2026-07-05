import { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Menu, X, Zap } from "lucide-react";
import { useAppContext } from "../context/AppContext";

const navLinks = [
  { label: "Accueil", to: "/" },
  { label: "Programmes", to: "/#programmes" },
  { label: "Dashboard", to: "/dashboard" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isAuthenticated, logout, user } = useAppContext();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-black/90 backdrop-blur" : "bg-[var(--color-bg)]/80"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-2)] shadow-lg shadow-orange-500/20">
            <Zap size={18} className="text-black" />
          </div>
          <span className="font-display text-lg font-semibold tracking-[0.2em] text-white">
            COACHING<span className="ml-1 text-transparent bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-2)] bg-clip-text">SPORTIF</span>
          </span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => `text-sm uppercase tracking-[0.2em] transition ${isActive ? "text-[var(--color-accent)]" : "text-white/70 hover:text-white"}`}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          {isAuthenticated ? (
            <>
              <Link to="/profile" className="text-sm text-white/70 hover:text-white">{user?.name || "Profil"}</Link>
              <button
                onClick={() => {
                  logout();
                  navigate("/login");
                }}
                className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/80 transition hover:border-[var(--color-accent)] hover:text-white"
              >
                Déconnexion
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/80 transition hover:border-[var(--color-accent)] hover:text-white">
                Connexion
              </Link>
              <Link to="/register" className="rounded-full bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-2)] px-4 py-2 text-sm font-semibold text-black transition hover:opacity-90">
                Commencer
              </Link>
            </>
          )}
        </div>

        <button className="rounded-full border border-white/10 p-2 text-white md:hidden" onClick={() => setIsOpen((prev) => !prev)}>
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-white/10 bg-black/95 px-6 py-4 md:hidden">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} onClick={() => setIsOpen(false)} className="mb-3 block text-sm uppercase tracking-[0.2em] text-white/70">
              {link.label}
            </NavLink>
          ))}
          <Link to="/login" onClick={() => setIsOpen(false)} className="mt-2 block text-sm uppercase tracking-[0.2em] text-white/70">Connexion</Link>
        </div>
      )}
    </nav>
  );
}
