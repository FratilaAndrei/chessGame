import { useRef, useState } from "react";
import { copyPosition, createPosition } from "../../../helper";
import Piece from "./Piece";

const Pieces = () => {
  const ref = useRef<HTMLDivElement>(null);

  const [currentPosition, setCurrentPosition] = useState(createPosition());

  const calculateCoords = (e: any) => {
    const refCurrent = ref.current;
    if (!refCurrent) return { x: 0, y: 0 }; // Return default values or handle the null case

    const { width, left, top } = refCurrent.getBoundingClientRect();
    const size = width / 8;
    const y = Math.floor((e.clientX - left) / size);
    const x = 7 - Math.floor((e.clientY - top) / size);
    return { x, y };
  };

  const onDrop = (e: any) => {
    const newPosition = copyPosition(currentPosition);
    const { x, y } = calculateCoords(e);

    // Debugging statements
    console.log("Coordinates (x, y):", x, y);

    if (x < 0 || x >= 8 || y < 0 || y >= 8) {
      console.error("Invalid coordinates (x, y):", x, y);
      return;
    }

    const [piece, rankStr, columnStr] = e.dataTransfer
      .getData("text")
      .split(",");
    const column = parseInt(columnStr);
    const rank = parseInt(rankStr);
    console.log("Piece:", piece);
    console.log("Rank:", rank);
    console.log("Column:", column);

    if (!newPosition[x]) {
      console.error("Row is undefined:", x);
      return;
    }

    console.log("Before updating newPosition:", JSON.stringify(newPosition));

    newPosition[rank][column] = "";
    newPosition[x][y] = piece;

    console.log("After updating newPosition:", JSON.stringify(newPosition));

    setCurrentPosition(newPosition);
  };

  const onDragOver = (e: any) => {
    e.preventDefault();
  };

  return (
    <div onDrop={onDrop} onDragOver={onDragOver} className="pieces" ref={ref}>
      {currentPosition.map((r, rank) =>
        r.map((c, column) =>
          currentPosition[rank][column] ? (
            <Piece
              key={rank + "-" + column}
              rank={rank}
              column={column}
              piece={currentPosition[rank][column]}
            />
          ) : null
        )
      )}
    </div>
  );
};

export default Pieces;
