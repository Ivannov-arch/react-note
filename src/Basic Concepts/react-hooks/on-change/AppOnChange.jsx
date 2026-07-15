import OnChange from "./OnChange";
import PageLayout from "../../../Components/PageLayout";

export default function Page() {
  return (
    <PageLayout
      title="onChange Event Handler"
      subtitle="Menghubungkan elemen input form dengan state React untuk membuat controlled components."
      accentColor="#6366f1"
    >
      <p>
        <strong>Apa Itu onChange?</strong><br />
        <code>onChange</code> adalah event handler di React yang digunakan untuk
        menangani setiap perubahan pada elemen form seperti <code>&lt;input&gt;</code>,{" "}
        <code>&lt;textarea&gt;</code>, <code>&lt;select&gt;</code>, dan{" "}
        <code>&lt;input type="radio"&gt;</code>.
        Ketika nilai elemen berubah, <code>onChange</code> memicu handler function untuk mengupdate state.
      </p>

      <h2>🎯 Tujuan Utama</h2>
      <p>
        Menghubungkan input user ke state React agar data UI selalu tersinkronisasi secara real-time.
      </p>

      <h2>🚀 Live Demo</h2>
      <div className="demo-box" style={{ background: "rgba(17,24,39,0.85)" }}>
        <OnChange />
      </div>

      <h2>🔍 Contoh Implementasi</h2>
      <pre>
        <code>{`const [name, setName] = useState("Guest");

function handleNameChange(event) {
  setName(event.target.value);
}

return (
  <>
    <input value={name} onChange={handleNameChange} />
    <p>Name: {name}</p>
  </>
);`}</code>
      </pre>

      <h2>📦 Jenis-Jenis Input yang Didukung</h2>
      <ul>
        <li><strong>Text Input:</strong> untuk nama, username, kata sandi, dsb.</li>
        <li><strong>Number Input:</strong> untuk kuantitas, harga, umur.</li>
        <li><strong>Textarea:</strong> untuk kolom teks panjang, deskripsi, atau komentar.</li>
        <li><strong>Select Dropdown:</strong> pilihan dari daftar menu dropdown.</li>
        <li><strong>Radio Buttons:</strong> pilihan tunggal dari beberapa opsi yang tersedia.</li>
      </ul>

      <h2>🧠 Controlled Components</h2>
      <p>
        Di React, input form yang datanya diatur oleh state disebut dengan <strong>controlled component</strong>.
        Ini memberi kita kontrol penuh atas isi input, mempermudah validasi langsung, dan mempermudah reset nilai input.
      </p>

      <div className="summary">
        🎯 Gunakan event <code>onChange</code> untuk menangkap input pengguna secara real-time dan
        menyinkronkannya dengan state React Anda.
      </div>
    </PageLayout>
  );
}
