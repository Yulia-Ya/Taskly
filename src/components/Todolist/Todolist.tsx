import { useSelector } from "react-redux";
import { AddTaskForm } from "../AddTaskForm/AddTaskForm";
import { Task } from "./Task/Task";
import { RootState } from "../../app/store";
import { Button } from "../Button/Button";
import { useAppDispatch } from "../common/hooks/useAppDispatch";
import { changeTasksFilter, removeCompletedTasks, selectActiveTodosCount } from "./Task/taskSlice";

export const Todolist = () => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const filter = useSelector((state: RootState) => state.tasks.filter);
  const activeTodosCount = useSelector(selectActiveTodosCount);

  const dispatch = useAppDispatch();

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") {
      return task.completed;
    } else if (filter === "active") {
      return !task.completed;
    }
    return true;
  });

  return (
    <div>
      <AddTaskForm />
      <ul>
        {filteredTasks.map((task) => {
          return <Task key={task.id} task={task} />;
        })}
      </ul>
      <span>
        {" "}
        {activeTodosCount} {activeTodosCount === 1 ? "item" : "items"} left
      </span>
      <Button title="All" onClick={() => dispatch(changeTasksFilter({ filter: "all" }))} />
      <Button title="Active" onClick={() => dispatch(changeTasksFilter({ filter: "active" }))} />
      <Button title="Completed" onClick={() => dispatch(changeTasksFilter({ filter: "completed" }))} />
      <Button title="Clear completed" onClick={() => dispatch(removeCompletedTasks())} />
    </div>
  );
};
