const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:3001";

export type AuthUser = {
  id: string;
  name: string;
  email: string;
  role: string;
};

export type AuthResponse = {
  access_token: string;
  user: AuthUser;
};

export const apiClient = {
  async post(path: string, payload: unknown) {
    const response = await fetch(`${API_BASE_URL}${path}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorPayload = await response.json().catch(() => ({}));
      throw new Error(errorPayload.message || "Une erreur est survenue");
    }

    return response.json();
  },

  async get(path: string) {
    const token = localStorage.getItem("auth-token");
    const response = await fetch(`${API_BASE_URL}${path}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token || ""}`,
      },
    });

    if (!response.ok) {
      const errorPayload = await response.json().catch(() => ({}));
      throw new Error(errorPayload.message || "Une erreur est survenue");
    }

    return response.json();
  },
};

export async function loginUser(email: string, password: string): Promise<AuthResponse> {
  return apiClient.post("/auth/login", { email, password });
}

export async function getUserProfile(): Promise<AuthUser> {
  return apiClient.get("/auth/profile");
}

export async function getUsers() {
  return apiClient.get("/users");
}

export async function createUser(payload: { name: string; email: string; password: string; role: string }) {
  return apiClient.post("/users", payload);
}

export async function getSessions() {
  return apiClient.get("/sessions");
}

export async function createSession(payload: { title: string; description?: string; date?: string; durationMinutes?: number }) {
  return apiClient.post("/sessions", payload);
}

export async function getPayments() {
  return apiClient.get("/payments");
}

export async function createPayment(payload: { amount: number; currency?: string; userEmail?: string }) {
  return apiClient.post("/payments", payload);
}

export async function getWeather(city: string) {
  const token = localStorage.getItem("auth-token");
  const response = await fetch(`${API_BASE_URL}/weather/${encodeURIComponent(city)}`, {
    method: "GET",
    headers: {
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });

  if (!response.ok) {
    const errorPayload = await response.json().catch(() => ({}));
    throw new Error(errorPayload.message || "Météo indisponible");
  }

  return response.json();
}
