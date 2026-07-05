import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  const location = useLocation();
  const hideLayout = ["/login", "/register", "/reset"].includes(location.pathname);

  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-bg)] text-[var(--color-text)]">
      {!hideLayout && <Navbar />}
      <main className="flex-grow">
        <Outlet />
      </main>
      {!hideLayout && <Footer />}
    </div>
  );
}
