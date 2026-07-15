import NavPageLayout from "../Components/NavPageLayout";

const items = [
  { label: "Table", path: "/UI/table" },
];

export default function UINav() {
  return (
    <NavPageLayout
      title="UI Components"
      subtitle="Reusable, styled UI building blocks — tables, buttons, and more."
      items={items}
      accentColor="#fb923c"
    />
  );
}
