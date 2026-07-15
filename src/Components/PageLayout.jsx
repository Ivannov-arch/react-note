import { useNavigate } from "react-router-dom";

/**
 * Shared page layout for all explanation/content pages.
 *
 * Props:
 *  - title: string          — page heading (e.g. "Props di React")
 *  - subtitle: string       — short description under title
 *  - accentColor: string    — hex/CSS color for accents (default indigo)
 *  - children: ReactNode    — page content
 */
export default function PageLayout({ title, subtitle, accentColor = "#6366f1", children }) {
  const navigate = useNavigate();

  return (
    <div
      style={{
        background: "var(--bg-primary, #080b14)",
        minHeight: "100vh",
        fontFamily: "'Inter', system-ui, sans-serif",
      }}
    >
      {/* Ambient glow */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          background: `radial-gradient(ellipse at 60% 0%, ${accentColor}18 0%, transparent 60%)`,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <main
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: 760,
          margin: "0 auto",
          padding: "88px 20px 80px",
        }}
      >
        {/* Back button */}
        <button
          onClick={() => window.history.back()}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            background: "none",
            border: "none",
            color: "#64748b",
            cursor: "pointer",
            fontSize: 13,
            fontFamily: "inherit",
            padding: 0,
            marginBottom: 28,
            transition: "color 0.15s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#e2e8f0")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#64748b")}
        >
          ← Back
        </button>

        {/* Page header */}
        <div style={{ marginBottom: 36 }}>
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
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: accentColor,
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontSize: 11,
                fontWeight: 600,
                color: accentColor,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              React Concept
            </span>
          </div>

          <h1
            style={{
              fontSize: "clamp(1.6rem, 4vw, 2.2rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
              margin: "0 0 10px",
              background: "linear-gradient(135deg, #ffffff 0%, #94a3b8 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {title}
          </h1>

          {subtitle && (
            <p
              style={{
                color: "#64748b",
                fontSize: 15,
                margin: 0,
                lineHeight: 1.6,
              }}
            >
              {subtitle}
            </p>
          )}
        </div>

        {/* Divider */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", marginBottom: 32 }} />

        {/* Content */}
        <div className="page-content">{children}</div>

        {/* Footer nav */}
        <div
          style={{
            marginTop: 48,
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
          <button
            onClick={() => window.history.back()}
            style={{
              background: "none",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 10,
              color: "#64748b",
              padding: "7px 16px",
              fontSize: 13,
              fontWeight: 500,
              cursor: "pointer",
              transition: "all 0.15s",
              fontFamily: "inherit",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#e2e8f0";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#64748b";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
            }}
          >
            ← Back
          </button>
        </div>
      </main>
    </div>
  );
}
