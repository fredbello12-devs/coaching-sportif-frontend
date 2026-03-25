import { Zap, BarChart, Calendar, User } from "lucide-react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  BarChart as RBarChart, Bar, PieChart, Pie, Cell
} from "recharts";

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
        <li className="hover:text-orange-500 cursor-pointer">Overview</li>
        <li className="hover:text-orange-500 cursor-pointer">Profil</li>
        <li className="hover:text-orange-500 cursor-pointer">Paramètres</li>
        <li className="hover:text-orange-500 cursor-pointer">Blog</li>
        <li className="hover:text-orange-500 cursor-pointer">Social</li>
      </ul>
    </div>
  );
};

// 🔹 Données pour les graphiques
const lineData = [
  { month: "Jan", thisYear: 4000, lastYear: 2400 },
  { month: "Feb", thisYear: 3000, lastYear: 1398 },
  { month: "Mar", thisYear: 2000, lastYear: 9800 },
  { month: "Apr", thisYear: 2780, lastYear: 3908 },
  { month: "May", thisYear: 1890, lastYear: 4800 },
  { month: "Jun", thisYear: 2390, lastYear: 3800 },
  { month: "Jul", thisYear: 3490, lastYear: 4300 },
];

const barData = [
  { device: "Linux", users: 400 },
  { device: "Mac", users: 300 },
  { device: "iOS", users: 200 },
  { device: "Windows", users: 278 },
  { device: "Android", users: 189 },
  { device: "Other", users: 100 },
];

const pieData = [
  { name: "United States", value: 52.1 },
  { name: "Canada", value: 22.8 },
  { name: "Mexico", value: 13.5 },
  { name: "Other", value: 11.2 },
];

const COLORS = ["#FF4D00", "#FFB800", "#FF8800", "#FF6600"];

// 🔹 Dashboard principal
export default function Dashboard() {
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
        <main className="p-6 space-y-10">
          {/* Cards KPI */}
          <div className="grid md:grid-cols-4 gap-6">
            <Card title="Views" value="7,265" icon={<Zap size={18} className="text-orange-500" />} description="+11.09%" />
            <Card title="Visits" value="3,671" icon={<BarChart size={18} className="text-orange-500" />} description="-0.03%" />
            <Card title="New Users" value="256" icon={<User size={18} className="text-orange-500" />} description="+15.03%" />
            <Card title="Active Users" value="2,318" icon={<Calendar size={18} className="text-orange-500" />} description="+1.08%" />
          </div>

          {/* Line Chart */}
          <div className="bg-[#111] p-6 rounded-xl border border-white/10">
            <h2 className="text-lg font-bold mb-4">Total Users</h2>
            <LineChart width={600} height={300} data={lineData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="month" stroke="#fff" />
              <YAxis stroke="#fff" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="thisYear" stroke="#FF4D00" />
              <Line type="monotone" dataKey="lastYear" stroke="#FFB800" />
            </LineChart>
          </div>

          {/* Bar + Pie Charts */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#111] p-6 rounded-xl border border-white/10">
              <h2 className="text-lg font-bold mb-4">Traffic by Device</h2>
              <RBarChart width={500} height={300} data={barData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="device" stroke="#fff" />
                <YAxis stroke="#fff" />
                <Tooltip />
                <Bar dataKey="users" fill="#FF4D00" />
              </RBarChart>
            </div>

            <div className="bg-[#111] p-6 rounded-xl border border-white/10">
              <h2 className="text-lg font-bold mb-4">Traffic by Location</h2>
              <PieChart width={400} height={300}>
                <Pie data={pieData} cx="50%" cy="50%" outerRadius={100} fill="#FF4D00" dataKey="value" label>
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
