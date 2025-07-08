import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import TodoList from './components/Todos/TodoList';
import TodoForm from './components/Todos/TodoForm';
import TodosActions from './components/Todos/TodosActions';
function App() {
  const [data, setData] = useState([]);
  function addTodoHandler(text) {
    const newTodo = {
      text,
      isCompleted: false,
      id: uuidv4(),
    };
    setData([...data, newTodo]);
  }
  function deleteTodoHandler(id) {
    setData(data.filter((data) => data.id !== id));
  }
  function toggleTodoHandler(id) {
    setData(
      data.map((data) =>
        data.id === id
          ? { ...data, isCompleted: !data.isCompleted }
          : { ...data }
      )
    );
  }
  const completedTodoCounts = data.filter((data) => data.isCompleted).length;
  function resetTodos() {
    return setData([]);
  }
  function deleteCompletedTodosHandler() {
    return setData(data.filter((data) => !data.isCompleted));
  }
  return (
    <div className="App">
      <h1>Туду приложение</h1>
      <TodoForm addTodo={addTodoHandler} />
      {!!data.length && (
        <TodosActions
          completedTodoExists={!!completedTodoCounts}
          deleteCompletedTodos={deleteCompletedTodosHandler}
          resetTodos={resetTodos}
        />
      )}
      <TodoList
        toggleTodo={toggleTodoHandler}
        deleteTodo={deleteTodoHandler}
        data={data}
      />
      {!!completedTodoCounts && (
        <h2>{`Вы выполнили ${completedTodoCounts} ${
          completedTodoCounts > 1 ? 'тудус' : 'туду'
        }`}</h2>
      )}
    </div>
  );
}

export default App;
