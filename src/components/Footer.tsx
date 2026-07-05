import { Mail, MapPin, Phone, Globe, Share2, Tv } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#080808] px-6 py-12">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-4">
        <div>
          <p className="mb-3 font-display text-xl font-semibold text-white">COACHING SPORTIF</p>
          <p className="text-sm leading-7 text-white/50">Un accompagnement digital premium pour transformer votre pratique sportive et votre suivi quotidien.</p>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white/70">Ressources</h4>
          <ul className="space-y-2 text-sm text-white/50">
            <li>Programmes</li>
            <li>Coachs</li>
            <li>Tarifs</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white/70">Compte</h4>
          <ul className="space-y-2 text-sm text-white/50">
            <li><a href="/login">Connexion</a></li>
            <li><a href="/dashboard">Dashboard</a></li>
            <li><a href="/register">Créer un compte</a></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white/70">Contact</h4>
          <div className="space-y-3 text-sm text-white/50">
            <div className="flex items-center gap-2"><Mail size={14} className="text-[var(--color-accent)]" /> contact@coachingsportif.sn</div>
            <div className="flex items-center gap-2"><Phone size={14} className="text-[var(--color-accent)]" /> +221 77 123 45 67</div>
            <div className="flex items-center gap-2"><MapPin size={14} className="text-[var(--color-accent)]" /> Dakar, Sénégal</div>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-8 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/30 md:flex-row">
        <p>© 2026 Coaching Sportif. Tous droits réservés.</p>
        <div className="flex gap-3">
          {[Share2, Globe, Tv].map((Icon, index) => (
            <div key={index} className="rounded-full border border-white/10 p-2 hover:border-[var(--color-accent)] hover:text-white">
              <Icon size={15} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
