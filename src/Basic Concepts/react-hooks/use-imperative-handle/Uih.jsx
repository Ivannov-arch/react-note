import { useRef, useImperativeHandle, forwardRef } from "react";
import PageLayout from "../../../Components/PageLayout";

export const CustomInput = forwardRef((_, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => ({
    focusInput: () => {
      if (inputRef.current) inputRef.current.focus();
    },
    clearInput: () => {
      if (inputRef.current) inputRef.current.value = "";
    },
  }));

  return (
    <input
      style={{
        background: "rgba(255, 255, 255, 0.04)",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        borderRadius: "8px",
        color: "#e2e8f0",
        padding: "8px 12px",
        fontSize: "14px",
        outline: "none",
        fontFamily: "inherit",
        marginRight: 8,
      }}
      ref={inputRef}
      type="text"
      placeholder="Type something..."
    />
  );
});

CustomInput.displayName = "CustomInput";

function ImperativeDemo() {
  const customInputRef = useRef(null);

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
      <CustomInput ref={customInputRef} />
      <button onClick={() => customInputRef.current?.focusInput()}>Focus</button>
      <button onClick={() => customInputRef.current?.clearInput()}>Clear</button>
    </div>
  );
}

export default function Page() {
  return (
    <PageLayout
      title="useImperativeHandle() Hook"
      subtitle="Mengatur ref yang diekspos oleh child component agar parent component hanya bisa mengakses fungsi spesifik."
      accentColor="#8b5cf6"
    >
      <p>
        <strong>Apa Itu useImperativeHandle?</strong><br />
        Hook ini digunakan bersama <code>forwardRef</code> untuk membatasi kontrol parent component
        terhadap child component. Parent tidak bisa sembarangan mengakses atau memodifikasi seluruh DOM/state internal child.
      </p>

      <h2>🚀 Live Demo</h2>
      <div className="demo-box">
        <ImperativeDemo />
      </div>

      <h2>🔍 Kapan Digunakan?</h2>
      <ul>
        <li>Saat kamu ingin membatasi parent component hanya untuk mengeksekusi aksi/fungsi tertentu pada child.</li>
        <li>Cocok untuk membuat reusable components seperti input kustom, player media, modal, atau carousel yang dikontrol dari luar.</li>
      </ul>

      <h2>🧪 Contoh Kode Implementasi</h2>
      <pre>
        <code>{`// Child Component (CustomInput.jsx)
import { forwardRef, useRef, useImperativeHandle } from "react";

export const CustomInput = forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focusInput: () => inputRef.current.focus(),
    clearInput: () => inputRef.current.value = "",
  }));

  return <input ref={inputRef} />;
});`}</code>
      </pre>

      <h2>💡 Analogi Sederhana</h2>
      <p>
        Bayangkan komponen child adalah <strong>mesin kopi otomatis</strong>.<br />
        Dengan <code>useImperativeHandle</code>, Anda hanya menyediakan akses ke tombol <em>"Brew"</em> dan <em>"Clean"</em>
        tanpa membiarkan parent membongkar isi mesin di dalamnya.
      </p>

      <h2>📌 Aturan Penggunaan</h2>
      <ul>
        <li>Hanya dapat digunakan di dalam komponen yang dibungkus oleh <code>forwardRef()</code>.</li>
        <li>Gunakan untuk menjaga enkapsulasi (encapsulation) dan keamanan interaksi komponen.</li>
      </ul>

      <div className="summary">
        🎯 Gunakan <code>useImperativeHandle</code> untuk menjaga pembatasan fungsionalitas dan enkapsulasi yang rapi antara parent dan child component.
      </div>
    </PageLayout>
  );
}
