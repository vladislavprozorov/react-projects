import { useState } from 'react';
import './App.css';
import TodoForm from './components/Todos/TodoForm';
import { v4 as uuidv4 } from 'uuid';
import TodoList from './components/Todos/TodoList';
import TodosActions from './components/Todos/TodosActions';
function App() {
  const [data, setData] = useState([]);
  const addTodoHandler = (text) => {
    const newTodo = {
      text,
      isCompleted: false,
      id: uuidv4(),
    };
    setData([...data, newTodo]);
  };
  const addToggleTodoHandler = (id) => {
    setData(
      data.map((data) =>
        data.id === id
          ? { ...data, isCompleted: !data.isCompleted }
          : { ...data }
      )
    );
  };
  const deleteTodoHandler = (id) => {
    setData(data.filter((data) => data.id !== id));
  };
  const refreshAllTodos = () => {
    setData([]);
  };
  const deleteCompletedTodos = () => {
    setData(data.filter((data) => !data.isCompleted))
  }
  
  const completedTodos = data.filter((data) => data.isCompleted).length;
  return (
    <div className="App">
      <h1>Todo App</h1>

      <TodoForm addTodo={addTodoHandler}></TodoForm>
      {!!data.length && <TodosActions completedTodoExists={!!completedTodos} deleteCompletedTodos={deleteCompletedTodos} refreshTodos={refreshAllTodos} />}
      {data.length ? (
        <TodoList
          deleteTodo={deleteTodoHandler}
          addToggle={addToggleTodoHandler}
          data={data}
        ></TodoList>
      ) : (
        <h1>Todo list is empty</h1>
      )}
      {!!completedTodos && (
        <h3>{`You have completed : ${completedTodos} ${
          completedTodos === 1 ? 'todo' : 'todos'
        }`}</h3>
      )}
    </div>
  );
}

export default App;
