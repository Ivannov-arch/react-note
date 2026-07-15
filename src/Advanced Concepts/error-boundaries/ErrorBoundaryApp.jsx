import PageLayout from "../../Components/PageLayout";

export default function Page() {
  return (
    <PageLayout
      title="Error Boundary di React"
      subtitle="Tangkap error JavaScript di child components dan tampilkan fallback UI agar aplikasi tidak crash total."
      accentColor="#f43f5e"
    >
      <p>
        <strong>Apa Itu Error Boundary?</strong><br />
        Error Boundary adalah <strong>komponen React kelas (class component)</strong> yang digunakan
        untuk menangkap error JavaScript dalam komponen anak (child) saat proses
        rendering, lifecycle method, atau constructor. Tujuannya: <strong>mencegah seluruh UI crash</strong> hanya karena satu bagian error.
      </p>

      <h2>⚙️ Kapan Dipakai?</h2>
      <ul>
        <li>Saat kamu ingin menampilkan fallback UI jika ada bagian aplikasi yang error.</li>
        <li>Sangat berguna di production untuk <strong>menangkap bug tak terduga</strong>.</li>
        <li>React 18 ke bawah hanya mendukung Error Boundary untuk class component, bukan hook.</li>
      </ul>

      <h2>🚨 Contoh Implementasi Class Component</h2>
      <pre>
        <code>{`import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }; // update state untuk memicu fallback UI
  }

  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught an error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>❌ Something went wrong.</h1>;
    }
    return this.props.children;
  }
}`}</code>
      </pre>

      <h2>🧪 Contoh Pemakaian</h2>
      <pre>
        <code>{`import ErrorBoundary from './ErrorBoundary';
import Demo from './Demo'; // Komponen yang mungkin error

export default function Page() {
  return (
    <ErrorBoundary>
      <Demo defaultValue="Test" />
    </ErrorBoundary>
  );
}`}</code>
      </pre>

      <h2>📌 Tips & Best Practice</h2>
      <ul>
        <li>Gunakan Error Boundary di <strong>sekitar bagian rawan error</strong>, misalnya komponen pihak ketiga atau fetch data.</li>
        <li>Kamu bisa membuat <code>fallback UI</code> yang lebih menarik dari sekadar teks, seperti visual/ilustrasi error.</li>
        <li>Tidak bisa menangkap error dari <strong>event handler</strong>, <code>async/await</code>, atau error di server-side (Next.js SSR).</li>
        <li>Untuk React 18+, bisa menggunakan library seperti <code>react-error-boundary</code> untuk integrasi dengan function component.</li>
      </ul>

      <div className="summary">
        🎯 Error Boundary mencegah crash total pada UI saat error tak terduga muncul.
        Gunakan di sekitar komponen penting untuk memberikan pengalaman pengguna yang lebih aman & profesional.
      </div>
    </PageLayout>
  );
}
