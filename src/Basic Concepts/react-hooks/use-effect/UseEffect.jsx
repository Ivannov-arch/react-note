import { useState, useEffect } from "react";
import PageLayout from "../../../Components/PageLayout";

function MyEffect() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("indigo");

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: 12 }}>
        <div style={{ padding: "10px 16px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 10 }}>
          <span style={{ fontSize: 10, color: "#64748b", fontWeight: 600, uppercase: true }}>Width</span>
          <div style={{ fontSize: 18, fontWeight: 700 }}>{width}px</div>
        </div>
        <div style={{ padding: "10px 16px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 10 }}>
          <span style={{ fontSize: 10, color: "#64748b", fontWeight: 600, uppercase: true }}>Height</span>
          <div style={{ fontSize: 18, fontWeight: 700 }}>{height}px</div>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", items: "center", gap: 8, textAlign: "center", marginTop: 8 }}>
        <p style={{ fontSize: 24, fontWeight: 800, margin: 0, color: color === "indigo" ? "#818cf8" : "#f87171" }}>
          Count: {count}
        </p>
        <div style={{ display: "flex", gap: 8, justifyContent: "center" }}>
          <button onClick={() => setCount((c) => c + 1)}>Add</button>
          <button onClick={() => setCount((c) => c - 1)}>Substract</button>
          <button onClick={() => setColor((c) => (c === "indigo" ? "red" : "indigo"))}>Change Text Color</button>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <PageLayout
      title="useEffect() Hook"
      subtitle="Jalankan efek samping (side effects) di komponen fungsional Anda seperti sinkronisasi dengan API luar."
      accentColor="#818cf8"
    >
      <p>
        <strong>Apa Itu useEffect?</strong><br />
        <code>useEffect()</code> adalah hook React yang memungkinkan kamu untuk
        menjalankan side effect di dalam komponen — seperti sinkronisasi DOM, event
        listener, fetching data dari API, atau mengatur timer/interval.
      </p>

      <h2>💡 3 Mode Pemanggilan useEffect</h2>
      <ul>
        <li><code>useEffect(() =&gt; {})</code> — Efek berjalan setiap kali komponen dirender ulang.</li>
        <li><code>useEffect(() =&gt; {}, [])</code> — Efek berjalan <strong>hanya sekali</strong> saat komponen pertama kali dipasang (mount).</li>
        <li><code>useEffect(() =&gt; {}, [value])</code> — Efek berjalan saat komponen pertama kali dipasang DAN setiap kali dependency <code>value</code> berubah.</li>
      </ul>

      <h2>🚀 Live Demo</h2>
      <div className="demo-box">
        <MyEffect />
      </div>

      <h2>🧪 Contoh: Event Listener Resize Layar</h2>
      <pre>
        <code>{`useEffect(() => {
  window.addEventListener("resize", handleResize);

  // Cleanup function (unmount)
  return () => {
    window.removeEventListener("resize", handleResize);
  }
}, []); // Empty array = mount & unmount saja`}</code>
      </pre>

      <h2>📌 Penting: Cleanup Function</h2>
      <p>
        Beberapa side effect memerlukan pembersihan untuk menghindari kebocoran memori (memory leak).
        Kembalikan sebuah fungsi dari <code>useEffect</code> untuk membersihkan listener, subscription, atau timer.
      </p>

      <div className="summary">
        🎯 Gunakan <code>useEffect</code> sebagai jembatan untuk terhubung ke dunia luar di luar ekosistem React.
        Selalu bersihkan side effect yang membutuhkan cleanup saat unmount.
      </div>
    </PageLayout>
  );
}
