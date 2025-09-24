"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const DEMO_USER = "admin";
  const DEMO_PASS = "password123";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (username === DEMO_USER && password === DEMO_PASS) {
      localStorage.setItem("auth", "true");
      router.push("/dashboard");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <main style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <form
        onSubmit={handleSubmit}
        style={{ border: "1px solid #ddd", padding: "20px", borderRadius: "8px", width: "300px" }}
      >
        <h1>Login</h1>
        <input
          type="text"
          placeholder="Username"
          style={{ display: "block", marginBottom: "10px", width: "100%" }}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          style={{ display: "block", marginBottom: "10px", width: "100%" }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button
          type="submit"
          style={{ width: "100%", padding: "8px", background: "black", color: "white" }}
        >
          Login
        </button>
      </form>
    </main>
  );
}
