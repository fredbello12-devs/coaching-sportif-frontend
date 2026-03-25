import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import AuthPage from "./AuthPage";
import Dashboard from "./Dashboard";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[#0A0A0A]">
        <main className="flex-grow">
          <Routes>
            {/* Page principale */}
            <Route path="/" element={<LandingPage />} />

            {/* Authentification */}
            <Route path="/auth" element={<AuthPage />} />

            {/* Dashboard */}
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
