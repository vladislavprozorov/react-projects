const App = ({ initialButtonText, initialClassesList }) => {
  const [textButton, setTextButton] = React.useState(initialButtonText);
  const [initialStyle, setNewStyle] = React.useState(initialClassesList);
  const changeButton = () => {
    setTextButton(`Hello from React ${Math.random()}`);
    setNewStyle('green-btn');
  };
  return (
    <div className="app">
      <button className={initialStyle} onClick={changeButton}>
        {textButton}
      </button>
    </div>
  );
};
const container = document.getElementById('react-app');
const root = ReactDOM.createRoot(container);
root.render(<App initialButtonText="Tab me!" initialClassesList="" />);
