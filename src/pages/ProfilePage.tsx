import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

export default function ProfilePage() {
  const { user, refreshUser, logout } = useAppContext();
  const navigate = useNavigate();

  useEffect(() => {
    refreshUser();
  }, [refreshUser]);

  return (
    <div className="min-h-screen bg-[var(--color-bg)] px-6 py-16 text-white">
      <div className="mx-auto max-w-3xl rounded-[1.5rem] border border-white/10 bg-[#111] p-8">
        <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-accent)]">Profil</p>
        <h1 className="mt-3 font-display text-3xl font-semibold">{user?.name || "Utilisateur"}</h1>
        <p className="mt-3 text-white/60">{user?.email || "Aucune adresse email disponible"}</p>
        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="text-sm text-white/50">Identifiant utilisateur</p>
          <p className="mt-2 font-semibold text-white">{user?.id || "—"}</p>
        </div>
        <button
          onClick={() => {
            logout();
            navigate("/login");
          }}
          className="mt-8 rounded-full bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-2)] px-5 py-3 text-sm font-semibold text-black"
        >
          Déconnexion
        </button>
      </div>
    </div>
  );
}
