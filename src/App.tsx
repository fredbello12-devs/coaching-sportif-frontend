import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import AuthPage from "./AuthPage";
import DashboardPage from "./Dashboard";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[#0A0A0A]">
        <main className="flex-grow">
          <Routes>
            {/* Page principale (Landing) */}
            <Route path="/" element={<LandingPage />} />

            {/* Authentification */}
            <Route path="/auth" element={<AuthPage />} />

            {/* Dashboard */}
            <Route path="/dashboard" element={<DashboardPage />} />
          </Routes>
        </main>

        {/* Footer global (déjà inclus dans LandingPage, donc pas besoin ici) */}
      </div>
    </Router>
  );
}

export default App;
