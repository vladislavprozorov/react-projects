import { RiAwardLine, RiDeleteBin2Line } from 'react-icons/ri';
import { FaCheck } from 'react-icons/fa';
import styles from './Todo.module.css';

const Todo = ({ data, addToggle, deleteTodo }) => {
  return (
    <div
      className={`${styles.todo} ${
        data.isCompleted ? styles.completedTodo : ''
      }`}
    >
      <RiAwardLine className={styles.todoIcon} />
      <h3 className={styles.todoText}>{data.text}</h3>
      <FaCheck
        onClick={() => addToggle(data.id)}
        className={styles.checkIcon}
      />
      <RiDeleteBin2Line
        onClick={() => deleteTodo(data.id)}
        className={styles.deleteIcon}
      />
    </div>
  );
};

export default Todo;
