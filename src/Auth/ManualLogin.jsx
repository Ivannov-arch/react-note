import { useState, useEffect } from "react";
import useAuthStore from "./AuthStore";
import { useNavigate } from "react-router-dom";

const users = [
  { name: "Spongebob", password: "krabby patty" },
  { name: "Patrick", password: "sleep" },
  { name: "Sandy", password: "treehouse" },
  { name: "Cell", password: "makan" },
  { name: "Richard", password: "crypto boy" },
  { name: "Me", password: "Me" },
  { name: "me", password: "me" },
];

export default function ManualLogin() {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const storedIsLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));
    if (storedIsLoggedIn) {
      useAuthStore.setState({ isLoggedIn: storedIsLoggedIn });
    }
  }, []);

  const handleLogin = async () => {
    setError("");
    if (username.trim() === "") {
      setError("Username cannot be empty.");
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 600)); // simulate async
    const foundUser = users.find((u) => u.name === username && u.password === password);
    setLoading(false);
    if (foundUser) {
      login({ name: username, password });
      navigate("/");
    } else {
      setError("Invalid username or password.");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleLogin();
  };

  return (
    <div
      style={{ background: "var(--bg-primary)", minHeight: "100vh" }}
      className="flex items-center justify-center px-4 relative overflow-hidden"
    >
      {/* Background glow */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          background: "radial-gradient(ellipse at 50% 0%, rgba(99,102,241,0.18) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "fixed",
          inset: 0,
          background: "radial-gradient(ellipse at 80% 100%, rgba(139,92,246,0.12) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <div className="relative z-10 w-full max-w-sm">
        {/* Logo */}
        <div className="flex flex-col items-center mb-8 gap-3">
          <div
            style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)", boxShadow: "0 0 30px rgba(99,102,241,0.4)" }}
            className="w-12 h-12 rounded-2xl flex items-center justify-center"
          >
            <span className="text-white text-xl font-black">R</span>
          </div>
          <div className="text-center">
            <h1
              style={{
                background: "linear-gradient(135deg, #ffffff, #94a3b8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
              className="text-2xl font-bold tracking-tight"
            >
              ReactNotes
            </h1>
            <p className="text-slate-500 text-sm mt-1">Sign in to continue learning</p>
          </div>
        </div>

        {/* Card */}
        <div
          style={{
            background: "rgba(17,24,39,0.9)",
            border: "1px solid rgba(255,255,255,0.08)",
            backdropFilter: "blur(20px)",
            borderRadius: "20px",
          }}
          className="p-7 shadow-2xl shadow-black/60"
        >
          <div className="flex flex-col gap-4">
            {/* Username */}
            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-1.5 tracking-wide uppercase">Username</label>
              <input
                type="text"
                placeholder="e.g. Spongebob"
                value={username}
                onChange={(e) => { setUsername(e.target.value); setError(""); }}
                onKeyDown={handleKeyDown}
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: error ? "1px solid rgba(248,113,113,0.5)" : "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "10px",
                  color: "#e2e8f0",
                  padding: "10px 14px",
                  width: "100%",
                  fontSize: "14px",
                  outline: "none",
                  fontFamily: "inherit",
                  transition: "border-color 0.2s, box-shadow 0.2s",
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "rgba(99,102,241,0.6)";
                  e.target.style.boxShadow = "0 0 0 3px rgba(99,102,241,0.1)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = error ? "rgba(248,113,113,0.5)" : "rgba(255,255,255,0.08)";
                  e.target.style.boxShadow = "none";
                }}
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-1.5 tracking-wide uppercase">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); setError(""); }}
                  onKeyDown={handleKeyDown}
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: error ? "1px solid rgba(248,113,113,0.5)" : "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "10px",
                    color: "#e2e8f0",
                    padding: "10px 40px 10px 14px",
                    width: "100%",
                    fontSize: "14px",
                    outline: "none",
                    fontFamily: "inherit",
                    transition: "border-color 0.2s, box-shadow 0.2s",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "rgba(99,102,241,0.6)";
                    e.target.style.boxShadow = "0 0 0 3px rgba(99,102,241,0.1)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = error ? "rgba(248,113,113,0.5)" : "rgba(255,255,255,0.08)";
                    e.target.style.boxShadow = "none";
                  }}
                />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: "absolute",
                    right: 12,
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "none",
                    border: "none",
                    color: "#64748b",
                    cursor: "pointer",
                    fontSize: 13,
                    padding: 0,
                    fontFamily: "inherit",
                  }}
                  type="button"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {/* Error */}
            {error && (
              <div
                style={{
                  background: "rgba(248,113,113,0.1)",
                  border: "1px solid rgba(248,113,113,0.25)",
                  borderRadius: "8px",
                  padding: "8px 12px",
                }}
                className="text-xs text-red-400 font-medium"
              >
                ⚠ {error}
              </div>
            )}

            {/* Button */}
            <button
              onClick={handleLogin}
              disabled={loading}
              style={{
                background: loading ? "rgba(99,102,241,0.5)" : "linear-gradient(135deg, #6366f1, #8b5cf6)",
                border: "none",
                borderRadius: "10px",
                color: "#fff",
                padding: "11px",
                width: "100%",
                fontSize: "14px",
                fontWeight: 600,
                cursor: loading ? "not-allowed" : "pointer",
                boxShadow: loading ? "none" : "0 0 20px rgba(99,102,241,0.35)",
                transition: "all 0.2s",
                fontFamily: "inherit",
                marginTop: 4,
                letterSpacing: "0.01em",
              }}
              onMouseEnter={(e) => {
                if (!loading) {
                  e.currentTarget.style.boxShadow = "0 0 30px rgba(99,102,241,0.55)";
                  e.currentTarget.style.transform = "translateY(-1px)";
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 0 20px rgba(99,102,241,0.35)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {loading ? "Signing in..." : "Sign in →"}
            </button>
          </div>

          {/* Hint */}
          <p className="text-center text-xs text-slate-600 mt-5">
            Try: <span className="text-slate-500 font-medium">me</span> / <span className="text-slate-500 font-medium">me</span>
          </p>
        </div>
      </div>
    </div>
  );
}