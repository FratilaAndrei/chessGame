import { useRef } from "react";
import { useAppContext } from "../../../contexts/Context";
import { copyPosition } from "../../../helper";
import { makeNewMove } from "../../../reducer/actions/move";
import Piece from "./Piece";

const Pieces = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { appState, dispatch } = useAppContext() as any;

  const currentPosition = appState.position[appState.position.length - 1];

  const calculateCoords = (e: React.MouseEvent<HTMLDivElement>) => {
    const refCurrent = ref.current;
    if (!refCurrent) return { x: 0, y: 0 }; // Return default values or handle the null case

    const { width, left, top } = refCurrent.getBoundingClientRect();
    const size = width / 8;
    const y = Math.floor((e.clientX - left) / size);
    const x = 7 - Math.floor((e.clientY - top) / size);
    return { x, y };
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    const newPosition = copyPosition(currentPosition);
    const { x, y } = calculateCoords(e);

    // Debugging statements

    if (x < 0 || x >= 8 || y < 0 || y >= 8) {
      console.error("Invalid coordinates (x, y):", x, y);
      return;
    }

    const [piece, rankStr, columnStr] = e.dataTransfer
      .getData("text")
      .split(",");

    // const isValidMove = appState.candidatesMoves?.some(
    //   (m) => m[0] === x || m[1] === y
    // );

    // if (isValidMove) {
    //   const rank = parseInt(rankStr);
    //   const column = parseInt(columnStr);
    //   newPosition[rank][column] = "";
    //   newPosition[x][y] = piece;
    //   dispatch(makeNewMove({ newPosition }));
    // } else {
    //   console.error("Invalid move:", x, y);
    // }

    const column = parseInt(columnStr);
    const rank = parseInt(rankStr);

    if (!newPosition[x]) {
      console.error("Row is undefined:", x);
      return;
    }

    newPosition[rank][column] = "";
    newPosition[x][y] = piece;

    dispatch(makeNewMove({ newPosition }));
  };

  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <div onDrop={onDrop} onDragOver={onDragOver} className="pieces" ref={ref}>
      {currentPosition.map((r: string[], rank: number) =>
        r.map((c: string, column: number) =>
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
