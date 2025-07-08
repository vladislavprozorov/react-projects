import * as actionTypes from './actionTypes.js';
const initialState = [];

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_CURENT_TIME:
      return [...state, action.payload];
    case actionTypes.CLEAR_ALL:
      return [];
    default:
      return state;
  }
}
export default reducer;
