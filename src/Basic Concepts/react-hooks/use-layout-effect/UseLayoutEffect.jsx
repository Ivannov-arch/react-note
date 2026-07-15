import { useEffect, useLayoutEffect, useState } from "react";
import PageLayout from "../../../Components/PageLayout";

function LayoutEffectDemo() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    setLogs((l) => [...l, "✅ useEffect dijalankan (setelah render browser)"]);
  }, []);

  useLayoutEffect(() => {
    setLogs((l) => [...l, "🔧 useLayoutEffect dijalankan (sebelum browser melukis)"]);
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h4 style={{ margin: 0, fontSize: 14 }}>Urutan Eksekusi (Console Log):</h4>
        <button onClick={() => setLogs([])}>Reset Log</button>
      </div>
      <div
        style={{
          background: "rgba(0, 0, 0, 0.3)",
          border: "1px solid rgba(255, 255, 255, 0.05)",
          borderRadius: 8,
          padding: 12,
          fontFamily: "monospace",
          fontSize: 12,
          color: "#94a3b8",
          minHeight: 80,
        }}
      >
        {logs.map((log, index) => (
          <div key={index} style={{ color: log.startsWith("✅") ? "#34d399" : "#a5b4fc", marginBottom: 4 }}>
            {log}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <PageLayout
      title="useLayoutEffect() Hook"
      subtitle="Mirip dengan useEffect, tapi dipanggil secara sinkron setelah semua perubahan DOM selesai namun sebelum browser menggambar ke layar."
      accentColor="#6366f1"
    >
      <p>
        <strong>Apa Itu useLayoutEffect?</strong><br />
        <code>useLayoutEffect</code> adalah hook yang dijalankan <strong>lebih awal</strong>,
        tepat setelah React memperbarui DOM tetapi <strong>sebelum browser sempat melukis</strong> (paint) tampilan baru tersebut di layar.
      </p>

      <h2>🚀 Live Demo</h2>
      <div className="demo-box">
        <LayoutEffectDemo />
      </div>

      <h2>⚖️ Perbandingan: useEffect vs useLayoutEffect</h2>
      <ul>
        <li><strong>useEffect (Asinkron):</strong> Dijalankan setelah browser menampilkan perubahan di layar. Cocok untuk sebagian besar efek samping seperti fetch data, set event listener, dll.</li>
        <li><strong>useLayoutEffect (Sinkron):</strong> Dijalankan secara sinkron sebelum browser menggambar. Menghalangi rendering sementara (render-blocking) sampai isi efek selesai diproses.</li>
      </ul>

      <h2>🎯 Kapan Sebaiknya Menggunakan useLayoutEffect?</h2>
      <ul>
        <li>Ketika kamu ingin <strong>mengukur ukuran elemen DOM</strong> (tinggi, lebar, posisi scroll) sebelum render selesai agar tidak ada efek flicker/berkedip.</li>
        <li>Melakukan kalkulasi layout UI dinamis sebelum browser menampilkan hasilnya ke pengguna.</li>
      </ul>

      <h2>🧪 Contoh Kode Perbedaan Urutan</h2>
      <pre>
        <code>{`useEffect(() => {
  console.log("✅ useEffect dijalankan setelah render visual");
});

useLayoutEffect(() => {
  console.log("🔧 useLayoutEffect dijalankan sebelum browser menggambar");
});`}</code>
      </pre>

      <div className="summary">
        🎯 Gunakan <code>useLayoutEffect</code> hanya ketika Anda perlu melakukan manipulasi DOM visual yang mendesak untuk mencegah flicker visual. Untuk kasus umum, selalu gunakan <code>useEffect</code>.
      </div>
    </PageLayout>
  );
}
