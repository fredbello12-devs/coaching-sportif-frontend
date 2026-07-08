import { useState, useEffect } from "react";
import { BarChart3, CalendarDays, CreditCard, Plus, TrendingUp, UserRound } from "lucide-react";
import { ResponsiveContainer, BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";
import { getUsers, createUser, getSessions, createSession, getPayments, createPayment, getWeather } from "../services/api";
import { useAppContext } from "../context/AppContext";

type Session = {
  id: string;
  title: string;
  description?: string;
  date?: string;
  durationMinutes?: number;
};

type Payment = {
  id: string;
  amount: number;
  currency: string;
  status: string;
  userEmail?: string;
};

type WeatherData = {
  city: string;
  temperature?: number;
  description?: string;
  humidity?: number;
  windSpeed?: number;
  source?: string;
};

const sessionsChart = [
  { day: "Lun", completed: 1, planned: 1 },
  { day: "Mar", completed: 1, planned: 1 },
  { day: "Mer", completed: 0, planned: 1 },
  { day: "Jeu", completed: 1, planned: 1 },
  { day: "Ven", completed: 0, planned: 1 },
];

const progress = [
  { label: "Force", value: 82 },
  { label: "Endurance", value: 74 },
  { label: "Mobilité", value: 91 },
];

export default function DashboardPage() {
  const { user } = useAppContext();
  const [users, setUsers] = useState<{ id: string; name: string; email: string; role: string }[]>([]);
  const [sessions, setSessions] = useState<Session[]>([]);
  const [payments, setPayments] = useState<Payment[]>([]);
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [weatherCity, setWeatherCity] = useState("Dakar");
  const [loading, setLoading] = useState(true);

  const [newUser, setNewUser] = useState({ name: "", email: "", password: "", role: "USER" });
  const [newSession, setNewSession] = useState({ title: "", description: "", date: "", durationMinutes: "" });
  const [newPayment, setNewPayment] = useState({ amount: "", currency: "EUR", userEmail: "" });

  const isAdmin = user?.role === "ADMIN";

  const fetchData = async () => {
    setLoading(true);
    try {
      const [usersRes, sessionsRes, paymentsRes] = await Promise.all([
        getUsers().catch(() => []),
        getSessions().catch(() => []),
        getPayments().catch(() => []),
      ]);
      setUsers(usersRes as any[]);
      setSessions(sessionsRes as Session[]);
      setPayments(paymentsRes as Payment[]);
    } catch {
      // ignore partial failures
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleCreateUser = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await createUser(newUser);
      setNewUser({ name: "", email: "", password: "", role: "USER" });
      fetchData();
    } catch (error) {
      window.alert(error instanceof Error ? error.message : "Erreur lors de la création de l'utilisateur");
    }
  };

  const handleCreateSession = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await createSession({
        ...newSession,
        durationMinutes: newSession.durationMinutes ? Number(newSession.durationMinutes) : undefined,
      });
      setNewSession({ title: "", description: "", date: "", durationMinutes: "" });
      fetchData();
    } catch (error) {
      window.alert(error instanceof Error ? error.message : "Erreur lors de la création de la session");
    }
  };

  const handleCreatePayment = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await createPayment({ ...newPayment, amount: Number(newPayment.amount) });
      setNewPayment({ amount: "", currency: "EUR", userEmail: "" });
      fetchData();
    } catch (error) {
      window.alert(error instanceof Error ? error.message : "Erreur lors de la création du paiement");
    }
  };

  const handleWeather = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const data = await getWeather(weatherCity);
      setWeather(data);
    } catch (error) {
      window.alert(error instanceof Error ? error.message : "Météo indisponible");
    }
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_right,_rgba(255,77,0,0.15),_transparent_35%),#060606] px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6">
        <header className="rounded-[1.5rem] border border-white/10 bg-[#111] p-6 shadow-lg shadow-black/30">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-accent)]">Tableau de bord client</p>
              <h1 className="mt-2 font-display text-3xl font-semibold">Bonjour {user?.name || "Fred"}, votre parcours avance bien.</h1>
            </div>
            <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-3">
              <UserRound size={18} className="text-[var(--color-accent)]" />
              <div>
                <p className="text-sm font-semibold">Fred Diop</p>
                <p className="text-xs text-white/50">Objectif: prise de masse</p>
              </div>
            </div>
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-4">
          {[
            { title: "Séances suivies", value: `${sessions.length}/16`, icon: <CalendarDays size={18} /> },
            { title: "Progression", value: "+18%", icon: <TrendingUp size={18} /> },
            { title: "Planning", value: `${sessions.length} séances`, icon: <BarChart3 size={18} /> },
            { title: "Paiements", value: `${payments.length} transactions`, icon: <CreditCard size={18} /> },
          ].map((item) => (
            <div key={item.title} className="rounded-[1.25rem] border border-white/10 bg-[#111] p-5">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-orange-500/10 text-[var(--color-accent)]">{item.icon}</div>
              <p className="text-sm text-white/50">{item.title}</p>
              <p className="mt-2 text-2xl font-semibold text-white">{item.value}</p>
            </div>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[1.5rem] border border-white/10 bg-[#111] p-6">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-accent)]">Suivi des séances</p>
                <h2 className="font-display text-xl font-semibold">Votre semaine</h2>
              </div>
              <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/60">{sessions.length} séances planifiées</div>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={sessionsChart}>
                  <CartesianGrid stroke="#2a2a2a" vertical={false} />
                  <XAxis dataKey="day" stroke="#8c8c8c" />
                  <YAxis stroke="#8c8c8c" />
                  <Tooltip />
                  <Bar dataKey="completed" fill="#ff4d00" radius={[6, 6, 0, 0]} />
                  <Bar dataKey="planned" fill="#ffb800" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-white/10 bg-[#111] p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-accent)]">Progression</p>
            <h2 className="mt-2 font-display text-xl font-semibold">Compétences clés</h2>
            <div className="mt-6 space-y-4">
              {progress.map((item) => (
                <div key={item.label}>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="text-white/70">{item.label}</span>
                    <span className="text-[var(--color-accent)]">{item.value}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10">
                    <div className="h-2 rounded-full bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-2)]" style={{ width: `${item.value}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-[1.5rem] border border-white/10 bg-[#111] p-6">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-accent)]">Planning</p>
                <h2 className="font-display text-xl font-semibold">Prochaines séances</h2>
              </div>
              {isAdmin && (
                <form onSubmit={handleCreateSession} className="flex items-center gap-2">
                  <input value={newSession.title} onChange={(e) => setNewSession({ ...newSession, title: e.target.value })} placeholder="Titre" className="w-40 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white outline-none" />
                  <button type="submit" className="rounded-full bg-[var(--color-accent)] p-1 text-black"><Plus size={16} /></button>
                </form>
              )}
            </div>
            <div className="space-y-3">
              {sessions.length === 0 && <p className="text-sm text-white/50">Aucune séance.</p>}
              {sessions.map((item) => (
                <div key={item.id} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  <div>
                    <p className="font-semibold text-white">{item.title}</p>
                    <p className="text-sm text-white/50">{item.description || "—"}</p>
                  </div>
                  <div className="rounded-full bg-orange-500/10 px-3 py-1 text-sm text-[var(--color-accent)]">{item.durationMinutes ? `${item.durationMinutes} min` : "—"}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-white/10 bg-[#111] p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-accent)]">Paiements</p>
            <h2 className="mt-2 font-display text-xl font-semibold">État de vos transactions</h2>
            {isAdmin && (
              <form onSubmit={handleCreatePayment} className="mt-4 flex flex-col gap-2">
                <input value={newPayment.amount} onChange={(e) => setNewPayment({ ...newPayment, amount: e.target.value })} placeholder="Montant" type="number" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white outline-none" />
                <input value={newPayment.userEmail} onChange={(e) => setNewPayment({ ...newPayment, userEmail: e.target.value })} placeholder="Email utilisateur" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white outline-none" />
                <button type="submit" className="rounded-full bg-[var(--color-accent)] px-4 py-2 text-sm font-semibold text-black">Ajouter paiement</button>
              </form>
            )}
            <div className="mt-6 space-y-3">
              {payments.length === 0 && <p className="text-sm text-white/50">Aucun paiement.</p>}
              {payments.map((payment) => (
                <div key={payment.id} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  <div>
                    <p className="font-semibold text-white">{payment.userEmail || "Client"}</p>
                    <p className="text-sm text-white/50">{payment.amount} {payment.currency}</p>
                  </div>
                  <span className={`rounded-full px-3 py-1 text-sm ${payment.status === "paid" ? "bg-emerald-500/10 text-emerald-400" : "bg-amber-500/10 text-amber-400"}`}>{payment.status}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[1.5rem] border border-white/10 bg-[#111] p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-accent)]">Utilisateurs</p>
            <h2 className="mt-2 font-display text-xl font-semibold">Liste des utilisateurs</h2>
            {isAdmin && (
              <form onSubmit={handleCreateUser} className="mt-4 grid gap-2">
                <input value={newUser.name} onChange={(e) => setNewUser({ ...newUser, name: e.target.value })} placeholder="Nom" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white outline-none" />
                <input value={newUser.email} onChange={(e) => setNewUser({ ...newUser, email: e.target.value })} placeholder="Email" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white outline-none" />
                <input value={newUser.password} onChange={(e) => setNewUser({ ...newUser, password: e.target.value })} placeholder="Mot de passe" type="password" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white outline-none" />
                <select value={newUser.role} onChange={(e) => setNewUser({ ...newUser, role: e.target.value })} className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white outline-none">
                  <option value="USER">Sportif</option>
                  <option value="COACH">Coach</option>
                  <option value="ADMIN">Admin</option>
                </select>
                <button type="submit" className="rounded-full bg-[var(--color-accent)] px-4 py-2 text-sm font-semibold text-black">Créer utilisateur</button>
              </form>
            )}
            <div className="mt-6 space-y-3">
              {loading && <p className="text-sm text-white/50">Chargement...</p>}
              {!loading && users.length === 0 && <p className="text-sm text-white/50">Aucun utilisateur.</p>}
              {users.map((u) => (
                <div key={u.id} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  <div>
                    <p className="font-semibold text-white">{u.name}</p>
                    <p className="text-sm text-white/50">{u.email}</p>
                  </div>
                  <span className="rounded-full bg-white/5 px-3 py-1 text-sm text-white/70">{u.role}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-white/10 bg-[#111] p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-accent)]">Météo</p>
            <h2 className="mt-2 font-display text-xl font-semibold">Conditions météo</h2>
            <form onSubmit={handleWeather} className="mt-4 flex gap-2">
              <input value={weatherCity} onChange={(e) => setWeatherCity(e.target.value)} placeholder="Ville (ex: Dakar, Paris)" className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white outline-none" />
              <button type="submit" className="rounded-full bg-[var(--color-accent)] px-4 py-2 text-sm font-semibold text-black">OK</button>
            </form>
            <div className="mt-6">
              {weather ? (
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs text-white/50">Température</p>
                    <p className="mt-1 text-2xl font-semibold text-white">{weather.temperature ?? "—"}°C</p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs text-white/50">Description</p>
                    <p className="mt-1 text-lg font-semibold text-white capitalize">{weather.description ?? "—"}</p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs text-white/50">Humidité</p>
                    <p className="mt-1 text-2xl font-semibold text-white">{weather.humidity ?? "—"}%</p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs text-white/50">Vent</p>
                    <p className="mt-1 text-2xl font-semibold text-white">{weather.windSpeed ?? "—"} m/s</p>
                  </div>
                </div>
              ) : (
                <p className="text-sm text-white/50">Entrez une ville pour afficher la météo.</p>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
