import { FC } from "react";
import {
  FaChessBishop,
  FaChessKing,
  FaChessKnight,
  FaChessPawn,
  FaChessRook,
} from "react-icons/fa";
import { GiChessQueen } from "react-icons/gi";
import "./Pieces.css";

interface Props {
  rank: number;
  column: number;
  piece: string;
}

const Piece: FC<Props> = ({ rank, column, piece }) => {
  return (
    <div className={`piece ${piece} p-${rank}${column}`}>
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
