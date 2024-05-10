import { FC } from "react";
import { getCharacter } from "../../../helper";
import "./Columns.css";

interface Props {
  columns: number[];
}

const Columns: FC<Props> = ({ columns }) => {
  return (
    <div className="columns">
      {columns.map((column: number) => (
        <span key={column}>{getCharacter(column)}</span>
      ))}
    </div>
  );
};

export default Columns;
