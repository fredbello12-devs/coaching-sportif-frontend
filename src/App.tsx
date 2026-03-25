import { Route, Routes, useLocation } from "react-router-dom";
import AuthPage from "./AuthPage";
import Dashboard from "./Dashboard";
import Footer from "./Footer";
import LandingPage from "./LandingPage";
import Navbar from "./Navbar";

function Layout() {
  const location = useLocation();
  const hideNavFooter = ["/login", "/register", "/reset"].includes(location.pathname);

  return (
    <div className="min-h-screen flex flex-col bg-[#0A0A0A]">
      {!hideNavFooter && <Navbar />}

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<AuthPage />} />
          <Route path="/register" element={<AuthPage />} />
          <Route path="/reset" element={<AuthPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>

      {!hideNavFooter && <Footer />}
    </div>
  );
}
