import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/", icon: "⌂" },
  { name: "Basic", path: "/basic", icon: "◈" },
  { name: "Advanced", path: "/advanced", icon: "◆" },
  { name: "UIs", path: "/UI", icon: "✦" },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-5xl px-4 pt-4">
        <nav
          style={{
            background: "rgba(13, 17, 32, 0.85)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: "16px",
          }}
          className="flex items-center justify-between px-5 py-3 shadow-2xl shadow-black/40"
        >
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div
              style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)" }}
              className="w-7 h-7 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-500/30"
            >
              <span className="text-white text-xs font-black">R</span>
            </div>
            <span className="text-sm font-semibold text-white/90 tracking-tight hidden sm:block">ReactNotes</span>
          </div>

          {/* Links */}
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    style={
                      isActive
                        ? {
                            background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                            boxShadow: "0 0 16px rgba(99,102,241,0.4)",
                          }
                        : {}
                    }
                    className={`flex items-center gap-1.5 px-4 py-1.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "text-white"
                        : "text-slate-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span className="text-xs opacity-70">{link.icon}</span>
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
