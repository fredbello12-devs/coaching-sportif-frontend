import { useState } from "react";

type AuthMode = "login" | "register" | "reset";

function AuthPage() {
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
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <form onSubmit={handleSubmit} className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md">
        <img src="logo-sport.png" alt="Coaching Sportif" className="mx-auto mb-4 w-20 h-20" />

        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
          {mode === "login" && "Connexion Coaching Sportif"}
          {mode === "register" && "Créer un compte Coaching Sportif"}
          {mode === "reset" && "Réinitialiser votre mot de passe"}
        </h2>

        {mode === "register" && (
          <>
            <input
              type="text"
              placeholder="Nom complet"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border p-3 rounded w-full mb-4"
            />
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="border p-3 rounded w-full mb-4"
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
          className="border p-3 rounded w-full mb-4"
        />

        {(mode === "login" || mode === "register") && (
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-3 rounded w-full mb-4"
          />
        )}

        {mode === "register" && (
          <input
            type="password"
            placeholder="Confirmer le mot de passe"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="border p-3 rounded w-full mb-4"
          />
        )}

        <button type="submit" className="bg-blue-600 text-white w-full py-2 rounded font-semibold hover:bg-blue-700 transition">
          {mode === "login" && "Se connecter"}
          {mode === "register" && "Créer mon compte"}
          {mode === "reset" && "Envoyer le lien"}
        </button>

        <div className="text-sm text-center text-gray-500 mt-4 space-y-2">
          {mode !== "login" && (
            <p>
              <button type="button" onClick={() => setMode("login")} className="text-blue-600 hover:underline">
                Déjà inscrit ? Se connecter
              </button>
            </p>
          )}
          {mode !== "register" && (
            <p>
              <button type="button" onClick={() => setMode("register")} className="text-green-600 hover:underline">
                Créer un compte
              </button>
            </p>
          )}
          {mode !== "reset" && (
            <p>
              <button type="button" onClick={() => setMode("reset")} className="text-orange-600 hover:underline">
                Mot de passe oublié ?
              </button>
            </p>
          )}
        </div>
      </form>
    </div>
  );
}

export default AuthPage;
