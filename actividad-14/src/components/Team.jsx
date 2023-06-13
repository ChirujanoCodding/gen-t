import React from "react";

export function Team({ name, points, big }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>Points: {points}</p>
      <p>Is big? {big ? "yes" : "no"}</p>
    </div>
  );
}
