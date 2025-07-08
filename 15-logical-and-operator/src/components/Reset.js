function Reset({ value, onClick }) {
  return (
    <div>
      {value > 0 && (
        <div>
          <button onClick={onClick}>Reset</button>
        </div>
      )}
    </div>
  );
}
export default Reset;
