import store from './redux/store.js';

import { addCurrentTime, clearTimes } from './redux/actionCreators.js';
const addTime = document.getElementById('addTime');
const timesList = document.getElementById('timesList');
const clearAllTimes = document.getElementById('clearAllTimes');
addTime.addEventListener('click', () => store.dispatch(addCurrentTime()));
clearAllTimes.addEventListener('click', () => store.dispatch(clearTimes()));
store.subscribe(() => {
  timesList.innerHTML = '';
  const times = store.getState();
  times.forEach((time) => {
    let li = document.createElement('li');
    li.innerText = time;
    timesList.appendChild(li);
  });
});
// const unsubscribe = store.subscribe(() =>
//   console.log(`Redux store just changed! ${store.getState()}`)
// );
// store.dispatch({
//   type: 'ADD_CURENT_TIME',
//   payload: 'Vladislav',
// });

// store.dispatch({
//   type: 'ADD_CURENT_TIME',
//   payload: 'Vladislav2',
// });
// unsubscribe();
// store.dispatch({
//   type: 'CLEAR_ALL',
// });

// store.dispatch({
//   type: 'ADD_CURENT_TIME',
//   payload: 'NOVOE VREMYA',
// });
