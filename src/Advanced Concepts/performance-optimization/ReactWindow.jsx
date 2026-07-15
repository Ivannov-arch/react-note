import PageLayout from "../../Components/PageLayout";
import { FixedSizeList as List } from "react-window";

const names = Array.from({ length: 3000 }, (_, i) => `Nama ${i + 1}`);

function WindowDemo() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          border: "1px solid rgba(255, 255, 255, 0.08)",
          borderRadius: 12,
          overflow: "hidden",
          background: "rgba(0,0,0,0.2)",
        }}
      >
        <List
          height={200}
          itemCount={3000}
          itemSize={35}
          width={300}
        >
          {({ index, style }) => (
            <div
              style={{
                ...style,
                display: "flex",
                alignItems: "center",
                paddingLeft: 16,
                borderBottom: "1px solid rgba(255, 255, 255, 0.03)",
                fontSize: 13,
                color: "#94a3b8",
              }}
            >
              👤 {names[index]}
            </div>
          )}
        </List>
      </div>
    </div>
  );
}

export default function ReactWindow() {
  return (
    <PageLayout
      title="Virtualisasi List dengan react-window"
      subtitle="Render ribuan elemen daftar dengan performa tinggi hanya dengan menggambar item yang terlihat di viewport."
      accentColor="#10b981"
    >
      <p>
        <strong>Apa Itu react-window?</strong><br />
        <code>react-window</code> adalah library React populer untuk memvirtualisasikan daftar (list virtualization).
        Alih-alih membuat ribuan elemen DOM sekaligus yang membuat browser hang, ia hanya memuat elemen yang saat ini masuk di layar.
      </p>

      <h2>🚀 Live Demo (3.000 Item)</h2>
      <p style={{ textAlign: "center", fontSize: 13 }}>Coba scroll list di bawah ini:</p>
      <div className="demo-box">
        <WindowDemo />
      </div>

      <h2>🔧 Contoh Implementasi</h2>
      <pre>
        <code>{`import { FixedSizeList as List } from "react-window";

const names = ["Name 1", "Name 2", "Name 3", ...]; // 3000 items

function VirtualList() {
  return (
    <List
      height={400}     // Tinggi kontainer list (px)
      itemCount={3000} // Jumlah total data
      itemSize={35}    // Tinggi tiap baris item (px)
      width={300}      // Lebar kontainer
    >
      {({ index, style }) => (
        <div style={style}>
          {names[index]}
        </div>
      )}
    </List>
  );
}`}</code>
      </pre>

      <h2>🎯 Manfaat Utama Virtualisasi</h2>
      <ul>
        <li><strong>Hemat Memori:</strong> Mengurangi beban RAM browser secara drastis.</li>
        <li><strong>Instant Loading:</strong> Halaman langsung responsif sejak pertama kali dibuka meskipun memuat jutaan data.</li>
      </ul>

      <div className="summary">
        🎯 Gunakan <code>react-window</code> jika Anda merender daftar panjang berisi lebih dari 500 data untuk menjaga kegesitan antarmuka pengguna Anda.
      </div>
    </PageLayout>
  );
}
