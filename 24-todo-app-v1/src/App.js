import { useState } from 'react';
import './App.css';
import TodoList from './components/Todos/TodoList';

import TodoForm from './components/Todos/TodoForm';
function App() {
  const [data, setData] = useState([]);
  function addTodoHandler(text) {
    setData([...data, text]);
  }
  function deleteTodoHandler(index) {
    setData(data.filter((_, idx) => idx !== index));
  }
  return (
    <div className="App">
      <h1>Туду приложение</h1>
      <TodoForm addTodo={addTodoHandler} />
      <TodoList deleteTodo={deleteTodoHandler} data={data} />
    </div>
  );
}

export default App;
