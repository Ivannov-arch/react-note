import Card from "./Card";
import PageLayout from "../../../Components/PageLayout";

export default function AustinReactQueryApp() {
  return (
    <PageLayout
      title="React Query (Austin Davis Demo)"
      subtitle="Menangani server-state asinkron dengan query dependensi dinamis menggunakan useSuspenseQuery dan useQuery."
      accentColor="#06b6d4"
    >
      <p>
        <strong>Konsep yang Dicontohkan:</strong><br />
        Demo ini menggunakan <code>useSuspenseQuery</code> untuk mengambil data user terlebih dahulu.
        Setelah daftar user termuat, id acak dari daftar user terpilih akan digunakan untuk memicu query kedua
        yang memuat postingan milik user tersebut secara dinamis.
      </p>

      <h2>🚀 Live Demo</h2>
      <div className="demo-box" style={{ background: "rgba(17,24,39,0.85)" }}>
        <Card />
      </div>

      <h2>🧪 Cara Kerja Ketergantungan Query</h2>
      <pre>
        <code>{`// 1. Ambil data users dengan Suspense
const { data: users } = useSuspenseQuery(createUsersQueryOptions());

// 2. Ambil data posts berdasarkan id user yang terpilih secara dinamis
const randomId = Math.floor(Math.random() * users.length);
const { data: posts, isPending } = useQuery(
  createPostsQueryOptions(randomId)
);`}</code>
      </pre>

      <div className="summary">
        🎯 Pola ini mempermudah data fetching berantai (dependent queries) di mana parameter query kedua tergantung pada hasil query pertama.
      </div>
    </PageLayout>
  );
}
