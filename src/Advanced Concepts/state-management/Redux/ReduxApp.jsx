import { useSelector, useDispatch } from "react-redux";
import useAuthStore from "../../../Auth/AuthStore";
import PageLayout from "../../../Components/PageLayout";

function ReduxDemo() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

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
      <span style={{ fontSize: 10, color: "#64748b", fontWeight: 600, uppercase: true }}>Redux Counter</span>
      <h1 style={{ margin: 0, fontSize: 48, fontWeight: 800 }}>{count}</h1>
      <div style={{ display: "flex", gap: 10 }}>
        <button style={btnStyle} onClick={() => dispatch({ type: "DECREMENT" })}>Kurangi</button>
        <button style={btnStyle} onClick={() => dispatch({ type: "INCREMENT" })}>Tambah</button>
      </div>
    </div>
  );
}

export default function ReduxApp() {
  const user = useAuthStore((state) => state.user);

  return (
    <PageLayout
      title="Redux Store Management"
      subtitle="State management klasik untuk aplikasi JavaScript skala besar menggunakan arsitektur unidirectional data flow."
      accentColor="#f43f5e"
    >
      <p>
        Welcome, <span className="font-semibold text-rose-400">{user?.name || "Developer"}</span>!
      </p>
      <p>
        <strong>Apa Itu Redux?</strong><br />
        Redux adalah library state manager terpusat yang menggunakan arsitektur Flux.
        Data mengalir searah (unidirectional): Action → Dispatcher → Store/Reducer → View.
      </p>

      <h2>🚀 Live Demo</h2>
      <div className="demo-box">
        <ReduxDemo />
      </div>

      <h2>🧪 Cara Kerja Redux (Actions & Reducer)</h2>
      <pre>
        <code>{`// 1. Definisikan Reducer
const reducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREASE":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

// 2. Dispatch action
dispatch({ type: "INCREMENT" });`}</code>
      </pre>

      <div className="summary">
        🎯 Redux sangat kuat untuk aplikasi skala besar dengan banyak relasi state, meskipun memerlukan lebih banyak boilerplate dibanding Zustand.
      </div>
    </PageLayout>
  );
}