import React, { useState } from "react";
import PageLayout from "../../Components/PageLayout";

const Header = React.memo(() => {
  console.log("Header di-render ulang!");
  return (
    <div
      style={{
        background: "rgba(255, 255, 255, 0.03)",
        border: "1px solid rgba(255, 255, 255, 0.07)",
        borderRadius: 8,
        padding: 12,
        marginBottom: 12,
      }}
    >
      <span style={{ fontSize: 10, color: "#64748b", fontWeight: 600, uppercase: true }}>Header Component (React.memo)</span>
      <h3 style={{ margin: "4px 0 0", color: "#e2e8f0" }}>Aplikasi Penghitung</h3>
    </div>
  );
});

Header.displayName = "Header";

function MemoDemo() {
  const [count, setCount] = useState(0);
  return (
    <div style={{ textAlign: "center" }}>
      <Header />
      <h1 style={{ fontSize: 36, fontWeight: 800, margin: "16px 0" }}>{count}</h1>
      <button onClick={() => setCount((c) => c + 1)}>Tambah Count</button>
      <p style={{ fontSize: 12, color: "#64748b", marginTop: 8, margin: 0 }}>
        Buka Console di browser. Header tidak akan re-render saat Count bertambah!
      </p>
    </div>
  );
}

export default function Page() {
  return (
    <PageLayout
      title="React.memo() HOC"
      subtitle="Bungkus functional component untuk mencegah rendering ulang jika properti (props) yang diterima tidak berubah."
      accentColor="#10b981"
    >
      <p>
        <strong>Apa Itu React.memo()?</strong><br />
        <code>React.memo()</code> adalah Higher-Order Component (HOC) bawaan React yang digunakan untuk
        mengurangi beban render dengan mengingat (memoize) hasil output komponen. React akan melewati proses rendering komponen jika props tidak mengalami perubahan.
      </p>

      <h2>🚀 Live Demo</h2>
      <div className="demo-box">
        <MemoDemo />
      </div>

      <h2>🎯 Kapan Menggunakan React.memo()?</h2>
      <ul>
        <li>Komponen bersifat murni (pure functional component) — selalu merender output yang sama untuk props yang sama.</li>
        <li>Komponen dirender terlalu sering pada parent component yang sering melakukan update state.</li>
        <li>Komponen menerima props yang relatif jarang berubah.</li>
      </ul>

      <h2>🧪 Contoh Kode</h2>
      <pre>
        <code>{`const Header = React.memo(({ title }) => {
  console.log("Header rendered!");
  return <h2>{title}</h2>;
});`}</code>
      </pre>

      <h2>⚠️ Batasan Penting: Perbandingan Referensi</h2>
      <p>
        React.memo melakukan perbandingan dangkal (shallow comparison) pada properti. Jika Anda mengirim properti berupa objek, array, atau fungsi kustom, React akan menganggap properti tersebut selalu baru karena referensi memorinya berubah di setiap proses render.
      </p>

      <div className="callout">
        💡 <strong>Tips:</strong> Gunakan custom comparison function sebagai argumen kedua <code>{`React.memo(Component, areEqual)`}</code> jika Anda perlu melakukan deep comparison pada properti berupa objek/array.
      </div>

      <div className="summary">
        🎯 <code>React.memo()</code> sangat berguna untuk optimasi, tetapi gunakan dengan bijak. Menambahkan memoization pada komponen yang sangat ringan justru bisa menambah beban overhead memori.
      </div>
    </PageLayout>
  );
}
