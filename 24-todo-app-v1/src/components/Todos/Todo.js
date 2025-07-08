import { RiApps2AddFill } from 'react-icons/ri';
import styles from './Todo.module.css';
function Todo({ todo, deleteTodo, index }) {
  return (
    <div onDoubleClick={() => deleteTodo(index)} className={styles.todo}>
      <RiApps2AddFill className={styles.todoIcon} />
      <div className={styles.todoText}>{todo}</div>
    </div>
  );
}
export default Todo;
