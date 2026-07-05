import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import { AppProvider } from "../context/AppContext";

describe("PrivateRoute", () => {
  it("renders children when the user is authenticated", () => {
    localStorage.setItem("auth-token", "demo-token");

    render(
      <AppProvider>
        <MemoryRouter initialEntries={["/dashboard"]}>
          <Routes>
            <Route path="/dashboard" element={<PrivateRoute><div>Protected area</div></PrivateRoute>} />
            <Route path="/login" element={<div>Login page</div>} />
          </Routes>
        </MemoryRouter>
      </AppProvider>
    );

    expect(screen.getByText("Protected area")).toBeInTheDocument();
    localStorage.removeItem("auth-token");
  });
});
