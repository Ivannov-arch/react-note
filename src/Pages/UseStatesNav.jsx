import NavPageLayout from "../Components/NavPageLayout";

const items = [
  { label: "useState()", path: "/use-state" },
  { label: "Update Array", path: "/use-state/update-array" },
  { label: "Update Object", path: "/use-state/update-object" },
  { label: "Update Array of Objects", path: "/use-state/update-array-of-object" },
  { label: "Counter Example", path: "/use-state/counter" },
];

export default function UseStatesNav() {
  return (
    <NavPageLayout
      title="useState()"
      subtitle="Managing local component state — arrays, objects, and complex structures."
      items={items}
      accentColor="#f59e0b"
    />
  );
}