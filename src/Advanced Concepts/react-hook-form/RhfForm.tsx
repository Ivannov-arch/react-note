import { SubmitHandler, useForm } from "react-hook-form";

type FormFields = {
  email: string;
  password: string;
};

export default function RhfForm() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    defaultValues: {
      email: "default@email.com",
      password: "password",
    },
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(data);
    } catch (error) {
      setError("root", {
        message: "This email is already in use",
      });
    }
  };

  const inputStyle = {
    background: "rgba(255, 255, 255, 0.04)",
    border: "1px solid rgba(255, 255, 255, 0.08)",
    borderRadius: "10px",
    color: "#e2e8f0",
    padding: "10px 14px",
    width: "100%",
    fontSize: "14px",
    outline: "none",
    fontFamily: "inherit",
    transition: "all 0.2s",
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wide">Email</label>
        <input
          style={inputStyle}
          onFocus={(e) => { e.target.style.borderColor = "rgba(99,102,241,0.6)"; e.target.style.boxShadow = "0 0 0 3px rgba(99,102,241,0.1)"; }}
          onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.08)"; e.target.style.boxShadow = "none"; }}
          {...register("email", {
            required: "Email is required",
            validate: (value) => {
              if (!value.includes("@")) {
                return "Email must contain @";
              }
              return true;
            },
          })}
          type="text"
          placeholder="email"
        />
        {errors.email && (
          <div className="text-red-400 text-xs mt-1.5">⚠ {errors.email.message}</div>
        )}
      </div>

      <div>
        <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wide">Password</label>
        <input
          style={inputStyle}
          onFocus={(e) => { e.target.style.borderColor = "rgba(99,102,241,0.6)"; e.target.style.boxShadow = "0 0 0 3px rgba(99,102,241,0.1)"; }}
          onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.08)"; e.target.style.boxShadow = "none"; }}
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
          })}
          type="password"
          placeholder="password"
        />
        {errors.password && (
          <div className="text-red-400 text-xs mt-1.5">⚠ {errors.password.message}</div>
        )}
      </div>

      <button
        disabled={isSubmitting}
        type="submit"
        style={{
          background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
          border: "none",
          borderRadius: "10px",
          color: "#fff",
          padding: "10px 16px",
          fontSize: "14px",
          fontWeight: 600,
          cursor: isSubmitting ? "not-allowed" : "pointer",
          transition: "all 0.2s",
          fontFamily: "inherit",
          marginTop: 8,
        }}
      >
        {isSubmitting ? "Submitting..." : "Submit Form"}
      </button>

      {errors.root && (
        <div className="text-red-400 text-xs mt-2 p-2 bg-red-500/10 border border-red-500/25 rounded-lg">⚠ {errors.root.message}</div>
      )}
    </form>
  );
}
