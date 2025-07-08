import './App.css';
import BookList from './components/BookList/BookList.jsx';
import BookForm from './components/BookForm/BookForm.jsx';
import BookFilter from './components/BookFilter/BookFilter.jsx';
function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Book Library App</h1>
      </header>
      <main className="app-main">
        <div className="app-left-column">
          <BookForm />
        </div>
        <div className="app-right-column">
          <BookFilter />
          <BookList />
        </div>
      </main>
    </div>
  );
}

export default App;
