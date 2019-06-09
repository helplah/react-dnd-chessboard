import React from "react";
import Square from "./Square";
import Knight from "./Knight";
import { moveKnight } from "./Game";

export default function RenderSquare(i, [knightX, knightY]) {
  const x = i % 8;
  const y = Math.floor(i / 8);
  const isKnightHere = x === knightX && y === knightY;
  const black = (x + y) % 2 === 1;
  const piece = isKnightHere ? <Knight /> : null;

  return (
    <div
      key={i}
      style={{ width: "12.5%", height: "12.5%" }}
      onClick={() => handleSquareClick(x, y)}
    >
      <Square black={black}>{piece}</Square>
    </div>
  );
}

function handleSquareClick(toX, toY) {
  moveKnight(toX, toY);
}
