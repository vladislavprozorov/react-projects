import React, { useState } from 'react';
import styles from './TodoForm.module.css';
const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState('');
  function sendTodoForm(event) {
    event.preventDefault();
    addTodo(text);
    setText('');
  }
  return (
    <form className={styles.todoFormContainer} onSubmit={sendTodoForm}>
      <input
        onChange={(e) => setText(e.target.value)}
        value={text}
        placeholder="Input your Todo here"
      ></input>
      <button type="submit">Submit</button>
    </form>
  );
};

export default TodoForm;
