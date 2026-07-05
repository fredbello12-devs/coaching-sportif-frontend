import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

describe("Application shell", () => {
  it("renders the main value proposition on the landing page", () => {
    render(
      <MemoryRouter>
        <LandingPage />
      </MemoryRouter>
    );

    expect(screen.getByText(/transforme ton parcours/i)).toBeInTheDocument();
  });
});
