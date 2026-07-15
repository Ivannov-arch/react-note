import PageLayout from "../../Components/PageLayout";

export default function Page() {
  return (
    <PageLayout
      title="React.lazy() & Suspense"
      subtitle="Memuat komponen secara dinamis (lazy loading) saat dibutuhkan untuk memperkecil ukuran bundle awal aplikasi."
      accentColor="#10b981"
    >
      <p>
        <strong>Apa Itu React.lazy?</strong><br />
        <code>React.lazy</code> memungkinkan Anda merender komponen secara dinamis melalui dynamic import.
        Ini menunda pemuatan JavaScript komponen sampai komponen tersebut benar-benar akan dirender ke layar.
      </p>

      <h2>⚡ Mengapa Melakukan Lazy Loading?</h2>
      <ul>
        <li>Mengurangi ukuran file bundler utama (main bundle size) saat pertama kali memuat website.</li>
        <li>Mempercepat waktu pemuatan halaman pertama (First Contentful Paint).</li>
        <li>Menghemat kuota data bandwidth pengguna dengan memuat komponen besar (seperti chart/editor) hanya ketika diakses.</li>
      </ul>

      <h2>🧪 Cara Menggunakan React.lazy</h2>
      <p>Mendefinisikan komponen lazy dan memuatnya menggunakan pembungkus <code>Suspense</code>:</p>
      <pre>
        <code>{`import React, { Suspense } from "react";

// Dynamic import
const GiantChartComponent = React.lazy(() => import("./GiantChart"));

function MyDashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Suspense fallback={<div>Loading Chart...</div>}>
        <GiantChartComponent />
      </Suspense>
    </div>
  );
}`}</code>
      </pre>

      <h2>⚠️ Wajib Menggunakan Suspense</h2>
      <p>
        Karena komponen dimuat secara asinkron dari server, React memerlukan komponen pembungkus{" "}
        <code>&lt;Suspense&gt;</code> dengan properti <code>fallback</code> untuk menampilkan indikator loading
        selama file JavaScript diunduh.
      </p>

      <div className="summary">
        🎯 <code>React.lazy</code> adalah cara termudah melakukan code-splitting di aplikasi React single-page application (SPA).
      </div>
    </PageLayout>
  );
}
