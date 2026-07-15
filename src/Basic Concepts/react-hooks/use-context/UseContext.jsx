import { useState, createContext } from "react";
import ComponentB from "./ComponentB";
import PageLayout from "../../../Components/PageLayout";

export const UserContext = createContext(null);

function ContextDemo() {
  const [user] = useState("Brocode");
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <div
        style={{
          background: "rgba(255, 255, 255, 0.03)",
          border: "1px solid rgba(255, 255, 255, 0.07)",
          borderRadius: 12,
          padding: 20,
        }}
      >
        <div style={{ fontSize: 13, color: "#64748b", fontWeight: 600, uppercase: true }}>Component A (Provider)</div>
        <h3 style={{ margin: "6px 0 16px", color: "#e2e8f0" }}>Hello, {user}</h3>
        <UserContext.Provider value={user}>
          <ComponentB />
        </UserContext.Provider>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <PageLayout
      title="useContext() Hook"
      subtitle="Berbagi data (state global) antar komponen di berbagai level tanpa prop drilling."
      accentColor="#ec4899"
    >
      <p>
        <strong>Apa Itu useContext?</strong><br />
        <code>useContext()</code> adalah React Hook yang memungkinkan kita{" "}
        <strong>berbagi data antar komponen</strong> tanpa harus mengoper props
        secara manual ke setiap level (mencegah *prop drilling*).
      </p>

      <h2>🎯 Kapan Digunakan?</h2>
      <ul>
        <li>Saat banyak komponen terpisah butuh akses ke data yang sama.</li>
        <li>Contoh umum: status user login, tema visual aplikasi (dark/light), pengaturan bahasa, dll.</li>
        <li>Alternatif sederhana sebelum menggunakan state management library yang berat seperti Redux.</li>
      </ul>

      <h2>🚀 Live Demo</h2>
      <div className="demo-box">
        <ContextDemo />
      </div>

      <h2>👨‍💻 Cara Kerja & Contoh Kode</h2>
      <pre>
        <code>{`// 1. Buat konteks
import { createContext } from "react";
export const UserContext = createContext();

// 2. Gunakan Provider di parent component
function ComponentA() {
  const [user] = useState("Brocode");
  return (
    <UserContext.Provider value={user}>
      <ComponentB />
    </UserContext.Provider>
  );
}

// 3. Ambil context value di child component manapun
import { useContext } from "react";
function ComponentD() {
  const user = useContext(UserContext);
  return <h2>Hello, \${user}</h2>;
}`}</code>
      </pre>

      <h2>📌 Tips Praktis</h2>
      <ul>
        <li>Gunakan context untuk data global yang **jarang berubah** (seperti tema atau info pengguna).</li>
        <li>Jika nilai dalam context sering berubah, itu bisa memicu re-render seluruh sub-tree components.</li>
      </ul>

      <div className="summary">
        🎯 <code>useContext()</code> menyederhanakan berbagi data antar komponen tanpa repot oper-oper props.
      </div>
    </PageLayout>
  );
}
