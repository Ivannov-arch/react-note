import { useState, useMemo } from "react";
import PageLayout from "../../Components/PageLayout";

function UseMemoDemo() {
  const [items] = useState([100, 200, 300]);
  const [count, setCount] = useState(0);

  const total = useMemo(() => {
    console.log("Menghitung total...");
    return items.reduce((sum, item) => sum + item, 0);
  }, [items]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "center" }}>
      <div style={{ padding: "12px 20px", background: "rgba(255, 255, 255, 0.03)", border: "1px solid rgba(255, 255, 255, 0.07)", borderRadius: 10 }}>
        <span style={{ fontSize: 10, color: "#64748b", fontWeight: 600, uppercase: true }}>Total Price (useMemo)</span>
        <div style={{ fontSize: 24, fontWeight: 800, marginTop: 4 }}>${total}</div>
      </div>
      <button onClick={() => setCount((c) => c + 1)}>Increment Count: {count}</button>
      <p style={{ fontSize: 12, color: "#64748b", margin: 0 }}>
        Meskipun state <code>count</code> berubah, kalkulasi total harga tidak dihitung ulang!
      </p>
    </div>
  );
}

export default function UseMemoPage() {
  return (
    <PageLayout
      title="useMemo() Hook"
      subtitle="Menghafal (memoize) hasil perhitungan komputasi berat agar tidak dieksekusi ulang di setiap render."
      accentColor="#10b981"
    >
      <p>
        <strong>Apa Itu useMemo?</strong><br />
        <code>useMemo()</code> adalah hook React yang digunakan untuk menyimpan nilai hasil komputasi.
        React hanya akan menghitung ulang nilai tersebut jika salah satu dari dependensi yang ditentukan mengalami perubahan.
      </p>

      <h2>🚀 Live Demo</h2>
      <div className="demo-box">
        <UseMemoDemo />
      </div>

      <h2>📌 Kapan Sebaiknya Menggunakan useMemo?</h2>
      <ul>
        <li>Ada operasi matematika, penyaringan (filtering) data, atau pengurutan (sorting) data yang memproses ribuan baris data.</li>
        <li>Nilai kalkulasi tersebut tidak perlu diperbarui jika tidak ada perubahan pada dependensi input asalnya.</li>
        <li>Menghindari perlambatan rendering pada komponen visual akibat proses sinkronisasi kalkulasi yang mahal.</li>
      </ul>

      <h2>🧪 Contoh Kode Implementasi</h2>
      <pre>
        <code>{`const total = useMemo(() => {
  return items.reduce((sum, item) => sum + item, 0);
}, [items]); // Hanya dihitung ulang jika array 'items' berubah`}</code>
      </pre>

      <div className="summary">
        🎯 Gunakan <code>useMemo</code> untuk memotong waktu render yang terbuang sia-sia pada komputasi berat yang bersifat redundan.
      </div>
    </PageLayout>
  );
}
