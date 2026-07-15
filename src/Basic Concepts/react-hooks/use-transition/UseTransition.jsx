import { useTransition, useState } from "react";
import PageLayout from "../../../Components/PageLayout";

const items = Array.from({ length: 10000 }, (_, i) => `Item ${i + 1}`);

function UseTransitionDemo() {
  const [query, setQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [isPending, startTransition] = useTransition();

  const handleFilter = (e) => {
    const value = e.target.value;
    setQuery(value);

    startTransition(() => {
      const filtered = items.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredItems(filtered);
    });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <input
        value={query}
        onChange={handleFilter}
        placeholder="Search 10,000 items..."
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
      {isPending && <p style={{ color: "#3b82f6", fontSize: 13, margin: "2px 0 0" }}>Filtering items in background...</p>}
      
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
        {filteredItems.length === 0 && query ? (
          <p style={{ color: "#64748b", margin: 0 }}>No items match search</p>
        ) : filteredItems.length === 0 ? (
          <p style={{ color: "#64748b", margin: 0 }}>Start typing to filter list...</p>
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
      title="useTransition() Hook"
      subtitle="Tandai pembaruan state tertentu sebagai 'transisi' non-urgent agar UI interaktif tidak freeze saat render data berat."
      accentColor="#3b82f6"
    >
      <p>
        <strong>Apa Itu useTransition?</strong><br />
        <code>useTransition</code> adalah hook React yang digunakan untuk membagi update state menjadi dua prioritas:
        Prioritas Tinggi (seperti input teks langsung) dan Prioritas Rendah/Transisi (seperti filter list panjang).
      </p>

      <h2>🚀 Live Demo</h2>
      <div className="demo-box">
        <UseTransitionDemo />
      </div>

      <h2>🎯 Masalah Tanpa useTransition</h2>
      <p>
        Ketika mengetik di input pencarian yang memfilter ribuan item, UI akan lag karena setiap ketukan huruf
        memaksa React memblokir thread utama untuk memproses pemfilteran berat.
      </p>

      <h2>🧪 Contoh Kode Implementasi</h2>
      <pre>
        <code>{`const [query, setQuery] = useState("");
const [filteredItems, setFilteredItems] = useState([]);
const [isPending, startTransition] = useTransition();

const handleFilter = (e) => {
  const value = e.target.value;
  setQuery(value); // Urgent: Update input langsung

  startTransition(() => {
    // Non-Urgent: Update list ditangguhkan
    const filtered = items.filter(item => item.includes(value));
    setFilteredItems(filtered);
  });
};`}</code>
      </pre>

      <div className="summary">
        🎯 Gunakan <code>useTransition</code> jika Anda mendeteksi interaksi pengguna (seperti mengetik) terganggu atau lag akibat pembaruan state yang memproses data dalam jumlah besar.
      </div>
    </PageLayout>
  );
}
