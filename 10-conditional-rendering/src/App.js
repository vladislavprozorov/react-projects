import './App.css';
import PetInfo from './components/PetInfo.js';
function App() {
  return (
    <div className="App">
      <PetInfo hasPet pet="cat" age={6}></PetInfo>
      <PetInfo hasPet={false} pet="dog" age={7}></PetInfo>
    </div>
  );
}

export default App;
