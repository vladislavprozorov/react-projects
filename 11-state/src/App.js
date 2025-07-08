import './App.css';
import GenereteRandomNumber from './components/GenerateRandomNumber';
function App() {
  return (
    <div className="App">
      <GenereteRandomNumber maxnum={10}></GenereteRandomNumber>
    </div>
  );
}

export default App;
