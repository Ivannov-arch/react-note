import { useState } from "react";
import PageLayout from "../../../Components/PageLayout";

function MyComponent() {
  const [name, setName] = useState("Guest");
  const [age, setAge] = useState(0);
  const [isEmployed, setIsEmployed] = useState(false);

  const updateName = () => {
    setName(name === "Guest" ? "Spongebob" : "Guest");
  };
  const incrementAge = () => setAge(age + 1);
  const toggleIsEmployed = () => setIsEmployed(!isEmployed);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      {[
        { label: "Name", value: name, action: updateName, btn: "Toggle Name" },
        { label: "Age", value: age, action: incrementAge, btn: "Increment" },
        { label: "Employed", value: isEmployed ? "Yes ✓" : "No ✗", action: toggleIsEmployed, btn: "Toggle" },
      ].map(({ label, value, action, btn }) => (
        <div
          key={label}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px 16px",
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: 10,
          }}
        >
          <div>
            <span style={{ fontSize: 11, color: "#64748b", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.07em" }}>{label}</span>
            <div style={{ fontSize: 18, fontWeight: 700, color: "#e2e8f0", marginTop: 2 }}>{value}</div>
          </div>
          <button onClick={action}>{btn}</button>
        </div>
      ))}
    </div>
  );
}

export default function Page() {
  return (
    <PageLayout
      title="useState() Hook"
      subtitle="Hook dasar di React untuk menyimpan dan mengelola data dinamis di dalam komponen fungsional."
      accentColor="#6366f1"
    >
      <p>
        <strong>Apa Itu useState?</strong><br />
        <code>useState</code> adalah hook dasar di React yang digunakan untuk
        menyimpan dan mengelola state (data yang bisa berubah) di dalam
        komponen fungsional. Tanpa ini, React tidak tahu kapan harus me-render ulang.
      </p>

      <h2>🧠 Cara Kerja useState</h2>
      <p>Ketika kamu memanggil <code>useState(defaultValue)</code>, React mengembalikan dua hal:</p>
      <ul>
        <li><code>state</code> → Nilai sekarang</li>
        <li><code>setState</code> → Fungsi untuk mengubah nilainya</li>
      </ul>

      <h2>🚀 Live Demo</h2>
      <div className="demo-box">
        <MyComponent />
      </div>

      <h2>🧪 Contoh Kode Lengkap</h2>
      <pre>
        <code>{`import { useState } from "react";

function MyComponent() {
  const [name, setName] = useState("Guest");
  const [age, setAge] = useState(0);
  const [isEmployed, setIsEmployed] = useState(false);

  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={() => setName("Spongebob")}>Set Name</button>

      <p>Age: {age}</p>
      <button onClick={() => setAge(age + 1)}>Increment Age</button>

      <p>Is Employed: {isEmployed ? "Yes" : "No"}</p>
      <button onClick={() => setIsEmployed(!isEmployed)}>Toggle</button>
    </div>
  );
}`}</code>
      </pre>

      <h2>⚙️ Penjelasan Perubahan</h2>
      <ul>
        <li><code>setName</code> akan mengganti <code>name</code> dari "Guest" menjadi "Spongebob", dan sebaliknya.</li>
        <li><code>setAge</code> akan menaikkan angka <code>age</code> satu per satu.</li>
        <li><code>setIsEmployed</code> akan membalik nilai boolean (<code>true</code>/<code>false</code>).</li>
      </ul>

      <h2>💡 Kenapa Perlu useState?</h2>
      <p>
        Karena React hanya akan re-render komponen jika kamu menggunakan{" "}
        <code>useState</code> atau hook lain yang state-aware. Kalau kamu
        hanya mengubah variabel biasa, perubahan itu tidak akan terlihat di UI.
      </p>

      <div className="summary">
        🎯 Gunakan <code>useState</code> untuk menyimpan dan mengatur data
        dinamis dalam React. Ini adalah fondasi dari interaktivitas di aplikasi React modern.
      </div>
    </PageLayout>
  );
}
