import RhfForm from "./RhfForm";
import ZodRhf from "./ZodRhf";
import PageLayout from "../../Components/PageLayout";

export default function RhfApp() {
  return (
    <PageLayout
      title="React Hook Form"
      subtitle="Performant, flexible and extensible forms with easy validation."
      accentColor="#ec4899"
    >
      <p>
        <strong>Kenapa Menggunakan React Hook Form?</strong><br />
        React Hook Form mengurangi jumlah re-render komponen secara drastis dengan menggunakan
        controlled/uncontrolled inputs secara efisien. Ini membuat form lebih responsif terutama untuk form yang besar.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
        <div>
          <h2 style={{ marginTop: 0 }}>📝 Standar React Hook Form</h2>
          <p style={{ fontSize: 13, marginBottom: 20 }}>Form basic menggunakan register dan rule validasi bawaan.</p>
          <div className="demo-box">
            <RhfForm />
          </div>
        </div>

        <div>
          <h2 style={{ marginTop: 0 }}>🛡️ RHF + Zod Validation</h2>
          <p style={{ fontSize: 13, marginBottom: 20 }}>Validasi form menggunakan skema deklaratif dari ZodResolver.</p>
          <div className="demo-box">
            <ZodRhf />
          </div>
        </div>
      </div>

      <h2>🧪 Cara Menghubungkan RHF dan Zod</h2>
      <pre>
        <code>{`import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

const { register, handleSubmit } = useForm({
  resolver: zodResolver(schema),
});`}</code>
      </pre>

      <div className="summary">
        🎯 Menggabungkan React Hook Form dengan Zod memberikan validasi tipe statis TypeScript yang aman di level form serta rendering performa tinggi.
      </div>
    </PageLayout>
  );
}
