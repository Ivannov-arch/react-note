import PageLayout from "../../Components/PageLayout";

export default function Page() {
  return (
    <PageLayout
      title="Custom Hooks di React"
      subtitle="Abstraksikan logika stateful Anda ke dalam fungsi yang reusable untuk menjaga komponen tetap bersih."
      accentColor="#a78bfa"
    >
      <p>
        <strong>Apa Itu Custom Hook?</strong><br />
        Custom Hook adalah fungsi JavaScript biasa yang namanya diawali dengan
        "use" dan dapat memanggil hook React lain di dalamnya. Tujuannya:{" "}
        <strong>mengabstraksi logika yang dapat dipakai ulang</strong> antar komponen.
      </p>

      <h2>⚙️ Cara Membuat Custom Hook</h2>
      <ul>
        <li>Buat fungsi biasa yang namanya diawali "use", misal <code>useCustom</code>.</li>
        <li>Gunakan hook React (seperti <code>useState</code>, <code>useEffect</code>) di dalamnya.</li>
        <li>Kembalikan nilai atau fungsi yang ingin dibagikan ke komponen.</li>
      </ul>

      <h2>🚀 Contoh Implementasi: <code>useCustom</code></h2>
      <pre>
        <code>{`import { useEffect, useState } from "react";

// Custom hook menerima defaultValue (opsional)
export default function useCustom(defaultValue = "") {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    setValue("Updated");
    console.log(\`value: \${value}\`);
  }, []);

  return value;
}`}</code>
      </pre>

      <h2>🔨 Menggunakan Parameter Default</h2>
      <p>
        Kamu bisa memberikan nilai awal lewat parameter: <code>{`useCustom("Hello")`}</code>.
        Jika tidak, defaultnya adalah string kosong.
      </p>

      <h2>Demo Component Usage</h2>
      <pre>
        <code>{`import useCustom from "./useCustom";

export default function Demo({ defaultValue }) {
  const value = useCustom(defaultValue);

  return (
    <div>
      <h2>Value: {value}</h2>
    </div>
  );
}`}</code>
      </pre>

      <h2>📌 Tips dan Best Practices</h2>
      <ul>
        <li>Pastikan nama hook selalu diawali "use" agar React bisa mendeteksi aturan hook.</li>
        <li>Jangan panggil hook di dalam kondisi atau loop — panggil selalu di level atas fungsi.</li>
        <li>Gunakan dependency array di <code>useEffect</code> secara hati-hati untuk menghindari infinite loop.</li>
        <li>Kemas logika yang berulang (fetch data, form handling, event listener) ke dalam custom hook.</li>
      </ul>

      <div className="summary">
        🎯 Custom Hook memudahkan kita mengekstrak dan membagikan logika antar komponen.
        Ini membuat kode aplikasi Anda lebih reusable, modular, dan mudah diuji.
      </div>
    </PageLayout>
  );
}
