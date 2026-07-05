import { Navigate, Outlet } from "react-router-dom";
import type { ReactNode } from "react";
import { useAppContext } from "../context/AppContext";

type PrivateRouteProps = {
  children?: ReactNode;
};

export default function PrivateRoute({ children }: PrivateRouteProps) {
  const { isAuthenticated } = useAppContext();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children ? <>{children}</> : <Outlet />;
}
