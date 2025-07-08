import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import Button from './components/Button';
import Reset from './components/Reset';
function App() {
  const [value, setValue] = useState(0);
  const increaseValue = () => {
    setValue(value + 1);
  };
  const resetValue = () => {
    setValue(0);
  };
  return (
    <div className="App">
      <Counter value={value}></Counter>
      <Button onClick={increaseValue}></Button>
      <Button onClick={increaseValue}></Button>
      <Button onClick={increaseValue}></Button>
      <Button onClick={increaseValue}></Button>
      <Reset
        style={{ backgroundColor: 'lightgreen' }}
        onClick={resetValue}
        value={value}
      ></Reset>
    </div>
  );
}

export default App;
