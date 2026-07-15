import { useState } from "react";
import PostsList1 from "./components/PostsList1";
import PostsList2 from "./components/PostsList2";
import Post from "./components/Post";
import CreatePost from "./components/CreatePost";
import PostListPaginated from "./components/PostListPaginated";
import PostInfinite from "./components/PostInfinite";
import PageLayout from "../../../Components/PageLayout";

export default function WdsReactQueryApp() {
  const [currentPage, setCurrentPage] = useState(<PostsList1 />);
  const [activeTab, setActiveTab] = useState("list1");

  const tabs = [
    { id: "list1", label: "Posts 1", component: <PostsList1 /> },
    { id: "list2", label: "Posts 2", component: <PostsList2 /> },
    { id: "post1", label: "1st Post", component: <Post id={1} message="" /> },
    { id: "create", label: "Create Post", component: <CreatePost setCurrentPage={setCurrentPage} /> },
    { id: "paginated", label: "Paginated", component: <PostListPaginated /> },
    { id: "infinite", label: "Infinite Scroll", component: <PostInfinite /> },
  ];

  const btnStyle = (isActive) => ({
    padding: "6px 12px",
    borderRadius: "8px",
    fontSize: "12px",
    fontWeight: 600,
    cursor: "pointer",
    border: isActive ? "1px solid #06b6d4" : "1px solid rgba(255,255,255,0.08)",
    background: isActive ? "rgba(6,182,212,0.15)" : "rgba(255,255,255,0.03)",
    color: isActive ? "#22d3ee" : "#94a3b8",
    transition: "all 0.15s",
  });

  return (
    <PageLayout
      title="React Query (WDS Demo)"
      subtitle="Eksplorasi fitur-fitur mutakhir TanStack Query: Caching, Mutasi, Pagination, dan Infinite Scroll."
      accentColor="#06b6d4"
    >
      <p>
        <strong>TanStack Query (React Query)</strong> adalah library server-state management yang sangat powerfull.
        Ia menangani caching, de-duplication, background updates, pagination, dan garbage collection secara otomatis.
      </p>

      {/* Tab Navigation Controls */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            style={btnStyle(activeTab === tab.id)}
            onClick={() => {
              setCurrentPage(tab.component);
              setActiveTab(tab.id);
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Embedded Demo Container */}
      <div className="demo-box" style={{ background: "rgba(17,24,39,0.85)" }}>
        {currentPage}
      </div>

      <h2>💡 Mengapa Menggunakan React Query?</h2>
      <ul>
        <li><strong>Zero Boilerplate:</strong> Mengurangi kebutuhan Redux atau Context API untuk mengelola data server.</li>
        <li><strong>Automatic Caching:</strong> Data disimpan di memori dan tidak di-fetch ulang jika masih dianggap segar (fresh).</li>
        <li><strong>Optimistic Updates:</strong> Antarmuka pengguna diperbarui secara instan sebelum server selesai merespon aksi mutasi.</li>
      </ul>

      <div className="summary">
        🎯 React Query mengubah cara kita menangani state asinkron di aplikasi web modern dengan memisahkan client state dan server state secara tegas.
      </div>
    </PageLayout>
  );
}
