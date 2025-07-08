import { RiDeleteBinLine, RiRefreshLine } from 'react-icons/ri';
import Button from '../UI/Button';
function TodosActions({
  resetTodos,
  deleteCompletedTodos,
  completedTodoExists,
}) {
  return (
    <>
      <Button onClick={resetTodos} title="Clear Todos">
        <RiRefreshLine />
      </Button>
      <Button
        onClick={deleteCompletedTodos}
        title="Delete Completed Todos"
        disabled={!completedTodoExists}
      >
        <RiDeleteBinLine />
      </Button>
    </>
  );
}
export default TodosActions;
