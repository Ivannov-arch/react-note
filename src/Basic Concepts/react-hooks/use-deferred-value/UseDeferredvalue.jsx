import { useDeferredValue, useState } from "react";
import PageLayout from "../../../Components/PageLayout";

const items = Array.from({ length: 10000 }, (_, i) => `Item ${i + 1}`);

function DeferredDemo() {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(deferredQuery.toLowerCase())
  );

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Type quickly to search..."
        style={{
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 8,
          color: "#e2e8f0",
          padding: "8px 12px",
          fontSize: 14,
          outline: "none",
          width: "100%",
        }}
      />

      {query !== deferredQuery && (
        <p style={{ color: "#3b82f6", fontSize: 13, margin: 0 }}>Computing deferred filter results...</p>
      )}

      <div
        style={{
          maxHeight: 180,
          overflowY: "auto",
          background: "rgba(0,0,0,0.2)",
          borderRadius: 8,
          padding: "8px 12px",
          border: "1px solid rgba(255,255,255,0.05)",
          fontSize: 13,
        }}
      >
        {filteredItems.length === 0 ? (
          <p style={{ color: "#64748b", margin: 0 }}>No items match search</p>
        ) : (
          <ul style={{ margin: 0, paddingLeft: 16 }}>
            {filteredItems.map((item) => (
              <li key={item} style={{ color: "#94a3b8", marginBottom: 2 }}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <PageLayout
      title="useDeferredValue() Hook"
      subtitle="Tunda pembaruan nilai/render variabel tertentu agar UI tetap interaktif selama input cepat."
      accentColor="#f59e0b"
    >
      <p>
        <strong>Apa Itu useDeferredValue?</strong><br />
        <code>useDeferredValue</code> adalah hook bawaan React yang memungkinkan kita menangguhkan pembaruan bagian UI yang lambat.
        Berbeda dengan <code>useTransition</code> yang menunda fungsi update state, hook ini bekerja langsung pada **nilai (value)** itu sendiri.
      </p>

      <h2>🚀 Live Demo</h2>
      <div className="demo-box">
        <DeferredDemo />
      </div>

      <h2>⚙️ Cara Kerja Sederhana</h2>
      <ul>
        <li>Gunakan <code>useState</code> untuk menangkap input teks pengguna secara real-time.</li>
        <li>Bungkus nilai input dengan <code>useDeferredValue(query)</code> untuk mendapatkan versi nilai tertunda.</li>
        <li>Gunakan versi tertunda untuk memproses kalkulasi berat (seperti memfilter data).</li>
      </ul>

      <h2>🧪 Contoh Kode</h2>
      <pre>
        <code>{`const [query, setQuery] = useState("");
const deferredQuery = useDeferredValue(query);

const filteredItems = useMemo(() => {
  return items.filter(item => item.includes(deferredQuery));
}, [deferredQuery]);`}</code>
      </pre>

      <div className="summary">
        🎯 <code>useDeferredValue</code> sangat efektif saat Anda mengoper data dinamis yang sering berubah ke komponen anak yang lambat atau berat untuk dirender.
      </div>
    </PageLayout>
  );
}
