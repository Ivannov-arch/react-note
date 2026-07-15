import React from "react";

const CounterButton = React.memo(({ onClick, label }) => {
  console.log(`Rendering button: ${label}`);
  return (
    <button
      onClick={onClick}
      style={{
        padding: "8px 16px",
        borderRadius: 8,
        border: "1px solid rgba(255,255,255,0.1)",
        cursor: "pointer",
        fontSize: 13,
        fontWeight: 600,
        background: "rgba(255,255,255,0.05)",
        color: "#e2e8f0",
        transition: "all 0.15s",
      }}
    >
      {label}
    </button>
  );
});

CounterButton.displayName = "CounterButton";

export default CounterButton;