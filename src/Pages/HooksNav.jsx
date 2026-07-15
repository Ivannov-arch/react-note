import NavPageLayout from "../Components/NavPageLayout";

const items = [
  { label: "useState()", path: "/use-states-nav", tag: "sub-menu" },
  { label: "onChange()", path: "/on-change" },
  { label: "useEffect()", path: "/use-effect" },
  { label: "useContext()", path: "/use-context" },
  { label: "useRef()", path: "/use-ref" },
  { label: "useReducer()", path: "/use-reducer" },
  { label: "useImperativeHandle()", path: "/use-imperative-handle" },
  { label: "useLayoutEffect()", path: "/use-layout-effect" },
  { label: "useInsertEffect()", path: "/use-insert-effect" },
  { label: "useId()", path: "/use-id" },
  { label: "useTransition()", path: "/use-transition" },
  { label: "useDeferredValue()", path: "/use-deferred-value" },
  { label: "useSyncExternalStore()", path: "/use-sync-external-store" },
];

export default function HooksNav() {
  return (
    <NavPageLayout
      title="React Hooks"
      subtitle="Every built-in hook explained with examples. Pick one to explore."
      items={items}
      accentColor="#6366f1"
    />
  );
}