import { createContext, useContext, useMemo, useState, useEffect, type ReactNode } from "react";
import { getUserProfile, type AuthUser } from "../services/api";

type AppContextValue = {
  isAuthenticated: boolean;
  user: AuthUser | null;
  login: (token: string, user: AuthUser) => void;
  logout: () => void;
  refreshUser: () => Promise<void>;
};

const AppContext = createContext<AppContextValue | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<AuthUser | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("auth-token");
    const storedUser = localStorage.getItem("auth-user");

    if (token && storedUser) {
      try {
        setUser(JSON.parse(storedUser));
        setIsAuthenticated(true);
      } catch {
        localStorage.removeItem("auth-token");
        localStorage.removeItem("auth-user");
      }
    }
  }, []);

  const login = (token: string, nextUser: AuthUser) => {
    localStorage.setItem("auth-token", token);
    localStorage.setItem("auth-user", JSON.stringify(nextUser));
    setUser(nextUser);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("auth-token");
    localStorage.removeItem("auth-user");
    setUser(null);
    setIsAuthenticated(false);
  };

  const refreshUser = async () => {
    try {
      const nextUser = await getUserProfile();
      localStorage.setItem("auth-user", JSON.stringify(nextUser));
      setUser(nextUser);
    } catch {
      logout();
    }
  };

  const value = useMemo(
    () => ({
      isAuthenticated,
      user,
      login,
      logout,
      refreshUser,
    }),
    [isAuthenticated, user]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within AppProvider");
  }
  return context;
}
