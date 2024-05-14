import actionTypes from "../actionTypes";

type CandidateMove = [number, number];
type GenerateCandidateMovesAction = {
  candidateMoves: CandidateMove[];
};

type MakeNewMoveAction = {
  newPosition: CandidateMove[][];
};

export const makeNewMove = ({ newPosition }: MakeNewMoveAction) => {
  return {
    type: actionTypes.NEW_MOVE,
    payload: { newPosition },
  };
};

export const generateCandidateMoves = ({
  candidateMoves,
}: GenerateCandidateMovesAction) => {
  return {
    type: actionTypes.GENERATE_CANDIDATE_MOVES,
    payload: { candidateMoves },
  };
};
