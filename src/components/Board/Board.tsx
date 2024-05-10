import { useState } from "react";
import "./Board.css";
import Columns from "./Coordinates/Columns";
import Ranks from "./Coordinates/Ranks";
import Pieces from "./Pieces/Pieces";

const Board = () => {
  const [dropdownDisplay, setDropdownDisplay] = useState(false);

  const showDropdown = () => {
    setDropdownDisplay((prev) => !prev);
  };

  const getTileColor = (rowIndex: number, columnIndex: number) => {
    let tile = "tile ";
    tile += (rowIndex + columnIndex) % 2 === 0 ? "tile--dark" : "tile--light";
    return tile;
  };

  const getTileColorV2 = (rowIndex: number, columnIndex: number) => {
    return (rowIndex + columnIndex) % 2 === 0
      ? "tile--darkV2"
      : "tile--lightV2";
  };

  const [boardSkin, setBoardSkin] = useState(() => getTileColor);
  const switchToSecondSkin = () => {
    setBoardSkin(() => getTileColorV2);
  };

  const switchToDefaultSkin = () => {
    setBoardSkin(() => getTileColor);
  };

  const ranks = Array(8)
    .fill(0)
    .map((rank, rankIndex) => 8 - rankIndex);

  const columns = Array(8)
    .fill(0)
    .map((column, columnIndex) => columnIndex + 1);

  return (
    <div className="board">
      <Ranks ranks={ranks} />
      <div className="board-container">
        <div className="tiles">
          {ranks.map((rank, rankIndex) =>
            columns.map((column, columnIndex) => (
              <div
                key={`${rankIndex} - ${columnIndex}`}
                className={boardSkin(9 - rankIndex, columnIndex)}
              ></div>
            ))
          )}
        </div>
        <Pieces />
        <Columns columns={columns} />
      </div>
      <div className="skin-dropdown">
        <div
          className="dropdown-menu"
          onClick={showDropdown}
          style={{
            borderRadius: dropdownDisplay ? "10px 10px 0 0" : "",
            borderBottom: dropdownDisplay ? "2px solid" : "",
          }}
        >
          Change Board
        </div>
        {dropdownDisplay && (
          <div className="dropdown-options">
            <div className="dropdown-option" onClick={switchToSecondSkin}>
              Board - 1
            </div>
            <div className="dropdown-option" onClick={switchToDefaultSkin}>
              Board - 2
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Board;
