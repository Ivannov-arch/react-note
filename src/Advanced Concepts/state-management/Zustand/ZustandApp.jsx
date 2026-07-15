import useCounterStore from "./Zustand";
import useAuthStore from "../../../Auth/AuthStore";
import PageLayout from "../../../Components/PageLayout";

function ZustandDemo() {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);

  const btnStyle = {
    padding: "8px 20px",
    borderRadius: 8,
    border: "1px solid rgba(255,255,255,0.1)",
    cursor: "pointer",
    fontSize: 13,
    fontWeight: 600,
    background: "rgba(255,255,255,0.05)",
    color: "#e2e8f0",
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
      <span style={{ fontSize: 10, color: "#64748b", fontWeight: 600, uppercase: true }}>Zustand Counter</span>
      <h1 style={{ margin: 0, fontSize: 48, fontWeight: 800 }}>{count}</h1>
      <div style={{ display: "flex", gap: 10 }}>
        <button style={btnStyle} onClick={decrement}>Kurangi</button>
        <button style={btnStyle} onClick={increment}>Tambah</button>
      </div>
    </div>
  );
}

export default function ZustandApp() {
  const user = useAuthStore((state) => state.user);

  return (
    <PageLayout
      title="Zustand State Manager"
      subtitle="State management kecil, cepat, dan terukur yang menggunakan prinsip hooks sederhana."
      accentColor="#f43f5e"
    >
      <p>
        Welcome, <span className="font-semibold text-rose-400">{user?.name || "Developer"}</span>!
      </p>
      <p>
        <strong>Apa Itu Zustand?</strong><br />
        Zustand adalah library state management berukuran sangat kecil (kurang dari 1KB gzipped)
        yang tidak memerlukan boilerplates rumit seperti Context Providers, reducer, atau action creators.
      </p>

      <h2>🚀 Live Demo</h2>
      <div className="demo-box">
        <ZustandDemo />
      </div>

      <h2>🧪 Cara Membuat Store Zustand</h2>
      <pre>
        <code>{`import { create } from "zustand";

const useCounterStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));`}</code>
      </pre>

      <h2>⚙️ Membaca & Menggunakan Store di Komponen</h2>
      <pre>
        <code>{`function MyComponent() {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);

  return <button onClick={increment}>Count: {count}</button>;
}`}</code>
      </pre>

      <div className="summary">
        🎯 Zustand membuang semua boilerplate dan memberikan API state management yang sangat bersih, berbasis hooks murni.
      </div>
    </PageLayout>
  );
}