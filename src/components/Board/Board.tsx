import { useState } from "react";
import { getCharacter } from "../../helper";
import "./Board.css";
import Columns from "./Coordinates/Columns";
import Ranks from "./Coordinates/Ranks";

const Board = () => {
  const [dropdownDisplay, setDropdownDisplay] = useState(false);

  const showDropdown = () => {
    setDropdownDisplay((prev) => !prev);
  };

  const getTileColor = (rowIndex: number, columnIndex: number) => {
    let tile = "tile ";
    tile += (rowIndex + columnIndex) % 2 === 0 ? "tile--light" : "tile--dark";
    return tile;
  };

  const getTileColorV2 = (rowIndex: number, columnIndex: number) => {
    return (rowIndex + columnIndex) % 2 === 0
      ? "tile--lightV2"
      : "tile--darkV2";
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
    .map((column, columnIndex) => getCharacter(columnIndex));

  return (
    <div className="board">
      <Ranks ranks={ranks} />
      <div className="board-container">
        <div className="tiles">
          {ranks.map((rank, rankIndex) =>
            columns.map((column, columnIndex) => (
              <div
                key={`${rankIndex} - ${columnIndex}`}
                className={boardSkin(rankIndex, columnIndex)}
              ></div>
            ))
          )}
        </div>
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
