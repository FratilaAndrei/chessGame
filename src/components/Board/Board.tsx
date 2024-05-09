import { getCharacter } from "../../helper";
import "./Board.css";

const Board = () => {
  const ranks = Array(8)
    .fill(0)
    .map((rank, rankIndex) => 8 - rankIndex);

  const columns = Array(8)
    .fill(0)
    .map((column, columnIndex) => getCharacter(columnIndex));

  return (
    <div className="board">
      <div className="tiles">
        {ranks.map((rank, rankIndex) =>
          columns.map((column, columnIndex) => (
            <div key={`${rankIndex} - ${columnIndex}`}>
              {rank}
              {column}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Board;
