"use client";

export default function DashboardPage() {
  return (
    <main style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ border: "1px solid #ddd", padding: "20px", borderRadius: "8px", textAlign: "center" }}>
        <h1>Welcome!</h1>
        <p>You are logged in ✅</p>
        <a
          href="/logout"
          style={{
            display: "inline-block",
            marginTop: "10px",
            padding: "8px",
            background: "red",
            color: "white",
          }}
        >
          Logout
        </a>
      </div>
    </main>
  );
}
