import { useState } from "react";
import PageLayout from "../../../Components/PageLayout";

function CounterDemo() {
  const [count, setCount] = useState(0);

  const btnBase = {
    padding: "10px 24px",
    borderRadius: 10,
    border: "1px solid rgba(255,255,255,0.1)",
    cursor: "pointer",
    fontSize: 14,
    fontWeight: 600,
    fontFamily: "inherit",
    transition: "all 0.15s",
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 24 }}>
      <p
        style={{
          fontSize: "clamp(4rem, 15vw, 7rem)",
          fontWeight: 900,
          margin: 0,
          lineHeight: 1,
          background: count > 0
            ? "linear-gradient(135deg, #34d399, #06b6d4)"
            : count < 0
            ? "linear-gradient(135deg, #f43f5e, #fb923c)"
            : "linear-gradient(135deg, #6366f1, #8b5cf6)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        {count}
      </p>
      <div style={{ display: "flex", gap: 10 }}>
        <button
          style={{ ...btnBase, background: "rgba(239,68,68,0.1)", borderColor: "rgba(239,68,68,0.2)", color: "#fca5a5" }}
          onClick={() => setCount((c) => c - 1)}
          onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(239,68,68,0.2)")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(239,68,68,0.1)")}
        >
          − Decrement
        </button>
        <button
          style={{ ...btnBase, background: "rgba(255,255,255,0.05)", color: "#94a3b8" }}
          onClick={() => setCount(0)}
          onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.05)")}
        >
          Reset
        </button>
        <button
          style={{ ...btnBase, background: "rgba(52,211,153,0.1)", borderColor: "rgba(52,211,153,0.2)", color: "#6ee7b7" }}
          onClick={() => setCount((c) => c + 1)}
          onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(52,211,153,0.2)")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(52,211,153,0.1)")}
        >
          + Increment
        </button>
      </div>
    </div>
  );
}

// Updater function = A function passed as an argument to setState() usually
//   ex. setYear(arrow function)
//   Allow for safe updates based on the previous state
//   Used with multiple state updates and asynchronous functions
//   Good practice to use updater functions

export default function Counter() {
  return (
    <PageLayout
      title="Counter — useState Demo"
      subtitle="Contoh klasik useState: counter sederhana dengan increment, decrement, dan reset."
      accentColor="#34d399"
    >
      <p>
        Ini adalah demo paling dasar dari <code>useState</code> — mengelola angka counter
        yang bisa bertambah, berkurang, dan direset.
      </p>

      <h2>🚀 Live Demo</h2>
      <div className="demo-box">
        <CounterDemo />
      </div>

      <h2>📦 Kode</h2>
      <pre>
        <code>{`const [count, setCount] = useState(0);

// Direct update (simple)
const increment = () => setCount(count + 1);
const decrement = () => setCount(count - 1);
const reset = () => setCount(0);

// ✅ Updater function (recommended for batched updates)
const increment = () => setCount(c => c + 1);
const decrement = () => setCount(c => c - 1);`}</code>
      </pre>

      <h2>🧠 Updater Function</h2>
      <p>
        Daripada menggunakan nilai state langsung seperti <code>setCount(count + 1)</code>,
        lebih baik gunakan <strong>updater function</strong>:
      </p>
      <pre>
        <code>{`setCount(prevCount => prevCount + 1)`}</code>
      </pre>
      <p>
        Ini memastikan kamu selalu menggunakan nilai state terbaru, terutama jika ada
        beberapa update yang terjadi secara bersamaan atau di dalam fungsi async.
      </p>

      <div className="callout">
        💡 Best practice: selalu gunakan updater function <code>setState(prev =&gt; ...)</code>
        saat update bergantung pada nilai state sebelumnya.
      </div>

      <div className="summary">
        🎯 Counter adalah contoh paling fundamental dari reactive UI di React.
        Memahami pola ini adalah dasar dari semua interaktivitas React.
      </div>
    </PageLayout>
  );
}
