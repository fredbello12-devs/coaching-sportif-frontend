import { Zap, BarChart, Calendar, User } from "lucide-react";
import { useState } from "react";

// 🔹 Type pour les cartes
type CardProps = {
  title: string;
  value: string;
  icon: React.ReactNode;
  description?: string;
};

// 🔹 Composant Card réutilisable
const Card = ({ title, value, icon, description }: CardProps) => {
  return (
    <div className="bg-[#111] p-6 rounded-xl border border-white/10">
      <h2 className="text-lg font-bold mb-3 flex items-center gap-2">
        {icon} {title}
      </h2>
      <h3 className="text-2xl font-display text-orange-500">{value}</h3>
      {description && <p className="text-white/60 mt-2">{description}</p>}
    </div>
  );
};

// 🔹 Sidebar
const Sidebar = () => {
  return (
    <div className="w-64 bg-[#0A0A0A] text-white p-6 border-r border-white/10">
      <h2 className="text-xl font-bold mb-6">Coaching Sportif</h2>
      <ul className="space-y-4">
        <li className="hover:text-orange-500 cursor-pointer">Dashboard</li>
        <li className="hover:text-orange-500 cursor-pointer">Profil</li>
        <li className="hover:text-orange-500 cursor-pointer">Paramètres</li>
      </ul>
    </div>
  );
};

// 🔹 Dashboard principal
export default function Dashboard() {
  // States dynamiques simulant des données
  const [sessions] = useState(3);
  const [weight] = useState(72);
  const [goal] = useState(68);
  const [nextSession] = useState("Vendredi 18h");

  return (
    <div className="flex min-h-screen bg-[#0A0A0A] text-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Contenu principal */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-[#111] px-6 py-4 flex justify-between items-center border-b border-white/10">
          <h1 className="font-display text-2xl">Mon Dashboard</h1>
          <div className="flex items-center gap-4">
            <User size={20} className="text-orange-500" />
            <span className="text-sm">Fred</span>
          </div>
        </header>

        {/* Content */}
        <main className="p-6 grid md:grid-cols-3 gap-6">
          <Card
            title="Progression"
            value={`${sessions} séances`}
            icon={<Zap size={18} className="text-orange-500" />}
            description="Tu as complété tes séances cette semaine 💪"
          />
          <Card
            title="Statistiques"
            value={`${weight} kg`}
            icon={<BarChart size={18} className="text-orange-500" />}
            description={`Objectif : ${goal} kg`}
          />
          <Card
            title="Planning"
            value={nextSession}
            icon={<Calendar size={18} className="text-orange-500" />}
            description="Prochaine séance prévue"
          />
        </main>
      </div>
    </div>
  );
}
