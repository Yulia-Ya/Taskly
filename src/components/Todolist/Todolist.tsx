import { useSelector } from "react-redux";
import { AddTaskForm } from "../AddTaskForm/AddTaskForm";
import { Task } from "./Task/Task";
import { RootState } from "../../app/store";
import { Button } from "../Button/Button";

export const Todolist = () => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  return (
    <div>
      <AddTaskForm />
      <ul>
        {tasks.map((task) => {
          return <Task key={task.id} task={task} />;
        })}
      </ul>
      <Button/>
    </div>
  );
};
