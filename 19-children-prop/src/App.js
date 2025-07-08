import './App.css';
import Wrapper from './components/Wrapper';
function App() {
  return (
    <div className="App">
      <Wrapper color="green">
        <h2>Text inside of the wrapper</h2>
        <button>Click me!</button>
      </Wrapper>
      <Wrapper color="yellow">
        <h2>Text inside of the wrapper</h2>
        <button>Click me!</button>
      </Wrapper>
    </div>
  );
}

export default App;
