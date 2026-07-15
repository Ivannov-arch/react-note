import { useId } from "react";
import PageLayout from "../../../Components/PageLayout";

function UseIdDemo() {
  const id1 = useId();
  const id2 = useId();

  const inputStyle = {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "8px",
    color: "#e2e8f0",
    padding: "8px 12px",
    fontSize: "14px",
    outline: "none",
    width: "100%",
    marginTop: 4,
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <div>
        <label htmlFor={id1} style={{ fontSize: 13, fontWeight: 600, color: "#94a3b8" }}>First Name (Generated ID: <code>{id1}</code>)</label>
        <input style={inputStyle} type="text" id={id1} placeholder="Enter first name..." />
      </div>
      <div>
        <label htmlFor={id2} style={{ fontSize: 13, fontWeight: 600, color: "#94a3b8" }}>Last Name (Generated ID: <code>{id2}</code>)</label>
        <input style={inputStyle} type="text" id={id2} placeholder="Enter last name..." />
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <PageLayout
      title="useId() Hook"
      subtitle="Membuat ID unik yang stabil untuk aksesibilitas form dan server-side rendering (SSR)."
      accentColor="#06b6d4"
    >
      <p>
        <strong>Apa Itu useId?</strong><br />
        <code>useId</code> adalah hook bawaan React yang menghasilkan ID unik yang stabil.
        Sangat direkomendasikan untuk menghubungkan elemen label (<code>htmlFor</code>) dan input (<code>id</code>) demi aksesibilitas.
      </p>

      <h2>🚀 Live Demo</h2>
      <div className="demo-box">
        <UseIdDemo />
      </div>

      <h2>🎯 Mengapa Menggunakan useId?</h2>
      <ul>
        <li>ID yang dihasilkan dijamin selalu unik per render elemen.</li>
        <li>Kompatibel dengan Server-Side Rendering (SSR) — tidak ada ketidakcocokan ID antara server dan client.</li>
        <li>Menghindari tabrakan (collisions) ID jika komponen yang sama di-render berkali-kali pada halaman yang sama.</li>
      </ul>

      <h2>🧪 Contoh Kode Implementasi</h2>
      <pre>
        <code>{`import { useId } from "react";

function FormField() {
  const id = useId();
  return (
    <>
      <label htmlFor={id}>Username</label>
      <input id={id} type="text" />
    </>
  );
}`}</code>
      </pre>

      <div className="summary">
        🎯 Gunakan <code>useId</code> untuk menjaga aksesibilitas elemen form secara dinamis tanpa takut terjadi duplikasi ID di halaman Anda.
      </div>
    </PageLayout>
  );
}
