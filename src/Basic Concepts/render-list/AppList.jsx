import List from "./List";
import PageLayout from "../../Components/PageLayout";

export default function Page() {
  const fruits = [
    { id: 1, name: "Apple", calories: 95 },
    { id: 2, name: "Orange", calories: 45 },
    { id: 3, name: "Banana", calories: 105 },
    { id: 4, name: "Coconut", calories: 159 },
    { id: 5, name: "Pineapple", calories: 37 },
  ];

  const vegetables = [
    { id: 6, name: "Potatoes", calories: 110 },
    { id: 7, name: "Celery", calories: 15 },
    { id: 8, name: "Carrots", calories: 25 },
    { id: 9, name: "Corn", calories: 63 },
    { id: 10, name: "Broccoli", calories: 20 },
  ];

  fruits.sort((a, b) => a.name.localeCompare(b.name));
  vegetables.sort((a, b) => a.calories - b.calories);

  return (
    <PageLayout
      title="Render Lists di React"
      subtitle="Cara menampilkan data berulang dari array menggunakan .map() — daftar buah, produk, user, dll."
      accentColor="#34d399"
    >
      <p>
        <strong>Apa itu Render Lists?</strong><br />
        Render Lists adalah cara menampilkan data berulang seperti array menggunakan{" "}
        <code>.map()</code> di React. Contohnya: daftar buah, produk, user, dll.
      </p>

      <h2>🔁 Cara Render List</h2>
      <ul>
        <li>Gunakan <code>.map()</code> untuk membuat elemen React dari array.</li>
        <li>Pastikan setiap elemen punya <code>key</code> unik (biasanya pakai <code>id</code>).</li>
        <li>Bisa digabung dengan props agar komponen reusable.</li>
      </ul>

      <h2>📦 Komponen List</h2>
      <p>Komponen <code>&lt;List /&gt;</code> menerima props:</p>
      <ul>
        <li><code>category</code>: nama kategori seperti "Fruits" atau "Vegetables".</li>
        <li><code>items</code>: array data yang akan ditampilkan.</li>
      </ul>

      <h2>🧪 Contoh Penggunaan</h2>
      <pre>
        <code>{`const fruits = [
  { id: 1, name: "Apple", calories: 95 },
  { id: 2, name: "Orange", calories: 45 },
];

// Sort sebelum render
fruits.sort((a, b) => a.name.localeCompare(b.name));

// Render dengan kondisi
{fruits.length > 0 && <List items={fruits} category="Fruits" />}
`}</code>
      </pre>

      <h2>🚀 Live Demo</h2>
      <div className="demo-box">
        {fruits.length > 0 && <List items={fruits} category="Fruits" />}
        {vegetables.length > 0 && <List items={vegetables} category="Vegetables" />}
      </div>

      <h2>💡 Tips Tambahan</h2>
      <ul>
        <li>Urutkan list sebelum di-render agar tampilannya rapi.</li>
        <li>Filter list jika hanya ingin menampilkan data tertentu (misalnya kalori &lt; 100).</li>
        <li>Gunakan <code>propTypes</code> untuk validasi tipe data props.</li>
      </ul>

      <div className="summary">
        🎯 Render list adalah konsep dasar namun sangat penting di React. Dengan{" "}
        <code>.map()</code> + <code>props</code>, kamu bisa membuat tampilan dinamis dan fleksibel.
      </div>
    </PageLayout>
  );
}
