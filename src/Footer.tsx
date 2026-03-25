// ─── FOOTER ──────────────────────────────────────────────────────────────────
import { Zap, Mail, Phone, MapPin, Share2, Globe, Tv } from "lucide-react";

export default function Footer() {
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
            </div>
            <p className="font-body text-sm text-white/30 leading-relaxed mb-5">
              La plateforme #1 de coaching sportif en ligne pour l'Afrique
              francophone.
            </p>
            <div className="flex gap-3">
              {[Share2, Globe, Tv].map((Icon, i) => (
                <a
                  key={i}
                  href="/"
                  className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-white/40 hover:text-orange-500 hover:border-orange-500/30 transition-all"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Plateforme */}
          <div>
            <h4 className="font-heading font-bold text-white text-sm tracking-widest uppercase mb-5">
              Plateforme
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Nos Programmes", href: "/" },
                { label: "Nos Coachs", href: "/" },
                { label: "Tarifs", href: "/" },
                { label: "Témoignages", href: "/" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="font-body text-sm text-white/40 hover:text-orange-500 transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Compte */}
          <div>
            <h4 className="font-heading font-bold text-white text-sm tracking-widest uppercase mb-5">
              Compte
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Connexion", href: "/login" },
                { label: "Inscription", href: "/register" },
                { label: "Mon Dashboard", href: "/dashboard" },
                { label: "Paramètres", href: "/dashboard" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="font-body text-sm text-white/40 hover:text-orange-500 transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
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
                <div
                  key={text}
                  className="flex items-center gap-3 text-white/40"
                >
                  <Icon size={14} className="text-orange-500 flex-shrink-0" />
                  <span className="font-body text-sm">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bas de page */}
        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs text-white/20">
            © 2025 Coaching Sportif. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            {[
              { label: "Confidentialité", href: "/" },
              { label: "CGU", href: "/" },
              { label: "Mentions légales", href: "/" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="font-body text-xs text-white/20 hover:text-white/50 transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
