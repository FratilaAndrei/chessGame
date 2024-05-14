import { getRookMoves } from "./getMoves";

interface RegularMovesParams {
  position: string; // Define a more specific type for position if possible
  piece: string;
  rank: number;
  column: number;
}

const arbiter = {
  getRegularMoves: function ({
    position,
    piece,
    rank,
    column,
  }: RegularMovesParams) {
    return getRookMoves({ position, piece, rank, column });
  },
};

export default arbiter;
