export const getCharacter = (columnIndex: number) =>
  String.fromCharCode(columnIndex + 96);

export const createPosition = () => {
  const position = Array(8)
    .fill("")
    .map(() => new Array(8).fill(""));

  // Initialize White pieces (ranks 1 and 2)
  position[0] = [
    "white-rook",
    "white-horse",
    "white-bishop",
    "white-queen",
    "white-king",
    "white-bishop",
    "white-horse",
    "white-rook",
  ];
  position[1] = Array(8).fill("white-pawn");

  // Initialize Black pieces (ranks 7 and 8)
  position[6] = Array(8).fill("black-pawn");
  position[7] = [
    "black-rook",
    "black-horse",
    "black-bishop",
    "black-queen",
    "black-king",
    "black-bishop",
    "black-horse",
    "black-rook",
  ];

  return position;
};

export const copyPosition = (position: [][]) => {
  const newPosition = Array(8)
    .fill("")
    .map(() => new Array(8).fill(""));

  for (let rank = 0; rank < 8; rank++) {
    for (let column = 0; column < 8; column++) {
      newPosition[rank][column] = position[rank][column];
    }
  }
  return newPosition;
};
