import NavPageLayout from "../Components/NavPageLayout";

const items = [
  { label: "useCustomHook()", path: "/use-custom-hooks" },
  { label: "Error Boundary", path: "/error-boundaries" },
  { label: "Performance Optimization", path: "/performance-optimization", tag: "sub-menu" },
  { label: "State Managers", path: "/state-managers", tag: "sub-menu" },
  { label: "React Query", path: "/react-query", tag: "sub-menu" },
  { label: "Zod", path: "/zod" },
  { label: "React Hook Form", path: "/react-hook-form" },
];

export default function Advanced() {
  return (
    <NavPageLayout
      title="Advanced Concepts"
      subtitle="Go deeper — performance, state management, data fetching, and validation."
      items={items}
      accentColor="#a78bfa"
    />
  );
}
