import NavPageLayout from "../Components/NavPageLayout";

const items = [
  { label: "by Austin Davis", path: "/react-query/austin" },
  { label: "by Web Dev Simplified", path: "/react-query/wds" },
];

export default function ReactQueryApp() {
  return (
    <NavPageLayout
      title="React Query"
      subtitle="Server-state management, caching, and async data fetching made easy."
      items={items}
      accentColor="#06b6d4"
    />
  );
}
