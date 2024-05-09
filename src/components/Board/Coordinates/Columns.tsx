import { FC } from "react";
import "./Columns.css";

interface Props {
  columns: string[];
}

const Columns: FC<Props> = ({ columns }) => {
  console.log(columns);
  return (
    <div className="columns">
      {columns.map((column: string) => (
        <span key={column}>{column}</span>
      ))}
    </div>
  );
};

export default Columns;
