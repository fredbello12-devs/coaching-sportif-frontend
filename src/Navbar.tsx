// ─── NAVBAR ──────────────────────────────────────────────────────────────────
import { useState, useEffect } from "react";
import { Zap, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Programmes", href: "#programmes" },
  { label: "Coachs", href: "#coachs" },
  { label: "Tarifs", href: "#tarifs" },
  { label: "FAQ", href: "#faq" },
  { label: "Dashboard", href: "/dashboard" }, // 🔹 lien vers Dashboard
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/90 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <div
            className="w-8 h-8 rounded flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg,#FF4D00,#FFB800)",
              boxShadow: "0 0 20px rgba(255,77,0,0.4)",
            }}
          >
            <Zap size={16} className="text-black fill-black" />
          </div>
          <span className="font-display text-2xl tracking-wider text-white">
            COACHING{" "}
            <span
              style={{
                background: "linear-gradient(135deg,#FF4D00,#FFB800)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              SPORTIF
            </span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="font-heading text-sm tracking-widest uppercase text-white/60 hover:text-orange-500 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA Auth */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/login"
            className="font-heading text-sm tracking-widest uppercase text-white/60 hover:text-white transition-colors px-4 py-2"
          >
            Connexion
          </a>
          <a
            href="/register"
            className="font-heading text-sm tracking-widest uppercase font-bold text-black px-6 py-2.5 rounded hover:opacity-90 transition-opacity"
            style={{ background: "linear-gradient(135deg,#FF4D00,#FFB800)" }}
          >
            Commencer
          </a>
        </div>

        {/* Burger menu */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/5 px-6 py-6 flex flex-col gap-5">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setIsOpen(false)}
              className="font-heading text-lg tracking-widest uppercase text-white/70 hover:text-orange-500 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/login"
            className="font-heading text-sm tracking-widest uppercase text-white/60 hover:text-white transition-colors text-center"
          >
            Connexion
          </a>
          <a
            href="/register"
            className="font-heading text-sm tracking-widest uppercase font-bold text-black px-6 py-3 rounded text-center"
            style={{ background: "linear-gradient(135deg,#FF4D00,#FFB800)" }}
          >
            Commencer maintenant
          </a>
        </div>
      )}
    </nav>
  );
}
