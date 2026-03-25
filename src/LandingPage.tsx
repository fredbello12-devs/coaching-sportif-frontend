import {
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
  Zap,
} from "lucide-react";
import { useState } from "react";

// ─── NAVBAR ────────────────────────────────────────────────────────────────
function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <Zap size={20} className="text-orange-500" />
          <span className="font-display text-xl text-white">Coaching Sportif</span>
        </a>
        <div className="flex gap-6">
          <a href="#programmes" className="text-white/60 hover:text-orange-500">Programmes</a>
          <a href="#coachs" className="text-white/60 hover:text-orange-500">Coachs</a>
          <a href="#tarifs" className="text-white/60 hover:text-orange-500">Tarifs</a>
          <a href="#faq" className="text-white/60 hover:text-orange-500">FAQ</a>
        </div>
      </div>
    </nav>
  );
}

// ─── HERO ────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center bg-[#0A0A0A] pt-28 pb-16">
      <div className="text-center">
        <h1 className="font-display text-6xl md:text-8xl text-white mb-6">
          FORGE <span className="text-orange-500">TON CORPS</span>
        </h1>
        <p className="text-white/60 max-w-md mx-auto mb-8">
          Des coachs certifiés, des programmes sur-mesure et un suivi en temps réel.
        </p>
        <a
          href="/register"
          className="inline-flex items-center gap-2 px-8 py-4 rounded font-bold text-black"
          style={{ background: "linear-gradient(135deg,#FF4D00,#FFB800)" }}
        >
          Démarrer gratuitement <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
}

// ─── TICKER ──────────────────────────────────────────────────────────────────
function Ticker() {
  const items = ["Cardio", "Force", "Mobilité", "Nutrition"];
  return (
    <div className="overflow-hidden py-4" style={{ background: "linear-gradient(135deg,#FF4D00,#FFB800)" }}>
      <div style={{ display: "flex", width: "max-content", animation: "ticker 22s linear infinite" }}>
        {items.map((item, i) => (
          <span key={i} className="font-display text-xl text-black px-10">{item}</span>
        ))}
      </div>
    </div>
  );
}

// ─── PROGRAMMES ──────────────────────────────────────────────────────────────
function Programmes() {
  return (
    <section id="programmes" className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-display text-5xl text-white mb-12">CHOISIS TON DÉFI</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Exemple d’une carte programme */}
          <div className="bg-[#111] p-6 rounded-2xl border border-white/10">
            <h3 className="text-white text-xl mb-2">Cardio Boost</h3>
            <p className="text-white/50 text-sm">Améliore ton endurance et ta respiration.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── STATS ───────────────────────────────────────────────────────────────────
function Stats() {
  return (
    <section id="resultats" className="py-20 bg-[#0F0F0F] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="font-display text-5xl text-white mb-12">DES CHIFFRES QUI PARLENT</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-[#111] p-8 rounded-2xl">
            <div className="text-4xl font-bold text-orange-500">2500+</div>
            <p className="text-white/40">Athlètes actifs</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── COACHS ──────────────────────────────────────────────────────────────────
function Coachs() {
  return (
    <section id="coachs" className="py-24 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="font-display text-5xl text-white mb-12">TES COACHS</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-[#111] p-6 rounded-2xl">
            <h3 className="text-white text-xl">Aminata</h3>
            <p className="text-white/50">Coach Fitness</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── TESTIMONIALS ────────────────────────────────────────────────────────────
function Testimonials() {
  return (
    <section className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="font-display text-5xl text-white mb-12">ILS ONT TRANSFORMÉ LEUR VIE</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-[#111] p-6 rounded-2xl">
            <p className="text-white/60 italic">"J’ai retrouvé mon énergie et perdu 5kg en 2 mois !"</p>
            <p className="text-white/40 mt-2">Fatou · Dakar</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── PRICING ─────────────────────────────────────────────────────────────────
function Pricing() {
  return (
    <section id="tarifs" className="py-24 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="font-display text-5xl text-white mb-12">INVESTIS EN TOI</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-[#111] p-8 rounded-2xl">
            <h3 className="text-white text-xl mb-2">Starter</h3>
            <p className="text-white/50">5 000 CFA / mois</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── FAQ ─────────────────────────────────────────────────────────────────────
function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const faqs = [
    { q: "Comment fonctionne l’abonnement ?", a: "Tu peux annuler à tout moment." },
    { q: "Ai-je besoin de matériel ?", a: "Certains programmes nécessitent du matériel de base." },
  ];
  return (
    <section id="faq" className="py-24 bg-[#0A0A0A]">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="font-display text-5xl text-white mb-12 text-center">TES QUESTIONS</h2>
        {faqs.map((faq, i) => (
          <div key={i} className="border border-white/10 rounded-xl mb-4">
            <button className="w-full p-4 text-left text-white" onClick={() => setOpen(open === i ? null : i)}>
              {faq.q}
            </button>
            {open === i && <p className="p-4 text-white/60">{faq.a}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
function CTABanner() {
  return (
    <section className="py-24 bg-[#0F0F0F] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-yellow-500/10" />
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 border border-orange-500/30 bg-orange-500/5 rounded-full px-4 py-2 mb-8">
          <Zap size={14} className="text-orange-500 fill-orange-500" />
          <span className="font-body text-sm text-orange-500">
            Commence aujourd&apos;hui — 7 jours offerts
          </span>
        </div>

        <h2 className="font-display text-6xl md:text-8xl text-white leading-none mb-6">
          PRÊT À <br />
          <span
            style={{
              background: "linear-gradient(135deg,#FF4D00,#FFB800)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            CHANGER ?
          </span>
        </h2>

        <p className="font-body text-lg text-white/40 max-w-md mx-auto mb-10">
          Rejoins des milliers d&apos;athlètes qui ont déjà transformé leur corps et leur vie.
        </p>

        <a
          href="/register"
          className="group inline-flex items-center gap-3 text-black font-heading font-bold text-lg tracking-widest uppercase px-10 py-5 rounded-xl hover:opacity-90 transition-all"
          style={{ background: "linear-gradient(135deg,#FF4D00,#FFB800)" }}
        >
          Démarrer gratuitement
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </a>

        <p className="font-body text-xs text-white/20 mt-6">
          Sans carte bancaire · Sans engagement · Annulation à tout moment
        </p>
      </div>
    </section>
  );
}
function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Zap size={16} className="text-orange-500" />
              <span className="font-display text-xl text-white">Coaching Sportif</span>
            </div>
            <p className="text-white/30 text-sm mb-5">
              La plateforme #1 de coaching sportif en ligne pour l&apos;Afrique francophone.
            </p>
            <div className="flex gap-3">
              {[Share2, Globe, Tv].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-white/40 hover:text-orange-500 hover:border-orange-500/30 transition-all"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading font-bold text-white text-sm uppercase mb-5">Plateforme</h4>
            <ul className="space-y-3">
              {[
                { label: "Nos Programmes", href: "#programmes" },
                { label: "Nos Coachs", href: "#coachs" },
                { label: "Tarifs", href: "#tarifs" },
                { label: "FAQ", href: "#faq" },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-white/40 hover:text-orange-500 text-sm">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Account */}
          <div>
            <h4 className="font-heading font-bold text-white text-sm uppercase mb-5">Compte</h4>
            <ul className="space-y-3">
              {[
                { label: "Connexion", href: "/login" },
                { label: "Inscription", href: "/register" },
                { label: "Dashboard", href: "/dashboard" },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-white/40 hover:text-orange-500 text-sm">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-white text-sm uppercase mb-5">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-white/40">
                <Mail size={14} className="text-orange-500" />
                <span className="text-sm">contact@coachingsportif.sn</span>
              </div>
              <div className="flex items-center gap-3 text-white/40">
                <Phone size={14} className="text-orange-500" />
                <span className="text-sm">+221 33 XXX XX XX</span>
              </div>
              <div className="flex items-center gap-3 text-white/40">
                <MapPin size={14} className="text-orange-500" />
                <span className="text-sm">Dakar, Sénégal</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/20">© 2025 Coaching Sportif. Tous droits réservés.</p>
          <div className="flex gap-6">
            {["Confidentialité", "CGU", "Mentions légales"].map((l) => (
              <a key={l} href="#" className="text-xs text-white/20 hover:text-white/50">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] font-body overflow-x-hidden">
      <Navbar />
      <Hero />
      <Ticker />
      <Programmes />
      <Stats />
      <Coachs />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTABanner />
      <Footer />
    </div>
  );
}
