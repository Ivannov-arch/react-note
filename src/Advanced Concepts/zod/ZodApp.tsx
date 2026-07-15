import React from "react";
import ZodBasic from "./zod";
import ZodObjects from "./ZodObject";
import ZodTuples from "./ZodTuples";
import ZodUnions from "./ZodUnion";
import ZodRecordType from "./RecordType";
import ZodMapType from "./MapType";
import ZodSetType from "./SetType";
import ZodPromiseType from "./PromiseType";
import AdvancedValidation from "./AdvancedValidation";
import HandlingError from "./HandlingZodError";
import PageLayout from "../../Components/PageLayout";

export default function ZodApp() {
  return (
    <PageLayout
      title="Zod Schema Validation"
      subtitle="TypeScript-first schema declaration and validation library."
      accentColor="#3b82f6"
    >
      <p>
        <strong>Apa Itu Zod?</strong><br />
        Zod adalah library deklarasi skema dan validasi tipe yang berfokus pada TypeScript.
        Dengan Zod, Anda mendefinisikan skema sekali dan Zod akan melacak tipe data
        secara otomatis untuk mencegah kesalahan data runtime.
      </p>

      <div className="callout">
        💡 <strong>Info:</strong> Validasi sedang berjalan di latar belakang. Silakan buka **Developer Tools (F12) → Console** untuk melihat output pengujian schema Zod secara langsung!
      </div>

      <h2>🧪 Skema Dasar Zod</h2>
      <pre>
        <code>{`import { z } from "zod";

const UserSchema = z.object({
  username: z.string().min(3),
  age: z.number().optional(),
  email: z.string().email(),
});

// Parsing data
const result = UserSchema.safeParse({
  username: "me",
  email: "invalid-email",
});`}</code>
      </pre>

      {/* Embedded validation elements that log to console */}
      <div style={{ display: "none" }}>
        <ZodBasicMemo />
        <ZodObjectsMemo />
        <ZodTuplesMemo />
        <ZodUnionsMemo />
        <ZodRecordTypeMemo />
        <ZodMapTypeMemo />
        <ZodSetTypeMemo />
        <ZodPromiseTypeMemo />
        <AdvancedValidationMemo />
        <HandlingErrorMemo />
      </div>

      <div className="summary">
        🎯 Zod memungkinkan validasi data runtime yang aman dan sinkronisasi tipe statis (static type inference) di TypeScript dengan sangat mudah.
      </div>
    </PageLayout>
  );
}

const ZodBasicMemo = React.memo(ZodBasic);
const ZodObjectsMemo = React.memo(ZodObjects);
const ZodTuplesMemo = React.memo(ZodTuples);
const ZodUnionsMemo = React.memo(ZodUnions);
const ZodRecordTypeMemo = React.memo(ZodRecordType);
const ZodMapTypeMemo = React.memo(ZodMapType);
const ZodSetTypeMemo = React.memo(ZodSetType);
const ZodPromiseTypeMemo = React.memo(ZodPromiseType);
const AdvancedValidationMemo = React.memo(AdvancedValidation);
const HandlingErrorMemo = React.memo(HandlingError);
