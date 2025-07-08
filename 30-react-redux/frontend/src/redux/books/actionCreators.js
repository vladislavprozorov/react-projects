import * as actionTypes from './actionTypes.js';
export const addBook = (book) => {
  return {
    type: actionTypes.ADD_BOOK,
    payload: book,
  };
};
export const deleteBook = (id) => {
  return {
    type: actionTypes.DELETE_BOOK,
    payload: id,
  };
};
