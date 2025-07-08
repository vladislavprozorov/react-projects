import Todo from './Todo';
import styles from './TodoList.module.css';
function TodoList({ data, deleteTodo }) {
  return (
    <div className={styles.todoListContainer}>
      {!data.length && <h1>Туду пуст</h1>}
      {data.map((todo, index) => (
        <Todo
          index={index}
          deleteTodo={deleteTodo}
          key={index}
          todo={todo}
        ></Todo>
      ))}
    </div>
  );
}
export default TodoList;
