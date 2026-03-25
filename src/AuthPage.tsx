import { useState } from "react";
import { ArrowRight, User } from "lucide-react";

type AuthMode = "login" | "register" | "reset";

export default function AuthPage() {
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
    <div className="flex min-h-screen bg-[#0A0A0A] text-white">
      {/* Sidebar */}
      <div className="hidden md:flex w-64 bg-[#111] border-r border-white/10 flex-col items-center justify-center">
        <User size={40} className="text-orange-500 mb-4" />
        <h2 className="font-display text-xl">Coaching Sportif</h2>
        <p className="text-white/40 text-sm mt-2">Ton espace personnel</p>
      </div>

      {/* Formulaire principal */}
      <div className="flex-1 flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="bg-[#111] p-10 rounded-2xl shadow-lg w-full max-w-md"
        >
          <h1 className="font-display text-2xl text-white mb-6 text-center">
            {mode === "login" && "Connexion Coaching Sportif"}
            {mode === "register" && "Créer un compte Coaching Sportif"}
            {mode === "reset" && "Réinitialiser votre mot de passe"}
          </h1>

          {mode === "register" && (
            <>
              <input
                type="text"
                placeholder="Nom complet"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-[#222] text-white focus:outline-none mb-4"
              />
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-[#222] text-white focus:outline-none mb-4"
              >
                <option value="sportif">Sportif</option>
                <option value="coach">Coach</option>
              </select>
            </>
          )}

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-[#222] text-white focus:outline-none mb-4"
          />

          {(mode === "login" || mode === "register") && (
            <input
              type="password"
              placeholder="Mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-[#222] text-white focus:outline-none mb-4"
            />
          )}

          {mode === "register" && (
            <input
              type="password"
              placeholder="Confirmer le mot de passe"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-[#222] text-white focus:outline-none mb-4"
            />
          )}

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-bold text-black hover:opacity-90 transition"
            style={{ background: "linear-gradient(135deg,#FF4D00,#FFB800)" }}
          >
            {mode === "login" && <>Se connecter <ArrowRight size={16} /></>}
            {mode === "register" && <>Créer mon compte <ArrowRight size={16} /></>}
            {mode === "reset" && <>Envoyer le lien <ArrowRight size={16} /></>}
          </button>

          {/* Switch modes */}
          <div className="text-sm text-center text-white/40 mt-6 space-y-2">
            {mode !== "login" && (
              <p>
                <button
                  type="button"
                  onClick={() => setMode("login")}
                  className="text-orange-500 hover:underline"
                >
                  Déjà inscrit ? Se connecter
                </button>
              </p>
            )}
            {mode !== "register" && (
              <p>
                <button
                  type="button"
                  onClick={() => setMode("register")}
                  className="text-orange-500 hover:underline"
                >
                  Créer un compte
                </button>
              </p>
            )}
            {mode !== "reset" && (
              <p>
                <button
                  type="button"
                  onClick={() => setMode("reset")}
                  className="text-orange-500 hover:underline"
                >
                  Mot de passe oublié ?
                </button>
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
