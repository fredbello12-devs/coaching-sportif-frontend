type CardProps = {
  title: string;
  value: string;
};

// 🔹 Card
const Card = ({ title, value }: CardProps) => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <p className="text-gray-500">{title}</p>
      <h2 className="text-xl font-bold">{value}</h2>
    </div>
  );
};

// 🔹 Sidebar
const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-900 text-white p-4">
      <h2 className="text-xl font-bold mb-4">Mon App</h2>

      <ul>
        <li className="mb-2">Dashboard</li>
        <li className="mb-2">Profil</li>
      </ul>
    </div>
  );
};

// 🔹 Dashboard (principal)
const Dashboard = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex-1 p-6 bg-gray-100">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

        <div className="grid grid-cols-3 gap-4">
          <Card title="Total" value="10" />
          <Card title="Actif" value="5" />
          <Card title="Terminé" value="5" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;