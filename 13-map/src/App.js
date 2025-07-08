import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import Button from './components/Button';
function App() {
  const [value, setValue] = useState(0);
  const increaseValue = () => {
    setValue(value + 1);
  };
  const texts = ['Click me', 'Tab me', 'Click please', 'Click btn','CLICK','cluck'];
  return (
    <div className="App">
      <Counter value={value}></Counter>
      {texts.map((text,index) => {
        return <Button onClick={increaseValue} key={index} text={text}></Button>
      })}
      
    </div>
  );
}

export default App;
