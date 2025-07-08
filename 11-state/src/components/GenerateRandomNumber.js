import { useState } from 'react';
import generateNum from '../utils/generateNum';
function GenereteRandomNumber({maxnum}) {
  const [initialNum, generateNewNum] = useState(generateNum(maxnum));
  const changeNum = () => {
    generateNewNum(generateNum(maxnum));
  };
  return (
    <div>
      <h1>{initialNum}</h1>
      <button onClick={changeNum}>Click to generate random number! </button>
    </div>
  );
}
export default GenereteRandomNumber;
