import { useState } from 'react';
import styles from './TodoForm.module.css';
function TodoForm({ addTodo }) {
  const [text, setText] = useState('');
  function onSubmitHandler(event) {
    event.preventDefault();
    addTodo(text);
    setText('');
  }
  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={onSubmitHandler}>
        <input
          onChange={(e) => setText(e.target.value)}
          value={text}
          placeholder="Вставьте ваш туду"
        ></input>
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
}
export default TodoForm;
