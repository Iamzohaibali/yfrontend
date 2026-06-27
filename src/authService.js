const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

/**
 * Register a new account.
 * @param {{ email: string, password: string }} credentials
 */
export async function register({ email, password }) {
  const res = await fetch(`${API_BASE_URL}/api/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  const data = await res.json();
  console.log("📬 Register response:", data);
  if (!res.ok) throw new Error(data.message || "Registration failed");
  return data;
}

/**
 * Sign in with email + password.
 * @param {{ email: string, password: string }} credentials
 */
export async function signIn({ email, password }) {
  const res = await fetch(`${API_BASE_URL}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  const data = await res.json();
  console.log("📬 Login response:", data);
  if (!res.ok) throw new Error(data.message || "Sign in failed");

  // Persist token for authenticated requests later
  if (data.token) {
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));
  }
  return data;
}

/** Sign out — clears local storage. */
export function signOut() {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
}

/** Returns the stored JWT (for authenticated API calls). */
export function getToken() {
  return localStorage.getItem("token");
}

/** Returns the stored user object. */
export function getUser() {
  const u = localStorage.getItem("user");
  return u ? JSON.parse(u) : null;
}