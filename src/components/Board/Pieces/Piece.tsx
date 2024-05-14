import { FC } from "react";
import {
  FaChessBishop,
  FaChessKing,
  FaChessKnight,
  FaChessPawn,
  FaChessRook,
} from "react-icons/fa";
import { GiChessQueen } from "react-icons/gi";
import arbiter from "../../../arbiter/arbiter";
import { useAppContext } from "../../../contexts/Context";
import { generateCandidateMoves } from "../../../reducer/actions/move";
import "./Pieces.css";

interface Props {
  rank: number;
  column: number;
  piece: string;
}

const Piece: FC<Props> = ({ rank, column, piece }) => {
  const { appState, dispatch } = useAppContext() as any;

  const { turn, position: currentPosition } = appState;

  const onDragStart = (e: any) => {
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", `${piece}, ${rank}, ${column}`);
    setTimeout(() => {
      e.target.style.display = "none";
    }, 0);
    // Using Timeout because otherwise the moment i grab de piece it becomes instantly invisible

    if (turn === piece[0]) {
      const candidateMoves: [number, number][] = arbiter.getRegularMoves({
        position: currentPosition[currentPosition.length - 1],
        piece,
        rank,
        column,
      });

      if (candidateMoves && candidateMoves.length > 0) {
        console.log(candidateMoves);
        dispatch(generateCandidateMoves({ candidateMoves }));
      }
    }
  };

  const onDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    (e.target as HTMLDivElement).style.display = "block";
  };

  return (
    <div
      className={`piece ${piece} p-${rank}${column}`}
      draggable={true}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    >
      {piece === "white-rook" && <FaChessRook className="white-piece" />}
      {piece === "black-rook" && <FaChessRook className="black-piece" />}
      {piece === "black-pawn" && <FaChessPawn className="black-piece" />}
      {piece === "white-pawn" && <FaChessPawn className="white-piece" />}
      {piece === "white-bishop" && <FaChessBishop className="white-piece" />}
      {piece === "black-bishop" && <FaChessBishop className="black-piece" />}
      {piece === "white-horse" && <FaChessKnight className="white-piece" />}
      {piece === "black-horse" && <FaChessKnight className="black-piece" />}
      {piece === "white-queen" && <GiChessQueen className="white-piece" />}
      {piece === "black-queen" && <GiChessQueen className="black-piece" />}
      {piece === "white-king" && <FaChessKing className="white-piece" />}
      {piece === "black-king" && <FaChessKing className="black-piece" />}
    </div>
  );
};

export default Piece;
