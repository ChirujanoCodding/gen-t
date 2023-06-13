import React from "react";

export function TeamGrid({ children }) {
  return (
    <div>
      {children.map((team, i) => (
        <ul key={i}>{team}</ul>
      ))}
    </div>
  );
}
