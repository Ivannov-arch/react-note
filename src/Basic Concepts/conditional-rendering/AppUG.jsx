import UserGreeting from "./UserGreeting";
import PageLayout from "../../Components/PageLayout";

function GreetingDemo() {
  return (
    <div className="demo-box" style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <UserGreeting isLoggedIn={true} username="BroCode" />
      <UserGreeting isLoggedIn={true} />
      <UserGreeting />
    </div>
  );
}

export default function Page() {
  return (
    <PageLayout
      title="Conditional Rendering"
      subtitle="Teknik menampilkan elemen atau komponen secara dinamis berdasarkan kondisi tertentu."
      accentColor="#a78bfa"
    >
      <p>
        <strong>Apa itu Conditional Rendering?</strong><br />
        Conditional Rendering adalah teknik dalam React untuk menampilkan elemen
        atau komponen secara dinamis berdasarkan kondisi tertentu (biasanya
        nilai boolean atau ekspresi).
      </p>

      <h2>📦 Contoh pada Komponen <code>UserGreeting</code></h2>
      <p>
        Komponen ini menerima prop <code>isLoggedIn</code> dan menampilkan
        output yang berbeda tergantung nilainya:
      </p>

      <pre>
        <code>{`return (
  props.isLoggedIn 
    ? <h2 style={welcomeMsg}>Welcome {props.username}</h2>
    : <h2 style={loginPmt}>Please log in to continue</h2>
);`}</code>
      </pre>

      <div className="callout">
        Jika <code>isLoggedIn</code> bernilai <strong>true</strong> → pesan sambutan ditampilkan.<br />
        Jika <strong>false</strong> → prompt untuk login yang muncul.
      </div>

      <h2>🎨 Styling Berbeda Berdasarkan Kondisi</h2>
      <p>Untuk memperkuat tampilan, masing-masing pesan memiliki <code>style</code> berbeda:</p>
      <ul>
        <li><strong>Welcome Message:</strong> latar hijau (menandakan sukses)</li>
        <li><strong>Login Prompt:</strong> latar merah (menandakan perlu tindakan)</li>
      </ul>

      <h2>✅ Keuntungan Teknik Ini</h2>
      <ul>
        <li>Kode jadi lebih bersih daripada pakai <code>if-else</code> di dalam <code>return</code></li>
        <li>Memisahkan logika dan presentasi dengan rapi</li>
        <li>Mudah dibaca, terutama saat hanya dua kondisi</li>
      </ul>

      <h2>🧪 Contoh Output</h2>
      <pre>
        <code>{`<UserGreeting isLoggedIn={true} username="BroCode" />
→ Welcome BroCode

<UserGreeting isLoggedIn={false} />
→ Please log in to continue`}</code>
      </pre>

      <h2>📌 Catatan Tambahan</h2>
      <p>
        Teknik ternary seperti ini ideal untuk kondisi sederhana.
        Untuk kondisi kompleks atau bertingkat, gunakan <code>if-else</code> biasa
        atau ekstrak ke fungsi.
      </p>

      <h2>🚀 Live Demo</h2>
      <GreetingDemo />

      <div className="summary">
        🎯 Gunakan ternary operator untuk conditional rendering sederhana dan <code>if-else</code> untuk logika yang lebih kompleks.
      </div>
    </PageLayout>
  );
}
