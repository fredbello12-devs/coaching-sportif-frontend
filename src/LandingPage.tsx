import { useState, useEffect } from "react";
import {
  ArrowRight,
  Play,
  ChevronDown,
  Zap,
  Menu,
  X,
  Flame,
  Dumbbell,
  Wind,
  Heart,
  Star,
  Check,
  Plus,
  Minus,
  TrendingUp,
  Users,
  Award,
  Clock,
  ArrowUpRight,
  Quote,
  Share2,
  Globe,
  Tv,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

// ─── TYPES ───────────────────────────────────────────────────────────────────

interface Programme {
  icon: React.ElementType;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  sessions: string;
  level: string;
  color: string;
}

interface Coach {
  name: string;
  role: string;
  exp: string;
  specialites: string[];
  rating: number;
  clients: number;
  emoji: string;
  color: string;
  featured?: boolean;
}

interface Testimonial {
  name: string;
  location: string;
  programme: string;
  result: string;
  text: string;
  rating: number;
  emoji: string;
}

interface Plan {
  name: string;
  price: string;
  period: string;
  desc: string;
  features: string[];
  cta: string;
  featured: boolean;
}

interface Faq {
  q: string;
  a: string;
}

// ─── DATA ────────────────────────────────────────────────────────────────────

const navLinks = [
  { label: "Programmes", href: "#programmes" },
  { label: "Coachs", href: "#coachs" },
  { label: "Résultats", href: "#resultats" },
  { label: "Tarifs", href: "#tarifs" },
  { label: "FAQ", href: "#faq" },
];

const tickerItems = [
  "🏆 TRANSFORME TON CORPS",
  "⚡ DÉPASSE TES LIMITES",
  "🔥 COACHING PERSONNALISÉ",
  "💪 RÉSULTATS GARANTIS",
  "🎯 OBJECTIFS CONCRETS",
  "🏋️ PROGRAMMES SUR-MESURE",
];

const programmes: Programme[] = [
  {
    icon: Flame,
    tag: "Populaire",
    title: "PERTE DE POIDS",
    subtitle: "Fat Burner Intensif",
    description:
      "Brûle les graisses avec des séances HIIT et cardio adaptées à ton niveau. Résultats visibles en 4 semaines.",
    duration: "8 semaines",
    sessions: "5 séances / sem",
    level: "Débutant → Avancé",
    color: "#FF4D00",
  },
  {
    icon: Dumbbell,
    tag: "Best-seller",
    title: "PRISE DE MASSE",
    subtitle: "Hypertrophie & Force",
    description:
      "Programme de musculation progressif pour développer ta masse musculaire avec des exercices ciblés.",
    duration: "12 semaines",
    sessions: "4 séances / sem",
    level: "Intermédiaire",
    color: "#FFB800",
  },
  {
    icon: Wind,
    tag: "Nouveau",
    title: "ENDURANCE",
    subtitle: "Run & Performance",
    description:
      "Améliore tes capacités cardio-vasculaires pour les courses, trails ou simplement rester en forme.",
    duration: "10 semaines",
    sessions: "6 séances / sem",
    level: "Tous niveaux",
    color: "#FF4D00",
  },
  {
    icon: Heart,
    tag: "Bien-être",
    title: "REMISE EN FORME",
    subtitle: "Corps & Esprit",
    description:
      "Combine yoga, stretching et renforcement doux pour retrouver équilibre et vitalité au quotidien.",
    duration: "6 semaines",
    sessions: "3 séances / sem",
    level: "Débutant",
    color: "#FFB800",
  },
];

const coachs: Coach[] = [
  {
    name: "Aminata Diallo",
    role: "Coach Cardio & HIIT",
    exp: "8 ans d'expérience",
    specialites: ["HIIT", "Yoga", "Nutrition"],
    rating: 4.9,
    clients: 320,
    emoji: "👩🏾‍💪",
    color: "#FF4D00",
  },
  {
    name: "Ibrahima Ndiaye",
    role: "Coach Force & Musculation",
    exp: "12 ans d'expérience",
    specialites: ["Powerlifting", "Hypertrophie", "Récupération"],
    rating: 5.0,
    clients: 480,
    emoji: "🏋🏾",
    color: "#FFB800",
    featured: true,
  },
  {
    name: "Fatou Sarr",
    role: "Coach Bien-être & Mobilité",
    exp: "6 ans d'expérience",
    specialites: ["Stretching", "Pilates", "Méditation"],
    rating: 4.8,
    clients: 210,
    emoji: "🧘🏾‍♀️",
    color: "#FF4D00",
  },
];

const testimonials: Testimonial[] = [
  {
    name: "Moussa K.",
    location: "Dakar, Sénégal",
    programme: "Perte de poids",
    result: "-14 kg en 3 mois",
    text: "Je n'aurais jamais pensé atteindre cet objectif sans le suivi rigoureux de mon coach. L'application rend tout tellement simple et motivant !",
    rating: 5,
    emoji: "🧑🏾",
  },
  {
    name: "Aïssatou B.",
    location: "Abidjan, Côte d'Ivoire",
    programme: "Remise en forme",
    result: "+25% d'énergie",
    text: "Après ma grossesse, j'avais besoin d'un programme doux mais efficace. Fatou m'a accompagnée avec bienveillance. Je me sens comme une nouvelle femme !",
    rating: 5,
    emoji: "👩🏾",
  },
  {
    name: "Omar T.",
    location: "Bamako, Mali",
    programme: "Prise de masse",
    result: "+8 kg de muscle",
    text: "Le programme d'Ibrahima est incroyable. Progressif, bien structuré et les résultats sont là. Je recommande à 100% à tous ceux qui veulent vraiment changer.",
    rating: 5,
    emoji: "🧔🏾",
  },
];

const plans: Plan[] = [
  {
    name: "STARTER",
    price: "9 900",
    period: "FCFA / mois",
    desc: "Pour commencer ton parcours fitness",
    features: [
      "Accès à 5 programmes",
      "Suivi des progrès de base",
      "Communauté & forum",
      "App mobile incluse",
    ],
    cta: "Commencer",
    featured: false,
  },
  {
    name: "PRO",
    price: "24 900",
    period: "FCFA / mois",
    desc: "Le choix des athlètes sérieux",
    features: [
      "Accès illimité aux programmes",
      "Coach personnel dédié",
      "Suivi nutritionnel complet",
      "Sessions visio 2×/mois",
      "Analyses de performance",
      "Priorité support 24h",
    ],
    cta: "Choisir Pro",
    featured: true,
  },{
    name: "ELITE",
    price: "49 900",
    period: "FCFA / mois",
    desc: "Pour les résultats d'exception",
    features: [
      "Tout du plan Pro",
      "Programme 100% sur-mesure",
      "Sessions visio illimitées",
      "Suivi journalier coach",
      "Plan alimentaire personnalisé",
      "Accès événements exclusifs",
    ],
    cta: "Devenir Elite",
    featured: false,
  },
];

const faqs: Faq[] = [
  {
    q: "Comment fonctionne le coaching en ligne ?",
    a: "Après ton inscription, tu complètes un bilan sportif et nutritionnel. Ton coach dédié crée ensuite un programme 100% personnalisé. Vous échangez via l'application, par vidéo ou message. Le suivi est continu et les programmes s'adaptent à ta progression.",
  },
  {
    q: "Est-ce que je peux changer de programme en cours de route ?",
    a: "Absolument ! Ton coach peut ajuster ton programme à tout moment selon ton évolution, tes contraintes ou tes nouvelles envies. La flexibilité est au cœur de notre approche.",
  },
  {
    q: "Ai-je besoin de matériel spécifique ?",
    a: "Pas nécessairement. Nos programmes s'adaptent à ta situation : salle de sport, espace chez toi ou juste le poids de ton corps. Ton coach t'indiquera ce dont tu as besoin.",
  },
  {
    q: "Combien de temps avant de voir des résultats ?",
    a: "Les premiers changements sont souvent visibles dès 3 à 4 semaines. Les résultats significatifs arrivent entre 6 et 12 semaines selon tes objectifs et ton engagement.",
  },
  {
    q: "Puis-je annuler mon abonnement à tout moment ?",
    a: "Oui, sans engagement ni frais cachés. Tu peux annuler depuis ton tableau de bord à tout moment. L'accès reste actif jusqu'à la fin de la période payée.",
  },
  {
    q: "Les coachs sont-ils vraiment certifiés ?",
    a: "Tous nos coachs détiennent des certifications reconnues (BPJEPS, NSCA, ACE, etc.) et ont au minimum 3 ans d'expérience terrain avant de rejoindre notre plateforme.",
  },
];

const stats = [
  { icon: Users, value: "2 500+", label: "Athlètes accompagnés", color: "#FF4D00" },
  { icon: TrendingUp, value: "94%", label: "Atteignent leurs objectifs", color: "#FFB800" },
  { icon: Award, value: "45+", label: "Coachs certifiés", color: "#FF4D00" },
  { icon: Clock, value: "3 ans", label: "D'expertise prouvée", color: "#FFB800" },
];

// ─── NAVBAR ──────────────────────────────────────────────────────────────────

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
        scrolled
          ? "bg-black/90 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
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
            COACHING
            <span
              style={{
                background: "linear-gradient(135deg,#FF4D00,#FFB800)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {" "}
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
          <a href="/register"
            className="font-heading text-sm tracking-widest uppercase font-bold text-black px-6 py-2.5 rounded hover:opacity-90 transition-opacity"
            style={{ background: "linear-gradient(135deg,#FF4D00,#FFB800)" }}
          >
            Commencer
          </a>
        </div>

        {/* Burger */}
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
}// ─── HERO ────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#0A0A0A] pt-28 pb-16">
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#FF4D00 1px,transparent 1px),linear-gradient(90deg,#FF4D00 1px,transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      {/* Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-orange-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-yellow-500/5 blur-[90px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
        {/* LEFT */}
        <div className="flex flex-col gap-7">
          {/* Badge */}
          <div className="flex items-center gap-2 border border-orange-500/30 bg-orange-500/5 rounded-full px-4 py-2 w-fit">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            <span className="font-body text-sm text-orange-500 tracking-wide">
              #1 Plateforme de coaching en Afrique
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display leading-none tracking-wider text-white text-[80px] md:text-[100px] lg:text-[110px]">
            FORGE
            <br />
            <span
              style={{
                background: "linear-gradient(135deg,#FF4D00,#FFB800)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              TON
            </span>
            <br />
            CORPS
          </h1>

          {/* Sub */}
          <p className="font-body text-lg text-white/50 leading-relaxed max-w-md">
            Des coachs certifiés, des programmes sur-mesure et un suivi en temps réel pour atteindre tes objectifs — sans excuses.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="/register"
              className="group flex items-center gap-2 text-black font-heading font-bold text-sm tracking-widest uppercase px-8 py-4 rounded hover:opacity-90 transition-all"
              style={{ background: "linear-gradient(135deg,#FF4D00,#FFB800)" }}
            >
              Démarrer gratuitement
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <button className="flex items-center gap-2 border border-white/20 text-white font-heading text-sm tracking-widest uppercase px-8 py-4 rounded hover:border-orange-500/50 hover:bg-orange-500/5 transition-all">
              <Play size={14} className="fill-white" />
              Voir la démo
            </button>
          </div>

          {/* Mini stats */}
          <div className="flex gap-8 pt-2">
            {[
              { v: "2 500+", l: "Athlètes actifs" },
              { v: "98%", l: "Satisfaction" },
              { v: "45+", l: "Coachs certifiés" },
            ].map((s) => (
              <div key={s.l}>
                <div
                  className="font-display text-3xl"
                  style={{
                    background: "linear-gradient(135deg,#FF4D00,#FFB800)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {s.v}
                </div>
                <div className="font-body text-xs text-white/40 uppercase tracking-wide mt-1">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — Card */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-full max-w-sm" style={{ animation: "float 5s ease-in-out infinite" }}>
            <div className="rounded-2xl border border-white/10 bg-[#111] p-6 shadow-2xl">
              {/* Avatar */}
              <div className="relative rounded-xl h-52 flex items-center justify-center mb-5 bg-gradient-to-br from-orange-500/20 to-yellow-500/10">
                <div className="text-center">
                  <div
                    className="w-20 h-20 rounded-full mx-auto mb-2 flex items-center justify-center text-4xl"
                    style={{ background: "linear-gradient(135deg,#FF4D00,#FFB800)" }}
                  >
                    💪
                  </div>
                  <span className="font-heading text-xs text-white/50 tracking-widest uppercase">
                    Coach Personnel
                  </span>
                </div>
                <div className="absolute top-3 right-3 bg-orange-500 text-black text-xs font-heading font-bold tracking-widest uppercase px-3 py-1 rounded-full">
                  En ligne
                </div>
              </div>

              {/* Progress */}
              <p className="font-heading text-xs text-white/40 tracking-widest uppercase mb-3">
                Progression hebdo
              </p>
              {[
                { label: "Cardio", pct: 78, color: "#FF4D00" },
                { label: "Force", pct: 62, color: "#FFB800" },
                { label: "Mobilité", pct: 45, color: "#FF4D00" },
              ].map((b) => (
                <div key={b.label} className="mb-3">
                  <div className="flex justify-between mb-1">
                    <span className="font-body text-xs text-white/60">{b.label}</span>
                    <span className="font-body text-xs text-white/60">{b.pct}%</span>
                  </div>
                  <div className="h-1.5 bg-white/10 rounded-full">
                    <div className="h-full rounded-full" style={{ width: `${b.pct}%`, background: b.color }} />
                  </div>
                </div>
              ))}
            </div>

            {/* Floating badge */}
            <div className="absolute -left-8 top-1/3 bg-[#1A1A1A] border border-orange-500/30 rounded-xl px-4 py-3 shadow-xl hidden lg:block">
              <div
                className="font-display text-xl"
                style={{
                  background: "linear-gradient(135deg,#FF4D00,#FFB800)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                +8% Progression
              </div>
              <div className="font-body text-xs text-white/50 tracking-widest uppercase">
                Hebdomadaire
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
// ─── TICKER ──────────────────────────────────────────────────────────────────

function Ticker() {
  const items = [...tickerItems, ...tickerItems];
  return (
    <div
      className="overflow-hidden py-4"
      style={{ background: "linear-gradient(135deg,#FF4D00,#FFB800)" }}
    >
      <div
        style={{
          display: "flex",
          width: "max-content",
          animation: "ticker 22s linear infinite",
        }}
      >
        {items.map((item, i) => (
          <span
            key={i}
            className="font-display text-xl tracking-widest text-black whitespace-nowrap px-10"
          >
            {item}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes ticker {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

// ─── PROGRAMMES ──────────────────────────────────────────────────────────────

function Programmes() {
  return (
    <section id="programmes" className="py-24 bg-[#0A0A0A] relative">
      <div className="absolute left-0 top-1/2 w-96 h-96 bg-orange-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="font-heading text-orange-500 text-sm tracking-widest uppercase mb-3 block">
              — Nos Programmes
            </span>
            <h2 className="font-display text-6xl md:text-7xl text-white leading-none">
              CHOISIS
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg,#FF4D00,#FFB800)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                TON DÉFI
              </span>
            </h2>
          </div>
          <p className="font-body text-white/50 max-w-xs leading-relaxed">
            Des programmes conçus par des experts certifiés, adaptés à chaque
            profil et chaque objectif.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {programmes.map((prog) => {
            const Icon = prog.icon;
            return (
              <div
                key={prog.title}
                className="group relative bg-[#111] border border-white/5 rounded-2xl p-6 transition-all duration-500 hover:border-orange-500/30 hover:bg-[#131313] hover:-translate-y-1 cursor-pointer"
              >
                {/* Tag */}
                <span
                  className="inline-block text-xs font-heading font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4"
                  style={{
                    backgroundColor: `${prog.color}20`,
                    color: prog.color,
                  }}
                >
                  {prog.tag}
                </span>

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${prog.color}15` }}
                >
                  <Icon size={22} style={{ color: prog.color }} />
                </div>

                <h3 className="font-display text-2xl text-white tracking-wider mb-1">
                  {prog.title}
                </h3>
                <p className="font-heading text-xs text-white/40 tracking-widest uppercase mb-3">
                  {prog.subtitle}
                </p>
                <p className="font-body text-sm text-white/50 leading-relaxed mb-5">
                  {prog.description}
                </p>

                {/* Meta */}
                <div className="space-y-2 border-t border-white/5 pt-4">
                  {[
                    { l: "Durée", v: prog.duration },
                    { l: "Rythme", v: prog.sessions },
                    { l: "Niveau", v: prog.level },
                  ].map((m) => (
                    <div key={m.l} className="flex justify-between">
                      <span className="font-body text-xs text-white/30">
                        {m.l}
                      </span>
                      <span className="font-body text-xs text-white/70">
                        {m.v}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="absolute top-5 right-5 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all group-hover:border-orange-500/50">
                  <ArrowUpRight size={14} className="text-orange-500" />
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <a
            href="/register"
            className="inline-flex items-center gap-2 font-heading text-sm tracking-widest uppercase text-white/40 hover:text-orange-500 transition-colors border-b border-white/10 hover:border-orange-500/50 pb-1"
          >
            Voir tous les programmes <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── STATS ───────────────────────────────────────────────────────────────────

function Stats() {
  return (
    <section
      id="resultats"
      className="py-20 bg-[#0F0F0F] border-y border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="font-heading text-orange-500 text-sm tracking-widest uppercase mb-3 block">
            — Nos Résultats
          </span>
          <h2 className="font-display text-5xl md:text-6xl text-white">
            DES CHIFFRES QUI{" "}
            <span
              style={{
                background: "linear-gradient(135deg,#FF4D00,#FFB800)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              PARLENT
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.label}
                className="bg-[#111] border border-white/5 rounded-2xl p-8 text-center hover:border-orange-500/20 transition-all duration-300"
              >
                <div
                  className="w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center"
                  style={{ backgroundColor: `${s.color}15` }}
                >
                  <Icon size={24} style={{ color: s.color }} />
                </div>
                <div
                  className="font-display text-4xl md:text-5xl mb-2"
                  style={{
                    background: "linear-gradient(135deg,#FF4D00,#FFB800)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {s.value}
                </div>
                <p className="font-body text-sm text-white/40 leading-tight">
                  {s.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
function Coachs() {
  return (
    <section id="coachs" className="py-24 bg-[#080808] relative">
      <div className="absolute right-0 top-1/3 w-96 h-96 bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="font-heading text-orange-500 text-sm tracking-widest uppercase mb-3 block">
            — Nos Experts
          </span>
          <h2 className="font-display text-6xl md:text-7xl text-white leading-none">
            TES{" "}
            <span
              style={{
                background: "linear-gradient(135deg,#FF4D00,#FFB800)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              COACHS
            </span>
          </h2>
          <p className="font-body text-white/40 mt-4 max-w-md mx-auto">
            Des professionnels certifiés, passionnés et disponibles 7j/7.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {coachs.map((coach) => (
            <div
              key={coach.name}
              className={`relative rounded-2xl p-6 transition-all duration-500 cursor-pointer hover:scale-[1.02] ${
                coach.featured
                  ? "border border-yellow-500/30 scale-105"
                  : "bg-[#111] border border-white/5 hover:border-white/15"
              }`}
              style={
                coach.featured
                  ? {
                      background:
                        "linear-gradient(135deg,#1A1A1A 0%,#111 100%)",
                    }
                  : {}
              }
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{coach.emoji}</span>
                <div>
                  <h3 className="font-display text-xl text-white">
                    {coach.name}
                  </h3>
                  <p className="font-heading text-xs text-white/40 uppercase tracking-widest">
                    {coach.role}
                  </p>
                </div>
              </div>
              <p className="font-body text-sm text-white/50 mb-3">
                {coach.exp}
              </p>
              <p className="font-body text-sm text-white/50 mb-3">
                Spécialités : {coach.specialites.join(", ")}
              </p>
              <p className="font-body text-sm text-white/50">
                ⭐ {coach.rating} — {coach.clients} clients
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
// ─── TESTIMONIALS ────────────────────────────────────────────────────────────

function Testimonials() {
  return (
    <section className="py-24 bg-[#0A0A0A] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px,#FF4D00 1px,transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="font-heading text-orange-500 text-sm tracking-widest uppercase mb-3 block">
            — Témoignages
          </span>
          <h2 className="font-display text-6xl md:text-7xl text-white leading-none">
            ILS ONT{" "}
            <span
              style={{
                background: "linear-gradient(135deg,#FF4D00,#FFB800)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              TRANSFORMÉ
            </span>
            <br />
            LEUR VIE
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="group bg-[#111] border border-white/5 rounded-2xl p-7 hover:border-orange-500/20 transition-all duration-500 relative"
            >
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote size={48} className="text-orange-500" />
              </div>

              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star
                    key={j}
                    size={14}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="font-body text-white/60 leading-relaxed mb-5 italic">
                "{t.text}"
              </p>

              <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-3 py-1 mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                <span className="font-heading text-xs text-orange-500 tracking-widest uppercase">
                  {t.result}
                </span>
              </div>

              <div className="flex items-center gap-3 border-t border-white/5 pt-5">
                <div className="w-10 h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center text-xl">
                  {t.emoji}
                </div>
                <div>
                  <div className="font-heading font-bold text-white text-sm">
                    {t.name}
                  </div>
                  <div className="font-body text-xs text-white/30">
                    {t.location} · {t.programme}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── PRICING ─────────────────────────────────────────────────────────────────

function Pricing() {
  return (
    <section id="tarifs" className="py-24 bg-[#080808] relative">
      <div className="absolute right-1/4 top-1/4 w-80 h-80 bg-yellow-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="font-heading text-orange-500 text-sm tracking-widest uppercase mb-3 block">
            — Tarifs
          </span>
          <h2 className="font-display text-6xl md:text-7xl text-white leading-none">
            INVESTIS EN{" "}
            <span
              style={{
                background: "linear-gradient(135deg,#FF4D00,#FFB800)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              TOI
            </span>
          </h2>
          <p className="font-body text-white/40 mt-3">
            Sans engagement. Annule quand tu veux.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-center">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 transition-all duration-300 ${
                plan.featured
                  ? "border border-orange-500/40 scale-105 shadow-2xl"
                  : "bg-[#111] border border-white/5 hover:border-white/10"
              }`}
              style={
                plan.featured
                  ? {
                      background:
                        "linear-gradient(135deg,#1A1A1A 0%,#151515 50%,#111 100%)",
                      boxShadow: "0 20px 60px rgba(255,77,0,0.1)",
                    }
                  : {}
              }
            >
              {plan.featured && (
                <div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 text-black text-xs font-heading font-bold tracking-widest uppercase px-5 py-1.5 rounded-full"
                  style={{
                    background: "linear-gradient(135deg,#FF4D00,#FFB800)",
                  }}
                >
                  <Zap size={12} className="fill-black" /> Recommandé
                </div>
              )}

              <div className="mb-5">
                <h3 className="font-display text-3xl text-white tracking-wider mb-1">
                  {plan.name}
                </h3>
                <p className="font-body text-sm text-white/40">{plan.desc}</p>
              </div>

              <div className="mb-6">
                <span className="font-display text-5xl text-white">
                  {plan.price}
                </span>
                <span className="font-body text-sm text-white/40 ml-1">
                  {plan.period}
                  <ul className="space-y-2 mb-6">
  {plan.features.map((f) => (
    <li key={f} className="flex items-center gap-2 text-white/60 text-sm">
      <Check size={14} className="text-orange-500" /> {f}
    </li>
  ))}
</ul>

<button
  className="w-full font-heading text-sm tracking-widest uppercase py-3 rounded-xl font-bold transition-all duration-300"
  style={
    plan.featured
      ? { background: "linear-gradient(135deg,#FF4D00,#FFB800)", color: "#000" }
      : { border: "1px solid #FF4D0030", color: "#FF4D00", background: "transparent" }
  }
>
  {plan.cta}
</button>
</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{
                        background: plan.featured ? "#FF4D00" : "#FF4D0020",
                      }}
                    >
                      <Check
                        size={11}
                        className={
                          plan.featured ? "text-white" : "text-orange-500"
                        }
                      />
                    </div>
                    <span className="font-body text-sm text-white/60">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="/register"
                className="block w-full text-center font-heading text-sm tracking-widest uppercase py-4 rounded-xl font-bold transition-all duration-300"
                style={
                  plan.featured
                    ? {
                        background:
                          "linear-gradient(135deg,#FF4D00,#FFB800)",
                        color: "#000",
                      }
                    : {
                        border: "1px solid rgba(255,255,255,0.1)",
                        color: "#fff",
                      }
                }
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FAQ ─────────────────────────────────────────────────────────────────────

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-[#0A0A0A]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="font-heading text-orange-500 text-sm tracking-widest uppercase mb-3 block">
            — FAQ
          </span>
          <h2 className="font-display text-6xl md:text-7xl text-white leading-none">
            TES{" "}
            <span
              style={{
                background: "linear-gradient(135deg,#FF4D00,#FFB800)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              QUESTIONS
            </span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                open === i
                  ? "border-orange-500/30 bg-[#111]"
                  : "border-white/5 bg-[#0D0D0D] hover:border-white/10"
              }`}
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-heading text-base md:text-lg font-bold text-white pr-6 tracking-wide">
                  {faq.q}
                </span>
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all ${
                    open === i
                      ? "border-orange-500 bg-orange-500/10"
                      : "border-white/20"
                  }`}
                >
                  {open === i ? (
                    <Minus size={14} className="text-orange-500" />
                  ) : (
                    <Plus size={14} className="text-white/50" />
                  )}
                </div>
              </button>

              {open === i && (
                <div className="px-6 pb-6">
                  <p className="font-body text-white/50 leading-relaxed border-t border-white/5 pt-4">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA BANNER ──────────────────────────────────────────────────────────────

function CTABanner() {
  return (
    <section className="py-24 bg-[#0F0F0F] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-yellow-500/10" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#FF4D00 1px,transparent 1px),linear-gradient(90deg,#FF4D00 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 border border-orange-500/30 bg-orange-500/5 rounded-full px-4 py-2 mb-8">
          <Zap size={14} className="text-orange-500 fill-orange-500" />
          <span className="font-body text-sm text-orange-500">
            Commence aujourd'hui — 7 jours offerts
          </span>
        </div>

        <h2 className="font-display text-6xl md:text-8xl text-white leading-none mb-6">
          PRÊT À
          <br />
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
          Rejoins des milliers d'athlètes qui ont déjà transformé leur corps et
          leur vie avec Coaching Sportif.
        </p>

        <a
          href="/register"
          className="group inline-flex items-center gap-3 text-black font-heading font-bold text-lg tracking-widest uppercase px-10 py-5 rounded-xl hover:opacity-90 transition-all"
          style={{ background: "linear-gradient(135deg,#FF4D00,#FFB800)" }}
        >
          Démarrer gratuitement
          <ArrowRight
            size={20}
            className="group-hover:translate-x-1 transition-transform"
          />
        </a>

        <p className="font-body text-xs text-white/20 mt-6">
          Sans carte bancaire · Sans engagement · Annulation à tout moment
        </p>
      </div>
    </section>
  );
}

// ─── FOOTER ──────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-8 h-8 rounded flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg,#FF4D00,#FFB800)",
                }}
              >
                <Zap size={16} className="text-black fill-black" />
              </div>
              <span className="font-display text-xl tracking-wider text-white">
                COACHING
                <span
                  style={{
                    background: "linear-gradient(135deg,#FF4D00,#FFB800)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {" "}
                  SPORTIF
                </span>
              </span>
            </div>
            <p className="font-body text-sm text-white/30 leading-relaxed mb-5">
              La plateforme #1 de coaching sportif en ligne pour l'Afrique
              francophone.
            </p>
            <div className="flex gap-3">
              // APRÈS (corrigé)
                npm start
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

          {/* Links 1 */}
          <div>
            <h4 className="font-heading font-bold text-white text-sm tracking-widest uppercase mb-5">
              Plateforme
            </h4>
            <ul className="space-y-3">
              {["Nos Programmes", "Nos Coachs", "Tarifs", "Témoignages"].map(
                (l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="font-body text-sm text-white/40 hover:text-orange-500 transition-colors"
                    >
                      {l}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h4 className="font-heading font-bold text-white text-sm tracking-widest uppercase mb-5">
              Compte
            </h4>
            <ul className="space-y-3">
              {["Connexion", "Inscription", "Mon Dashboard", "Paramètres"].map(
                (l) => (<li key={l}>
                    <a
                      href="#"
                      className="font-body text-sm text-white/40 hover:text-orange-500 transition-colors"
                    >
                      {l}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-white text-sm tracking-widest uppercase mb-5">
              Contact
            </h4>
            <div className="space-y-3">
              {[
                { Icon: Mail, text: "contact@coachingsportif.sn" },
                { Icon: Phone, text: "+221 33 XXX XX XX" },
                { Icon: MapPin, text: "Dakar, Sénégal" },
              ].map(({ Icon, text }) => (
                <div key={text} className="flex items-center gap-3 text-white/40">
                  <Icon size={14} className="text-orange-500 flex-shrink-0" />
                  <span className="font-body text-sm">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs text-white/20">
            © 2025 Coaching Sportif. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            {["Confidentialité", "CGU", "Mentions légales"].map((l) => (
              <a
                key={l}
                href="#"
                className="font-body text-xs text-white/20 hover:text-white/50 transition-colors"
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── PAGE PRINCIPALE ─────────────────────────────────────────────────────────

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