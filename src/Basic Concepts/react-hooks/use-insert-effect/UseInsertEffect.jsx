import { useInsertionEffect } from "react";
import PageLayout from "../../../Components/PageLayout";

function InsertionEffectDemo() {
  useInsertionEffect(() => {
    const style = document.createElement("style");
    style.id = "dynamic-theme-style";
    style.innerHTML = `
      .dynamic-class-box {
        color: #10b981;
        background-color: rgba(16, 185, 129, 0.08);
        border: 1px solid rgba(16, 185, 129, 0.2);
        padding: 12px;
        border-radius: 8px;
        text-align: center;
        font-weight: 600;
        font-size: 14px;
        transition: all 0.2s;
      }
      .dynamic-class-box:hover {
        background-color: rgba(16, 185, 129, 0.15);
        border-color: rgba(16, 185, 129, 0.4);
      }
    `;
    document.head.appendChild(style);

    return () => {
      const el = document.getElementById("dynamic-theme-style");
      if (el) document.head.removeChild(el);
    };
  }, []);

  return <div className="dynamic-class-box">Styled with useInsertionEffect dynamically</div>;
}

export default function Page() {
  return (
    <PageLayout
      title="useInsertionEffect() Hook"
      subtitle="Hook yang berjalan sebelum useLayoutEffect untuk menyisipkan elemen style ke dalam DOM sebelum elemen render."
      accentColor="#10b981"
    >
      <p>
        <strong>Apa Itu useInsertionEffect?</strong><br />
        Ini adalah hook khusus di React 18 yang dirancang untuk developer library CSS-in-JS.
        Hook ini dijalankan <strong>sebelum semua efek layout (useLayoutEffect)</strong> dan sebelum DOM dibaca,
        sehingga CSS dinamis bisa disisipkan ke <code>&lt;head&gt;</code> secara aman dan efisien.
      </p>

      <h2>🚀 Live Demo</h2>
      <div className="demo-box">
        <InsertionEffectDemo />
      </div>

      <h2>🔍 Mengapa Ini Penting?</h2>
      <p>
        Menyisipkan tag <code>&lt;style&gt;</code> ke DOM secara dinamis selama rendering biasa atau di dalam
        <code>useLayoutEffect</code>/<code>useEffect</code> bisa memaksa browser melakukan rekalkulasi style (layout thrashing) berkali-kali.
        Hook ini menyelesaikan masalah performa tersebut.
      </p>

      <h2>🧪 Contoh Kode Menyisipkan Style Dinamis</h2>
      <pre>
        <code>{`useInsertionEffect(() => {
  const style = document.createElement("style");
  style.innerHTML = \`
    .dynamic-class {
      color: white;
      background-color: blue;
    }
  \`;
  document.head.appendChild(style);

  // Cleanup: hapus style tag saat unmount
  return () => {
    document.head.removeChild(style);
  };
}, []);`}</code>
      </pre>

      <h2>⚖️ Perbedaan dengan useEffect & useLayoutEffect</h2>
      <ul>
        <li><strong>useInsertionEffect:</strong> Berjalan sebelum mutasi DOM dibaca browser. Digunakan untuk menyisipkan CSS.</li>
        <li><strong>useLayoutEffect:</strong> Berjalan setelah DOM dimutasi tapi sebelum paint. Digunakan untuk membaca layout DOM.</li>
        <li><strong>useEffect:</strong> Berjalan setelah render selesai di layar. Digunakan untuk side-effect umum.</li>
      </ul>

      <div className="summary">
        🎯 <code>useInsertionEffect</code> dibuat khusus untuk pembuatan library CSS-in-JS (seperti Styled Components atau Emotion)
        agar penyisipan style dinamis berjalan cepat tanpa merusak performa rendering.
      </div>
    </PageLayout>
  );
}
