import { useState } from "react";
import PageLayout from "../../../Components/PageLayout";

function MyFoods() {
  const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);
  const [input, setInput] = useState("");

  function handleAddFood() {
    if (!input.trim()) return;
    setFoods((f) => [...f, input.trim()]);
    setInput("");
  }

  function handleRemoveFood(index) {
    setFoods(foods.filter((_, i) => i !== index));
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        {foods.map((food, index) => (
          <span
            key={index}
            onClick={() => handleRemoveFood(index)}
            style={{
              background: "rgba(99,102,241,0.12)",
              border: "1px solid rgba(99,102,241,0.25)",
              borderRadius: 8,
              padding: "5px 12px",
              fontSize: 13,
              color: "#a5b4fc",
              cursor: "pointer",
              transition: "all 0.15s",
              userSelect: "none",
            }}
            title="Click to remove"
            onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(239,68,68,0.15)"; e.currentTarget.style.borderColor = "rgba(239,68,68,0.3)"; e.currentTarget.style.color = "#fca5a5"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(99,102,241,0.12)"; e.currentTarget.style.borderColor = "rgba(99,102,241,0.25)"; e.currentTarget.style.color = "#a5b4fc"; }}
          >
            {food} ✕
          </span>
        ))}
      </div>
      <div style={{ display: "flex", gap: 8 }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAddFood()}
          placeholder="Add food name..."
          style={{
            flex: 1,
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 8,
            color: "#e2e8f0",
            padding: "8px 12px",
            fontSize: 13,
            outline: "none",
            fontFamily: "inherit",
          }}
        />
        <button onClick={handleAddFood}>Add</button>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <PageLayout
      title="Update Arrays dengan useState"
      subtitle="Di React, array tidak boleh diubah langsung — selalu buat salinan baru dan update via setState()."
      accentColor="#f59e0b"
    >
      <p>
        <strong>Kenapa Harus Perhatian Saat Update Array?</strong><br />
        Di React, kamu tidak boleh mengubah array secara langsung. Kita harus
        membuat <em>copy baru</em> dari array, lalu set dengan <code>setState()</code>.
        Kalau tidak, React bisa gagal mendeteksi perubahan dan tidak akan me-render ulang.
      </p>

      <div className="callout">
        ⚠️ Jangan pernah pakai <code>foods.push()</code> atau <code>foods.splice()</code> langsung —
        itu mutasi langsung yang React tidak bisa deteksi!
      </div>

      <h2>🚀 Live Demo — List Makanan</h2>
      <p>Klik item untuk menghapus. Ketik nama makanan dan tekan Enter atau klik Add.</p>
      <div className="demo-box">
        <MyFoods />
      </div>

      <h2>📦 Kode Implementasi</h2>
      <pre>
        <code>{`const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

// Tambah item → spread ke array baru
function handleAddFood(newFood) {
  setFoods(f => [...f, newFood]);
}

// Hapus item → filter ke array baru
function handleRemoveFood(index) {
  setFoods(foods.filter((_, i) => i !== index));
}`}</code>
      </pre>

      <h2>⚙️ Penjelasan Update Array</h2>
      <ul>
        <li><code>[...f, newFood]</code> → Membuat array baru dengan menambahkan item baru ke akhir.</li>
        <li><code>filter((_, i) =&gt; i !== index)</code> → Menghapus item berdasarkan indeks, menghasilkan array baru tanpa item itu.</li>
        <li>Setiap update harus melalui <code>setFoods()</code> agar React me-render ulang komponen.</li>
      </ul>

      <h2>💡 Tips Penting</h2>
      <ul>
        <li>Selalu gunakan <strong>spread syntax</strong> <code>[...prev]</code> atau <code>filter()</code> untuk membuat salinan baru.</li>
        <li>Gunakan <strong>updater function</strong> <code>setFoods(f =&gt; ...)</code> untuk update yang bergantung pada state sebelumnya.</li>
        <li>Hindari akses DOM langsung seperti <code>getElementById</code>. Gunakan <code>useState</code> untuk controlled input.</li>
      </ul>

      <div className="summary">
        🎯 Saat bekerja dengan array di React, selalu buat salinan baru dan update menggunakan <code>setState()</code>.
        Ini menjaga komponen tetap <em>reactive</em> dan efisien.
      </div>
    </PageLayout>
  );
}
