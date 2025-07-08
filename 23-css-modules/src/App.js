import './App.css';
import Info from './components/Info';
import Person from './components/Person';
function App() {
  return (
    <div className="App">
      <Info />
      <h1>Hello from App component</h1>|<h2>HELLO</h2>
      <button className="my-button">Hello from App button</button>
      <Person/>
    </div>
  );
}

export default App;
