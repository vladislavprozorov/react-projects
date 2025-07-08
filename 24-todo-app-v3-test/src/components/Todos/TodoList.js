import Todo from './Todo';
import styles from './TodoList.module.css';
const TodoList = ({ data, addToggle, deleteTodo}) => {
  return (
    <div className={styles.todoListContainer}>
      {data.map((data) => (
        <Todo deleteTodo={deleteTodo} addToggle={addToggle} key={data.id} data={data}></Todo>
      ))}
    </div>
  );
};

export default TodoList;
