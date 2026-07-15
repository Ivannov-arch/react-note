import NavPageLayout from "../Components/NavPageLayout";

const items = [
  { label: "React.memo()", path: "/performances/react-memo" },
  { label: "useMemo()", path: "/performances/use-memo" },
  { label: "useCallback()", path: "/performances/use-callback" },
  { label: "React.lazy()", path: "/performances/react-lazy" },
  { label: "React Window (Virtual List)", path: "/performances/react-window" },
];

export default function PerformanceOptimization() {
  return (
    <NavPageLayout
      title="Performance Optimization"
      subtitle="Make your React app faster — memoization, lazy loading, and virtualization."
      items={items}
      accentColor="#34d399"
    />
  );
}
