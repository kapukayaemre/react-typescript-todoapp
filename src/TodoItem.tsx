import { todoType } from "./appTypes";

type PropsTypes = {
  task: todoType;
  deleteTask(nameToDelete: string): void;
};

function TodoItem({ task, deleteTask }: PropsTypes) {
  return (
    <div className="card">
      <div>
        <p> {task.taskName} </p>
        <p> {task.day} </p>
        <button
          className="deleteButton"
          onClick={() => deleteTask(task.taskName)}
        >
          Sil
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
