import { useState } from "react";
import { ArrowRight } from "lucide-react";
import logoSport from "./logo-sport.png"; 

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
      // ✅ Simule une connexion réussie
      alert(`Bienvenue ${email} ! Connexion réussie.`);
    } else if (mode === "register") {
      if (password !== confirmPassword) {
        alert("Les mots de passe ne correspondent pas !");
        return;
      }
      // ✅ Simule une inscription réussie
      alert(`Compte créé pour ${name} (${role}) avec l'email ${email}.`);
    } else {
      // ✅ Simule un reset password
      alert(`Un lien de réinitialisation a été envoyé à ${email}.`);
    }
  };

  return (
    <div className="flex min-h-screen bg-[#0A0A0A] text-white">
      {/* Image animée à gauche */}
      <div className="hidden lg:flex flex-1 items-center justify-center bg-[#111]">
        <div className="relative group animate-fade-in">
          <img
            src={logoSport}
            alt="Logo Coaching Sportif"
            className="max-w-md rounded-xl shadow-lg transition duration-500 group-hover:scale-105 group-hover:shadow-orange-500"
          />
          <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-500 blur-lg bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500"></div>
        </div>
      </div>

      {/* Formulaire à droite */}
      <div className="flex-1 flex items-center justify-center px-4">
        <form
          onSubmit={handleSubmit}
          className="bg-[#111] p-10 rounded-2xl shadow-lg w-full max-w-md animate-fade-in"
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
