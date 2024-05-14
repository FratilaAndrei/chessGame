import actionTypes from "./actionTypes";

export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.NEW_MOVE: {
      let { turn, position } = state;

      turn = turn === "w" ? "b" : "w";

      position = [...position, action.payload.newPosition];
      return { ...state, turn, position };
    }

    case actionTypes.GENERATE_CANDIDATE_MOVES: {
      console.log("Generating candidate moves:", action.payload.candidateMoves);
      return { ...state, candidateMoves: action.payload.candidateMoves };
    }

    default:
      return state;
  }
};
