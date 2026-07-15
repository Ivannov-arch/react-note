import { useEffect, useSyncExternalStore } from "react";
import { fetchPokemons, getState, subscribe } from "./externalStore";
import PageLayout from "../../../Components/PageLayout";

function SyncExternalStoreDemo() {
  const { pokemons } = useSyncExternalStore(subscribe, getState);

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <h3 style={{ margin: "0 0 8px", color: "#e2e8f0" }}>Pokemon List (External Store)</h3>
      <div
        style={{
          maxHeight: 180,
          overflowY: "auto",
          background: "rgba(0,0,0,0.2)",
          borderRadius: 8,
          padding: "8px 12px",
          border: "1px solid rgba(255,255,255,0.05)",
          fontSize: 13,
        }}
      >
        {pokemons.length === 0 ? (
          <p style={{ color: "#64748b", margin: 0 }}>Loading pokemons from API...</p>
        ) : (
          <ul style={{ margin: 0, paddingLeft: 16 }}>
            {pokemons.map((pokemon, index) => (
              <li key={index} style={{ color: "#94a3b8", marginBottom: 2 }}>
                {index + 1}. {pokemon.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <PageLayout
      title="useSyncExternalStore() Hook"
      subtitle="Berlangganan ke store data eksternal di luar React secara aman dengan jaminan concurrent rendering (React 18)."
      accentColor="#6366f1"
    >
      <p>
        <strong>Apa Itu useSyncExternalStore?</strong><br />
        Ini adalah hook khusus untuk membaca dan berlangganan ke sumber data eksternal (third-party stores)
        di luar React, seperti Redux store, browser API (seperti network status), atau global state buatan sendiri.
      </p>

      <h2>🚀 Live Demo</h2>
      <div className="demo-box">
        <SyncExternalStoreDemo />
      </div>

      <h2>📦 Contoh Implementasi Store Eksternal</h2>
      <pre>
        <code>{`let state = { pokemons: [] };
let listeners = [];

export const subscribe = (listener) => {
  listeners.push(listener);
  return () => {
    listeners = listeners.filter((l) => l !== listener);
  };
};

export const getState = () => state;`}</code>
      </pre>

      <h2>⚙️ Membaca Data Store di Komponen</h2>
      <pre>
        <code>{`import { useSyncExternalStore } from "react";
import { subscribe, getState } from "./externalStore";

function PokemonComponent() {
  const { pokemons } = useSyncExternalStore(subscribe, getState);
  return (
    <ul>
      {pokemons.map(p => <li>{p.name}</li>)}
    </ul>
  );
}`}</code>
      </pre>

      <div className="summary">
        🎯 <code>useSyncExternalStore</code> memastikan state sinkron dan terbebas dari masalah "tearing" saat menggunakan fitur Concurrent rendering di React 18+.
      </div>
    </PageLayout>
  );
}
