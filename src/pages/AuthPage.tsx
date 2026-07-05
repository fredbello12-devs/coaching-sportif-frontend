import { useState } from "react";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { loginUser } from "../services/api";
import logoSport from "../logo-sport.png";

type AuthMode = "login" | "register" | "reset";

export default function AuthPage() {
  const [mode, setMode] = useState<AuthMode>("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("sportif");
  const navigate = useNavigate();
  const { login } = useAppContext();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (mode === "register" && password !== confirmPassword) {
      window.alert("Les mots de passe ne correspondent pas.");
      return;
    }

    if (mode === "login") {
      try {
        const authResponse = await loginUser(email, password);
        login(authResponse.access_token, authResponse.user);
        navigate("/dashboard");
      } catch (error) {
        window.alert(error instanceof Error ? error.message : "Connexion impossible");
      }
      return;
    }

    if (mode === "register") {
      try {
        const authResponse = await loginUser(email, password);
        login(authResponse.access_token, authResponse.user);
        navigate("/dashboard");
      } catch (error) {
        window.alert(error instanceof Error ? error.message : "Inscription impossible");
      }
      return;
    }

    window.alert(`Lien de réinitialisation envoyé à ${email}`);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top_left,_rgba(255,77,0,0.18),_transparent_35%),linear-gradient(135deg,#050505,#111)] px-4 py-16 text-white">
      <div className="grid w-full max-w-6xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#0c0c0c] shadow-2xl shadow-orange-500/10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="hidden flex-col justify-center gap-6 bg-[linear-gradient(135deg,rgba(255,77,0,0.16),rgba(255,184,0,0.08))] p-10 lg:flex">
          <img src={logoSport} alt="Logo Coaching Sportif" className="w-40 rounded-2xl object-cover" />
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)]">Espace client</p>
            <h1 className="mb-4 font-display text-3xl font-semibold">Transforme ton parcours sportif avec un suivi premium.</h1>
            <p className="max-w-md text-sm leading-7 text-white/60">Suivez vos séances, votre progression et vos paiements depuis un tableau de bord pensé pour vous.</p>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
            <ShieldCheck size={16} className="text-[var(--color-accent)]" /> Accès sécurisé et expérience fluide
          </div>
        </div>

        <div className="flex items-center justify-center p-6 sm:p-10">
          <form onSubmit={handleSubmit} className="w-full max-w-md rounded-[1.5rem] border border-white/10 bg-[#111] p-8 shadow-inner shadow-black/30">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)]">Bienvenue</p>
            <h2 className="mb-6 font-display text-2xl font-semibold">
              {mode === "login" && "Connexion"}
              {mode === "register" && "Créer un compte"}
              {mode === "reset" && "Réinitialiser le mot de passe"}
            </h2>

            {mode === "register" && (
              <>
                <input value={name} onChange={(event) => setName(event.target.value)} placeholder="Nom complet" className="mb-4 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none ring-0" />
                <select value={role} onChange={(event) => setRole(event.target.value)} className="mb-4 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none">
                  <option value="sportif">Sportif</option>
                  <option value="coach">Coach</option>
                </select>
              </>
            )}

            <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Email" className="mb-4 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none" />

            {(mode === "login" || mode === "register") && (
              <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Mot de passe" className="mb-4 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none" />
            )}

            {mode === "register" && (
              <input type="password" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} placeholder="Confirmer le mot de passe" className="mb-4 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none" />
            )}

            <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-2)] px-4 py-3 text-sm font-semibold text-black transition hover:opacity-90">
              {mode === "login" && <>Se connecter <ArrowRight size={16} /></>}
              {mode === "register" && <>Créer mon compte <ArrowRight size={16} /></>}
              {mode === "reset" && <>Envoyer le lien <ArrowRight size={16} /></>}
            </button>

            <div className="mt-6 space-y-2 text-center text-sm text-white/50">
              {mode !== "login" && <button type="button" onClick={() => setMode("login")} className="text-[var(--color-accent)]">Déjà inscrit ? Se connecter</button>}
              {mode !== "register" && <button type="button" onClick={() => setMode("register")} className="block w-full text-[var(--color-accent)]">Créer un compte</button>}
              {mode !== "reset" && <button type="button" onClick={() => setMode("reset")} className="block w-full text-[var(--color-accent)]">Mot de passe oublié ?</button>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
