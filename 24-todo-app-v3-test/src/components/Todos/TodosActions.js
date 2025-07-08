import React from 'react';
import { RiDeleteBinLine, RiRefreshLine } from 'react-icons/ri';
import Button from '../UI/Button';

const TodosActions = ({
  refreshTodos,
  deleteCompletedTodos,
  completedTodoExists,
}) => {
  return (
    <>
      <Button
        disabled={!completedTodoExists}
        onClick={() => deleteCompletedTodos()}
        title="Delete Completed Todos"
      >
        <RiDeleteBinLine />
      </Button>
      <Button onClick={() => refreshTodos()} title="Clear all">
        <RiRefreshLine />
      </Button>
    </>
  );
};

export default TodosActions;
