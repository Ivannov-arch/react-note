import { Link, useNavigate } from "react-router-dom";

/**
 * Reusable page layout for all nav/list pages.
 *
 * Props:
 *  - title: string  — page heading
 *  - subtitle: string — optional description
 *  - items: Array<{ label: string, path: string, tag?: string }>
 *  - accentColor: string — CSS color for the accent dot / hover glow
 */
export default function NavPageLayout({ title, subtitle, items, accentColor = "#6366f1" }) {
  const navigate = useNavigate();

  return (
    <div style={{ background: "var(--bg-primary)", minHeight: "100vh" }}>
      {/* Background glow */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          background: `radial-gradient(ellipse at 50% 0%, ${accentColor}22 0%, transparent 65%)`,
          pointerEvents: "none",
        }}
      />

      <main className="relative z-10 max-w-2xl mx-auto px-4 pt-20 pb-20">
        {/* Back button */}
        <button
          onClick={() => window.history.back()}
          style={{
            background: "none",
            border: "none",
            color: "#64748b",
            cursor: "pointer",
            fontSize: 13,
            fontFamily: "inherit",
            padding: "0",
            display: "flex",
            alignItems: "center",
            gap: 6,
            marginBottom: 28,
            transition: "color 0.15s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#e2e8f0")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#64748b")}
        >
          ← Back
        </button>

        {/* Header */}
        <div className="mb-8">
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: `${accentColor}18`,
              border: `1px solid ${accentColor}35`,
              borderRadius: 999,
              padding: "4px 12px",
              marginBottom: 14,
            }}
          >
            <span
              style={{ width: 6, height: 6, borderRadius: "50%", background: accentColor, flexShrink: 0 }}
            />
            <span style={{ fontSize: 11, fontWeight: 600, color: accentColor, letterSpacing: "0.08em", textTransform: "uppercase" }}>
              Topics
            </span>
          </div>
          <h1
            style={{
              fontSize: "clamp(1.6rem, 4vw, 2.2rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
              margin: 0,
              background: "linear-gradient(135deg, #ffffff 0%, #94a3b8 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {title}
          </h1>
          {subtitle && (
            <p style={{ color: "#64748b", fontSize: 14, marginTop: 8, lineHeight: 1.6 }}>
              {subtitle}
            </p>
          )}
        </div>

        {/* List */}
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
          {items.map((item, i) => (
            <li key={item.path}>
              <Link
                to={item.path}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "14px 18px",
                  background: "rgba(17,24,39,0.8)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 12,
                  textDecoration: "none",
                  color: "#e2e8f0",
                  fontSize: 14,
                  fontWeight: 500,
                  transition: "all 0.18s",
                  fontFamily: "inherit",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(26,34,54,0.95)";
                  e.currentTarget.style.borderColor = `${accentColor}40`;
                  e.currentTarget.style.boxShadow = `0 0 0 1px ${accentColor}20, 0 4px 20px rgba(0,0,0,0.3)`;
                  e.currentTarget.style.transform = "translateX(4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(17,24,39,0.8)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.transform = "translateX(0)";
                }}
              >
                <span style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  {/* Number badge */}
                  <span
                    style={{
                      minWidth: 24,
                      height: 24,
                      borderRadius: 6,
                      background: `${accentColor}18`,
                      border: `1px solid ${accentColor}25`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 10,
                      fontWeight: 700,
                      color: accentColor,
                      letterSpacing: "0.02em",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span style={{ fontFamily: "'Inter', monospace" }}>{item.label}</span>
                </span>
                {item.tag && (
                  <span
                    style={{
                      fontSize: 10,
                      fontWeight: 600,
                      color: accentColor,
                      background: `${accentColor}15`,
                      border: `1px solid ${accentColor}30`,
                      borderRadius: 999,
                      padding: "2px 8px",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                    }}
                  >
                    {item.tag}
                  </span>
                )}
                <span style={{ color: "#374151", fontSize: 13 }}>→</span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Footer nav */}
        <div
          style={{
            marginTop: 32,
            paddingTop: 24,
            borderTop: "1px solid rgba(255,255,255,0.06)",
            display: "flex",
            gap: 10,
          }}
        >
          <button
            onClick={() => navigate("/")}
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 10,
              color: "#94a3b8",
              padding: "7px 16px",
              fontSize: 13,
              fontWeight: 500,
              cursor: "pointer",
              transition: "all 0.15s",
              fontFamily: "inherit",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#fff";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#94a3b8";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
            }}
          >
            ⌂ Home
          </button>
        </div>
      </main>
    </div>
  );
}
