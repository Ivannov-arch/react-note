import NavPageLayout from "../Components/NavPageLayout";

const items = [
  { label: "Props", path: "/props" },
  { label: "Conditional Rendering", path: "/conditional-rendering" },
  { label: "Render Lists", path: "/render-lists" },
  { label: "Click Events", path: "/click-events" },
  { label: "Hooks", path: "/hooks", tag: "sub-menu" },
];

export default function Basic() {
  return (
    <NavPageLayout
      title="Basic Concepts"
      subtitle="Fundamental building blocks of React — start here if you're new."
      items={items}
      accentColor="#22d3ee"
    />
  );
}