import { useEffect, useRef } from "react";
import PageLayout from "../../../Components/PageLayout";

function UseRefDemo() {
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);

  useEffect(() => {
    console.log("COMPONENT RENDERED");
  });

  function focusAndStyle(ref, active) {
    if (ref.current) {
      if (active) {
        ref.current.focus();
        ref.current.style.borderColor = "#6366f1";
        ref.current.style.boxShadow = "0 0 0 3px rgba(99,102,241,0.15)";
        ref.current.style.background = "rgba(99,102,241,0.06)";
      } else {
        ref.current.style.borderColor = "rgba(255,255,255,0.08)";
        ref.current.style.boxShadow = "none";
        ref.current.style.background = "rgba(255,255,255,0.04)";
      }
    }
  }

  function handleClick1() {
    focusAndStyle(inputRef1, true);
    focusAndStyle(inputRef2, false);
    focusAndStyle(inputRef3, false);
  }

  function handleClick2() {
    focusAndStyle(inputRef1, false);
    focusAndStyle(inputRef2, true);
    focusAndStyle(inputRef3, false);
  }

  function handleClick3() {
    focusAndStyle(inputRef1, false);
    focusAndStyle(inputRef2, false);
    focusAndStyle(inputRef3, true);
  }

  const inputStyle = {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "8px",
    color: "#e2e8f0",
    padding: "8px 12px",
    fontSize: "14px",
    outline: "none",
    width: "100%",
    transition: "all 0.2s",
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      {[
        { label: "Input Reference 1", ref: inputRef1, action: handleClick1 },
        { label: "Input Reference 2", ref: inputRef2, action: handleClick2 },
        { label: "Input Reference 3", ref: inputRef3, action: handleClick3 },
      ].map((item, index) => (
        <div key={index} style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <button style={{ minWidth: 100 }} onClick={item.action}>Focus {index + 1}</button>
          <input style={inputStyle} ref={item.ref} placeholder={`Write in ${item.label}...`} />
        </div>
      ))}
    </div>
  );
}

export default function Page() {
  return (
    <PageLayout
      title="useRef() Hook"
      subtitle="Menyimpan nilai referensi persisten ke DOM element atau variabel tanpa memicu render ulang saat berubah."
      accentColor="#3b82f6"
    >
      <p>
        <strong>Apa Itu useRef?</strong><br />
        <code>useRef()</code> adalah hook di React yang digunakan untuk membuat referensi objek yang persisten.
        Nilai referensi ini disimpan pada property <code>.current</code> yang bisa kita modifikasi secara langsung.
      </p>

      <h2>🎯 Kegunaan Utama</h2>
      <ul>
        <li>Mengakses atau memanipulasi DOM element secara langsung (seperti memfokuskan input).</li>
        <li>Menyimpan nilai variabel persisten di antara proses render tanpa memicu re-render baru.</li>
      </ul>

      <h2>🚀 Live Demo</h2>
      <div className="demo-box">
        <UseRefDemo />
      </div>

      <h2>🧪 Contoh Penggunaan Kode</h2>
      <pre>
        <code>{`const inputRef = useRef(null);

function handleFocus() {
  // Mengakses method DOM focus secara langsung
  inputRef.current.focus();
}

return (
  <>
    <input ref={inputRef} />
    <button onClick={handleFocus}>Focus Input</button>
  </>
);`}</code>
      </pre>

      <h2>🔄 Perbedaan Utama: useRef vs useState</h2>
      <ul>
        <li><strong>useState:</strong> Memperbarui state akan memicu komponen untuk me-render ulang (re-render) agar UI diperbarui.</li>
        <li><strong>useRef:</strong> Memperbarui nilai <code>ref.current</code> tidak memicu re-render. Cocok untuk data internal komponen yang tidak tampil di layar secara langsung.</li>
      </ul>

      <div className="summary">
        🎯 Gunakan <code>useRef</code> saat Anda ingin mengakses properti DOM murni secara langsung
        atau membutuhkan penyimpanan state lokal yang tidak mempengaruhi rendering antarmuka.
      </div>
    </PageLayout>
  );
}
