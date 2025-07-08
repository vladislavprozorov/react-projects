import Todo from './Todo';
import styles from './TodoList.module.css';
function TodoList({ data, deleteTodo, toggleTodo }) {
  return (
    <div className={styles.todoListContainer}>
      {!data.length && <h1>Туду пуст</h1>}
      {data.map((todo) => (
        <Todo toggleTodo={toggleTodo} deleteTodo={deleteTodo} key={todo.id} todo={todo}></Todo>
      ))}
    </div>
  );
}
export default TodoList;
