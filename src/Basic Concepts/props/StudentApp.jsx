import Student from "./Student";
import PageLayout from "../../Components/PageLayout";

function StudentDemo() {
  return (
    <div className="demo-box">
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around", gap: 16 }}>
        <Student name="Spongebob" age={30} isStudent={true} />
        <Student name="Patrick" age={42} isStudent={false} />
        <Student name="Squidward" age={350} isStudent={false} />
        <Student name="Sandy" age={27} isStudent={true} />
        <Student />
      </div>
    </div>
  );
}

export default function AppStudent() {
  return (
    <PageLayout
      title="Props di React"
      subtitle="Cara mengirim data dari komponen induk ke komponen anak — seperti parameter pada fungsi."
      accentColor="#22d3ee"
    >
      <p>
        <strong>Apa Itu Props?</strong><br />
        Props (singkatan dari <code>properties</code>) adalah cara untuk{" "}
        <strong>mengirim data dari komponen induk ke komponen anak</strong>.
        Ibaratnya seperti "parameter" pada fungsi — sekali dikirim, tidak bisa diubah dari dalam komponen anak.
      </p>

      <h2>🧩 Contoh Komponen dengan Props</h2>
      <p>
        Misalnya kita punya komponen <code>&lt;Student /&gt;</code> yang
        menerima <strong>name</strong>, <strong>age</strong>, dan{" "}
        <strong>isStudent</strong> sebagai props.
      </p>

      <pre>
        <code>{`function Student({ name, age, isStudent }) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Student: {isStudent ? "Yes" : "No"}</p>
    </div>
  );
}`}</code>
      </pre>

      <h2>🧪 Penggunaan di Komponen Induk</h2>
      <p>Kita bisa menggunakannya seperti ini di komponen <code>AppStudent</code>:</p>
      <pre>
        <code>{`<Student name="Spongebob" age={30} isStudent={true} />`}</code>
      </pre>

      <h2>✅ Validasi Props dengan propTypes</h2>
      <p>Kita bisa mengecek tipe data yang dikirim menggunakan <code>prop-types</code>:</p>
      <pre>
        <code>{`import propTypes from 'prop-types';

Student.propTypes = {
  name: propTypes.string,
  age: propTypes.number,
  isStudent: propTypes.bool,
};`}</code>
      </pre>

      <h2>🛡️ Default Props (Fallback)</h2>
      <p>Kalau kita tidak mengirim props, React bisa pakai nilai default:</p>
      <pre>
        <code>{`Student.defaultProps = {
  name: "Guest",
  age: 0,
  isStudent: false,
};`}</code>
      </pre>

      <h2>🚀 Live Demo</h2>
      <StudentDemo />

      <div className="summary">
        🎯 Props adalah cara utama untuk menyusun data antar komponen di React. Cocok untuk
        membangun UI yang dinamis dan reusable.
      </div>
    </PageLayout>
  );
}
