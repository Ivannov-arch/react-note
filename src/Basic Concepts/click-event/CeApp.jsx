import ClickEvent from "./ClickEvent";
import PageLayout from "../../Components/PageLayout";

export default function CeApp() {
  return (
    <PageLayout
      title="React Click Events"
      subtitle="Cara merespons interaksi pengguna saat mereka mengklik elemen UI menggunakan onClick dan onDoubleClick."
      accentColor="#f59e0b"
    >
      <p>
        <strong>Click event</strong> memungkinkan kita merespons interaksi
        pengguna saat mereka mengklik elemen UI, seperti tombol. Di React, ini
        dilakukan dengan event handler seperti <code>onClick</code> atau{" "}
        <code>onDoubleClick</code>.
      </p>

      <h2>👆 Live Demo</h2>
      <div className="demo-box">
        <ClickEvent />
      </div>

      <h2>🧠 Penjelasan Kode</h2>

      <pre><code>{`const countRef = useRef(0);`}</code></pre>
      <p>
        Menggunakan <code>useRef</code> untuk menyimpan nilai klik tanpa
        memicu re-render setiap kali berubah.
      </p>

      <pre><code>{`const [messages, setMessages] = useState([]);`}</code></pre>
      <p>Menyimpan daftar pesan hasil klik agar bisa ditampilkan di layar.</p>

      <pre>
        <code>{`const handleClick = (name) => {
  countRef.current++;
  setMessages([...messages, \`Clicked \${name} \${countRef.current}x\`]);
}`}</code>
      </pre>
      <p>
        Menangani klik biasa. Jika klik belum lebih dari 3 kali, tampilkan
        jumlah klik. Setelahnya, munculkan peringatan.
      </p>

      <pre>
        <code>{`const handleDoubleClick = (e) => {
  e.target.textContent = "OUCH!";
  setMessages([...messages, "Double clicked!"]);
}`}</code>
      </pre>
      <p>
        Menangani klik dua kali. Teks tombol diubah dan pesan ditambahkan ke log.
      </p>

      <h2>📌 Tips</h2>
      <ul>
        <li>Gunakan <code>useRef</code> untuk menyimpan nilai klik tanpa re-render.</li>
        <li><code>e.target</code> dapat digunakan untuk mengakses elemen yang diklik.</li>
        <li><code>onClick</code> = klik biasa, <code>onDoubleClick</code> = klik dua kali.</li>
        <li>Gunakan <code>console.log()</code> untuk mencatat interaksi di konsol saat development.</li>
        <li>Bisa juga menampilkan log langsung ke UI menggunakan <code>useState</code>.</li>
      </ul>

      <div className="summary">
        🎯 Event handler di React selalu berupa fungsi yang diteruskan sebagai prop,
        bukan string seperti di HTML biasa. Gunakan <code>useRef</code> bila butuh persistensi nilai tanpa re-render.
      </div>
    </PageLayout>
  );
}
