import React from "react";
import { DragDropContextProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import RenderSquare from "./RenderSquare";

export default function Board({ knightPosition }) {
  const squares = [];
  for (let i = 0; i < 64; i++) {
    squares.push(RenderSquare(i, knightPosition));
  }

  return (
    <DragDropContextProvider backend={HTML5Backend}>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexWrap: "wrap"
        }}
      >
        {squares}
      </div>
    </DragDropContextProvider>
  );
}
