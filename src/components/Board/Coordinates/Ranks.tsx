import { FC } from "react";
import "./Ranks.css";

interface Props {
  ranks: number[];
}

const Ranks: FC<Props> = ({ ranks }) => {
  return (
    <div className="ranks">
      {ranks.map((rank: number) => (
        <span key={rank}>{rank}</span>
      ))}
    </div>
  );
};

export default Ranks;
