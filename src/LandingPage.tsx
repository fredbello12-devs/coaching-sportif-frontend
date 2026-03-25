import { useState, useEffect } from "react";
import {
  Zap,
  Menu,
  X,
  ArrowRight,
  Play,
  ArrowUpRight,
  ChevronDown,
  Check,
  Minus,
  Plus,
  Share2,
  Globe,
  Tv,
  Mail,
  Phone,
  MapPin,
  Star,
  Quote,
} from "lucide-react";

// Exemple de données (à adapter selon ton projet)
const navLinks = [
  { label: "Programmes", href: "#programmes" },
  { label: "Coachs", href: "#coachs" },
  { label: "Résultats", href: "#resultats" },
  { label: "Tarifs", href: "#tarifs" },
  { label: "FAQ", href: "#faq" },
];

const programmes = [
  {
    title: "Cardio Boost",
    subtitle: "Endurance",
    description: "Améliore ton souffle et ta résistance.",
    duration: "4 semaines",
    sessions: "3x/semaine",
    level: "Débutant",
    tag: "Cardio",
    color: "#FF4D00",
    icon: Play,
  },
  // ajoute les autres programmes ici
];

const stats = [
  { label: "Athlètes actifs", value: "2500+", color: "#FF4D00", icon: Zap },
  { label: "Satisfaction", value: "98%", color: "#FFB800", icon: Star },
  // ajoute les autres stats ici
];

const coachs = [
  {
    name: "Aminata",
    role: "Coach Fitness",
    exp: "5 ans d’expérience",
    specialites: ["Cardio", "Yoga"],
    rating: 4.8,
    clients: 120,
    emoji: "💃",
    color: "#FF4D00",
    featured: false,
  },
  {
    name: "Ibrahima",
    role: "Coach Musculation",
    exp: "7 ans d’expérience",
    specialites: ["Force", "Nutrition"],
    rating: 4.9,
    clients: 200,
    emoji: "🏋️",
    color: "#FFB800",
    featured: true,
  },
];

const testimonials = [
  {
    name: "Fatou",
    location: "Dakar",
    programme: "Cardio Boost",
    text: "J’ai retrouvé mon énergie et perdu 5kg en 2 mois !",
    rating: 5,
    result: "Transformation",
    emoji: "🔥",
  },
];

const plans = [
  {
    name: "Starter",
    desc: "Découvre nos programmes",
    price: "5 000 CFA",
    period: "/mois",
    features: ["Accès limité", "Support email"],
    cta: "Commencer",
    featured: false,
  },
  {
    name: "Pro",
    desc: "Accès complet + suivi",
    price: "15 000 CFA",
    period: "/mois",
    features: ["Tous les programmes", "Coach dédié", "Suivi en temps réel"],
    cta: "Choisir Pro",
    featured: true,
  },
];

const faqs = [
  { q: "Comment fonctionne l’abonnement ?", a: "Tu peux annuler à tout moment." },
  { q: "Ai-je besoin de matériel ?", a: "Certains programmes nécessitent du matériel de base." },
];

// ─── NAVBAR ────────────────────────────────────────────────────────────────
function Navbar() {
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
        scrolled ? "bg-black/90 backdrop-blur-md border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div
            className="w-8 h-8 rounded flex items-center justify-center"
            style={{ background: "linear-gradient(135deg,#FF4D00,#FFB800)" }}
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

        {/* CTA */}
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

        {/* Burger */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
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

// ─── PAGE PRINCIPALE ─────────────────────────────────────────────────────────
export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] font-body overflow-x-hidden">
      <Navbar />
      {/* Ajoute ici Hero, Ticker, Programmes, Stats, Coachs, Testimonials, Pricing, FAQ, CTABanner, Footer */}
    </div>
  );
}
