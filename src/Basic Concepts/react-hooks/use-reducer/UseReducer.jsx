import { useReducer } from "react";
import PageLayout from "../../../Components/PageLayout";

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREASE":
      return { count: state.count + 1 };
    case "DECREASE":
      return { count: state.count - 1 };
    case "INPUT":
      return { count: action.payload };
    default:
      return state;
  }
};

function ReducerDemo() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const btnStyle = {
    padding: "8px 16px",
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
      <h1 style={{ margin: 0, fontSize: 48, fontWeight: 800 }}>{state.count}</h1>
      <div style={{ display: "flex", items: "center", gap: 10 }}>
        <button style={btnStyle} onClick={() => dispatch({ type: "DECREASE" })}>Decrease</button>
        <input
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 8,
            color: "#e2e8f0",
            padding: "8px 12px",
            fontSize: 13,
            outline: "none",
            width: 80,
            textAlign: "center",
            fontFamily: "inherit",
          }}
          value={state.count}
          type="number"
          onChange={(e) =>
            dispatch({ type: "INPUT", payload: Number(e.target.value) })
          }
        />
        <button style={btnStyle} onClick={() => dispatch({ type: "INCREASE" })}>Increase</button>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <PageLayout
      title="useReducer() Hook"
      subtitle="Mengelola state logika kompleks/terkait dengan aksi-aksi yang terstruktur (reducer pattern)."
      accentColor="#8b5cf6"
    >
      <p>
        <strong>Apa Itu useReducer?</strong><br />
        <code>useReducer</code> adalah alternatif dari <code>useState</code> yang lebih cocok untuk
        logika state yang kompleks, melibatkan banyak sub-nilai, atau jika state berikutnya bergantung pada state sebelumnya.
      </p>

      <h2>🚀 Live Demo</h2>
      <div className="demo-box">
        <ReducerDemo />
      </div>

      <h2>🛠 Struktur Dasar useReducer</h2>
      <ul>
        <li><strong>State awal (initialState):</strong> Nilai default state saat pertama kali dirender.</li>
        <li><strong>Reducer:</strong> Fungsi murni (pure function) yang memproses state lama + action dan mengembalikan state baru.</li>
        <li><strong>Dispatch:</strong> Fungsi untuk memicu perubahan state dengan mengirimkan sebuah action object.</li>
      </ul>

      <h2>📦 Contoh Kode Reducer</h2>
      <pre>
        <code>{`const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREASE':
      return { count: state.count + 1 };
    case 'DECREASE':
      return { count: state.count - 1 };
    case 'INPUT':
      return { count: action.payload };
    default:
      return state;
  }
};

const [state, dispatch] = useReducer(reducer, { count: 0 });`}</code>
      </pre>

      <h2>🧩 Kapan Sebaiknya Menggunakan useReducer?</h2>
      <ul>
        <li>Ketika state memiliki banyak transisi yang saling berkaitan.</li>
        <li>Ketika logika state terpisah dari komponen visual utama.</li>
        <li>Membantu mempermudah unit testing karena fungsi reducer adalah pure function.</li>
      </ul>

      <div className="summary">
        🎯 <code>useReducer</code> membuat pengelolaan state kompleks menjadi lebih terstruktur dan maintainable di aplikasi React berskala besar.
      </div>
    </PageLayout>
  );
}
