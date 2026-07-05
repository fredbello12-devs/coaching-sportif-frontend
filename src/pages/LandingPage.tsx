import { ArrowRight, Award, Dumbbell, Flame, Play, Sparkles, Users, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const programmes = [
  { title: "Perte de poids", description: "HIIT et cardio sur mesure", icon: Flame },
  { title: "Prise de masse", description: "Hypertrophie et force", icon: Dumbbell },
  { title: "Remise en forme", description: "Équilibre et mobilité", icon: Sparkles },
];

export default function LandingPage() {
  return (
    <div className="bg-[var(--color-bg)] text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,77,0,0.18),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(255,184,0,0.12),_transparent_30%)]" />
        <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-center gap-8 px-6 py-24 text-center sm:px-10 lg:px-12 lg:py-32">
          <div className="rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-sm uppercase tracking-[0.3em] text-orange-300">Transforme ton parcours</div>
          <h1 className="max-w-4xl font-display text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">Un coaching premium pour progresser avec méthode, énergie et suivi quotidien.</h1>
          <p className="max-w-2xl text-lg leading-8 text-white/60">Découvrez un espace dédié à votre progression avec des programmes personnalisés, un planning clair et un accompagnement de qualité.</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/register" className="flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-2)] px-6 py-3 font-semibold text-black transition hover:opacity-90">Commencer maintenant <ArrowRight size={16} /></Link>
            <a href="#programmes" className="flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm text-white/70 transition hover:border-[var(--color-accent)] hover:text-white"><Play size={16} /> Voir les programmes</a>
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-6 text-sm text-white/50">
            <span className="flex items-center gap-2"><Users size={16} className="text-[var(--color-accent)]" /> +3 500 clients accompagnés</span>
            <span className="flex items-center gap-2"><Award size={16} className="text-[var(--color-accent)]" /> Suivi certifié</span>
            <span className="flex items-center gap-2"><Zap size={16} className="text-[var(--color-accent)]" /> Résultats visibles</span>
          </div>
        </div>
      </section>

      <section id="programmes" className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-12">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-accent)]">Programmes</p>
            <h2 className="mt-2 font-display text-3xl font-semibold">Des offres pensées pour chaque objectif.</h2>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {programmes.map((programme) => {
            const Icon = programme.icon;
            return (
              <div key={programme.title} className="rounded-[1.5rem] border border-white/10 bg-[#111] p-6 shadow-lg shadow-black/20">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-500/10 text-[var(--color-accent)]"><Icon size={20} /></div>
                <h3 className="font-display text-xl font-semibold">{programme.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/60">{programme.description}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
