import { actionTypes } from "./actions";
export const initialState = {
  term: null,
};
const reducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_SEARCH_TERM:
      return {
        ...state,
        term: action.term,
      };
    default:
      return state;
  }
};
export default reducer;
