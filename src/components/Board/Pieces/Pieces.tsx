import Piece from "./Piece";

const Pieces = () => {
  const position = Array(8)
    .fill("")
    .map(() => new Array(8).fill(""));

  for (let i = 0; i < 8; i++) {
    position[i][6] = "black-pawn";
    position[i][1] = "white-pawn";
  }

  position[0][0] = "white-rook";
  position[1][0] = "white-horse";
  position[2][0] = "white-bishop";
  position[3][0] = "white-queen";
  position[4][0] = "white-king";
  position[5][0] = "white-bishop";
  position[6][0] = "white-horse";
  position[7][0] = "white-rook";

  position[0][7] = "black-rook";
  position[1][7] = "black-horse";
  position[2][7] = "black-bishop";
  position[3][7] = "black-queen";
  position[4][7] = "black-king";
  position[5][7] = "black-bishop";
  position[6][7] = "black-horse";
  position[7][7] = "black-rook";

  return (
    <div className="pieces">
      {position.map((r, rank) =>
        r.map((c, column) =>
          position[rank][column] ? (
            <Piece
              key={rank + "-" + column}
              rank={rank}
              column={column}
              piece={position[rank][column]}
            />
          ) : null
        )
      )}
    </div>
  );
};

export default Pieces;
