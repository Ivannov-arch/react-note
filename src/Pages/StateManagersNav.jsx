import NavPageLayout from "../Components/NavPageLayout";

const items = [
  { label: "Zustand", path: "/state-managers/zustand", tag: "lightweight" },
  { label: "Redux", path: "/state-managers/redux", tag: "classic" },
];

export default function StateManagers() {
  return (
    <NavPageLayout
      title="State Managers"
      subtitle="Compare global state solutions — from tiny Zustand to full Redux."
      items={items}
      accentColor="#f43f5e"
    />
  );
}
