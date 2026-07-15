import { useState, useCallback } from "react";
import CounterButton from "./CounterButton";
import PageLayout from "../../Components/PageLayout";

function CallbackDemo() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => setCount((prev) => prev + 1), []);
  const decrement = useCallback(() => setCount((prev) => prev - 1), []);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16, alignItems: "center" }}>
      <h3 style={{ margin: 0, fontSize: 36, fontWeight: 800 }}>{count}</h3>
      <div style={{ display: "flex", gap: 8 }}>
        <CounterButton onClick={increment} label="Tambah" />
        <CounterButton onClick={decrement} label="Kurangi" />
      </div>
      <p style={{ fontSize: 12, color: "#64748b", margin: 0 }}>
        Buka Console browser. Tombol tidak akan dibuat ulang dan me-render ulang berlebihan berkat <code>useCallback</code>!
      </p>
    </div>
  );
}

export default function UseCallbackPage() {
  return (
    <PageLayout
      title="useCallback() Hook"
      subtitle="Menghafal (memoize) definisi fungsi agar tidak dibuat ulang pada setiap render."
      accentColor="#10b981"
    >
      <p>
        <strong>Apa Itu useCallback?</strong><br />
        <code>useCallback</code> adalah hook React yang mengembalikan versi fungsi callback yang termemoirisasi.
        Ini menjaga referensi fungsi tetap stabil di antara render komponen.
      </p>

      <h2>🚀 Live Demo</h2>
      <div className="demo-box">
        <CallbackDemo />
      </div>

      <h2>🎯 Kapan Sebaiknya Menggunakan useCallback?</h2>
      <ul>
        <li>Mengirimkan fungsi ke komponen anak sebagai properti, dan Anda ingin mencegah re-render komponen anak tersebut.</li>
        <li>Komponen anak menggunakan optimasi render seperti <code>React.memo</code>.</li>
        <li>Fungsi tersebut digunakan sebagai dependensi pada hook lain seperti <code>useEffect</code>.</li>
      </ul>

      <h2>🧪 Contoh Kode</h2>
      <pre>
        <code>{`const increment = useCallback(() => {
  setCount(prev => prev + 1);
}, []); // Array dependensi kosong = fungsi dibuat hanya sekali`}</code>
      </pre>

      <div className="summary">
        🎯 <code>useCallback</code> sangat penting untuk menjaga performa rendering pohon komponen tetap efisien dengan menghindari pembuatan instansiasi fungsi baru yang tidak perlu.
      </div>
    </PageLayout>
  );
}
