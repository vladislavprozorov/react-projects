import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import Button from './components/Button';
function App() {
  const [value, setValue] = useState(0);
  const increaseValue = () => {
    setValue(value + 1);
  };
  return (
    <div className="App">
      <Counter value={value}></Counter>
      <Button onClick={increaseValue}></Button>
      <Button onClick={increaseValue}></Button>
      <Button onClick={increaseValue}></Button>
      <Button onClick={increaseValue}></Button>

    </div>
  );
}

export default App;
