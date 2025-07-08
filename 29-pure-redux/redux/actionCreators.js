import getCurrentTime from '../utils/getCurrentTime.js';
import * as actionTypes from './actionTypes.js';
export function addCurrentTime() {
  return {
    type: actionTypes.ADD_CURENT_TIME,
    payload: getCurrentTime(),
  };
}
export function clearTimes() {
  return {
    type: actionTypes.CLEAR_ALL,
  };
}
